class Player {
  constructor(){
    this.index = null
    this.distance = 0
    this.name = null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  static getPlayerInfo(){
    var playerInfo = database.ref('players');
    playerInfo.on('value',(data)=>{
      allPlayers = data.val();

    })  
  }

  update(){
    console.log(this.index)
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance : this.distance

    });
  }
}
