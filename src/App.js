function App () {
  this.play = () => {
    const getRandomNumber = (MIN_RANDOM_NUIMBER, MAX_RANDOM_NUMBER) => {
      const randomNumberArray = [];
      while (randomNumberArray.length < VALID_NUMBER_LENGTH) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(
          MIN_RANDOM_NUIMBER,
          MAX_RANDOM_NUMBER
        );
        if (!randomNumberArray.includes(randomNumber)) {
          randomNumberArray.push(randomNumber);
        }
      }
      return randomNumberArray.join('');
    }

  }
}

module.exports = App;

