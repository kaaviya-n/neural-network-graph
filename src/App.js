import { useState, useEffect } from "react";
import "./App.css";
import NeuralGraph from "./neuralGraph";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const modelPath = "./model.onnx";

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return <div>{isLoading ? "Loading..." : <NeuralGraph />}</div>;
}

export default App;
