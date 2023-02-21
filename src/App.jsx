import { Component } from "react";
import "./App.css";
import { Layout } from "./Layout";
import { GridContextProvider } from "./shared/contexts/gridContext";

class App extends Component {
  render() {
    return (
      <GridContextProvider>
        <Layout />
      </GridContextProvider>
    );
  }
}

export default App;
