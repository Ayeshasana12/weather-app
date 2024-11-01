import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import WeatherDashboard from './componments/w-dashboard/WeatherDashboard';

function App() {
  return (
    <div className="App">
      <WeatherDashboard />
    </div>
  );
}

export default App;
