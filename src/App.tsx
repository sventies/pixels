import { useState } from "react";
import "./App.css";
import Pixel from "./Pixel";

declare global {
  interface Window {
    mouseDown: boolean;
  }
}

const nx = 32;
const ny = 32;

const arrx = Array.from({ length: nx }, (_, i) => i);
const arry = Array.from({ length: ny }, (_, i) => i);

window.mouseDown = false;
document.body.onmousedown = function () {
  window.mouseDown = true;
};
document.body.onmouseup = function () {
  window.mouseDown = false;
};

const COLORS = ["white", "black", "tomato"];

function App() {
  const [drawingColor, setDrawingColor] = useState("black");

  return (
    <>
      <h1>Pixels</h1>
      <div className="grid">
        {arry.map((y) => (
          <div key={y} className="row">
            {arrx.map((x) => (
              <Pixel key={x} drawingColor={drawingColor} />
            ))}
          </div>
        ))}
      </div>
      <div className="colors">
        {COLORS.map((color) => (
          <div
            key={color}
            className="pixel"
            style={{
              border: color === drawingColor ? "2px solid #08f" : "2px solid transparent",
              background: color,
            }}
            onClick={() => {
              setDrawingColor(color);
            }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
