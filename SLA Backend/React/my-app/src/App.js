import './App.css';
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import Message from './components/Message';
import Attendance from './components/Attendance';
import ToggleContent from './components/ToggleContent';
import LoginButton from './components/LoginButton';
// import Login from './components/Login';
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
import UseEffectDemo from './components/UseEffectDemo';
import FeedBack from './components/FeedBack';

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Home from './pages1/Home';
// import About from './pages1/About';
// import Login from './pages1/Login';

import Todo from './components/Todo';
import Task from './components/Task';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Cart from './components/Cart';
import StateDistrict from './components/StateDistrict';
import Calculator from './calculator/Calculator';
import LoginForm from './LoginForm/LoginForm';
import ReduceHook from './components/ReducerHook';

// nav content
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Navbar from "./navbar/Navbar";
// import Login from "./navbar/Login";
// import Home from "./components/Home";
// import Profile from "./navbar/Profile";
// import About from "./navbar/About";

function App() {
  // const userName = "Hemnath";
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {/*  MAIN COMP */}
      {/* <p className='username' style={{ color: "red" }}> {userName}</p>
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
      <StudentTable /> */}
      {/* <WeatherInfo city="Vellore" temp="30"/> */}
      {/* <Form />
      <DropDown/>
      <SideEffect username="hems"/> 
      <UseEffectDemo studentName="hemnath"/>
      <FeedBack />
      <Todo />
      <Task/>
      <Task1/>
      <Task2/>
      <Task3/>
      <Cart/>
      <StateDistrict/> */}
      <Calculator/>
      <LoginForm/>
      <ReduceHook/>

      {/* <BrowserRouter>
        <nav>
          <Link></Link>
          <Link to={"/Home"}>Home</Link>
          <Link to={"/About"}>About</Link>
        </nav>

        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter> */}


      {/* <BrowserRouter>
        <nav style={{ padding: "20px", background: "#eee", display: "flex", gap: "20px" }}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}


      {/* nav content */}
      {/* <Router>
        <div className="min-h-screen bg-gray-100">
          {isLoggedIn && <Navbar />}

          <Routes>
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router> */}
      
    </div>
  );
}
export default App;   