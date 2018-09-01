var teclado;

const config = {
    width: 320*4,
    height: 180*4,
    parent: "container",
    type: Phaser.AUTO,
    physics: {
        default: 'arcade'
       /*  arcade: {
            gravity: { y: 5 }
        } */
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);


function preload(){
//Precarga de imagenes,sprites, sonidos, teclado.
    teclado = this.input.keyboard.createCursorKeys();
    console.log("Soy preload");
    this.load.image("fondoT", "assets/bg/wallTemplado.png");
    this.load.image("fondoF", "assets/bg/cold.jpg");
    this.load.image("fondoN", "assets/bg/snow.jpg");
    this.load.spritesheet("georgie","assets/sprites/george.png",{ frameWidth: 48, frameHeight: 48},16);
    this.load.spritesheet("cindy","assets/sprites/girl.png",{ frameWidth: 96, frameHeight: 130},21);
    
}

function create(){
    console.log("Soy create");

//Adicion imagenes y sprites
    var georgie = this.add.sprite(100, 100, "georgie");
    var cindy = this.add.sprite(120,120, "cindy");
    this.add.image(500,120, "fondoT");
    this.add.image(50,120, "fondoT");
    
    

//Buttons
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


//Mover a Cindy

var cindyWalk = {
    key: "cindyCamina",
    frames : this.anims.generateFrameNumbers('cindy',{start:0, end:10}),
    frameRate : 20,
    yoyo : true,
    repeat: -1
};

    cindyC = this.anims.create(cindyWalk);
    console.log(cindyC);
    cin = this.add.sprite(70, 600, "cindy");
    cin.setDisplaySize(180,180)
    console.log(cin); 
    cin.anims.load("cindyCamina");

    this.physics.world.enable([ cin ]);
    cin.body.setVelocity(0,0);

   /*  cindyRev = cindy.flipX
    console.log(cindyRev);

    var cindyReversa = {
        key: "cindyReversa",
        frames : this.anims.generateFrameNumbers("cindyRev",{start:10, end:0}),
        frameRate : 20,
        yoyo : true,
        repeat: -1
    };
    
        cindyR = this.anims.create(cindyReversa);
        console.log(cindyR);
        cinR = this.add.sprite(70, 600, "cindyRev");
        cinR.setDisplaySize(180,180)
        console.log(cinR); 
        cinR.anims.load("cindyReversa"); */
//Cargar la animación
    //p1.anims.load('walk');

//arr = this.anims.generateFrameNumbers('georgie');
//arrDerecha = [arr[3], arr[7], arr[11],arr[15]];
//console.log(arr[3], arr[7], arr[15]);
// First Character 
// Aqui se definen las animaciones y el numero de frames (sprites) que se utilizan
   /*  var a = {
        key: 'walk',
        frames: this.anims.generateFrameNumbers('georgie'),
        frameRate: 6,
        yoyo: true,
        repeat: -1
    }; */

//Crear la animación
   /*  anim = this.anims.create(a);
    console.log(anim);
    p1 = this.add.sprite(70, 600, "georgie");
    p1.setDisplaySize(180,180)
    console.log(p1); */
//Cargar la animación
    //p1.anims.load('walk');

//física del juego 
    /* this.p1.anchor.set(0.5);
	this.physics.enable(this.p1, Phaser.Physics.ARCADE);
	this.p1.body.collideWorldBounds = true; */

    // var mD = {
    //      key: "movDerecha",
    //      frames: this.anims.generateFrameNumbers("georgie", arr[3]),
    //      frameRate: 1,
    //      yoyo: false,
    //      repeat: -1
    //  };

    // animationRight = this.anims.create(mD);
    // console.log(animationRight);
    // p1.anims.load("movDerecha");

//Events
    this.input.keyboard.on('keydown_SPACE', function (event) {
        //p1.anims.play('walk');

    });

    this.input.keyboard.on('keydown_UP', function (event) {

        //console.log("Aqui deberias saltar");

    });


    this.input.keyboard.on('keydown_P', function (event) {

        /* if (p1.anims.isPaused)
        {
            p1.anims.resume();
        }
        else
        {
            p1.anims.pause();
        } */

    });
   
    this.input.keyboard.on("keydown_RIGHT", function (event) {
            console.log("hola mundo");
            cin.anims.play("cindyCamina");
            cin.body.velocity.x += 40;
            //p1.anims.play("movDerecha");
    });

    this.input.keyboard.on("keydown_LEFT", function (event) {
        console.log("hola mundo reversa");
        cin.flipX=true;
        cin.body.velocity.x -= 40;
        //p1.anims.play("movDerecha");
});

}

function update(time, delta){
     if(teclado.left.isDown) {
        console.log("Izquierda");
    } 
    if(teclado.right.isDown) {
        console.log("Derecha");
    } 
    if(teclado.down.isDown) {
        console.log("Abajo");
    } 
    if(teclado.up.isDown) {
        console.log("Arriba");
    } 
}