import React from 'react';
import './App.css';
import Chart from "./components/Chart.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Galactic Spending Report
        </h1>
      </header>
        <Chart></Chart>
    </div>
  );
}

export default App;
