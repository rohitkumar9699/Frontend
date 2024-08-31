import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState("jaipur");
  const [weather, setWeather] = useState();
  // const [loading,setLoading]= useState(false)

  let getValue = (event) => {
    event.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
      .then((res) => res.json())
      .then((finalRes) => {
        // setLoading(true)
        if (finalRes.cod === "404") {
          setWeather(undefined);
        } else {
          setWeather(finalRes);
        }

        // setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching the weather data:", error);
        setWeather(undefined);
      });

    setCity(''); // Move setCity('') here to clear input after fetching data
  }

  return (
    <div className="App">
      <div className="weather-app-container">
        <h1>Simple Weather App</h1>
        <div className="content-container">
          <div className="location-form-container">
            <form id="location-form" onSubmit={getValue}>
              <input 
                type="text" 
                id="city-name" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="weather-info-container">
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" width={100} className={loading?'':'hide'}  alt="Loading" /> */}
            {weather !== undefined ? (
              <div className="weather-info">
                <h2>{weather.name}</h2>
                <p>{weather.main.temp}°C</p>
                <p>{weather.weather[0].main}</p>
              </div>
            ) : (
              <p>No City Found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
