import Game from './classes/game';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

window.onload = function () {
    const game = window.game = new Game('gameContainer');
}