'use strict';
// 15. 배열 연습
// 배열 값을 스트링으로 묶어 내기
const array1 = [1,2,3];
console.log(array1.join(','));

// 주어진 string를 array로 변환하기
const arrValue = '1, 2, 3, 4';
const result = arrValue.split(',');
console.log(result);

// 주어진 배열을 거꾸로 뒤집기
const result1 = array1.reverse();
console.log(result)

// 특정 구간의 배열의 값을 삭제

/////////////////////////////////////
const array2 = [1,2,3,4,5];
const result3 = array2.slice(2, 5);
console.log(result);

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// 90점 학생 찾아내기 (find)
const result4 = students.find((student) => student.score === 90);
console.log(result4);
// 수업 등록된 학생 찾기 (filter)
{
    const result = students.filter((student => student.enrolled))
    console.log(result);
}
// 점수만 뽑아와서 배열 만들기(map)
{
    const result = students.map((student) => student.score);
    console.log(result);
}
// 50점보다 낮은 학생이 포함되어 있는지(some)
{
    const result = students.some( (student) => student.score < 50);
    console.log(result);
    console.clear()
}
// 학생들의 점수 평균 내기
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}
// 학생들의 50점 이하인 학생의 점수를 string으로 변환하기
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();

    console.log(result);
}