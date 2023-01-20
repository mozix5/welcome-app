import React, { useState } from "react";
import Welcome from "./Welcome";
var val = {};
var click = false;
export default function App() {
  const [name, setName] = useState("");
  const [updateName, setUpdateName] = useState("");
  function handleChange(event) {
    const value = event.target.value;
    setName(value);
  }
  function handleClick() {
    name === "" ? (click = false) : (click = true);
    setUpdateName(name);
    setName("");
  }
  return (
    <div className="center">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Name"
        value={name}
      />
      <button style={val} onClick={handleClick}>
        Submit
      </button>
      {click && <Welcome nameValue={updateName} />}
      <footer>Assignment done by Mosin Reg no: 12020702</footer>
    </div>
  );
}
