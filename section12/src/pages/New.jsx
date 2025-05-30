import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New =()=>{
    const nav = useNavigate();
    const { onCreate } = useContext(DiaryDispatchContext);

    const onSubmit =(input)=>{
        onCreate(input.createdDate.getTime(), input.emotionId, input.content);

        // 새로운 일기 작성 후, home페이지로 이동 + 뒤로가기 방지
        nav('/',{replace: true});
    };

    return(
        <div>
            <Header 
                title={"새 일기 쓰기"} 
                leftChild={<Button text={"< 뒤로 가기"} onClick={()=>nav(-1)}/>}
                onClick={()=> nav(-1)} text={"< 뒤로 가기"}/>
            <Editor onSubmit={onSubmit}/>
        </div>
    );
};

export default New;