const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIo.listen(server);

const Serialport = require('serialport');
const Readline = Serialport.parsers.Readline;
const parser = new Readline();

const mySerial = new Serialport('/dev/ttyUSB0',{
  baudRate: 9600
});

/*app.get('/', (req, res) => {
  res.sendFile(__dirname +'/index.html');
});*/
//Aviso de que esta abierto el puerto serial
mySerial.on('open',function () {
  console.log('Opened Serial Port');
});
var arrData = [];
mySerial.on('data', function (data) {
  //console.log(data.toString());
  arrData = data.toString().split(",");
  console.log(arrData);
  io.emit('arduino:data',{
    value:data.toString()
  });
});

mySerial.on('err',function (err) {
  console.log(err.message);
});

server.listen(3000,function () {
  console.log('server on port',3000);
})
