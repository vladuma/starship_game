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
        this.collisionAction = params.collisionAction,
        this.character = params.character,

        this.imgPath = params.imgPath
    }

    move() {
        this.clearRect()
        this.y += this.speed;
        this.draw();
    }
    fall() {
        this.move()

        if (this.y < canvas.height + this.size) {
            if (!this.collision()){
                window.requestAnimationFrame(() => this.fall());
            } else {
                window.game[this.collisionAction]();
                this.collisionAction === 'scoreUp' ? this.clearRect() : null;
            }
        } else {
            this.clearRect();
            this.speed = 0;
        }
    }
    collision() {
        return (this.character.x < this.x + this.width &&
                this.character.x + this.character.width > this.x &&
                this.character.y < this.y + this.height &&
                this.character.y + this.character.height > this.y);
    }
    pause() {
        this.speed = 0
    }
}