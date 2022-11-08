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
    this.changeGameStatusWhenGameStart();
    this.changeGameStatusWhenGameOver();
    this.initializeGameWhenGameStartOrRestart();
    this.changeGameDataWhenNewGuess();
  }

  changeGameStatusWhenGameStart() {
    this.dispatcher.register((action) => {
      if (action.type === ACTION_TYPE.GAME_START) {
        this.gameStatusStore.setGameStatus(GAME_STATUS.STARTED);
      }
    });
  }

  changeGameStatusWhenGameOver() {
    this.dispatcher.register((action) => {
      if (action.type === ACTION_TYPE.GAME_OVER) {
        this.gameStatusStore.setGameStatus(action.nextGameStatus);
      }
    });
  }

  initializeGameWhenGameStartOrRestart() {
    this.dispatcher.register((action) => {
      if (action.type === ACTION_TYPE.GAME_START
          || action.type === ACTION_TYPE.GAME_RESTART) {
        this.gameDataStore.initializeGameData();
      }
    });
  }

  changeGameDataWhenNewGuess() {
    this.dispatcher.register((action) => {
      if (action.type === ACTION_TYPE.NEW_GUESS) {
        this.gameDataStore.setBallsAndStrikesWithInput(action.input);
      }
    });
  }
}

module.exports = GameService;
