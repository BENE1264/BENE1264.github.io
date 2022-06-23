class Score{
    constructor(){
        this.count = 0;
    }
    
    render(){
        fill(255,255,255);
        textSize(50);
        textAlign(CENTER);
        text(this.count, width/2 , 80);
    }
}