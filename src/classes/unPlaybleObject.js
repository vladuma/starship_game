import GameObject from'./gameObject';

export default class UnPlayableObject extends GameObject {
    constructor(params) {
        super(params);
        
        this.size = params.size,
        this.x = params.x, //spawnPosition()
        this.y = params.size,
        this.width = params.size * 2,
        this.height = params.size * 2,
        this.speed = params.speed,
        this.defaultSpeed = this.speed,
        this.collisionAction = params.collisionAction,
        this.game = params.game,
        this.imgPath = params.imgPath
    }

    move() {
        this.clearRect()
        this.y += this.speed;
        this.draw();
    }
    fall() {
        this.move()

        if (this.y < this.game.canvas.height + this.size) {
            if (!this.collision()){
                window.requestAnimationFrame(() => this.fall());
            } else {
                this.game[this.collisionAction]();
                this.collisionAction === 'scoreUp' ? this.clearRect() : null;
            }
        } else {
            this.clearRect();
            this.speed = 0;
        }
    }
    collision() {
        return (this.game.character.x < this.x + this.width &&
                this.game.character.x + this.game.character.width > this.x &&
                this.game.character.y < this.y + this.height &&
                this.game.character.y + this.game.character.height > this.y);
    }
    resume() {
        this.speed = this.savedSpeed ? this.savedSpeed : this.defaultSpeed;
    }
    stop() {
        this.savedSpeed = this.speed;
        this.speed = 0
    }
}