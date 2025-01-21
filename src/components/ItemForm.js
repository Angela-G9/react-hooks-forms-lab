import React, { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Dessert");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: `${Date.now()}`, name, category };
    onItemFormSubmit(newItem);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Dessert">Dessert</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Fruit">Fruit</option>
      </select>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
