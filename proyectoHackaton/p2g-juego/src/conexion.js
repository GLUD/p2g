var socket = io('http://localhost:3000');
var temperatura =0;
var calAire = 0;
var porHume = 0;
socket.on('temp',function (data) {
  console.log(data);
  temperatura = data;
  var arrData = data.toString().split(" ");
  calAire = parseInt(arrData[0]);
  porHume = parseInt(arrData[1]);
  temperatura = parseInt(arrData[2]);
  cambio();
});
