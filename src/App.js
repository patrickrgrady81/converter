


// https://stackoverflow.com/questions/64991791/usestate-react-hook

import React, { useState } from "react"
import './App.css';

function App(props) {
  const [userData, setUserData] = useState("");
  const [userOption, setUserOption] = useState("ftoc");
  const [compValue, setCompValue] = useState("0");

  const handleChange = e => { 
    setUserData(e.target.value)
  }

  const handleOption = e => { 
    console.log(e)
    setUserOption(e.target.value)
  }

  const handleClick = e => { 
    // console.log(userData)
    // console.log(userOption)
    // console.log(compValue)
    switch (userOption) { 
      case "ftoc":
        const cel = (userData - 32) / 1.8
        if (!isNaN(cel)) {
          setCompValue(cel)
        } else { 
          setCompValue("Error")
        }
        break 
      case "ctof":
        const far = userData * 1.8 + 32
        if (!isNaN(far)) {
          setCompValue(far)
        } else { 
          setCompValue("Error")
        }
        break
      default:
        setCompValue("Error")

    }
  }

  return (
    <div className="App">
      <div>
        Value<input type="text" onChange={ handleChange }/>
        <select onChange={ handleOption } className="tab">
          <option value="ftoc">F to C degrees</option>
          <option value="ctof">C to F degrees</option>
        </select>
        <button onClick={handleClick}>Go</button>
      </div>
      <h2 className="display">{compValue}</h2>
    </div>
  );
}

export default App;
