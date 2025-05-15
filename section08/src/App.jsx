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
  const onCreate = (content)=>{
    const newTodo ={
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    setTodos([newTodo,...todos]);
  }

  // Editor 컴포넌트에 onCreate 함수 전달
  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List/>
    </div>
  )
   
}

export default App;
