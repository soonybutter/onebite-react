import "./App.css";
import {useState} from "react"; // 내장함수 :useState
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";



function App() {
  //state : 숫자, setState: 상태설정 함수

  return(
  <>
    <Bulb/>
    <Counter/>
  </>
  );
}

export default App;