import { UseState } from './components/UseState.js';
import { ClassState } from './components/ClassState.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
