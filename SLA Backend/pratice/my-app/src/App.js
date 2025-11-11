import './App.css';
import Props from './Components/Props';
import Login from './Components/Login';
import Table from './Components/Table';
import ListArray from './Components/ListArray';
import Form from './Components/Form';

function App(){
  return(
    <>
    <Props name="hema" rate="577"/>
    <Table/>
    <Login/>
    <ListArray/>
    <Form/>
    </>
    
  );
}
export default App

