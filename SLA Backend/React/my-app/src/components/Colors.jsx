function Colors() {
    let colors = ["Red", "blue", "black"];
    return (
        <>
            {colors.map((color,index) => (
                <p key={index}>{color}</p>
            ))}
        </>
    )
}
export default Colors;
