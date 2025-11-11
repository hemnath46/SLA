import './App.css';
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import Message from './components/Message';
import Attendance from './components/Attendance';
import ToggleContent from './components/ToggleContent';
import LoginButton from './components/LoginButton';
import Login from './components/Login';
import Weather from './components/Weather';
import StudentList from './components/StudentList';
import FruitList from './components/FruitList';
import VegitableList from './components/VegitableList';
import Table from './components/Table';
import WeatherInfo from './components/WeatherInfo';
import Colors from './components/Colors';
import StudentTable from './components/StudentTable';
import Form from './components/Form';
import DropDown from './components/DropDown';
import SideEffect from './components/SideEffect';

function App() {
  const userName = "Hemnath"
  return (
    <div className="App">
      {/*  MAIN COMP */}
      <p className='username' style={{ color: "red" }}> {userName}</p>
      <Greetings userName={userName} />
      <Counter />
      <Message />
      <Attendance />
      <ToggleContent />
      <LoginButton />
      <Login name="Hemnath" />
      <Weather />
      <StudentList />
      <FruitList />
      <VegitableList />
      <Table />
      <Colors />
      <WeatherInfo weather={{city: "Chennai",temp:30 }} />
      <StudentTable />
      {/* <WeatherInfo city="Vellore" temp="30"/> */}
      <Form/>
      <DropDown/>
      <SideEffect username="hems"/> 
    </div>
  );
}
export default App;   