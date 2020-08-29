import React, { useState } from 'react';
import GoalsList from './components/GoalsList/GoalsList';
import './App.css';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  let ID=0;
  const [courseGoals,setCourseGoalst]=useState([
    {id:ID++,text:'Finish the Course'},
    {id:ID++,text:'Learn all about the Course MAin topic'},
    {id:ID++,text:'Help other students in the Course Q&amp;A'},
  ]);
  const addNewGoalHandler=(newGoal)=>{
    // setCourseGoalst(courseGoals.concat(newGoal))
    setCourseGoalst((prev)=>{
      return prev.concat(newGoal)
    })
  }
  return (
    <div className="Course">
      <h2>Course Goals</h2>
      <NewGoal createGoal={addNewGoalHandler}/>
      <GoalsList goals={courseGoals}/>
    </div>
  );
}

export default App;
