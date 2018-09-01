var teclado;

const config = {
    width: 320*4,
    height: 180*4,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);


function preload(){
    teclado = this.input.keyboard.createCursorKeys();
    console.log("Soy preload");
    this.load.image("fondoT", "assets/bg/wallTemplado.png");
    this.load.image("fondoF", "assets/bg/cold.jpg");
    this.load.image("fondoN", "assets/bg/snow.jpg");
    this.load.spritesheet("georgie","assets/sprites/george.png",{ frameWidth: 50, frameHeight: 50},16);
    
}

function create(){
    console.log("Soy create");
    var georgie = this.add.sprite(100, 100, "georgie");
    this.add.image(500,120, "fondoT");
    this.add.image(50,120, "fondoT");
    
    

    //Buttons
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);



// First Character 
    var a = {
        key: 'walk',
        frames: this.anims.generateFrameNumbers('georgie'),
        frameRate: 6,
        yoyo: true,
        repeat: -1
    };

    arregloP1 = this.anims.generateFrameNumbers('georgie');
    anim = this.anims.create(a);
    console.log(anim);
    p1 = this.add.sprite(70, 600, "georgie");
    p1.setDisplaySize(180,180)
    console.log(p1);
    p1.anims.load('walk');

    var mD = {
        key: 'movDerecha',
        frames: ,
        frameRate: 6,
        yoyo: true,
        repeat: -1
    };

    animationRight = this.anims.create(mD);
    console.log(animationRight);
    p1.anims.load('movDerecha');


  
    
    //Events
    this.input.keyboard.on('keydown_SPACE', function (event) {

        p1.anims.play('walk');

    });

    this.input.keyboard.on('keydown_P', function (event) {

        if (p1.anims.isPaused)
        {
            p1.anims.resume();
        }
        else
        {
            p1.anims.pause();
        }

    });

    this.input.keyboard.on('keydown_right', function (event) {

            p1.anims.play('movDerecha');
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