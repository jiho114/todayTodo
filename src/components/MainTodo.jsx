import { useState } from "react";

import Progress from '../components/Progress'
import { Card, Typography, Button } from "antd";
const { Title, Text } = Typography;


const MainTodo = ({ todos, handleDeleteTodo, handleEditTodo, handleComplete }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSave = (id) => {
    handleEditTodo(id, editText);
    setEditId(null);
  };


  return (
    <div className="main-todo">
        <div className="todo">
        {todos.map((todo, idx) => (
        <Card key={todo.id}>
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <div className="todo-btn-box">
               <Button onClick={() => handleSave(todo.id)}>저장</Button>
               <Button type="danger" onClick={() => setEditId(null)}>취소</Button>
              </div>
            </>
          ) : (
            <>
              <Text style={{fontSize:16}}>{idx+1}번째 할일</Text>
              <Title level={3}>{todo.text}</Title>
              <div className="todo-btn-box">
               <Button type={todo.completed ? "primary" : ""} onClick={() => handleComplete(todo.id)}>{todo.completed ? "완료됨" : "완료"}</Button>
               <Button onClick={() => handleEdit(todo.id, todo.text)}>수정</Button>
               <Button type="danger" onClick={() => handleDeleteTodo(todo.id)}>삭제</Button>
              </div>
            </>
          )}
        </Card>
      ))}
        </div>
       <Progress todos={todos}/>
    </div>
  );
};

export default MainTodo;
