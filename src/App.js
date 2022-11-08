const MISSION_UTILS = require('@woowacourse/mission-utils');

class App {
  play() {
    MISSION_UTILS.Console.print('숫자 야구 게임을 시작합니다.');
    newGamePlay();
  }
}

function newGamePlay() {
  const COMPETITOR = [];
  
  while(COMPETITOR.length < 3) {
    const randomNumber = MISSION_UTILS.Random.pickNumberInRange(1, 9);
    
    if (!COMPETITOR.includes(randomNumber)) {
      COMPETITOR.push(randomNumber);
    }
  }

  checkPass(COMPETITOR);

}

function questionToContinueGame() {
  
  MISSION_UTILS.Console.readLine('게임을 새로 시작하시려면 1, 종료하려면 2를 입력하세요.', (ans) => {
    if (Number(ans) === 1) {
      newGamePlay();
    } else if (Number(ans) === 2) {
      MISSION_UTILS.Console.close();
    } else {
      throw new Error('잘못된 값을 입력하셨습니다. 애플리케이션을 종료합니다.');
    }
  });
}

function checkPass(COMPETITOR) {
  MISSION_UTILS.Console.readLine('숫자를 입력해주세요 : \n', function(answer) {
    const answerArray = Array.from(String(answer), (num) => Number(num));
    if (answerArray.length !== 3 || answerArray.includes(0)) {
      throw new Error("길이가 맞지 않습니다.");
    }
    if (!checkResult(COMPETITOR, answerArray)) {
      checkPass(COMPETITOR)
    } else {
      questionToContinueGame();
    }
  });
}

function checkResult(COMPETITOR, answer) {
  let ball = 0;
  let strike = 0;
  
  for (let i = 0; i < 3; i++) {
    if (COMPETITOR[i] === answer[i]) {
      strike++;
    } else if (COMPETITOR.includes(answer[i])) {
      ball++;
    }
  }

  if (ball > 0 && strike > 0) {
    MISSION_UTILS.Console.print(`${ball}볼 ${strike}스트라이크`);
  } else if (ball > 0) {
    MISSION_UTILS.Console.print(`${ball}볼`);
  } else if (strike > 0) {
    MISSION_UTILS.Console.print(`${strike}스트라이크`);
  } else {
    MISSION_UTILS.Console.print('낫싱');
  }

  if (strike === 3) {
    MISSION_UTILS.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    return true;
  }

  return false;
}

module.exports = App;
