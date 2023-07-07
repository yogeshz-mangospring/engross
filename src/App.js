import { useContext, useEffect, useState } from "react";
import "./App.css"


const App = (props) => {

  const [counter, setCounter] = useState({ min: 0, sec: 0 });
  const [clear, setClear] = useState();
  const [flag, setFlag] = useState(false);
  const [reverseCounter, Setreverse] = useState();
  const [reverseFlag, setReversFlag] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('themeMode') === 'dark' ? 'dark' : 'light'
  );


  useEffect(() => {
    localStorage.setItem('themeMode', theme)
  },[theme])

  if (counter.sec === 0 && counter.min === 0) {
    clearInterval(reverseCounter);
  }

  const switchMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  

  const start = () => {
    setClear(
      setInterval(() => {
        setCounter((prevCounter) => ({
          min: prevCounter.sec === 59 ? (prevCounter.min + 1) : prevCounter.min,
          sec: prevCounter.sec === 59 ? counter.sec = 0 : prevCounter.sec + 1
        }));
      }, 1000)
    );
    setFlag(true);
    setReversFlag(false);
  }

  const reverse = () => {
    clearInterval(clear);
    setReversFlag(true);
    setFlag(true);
    Setreverse(
      setInterval(() => {
        setCounter((prevCounter) => ({
          min: prevCounter.sec === 60 ? (prevCounter.min - 1) : prevCounter.min,
          sec: prevCounter.sec === 0 ? prevCounter.sec = 60 : prevCounter.sec - 1,
        }))
      }, 1000)
    );
  }

  const pause = () => {
    clearInterval(clear);
    clearInterval(reverseCounter);
    setFlag(false);
    setReversFlag(false);
  }

  const reset = () => {
    clearInterval(clear);
    clearInterval(reverseCounter);
    setCounter({ min: 0, sec: 0 });
    setFlag(false);
  }

  return (
    <div className={`container-root ${theme}`}>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1>Engross</h1>
        <button type="button" className="btn btn-primary" onClick={switchMode}>Switch color Theme</button>
        <h3 className="mt-4">{counter.min === 0 ? "00" : counter.min < 10 ? `0${counter.min}` : counter.min} : {counter.sec === 0 ? "00" : counter.sec < 10 ? `0${counter.sec}` : counter.sec}</h3>
        <div className="mt-4">
          <button className={`btn btn-success me-2 ${(flag && (counter.min !== 0 || counter.sec !== 0)) ? 'disabled' : ''}`} onClick={start}>Start</button>
          <button className={`btn btn-dark me-2 ${((counter.min === 0 && counter.sec === 0) || reverseFlag) ? 'disabled' : ''}`} onClick={reverse}>Reverse</button>
          <button className={`btn btn-danger me-2 ${(counter.min === 0 && counter.sec === 0) && 'disabled'}`} onClick={pause}>Pause</button>
          <button className={`btn btn-warning ${(counter.min === 0 && counter.sec === 0) && 'disabled'}`} onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
