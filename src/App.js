import './App.css';
import { useState } from "react";

function App() {
  const [resp, setResp] = useState();

  const handleClick = () =>{
    var requestOptions = {
      method: 'GET',
    };
    
    fetch("http://localhost:8000/", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.message)
        setResp(result.message)
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          REACT JS !
        </p>

        <button onClick={handleClick}>click here</button>

        { resp &&
          <p>
            RESPONSE FROM API : {resp}
          </p>
        }
        
      </header>
    </div>
  );
}

export default App;
