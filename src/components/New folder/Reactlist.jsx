function Car(props){
    return <li>{props.brand}</li>
}

function Garage(){

    const cars = ['Honda','Toyota','BMW'];
    return(
        <>
            <h1>THIS IS MY CARS</h1>
            <ol>
                {cars.map((car)=> <Car brand={car}/>)}
            </ol>
        
        </>
    )
}

export default Garage;