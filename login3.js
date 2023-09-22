const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3002;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'profile'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL 연결 성공');
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const query = `SELECT _id, _pw FROM users WHERE username = ?`;

  db.query(query, [username], (err, results) => {
    if (err) {
      throw err;
    }

    if (results.length > 0) {
      const hashedPassword = results[0].password;

      bcrypt.compare(password, hashedPassword, (err, isMatch) => {
        if (err) {
          throw err;
        }

        if (isMatch) {
          res.send('로그인 성공!');
        } else {
          res.send('로그인 실패. 아이디나 비밀번호를 확인하세요.');
        }
      });
    } else {
      res.send('로그인 실패. 아이디나 비밀번호를 확인하세요.');
    }
  });
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
