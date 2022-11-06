const { Random } = require('@woowacourse/mission-utils');

class getComputerNum {
  constructor() {
    this.userSelectNum = '';
  }

  getComputerRandomNum() {
    const COMPUTER_NUM = [];

    while (COMPUTER_NUM.length < 3) {
      const RANDOM_NUM = Random.pickNumberInRange(1, 9);
      if (!COMPUTER_NUM.includes(RANDOM_NUM)) {
        COMPUTER_NUM.push(RANDOM_NUM);
      }
    }

    return COMPUTER_NUM;
  }
}

const GET_COMPUTER_NUM = new getComputerNum();
module.exports = GET_COMPUTER_NUM;
