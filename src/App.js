const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computer = makeRandomNumber(MissionUtils);
    gameStart(computer);
  }
}

function gameStart(computer) {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (user) => {

    var strike = strikeCount(computer, user);
    var ball = ballCount(computer, user);
    ball = ball - strike;

    if(strike == 3) {
      MissionUtils.Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n");
      repeat();
    }
    else if(strike >= 1 && ball >= 1) MissionUtils.Console.print(ball + "볼 " + strike + "스트라이크");
    else if(strike >= 1) MissionUtils.Console.print(strike + "스트라이크");
    else if(ball >= 1) MissionUtils.Console.print(ball + "볼 ");
    else MissionUtils.Console.print("낫싱");

    gameStart(computer);
  });
}

function makeRandomNumber() {
  var computer = [];
  while(computer.length < 3) {
    var number = MissionUtils.Random.pickNumberInRange(1, 9);
    if(computer.includes(number) ? false : true) {
      computer.push(number);
    }
  }
  return computer.join('');
}

function strikeCount(computer, user) {
  let strike = 0;
  let computerString = String(computer);
  let userString = String(user);
  for(let i = 0; i < userString.length; i++) {
    if(computerString[i] === userString[i]) {
      strike++;
    }
  }
  return strike;
}

function ballCount(computer, user) {
  let ball = 0;
  let computerString = String(computer);
  let userString = String(user);
  for(let i = 0; i < userString.length; i++) {
    if(computerString.includes(userString[i])) {
      ball++;
    }
  }
  return ball;
}

module.exports = App;
