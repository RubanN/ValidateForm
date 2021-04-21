import React, { useState } from "react";

const Hook5 = () => {
  const [item, setItem] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItem = (event) => {
    event.preventDefault();
    setItem([
      ...item,
      {
        id: item.length,
        name: itemName,
      },
    ]);
    setItemName("");
  };
  return (
    <>
      <form onClick={addItem}>
        <label>
          <input
            name="item"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
      </form>
      <ul>
          {item.map(val=>(
              <li key={val.id}>{val.name}</li>
          ))}
      </ul>
    </>
  );
};
export default Hook5;
