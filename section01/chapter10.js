// 함수선언


let area1 = getArea(10,20);
console.log(area1);
let area2 = getArea(20,30);
console.log(area2);

getArea(120,200);

// 호이스팅
// -> 끌어올린다
function getArea(width,height){
   
    function another(){
        console.log("another");
    }
    
    another();

    let area = width * height;

    return area;
}