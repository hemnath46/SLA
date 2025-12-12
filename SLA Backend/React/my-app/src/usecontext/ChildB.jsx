import { useContext } from "react";
import { MyContext } from "./MyContext";

function ChildB() {
  const data = useContext(MyContext);

  return (
  <h2>Child B: {data.city}</h2>
  );
}
export default ChildB;