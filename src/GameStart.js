
const startMessage = require('./StartMessage');
const selectGame = require('./SelectGame');
const gameStart = (USER) => {
    startMessage();
    selectGame(USER);
};

module.exports = gameStart; 