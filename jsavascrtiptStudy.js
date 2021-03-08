//자바스크립트 복습하기!!
//자바스크립트 복습하기!!
//자바스크립트 복습하기!!

// 1. Use Strict 사용하기
// -es5 문법에 추가된 내용으로 바닐라자바스크립트 사용시 사용하면 오류를 최소화 할 수 있다.
'use strict';

// 2. 변수
// -let 
//  Mutable
// rw(read/write) 메모리에서 읽기 쓰기 전부가능
{
    let name = 'jo';
    console.log(jo);
    name = 'young';
    console.log(name);
}
// -var를 안쓰는 이유
// 변수를 선언 후 값을 할당하는게 원칙인데 값을 할당 하고 변수를 선언하는 상황이 생긴다.
// -hoisting(어디에 선언했나 상관없이 항상 선언을 끌어올려주는 것)
age = 4;
var age;

// 3. Const 
// immutable
// r(read) 메모리에서 읽기만 가능
// 변수가 바뀔 이유가 없다면 상수로 선언하라.
// 보안에 강하다
// thread safety
// 코드를 변경하거나 바꿀 때 실수를 방지해 줄 수 있다.

// 4. 데이터 타입
// 기본형 타입은 값이 메모리에 직접 저장된다
// 그러나 오브젝트는 오브젝트를 가르키는 레퍼런스가 저장된다.
// first-class function (function도 데이터 타입중 하나이다. 파라미터의 인자로도 사용가능하고 리턴도 가능하다.)

// -number
const count = 17; //integer
const size = 17.1 // decimal number
// 항상 연산 할 때 값이 있는지 확인을 하고 연산을 하는 것이 중요하다.
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

// -bigInt
// n을 추가하면 bigInt 사용가능
// 그러나 소수의 브라우저에서만 사용할 수 있다.
const bigInt = 123123123123123123123123n; 


// -string
const name = 'jo';
// template literals (string)
const hellojo = `hi &{jo}!`; 
console.log(hellojo); 

// -boolean
// false : 0, null, undefined, NaN, ''
// true : 이외 다른 값들

// -object
// const로 지정된 jo는 변경이 불가하지만 jo안에 있는 name, age는 변수이므로 변경이 가능하다.
const jo = { name: 'jo', age = 30 };
jo.name = youngjin;
jo.age = 31;


// -null

// -undefined

// -symbol
// 식별자를 만들 고 싶을 때
// symbol1 != symbol2
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

// 5. 동적타이핑 언어이다.
// 동적타이핑 언어는 런타임시 타입이 결정 되기 떄문에 편리하지만
// 이로인해 규모가 큰 프로젝트를 하거나 여러명의 개발자가 참여하는 프로젝트에서는 런타임 에러가 많이 발생 할 수 있다.
// 이런 문제점을 극복하고자 타입스크립트를 사용한다.
let text = 'hello';
console.log(text.charAt(0));
text = 6;
// 에러 발생!!
console.log(text.charAt(0));

// 6. Ternary operator: ?
// condition ? value1 : value2;
// 코드의 가독성이 떨어지기 때문에 간단한 경우에만 사용하는 것이 좋다.
console.log(name === 'jo' ? 'yes' : 'no');

// 7.function
// 하나의 함수는 하나의 일만 하게 만들어야 된다.
// 함수명은 동사 or doSomething
// 자바스크립트에서 함수는 object의 일종이다.

// 8.파라미터
// Default parameters(es6 추가)
// 원하는 default값을 직접 지정할 수 있다.
function showMessage(message, from = 'unknown') {

  condole.log(`${message} by ${from}`);

}

showMessage('helloWorld');

// Rest parameters
// 파라미터의 인자로 배열을 담을 수 있다. (...args)
// 조건이 맞지 않거나 값이 없을 경우 빠르게 리턴을 한다.

// 9. 함수표현식(function expression)
// 함수표현식은 할당 된 다음에 호출이 가능한 반면 function declaration은 선언하기 전에 호출이 가능하다.
 
// 10. callback function
// 콜백 함수란 객체의 상태 변화가 발생하면 함수를 통해 전달하는 함수

// 11. 화살표 함수
// 화살표 함수는 항상 이름이 없는 unnamed function
const simpleprint = () => console.log('simple');
 
// 12. class(es6 추가됨)
// fields 와 methods 같은 관련있는 것들로 묶어 놓은것을 class라 한다.
// class = template

// getter and setter를 쓰는 이유
// -데이터를 외부에서 직접적으로 접근하는것을 막아 놓기 위해
// -즉 객체의 무결성을 보장하기 위함이다.

// 상속을 사용하는 이유
// -공통된 사항들을 굳이 반복하여 작성하지 재사용하여
// -생산성이 증가된다.

// 오버라이딩
// -부모의 메소드를 재정의하여 사용할 수 있다.
// -또한 부모의 메소드를 super로 직접 불러와 사용할 수 있다.

// 13. object 정리
// 