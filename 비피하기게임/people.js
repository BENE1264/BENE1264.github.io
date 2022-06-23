class Player{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.size = 30;
        this.speed = 6;
        this.hp = 100;
    }

    render(){
        this.HPpoint(); 
        this.checkbox();
        fill(255);
        textSize(20);
        textAlign(CENTER);
        text("BENE나나", this.x + this.size / 2 , this.y - this.size + 10);
        rect(this.x, this.y, this.size, this.size);
    }
    checkbox(){
        this.조작법();
        if(this.x > width + this.size){
            this.x = 0;
        }else if(this.x < -20){
            this.x = width - this.size;
        }
    }
    조작법(){
        if(keyIsDown(LEFT_ARROW)){
            this.x -= this.speed;
        }
        if(keyIsDown(RIGHT_ARROW)){
            this.x += this.speed;
        }
        
    }
    setStart(){
        this.x = width/2 - this.size / 2;
        this.y = height - this.size - 2;
    }
    HPpoint(){ 
        fill(255,0,0);
        rect(20 , 20 , this.hp * 3 , 30);
        push();
        fill(0);
        textSize(20);
        textAlign(CENTER);
        text("HP:"+this.hp,58,42);
        pop();
    }
}
