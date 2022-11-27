const { Console } = require('@woowacourse/mission-utils');

const inputView = {
  
  userInput() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
        return input;
    } )
  }
}

inputView.userInput()