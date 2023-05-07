const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.get("/pet", function (req, res) {
  res.send("팻용품 쇼핑할 수 있는 페이지입니다.");
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/write", function (req, res) {
  res.sendFile(__dirname + "/write.html");
});
app.post("/add", function (req, res) {
  console.log(req.body.title);
  console.log(req.body.data);
  res.send("전송 완료");
});
