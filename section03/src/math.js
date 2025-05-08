// math 모듈
function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

/* common JS
module.exports={
    add: add,
    sub: sub
};
*/

// es모듈 시스템 사용 시
// 각 함수 앞에 export 키워드 붙이기만 해줘도 됨!
export { add, sub };


export default function multiply(a,b){
    return a*b;
}
