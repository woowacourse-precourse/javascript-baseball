const Mission = require('./Mission');

class User extends Mission {
  constructor() {
    super();
  }

  userInputStart() {
    this.mission.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const userNumbers = this.makeNumberArray(answer);
      this.checkUserNumber(userNumbers);
    });
  }
  makeNumberArray(answer) {
    const userNumbers = answer.split('').map((item) => Number(item));
    console.log(userNumbers);
    return userNumbers;
  }
  checkUserNumber(userArr) {
    if (userArr.length !== 3)
      throw '입력할 수 있는 길이는 3입니다. 종료합니다.';

    userArr.forEach((item) => {
      if (isNaN(item)) throw '숫자만 입력 가능합니다. 종료합니다.';
      if (item < 1 || item > 9) throw '1-9 범위만 입력 가능합니다. 종료합니다.';
    });

    if (userArr.length !== new Set(userArr).size)
      throw '중복되었습니다. 종료합니다.';
  }
}

module.exports = User;
