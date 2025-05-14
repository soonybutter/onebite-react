import {useEffect} from "react";

const Even =() =>{
    
    useEffect(()=>{

        // 클린업(정리함수)
        // mount 될때 실행, amount될때 종료되면 정리함수 호출됨!
        return () =>{
            console.log("unmount");
        };

    },[]);

    return <div>짝수입니다</div>;
};

export default Even;