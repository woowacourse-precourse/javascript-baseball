const Action = require('./Action');
const Dispatcher = require('./Dispatcher');
const GameDataStore = require('./GameDataStore');
const GameDataUI = require('./GameDataUI');
const GameStatusStore = require('./GameStatusStore');
const GameStatusUI = require('./GameStatusUI');
const { makeTarget } = require('./utils');

class App {
  play() {
    const action = new Action();
    const dispatcher = new Dispatcher();
    const gameDataStore = new GameDataStore();
    const gameDataUI = new GameDataUI();
    const gameStatusStore = new GameStatusStore();
    const gameStatusUI = new GameStatusUI();

    action.injection(dispatcher);
    gameDataStore.injection(gameDataUI);
    gameStatusStore.injection(gameStatusUI);
    gameDataUI.injection(action);
    gameStatusUI.injection(action);

    dispatcher.register((payload) => {
      if (payload.type === 'game-start') {
        gameStatusStore.setGameStatus('START');
      }
    });

    dispatcher.register((payload) => {
      if (payload.type === 'game-start' || payload.type === 'game-restart') {
        gameDataStore.setTarget(makeTarget());
      }
    });

    dispatcher.register((payload) => {
      if (payload.type === 'new-guess') {
        gameDataStore.setInput(payload.input);
      }
    });

    action.sendToDispatcher({
      type: 'game-start',
    });
  }
}

const app = new App();
app.play();

module.exports = App;
