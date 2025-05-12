import './App.css'
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import {useState} from 'react';

// State Lifting 
// :props 사용해서 데이터는 항상 부모->자식으로만 흐를 수 있음'=단방향 데이터흐름'
function App() {

  const [count, setCount] = useState(0);

  const onClickButton = (value)=>{
    setCount(count + value);
  };
  
  return (
    <div className ="App">
    <h1>Simple Counter</h1>
    <section>
      <Viewer count={count}/>
    </section>
    <section>
      <Controller onClickButton={onClickButton}/>
    </section>
    </div>
  );
}

export default App;
