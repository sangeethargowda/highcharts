import './App.css';
import Advanced from './components/Advanced';
import BasicArea from './components/BasicArea';
import BasicBar from './components/BasicBar';
import BasicColumn from './components/BasicColumn';
import BasicLine from './components/BasicLine';
import Bubble from './components/Bubble';
import ColumnPie from './components/ColumnPie';
import Donut from './components/Donut';
import DrillDownPieChart from './components/DrillDown';
import GradientPieChart from './components/Gradient';
import PackedBubble from './components/PackedBubble';
import PieChart from './components/PieChart';

function App() {
  return (
    <div className="App">
      <BasicLine/>
      <BasicArea/>
      <BasicBar/>
      <BasicColumn/>
      <PieChart/>
      <Donut/>
      <DrillDownPieChart/>
      <GradientPieChart/>
      <Bubble/>
      <PackedBubble/>
      <Advanced/>
      <ColumnPie/>
    </div>
  );
}

export default App;
