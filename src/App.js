const { Console, Random } = require("@woowacourse/mission-utils");
let computer = [];
class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    computer = [];
    randomNumber();
    console.log(computer);
    insertAnswer();
  }
}

function randomNumber() {
  while (computer.length < 3) {
    const randomNumberPicked = Random.pickNumberInRange(1, 9);
    if (!computer.includes(randomNumberPicked)) {
      computer.push(parseInt(randomNumberPicked, 10));
    }
  }
  // Console.print(computer);
}

function insertAnswer() {
  Console.readLine("숫자를 맞춰주세요", (answer) => {
    if (validateInput(answer) === false) {
      throw "you inserted wrong";
    }
    const HINT = scoreInput(Array.from(answer));
    if (showHint(HINT) === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      restartOrEnd();
    } else {
      insertAnswer();
    }
  });
}

function validateInput(input) {
  const REGEXP = /^[1-9]+$/; //1-9가 들어갔는지 확인
  if (REGEXP.test(input) && input.split("").length === 3) {
    return true;
  } else {
    return false;
  }
}

function scoreInput(answer) {
  let count = { ball: 0, strike: 0, nothing: 0 };
  answer.forEach((element) => {
    const indexElement = answer.indexOf(element);
    element = parseInt(element, 10);
    if (element === computer[indexElement]) {
      count.strike += 1;
    } else if (computer.includes(element)) {
      count.ball += 1;
    } else {
      count.nothing += 1;
    }
  });
  return count;
}

function showHint(obj) {
  const ballNum = Number(obj.ball);
  const strikeNum = Number(obj.strike);
  const nothingNum = Number(obj.nothing);
  if (strikeNum === 3) {
    Console.print("3스트라이크");
    return strikeNum;
  }
  if (ballNum !== 0 && strikeNum !== 0) {
    Console.print(`${ballNum}볼 ${strikeNum}스트라이크`);
  }
  if (ballNum !== 0 && strikeNum === 0) {
    Console.print(`${ballNum}볼`);
  }
  if (ballNum === 0 && strikeNum !== 0) {
    Console.print(`${strikeNum}스트라이크`);
  }
  if (nothingNum === 3) {
    Console.print("낫싱");
  }
}

function restartOrEnd() {
  Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (answer) => {
      const ANSWERED = Number(answer);
      if (ANSWERED === 1) {
        const game = new App();
        game.play();
      }
      if (ANSWERED === 2) {
        Console.close();
      }
    }
  );
}
const gameStart = new App();
gameStart.play();
module.exports = App;
