class Ball {

    constructor(){

        this.x = 50;
        this.y = 525;
        this.radius = 25;
        this.gravity = 0.35;
        this.velocity = 0;

    }

    show(){

        fill('red');
        ellipse(this.x, this.y, this.radius*2);

    }

    update(){

            this.velocity += this.gravity;
            this.y += this.velocity;

            if(this.y >= 525){
                //keeping the ball on the land
                this.velocity = 0;
                this.y = 525;

            }

    }

    up() {

        if(this.y == 525){

            this.velocity -= 11;

        }
    }


}