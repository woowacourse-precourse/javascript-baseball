class App {
  constructor() {
    this.randomList = this.makeRandomNumber();
  }
  
  play() {
    this.gameStartMsg();
  }

  gameStartMsg() {
    console.log('숫자 야구 게임을 시작합니다.');
  }

  makeRandomNumber() {
    const randomArr = [];
    while (randomArr.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomArr.includes(number)) {
        randomArr.push(number);
      }
    }
    return randomArr;
  }
}

module.exports = App;
