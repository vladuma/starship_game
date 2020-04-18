export default class GameObject {

    draw(){
        const img = document.createElement('img');
        img.src = `${this.imgPath}`;
        canvasCtx.drawImage(img, this.x, this.y, this.width, this.height);
    }
    clearRect() {
        canvasCtx.clearRect(this.x, this.y , this.width, this.height);
    }
}