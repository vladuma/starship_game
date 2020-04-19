import PlayableObject from './playableObject';
import ObjectFactory from './objectFactory';

import xWing from '../images/x-wing-50x50.png';
import asteroid from '../images/asteroid.png';
import food from '../images/food.png';

import '../style'
import 'normalize.css'

export default class Game {
    constructor() {
        this.startGame();

        this.canvasSpeed = 600;
        this.score = 0
    
        this.character = new PlayableObject({
            width: 100,
            height: 107,
            floatDistance: 50,
            stepDistance: 15,
            imgPath: xWing,
            game: this
        });
    
        this.obstacleFactory = new ObjectFactory({
            spawnSpeed: 1800, 
            character: this.character,
            collisionAction: 'gameOver',
            imgPath: asteroid,
            game: this
        });
    
        this.foodFactory = new ObjectFactory({
            spawnSpeed: 2300, 
            character: this.character,
            collisionAction: 'scoreUp',
            imgPath: food,
            game: this
        });
        
        this.drawElements();
    }
    startGame() {
        this.buildGameLayout();
        this.createcontrolListeners();
    }
    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = window.innerWidth <= 500 ? window.innerWidth: 500;
        this.canvas.height = window.innerHeight <= 900 ? window.innerHeight : 900;
        this.canvas.className = "animateBackground";
        this.canvas.style.animationDuration = `${this.canvasSpeed}s`;

        this.canvasCtx = this.canvas.getContext('2d');
    }
    createScoreElement() {
        this.scoreEl = document.createElement('span');
        this.scoreEl.innerHTML = 0;
        this.scoreEl.className = "scoreEl";
    }
    buildGameLayout() {
        this.createCanvas();
        this.createScoreElement();

        const container = document.createElement('div');
        const wrapper = document.createElement('div');

        container.className = "gameContainer";
        wrapper.className = "gameWrapper";

        wrapper.appendChild(this.canvas);
        wrapper.appendChild(this.scoreEl);
        
        container.appendChild(wrapper);

        document.body.appendChild(container);
    }
    drawElements() {
        this.character.draw();
        this.obstacleFactory.start();
        this.foodFactory.start();
    }
    createcontrolListeners() {
        document.body.addEventListener('keypress', (e) => {
            this.controls(e.keyCode);
        })
    
        this.canvas.addEventListener('touchmove', (e) => {
            this.controls('drag', e);
        })
    }
    controls (keyCode, e) {
        switch (keyCode) {
            case 97:
                this.character.move('left');
                break;
            case 100:
                this.character.move('right');
                break;
            case 'drag':
                this.character.move(this.getTouchPosition(e));
                break;
            default:
                return false;
        }
    }
    getTouchPosition (e) {
        var touch = e.touches['0'];
        var mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        return mouseEvent.x;
    }
    scoreUp() {
        this.score++;
        this.scoreEl.innerHTML = this.score;
        // this.canvasSpeed -= 10;

        // this.canvas.style.animationDuration = this.canvasSpeed <= 10 ? 10 : `${this.canvasSpeed}s`;

        this.obstacleFactory.levelUp();
        this.foodFactory.levelUp();
    }
    gameOver() {
        this.canvas.className = "";
        this.obstacleFactory.stop();
        this.foodFactory.stop();
    }
}