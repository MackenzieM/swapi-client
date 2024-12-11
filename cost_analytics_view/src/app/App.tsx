import React, {useEffect, useState} from 'react';
import { PacmanLoader } from "react-spinners";
import './App.css';
import Chart from "./components/Chart.tsx";
import CostApiClient, { defaultCostResponse } from "./client/cost-api-client.ts";

function App() {
    const costApiClient = new CostApiClient();
    let [costData, setCostData] = useState(defaultCostResponse);
    let [sortMode, setSortMode] = useState("episode_id");

    useEffect(() => {
        costApiClient.getCosts().then((response => setCostData(response)));
    }, []);

    const toggleSortMode = () => sortMode === "episode_id" ? setSortMode("release_date") : setSortMode("episode_id")

    return (
    <div className="App">
      <header className="App-header">
        <h1>
          Galactic Spending Report
        </h1>
      </header>
        { costData.length > 0 ? Chart(costData, sortMode) : <div className={"loadingIndicator"}>
            <PacmanLoader
                color={"rgb(27, 158, 119)"}
                size={50}
            />
        </div> }

        {costData.length > 0 && (<div className={"displayControls"}>
            <label>
                <span>{sortMode === "episode_id" ? "Sorted By Episode" : "Sorted By Release"}</span>
                <button onClick={toggleSortMode}>Toggle Chronology</button>
            </label>
            <p>The data shows that galactic spending on starship, when viewed by either chronology, is not trending significantly upward.</p>
        </div>)}
    </div>
  );
}

export default App;
