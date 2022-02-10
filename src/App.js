import { UseState } from './components/UseState.js';
import { UseReducer } from './components/UseReducer';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="Use State" />
      <hr />
      <UseReducer name="Use Reducer" />
    </div>
  );
}

export default App;
