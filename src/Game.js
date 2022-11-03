class Game {
  constructor() {
    this.computerNumbers = this.getRandomNumbers();
  }
  getRandomNumbers() {
    const computerNumbers = new Set();
    while (computerNumbers.size < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumbers.has(number)) computerNumbers.add(number);
    }
    return computerNumbers;
  }
}
