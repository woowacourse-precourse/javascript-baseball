class Action {
  #dispatcher;

  constructor() {
    this.#dispatcher = {};
  }

  injection(newDispatcher) {
    this.#dispatcher = newDispatcher;
  }

  sendToDispatcher(action) {
    this.#dispatcher.dispatch(action);
  }
}

module.exports = Action;
