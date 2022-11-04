class Dispatcher {
  #callbacks;

  constructor() {
    this.#callbacks = [];
  }

  register(callback) {
    this.#callbacks.push(callback);
  }

  dispatch(payload) {
    this.#callbacks.forEach((callback) => {
      callback(payload);
    });
  }
}

module.exports = Dispatcher;
