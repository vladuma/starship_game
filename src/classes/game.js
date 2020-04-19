import PlayableObject from './playableObject';
import ObjectFactory from './objectFactory';

import xWing from '../images/x-wing-50x50.png';
import asteroid from '../images/asteroid.png';
import food from '../images/food.png';

import '../style'
import 'normalize.css'

export default class Game {
    constructor() {
        this.init();
        this.gamePaused = false;
        this.gameIsOver = false;
        this.canvasSpeed = 600;
        this.score = 0
    }
    init() {
        this.buildGameLayout();
        this.buildMenuLayout();
        this.createControlListeners();
    }
    startGame() {
        this.createGameObjects();
        this.drawElements();
        this.hideMenu();
        this.canvas.classList.remove('pauseAnimation');
    }
    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = window.innerWidth <= 500 ? window.innerWidth: 500;
        this.canvas.height = window.innerHeight <= 900 ? window.innerHeight : 900;
        this.canvas.className = "animateBackground pauseAnimation";
        this.canvas.style.animationDuration = `${this.canvasSpeed}s`;

        this.canvasCtx = this.canvas.getContext('2d');
    }
    createScoreElement() {
        this.scoreEl = document.createElement('span');
        this.scoreEl.innerHTML = 0;
        this.scoreEl.className = "scoreEl";
    }
    createGameObjects() {
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
    }
    buildGameLayout() {
        this.createCanvas();
        this.createScoreElement();

        this.container = document.createElement('div');
        this.wrapper = document.createElement('div');

        this.container.className = "gameContainer";
        this.wrapper.className = "gameWrapper";

        this.wrapper.appendChild(this.canvas);
        this.wrapper.appendChild(this.scoreEl);
        
        this.container.appendChild(this.wrapper);

        document.body.appendChild(this.container);
    }
    buildMenuLayout() {
        this.menuBurger = document.createElement('span');
        this.overlay = document.createElement('div');
        this.overlayHeading = document.createElement('div');
        this.gameMenuButton = document.createElement('button');
        this.gameMenuButtonIcon = document.createElement('i');
        this.burgerIcon = document.createElement('i');
        
        this.menuBurger.className = "menuBurger";
        this.burgerIcon.className = "fas fa-bars";
        this.gameMenuButton.className = "gameMenuButton";
        this.gameMenuButtonIcon.className = "fas fa-arrow-right";
        this.overlayHeading.className = "gameOverlayHeading";
        this.overlay.className = "gameOverlay";
        
        this.overlayHeading.innerHTML = "Starship</br>Game";
        this.gameMenuButton.innerHTML = "Start Game";

        this.menuBurger.appendChild(this.burgerIcon);
        this.gameMenuButton.appendChild(this.gameMenuButtonIcon);
        this.overlay.appendChild(this.overlayHeading);
        this.overlay.appendChild(this.gameMenuButton);
        
        this.wrapper.appendChild(this.overlay);
        this.wrapper.appendChild(this.menuBurger);
    }
    updateGameMenu() {
        if (this.gamePaused) {
            this.gameMenuButton.innerHTML = "Restart Game";
            this.gameMenuButtonIcon.className = "fas fa-undo";
            this.gameMenuButton.appendChild(this.gameMenuButtonIcon);
        }
    }
    drawElements() {
        this.character.draw();
        this.obstacleFactory.start();
        this.foodFactory.start();
    }
    createControlListeners() {
        document.body.addEventListener('keypress', (e) => {
            this.controls(e.keyCode);
        })
    
        this.canvas.addEventListener('touchmove', (e) => {
            this.controls('drag', e);
        })

        this.menuBurger.addEventListener('click', (e) => {
            if(!this.gameIsOver) {
                this.overlay.classList.contains("hide") ?  this.pauseGame() + this.showMenu() : this.resumeGame() + this.hideMenu();
            }
        })

        this.gameMenuButton.addEventListener('click', (e) => {
            this.gamePaused ? this.restartGame() : this.startGame();
        })
    }
    showMenu() {
        this.updateGameMenu();
        this.overlay.classList.remove("hide");
    }
    hideMenu() {
        this.overlay.classList.add('hide');
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

        this.obstacleFactory.levelUp();
        this.foodFactory.levelUp();
    }
    pauseGame() {
        this.overlayHeading.innerHTML = "Paused";

        this.gamePaused = true;
        this.canvas.classList.add('pauseAnimation');
        this.obstacleFactory.stop();
        this.foodFactory.stop();
    }
    resumeGame() {   
        this.gamePaused = false;
        this.canvas.classList.remove('pauseAnimation');
        this.obstacleFactory.resume();
        this.foodFactory.resume();
    }
    restartGame() {
        this.container.parentNode.removeChild(this.container);
        this.obstacleFactory.destroy();
        this.obstacleFactory = null;
        this.foodFactory.destroy();
        this.foodFactory = null;
        this.gamePaused = false;
        this.gameIsOver = false;
        this.score = 0;
        this.init();
        this.hideMenu();
        this.startGame();
    }
    gameOver() {
        this.gameIsOver = true;
        this.gamePaused = true;

        this.pauseGame();
        this.showMenu();
        this.overlayHeading.innerHTML = "Game Over";

        this.canvas.classList.add('pauseAnimation');
    }
}