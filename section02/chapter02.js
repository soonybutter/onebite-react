//단락평가 :  논리연산식에서 첫번째 피연산자 값만으로 두번째 피연산자에 접근조차 안함.

function returnFalse(){
    console.log("False 함수");
    return undefined;

}

function returnTrue(){
    console.log("True 함수");
    return 10;
}

console.log(returnFalse() && returnTrue());
console.log("---------------"); 
console.log(returnTrue() && returnFalse()); 
console.log("---------------");
console.log(returnTrue() || returnFalse()); // 앞이 truty한 값이므로, 뒤까지 접근X
console.log("---------------");
console.log(returnFalse() && returnTrue());
console.log("-----------------------");


//단락평가 활용사례
function printName(person){
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
    
}

printName();
printName({name: "David"});