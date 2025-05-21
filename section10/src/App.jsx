import './App.css'
import { useState, useRef, useReducer } from "react";
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

function reducer(state, action){
  switch(action.type){
    case 'CREATE': 
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item)=>
        item.id === action.targetId
          ?{...item, isDone: !item.isDone} : item
        );
    case 'DELETE':
      return state.filter((item)=>item.id !== action.targetId);
    
    default: 
      return state;
  }

}

function App() {
  
  const [todos, dispatch] =useReducer(reducer, mockData);
  const idRef =useRef(3);

 
  // 생성 함수
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        data: new Date().getTime(),
      },
    });
  };

  // 업데이트 함수
  const onUpdate = (targetId)=>{
    dispatch({
      type:"UPDATE",
      targetId: targetId,
    });
  };

  // 삭제 함수
  const onDelete =(targetId)=>{
    dispatch({
      type:"DELETE",
      targetId: targetId,
    });
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
