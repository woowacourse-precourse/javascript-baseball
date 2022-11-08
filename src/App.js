const MissionUtils = require("@woowacourse/mission-utils");

//기능1 구현
function PrintGameStart() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

//기능2 구현
function CreateNumber() {
  //1-9 까지의 서로 다른 3가지 수 반환
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

//기능3 구현
function InputNumber(ANSWER) {
  MissionUtils.Console.readLine("숫자를 입력해주세요. : ", (number) => {
    let user = [];
    for (let i of number) user.push(Number.parseInt(i));
    console.log(ANSWER, user);
    ValidCheck(ANSWER, user);
  });
}

//기능4 구현
function ValidCheck(ANSWER, USER_NUMBER) {
  if (USER_NUMBER.length !== 3) {
    throw new Error("입력 값이 올바르지 않습니다");
  }

  PlayGame(ANSWER, USER_NUMBER);
}

//기능5 구현
function PlayGame(ANSWER, USER_NUMBER) {
  let strike = 0;
  let ball = 0;

  for (i = 0; i < 3; i++) {
    if (ANSWER.includes(USER_NUMBER[i])) {
      if (ANSWER[i] === USER_NUMBER[i]) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
  }

  if (strike === 3) {
    MissionUtils.Console.print("3스트라이크");
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    ContinueGame();
  } else {
    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print("낫싱");
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    InputNumber(ANSWER);
  }
}

//기능6 구현
function ContinueGame() {
  MissionUtils.Console.readLine("", (input) => {
    if (parseInt(input) === 1) {
      MissionUtils.Console.print("숫자를 입력해주세요 : ");
      const NEW_ANSWER = CreateNumber();
      InputNumber(NEW_ANSWER);
    } else if (parseInt(input) === 2) {
      MissionUtils.Console.close();
    }
  });
}

class App {
  play() {
    PrintGameStart();
    const ANSWER = CreateNumber();
    InputNumber(ANSWER);
  }
}

const BASEBALL_GAME = new App();

BASEBALL_GAME.play();
module.exports = App;
