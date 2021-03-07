//자바스크립트 복습하기!!
//자바스크립트 복습하기!!
//자바스크립트 복습하기!!

// 1. Use Strict 사용하기
// -es5 문법에 추가된 내용으로 바닐라자바스크립트 사용시 사용하면 오류를 최소화 할 수 있다.
'use strict';

// 2. 변수
// -let 
//  Mutable
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
// 왠만하면 상수로 선언하라.
// 보안에 강하다
// thread safety
// 코드를 변경하거나 바꿀 때 실수를 방지해 줄 수 있다.

// 4. 데이터 타입
// -오브젝트, box container, function
// -first-class function (function도 데이터 타입중 하나이다. 파라미터의 인자로도 사용가능하고 리턴도 가능하다.)

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

