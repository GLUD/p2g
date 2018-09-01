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
    this.load.image("caneca", "assets/sprites/bin.png");
    this.load.image("basura1", "assets/sprites/anvil.png");
    this.load.image("basura2", "assets/sprites/can_red.png");
    this.load.image("basura3", "assets/sprites/dumpster1.png");
    this.load.image("basura4", "assets/sprites/treeAlien_small.png");
    this.load.spritesheet("georgie","assets/sprites/george.png",{ frameWidth: 48, frameHeight: 48},16);
    this.load.spritesheet("cindy","assets/sprites/girl.png",{ frameWidth: 96, frameHeight: 130},21);
    
}

function create(){
    console.log("Soy create");

//Adicion imagenes y sprites
    this.add.image(500,120, "fondoT");
    var can = this.add.image(1200,570, "caneca").setScale(0.2,0.2);

    

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

var cindyThrow = {
    key: "cindyArroja",
    frames : this.anims.generateFrameNumbers('cindy',{start:17, end:17}),
    frameRate : 1,
    yoyo : true,
    repeat: -1
};


    cindyC = this.anims.create(cindyWalk);
    cindyA = this.anims.create(cindyThrow);

    console.log(cindyC);
    console.log(cindyA);

    cin = this.add.sprite(70, 600, "cindy");
    cin.setDisplaySize(180,180)
    console.log(cin); 


    cin.anims.load("cindyCamina");
    cin.anims.load("cindyArroja");

    this.physics.world.enable([ cin ]);
    cin.body.setVelocity(0,0);

    this.physics.world.enable([ can ]);
    can.body.setVelocity(0,0);


    this.add.image(600,600, "basura1").setScale(2,2);
    this.add.image(800,600, "basura2").setScale(2,2);
    this.add.image(360,360, "basura3").setScale(2,2);
    this.add.image(480,480, "basura4").setScale(2,2);


    //cin.setCollideWorldBounds(true);

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
        cin.anims.play("cindyArroja");

    });

    this.input.keyboard.on('keydown_UP', function (event) {

        //console.log("Aqui deberias saltar");

    });

    if((cin.body.x-can.body.x > 0 && cin.body.x-can.body.x < 25) && teclado.up.isDown){
        console.log("Algo iinteresante pasa aqio");
    }
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
           if (cin.flipX==true){
            cin.flipX=false;
            cin.anims.play("cindyCamina");
            cin.body.velocity.x += 40;}
            else{    
                cin.anims.play("cindyCamina");
                cin.body.velocity.x += 40;
            }
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