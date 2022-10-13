import { useState } from "react";

import Cell from "./Cell";

function Field() {
  const [items, setItems] = useState(
    [
      { id: 1, number: "1", stat: "" },
      { id: 1, number: "1", stat: "" },
      { id: 2, number: "2", stat: "" },
      { id: 2, number: "2", stat: "" },
      { id: 3, number: "3", stat: "" },
      { id: 3, number: "3", stat: "" },
      { id: 4, number: "4", stat: "" },
      { id: 4, number: "4", stat: "" },
      { id: 5, number: "5", stat: "" },
      { id: 5, number: "5", stat: "" },
      { id: 6, number: "6", stat: "" },
      { id: 6, number: "6", stat: "" },
      { id: 7, number: "7", stat: "" },
      { id: 7, number: "7", stat: "" },
      { id: 8, number: "8", stat: "" },
      { id: 8, number: "8", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    items[id].stat = "active";
    setItems([...items]);
    if (prev === -1) {
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="field">
      {items.map((item, index) => (
        <Cell key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Field;
