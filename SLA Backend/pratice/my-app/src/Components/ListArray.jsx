function ListArray() {
    let name = ["hems", "malai", "hema"];
    return (
        <>
            {name.map((name, index) => (
            <h3 key={index}>{name}</h3>
        ))}
        </>
    );
}
export default ListArray;