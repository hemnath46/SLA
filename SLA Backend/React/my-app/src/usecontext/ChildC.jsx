import { useContext } from "react";
import { MyContext } from "./MyContext";

function ChildC() {
  const data = useContext(MyContext);

  return (
    <div>
      <h2>Child C Component</h2>
      <p>Name: {data.name}</p>
      <p>City: {data.city}</p>
    </div>
  );
}
export default ChildC;
