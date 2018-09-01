# GARBAGE COLLECTOR
Proyecto para participar en la Hackaton SLUD 2018

Inline-style:
![Logo](assets/doc/logo.png "Logo")

## Equipo
Duvan Prieto
Sebastian Parada
Camila Guerrero

## Idea

El juego consiste en capturar datos del ambiente como la temperatura y la humedad para así recrear un ambiente en el juego (día soleado, nublado, lluvioso , nieve) y que de esta manera nuestro personaje Cindy podrá recoger la basura que se encuentra en ese ambiente y llevarla a una caneca de la basura , de esta manera va a ganar puntos y se guardará su récord.
## Tecnologías Implementadas
- Juego : Librería Phaser 3  
**Phaser** es un framework de juegos en 2D en HTML5 que cuenta con herramientas de manipulación de sprites, manejo de colisiones y más.
- Node.js : Socket.io + Express.js + Serialport  
**Socket.io** es una popular librería de Javascript para la elaboración de aplicaciones web, donde permite la comunicación de información en arquitecturas cliente servidor.  
**Express** es una infraestructura de aplicaciones web en Node.js la cual tiene un conjunto de características para la construcción de aplicaciones web y móviles.  
**Serialport** es una conjunto de herramientas para el uso y control de componentes electrónicos utilizando el flujo de información del puerto serial del componente de micro controlador.  
- Arduino Genuino UNO  
**Arduino Genuino UNO** es un micro controlador programable en el cual se puede por medio de más componentes electrónicos se pueden realizar proyectos dado a la imaginación.


## ¿Cómo correr el juego?

### Materiales y herramientas
Para preparar el entorno del juego debemos contar con las siguientes herramientas tecnológicas:
- [Node js][node]
- [npm][npm]
- [Arduino IDE][ardide]
- [Arduino Uno][arduino](placa)

Cada una de ellas es open source y open hardware en su defecto, las herramientas informáticas no tienen que estar necesariamente en sus ultimas versiones.

[node]:https://nodejs.org/es/
[arduino]:https://www.arduino.cc/
[ardide]:https://www.arduino.cc/en/Main/Software
[npm]:https://www.npmjs.com/
### Ejecutando el proyecto
Para poder correr el juego debes hacer el cargar el archivo "nombreFinal.ino" con el sensor de temperatura en la placa de arduino. Seguido a esto debes entrar al proyecto desde una terminal, y ejecutas el comando `npm start` donde tendrás disponible la lectura de temperatura actual, ahora ingresa a la carpeta p2g-juego y abres el archivo "index.html" en tu navegador.

### Consideraciones
* Para la instalación de el entorno de desarrollo arduino es necesario tener [java][jdk] instalado en tu equipo.

[jdk]:http://www.oracle.com/technetwork/es/java/javase/downloads/index.html

## Por fin jugando
Cuando inicias el juego vas a aparecer en algún punto de la pantalla donde tienes que recojer  elementos reciclables para poder tener más puntaje. También te aparecerán objetos que no son reciclables y debes evitarlos tomar.

Pero te preguntaras para que el arduino, dependiendo de la temperatura del ambiente van a cambiar las condiciones del campo como las de los elementos.
##### Nivel de nieve
![Nieve](assets/doc/nieveJuego.PNG)  
##### Nivel de sol
![Sol](assets/doc/solJuego.PNG)  
##### Nivel de frio
![Frio](assets/doc/frioJuego.PNG)
## Contacto

Si tienes dudas contactate por medio de
Gmail : parada.celis@gmail.com, mcguerrerog@correo.udistrital.edu.co o dhprietos@correo.udistrital.co
