import PlayableObject from './classes/playableObject';
import ObjectFactory from './classes/objectFactory';
// import {CreateFood} from './food.js';

import xWing from './images/x-wing-50x50.png';
import asteroid from './images/asteroid.png';
import food from './images/food.png';

import './style'

window.onload = function () {
    const game = window.game = new Game('gameContainer');
    game.startGame();
}


class Game {
    constructor() {
        this.canvas = window.canvas = this.createCanvas(),
        this.canvasCtx = window.canvasCtx = this.canvas.getContext('2d');
        
        this.globalSpeed = window.globalSpeed = 2;
        this.score = 0
        this.obstacleSpawnSpeed = 2000;
        this.obstacles = []
        this.foodSpawnSpeed = 1800
        this.food = []
    
        this.character = window.character = new PlayableObject({
            width: 100,
            height: 107,
            floatDistance: 100,
            stepDistance: 15,
            imgPath: xWing
        });
    
        this.obstacleFactory = new ObjectFactory({
            speed: this.globalSpeed, 
            spawnSpeed: this.obstacleSpawnSpeed, 
            character: this.character,
            collisionAction: 'gameOver',
            imgPath: asteroid
        });
    
        this.foodFactory = new ObjectFactory({
            speed: this.globalSpeed, 
            spawnSpeed: this.obstacleSpawnSpeed, 
            character: this.character,
            collisionAction: 'scoreUp',
            imgPath: food
        });
    }

    createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.width = 500;
        canvas.height = 900;

        canvas.className = "animateBackground";
        document.body.appendChild(canvas);
        return canvas;
    }

    startGame() {
        this.createScoreElement();
        this.createcontrolListeners();

        this.character.draw();
        this.obstacleFactory.start();
        this.foodFactory.start();
    }
    scoreUp() {
        this.score++
        this.scoreEl.innerHTML = this.score
        this.levelUp()
    }
    levelUp() {
        this.obstacleSpawnSpeed -= 100
        this.foodSpawnSpeed -= 100
        window.globalSpeed += 0.05
    }

    createcontrolListeners() {
        document.body.addEventListener('keypress', (e) => {
            this.controls(e.keyCode);
        })
    
        this.canvas.addEventListener('touchmove', (e) => {
            this.controls('drag', e);
        })
    }

    getTouchPosition (e) {
        var touch = e.touches['0'];
        var mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        return mouseEvent.x;
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
        this.scoreEl = document.createElement('h3')
        this.scoreEl.innerHTML = 0;

        document.body.appendChild(this.scoreEl);
    }
}