import React, { useState, useEffect } from "react";
import styles from "../styles/ColorPicker.module.css";
export default function ColorPicker({ selected, update,submit }) {
  const [color, setColor] = useState("#000000");
  const [value, setValue] = useState(" ");
  //In the Function i need to input the variable that need to be set inorder to set the Value that has been needed

 
  return (
    <>
      <div className={styles.maincontent}>
        <h1 className={styles.header}>Color Picker</h1>

        <div
          className={styles.boxtext}
          style={{ backgroundColor: update }}
        ></div>
        <form action="">
          <label htmlFor="color">
            Choose A Color:
            <input type="text" id="color" onChange={e => submit(e.target.value)} />
            <button onClick={update}>Submit</button>
          </label>
        </form>
      </div>
    </>
  );
}
