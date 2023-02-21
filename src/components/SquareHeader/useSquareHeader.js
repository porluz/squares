import { useGridContext } from "../../shared/contexts/gridContext";
import "./SquareHeader.css";

function useSquareHeader({ index }) {
  const {
    data: { squares },
    actions: { setSquares },
  } = useGridContext();

  const handleHeaderTextChange = (event) => {
    const copy = [...squares];
    copy[index].headerTextValue = event.target.value;
    setSquares(copy);
  };

  return {
    data: {
      squares,
    },
    actions: {
      setSquares,
      handleHeaderTextChange,
    },
  };
}

export { useSquareHeader };
