import React, { useState } from 'react'
import './NewGoal.css'
const NewGoal = ({createGoal}) => {
    const [goal,setGoal]=useState('');
    let ID=4;

    const addGoalHandle=(e)=>{
        e.preventDefault();
        const newGoal={
            id:ID++,
            text:goal
        }
        createGoal(newGoal)
    }
    return (
        <form className="new-goal" onSubmit={addGoalHandle}>
            <input type="text" name="goal" value={goal} onChange={e=>setGoal(e.target.value)}  />
            <button type="submit">AddGoal</button>
        </form>
    )
}

export default NewGoal
