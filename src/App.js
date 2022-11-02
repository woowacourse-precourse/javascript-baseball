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

module.exports = App;
