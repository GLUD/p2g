var teclado;
var puntaje=500;
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
    this.load.image("logo", "assets/logo.png");
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

    this.add.image(1150,150, "logo").setScale(0.3);
    var ba1 = this.add.image(600,600, "basura1").setScale(2,2);
    var ba2 = this.add.image(800,600, "basura2").setScale(2,2);
    this.add.image(360,360, "basura3").setScale(2,2);
    this.add.image(480,480, "basura4").setScale(2,2);


   

//Events
    this.input.keyboard.on('keydown_SPACE', function (event) {
        if(cin.body.x-){
            cin.anims.play("cindyArroja");
        }else{
            cin.anims.play("cindyArroja");
        }
        

    });

    this.input.keyboard.on('keydown_UP', function (event) {

        //console.log("Aqui deberias saltar");

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
    });

    this.input.keyboard.on("keydown_LEFT", function (event) {
        console.log("hola mundo reversa");
        cin.flipX=true;
        cin.body.velocity.x -= 40;

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