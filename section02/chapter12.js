// 콜백함수를 사용해서, 비동기함수안에서 콜백함수를 호출한다.
function add(a, b, callback){
    setTimeout(()=>{
        const sum = a + b;
        callback(sum);
    },3000);
}

// 인수로 '비동기처리의 결과값으로 사용하고자 하는 콜백함수'를 전달
// 콜백함수
add(1,2, (value)=>{
    console.log(value);
});

//-----------------------------------------------------------

// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(()=>{
        const food ="떡볶이";
        callback(food);
    },3000);
}

// 음식 식히는 함수
function cooldownFood(food,callback){
    setTimeout(()=>{
        const cooldownedFood =`식은 ${food}`;
        callback(cooldownedFood);
    },2000);
}

// 음식 냉동 함수
function freezeFood(food, callback){
    setTimeout(()=>{
        const freezedFood =`냉동된 ${food}`;
        callback(freezedFood)
    },1500);
}


// 비동기 작업의 인수를 또다른 비동기 작업의 인수로 전달이 가능하다!
// 콜백함수 안에 또 다른 콜백함수를 호출가능!
// but, '콜백지옥' 문제발생 가능..
// -> 개선방안 : promise


// 콜백함수
orderFood((food)=>{
    console.log(food);

    cooldownFood(food, (cooldownedFood)=>{
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood)=>{
            console.log(freezedFood);
        });
    });
});


