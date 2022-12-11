const { Random } = require('@woowacourse/mission-utils');
const NUMBER = require('../constants/gameSetting');

const BaseballNumberMaker = {
  createRandomNumber () {
    const randomNumberList = [];
    while (randomNumberList.length < NUMBER.RANDOM_LENGTH) {
      const collectRandomNumber = Random.pickNumberInRange(NUMBER.FIRST, NUMBER.LAST);
      BaseballNumberMaker.makeRandomList(collectRandomNumber, randomNumberList);
    }
    return randomNumberList;
  },

  makeRandomList (collectRandomNumber, randomNumberList) {
    if (!randomNumberList.includes(collectRandomNumber)) randomNumberList.push(collectRandomNumber);
  },
};

module.exports = BaseballNumberMaker;
