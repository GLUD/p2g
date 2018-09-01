//Librerias principales para el montaje de servidor de node
const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.Server(app);
const io = socketIo.listen(server);

//Instanciación de la libreria serialport para leer los datos del componente
//del Arduino
const Serialport = require('serialport');
const Readline = Serialport.parsers.Readline;
const mySerial = new Serialport('/dev/ttyACM1',{
  baudRate: 9600
});
//Lee la temperatura que el sensor muestra
const parser = mySerial.pipe(new Readline({delimiter:'\r\n'}));
//Crea el dominio publico del servidor
app.use(express.static(__dirname + '/public'));
//Asigna el puerto de escucha del servidor
server.listen(3000, () => console.log('server on port 3000'));

//Aviso de que esta abierto el puerto serial
parser.on('open',function () {
  console.log('Opened Serial Port');
});
//Envío de la información del servidor al cliente que es el juego
parser.on('data', function (data) {
  console.log(data);
  io.emit('temp',data.toString());
});
//Una alerta en caso de presentar error
parser.on('err',function (err) {
  console.log(err.message);
});
