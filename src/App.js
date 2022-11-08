const MissionUtils = require('@woowacourse/mission-utils');

const makeNumber = () => {
  const result = [];
  while (result.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!result.includes(number)) {
      result.push(number);
    };
  };
  return result;
};

const userInput = (answer) => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
    checkNumber(input);
    let inputResult = countNumber(input, answer);
    printResult(inputResult);

    if (inputResult[0] !== 3) {
      userInput(answer)
    } else {
      askRestart();
    }
  })
};

const checkNumber = (target) => {
  const isNumber = /[^1-9]/g;
  const targetSet = new Set(target);
  
  if (target === undefined) {
    throw new Error('숫자를 입력해야 합니다.')
  };

  if (target.length !== 3) {
    throw new Error(`3자리 숫자를 입력해야 합니다.`);
  };
  
  if (isNumber.test(target)) {
    throw new Error('3개의 숫자가 모두 1 ~ 9 사이의 숫자로 이루어져야 합니다.');
  };
  
  if (targetSet.size !== 3) {
    throw new Error('3개의 숫자를 모두 다르게 입력해야 합니다.');
  };
};

const countNumber = (target, goal) => {
  const targetArray = target.split('');
  let ballCount = 0;
  let strikeCount = 0;

  targetArray.forEach((element, i) => {

    if (goal.includes(Number(element))) {
      ballCount += 1
    };

    if (Number(element) === goal[i]) {
      ballCount -= 1
      strikeCount += 1
    };
  });
  
  return [strikeCount, ballCount];
}

const printResult = (result) => {
  const strikeCount = result[0];
  const ballCount = result[1];

  if (strikeCount === 0 && ballCount === 0) {
    MissionUtils.Console.print('낫싱')
  } else if (strikeCount === 0 && ballCount !== 0) {
    MissionUtils.Console.print(`${ballCount}볼`)
  } else if (strikeCount !== 0 && ballCount === 0) {
    MissionUtils.Console.print(`${strikeCount}스트라이크`)
  } else {
    MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`)
  }
};

const askRestart = () => {
  MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
  MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
  MissionUtils.Console.readLine('', (input) => {

    if (input !== '1' && input !== '2') {
      throw new Error(`1과 2가 아닌 다른 수 ${input}을(를) 입력했습니다.`);
    }

    if (input === '1') {
      let newAnswer = makeNumber();
      userInput(newAnswer)
    }

    if (input === '2') {
      MissionUtils.Console.close();
    }
  })
};

const gameStart = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
};

class App {
  play() {
    gameStart();
    let answer = makeNumber();
    userInput(answer);
  };
};

const app = new App()
app.play()

module.exports = App;
