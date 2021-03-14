const express = require("express");
const app = express();
const session = require("express-session");
const fs = require("fs");

app.use(
  session({
    secret: "secret code",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, //로그인 관련
      maxAge: 1000 * 60 * 60, // 쿠키 유효시간 1시간
    },
  })
);

const server = app.listen(3000, () => {
  console.log("Server started. port : 3000.");
});

let sql = require("./sql.js");

// 변경된 sql.js파일을 다시 재등록 해준다.
// fs.watchfile로 sql.js를 보고 있다가 spl.js에 변경이 일어나면 캐쉬에서 삭제 후
// 재등록 해준다.
// ********************중요*******************
fs.watchFile(__dirname + "/sql.js", (curr, prev) => {
  console.log("sql 재반영");
  delete require.cache[require.resolve("./sql.js")];
  sql = require("./sql.js");
});

//mariadb 접속
const db = {
  database: "dev",
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "mariadb",
};

const dbPool = require("mysql").createPool(db);

// login, logout 테스트
app.post("/api/login", async (request, res) => {
  request.session["email"] = "dydwls4938@gmail.com";
  res.send("ok");
});

app.post("/api/logout", async (request, res) => {
  request.session.destroy();
  res.send("ok");
});

//data 요청
//:alias = login, logout외의 요청을 받아내는 post
app.post("/api/:alias", async (request, res) => {
  // if (!request.session.email) {
  //   return res.status(401).send({ error: "You need to login" });
  // }

  try {
    res.send(await req.db(request.params.alias));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

const req = {
  async db(alias, param = [], where = "") {
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != "ER_DUP_ENTRY") console.log(error);
          resolve({
            error,
          });
        } else resolve(rows);
      })
    );
  },
};
