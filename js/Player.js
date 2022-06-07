class Player {
  constructor() 
  {
    this.name = null;
    this.index = null;
    this.positionX = 0;
  }

  addPlayer()
  {
    var playerIndex = "/player"+this.index;
    console.log(playerIndex);
    database.ref(playerIndex).update({name:this.name,positionX:this.positionX});
  }

  updateCount(count)
  {
    database.ref("/").update({playerCount:count});
  }
}
