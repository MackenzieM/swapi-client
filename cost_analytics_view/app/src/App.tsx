import React, {useEffect, useState} from 'react';
import { PacmanLoader } from "react-spinners";
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
        { costData.length > 0 ? Chart(costData) : <div className={"loadingIndicator"}>
            <PacmanLoader
                color={"rgb(27, 158, 119)"}
                size={50}
            />
        </div> }
    </div>
  );
}

export default App;
