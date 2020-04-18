import PlayableObject from './playableObject';
import ObjectFactory from './objectFactory';

import xWing from '../images/x-wing-50x50.png';
import asteroid from '../images/asteroid.png';
import food from '../images/food.png';

import '../style'
import 'normalize.css'

export default class Game {
    constructor() {
        this.canvas = this.createCanvas(),
        this.canvasCtx = this.canvas.getContext('2d');
        
        this.score = 0
        this.obstacles = []
        this.food = []
    
        this.character = new PlayableObject({
            width: 100,
            height: 107,
            floatDistance: 150,
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
    }

    createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.width = window.innerWidth <= 500 ? window.innerWidth: 500;
        canvas.height = window.innerHeight <= 900 ? window.innerHeight : 900;

        canvas.className = "animateBackground";
        document.body.appendChild(canvas);

        return canvas;
    }

    startGame() {
        this.createScoreElement();
        this.createcontrolListeners();

        setTimeout(() => {
            this.character.draw();
            this.obstacleFactory.start();
            this.foodFactory.start();
        }, 1000);
    }
    scoreUp() {
        this.score++
        this.scoreEl.innerHTML = this.score
        this.levelUp()
    }
    levelUp() {
        this.obstacleFactory.levelUp();
        this.foodFactory.levelUp();
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

    generateFood() {
        const yPos = Math.floor(Math.random() * this.canvas.width);
        const food = new CreateFood(yPos);
        
        this.food.push(food);

        food.fall();
    }

    gameOver() {
        this.canvas.className = "";
        this.obstacleFactory.stop();
        this.foodFactory.stop();
    }

    createScoreElement() {
        this.scoreEl = document.createElement('span');
        this.scoreEl.innerHTML = 0;
        this.scoreEl.className = "scoreEl";

        document.body.appendChild(this.scoreEl);
    }
}