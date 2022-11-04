const Mission = require('./Mission');

class User extends Mission {
  constructor() {
    super();
  }

  userInputStart() {
    this.mission.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const userNumbers = this.makeNumberArray(answer);
    });
  }
  makeNumberArray(answer) {
    const userNumbers = answer.split('').map((item) => Number(item));
    console.log(userNumbers);
    return userNumbers;
  }
}

module.exports = User;
