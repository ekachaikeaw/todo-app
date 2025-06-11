import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { useEffect, useState } from "react";

function App() {
  // const todos = [
  // { input: 'Hello! Add your first todo!', complete: true },
  // { input: 'Get the groceries!', complete: false },
  // { input: 'Learn how to web design', complete: false },
  // { input: 'Say hi to gran gran', complete: true },
  // ]
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);
  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAddTodo(todo) {
    const newTodoList = [...todos, { input: todo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList)
  }

  function handleEditTodo(index) {
    let newTodos = [...todos]
    let completeTodo = todos[index]
    completeTodo['complete'] = true
    newTodos[index] = completeTodo
    setTodos(newTodos)
    handleSaveData(newTodos)
  }
  function handleDeleteTodo(index) {
    const newTodos = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodos);
    handleSaveData(newTodos)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos}))
  }

  useEffect(()=> {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    console.log('here');
    
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        todos={todos}
        selectedTab={selectedTab}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
