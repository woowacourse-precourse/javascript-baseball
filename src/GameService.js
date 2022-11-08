const Dispatcher = require('./Dispatcher');
const GameDataStore = require('./stores/GameDataStore');
const GameDataView = require('./views/GameDataView');
const GameStatusStore = require('./stores/GameStatusStore');
const GameStatusView = require('./views/GameStatusView');
const { ACTION_TYPE, GAME_STATUS } = require('./utils/constants');

class GameService {
  constructor() {
    this.dispatcher = new Dispatcher();

    this.gameDataView = new GameDataView(this.dispatcher);
    this.gameStatusView = new GameStatusView(this.dispatcher);

    this.gameDataStore = new GameDataStore(this.gameDataView);
    this.gameStatusStore = new GameStatusStore(this.gameStatusView);
  }

  startGame() {
    this.registerCallbacks();
    this.dispatcher.dispatch({ type: ACTION_TYPE.GAME_START });
  }

  registerCallbacks() {
    this.dispatcher.register((action) => {
      if (action.type === ACTION_TYPE.GAME_START) {
        this.gameStatusStore.setGameStatus(GAME_STATUS.STARTED);
      }
    });

    this.dispatcher.register((action) => {
      if (action.type === ACTION_TYPE.GAME_START
          || action.type === ACTION_TYPE.GAME_RESTART) {
        this.gameDataStore.initializeGameData();
      }
    });

    this.dispatcher.register((action) => {
      if (action.type === ACTION_TYPE.GAME_OVER) {
        this.gameStatusStore.setGameStatus(action.nextGameStatus);
      }
    });

    this.dispatcher.register((action) => {
      if (action.type === ACTION_TYPE.NEW_GUESS) {
        this.gameDataStore.setInput(action.input);
      }
    });
  }
}

module.exports = GameService;
