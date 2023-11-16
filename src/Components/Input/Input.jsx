import React, { useState } from "react";
import { useRef } from "react";

function Input(props) {
  const inputBox = useRef();

  //console.log(searchTodos);

  return (
    <div className="p-3">
      <div>
        <input
          type="text"
          placeholder="Search task here"
          className="p-3 w-full border border-slate-400 "
          value={props.searchString}
          onChange={(e) => {
            props.setSearchString(e.target.value);
          }}
        ></input>
      </div>

      <div className="p-3 mt-5 flex justify-around">
        <input
          type="text"
          placeholder="Enter task here"
          className="p-3 w-[90%] border border-slate-400 focus:outline-none"
          ref={inputBox}
        />
        <button
          className="cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-[50%] "
          onClick={() => {
            props.handler(inputBox.current.value);
            inputBox.current.value = "";
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Input;
