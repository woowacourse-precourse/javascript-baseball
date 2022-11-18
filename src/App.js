class App {
  play(a) {
    const a = 1;
  }
}

class LottoNum {
  constructor(num1, num2, num3, num4, num5, num6, bonusNum) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.num4 = num4;
    this.num5 = num5;
    this.num6 = num6;
    this.bonusNum = bonusNum;
  }
}

class WinnerNum extends LottoNum {
  constructor(num1, num2, num3, num4, num5, num6, bonusNum) {
    superconstructor(num1, num2, num3, num4, num5, num6, bonusNum);
  }
}

class PlayerNum extends LottoNum {
  constructor(num1, num2, num3, num4, num5, num6, bonusNum) {
    superconstructor(num1, num2, num3, num4, num5, num6, bonusNum);
  }
}
module.exports = App;
