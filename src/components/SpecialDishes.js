function SpecialDishes(props) {
  let maxSpecialDishes = 8;

  let specialMenus = props.specialMenu.map((menuItem, index) => {
    if (index < maxSpecialDishes) {
      return (
        <li>
          <img src={menuItem.strMealThumb} className="br-10" alt="" />
          <h3>{menuItem.strMeal}</h3>
        </li>
      );
    }
  });

  return (
    <section className="special-dishes">
      <div className="container">
        <div className="special-dishes-content text-center">
          <h2>Our special dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem
            quam quo quod saepe, magni deleniti velit, sit reprehenderit
            officiis placeat unde. Ab cum recusandae odit corporis, laborum
            quisquam ullam
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-30">{specialMenus}</ul>
        </div>
      </div>
    </section>
  );
}
export default SpecialDishes;
