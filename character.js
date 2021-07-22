export class Character{
    constructor(ctx, radius, xSpeed, ySpeed){
        this.radius=radius;
        this.vx=xSpeed;
        this.vy=ySpeed;

        this.x=radius;
        this.y=document.body.clientHeight-radius;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle="#fdd700";
        ctx.fill();
    }

    move(ctx, direction){
        switch(direction){
            case "left" :
                this.x -= this.vx;
                break;
            case "right" :
                this.x += this.vx;
                break;
            case "up" :
                this.y -= this.vy;
                break;
            case "down" :
                this.y += this.vy;
                break;
            default:
                break;
        }
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle="#fdd700";
        ctx.fill();
    }
}