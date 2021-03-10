'use strict';

// 콜백함수
// 동기화 콜백
function printNow(print) {
    print();
}

printNow(() => console.log('helloWorld'));

// 비동기화 콜백
function printDelay(print, time){
    setTimeout(print, time);
}

printDelay( () => console.log('helloworld'), 2000 );

// Primise obeject
// state : pending(수행중) -> fulfilled or rejected
// produce와 consumer 차이점 이해하기

// 1. Producer
// 파일을 읽거나 네트워크 통신과 같은 무거운 작업은 promise로 처리한다.
// 새로운 promise를 만들면 바로 실행되기 때문에 이점을 유념해야된다.
const promise = new Promise((resolve, reject) => {
    setTimeout(()=> resolve('hello'), 2000);
    reject(new Error('error'));
});

// 2.Consumers : then, catch, finally
promise
.then((value) => console.log(value)) // 성공 했을때
.catch((error) => console.log(error)) // 실패 했을떄
.finally( () => console.log('finally')); // 상관없이
  
// 3. Promise chaining
// 다른 여러 promise들을 묶어서 처리 할 수 있다.
const thenPromise = new Promise((resolve, reject) => {
    setTimeout( () => resolve(1), 1000);
});

thenPromise
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));


// 4. error Handling
    const getPig = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('Pig'), 1000);
    });
    const getPork = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('Pork'), 1000);
    });
    const cook = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('Pork cutlets'), 1000);
    });

    getPig()
    .then(getPork)
    //catch로 전달된 에러를 처리해서 promise chain에 영양이 가지 않도록 미리 처리 한다.
    .catch(console.log(`error ${error}`))
    .then(cook)
    .then(console.log)
    .catch(console.log);

