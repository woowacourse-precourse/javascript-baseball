class Player {
  constructor() {
    this.number = null;
  }

  /** abstract method */
  getNumber() {
    throw new Error('Not Implemented');
  }
  /** abstract method */
  setNumber() {
    throw new Error('Not Implemented');
  }
}

module.exports = Player;
