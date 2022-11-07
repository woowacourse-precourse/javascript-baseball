const MissionUtils = require("@woowacourse/mission-utils");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];

function makeTarget() {
  const tempArr = [];

  while (tempArr.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!tempArr.includes(number)) {
      tempArr.push(number);
    }
  }

  return [...tempArr];
}//random한 3개의 숫자를 배열형태로 return


function handleData(inputArr, targetArr) {
  let [strike, ball] = [0, 0];

  inputArr.forEach((input, idx) => {
    const targetIdx = targetArr.findIndex(target => target === input);
    if (targetIdx === idx) {
      strike += 1;
    }
    else if (targetIdx !== -1) {
      ball += 1;
    }
  })

  return printResult([strike, ball]);
}//target과 input의 ball, strike를 return함.

function printResult(countArr) {
  const [strike, ball] = countArr;

  if (strike === 0 && ball === 0) {
    Console.print("낫싱");
    return false;
  }
  else if (ball !== 0 && strike === 0) {
    Console.print(`${ball}볼`);
    return false;
  }
  else if (ball === 0 && strike !== 0) {
    Console.print(`${strike}스트라이크`);
    if (strike === 3) return true;
    else return false;
  }
  else if (ball !== 0 && strike !== 0) {
    Console.print(`${ball}볼 ${strike}스트라이크`);
    return false;
  }
}//ball, strike count에 따라 결과 출력

function isValidInput(input) {
  const regex = /^[0-9]+$/;
  if (!regex.test(input) || input.length !== 3) {
    throw new Error("유효한 입력값이 아닙니다.");
  }
}


function playGame() {
  const targetArr = makeTarget();
  readData(targetArr);
}//게임로직

function readData(targetArr) {
  let isAnswer = false;

  Console.readLine("숫자를 입력해주세요 : ", (input) => {
    isValidInput(input);
    const inputArr = [...input].map(Number);
    isAnswer = handleData(inputArr, targetArr);
    if (!isAnswer) readData(targetArr);
    else {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임종료");
      isRepeatGame();
    }
  });
}//입력을 받아서 로직을 처리하는 부분

function isRepeatGame() {
  Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요 : ", (input) => {
    if (input === "1") playGame();
    else if (input === "2") {
      Console.print("게임 종료");
      Console.close();
    }
    else {
      throw new Error("1,2 이외의 숫자가 입력되었습니다.");
    }
  });
}


class App {
  play() {
    Console.print('숫자 야구게임을 시작합니다.');
    playGame();
  }
}



const app = new App();
app.play();



module.exports = App;
