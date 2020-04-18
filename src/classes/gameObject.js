export default class GameObject {

    draw(){
        const img = document.createElement('img');
        img.src = `${this.imgPath}`;
        this.game.canvasCtx.drawImage(img, this.x, this.y, this.width, this.height);
    }
    clearRect() {
        this.game.canvasCtx.clearRect(this.x, this.y , this.width, this.height);
    }
}