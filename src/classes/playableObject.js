import GameObject from'./gameObject';

export default class PlayableObject extends GameObject {
    constructor(params) {
        super(params);

        this.game = params.game,
        this.width = params.width,
        this.height = params.height,
        this.floatDistance = params.floatDistance,
        this.stepDistance = params.stepDistance,
        this.x = (this.game.canvas.width - this.width) / 2,
        this.y = this.game.canvas.height - this.height - this.floatDistance
        this.imgPath = params.imgPath
    }

    move(param) {
        this.clearRect()
        typeof param === 'string' ? this.steer(param) : this.drag(param);
        this.restrictMovement();
        this.draw();
    }
    steer(direction) {
        direction === 'right' ? this.moveRight() : this.moveLeft();
    }
    drag(xPos) {
        this.clearRect();
        this.x = xPos;
        this.restrictMovement();
        this.draw();
    }
    moveRight() {
        this.x += this.stepDistance;
    }
    moveLeft() {
        this.x -= this.stepDistance;
    }
    restrictMovement() {
        if (this.x <= 0) {
            this.x = 0;
        }
        if (this.x >= this.game.canvas.width - this.width) {
            this.x = this.game.canvas.width - this.width;
        }
    }
}