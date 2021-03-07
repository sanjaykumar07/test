class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers!=undefined){

    
    var yPos = 130;
    for(var plr in allPlayers){
      yPos+=20;
      text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,yPos);
    }
  }
    
  }
}
