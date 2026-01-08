import { MyContext } from "./MyContext";
import { useContext } from "react";
export function Child(){
    const data = useContext(MyContext);
    return(
        <>
        <h2>{data.name}</h2>
        <h2>{data.age}</h2>
        </>
    );
}