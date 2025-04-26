// promise 
// -> 비동기 작업을 감싸는 객체
// 비동기 작업 실행, 상태 관리, 결과 저장, 병렬 실행, 다시 실행
// pending (대기) / fulfilled(성공) / rejected(실패)
// 대기-> 성공 : resolve(해결)
// 대기-> 실패 : reject(거부)


function add10(num){
    const promise = new Promise((resolve, reject)=>{
        // 비동기 작업
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

    console.log(result);
    return add10(result);

}).then((result)=>{
    console.log(result);
    return add10(result);
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});


/*
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
*/

// then 메서드
// -> promise 성공 후에

// promise 체이닝
promise.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});

/*
promise.catch((error)=>{
    console.log(error);
});
*/
