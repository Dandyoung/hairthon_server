var express = require('express');
const axios = require('axios');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next){
  res.render('test.html')
});


router.get('/test', function(req, res, next) {
  // localhos:3000/ 링크로 get 요청 들어오면 axios 실행 -> flask 실행 서버인 5000포트 /api/flask url로 데이터 요청
  // app.py에서 json 데이터를 리턴받음
  // axios? http 비동기 통신 라이브러리
  axios.get('http://127.0.0.1:5000/api/flask')
    .then(response => {
      const data = response.data;
      // JSON 데이터를 클라이언트로 전달
      res.json(data);
    })
    .catch(error => { // 오류 catch
      console.error('Error fetching data from Flask server:', error);
      res.status(500).json({ message: 'Error fetching data from Flask server' });
    });
});


module.exports = router;
