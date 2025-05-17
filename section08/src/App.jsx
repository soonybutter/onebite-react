import './App.css'
import { useState, useRef } from "react";
import Editor from "./components/Editor";
import List from "./components/List";
import Header from "./components/Header";

const mockData=[
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
      date: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: "빨래하기",
      date: new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content: "커밋하기",
      date: new Date().getTime(),
    },
];

function App() {
  
  const [todos, setTodos] = useState(mockData);
  const idRef =useRef(3);

 
  // setTodos 를 통해 state 값 변경시켜야함.
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    // setTodos 호출하여 인수로 새로운 값을 newTodo에 넣음.
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId)=>{
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수: todos 배열에서 targetID와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열 전달
    setTodos(todos.map((todo)=>{
      if(todo.id=== targetId){
        return{
          ...todo,
          isDone: !todo.isDone
        }
      }
      return todo
    }))
  }

  // 삭제 함수
  const onDelete =(targetId)=>{
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo)=>todo.id !== targetId));
  };

  // Editor 컴포넌트에 onCreate 함수 전달
  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos ={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
   
}

export default App;
