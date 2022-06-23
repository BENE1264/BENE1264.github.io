class potion{
    constructor(){
        this.x = random(10 , width -10);
        this.y = -100;
        this.d = 10
        this.m = 6;
    }
 
    render(){
        this.update();
        fill(255,0,0);
        rect(this.x, this.y,this.d,this.d);
    }
 
    update(){
        this.y += this.m;
 
        if(this.y > height + this.d){
            this.x = random(10 , width -10);
            this.y = -200;
        }
 
        if(people.y < this.y + this.d  ){
            if(people.hp != 0){
                if(people.x - 10 < this.x && people.x + people.size  + 10> this.x+this.d){
                    this.stop();
                   
                    }
                }
            }
        }

 
    stop(){
        this.x = random(10 , width -10);
        this.y = -100;
        people.hp += 5;
    }
    

}
