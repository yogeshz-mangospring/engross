import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);
  const [clear, setClear] = useState();
  const [flag, setFlag] = useState(false);
  const [reverseCounter, Setreverse] = useState();
  const [reverseFlag, setReversFlag] = useState(false);

  if (counter === 0) {
    clearInterval(reverseCounter);
  }

  const start = () => {
    setClear(
      setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1)
      },1000)
    );
    setFlag(true);
    setReversFlag(false)

  }


  const reverse = () => {
    setReversFlag(true)
    clearInterval(clear)
    setFlag(true)
    Setreverse(
      setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1)
      }, 1000)
    )
  }

  const pause = () => {
    clearInterval(clear);
    clearInterval(reverseCounter);
    setFlag(false);
    setReversFlag(false)
  }

  const reset = () => {
    clearInterval(clear);
    clearInterval(reverseCounter);
    setCounter(0);
    setFlag(false);
  }

  return (
    <div className="container mt-2">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1>Engross</h1>
        <h3 className="mt-4">Counter : {counter}</h3>
        <div className="mt-4">
          <button className={`btn btn-success me-2 ${(flag && counter!== 0) ? 'disabled' : ''}`} onClick={start}>Start</button>
          <button className={`btn btn-dark me-2 ${(counter === 0 || reverseFlag)  ? 'disabled' : ''}`} onClick={reverse}>Reverse</button>
          <button className={`btn btn-danger me-2 ${counter === 0 && 'disabled'}`} onClick={pause}>Pause</button>
          <button className={`btn btn-warning ${counter === 0 && 'disabled'}`} onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
