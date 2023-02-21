import { useGridContext } from "../../shared/contexts/gridContext";

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

export { useGrid };
