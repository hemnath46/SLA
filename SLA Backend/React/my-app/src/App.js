import './App.css';
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import Message from './components/Message';
import Attendance from './components/Attendance';
import ToggleContent from './components/ToggleContent';
import LoginButton from './components/LoginButton';
import Login from './components/Login';
import Weather from './components/Weather';
function App() {
  const userName = "Manu"

  return (
    <div className="App">
      {/*  MAIN COMP */}
      <p className='username' style={{ color: "red" }}> {userName}</p>
      * <Greetings userName={userName} />

      <Counter />

      <Message />

      <Attendance />

      <ToggleContent />

      <LoginButton />

      <Login />

      <Weather />
    </div>

  );
}

export default App;   