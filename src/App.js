const MissionUtils = require('@woowacourse/mission-utils');

const getComputerNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

const gameStartLine = () => {
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
};

const playBall = async () => {
  let user;
  const comp = getComputerNumber();
  await MissionUtils.Console.readLine('숫자를 입력해주세요. : ', (answer) => {
    if (answer.length !== 3)
      throw new Error('숫자는 세자리 수로 입력해주세요.');
    user = answer.split('');
    baseballGameRule(comp, user);
  });
};

const baseballGameRule = (comp, user) => {
  let strike = 0,
    ball = 0,
    nothing = 3;

  for (let i = 0; i < 3; i++) {
    let usrNm = Number.parseInt(user[i]);
    if (comp.includes(usrNm)) {
      ball++;
      nothing--;
    }
    if (usrNm === comp[i]) strike++;
  }

  if (nothing === 0) return MissionUtils.Console.print('낫싱');
  if (strike === 3) return;

  const result =
    (strike > 0 ? strike + '스트라이크 ' : '') +
    (ball > 0 ? ball + '볼' : '') +
    (nothing === 0 ? '낫싱' : '');

  return MissionUtils.Console.print(result);
};

class App {
  play() {
    gameStartLine();
    playBall();
  }
}

const test = new App();
test.play();

module.exports = App;
