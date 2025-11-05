function VegitableList(){
    let vegitables = [
        {
            name:"carrot",
            price:50,
        },
        {
            name:"potatto",
            price:70,
        },
        {
            name:"beans",
            price:30,
        }
    ];
    return(
        <ul>
            {vegitables.map((vegitable,index)=>(
                <li key={index}>{vegitable.name}{vegitable.price}</li>
            ))}
        </ul>
    );
}
export default VegitableList;