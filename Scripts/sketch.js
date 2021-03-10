let score = 0; //intializing score
let level = 1; //intializing level
let speed = 5; //setting default speed of obstacle
let ball;
let obstacle = [];


function setup() {

    let fenceJumperWindow = createCanvas(1000, 700);
    fenceJumperWindow.parent('canvasDiv');
    ball = new Ball(); //calling constructor of Ball class
    obstacle.push(new Obstacle()); //creating new obstacle


}

function draw() {

    background('#aee1e1');
    textSize(32);
    fill('red');
    text('Score: '+score.toString(), 800, 30);
    text('Level: '+level.toString(), 100, 30);

    //Drawing Land
    push();
    fill('Green');
    rect(0, 550, width, 30);
    pop();

    ball.update();

    for(let i = 0; i < obstacle.length; i++){


        if(obstacle[i].collides(ball)){
            //indicating when the game is over
            fill('red');
            text('Game Over!', width/2, height/2);
            noLoop();
        }

        obstacle[i].show();
        obstacle[i].update(speed);

        if(obstacle[i].isOutOfScreen()){
            //keeping track of score
            obstacle.splice(i,1);
            score++;

            if(score % 3 == 0){
                //increasing level and speed of obstacle
                level++;
                speed += 0.5;
            }
        }

    }

    ball.show();

    if(frameCount % 70 == 0){
        //creating new obstacle after 70 frames
        obstacle.push(new Obstacle());

    }



}

function keyPressed(){

    if(key == " "){

        ball.up();

    }

}