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
}

module.exports = User;
