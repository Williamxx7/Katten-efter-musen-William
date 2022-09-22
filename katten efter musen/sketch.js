// kat 1 x og y kordinater
let x =200
let y=200
// kat 2 x og y kordinater
let x2 =200
let y2=200
//størrelse på katte 
let d = 60
// brugt som variabel for hvilke retning kat 1 skal gå
let speedx = 5
let speedy = -5
let a = speedx
let b = 0
// brugt som variabel for hvilke retning kat 2 skal gå
let speedx2 = 5
let speedy2 = 5
//Musens retning
let mousexpos = 0
let mouseypos = 0
let img;
let imgx =250
let imgy =250
//definere img
let imgmus;
//Musens position
let imgmusx = 280
let imgmusy = 280
//bruges som en boolean varibel til at tjekke om de forskellige borders bliver rørt
let sidex = true 
let sidey = true
let sidex0 =  true
let sidey0 = true
//variabel det bruges som sværghisgrad
let speedup = 1
//ens score 
let score = 0
//ens highscore
let highscore = 0
//ostens position
let xost = 400
let yost = 50


function setup(){
  createCanvas(600, 600)
 // sætte følgende variablen til billed filen 
 imgmus = loadImage("mus2.png")
 imgkat = loadImage("kat.png")
 imgost = loadImage("ost.png")

}



function draw(){



  
  background(255)

  // gør at speed variablerne bliver plusset med katens kordinater så den bevæger sig i en retning 
  y+=speedy
  x+=speedx

  y2+=speedy2
  x2+=speedx2

  //laver border
  rect(0,-10,width,10)
  rect(width, 0, 10, height)
  rect(0 ,width, height, 10)
  //tilføjer kattens billed
  image(imgkat, x,y,d,d)
  image(imgkat,x2,y2,d,d)

  //tjekker om at borderen af canvaset er ramt og sender det katten i en random modsat retning
  if (x > width-d){
    speedx = random((-4,-3)*speedup)
    //tilføjer 1 til score
    score ++
  }
  if (x < 0){
    speedx = random((3,4)*speedup)
    score ++
  }
  if (y > height-d){
    speedy = random((-4,-3)*speedup)
    score ++
  }
  if (y < 0){
    speedy = random((3,4)*speedup)
    score ++
  }


  //samme for kat 2 
  if (x2 > width-d){
    speedx2 = random((-4,-3)*speedup)
    score ++
  }
  
  if (x2 < 0){
    speedx2 = random((3,4)*speedup)
    score ++
  }
 
  if (y2 > height-d){
    speedy2 = random((-4,-3)*speedup)
    score ++
  }
  

  if (y2 < 0){
    speedy2 = random((3,4)*speedup)
    score ++
  }

  //funktion der gør kattene hurtigere jo højrer score bliver dog sbliver speedup ikke mere end 4 
  if (speedup < 4){
    speedup = score/50 +1
  }



  //gør så at musen kan kontrolleres med piltasterne så længe at den ikke er ud over borderen 
  if (keyIsDown(LEFT_ARROW) && sidex0 == true ) {
    
    mousexpos -= 7;
    
  } 

  if (keyIsDown(RIGHT_ARROW) && sidex == true) {
    
    mousexpos += 7;

  }

  if (keyIsDown(UP_ARROW)&& sidey0==true) {
    
    mouseypos -= 7;
  }

  if (keyIsDown(DOWN_ARROW)&& sidey==true) {
    
    mouseypos += 7;
  } 

 


  //tegner musen 
  image(imgmus,imgmusx+mousexpos,imgmusy+mouseypos, 60,60)
 


  //tjekker om musen rammer borderen 
  if(imgmusx+mousexpos > width-45 ){
    sidex =false
  } else sidex =true

  if(imgmusx+mousexpos<0){
    sidex0 =false
  } else sidex0 = true 


  if(imgmusy+mouseypos > height-45){
    sidey =false
    }else sidey =true
  
  if(imgmusy+mouseypos<1){
    sidey0 =false
    } else sidey0 = true 

 
    //Sætter den samlet 
    mx = imgmusx+mousexpos
    my = imgmusy+mouseypos

   
    //distance formlen brug til at finde når kattene rammer musen og når musen rammer osten og kattene rammer hinaden
    mat = Math.sqrt((((x+30)-(20+mx))*((x+30)-(mx+20)))+(((y+30)-(20+my))*((y+30)-(my+20))))  
    mat2 = Math.sqrt((((x2+30)-(20+mx))*((x2+30)-(mx+20)))+(((y2+30)-(20+my))*((30+y2)-(my+20))))
    matost = Math.sqrt((((xost+12.5)-(20+mx))*((xost+12.5)-(mx+20)))+(((yost+12.5)-(20+my))*((yost+12.5)-(my+20))))  
    matkathit = ((((x+30)-(30+x2))*((x+30)-(x2+30)))+(((y+30)-(30+y2))*((y+30)-(y2+30))))  

 
    //hvis mat er mindre end 45 hvilket betyder at mus og kat1  har ramt hinaden skal bagrunden være rød og score og speedup være 0
    if (mat < 45){
      background(255,0,0)
      score = 0
      speedup = 0
    }
    
    //hvis mat er mindre end 45 hvilket betyder at mus og kat2  har ramt hinaden skal bagrunden være rød og score og speedup være 0
    if (mat2 < 45 ){
      background(255,0,0)
      score = 0
      speedup = 0
    }
    
    //sætter score i lige med  highscore hvis score er større end highscore
    if(score > highscore){
       highscore = score
     }

     //hvis de to kattte rammer hinaden ændre de retning
    if(matkathit < 2500){
      speedx = random(3,4)
      speedx2 = random(-4,-3)
      speedy = random(3,4)
      speedy2 = random(-4,-3)
    }

    //hvis musen rammer osten bliver osten flyttet til en ny lokation og score bliver plusset med 10
    if (matost < 45){
      xost = random(0,450)
      yost = random(0,450)
      score += 10
      
    }
    //tegner osten 
    image(imgost, xost, yost, 25, 25)

    //tegner highscore og score på skærmen
    text("Highscore: " + highscore, 7,30)
    text("Score: " + score, 7,15,)
    
  }