import "./DiaryItem.css";
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({id, emotionId, createdDate, content})=>{

    const nav = useNavigate();

    const getImageSrc =()=>{
        
        if(id <=5){

            return getEmotionImage(emotionId);
        }
        else{
            const randomEmotionId = Math.floor(Math.random()*5)+1;
            return getEmotionImage(randomEmotionId);
        }
    }

    const imageName =()=>{

        if(id<=5){
            return `img_section img_section_${id}`;
        }
        else{
            return `img_section img_section_${1}`;
        }
    }

    return (
        <div className="DiaryItem">
            <div 
            onClick={()=>nav(`/diary/${id}`)}
            className={imageName()}
            >
            <img src={getImageSrc()} alt="emotion"></img>
        </div>
        <div 
         onClick={()=>nav(`/diary/${id}`)}
         className="info_section">
            <div className="created_date">
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <div className="content">{content}</div>
            </div>
            <div className="button_section">
                <Button 
                onClick={()=>nav(`/edit/${id}`)}
                text={"수정하기"}
                />
            </div>
        </div>
    );
};

export default DiaryItem;