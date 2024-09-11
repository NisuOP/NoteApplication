import React from "react";
import BSNA from "./BSNA/BSNA";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="notes-app">
        <h2 className="app-header">
          *** BSNA(Build a Simple Notes Application) ***
        </h2>
      </div>
      <BSNA />
    </div>
  );
};

export default App;
