const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/gameMessages');

const InputView = {
    askAnswer (handleInputAnswer) {
        Console.readLine(MESSAGE.GAME.INPUT, handleInputAnswer);    
    },

    askRestart (checkRestart) {
        Console.readLine(MESSAGE.GAME.ASK_RESTART,checkRestart);
    }
}

module.exports = InputView;