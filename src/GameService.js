const Dispatcher = require('./Dispatcher');
const GameDataStore = require('./stores/GameDataStore');
const GameDataView = require('./views/GameDataView');
const GameStatusStore = require('./stores/GameStatusStore');
const GameStatusView = require('./views/GameStatusView');
const { ACTION_TYPE, GAME_STATUS } = require('./utils/constants');

class GameService {
  constructor() {
    this.dispatcher = new Dispatcher();
    this.gameDataStore = new GameDataStore();
    this.gameDataView = new GameDataView();
    this.gameStatusStore = new GameStatusStore();
    this.gameStatusView = new GameStatusView();
  }

  startGame() {
    this.injectDependencies();
    this.registerCallbacks();

    this.dispatcher.dispatch({
      type: ACTION_TYPE.GAME_START,
    });
  }

  injectDependencies() {
    this.gameDataStore.injection(this.gameDataView);
    this.gameStatusStore.injection(this.gameStatusView);

    this.gameDataView.injection(this.dispatcher);
    this.gameStatusView.injection(this.dispatcher);
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
        this.gameStatusStore.setGameStatus(action.input);
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
