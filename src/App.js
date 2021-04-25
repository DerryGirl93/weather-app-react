import './App.css';
import Search from './Search';
import DisplayForecast from './DisplayForecast';
import DisplayWeather from './DisplayWeather';



function App() {
  return (
    <div className="App">
      <div className="container">
        <body>
          <div className="card">
            <div className="card-body">
              <h1>New York</h1>
              <h2>20°C | 68°F </h2>
              <br />

              <Search />
              <DisplayWeather />
              <DisplayForecast />
            </div>
          </div>
        </body>
      </div>
      <footer><a href="https://github.com/DerryGirl93/weather-app-react" target="_blank" rel="noreferrer">Open-source code</a>, by <a href="https://www.linkedin.com/in/emma-o-deorain-2b98408b/" target="_blank" rel="noreferrer">Emma O'Deorain</a> </footer>
    </div>
    
  );
}

export default App;
