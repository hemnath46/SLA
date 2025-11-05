function FruitList(){
    let Fruits=['Apple','Orange','Mango','Grapes']
    const FruitItems=[];
       for (let fruit of Fruits){
        FruitItems.push(<li>{fruit}</li>)

    }
    return(
        <div className="fruitlist">
            <ul style={{listStyle:"none"}}>
             
                {FruitItems}

            </ul>

        </div>
    );
}

export default FruitList;