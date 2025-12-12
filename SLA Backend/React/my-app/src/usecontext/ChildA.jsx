import { useContext } from "react";
import { MyContext } from "./MyContext";

function ChildA() {
  const data = useContext(MyContext);

  return (
  <h2>Child A: {data.name}</h2>
  );
}
export default ChildA;
