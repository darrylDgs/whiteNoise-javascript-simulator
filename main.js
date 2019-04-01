window.onload = function(){
var canvas   = document.getElementById("gameArea");
var ctx      = canvas.getContext("2d");
var tileSize = 2;

var mapOrigin = 
[
[1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,1],
[1,0,1,1,1,1,1,1,0,1],
[1,0,1,0,0,0,0,1,0,1],
[1,0,1,0,1,1,0,1,0,1],
[1,0,1,0,0,1,0,1,0,1],
[1,0,1,0,0,1,0,1,0,1],
[1,0,1,1,1,1,0,1,0,1],
[1,0,0,0,0,0,0,1,0,1],
[1,1,1,1,1,1,1,1,0,1]
];


setInterval(function(){
  var map = randomMap();
  draw(map);
}, 20);

function randomMap(){
  var map = [];
  var config = {
    resolution: {
      x: 200,
      y: 200
    }
  }
  
  for(var i=0; i< config.resolution.y; i++){
    map.push([]);
    for(var j=0; j<config.resolution.x; j++){
      var randomNum = Math.floor(Math.random()*2);
      map[i].push(randomNum);
    }
    
  }
  //console.table(map);
  return map
}




function draw(mapa){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255)";
  
  
  mapa.forEach((row, i)=>{
      row.forEach((tile, j)=>{
        if(tile !== 0){
          ctx.fillRect(
            j * tileSize, i * tileSize,
            tileSize, tileSize
          );
        }
      });
  });
}


}
