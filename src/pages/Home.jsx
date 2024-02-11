import React, { useEffect } from "react";
import { Categories, PizzaBlock, SortPopup } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const handleAddPizzaToCard = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

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
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "name" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
          items.map((item) => (
            <PizzaBlock
              onClickAddPizza={handleAddPizzaToCard}
              key={item.id}
              addedCount={ cartItems[item.id] && cartItems[item.id].items.length  }
              {...item}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
