import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, [datas]);

  return (
    <div className="App">
      <h1>React App</h1>
      {!datas.length ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {datas.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
