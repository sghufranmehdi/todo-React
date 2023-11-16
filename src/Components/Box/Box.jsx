import React from "react";
import Item from "../Item/Item";

function Box(props) {
  const items = props.searchedTodoList.map((singleData, key) => {
    return (
      <Item
        key={key}
        id={key}
        item={singleData.item}
        time={singleData.time}
        removeHandler={props.removeHandler}
      />
    );
  });
  return <div className="p-3">{items}</div>;
}

export default Box;
