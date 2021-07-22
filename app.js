import {Character} from './character.js';

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this));
        this.resize();

        this.character = new Character(this.ctx ,20, 30, 30);

        window.addEventListener('keydown', this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }

    animate(e){
        switch(e.key){
            case "ArrowLeft":
                console.log("left");
                this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight);
                this.character.move(this.ctx, "left");
                break;
            case "ArrowRight":
                console.log("right");
                this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight);
                this.character.move(this.ctx, "right");
                break;
            case "ArrowUp":
                console.log("up");
                this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight);
                this.character.move(this.ctx, "up");
                break;
            case "ArrowDown" :
                console.log("down");
                this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight);
                this.character.move(this.ctx, "down");
                break;
            default:
                break;
        }
    }
}


function init(){
    window.onload = () =>new App();
}

init();