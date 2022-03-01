
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

  const addBadList = task => {
    setBadList([...badList, task]);
  }

  console.log(taskList);

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

                <TaskList taskList={taskList}/>
                <BadList badList={badList}/>
               
                
            </div>
            
            {/* Total HOurs */}
            <TotalHours />

        </div>
      </div>
    </div>
  );
}

export default App;
