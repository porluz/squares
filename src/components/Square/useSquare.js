import { useState } from "react";
import { useGridContext } from "../../shared/contexts/gridContext";

function useSquare({ index }) {
  const {
    data: { squares, currentDraggedIndex },
    actions: { setCurrentDraggedIndex, setSquares },
  } = useGridContext();
  const [isDraggedOver, setDraggedOver] = useState(false);

  const handleDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (currentDraggedIndex === -1) {
      setCurrentDraggedIndex(index);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // swap
    if (currentDraggedIndex !== index) {
      const copy = [...squares];
      let tmp = copy[index];
      copy[index] = copy[currentDraggedIndex];
      copy[currentDraggedIndex] = tmp;
      setSquares(copy);
    }
    if (currentDraggedIndex !== -1) {
      setCurrentDraggedIndex(-1);
    }
    if (isDraggedOver) {
      setDraggedOver(false);
    }
  };

  const handleDragOver = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (!isDraggedOver) {
      setDraggedOver(true);
    }
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (isDraggedOver) {
      setDraggedOver(false);
    }
  };

  const handleDragEnd = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (currentDraggedIndex !== -1) {
      setCurrentDraggedIndex(-1);
    }
  };

  const className = isDraggedOver ? "square-card square-card-dragged-over" : "square-card";

  return {
    data: {
      className,
    },
    actions: {
      setCurrentDraggedIndex,
      handleDrag,
      handleDrop,
      handleDragOver,
      handleDragLeave,
      handleDragEnd,
      handleDragEnter,
    },
  };
}

export { useSquare };
