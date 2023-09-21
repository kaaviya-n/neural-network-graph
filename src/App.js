import { useState, useEffect } from "react";
import NeuralGraph from "./Home";

import Loader from "./assets/loader.svg";

import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="imgWrapper">
          <img src={Loader} alt="loading..." />
        </div>
      ) : (
        <NeuralGraph />
      )}
    </div>
  );
}

export default App;
