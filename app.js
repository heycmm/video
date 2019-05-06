const express = require('express'); //express框架模块
const path = require('path'); //系统路径模块
const fs = require('fs');
const app = express();
const https = require('https');
/*const hostName = 'localhost'; //ip
const port = 9999; //端口*/

app.use(express.static(path.join(__dirname, '/'))); //指定静态文件目录

var certOptions = {
    key: fs.readFileSync(path.resolve('./cert/server.key')),
    cert: fs.readFileSync(path.resolve('./cert/server.crt'))
}
var SSLPORT =9998
var httpsServer = https.createServer(certOptions, app);
/*app.listen(port, hostName,certOptions, function() {
    console.log(`服务器运行在http://${hostName}:${port}`);
});*/
httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});
