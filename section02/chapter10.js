// 1. Date 객체를 생성하는 방법

let date1 = new Date(); // 생성자

let date2 = new Date("1998-01-20 10:10:10"); // -, . , / 로 구분


// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초" 로부터 몇 ms가 지낫는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);

console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    year, 
    month, // 0: 1월
    date,
    hour,
    minute,
    seconds

);

// 4. 시간 수정하기
date1.setFullYear(2000);
date1.setMonth(1);
date1.setDate(29);
date1.setHours(2);
date1.setMinutes(23);
date1.setSeconds(43);

console.log(date1);


// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString()); //한국의 시간 포맷으로!