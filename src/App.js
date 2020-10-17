import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [textInput, setTextInput] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [completed, setCompleted] = useState(false);
  
  useEffect(() => {
    loadDataFromLocal();
  },[]);

  useEffect(() => {
    saveDataToLocal();
  },[todoData]);

  const saveDataToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todoData));
  }

  const loadDataFromLocal = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      setTodoData(JSON.parse(localStorage.getItem("todos")));
    }
  }
  
  return (
    <section className="page-section">
      <div className="todo-app-container">
        <h1 className="text-center">Simple ToDo App</h1>
        <div className="todo-app_input-section">
          <Form textInput={textInput} todoData={todoData} setTodoData={setTodoData} setTextInput={setTextInput} completed={completed} setCompleted={setCompleted}/>
        </div>
        <div className="todo-app_list-section">
          <div className="todo-app_list__todo">
            <ul>
              {todoData.map((items) => (
                <TodoList key={items.id} text={items.text} todoData={todoData} setTodoData={setTodoData} items={items} completed={completed} setCompleted={setCompleted}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
