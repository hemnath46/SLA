import './App.css';
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import Message from './components/Message';
import Attendance from './components/Attendance';
function App() {
 const userName ="Manu"

  return (
    <div className="App">
  {/*  MAIN COMP */}
  <p className='username' style={{color:"red"}}> {userName}</p> 
* <Greetings userName={userName}/>
  <Counter/>
  <Message/>
  <Attendance/>
    </div>

  );
}

export default App;   