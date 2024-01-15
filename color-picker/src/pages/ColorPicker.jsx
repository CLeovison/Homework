import React, { useState, useEffect } from "react";
import styles from "../styles/ColorPicker.module.css";
export default function ColorPicker({ selected }) {
  const [color, setColor] = useState("#FFFFFF");

  //In the Function i need to input the variable that need to be set inorder to set the Value that has been needed
  function handleColor(event) {
    //Inorder to be pass the value that the setColor needs -
    //- i need to put a parameter and the target value inorder to execute the data that has been needed
    setColor(event.target.value);
  }

  return (
    <>
      <div className={styles.maincontent}>
        <h1 className={styles.header}>Color Picker</h1>

        <p >qweqwewq</p>
        <form action="">
          <label htmlFor="color">
            Select A Color:
            <input
              type="color"
              id="color"
              value={color}
              onChange={handleColor}
            />
          </label>
        </form>
      </div>
    </>
  );
}
