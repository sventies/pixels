import { useRef } from "react";
import { ReactInfiniteCanvas, ReactInfiniteCanvasHandle, COMPONENT_POSITIONS } from "react-infinite-canvas";

// import { COMPONENT_POSITIONS } from "./helpers/constants";
// import ReactDOM from "react-dom";

const InfiniteCanvas = () => {
  const canvasRef = useRef<ReactInfiniteCanvasHandle>();
  return (
    <>
      <div style={{ width: "90vw", height: "90vh", border: "1px solid red" }}>
        <ReactInfiniteCanvas
          ref={canvasRef}
          onCanvasMount={(mountFunc: ReactInfiniteCanvasHandle) => {
            mountFunc.fitContentToView({ scale: 1 });
          }}
          customComponents={[
            {
              component: (
                <button
                  onClick={() => {
                    canvasRef.current?.fitContentToView({ scale: 1 });
                  }}
                >
                  fitToView
                </button>
              ),
              position: COMPONENT_POSITIONS.TOP_LEFT,
              offset: { x: 120, y: 10 },
            },
          ]}
        >
          <div style={{ width: "200px", height: "200px", background: "red" }}>asdasdsdas</div>
        </ReactInfiniteCanvas>
      </div>
    </>
  );
};

// ReactDOM.render(<InfiniteCanvas />, document.getElementById("root"));
export default InfiniteCanvas;
