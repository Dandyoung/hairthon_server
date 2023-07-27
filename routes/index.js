var express = require('express');
const axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://127.0.0.1:5000/api/flask')
    .then(response => {
      const data = response.data;
      // JSON 데이터를 클라이언트로 전달
      res.json(data);
    })
    .catch(error => {
      console.error('Error fetching data from Flask server:', error);
      res.status(500).json({ message: 'Error fetching data from Flask server' });
    });
});

module.exports = router;
