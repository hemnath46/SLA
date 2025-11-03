const Greetings = ({userName}) =>{
// console.log("props:" ,props)
// console.log("username" ,props.userName)
const student = {
  name: "Balu",
  age: 22,
  course: "MERN",
  city: "Chennai"
};


// Split (extract) some properties
const { name, age } = student;

console.log(name); // Balu
console.log(age);  // 22

    return(
        <>
        {/* fragments */}
        <p>haii ,hello {userName}</p>
        </>
    )
}

 export default Greetings;