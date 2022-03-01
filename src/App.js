
import './App.css';
import React, {useState} from 'react'
import { BadList } from './components/BadList';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { Title } from './components/Title';
import { TotalHours } from './components/TotalHours';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [badList, setBadList] = useState([]);

  const addNewTask = task => {
    setTaskList([...taskList, task]);
  }

  // delete Task List 
  const handleOnDeleteTaskList = i => {
      console.log(i);
      
      if(window.confirm("Are you sure you want to delete this task?")) {
      const newArg = taskList.filter((item, index)=> index !== i) 
      setTaskList(newArg);
      }
  }

  // take item from taskList and put in the Badlist
  const markAsNotToDo = i  => {
    const selectedItem = taskList[i];
    setBadList([...badList, selectedItem]);
    const newArg = taskList.filter((item, index)=> index !== i) 
    setTaskList(newArg);
  }

  // Delete Bad List
  const handleOnDeleteBadList = i => {
    console.log(i);
    
    if(window.confirm("Are you sure you want to delete this bad list?")) {
    const newArg = badList.filter((item, index)=> index !== i) 
    setBadList(newArg);
    }
  }

  //take item from badlist and put in the task list
  const markAsToDo = i  => {
    const selectedItem = badList[i];
    setTaskList([...taskList, selectedItem]);
    const newArg = badList.filter((item, index)=> index !== i) 
    setBadList(newArg);
  }

  const savedHours = badList.reduce((subttl, item) => subttl + item.hr , 0);
  const ttlTaskHours = taskList.reduce((subttl, item) => subttl + item.hr, 0);

  

  console.log("Task :", taskList);
  console.log("BadList :", badList);

  return (
    <div className="">
      <div className="wrapper">
        <div className="container">
            {/* <!-- TOP TITLE --> */}
            <Title />

            {/* <!-- Form Box --> */}
                
            <Form addNewTask={addNewTask}/>
                
            {/* <!-- list area --> */}
            <div className="row">

                <TaskList taskList={taskList} handleOnDeleteTaskList={handleOnDeleteTaskList} markAsNotToDo={markAsNotToDo} />
                
                <BadList badList={badList} handleOnDeleteBadList={handleOnDeleteBadList} markAsToDo={markAsToDo} savedHours={savedHours}/>
               
                
            </div>
            
            {/* Total HOurs */}
            <TotalHours total={savedHours + ttlTaskHours}/>

        </div>
      </div>
    </div>
  );
}

export default App;
