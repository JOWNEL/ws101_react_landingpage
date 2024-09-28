function MissedGoal(){
    return <h3>You missed</h3>
}

function ShootGoal(){
    return <h3> wow angas</h3>
}

function Goal(props){
    const isGoal = props.isGoal;

    return(
        <>
        {isGoal ?<ShootGoal/> : <MissedGoal/>}
        
        </>


    )
}

export default Goal;