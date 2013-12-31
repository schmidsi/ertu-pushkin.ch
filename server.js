// stupid simple webserver to develop outside of ios simulator
// http://stackoverflow.com/questions/6084360/node-js-as-a-simple-web-server

var connect = require('connect');

connect.createServer(
    connect.static(__dirname)
).listen(8000);