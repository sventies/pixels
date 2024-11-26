import { FC, useState } from "react";

interface Props {
  drawingColor: string;
}

const Pixel: FC<Props> = ({ drawingColor }) => {
  const [color, setColor] = useState("white");
  return (
    <div
      //
      style={{ background: color }}
      className="pixel"
      onMouseDown={() => setColor(drawingColor)}
      onMouseEnter={() => {
        if (window.mouseDown) {
          setColor(drawingColor);
        }
      }}
    ></div>
  );
};

export default Pixel;
