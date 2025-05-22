import "./TodoItem.css";
import {memo} from 'react';

  const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {

  const onChangeCheckbox =()=>{
    onUpdate(id);
  };

  const onClickDeleteButton=()=>{

    onDelete(id);
  };


  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">
        {new Date(date).toLocaleDateString()}
      </div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

/*
// 고차 컴포넌트 (HOC)
export default memo(TodoItem,(prevProps, nextProps)=>{
  // 최적화 함수를 커스터마이징하기!
  // -> 반환값에 따라, props가 바뀌었는지 안바뀌었는지 판단
  // T : props 바뀌지 않음 -> 리렌더링 X
  // F : props 바뀜 -> 리렌더링 0
  // 왜 ? -> memo(): 얕은비교만 가능('=='), props를 일일이 비교할 수 없기때문

  if(prevProps.id !== nextProps.id) return false;
  if(prevProps.isDone !== nextProps.isDone) return false;
  if(prevProps.content !== nextProps.content) return false;
  if(prevProps.date !== nextProps.date) return false;
  
  return true;

});
*/

export default memo(TodoItem);