import GameModel from './GameModel';

class BaseballModel extends GameModel {
  makeComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer.join('');
  }

  calculateUserInput(computerNumber, userInput) {
    const ballCount = this.getBallCount(computerNumber, userInput);
    const strikeCount = this.getStrikeCount(computerNumber, userInput);

    return { ballCount, strikeCount };
  }

  getBallCount(computerNumber, userInput) {
    const ballCount = computerNumber.reduce((ballCount, currNumber, index) => {
      const currNumberIndex = userInput.indexOf(currNumber);
      const isBall = currNumberIndex !== -1 && currNumberIndex !== index;

      if (isBall) ballCount += 1;
      return ballCount;
    });

    return ballCount;
  }

  getStrikeCount(computerNumber, userInput) {
    const strikeCount = computerNumber.reduce((strikeCount, currNumber, index) => {
      const isStrike = currNumber === userInput[index];

      if (isStrike) strikeCount += 1;
      return strikeCount;
    });

    return strikeCount;
  }
}

module.exports = BaseballModel;
