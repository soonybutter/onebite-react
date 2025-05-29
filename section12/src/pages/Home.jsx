import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const getMonthlyData = (pivotDate, data)=>{

    // 1일 0시 0분 0초
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1,0,0,0).getTime();

    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1,0,23,59,59).getTime();

    return data.filter((item)=> 
        beginTime<= item.createdDate && item.createdDate <= endTime);
}

const Home =()=>{

    const data = useContext(DiaryStateContext);

    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate, data);

    const onIncreaseMonth = ()=>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1));
    };

    const onDecreaseMonth=()=>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1));
    };

    // DiaryList 컴포넌트의 data에 monthlyData 전달
    return(
    <div>
        <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`}
            leftChild={<Button onClick={onDecreaseMonth} text={"<"}/>}
            rightChild={<Button onClick={onIncreaseMonth} text={">"}/>}
        />
        <DiaryList data={monthlyData}/>
    </div>
    );
};

export default Home;