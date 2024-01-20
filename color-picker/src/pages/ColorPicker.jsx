import React, { useState, useEffect } from "react";
import styles from "../styles/ColorPicker.module.css";
export default function ColorPicker({ selected, update,submit }) {
  
  const [value, setValue] = useState(() => {
    try {
      const colorPicks = localStorage.getItem("todos");
      return colorPicks? JSON.parse(colorPicks) : [];
    } catch (error) {
      console.error("Error reading from local storage", error);
      return [];
    }
  });
  //In the Function i need to input the variable that need to be set inorder to set the Value that has been needed

  useEffect(() =>{
    const colorPicks = localStorage.getItem("display");
    if (colorPicks) {
      setValue(JSON.parse(colorPicks));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("display", JSON.stringify(value));
  }, [value]);
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
