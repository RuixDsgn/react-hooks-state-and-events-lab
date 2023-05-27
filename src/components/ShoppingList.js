import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [selectedCategory, setSelectedCategory] = useState("All")

const handleSelect = (e) => {
  console.log(e.target.value)
  setSelectedCategory(e.target.value)
}

const filteredItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select value={selectedCategory} onChange={handleSelect} name="filter">
          <option value="All" onChange={handleSelect}>All</option>
          <option value={"Produce"} onChange={handleSelect}>Produce</option>
          <option value="Dairy" onChange={handleSelect}>Dairy</option>
          <option value="Dessert" onChange={handleSelect}>Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
