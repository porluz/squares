/* eslint-disable react/prop-types */
import { useState } from "react";
import { GridContext } from "./gridContext";

const GRID_SIZE = 12;

const initialItems = new Array(GRID_SIZE).fill(0).map((_, index) => {
  return { value: index, headerTextValue: "" };
});

function GridContextProvider({ children }) {
  const [currentDraggedIndex, setCurrentDraggedIndex] = useState(-1);
  const [squares, setSquares] = useState(initialItems);

  const contextValue = {
    data: {
      currentDraggedIndex,
      squares,
    },
    actions: {
      setCurrentDraggedIndex,
      setSquares,
    },
  };
  return <GridContext.Provider value={contextValue}>{children}</GridContext.Provider>;
}

export { GridContextProvider };
