const MissionUtils = require("@woowacourse/mission-utils");

// 1. 컴퓨터가 뽑은 랜덤 숫자 3개 배열로 만드는 함수
function randomNums() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

// 2. 사용자에게 숫자 3개 받는 함수
function readNums() {
  let user;
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    user = answer.split("").map((string) => Number(string));
    user.map(num => {
      if (isNaN(num)) {
        throw "Not a number";
      }
    })
    if (user.includes(0)) {
      throw "0 exists";
    } else if (user.length !== 3) {
      throw "Not three digits";
    }
  });
  return user;
}

// 3. 컴퓨터 숫자와 사용자 숫자 비교하는 함수
function compareNums(computer, user) {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < user.length; i++) {
    if (user[i] === computer[i]) {
      strike++;
    } else if (computer.includes(user[i])) {
      ball++;
    }
  }
  return [ball, strike];
}

// 4. 3번에 비교한 결과를 바탕으로 출력해주는 함수
function printResult(score) {
  let ball = score[0];
  let strike = score[1];
  if (ball === 0 && strike === 0) {
    MissionUtils.Console.print("낫싱");
  } else if (strike === 3) {
    MissionUtils.Console.print("3스트라이크");
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  } else if (ball === 3) {
    MissionUtils.Console.print(`${ball}볼`);
  } else {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}

class App {
  play() {}
}

module.exports = App;
