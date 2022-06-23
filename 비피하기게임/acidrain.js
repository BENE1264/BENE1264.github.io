class AcidRain{
    constructor(){
        this.x = random(10 , width -10);
        this.y = -100;
        this.w = 5;
        this.h = 30;
        this.m = this.h / this.w;
    }
 
    render(){
        this.update();
        fill(0,128,0);
        rect(this.x, this.y, this.w, this.h);
    }
 
    update(){
        this.y += this.m;
 
        if(this.y > height + this.h){
            this.x = random(10 , width -10);
            this.y = -200;
        }
 
        if(people.y < this.y + this.h + 10 ){
            if(people.hp != 0){
                if(people.x < this.x && people.x + people.size > this.x + this.w){
                    this.stop();
                    Score.count -= 20;
                }
            }
        }
        if(frameCount%700 == 0){
            this.m +=0.4;
        }
    }
 
    stop(){
        this.x = random(10 , width -10);
        this.y = -100;
        people.hp -= 30;
    }
}