/* eslint-disable react/prop-types */
import { SquareHeader } from "../SquareHeader";
import { useSquare } from "./useSquare";
import "./Square.css";

function Square({ square, index }) {
  const {
    data: { className },
    actions: { handleDrag, handleDrop, handleDragOver, handleDragLeave, handleDragEnter },
  } = useSquare({ index });

  return (
    <li className={className}>
      <div
        className={"square"}
        draggable="true"
        onDrag={handleDrag}
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <SquareHeader headerTextValue={square.headerTextValue} index={index} />
        <div className="square-content">
          <div>{square.value}</div>
        </div>
      </div>
    </li>
  );
}

export { Square };
