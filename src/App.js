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

const playBall = (comp, user) => {
  if (user.length > 3 || user.length <= 0)
    throw new Error('숫자는 세자리 수로 입력해주세요.');
  let [strike, ball, nothing] = baseballGameRule(comp, user);
  const result =
    (ball > 0 ? ball + '볼 ' : '') +
    (strike > 0 ? strike + '스트라이크' : '') +
    (nothing === 3 ? '낫싱' : '');

  MissionUtils.Console.print(result);

  if (strike === 3) {
    gameOver();
  } else oneMoreGuess(comp);
};

const baseballGameRule = (comp, user) => {
  let strike = 0,
    ball = 0,
    nothing = 3;

  for (let i = 0; i < 3; i++) {
    if (user[i] === comp[i]) {
      strike++;
      nothing--;
      continue;
    }
    if (comp.includes(user[i])) {
      ball++;
      nothing--;
    }
  }

  return [strike, ball, nothing];
};

const oneMoreGuess = (comp) => {
  MissionUtils.Console.readLine('숫자를 입력해주세요. : ', (answer) => {
    let user = [];
    for (let i of answer) user.push(Number.parseInt(i));
    playBall(comp, user);
  });
};

const gameOver = () => {
  MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  MissionUtils.Console.print(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
  );
  MissionUtils.Console.readLine('', (answer) => {
    if (answer === '2') {
      MissionUtils.Console.close();
      return;
    } else if (answer === '1') {
      startNewGame();
    }
  });
};

const startNewGame = () => {
  let comp = getComputerNumber();
  MissionUtils.Console.readLine('숫자를 입력해주세요. : ', (answer) => {
    let user = [];
    for (let i of answer) user.push(Number.parseInt(i));
    playBall(comp, user);
  });
};

class App {
  play() {
    gameStartLine();
    const comp = getComputerNumber();
    MissionUtils.Console.readLine('숫자를 입력해주세요. : ', (answer) => {
      let user = [];
      for (let i of answer) user.push(Number.parseInt(i));
      playBall(comp, user);
    });
  }
}

const test = new App();
test.play();

module.exports = App;
