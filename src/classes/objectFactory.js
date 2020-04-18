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
        this.interval = setInterval(this.createObstacle, this.spawnSpeed, this);
    }
    createObstacle(self) {
        const xPos = Math.floor(Math.random() * this.game.canvas.width);
        self.object = new UnPlaybleObject({
            size: (Math.floor(Math.random() * 3) + 1) * 10,
            x: xPos,
            speed: self.speed,
            character: self.character,
            imgPath: self.imgPath,
            collisionAction: self.collisionAction,
            game: self.game,
        });
        
        self.objects.push(self.object);

        self.object.fall();
    }
    levelUp() {
        this.spawnSpeed <= 0 ? this.spawnSpeed -= 150 : 150 ;
        this.speed += 0.10;
    }
    stop() {
        this.objects.forEach(object => {
            object.pause();
            clearInterval(this.interval);
        })
    }
}