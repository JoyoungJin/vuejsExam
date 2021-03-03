const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret:'secret code',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true,
        maxAge: 1000 * 60 * 60 // 쿠키 유효시간 1시간
    }
}));

const server = app.listen(3000, () => {
    console.log('Server started. port : 3000.')
});

//mariadb 접속
const db = {
    database: "dev",
    connectionLimit : 10,
    host: "192.168.0.102",
    user: "root",
    password: "mariadb"
};

const dbPool = require('mysql').createPool(db);

//login, logout 부분
app.post('/api/login', async(request, res) => {

});

app.post('/api/logout', async(request, res) => {

});

const sql = require('./sql.js');

//data 요청
//:alias = login, logout외의 요청을 받아내는 post
app.post('/api/:alias', async (request, res) => {
    try {
        res.send(await req.db(request.params.alias))
    } catch (err) {
        res.status(500).send({
            error : err
        });
    }
});

const req = {
    async db(alias, param = [], where = '') {
      return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != 'ER_DUP_ENTRY')
            console.log(error);
          resolve({
            error
          });
        } else resolve(rows);
      }));
    }
  };