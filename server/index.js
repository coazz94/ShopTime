"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PORT = 8000;
var app = (0, express_1.default)();
app.get("/", function (req, res) { return res.send("Hello from edwaddwdw"); });
app.listen(PORT, function () {
    console.log("Listening on port 8000");
});
