import { useContext } from "react";
import { GridContext } from "./gridContext";

function useGridContext() {
  const contextValue = useContext(GridContext);
  if (contextValue === null) {
    throw Error("Context has not been provided!");
  }
  
  return contextValue;
}

export { useGridContext };