function Cell({ item, id, handleClick }) {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <div className={"cell" + itemClass} onClick={() => handleClick(id)}>
      <span>{item.number}</span>
    </div>
  );
}

export default Cell;
