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
