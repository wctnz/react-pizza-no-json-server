import { useState } from "react";

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => setActiveItem(null)}
        >
          Все
        </li>
        { items &&  items.map((name, index) => (
          <li
            className={activeItem === name ? "active" : ""}
            onClick={() => setActiveItem(name)}
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
