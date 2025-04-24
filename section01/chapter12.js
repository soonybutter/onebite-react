//1. 콜백함수
function main(value){
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

function sub(){
    console.log("i am sub");
}

//1)
//main(sub);

/*2)
main(function sub(){
    console.log("i am sub");
});
*/

//3)
main(()=>{
    //console.log("i am sub");
});


//2. 콜백함수의 활용
function repeat(count){
    for(let idx =1; idx <=count; idx++){

        if(idx==count){
            console.log(idx);
            console.log("fin!!");
        }
        else console.log(idx);
    }
}

function repeatDouble(count){
    for(let idx =1; idx<= count; idx++){
        console.log(idx * 2);
    }
}



repeat(5);
repeatDouble(5);

//--------------------------------------
function repeat1(count, callback){
    for(let idx=1; idx<=count; idx++){
        callback(idx);
    }
}

repeat1(5, (idx)=>{
    console.log(idx);
})

//==
repeat1(5,function(idx){
    console.log(idx);
})