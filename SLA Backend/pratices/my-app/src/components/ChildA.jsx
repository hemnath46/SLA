import { useContext } from "react";
import { MyContext } from "./MyContext";

export function ChildA(){
    const data = useContext(MyContext);
    return(
        <>
        <h2>{data.course}</h2>
        </>
    );
}