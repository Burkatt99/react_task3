import React from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <Timer time="10" timeauto="20" step="2" />
    </div>
  );
}

export default App;
