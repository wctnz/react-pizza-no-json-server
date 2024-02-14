import React, { useEffect, useState } from "react";
import { Categories, PizzaBlock, SortPopup } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";
import pizzasList from "../assets/db.json";

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const sortArr = (arr) => {
    let res;
    if (sortBy === "name") {
      res = arr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    } else {
      res = arr.sort((a, b) => a[sortBy] - b[sortBy]);
    }
    return res;
  };

  console.log("category, sortBy", category, sortBy);

  useEffect(() => {
    dispatch(
      setPizzas(
        category === null
          ? pizzasList.pizzas
          : pizzasList.pizzas.filter((pizza) => pizza.category === category)
      )
    );
  }, [category, sortBy]);

  const handleAddPizzaToCard = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  console.log("items", items);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClick={(name) => console.log(name)}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup
          activeSortType={sortBy}
          items={[
            { name: "популярности", type: "rating" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "name" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
          sortArr(items).map((item) => (
            <PizzaBlock
              onClickAddPizza={handleAddPizzaToCard}
              key={item.id}
              addedCount={cartItems[item.id] && cartItems[item.id].items.length}
              {...item}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
