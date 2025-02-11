import { useState } from "react"
import { useContext } from "react";
import { RecommendContext } from "../context/Recommend";
import MainTop from "./MainTop"
import Info from "./Info";
import MainTodo from "./MainTodo";

const Main = () => {
  const [todos, setTodos] = useState([])
  const [ todoInput, setTodoInput ] = useState("");
  const { randomRecommendation } = useContext(RecommendContext);

  const handleAddTodo = () => {
    if(todoInput.trim() === "") return;
    setTodos([...todos, {id: Date.now(), text : todoInput}]);
    setTodoInput("");
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleEditTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, text:newText} : todo)
    );
  };

  const handleAddRecommendation = () => {
    setTodos([...todos, {id: Date.now(), text : randomRecommendation}]);
  }

  const handleComplete = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? {...todo, completed: true} : todo ))
  }

  return (
    <main id="main">
        <div className="container">
            <MainTop handleAddRecommendation={handleAddRecommendation} todoInput={todoInput} setTodoInput={setTodoInput} handleAddTodo={handleAddTodo} />
            {todos.length === 0 ? (<Info/>) : (<MainTodo todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} handleComplete={handleComplete}/>)}
        </div>
    </main>
  )
}

export default Main