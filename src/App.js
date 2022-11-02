class App {
  play() {}
}

const makeRandomNumber = () => {
  const RANDOM_NUMBER = [];

  while (RANDOM_NUMBER.length < 3) {
    const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!RANDOM_NUMBER.includes(NUMBER)) {
      RANDOM_NUMBER.push(NUMBER);
    }
  }

  return RANDOM_NUMBER;
};

module.exports = App;
