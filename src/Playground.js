import { useState, useEffect } from "react";

export const Playground = () => {
  const [colors, setColors] = useState([]);

  //   useEffect(() => {
  //     setColors;
  //   });

  return (
    <div>
      <input />
      <button
        onClick={() => {
          setColors(["green", "blue"]);
        }}
      >
        Submit Color
      </button>

      <p>Here are my favorite colors:</p>
      <p>{colors.length ? colors : "I have none"}</p>
    </div>
  );
};
