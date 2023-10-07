import React, {useState } from "react";
import Tours from "./Tours";
import toursData from "./tours.json";
import "./components/style.scss";

function App() {
  const [tours, setTours] = useState(toursData);

  const fetchTours = () => {
    setTours(toursData);
  }

  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  }

  if(tours.length === 0) {
    return (
      <main>
        <div className="refresh">
          <h3>No Tours Left</h3>
          <button onClick={() => fetchTours()}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App