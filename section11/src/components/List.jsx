import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List =()=>{

    // context 사용
    const todos = useContext(TodoStateContext);

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) =>{
        setSearch (e.target.value);
    };

    const getFilteredData =() =>{
        if(search===""){
            return todos;
        }
        return todos.filter((todo)=>
            todo.content.toLowerCase().includes(search.toLowerCase()));
    };

    const FilterdTodos = getFilteredData();


    // 현재 todoList 분석하는 함수 - useMemo 사용
    // 딱 한번만 수행되도록!
    const {totalCount, doneCount, notDoneCount}= useMemo(()=>{
        console.log("getAnalyzedData 호출!");
        const totalCount = todos.length;
        const doneCount = todos.filter(
            (todo) => todo.isDone
        ). length;

        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        };
    }, [todos])
    // [] : 의존성배열 deps
    // []안에 아무것도 없으면, 콜백함수의 연산수행 및 반환은 최초 실행 시 딱 한번 반환됨.

    return(
        <div className="List">
            <h4>Todo List🌱</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>
            <input 
            value={search}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요"/>

            <div className="todos_wrapper">
               {FilterdTodos.map((todo)=>{
                    return (
                    <TodoItem
                     key={todo.id}
                     {...todo}
                    />
                    )
               })}
            </div>
        </div>
    );
};

export default List;