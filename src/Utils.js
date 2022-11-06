const MissionUtils = require('@woowacourse/mission-utils');

function getComputerNumber() {
  const computerNumber = [];
  while (computerNumber.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(number)) {
      computerNumber.push(number);
    }
  }

  return computerNumber;
}

function strToIntArr(str) {
  const strArr = [...str];
  const intArr = [];

  strArr.forEach((item) => intArr.push(parseInt(item)));

  return intArr;
}

function validUserInput(str) {
  const reg = /^[0-9]+$/;

  return str.length == 3 && reg.test(str);
}

module.exports = { getComputerNumber, strToIntArr, validUserInput };
