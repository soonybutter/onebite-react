// 5가지 배열 변형 메서드


// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 =[
    {name: "강동원", hobby:"축구"},
    {name: "박보검", hobby:"축구"},
    {name: "공지철", hobby:"독서"},
];

const soccerPeople = arr1.filter((item)=>{
    if(item.hobby === "축구") return true;
});

const soccerPeople1 = arr1.filter(
    (item)=> item.hobby === "축구"
);

//console.log(soccerPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr)=>{
    return item * 2;
});

//console.log(mapResult1);

// arr1의 name 만 배열로 반환하기
let names =arr1.map((item)=>item.name);


// 3. sort
// 배열을 사전순으로 정렬하는 메서드

let arr3 =["b", "a", "c"];

arr3.sort();

//console.log(arr3); // ["a","b","c"]


let arr4 =[10, 3, 4];

// 오름차순
arr4.sort((a,b)=>{
    if(a > b){
        return 1; // 양수 반환: b가 a 앞으로 오도록 배치해라
    }
    else if(a < b){
        return -1; // 음수 반환: a가 b 앞으로 오도록 배치해라
    }
    else{
        return 0; // a,b 자리를 그대로 유지
    }

});

//console.log(arr4); // 3, 4, 10

// 내림차순
arr4.sort((a,b)=>{

    if(a > b){
        return -1;
    }
    else if(a < b){
        return 1;
    }
    else return 0;

});

//console.log(arr4); // 10, 4 , 3


// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c","a","b"];

const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);


// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드

let arr6 =["hi", "iam", "olivia"];
const joined = arr6.join(" "); 

console.log(joined);


let arr7 =[1,23,4,5];
const joined1 = arr7.join();

console.log(joined1);
