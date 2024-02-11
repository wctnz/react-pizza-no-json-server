import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions/filters";

const Categories = ({ activeCategory, items }) => {
  const dispatch = useDispatch();

  const handlePizzatypeClick = (index) => {
    dispatch(setCategory(index))
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => handlePizzatypeClick(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => handlePizzatypeClick(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
