class BONUS{
    constructor(){
        this.x = random(-10,windowWidth + 10);
        this.y = -100;
        this.d = 5;
        this.m = 20
    }
    render(){
        this.update();
        fill(0);
        rect(this.x, this.y,this.d,this.d);
    }
    update(){
        this.y += this.m;
 
        if(this.y > height + this.d){
            this.x = random(10 , width -10);
            this.y = -200;
        }
 
        if(people.y < this.y   ){
            if(people.hp != 0){
                if(people.x - 10 < this.x && people.x + people.size + 10 > this.x+ 20){
                    this.stop();
                    people.speed +=0.1;
                }
            }
        }
    }
    stop(){
        createCanvas(windowWidth,windowHeight);
        background(0);
        
    }
}

