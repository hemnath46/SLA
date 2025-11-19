import './App.css';
import Props from './Components/Props';
// import Login from './Components/Login';
import Table from './Components/Table';
import ListArray from './Components/ListArray';
import Form from './Components/Form';
import Counter from './Components/Counter';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import About from "./About";

function App(){
  return(
    <>
    {/* <Props name="hema" rate="577"/>
    <Table/>
    <Login/>
    <ListArray/>
    <Form/>
    <Counter/> */}

     <Router>
      <nav style={{ padding: "20px", background: "#eee", display: "flex", gap: "20px" }}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
    
  );
}
export default App

