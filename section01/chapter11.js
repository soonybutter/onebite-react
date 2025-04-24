// 1. 함수표현식
function funcA(){
   // console.log("funcA");
}

let varA = funcA;
varA();

let varB = function funcB(){
   // console.log("funcB");
};

varB();

//2. 화살표 함수
let varC = ()=>{
    return 1;
};

let varD =()=> 3;

let varE =(value) =>value+1;

let varF =(value)=>{
    console.log("varF 실행됨.");
    
    return value +120;
}

console.log(varC());
console.log(varD());
console.log(varE(10));
console.log(varF(50));