import './App.css';
import { Child } from './components/Child';
import { MyContext } from './components/MyContext';
import { ChildA } from './components/ChildA';
function App() {
    const userData = {
      name : "Hemnath",
      age :22,
      course : "MERN"
    };
  return (
    <div className="App">
      <MyContext.Provider value={userData}>
        <Child/>
        <ChildA/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
