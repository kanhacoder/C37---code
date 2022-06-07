class Game {
  constructor() {}

  update(state)
  {
    database.ref("/").update({gameState:state});
  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
  }

  
}
