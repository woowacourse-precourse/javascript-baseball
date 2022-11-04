const Action = require('./Action');
const Dispatcher = require('./Dispatcher');

class App {
  #action;

  #dispatcher;

  constructor() {
    this.#action = {};
    this.#dispatcher = {};
  }

  play() {
    this.#action = new Action();
    this.#dispatcher = new Dispatcher();

    this.#action.injection(this.#dispatcher);
    this.#dispatcher.register(() => console.log('a'));
    this.#dispatcher.register((payload) => console.log(payload));
    this.#action.sendToDispatcher('asd');
  }
}

const app = new App();
app.play();

module.exports = App;
