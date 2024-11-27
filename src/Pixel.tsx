import { FC, useEffect, useRef } from "react";

interface Props {
  color: string;
  onMouseDown: () => void;
}

const Pixel: FC<Props> = ({ color, onMouseDown }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const div = ref.current;
    div?.addEventListener("pointerdown", (e) => {
      // console.log("down");
      onMouseDown();
      // div.style.background = "green";
      // console.log("attempt release implicit capture");
      div.releasePointerCapture(e.pointerId); // <- Important!
    });
    div?.addEventListener("pointerenter", () => {
      onMouseDown();
      // console.log("enter");
      // div.style.background = "yellow";
    });
    div?.addEventListener("pointerleave", () => {
      // console.log("leave");
      // div.style.background = "gray";
    });
  }, [onMouseDown]);

  return (
    <div
      style={{ background: color }}
      className="pixel"
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      onTouchMove={onMouseDown}
      onMouseEnter={() => window.mouseDown && onMouseDown()}
    ></div>
  );
};

export default Pixel;
