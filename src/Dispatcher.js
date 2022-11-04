class Dispatcher {
  #callbacks;

  constructor() {
    this.#callbacks = [];
  }

  register(callback) {
    this.#callbacks.push(callback);
  }
}

module.exports = Dispatcher;
