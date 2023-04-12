import './App.css';
import BasicArea from './components/BasicArea';
import BasicBar from './components/BasicBar';
import BasicLine from './components/BasicLine';
import PieChart from './components/PieChart';

function App() {
  return (
    <div className="App">
      <BasicLine/>
      <BasicArea/>
      <BasicBar/>
      <PieChart/>
    </div>
  );
}

export default App;
