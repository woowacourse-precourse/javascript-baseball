const Dispatcher = require('./Dispatcher');
const GameDataStore = require('./GameDataStore');
const GameDataUI = require('./GameDataUI');
const GameStatusStore = require('./GameStatusStore');
const GameStatusUI = require('./GameStatusUI');
const { makeTarget } = require('./utils');

class App {
  play() {
    const dispatcher = new Dispatcher();
    const gameDataStore = new GameDataStore();
    const gameDataUI = new GameDataUI();
    const gameStatusStore = new GameStatusStore();
    const gameStatusUI = new GameStatusUI();

    gameDataStore.injection(gameDataUI);
    gameStatusStore.injection(gameStatusUI);
    gameDataUI.injection(dispatcher);
    gameStatusUI.injection(dispatcher);

    dispatcher.register((action) => {
      if (action.type === 'game-start') {
        gameStatusStore.setGameStatus('START');
      }
    });

    dispatcher.register((action) => {
      if (action.type === 'game-start' || action.type === 'game-restart') {
        gameDataStore.setTarget(makeTarget());
      }
    });

    dispatcher.register((action) => {
      if (action.type === 'new-guess') {
        gameDataStore.setInput(action.input);
      }
    });

    dispatcher.dispatch({
      type: 'game-start',
    });
  }
}

module.exports = App;
