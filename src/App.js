import React, { useState, useEffect } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import Weather from './components/weather'
import './App.css';

function App() {

  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    });
    
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3e95e0f0bc9584beee7c51d87dfb27ca`)
    .then(res => res.json())
    .then(result => {
      setData(result)
      console.log(result);
    });
  }
  fetchData()
  }, [lat, long])
  

  

  return (

    
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div>
          <Dimmer active>
            <Loader>Loading...</Loader>
          </Dimmer>
        </div>
      )}
      
    </div>
  );
}

export default App;
