import UnPlaybleObject from './unPlaybleObject';

export default class ObjectFactory {
    constructor(params) {
        this.objects = [];
        this.spawnSpeed = params.spawnSpeed;
        this.speed = params.speed;
        this.character = params.character
        this.collisionAction = params.collisionAction
        this.imgPath = params.imgPath
    }

    start() {
        this.interval = setInterval(this.createObstacle, this.spawnSpeed, this);
    }
    createObstacle(self) {
        const xPos = Math.floor(Math.random() * window.canvas.width);
        self.object = new UnPlaybleObject({
            size: (Math.floor(Math.random() * 3) + 1) * 10,
            x: xPos,
            speed: self.speed,
            character: self.character,
            imgPath: self.imgPath,
            collisionAction: self.collisionAction
        });
        
        self.objects.push(self.object);

        self.object.fall();
    }
    stop() {
        this.objects.forEach(object => {
            object.pause();
            clearInterval(this.interval);
        })
    }
}