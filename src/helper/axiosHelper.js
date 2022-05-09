// import axios from "axios";
// const axios = require("axios").default;
const rootUrl = `http://localhost:8000/api/v1`;
const taskApi = `${rootUrl}/task`;

//fetch a task

//fetch tasks

export const fetchTask = (data) => {
  return fetch(taskApi)
    .then((res) => res.json())
    .then((data) => data);
};

//post new task
export const postTasks = (data) => {
  return fetch(taskApi, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

//delete task

//update task
