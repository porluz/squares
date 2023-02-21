/* eslint-disable react/prop-types */
import "./SquareHeader.css";
import { useSquareHeader } from "./useSquareHeader";

function SquareHeader({ headerTextValue, index }) {
  const {
    actions: { handleHeaderTextChange },
  } = useSquareHeader({ index });

  return (
    <div className="square-header">
      <div className="square-header-text">{headerTextValue}</div>
      <div className="square-header-input-container">
        <input
          className="square-header-input"
          type="text"
          value={headerTextValue}
          onChange={handleHeaderTextChange}
        ></input>
      </div>
    </div>
  );
}

export { SquareHeader };
