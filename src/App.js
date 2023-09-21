import { useState, useEffect } from "react";
import "./App.css";
import NeuralGraph from "./Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return <div>{isLoading ? "Loading..." : <NeuralGraph />}</div>;
}

export default App;
