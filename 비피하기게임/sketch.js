let acidrain = [];
let rain = [];
let HPpotion = [] ;
let itemSP ;
const BACKGROUND = 'background';
let gImage = {};
let playcheck = 0;


function setup(){ 
    background(0); 
    createCanvas(windowWidth,windowHeight);
    Score = new Score();
    people = new Player(); 
    rain.push(new Rain);
    acidrain.push(new AcidRain);
    HPpotion = new potion();
    itemSP = new itemSD();
    people.setStart(); 
    noStroke();
    backgroundMusic.loop(); // 루프 걸어주는거
    backgroundMusic.setVolume(0.5); // 볼륨 바꾸는거
}
function preload(){
    gImage [BACKGROUND] = loadImage('media/background.jfif')
    backgroundMusic = loadSound( 'media/계곡의 비.MP3' );
}
function draw(){
    image(gImage[BACKGROUND],0,0,windowWidth,windowHeight);
    people.render(); 
    Score.render();
    EndOfGame();
    
    for(let i = 0; i < rain.length; i++){
        rain[i].render();
    }
    if(frameCount%300 == 0){
        addRain();
    }
    for(let i =0; i< acidrain.length; i ++){
        acidrain[i].render();
    }
    if(frameCount%700 == 0){
        addacidRain();
    }
    if(people.hp < 100){
        HPpotion.render();
    }
    if(Score.count > 50){
        itemSP.render();
    }
}
function addRain(){
    for(let i = 0; i < 1; i++){
        rain.push(new Rain);
    }
}
function addacidRain(){
    for(let i = 0; i < 1; i++){
        acidrain.push(new AcidRain);
    }
}
function EndOfGame()
{
  if(people.hp <= 0)
  {
    push();
    fill(0);
    rect(0,0,width,height);
    fill(255);
    textSize(20);
    textAlign(CENTER);
    text("GAME OVER", width/2, height/2);
    text("if you want to play the game once again, plz press f5", width/2, height/2+20);
    pop();
  }
}






