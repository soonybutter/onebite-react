import {useState} from "react";

// count 기능 분리
const Counter = () =>{
   const [count, setState] = useState(0);  

   return(
    <>
      <div>
        <h1>{count}</h1>
        
        <button onClick={() =>{
            setState(count-1);
        }}>-</button>

        <button onClick={() => {
        setState(count +1 );
        }}>+</button>
        
      </div>
    </>
   )
}

export default Counter;