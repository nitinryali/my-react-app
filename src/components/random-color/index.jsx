import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
  
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "60vh",
        background: color,
        
      }}
    >
    <div
      style={{
        justifyContent:"center",
        display:"flex",
        gap:"10px",
        alignItems:"center",
        padding:"20px",
      }}    
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
    </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "30px",
          marginTop: "10px",
          flexDirection  :'column',
          gap :'10px'
        }}
      >
        <h3 >{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h3>{color}</h3>
      </div>
    </div>
  );
}