import './App.css';
import MontyHallGame from './components/MontyHallGame';

function App() {
  return (
    <div >
      <br/>
      <center>
        {/* display the game in app.js */}
        <h1>Monty Hall Game</h1>
      </center>
      <br/>
      <MontyHallGame/>
    </div>
  );
}

export default App;