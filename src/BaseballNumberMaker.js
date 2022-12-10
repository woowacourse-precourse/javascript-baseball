const { Random } = require('@woowacourse/mission-utils');
const NUMBER = require('../constants/gameSetting');

const BaseballNumberMaker = {
  createRandomNumber () {
    const randomNumberList = [];

    while (randomNumberList.length < NUMBER.RANDOM_LENGTH) {
      const collectRandomNumber = Random.pickNumberInRange(
        NUMBER.FIRST,
        NUMBER.LAST,
      );
      if (!randomNumberList.includes(collectRandomNumber)){
        randomNumberList.push(collectRandomNumber);
      }
    }
    return randomNumberList;
  },
};

module.exports = BaseballNumberMaker;
