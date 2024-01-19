import React, { useState, useEffect } from "react";
import styles from "../styles/ColorPicker.module.css";
export default function ColorPicker({ selected, update }) {
  const [color, setColor] = useState("#000000");
  const [value, setValue] = useState(" ");
  //In the Function i need to input the variable that need to be set inorder to set the Value that has been needed
  function handleColor(event) {
    //Inorder to be pass the value that the setColor needs -
    //- i need to put a parameter and the target value inorder to execute the data that has been needed
    setColor(event.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    setColor(e.target.value);
  }
  return (
    <>
      <div className={styles.maincontent}>
        <h1 className={styles.header}>Color Picker</h1>

        <div
          className={styles.boxtext}
          style={{ backgroundColor: color }}
        ></div>
        <form action="">
          <label htmlFor="color">
            Choose A Color:
            <input type="text" id="color" onChange={handleColor} />
            <button onClick={handleSubmit}>Submit</button>
          </label>
        </form>
      </div>
    </>
  );
}
