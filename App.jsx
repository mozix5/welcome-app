import React, { useState } from "react";
import Welcome from "./Welcome";

var click = false;
export default function App() {
  const [name, setName] = useState("");
  const [updateName, setUpdateName] = useState("");
  function handleChange(event) {
    const value = event.target.value;
    setName(value);
  }
  function handleClick() {
    setUpdateName(name);
    setName("");
    click = true;
  }
  return (
    <div className="center">
      <input
        onChange={handleChange}
        type="text"
        placeholder="enter your name"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
      {click && <Welcome nameValue={updateName} />}
      <p>
        Assignment done by <strong>Mosin</strong> Reg no:
        <strong>12020702</strong>
      </p>
    </div>
  );
}
