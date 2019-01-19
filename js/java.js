var screen;
var k=20,mouseX,mouseY;
var screen = document.getElementById('canvas');
var print = screen.getContext("2d");
var player = true;

arr = new Array();
for(var i=0; i<=k+2; i++){
  arr[i] = new Array();
  for(var j=0; j<=k+2; j++){
    arr[i][j] = 0;
  }
}

window.onload = function(){
    screen.width = window.innerHeight;
    screen.height = window.innerHeight;

    print.beginPath();
    print.lineWidth = 1;
    print.lineCap = "butt";
    for (var x = -0.2; x < window.innerHeight; x += window.innerHeight / k) {
      print.moveTo(x, 0);
      print.lineTo(x, window.innerHeight);
    }
    for (var y = -0.2; y < window.innerHeight; y += window.innerHeight / k) {
      print.moveTo(0, y);
      print.lineTo(window.innerHeight, y);
    }
    print.strokeStyle = "#000000";
    print.stroke();
    print.closePath();
}
screen.onclick = function(event){
  event = event || window.event;
  if (window.innerHeight>=window.innerWidth){
    mouseX = event.pageX;
    mouseY = event.pageY;
  }
  else {
    mouseX = event.pageX+(window.innerHeight-window.innerWidth)/2;
    mouseY = event.pageY;
  }
var x=1;
while (window.innerHeight/k*x<=mouseX){x++;}
mouseX=window.innerHeight/k*(x-0.5);
var y=1;
while (window.innerHeight/k*y<=mouseY){y++;}
mouseY=window.innerHeight/k*(y-0.5);

if (arr[x][y]==0){
  if (player != false){
    printX(mouseX,mouseY);
    arr[x][y]='Крестик';
    player= false;
  }
  else {
    printO(mouseX,mouseY);
    arr[x][y]='Нолик';
    player= true;
  }
}

if(step(0,1,x,y)==6){alert(arr[x][y]+ ' победил!');
restart(x,y);} else {
if(step(1,0,x,y)==6){alert(arr[x][y]+ ' победил!');
restart(x,y);} else {
if(step(1,-1,x,y)==6){alert(arr[x][y]+ ' победил!');
restart(x,y);} else {
if(step(1,1,x,y)==6){alert(arr[x][y]+ ' победил!');
restart(x,y);}}}}
}

printX = function(x,y){
  print.beginPath();
  print.lineCap = "round";
  print.lineWidth = 100/k;
  var del = window.innerHeight/k/10*3;
  print.moveTo(x-del, y-del);
  print.lineTo(x+del, y+del);
  print.moveTo(x+del, y-del);
  print.lineTo(x-del, y+del);
  print.strokeStyle = "red";
  print.stroke();
  print.closePath();
}
printO = function(x,y){
  print.beginPath();
  print.lineCap = "round";
  print.lineWidth = 100/k;
  var del = window.innerHeight/k/10*3;
  print.arc(x, y, del, 0, Math.PI * 2, false);
  print.strokeStyle = "blue";
  print.stroke();
  print.closePath();
}




restart = function(x,y){
  for(var i=1; i<=k; i++){
    for(var j=1; j<=k; j++){
      arr[i][j] = 0;
    }
  }
  print.beginPath();
  print.clearRect(0, 0, screen.width, screen.height);
  print.lineWidth = 1;
  print.lineCap = "butt";
  for (var x = -0.2; x < window.innerHeight; x += window.innerHeight / k) {
    print.moveTo(x, 0);
    print.lineTo(x, window.innerHeight);
  }
  for (var y = -0.2; y < window.innerHeight; y += window.innerHeight / k) {
    print.moveTo(0, y);
    print.lineTo(window.innerHeight, y);
  }
  print.strokeStyle = "#000000";
  print.stroke();
  print.closePath();
}
step = function(dx,dy,x,y){
  var end=true;
  var DePl=1;
  var DeMi=-1;
  while (DePl<6 && end==true){
    if (arr[x][y]==arr[x+dx*DePl][y+dy*DePl]){DePl+=1;}
    else {end=false;}
  }
  end=true;
  while (DeMi>-6 && end==true){
  if (arr[x][y]==arr[x+dx*DeMi][y+dy*DeMi]){DeMi-=1;}
  else {end=false;}
  return DePl-DeMi;
  }
}
