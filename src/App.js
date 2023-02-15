// import logo from './logo.svg';
import './App.css';
import ChildB from './Components/ChildB.jsx';
import ChildC from './Components/ChildC';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <h1>React Redux App Example</h1>
        <ChildB/>
        <ChildC/>
      </div>
      
    </div>
  );
}

export default App;
