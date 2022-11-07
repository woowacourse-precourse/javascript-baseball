const Dispatcher = require('./Dispatcher');
const GameDataStore = require('./stores/GameDataStore');
const GameDataUI = require('./userInterfaces/GameDataUI');
const GameStatusStore = require('./stores/GameStatusStore');
const GameStatusUI = require('./userInterfaces/GameStatusUI');

class GameService {
  constructor() {
    this.dispatcher = new Dispatcher();
    this.gameDataStore = new GameDataStore();
    this.gameDataUI = new GameDataUI();
    this.gameStatusStore = new GameStatusStore();
    this.gameStatusUI = new GameStatusUI();
  }

  startGame() {
    this.injectDependencies();
    this.registerCallbacks();

    this.dispatcher.dispatch({
      type: 'game-start',
    });
  }

  injectDependencies() {
    this.gameDataStore.injection(this.gameDataUI);
    this.gameStatusStore.injection(this.gameStatusUI);

    this.gameDataUI.injection(this.dispatcher);
    this.gameStatusUI.injection(this.dispatcher);
  }

  registerCallbacks() {
    this.dispatcher.register((action) => {
      if (action.type === 'game-start') {
        this.gameStatusStore.setGameStatus('START');
      }
    });

    this.dispatcher.register((action) => {
      if (action.type === 'game-start' || action.type === 'game-restart') {
        this.gameDataStore.initializeGameData();
      }
    });

    this.dispatcher.register((action) => {
      if (action.type === 'new-guess') {
        this.gameDataStore.setInput(action.input);
      }
    });
  }
}

module.exports = GameService;
