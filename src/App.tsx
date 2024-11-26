import { useEffect, useState } from "react";
import "./App.css";
import Pixel from "./Pixel";
import { ColorGrid, ColorList } from "./schema";
import { useAccount, useCoState } from "./main";
import { ID } from "jazz-tools";

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

const getWhiteRow = () => Array.from({ length: nx }, () => "white") as ColorList;

const wr = getWhiteRow();

function App() {
  const [drawingColor, setDrawingColor] = useState("black");
  const { me } = useAccount();
  const [id, setId] = useState<ID<ColorGrid> | undefined>(undefined);
  const grid = useCoState(ColorGrid, id) as ColorGrid | undefined;

  useEffect(() => {
    const id = new URL(window.location.href).searchParams.get("grid") as ID<ColorGrid> | null;
    if (id) {
      setId(id);
    }
  }, [me]);

  const create = () => {
    arry.map(() => getWhiteRow());

    const newGrid = ColorGrid.create(
      arry.map(() => ColorList.create(wr, { owner: me })),

      { owner: me }
    );
    setId(newGrid.id);
    window.history.pushState({}, "", `?grid=${newGrid.id}`);
  };

  const setColor = (color: string, x: number, y: number) => {
    if (grid) {
      const row = grid._refs[x].value;
      if (row) row[y] = color;
    }
  };

  return (
    <>
      <h1>Pixels</h1>
      <div className="grid">
        {arry.map((y) => (
          <div key={y} className="row">
            {arrx.map((x) => (
              <Pixel key={x} color={grid?.[x]?.[y] || "white"} onMouseDown={() => setColor(drawingColor, x, y)} />
            ))}
          </div>
        ))}
      </div>
      <button onClick={create}>Create</button>
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
