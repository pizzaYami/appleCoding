const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.static(path.join(__dirname, 'blog/build')));

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/blog/build/index.html'));
});


//최하단에 적어놔야한다.
app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/blog/build/index.html'));
});