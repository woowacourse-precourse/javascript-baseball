class App {
  constructor() {
    this.computerNumber = createComputerNumber();
  }

  static createComputerNumber = () => {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (isEveryNumberUnique(computerNumber)) {
        computerNumber.push(randomNumber);
      }
    }
    return computerNumber;
  };

  static isEveryNumberUnique = (nums) => {
    return nums.length === new Set(nums).size;
  };

  play() {}
}

module.exports = App;
