var level2 = {
    fon: null,
    scarf: null,
    tree: null,
    massiv: ['red', 'blue', 'yellow', 'green', 'cyan'],

    preload: function () {
        game.load.image("rasputie", "img/rasputie.jpg");
        game.load.image('scarf', 'img/scarf.png');
        game.load.image('idle', 'img/idle.png');
        game.load.image('bubble3', 'img/bubble3.png');
        game.load.image('red', 'img/red.png');
        game.load.image('blue', 'img/blue.png');
        game.load.image('green', 'img/green.png');
        game.load.image('yellow', 'img/yellow.png');
        game.load.image('cyan', 'img/cyan.png');
        game.load.image('tree', 'img/1.png');
    },
    create: function () {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.stage.backgroundColor = '#97bfe2';
        this.fon = game.add.image(0, 0, 'rasputie');
        this.fon.scale.setTo(1, 1.3);
        this.scarf = game.add.sprite(100, 600, 'scarf');
        this.scarf.scale.setTo(0.3, 0.3);
        this.idle = game.add.image(900, 410, 'idle');
        this.idle.scale.setTo(7, 7);
        this.bubble3 = game.add.image(800, 280, 'bubble3');
        this.bubble3.scale.setTo(1, 1);

        this.tree = game.add.group();
        this.tree.enableBody = true;
        for (var i = 0; i < 5; i++) {
            var a = this.tree.create(i * 200, game.world.height - 100, 'tree');
            a.scale.setTo(0.09, 0.09);
            a.info = this.massiv[i];
        };
        this.torch = game.add.group();
        this.torch.enableBody = true;

        this.red = game.add.sprite(500, 600, 'red');
        this.red.scale.setTo(0.2, 0.2);
        this.red.inputEnabled = true;
        this.red.input.enableDrag();
        this.red.events.onDragStart.add(this.onDragStart, this);
        this.red.events.onDragStop.add(this.onDragStop, this);
        this.torch.add(this.red)

        this.blue = game.add.sprite(450, 550, 'blue');
        this.blue.scale.setTo(0.2, 0.2);
        this.blue.inputEnabled = true;
        this.blue.input.enableDrag();
        this.blue.events.onDragStart.add(this.onDragStart, this);
        this.blue.events.onDragStop.add(this.onDragStop, this);
        this.torch.add(this.blue)
        this.green = game.add.sprite(650, 550, 'green');
        this.green.scale.setTo(0.2, 0.2);
        this.green.inputEnabled = true;
        this.green.input.enableDrag();
        this.green.events.onDragStart.add(this.onDragStart, this);
        this.green.events.onDragStop.add(this.onDragStop, this);
        this.torch.add(this.green)
        this.yellow = game.add.sprite(700, 490, 'yellow');
        this.yellow.scale.setTo(0.2, 0.2);
        this.yellow.inputEnabled = true;
        this.yellow.input.enableDrag();
        this.yellow.events.onDragStart.add(this.onDragStart, this);
        this.yellow.events.onDragStop.add(this.onDragStop, this);
        this.torch.add(this.yellow)

        this.cyan = game.add.sprite(550, 530, 'cyan');
        this.cyan.scale.setTo(0.2, 0.2);
        this.cyan.inputEnabled = true;
        this.cyan.input.enableDrag();
        this.cyan.events.onDragStart.add(this.onDragStart, this);
        this.cyan.events.onDragStop.add(this.onDragStop, this);

        this.torch.add(this.cyan)
    },
    onDragStart: function () {

    },
    onDragStop: function () {

    },


    update: function () {
        game.physics.arcade.overlap(this.tree, this.torch, this.check);

    },
    count: 0,
    check: function (a, b) {
        if (a.info == b.key) {
            console.log('правильно!');
            a.body.enable = false;
            b.body.enable = false;
            level2.count++;
            if(level2.count==5){
               game.state.start('lev3')
            }
        }

        // console.log(a.info,b.key)
    },

};
