import React, {useEffect, useState} from 'react';
import './App.css';
import Chart from "./components/Chart.tsx";
import CostApiClient, { defaultCostResponse } from "./client/cost-api-client.ts";

function App() {
    const costApiClient = new CostApiClient();
    let [costData, setCostData] = useState(defaultCostResponse);

    useEffect(() => {
        costApiClient.getCosts().then((response => setCostData(response)));
    }, []);

    return (
    <div className="App">
      <header className="App-header">
        <h1>
          Galactic Spending Report
        </h1>
      </header>
        { Chart(costData) }
    </div>
  );
}

export default App;