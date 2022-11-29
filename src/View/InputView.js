const { Console } = require('@woowacourse/mission-utils');
const BaseballController = require('../BaseballController');

const inputView = {
  controller: new BaseballController(),
  
  userInput() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      return this.controller.inputManager(input);
    } )
  },

  userRetryInput() {
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (select) => {
      return select;
    })
  }
}

module.exports = inputView;