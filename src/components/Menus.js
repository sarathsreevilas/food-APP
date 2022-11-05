import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";

function Menus() {
  const [menu, setMenu] = useState([]);
  const [menuCategory, setMenuCategory] = useState([]);

  //Get all menu
  async function getAllTheMenus() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API_URL);
    let data = await response.json();
    setMenu(data.meals);
  }
  async function getAllTheCategories() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let categoryData = await response.json();
    setMenuCategory(categoryData.categories);
  }

  useEffect(() => {
    getAllTheMenus();
    getAllTheCategories();
  }, []);

  return (
    <div>
      <Hero />
      <SpecialDishes specialMenu={menu} />
      <FilteredDishes allmenuCategorie={menuCategory} allMenus = {menu} />
    </div>
  );
}
export default Menus;
