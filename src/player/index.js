/* eslint-disable class-methods-use-this */
class Player {
  constructor () {
    this.number = null;
  }

  getNumber () {
    return this.number;
  }
  /** abstract method */
  setNumber () {
    throw new Error('Not Implemented');
  }
}

module.exports = Player;
