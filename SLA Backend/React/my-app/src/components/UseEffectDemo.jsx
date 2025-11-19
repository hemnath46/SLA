// task
import { useEffect, useState } from "react";

const UseEffectDemo = ({ studentName }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    console.log("1. You are logged in");
  });


  useEffect(() => {
    alert("2. The page is loaded");
  }, []);

  useEffect(() => {
    alert("3. You are logged in / You are not logged in");
  }, [name, age]);

  return (
    <>
      <h3>You selected: {studentName}</h3>

      <div>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
    </>
  );
};

export default UseEffectDemo;
;