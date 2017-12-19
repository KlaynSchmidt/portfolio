var level1 = {
    fon:null,
    king:null,
    bubble:null,
    bubble2:null,
    knight1:null,
    
    preload: function(){
        game.load.image("bg", "img/bg2.jpg");
        game.load.image('king', 'img/king.gif');
        game.load.image('bubble', 'img/bubble.png');
        game.load.image('bubble2', 'img/asd.png');
        game.load.image('idle', 'img/idle.png');
        game.load.image('arrow', 'img/arrow.png');
    },
    create: function(){
        game.scale.scaleMode = Phaser.ScaleManager .SHOW_ALL;
        game.stage.backgroundColor='#97bfe2';
        this.fon=game.add.image(0,0,'bg');
        this.fon.scale.setTo(2,1.6);
        this.king=game.add.sprite(10,430,'king');
        this.king.scale.setTo(2,2);
        this.bubble=game.add.image(100,280,'bubble');
        this.bubble.scale.setTo(1,1);
        this.bubble2=game.add.image(800,280,'bubble2');
        this.bubble2.scale.setTo(1,1);
        this.idle=game.add.image(900,410,'idle');
        this.idle.scale.setTo(7,7);
        
        this.arrow=game.add.sprite(1000,50, 'arrow');
        this.arrow.scale.setTo(0.05,0.05);
        this.arrow.inputEnabled = true;
        this.arrow.events.onInputDown.add(this.clickFunc);
        
    },
    update: function(){
        
    },
    clickFunc:function(){
        game.state.start("lev2");
        
    }
}