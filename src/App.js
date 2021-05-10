import './App.css';
import DisplayWeather from './DisplayWeather';



function App() {
  return (
    <div className="App">
      <div className="container">
         <div className="card">
         <div className="card-body">
           <DisplayWeather defaultCity="London" />
           
           </div>
           </div>
      </div>
      <footer><a href="https://github.com/DerryGirl93/weather-app-react" target="_blank" rel="noreferrer">Open-source code</a>, by <a href="https://www.linkedin.com/in/emma-o-deorain-2b98408b/" target="_blank" rel="noreferrer">Emma O'Deorain</a> </footer>
    </div>
    
  );
}

export default App;
