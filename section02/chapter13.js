// promise 
// -> 비동기 작업을 감싸는 객체
// -> 비동기 작업 실행, 상태 관리, 작업 결과 저장, 병렬 실행, 다시 실행
// pending (대기) / fulfilled(성공) / rejected(실패)
// 대기-> 성공 : resolve(해결)
// 대기-> 실패 : reject(거부)


function add10(num){
    // promise 객체에 콜백함수
    // resolve : promise 작업을 성공상태로 바꾸는 함수가 들어있음.
    // reject : promise 작업을 실패상태로 바꾸는 함수가 들어있음.
    const promise = new Promise((resolve, reject)=>{
        // 비동기 작업 실행하는 함수 
        // executer
        setTimeout(()=>{
    
            if(typeof num ==="number"){
                resolve(num + 10);
            }
            else{
                reject("num이 숫자가 아닙니다");
            }
        },2000);
    });

    return promise;
}


const p = add10(0);

p.then((result)=>{

    console.log("p: "+result);

    const newP = add10(result);
    newP.then((result)=>{
        console.log("newP: "+ result);
    });
});

// 위의 then은 아래처럼 간결하게 나타낼 수 있다.
add10(0)
    .then((result)=>{
        console.log("p: "+result);
        return add10(result);
    })
    .then((result)=>{
        console.log("newP: "+ result);

        return add10(undefined);
    })
    .then((result)=>{
        console.log("newP1: "+ result);
    })
    .catch((error)=>{
        console.log(error);
    });



const promise = new Promise((resolve, reject)=>{
    // 비동기 작업
    // executer

    setTimeout(()=>{
        const num = 10;

        if(typeof num ==="number"){
            resolve(num + 10);
        }
        else{
            reject("num이 숫자가 아닙니다");
        }
    },2000);
});


// then 메서드
// -> promise 성공 후에(resolve 실행 시) resolve의 value를 받아서 실행됨.

// catch 메서드
// ->  promise 실패 후에 실행됨.

// promise 체이닝 (then과 catch 연결!)
/*
promise.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});
*/

/*
promise.catch((error)=>{
    console.log(error);
});
*/
