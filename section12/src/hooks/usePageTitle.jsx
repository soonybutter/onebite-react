import { useEffect } from "react";

const usePageTitle = (title) =>{

    useEffect(()=>{
        const $title = document.getElementsByTagName("title");
        $title.innerText = "새 일기 쓰기";
    },[title]);
};

export default usePageTitle;