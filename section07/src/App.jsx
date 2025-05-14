import './App.css'
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from './components/Even';
import {useState, useEffect, useRef } from 'react';

// State Lifting 
// :props 사용해서 데이터는 항상 부모->자식으로만 흐를 수 있음'=단방향 데이터흐름'



function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  
  //false: 아직 이 컴포넌트는 마운트되지않았다 의미
  const isMount =useRef(false);

  
  // 1. 마운트: 탄생 (callback함수 만들고, deps에는 빈 배열 넣음)
  useEffect(()=>{
    console.log("mount");
  },[]);

  
  // 2. 업데이트: 변화, 리렌더링
  useEffect(()=>{
    if(!isMount.current){
      isMount.current= true;
      return;
    }
    console.log("update");
  });


  // 3. 언마운트: 죽음






  // 의존성 배열: dependency array =(deps)
  // useEffect: 컴포넌트 내에 우리가 원하는 값이 바꼈을때 특정 동작 실행 가능!
  useEffect(()=>{
    console.log(`count: ${count}`);
    console.log(`input:${input}`);
  },[count,input])

  const onClickButton = (value)=>{
    setCount(count + value);
  };
  
  return (
    <div className ="App">
    <h1>Simple Counter</h1>
    <section>
      <input value={input} onChange={(e)=>{
        setInput(e.target.value);
      }}/>
    </section>
    <section>
      <Viewer count={count}/>
      {count %2===0 ? <Even/> : null}
    </section>
    <section>
      <Controller onClickButton={onClickButton}/>
    </section>
    </div>
  );
}

export default App;
