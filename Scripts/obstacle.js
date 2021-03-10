class Obstacle {

    constructor(){

        this.obstacleWidth = 25;
        this.x = width - this.obstacleWidth;
        this.y2 = random(50, 150);
        this.collision = false;
    }

    show(){

        if(this.collision == true){

            fill('red');

        }
        else{

            fill(50);

        }

            rect(this.x, 550 - this.y2, this.obstacleWidth, this.y2);

    }

    update(speed){

            this.x -= speed;   
    }

    collides(ball){
        //indicating when the ball is colliding the obstacle
        if(ball.y + 25 > 550 - this.y2){

            if(ball.x + 25 > this.x && ball.x + 25 < this.x + this.obstacleWidth){

                this.collision = true;
                return true;
            }

        }
    }

    isOutOfScreen(){

        if(this.x < -this.obstacleWidth){

            return true;

        }else{

            return false;

        }

    }




}