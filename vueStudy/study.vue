// client -> localhost:8080 -> index.js -> router -> home -> created단 -> api -> main.js -> 
// mxins.js -> app.js -> sql.js -> vue.config.js -> 127.0.0.1:3000

// 1. vue cli 설치 npm install -g vue cli
// 2. router 설치 vue add router
// 3. index.js에서 router 코딩
// 4. bootstrap 설치 npm i bootstrap --save, main.js에서 import까지하기
// 5. view 폴더 아래 원하는 페이지 코딩
// 6. index nav코딩하기
// 7. 데이터 받아오기
// 7-1. vue.config.js 파일 생성, port,proxy설정 (서버와 클라이언트 mapping)
// 7-2. mxins.js 파일 생성, axios(서버에서 클라이언트 데이터 요청 모듈) npm i axios --save, import하기
// 7-3. mxins.js -> async, await 기반으로 공통모듈 만들기
// 7-4. mxins.js -> main.js에서 import & mxins(mxins) 추가
// 7-5. productList 코딩 -> created 되는 시점에서 서버에서 만들어 놓은 쿼리로 데이터 받아오기