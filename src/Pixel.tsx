import { FC } from "react";

interface Props {
  color: string;
  onMouseDown: () => void;
}

const Pixel: FC<Props> = ({ color, onMouseDown }) => {
  return (
    <div
      style={{ background: color }}
      className="pixel"
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      onMouseEnter={() => window.mouseDown && onMouseDown()}
    ></div>
  );
};

export default Pixel;
