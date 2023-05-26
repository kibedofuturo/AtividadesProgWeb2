const express = require("express");
const app = express();

let i = 0;
let incrementar1 = 0;
let incrementar5 = 0;

app.get("/contador", function(req, res) {
  res.send({ i });
});

app.get("/incrementar1", function(req, res) {
    i++;
    incrementar1++;
    res.send({i});
});

app.get("/incrementar5", function(req, res) {
    i += 5;
    incrementar5++;
    res.send({i});
});

app.get("/relatorio", function(req, res) {
    res.send({i, incrementar1, incrementar5});
});

app.listen(3000);