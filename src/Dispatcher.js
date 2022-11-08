class Dispatcher {
  #callbacks;

  constructor() {
    this.#callbacks = [];
  }

  register(callback) {
    this.#callbacks.push(callback);
  }

  dispatch(action) {
    this.#callbacks.forEach((callback) => {
      callback(action);
    });
  }
}

module.exports = Dispatcher;
