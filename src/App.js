import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);
  const [clear, setClear] = useState();
  const [flag, setFlag] = useState(false)

  const start = () => {
    setClear(
      setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1)
      },1000)
    );
    setFlag(true);
  }

  const pause = () => {
    clearInterval(clear);
    setFlag(false);
  }

  const reset = () => {
    clearInterval(clear);
    setCounter(0);
    setFlag(false);
  }

  return (
    <div className="container mt-2">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1>Engross</h1>
        <h3 className="mt-4">Counter : {counter}</h3>
        <div className="mt-4">
          <button className={`btn btn-success me-2 ${flag ? 'disabled' : ''}`} onClick={start}>Start</button>
          <button className={`btn btn-danger me-2 ${counter === 0 && 'disabled'}`} onClick={pause}>Pause</button>
          <button className={`btn btn-warning ${counter === 0 && 'disabled'}`} onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
