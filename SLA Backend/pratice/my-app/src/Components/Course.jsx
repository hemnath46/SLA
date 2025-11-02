const Course1 = "HTML"
function Course(props) {
    return (
        <>
        <div>
            <h1>{props.name}</h1>
            <p>{props.rate}</p>
        </div>
        </>
    );
}
export default Course    