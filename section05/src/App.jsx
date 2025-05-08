import './App.css'
import Header from "./components/Header.jsx"; // 파일 확장자 .jsx 생략 가능
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import Button from"./components/Button.jsx";

function App() { // 부모 컨포넌트

  const buttonProps={
    text: "메일",
    color: "red",
    a:1,
    b:2,
    c:3,
  };

  return (
    <>
      <Button {...buttonProps}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        <div>자식 요소</div>
      </Button>

    </>
  )
}

export default App;
