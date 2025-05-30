import "./DiaryItem.css";
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  const imageClassName = `img_section img_section_${emotionId}`;
  const imageSrc = getEmotionImage(emotionId);

  return (
    <div className="DiaryItem">
      <div 
        onClick={() => nav(`/diary/${id}`)}
        className={imageClassName}
      >
        <img src={imageSrc} alt="emotion" />
      </div>
      <div 
        onClick={() => nav(`/diary/${id}`)}
        className="info_section"
      >
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            nav(`/edit/${id}`);
          }}
          text={"수정하기"}
        />
      </div>
    </div>
  );
};

export default DiaryItem;
