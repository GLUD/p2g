var socket = io('http://localhost:3000');
var temperatura =0;
socket.on('temp',function (data) {
  temperatura = data;
});
