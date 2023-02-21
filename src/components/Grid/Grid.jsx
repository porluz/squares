import { useGridContext } from "../../shared/contexts/gridContext";
import { Square } from "../Square";
import "./Grid.css";

function useGrid() {
  const {
    data: { squares },
  } = useGridContext();
  return {
    data: {
      squares,
    },
  };
}

function Grid() {
  const {
    data: { squares },
  } = useGrid();
  return (
    <ul className="square-grid">
      {squares.map((square, index) => {
        return <Square square={square} index={index} key={index} />;
      })}
    </ul>
  );
}

export { Grid };
