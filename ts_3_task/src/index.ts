import {getTodosByCount} from "./todos.js";

getTodosByCount(3)
  .then((todos) => {
    console.log('todos', todos)
  })
  .catch((error) => {
    console.error(error)
  });

