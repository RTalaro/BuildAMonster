class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.legL = this.add.sprite(this.bodyX+50,this.bodyY+130, "monsterParts", "leg_whiteA.png");
        my.sprite.legR = this.add.sprite(this.bodyX-50,this.bodyY+140, "monsterParts", "leg_greenB.png");
        my.sprite.legR.flipX = true;

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redC.png");

        my.sprite.armL = this.add.sprite(this.bodyX+90,this.bodyY+30, "monsterParts", "arm_darkD.png");
        my.sprite.armR = this.add.sprite(this.bodyX-80,this.bodyY+10, "monsterParts", "arm_yellowE.png");
        my.sprite.armR.flipX = true;
        my.sprite.armR.angle = 10;
      
        my.sprite.eyeL = this.add.sprite(this.bodyX+30,this.bodyY-5, "monsterParts", "eye_dead.png");
        my.sprite.eyeR = this.add.sprite(this.bodyX-20,this.bodyY+25, "monsterParts", "eye_angry_blue.png");
        my.sprite.smile = this.add.sprite(this.bodyX,this.bodyY+75, "monsterParts", "mouth_closed_teeth.png");
        my.sprite.fangs = this.add.sprite(this.bodyX,this.bodyY+75, "monsterParts", "mouthC.png");
        my.sprite.fangs.visible = false;
        
        my.sprite.hornL = this.add.sprite(this.bodyX+40,this.bodyY-80, "monsterParts", "detail_yellow_horn_large.png");
        my.sprite.hornR = this.add.sprite(this.bodyX-20,this.bodyY-105, "monsterParts", "detail_red_antenna_large.png");
    }


    update() {
        let my = this.my;    // create an alias to this.my for readability
        let keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        let keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        let keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        let keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        if(keyS.isDown){
            my.sprite.fangs.visible = false;
            my.sprite.smile.visible = true;
        }
        else if(keyF.isDown){
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        }
        else if(keyA.isDown && !keyD.isDown){
            for (const prop in my.sprite){
                //console.log(prop);
                //console.log(typeof(prop));
                my.sprite[prop].x -= 10;
            }
            //my.sprite.hornL.x -= 30;
        }
        else if(keyD.isDown && !keyA.isDown){
            for (const prop in my.sprite){
                //console.log(prop);
                //console.log(typeof(prop));
                my.sprite[prop].x += 10;
            }
            //my.sprite.hornL.x += 30;
        }
    }

}