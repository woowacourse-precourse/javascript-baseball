class App {
  play() {}
}

const makeRandomNumber = () => {
  const COMPUTER_NUMBER = [];

  while (COMPUTER_NUMBER.length < 3) {
    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!COMPUTER_NUMBER.includes(RANDOM_NUMBER)) {
      COMPUTER_NUMBER.push(RANDOM_NUMBER);
    }
  }

  return COMPUTER_NUMBER;
};

const findDuplicate = (numberArr) => {
  const UNIQUE_ARRAY = new Set(numberArr);

  if (numberArr.length !== UNIQUE_ARRAY.size) {
    return true;
  }

  return false;
};

const condition = (input) => {
  const USER_NUMBER = input.split('');

  for (let index = 0; index < USER_NUMBER.length; index += 1) {
    if (USER_NUMBER[index] < '1' || USER_NUMBER[index] > '9') {
      throw '1~9 사이의 숫자를 입력해 주세요!';
    }
  }

  if (USER_NUMBER.length !== 3) {
    throw '3자리 숫자를 입력해주세요!';
  }
  if (findDuplicate(USER_NUMBER)) {
    throw '중복되지 않은 숫자를 입력해 주세요!';
  }

  return USER_NUMBER;
};

const countBall = (computerNumber, userNumber) => {
  let ballNumber = 0;

  for (let index = 0; index < computerNumber.length; index += 1) {
    if (computerNumber[index] !== userNumber[index] && computerNumber.includes(userNumber[index])) {
      ballNumber += 1;
    }
  }

  return ballNumber;
};

const countStrike = (computerNumber, userNumber) => {
  let strikeNumber = 0;

  for (let index = 0; index < computerNumber.length; index += 1) {
    if (computerNumber[index] === userNumber[index]) {
      strikeNumber += 1;
    }
  }

  return strikeNumber;
};

const result = () => {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
    const USER = condition(userInput);
    ball = countBall(COMPUTER, USER);
    strike = countStrike(COMPUTER, USER);

    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print('낫싱');
      result();
    }
    if (ball > 0 && strike === 0) {
      MissionUtils.Console.print(`${ball} 볼`);
      result();
    }
    if (ball === 0 && strike > 0 && strike < 3) {
      MissionUtils.Console.print(`${strike} 스트라이크`);
      result();
    }
    if (ball > 0 && strike > 0) {
      MissionUtils.Console.print(`${ball} 볼 ${strike} 스트라이크`);
      result();
    }
    if (strike === 3) {
      MissionUtils.Console.print(`${strike} 스트라이크`);
    }
  });
};

module.exports = App;
