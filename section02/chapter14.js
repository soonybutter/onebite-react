// async
// -> 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드


// 비동기함수
// 객체 그대로 반환 X , 객체를 결과 값으로 갖는 새로운 promise를 반환하는 함수 ㅇ
// PromiseResult에서 반환됨!
async function getData(){
    return {
        name: "David",
        id: "d0228",
    };

}

// 아래와 같이 원래에도 promise 를 반환하는 함수이면, 그대로 실행시킴.
async function getData1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name: "이정수",
                id: "summerwinnner",
            });
        },1500);
    })

}

console.log(getData());
console.log(getData1());

// await
// ->  async 함수 내부에서만 사용이 가능한 키워드
// -> 비동기 함수가 다 처리되기를 기다리는 역할
// then으로 표기 안해줘도 됨. 기다렸다가 실행시켜줌!

async function printData(){
    const data = await getData();

    console.log(data);
}

printData();