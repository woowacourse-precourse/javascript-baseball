class App {
  play() {}
}

const makeRandomNumber = () => {
  const NOT_DUPLICATED_NUMBER = [];

  while (NOT_DUPLICATED_NUMBER.length < 3) {
    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!NOT_DUPLICATED_NUMBER.includes(RANDOM_NUMBER)) {
      NOT_DUPLICATED_NUMBER.push(RANDOM_NUMBER);
    }
  }

  return NOT_DUPLICATED_NUMBER;
};

const findDuplicate = (numberArr) => {
  const UNIQUE_ARRAY = new Set(numberArr);

  if (numberArr.length !== UNIQUE_ARRAY.size) {
    return true;
  }

  return false;
};

const condition = (input) => {
  const USER_INPUT = input.split('');

  for (let index = 0; index < USER_INPUT.length; index += 1) {
    if (USER_INPUT[index] < '1' || USER_INPUT[index] > '9') {
      throw '1~9 사이의 숫자를 입력해 주세요!';
    }
  }

  if (USER_INPUT.length !== 3) {
    throw '3자리 숫자를 입력해주세요!';
  }
  if (findDuplicate(USER_INPUT)) {
    throw '중복되지 않은 숫자를 입력해 주세요!';
  }

  return USER_INPUT;
};

module.exports = App;
