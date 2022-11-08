const MISSION_UTILS = require('@woowacourse/mission-utils');

class App {
  async play() {
    MISSION_UTILS.Console.print('숫자 야구 게임을 시작합니다.');
    newGamePlay();
    //MISSION_UTILS.Console.close();
  }
}

async function newGamePlay() {
  questionToContinueGame();
}

async function questionToContinueGame() {
  
  MISSION_UTILS.Console.readLine('게임을 새로 시작하시려면 1, 종료하려면 2를 입력하세요.', (ans) => {
    if (Number(ans) === 1) {
      console.log('Trying to run new game');
      newGamePlay();
    } else if (Number(ans) === 2) {
      MISSION_UTILS.Console.close();
    } else {
      throw new Error('잘못된 값을 입력하셨습니다. 애플리케이션을 종료합니다.');
    }
  });
}

module.exports = App;
