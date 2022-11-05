import React, { useState } from "react";

const FilteredDishes = (props) => {
  let [allMenus, setAllMenu] = useState(props.allMenus);
  let [filteredDishes, setFilteredDishes] = useState([]);

  //showFilteredDishes on Click
  function showFilteredDishesHandler(category) {
    let  filteredDishesAre = allMenus
      .filter((item) => {
        return item.strCategory === category
      })
      .map((item) => {
        return (
          <li>
            <img src={item.strMealThumb} alt="" />
            <h2>{item.strCategory}</h2>
          </li>
        );
      });
      setFilteredDishes(filteredDishesAre)

  }

  //Lets show all the categories
  let allCategories = props.allmenuCategorie.map((item) => {
    return (
      <li
        onClick={() => {
          showFilteredDishesHandler(item.strCategory);
        }}
      >
        {item.strCategory}
      </li>
    );
  });

  return (
    <div className="filtered-dishes">
      <div className="container">
        <div className="text-center">
          <h2>choose your dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            voluptatum quis commodi dolor? Dolore nesciunt dolores, beatae
            deserunt ratione similique dicta ad culpa nulla quisquam dolorem,
            sapiente repellat soluta itaque.
          </p>
        </div>
        <div className="filterd-dishes">
          <ul>{allCategories}</ul>
        </div>
        <div className="filtered-dishes-results">
          <ul className="flex flex-wrap gap-30">{filteredDishesAre}</ul>
        </div>
      </div>
    </div>
  );
};

export default FilteredDishes;
