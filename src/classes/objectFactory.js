import UnPlaybleObject from './unPlaybleObject';

export default class ObjectFactory {
    constructor(params) {
        this.speed = 2;
        this.spawnSpeed = params.spawnSpeed;
        this.character = params.character
        this.imgPath = params.imgPath
        this.collisionAction = params.collisionAction
        this.objects = [];
        this.game = params.game
    }

    start() {
        this.interval = setInterval(() => {
            this.createObstacle();
        }, this.spawnSpeed);
    }
    createObstacle() {
        // console.log(this);
        const xPos = Math.floor(Math.random() * this.game.canvas.width);
        this.object = new UnPlaybleObject({
            size: (Math.floor(Math.random() * 3) + 1) * 10,
            x: xPos,
            speed: this.speed,
            character: this.character,
            imgPath: this.imgPath,
            collisionAction: this.collisionAction,
            game: this.game,
        });
        
        this.objects.push(this.object);

        this.object.fall();
    }
    levelUp() {
        this.spawnSpeed <= 0 ? this.spawnSpeed -= 150 : 150 ;
        this.speed += 0.10;
    }
    resume() {
        this.start();
        this.objects.forEach(object => {
            object.resume();
        })
    }
    stop() {
        clearInterval(this.interval);

        this.objects.forEach(object => {
            object.stop();
        })
    }
    destroy() {
        clearInterval(this.interval);

        this.objects.forEach(object => {
            object.stop();
            object.x = -100;
            object.y = -100;
        })
        this.objects = null;
        this.interval = null;

    }
}