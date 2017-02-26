var express = require("express");
var app= express();

app.get("/api",function(require,response) {
	response.send("Hello, world");
});
app.listen(591);
