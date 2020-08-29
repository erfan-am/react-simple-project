import React from 'react'

const GoalsList = ({goals}) => {
    return (
         <ul className="goal-list">
          {goals.map(goal=>(<li key={goal.id}>{goal.text}</li>))}
        </ul>
    )
}

export default GoalsList
