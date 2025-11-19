import { useState } from "react";
// AgeChecker
function Task2() {
  const [age, setAge] = useState("");
  const [category, setCategory] = useState("");

  const handleCheck = () => {
    const numAge = Number(age);

    if (numAge < 13) {
      setCategory("Child");
    } 
    else if (numAge >= 13 && numAge <= 19) {
      setCategory("Teenage");
    } 
    else if (numAge >= 20) {
      setCategory("Adult");
    }
  };

  return (
    <>
      <h1>Age Checker</h1>

      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={handleCheck}>Check</button>

      {category && <h2>You are: {category}</h2>} 
      
    </>
  );
}

export default Task2;
