import {useState} from "react";
import './App.css'

function App() {
    const    [count,seTCount]=useState(0);

  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=>seTCount(count=>count+1)}>
            {count}
        </button>
          <button onClick={()=>seTCount(0)}>
              RESET
          </button>
        <button onClick={()=>seTCount(count=>count+10)}>
            Increment By 10
        </button>

      </div>

    </>
  )
}

export default App
