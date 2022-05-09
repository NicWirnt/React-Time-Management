import "./App.css";
import React, { useState, useEffect } from "react";
import { BadList } from "./components/BadList";
import { Form } from "./components/Form";
import { TaskList } from "./components/TaskList";
import { Title } from "./components/Title";
import { TotalHours } from "./components/TotalHours";
import { postTasks, fetchTask } from "./helper/axiosHelper";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [badList, setBadList] = useState([]);
  const [isPedning, setIsPending] = useState(false);
  const [response, setResponse] = useState({});

  useEffect(async () => {
    const getTask = async () => {
      setIsPending(true);
      const { status, result, message } = await fetchTask();
      setIsPending(false);

      result === "error" && setResponse({ status, result, message });

      result?.length && setTaskList(result);

      console.log(result);
    };

    getTask();
  }, []);

  const addNewTask = async (task) => {
    setIsPending(true);
    const result = await postTasks(task);
    setIsPending(false);
    console.log(result);
    // setTaskList([...taskList, task]);
  };

  // delete Task List
  const handleOnDeleteTaskList = (i) => {
    console.log(i);

    if (window.confirm("Are you sure you want to delete this task?")) {
      const newArg = taskList.filter((item, index) => index !== i);
      setTaskList(newArg);
    }
  };

  // take item from taskList and put in the Badlist
  const markAsNotToDo = (i) => {
    const selectedItem = taskList[i];
    setBadList([...badList, selectedItem]);
    const newArg = taskList.filter((item, index) => index !== i);
    setTaskList(newArg);
  };

  // Delete Bad List
  const handleOnDeleteBadList = (i) => {
    console.log(i);

    if (window.confirm("Are you sure you want to delete this bad list?")) {
      const newArg = badList.filter((item, index) => index !== i);
      setBadList(newArg);
    }
  };

  //take item from badlist and put in the task list
  const markAsToDo = (i) => {
    const selectedItem = badList[i];
    setTaskList([...taskList, selectedItem]);
    const newArg = badList.filter((item, index) => index !== i);
    setBadList(newArg);
  };

  const savedHours = badList.reduce((subttl, item) => subttl + item.hr, 0);
  const ttlTaskHours = taskList.reduce((subttl, item) => subttl + item.hr, 0);

  const ttlHours = savedHours + ttlTaskHours;

  console.log("Task :", taskList);
  console.log("BadList :", badList);

  return (
    <div className="">
      <div className="wrapper">
        <div className="container">
          {/* <!-- TOP TITLE --> */}
          <Title />

          {/* feedback message */}
          {isPedning && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {response?.message && (
            <div className="alert alert-danger">{response.message} </div>
          )}

          {/* <!-- Form Box --> */}

          <Form addNewTask={addNewTask} ttlHours={ttlHours} />

          {/* <!-- list area --> */}
          <div className="row">
            <TaskList
              taskList={taskList}
              handleOnDeleteTaskList={handleOnDeleteTaskList}
              markAsNotToDo={markAsNotToDo}
            />

            <BadList
              badList={badList}
              handleOnDeleteBadList={handleOnDeleteBadList}
              markAsToDo={markAsToDo}
              savedHours={savedHours}
            />
          </div>

          {/* Total HOurs */}
          <TotalHours total={ttlHours} />
        </div>
      </div>
    </div>
  );
}

export default App;
