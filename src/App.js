class App {
  play() {}

const createAnswerNumList = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
}

const inputUserNum = () => {
  let userAnswerNumList;
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
    exceptionHandlingInputUserNum(answer);
    userAnswerNumList = stringToNumberInList(answer);

  });
}

const exceptionHandlingInputUserNum = (answer) => {
  if (!is3Letters(answer)) {
    throw escape;
  }

  if (!isOnlyNumber(answer)) {
    throw escape;
  }

  if (!areEachDifferent(answer)) {
    throw escape;
  }
}

}

module.exports = App;
const is3Letters = (numStr) => {
  return numStr.length === 3
}

const isOnlyNumber = (numStr) => {
  let check = /^[0-9]+$/;
  return check.test(numStr);
}

const areEachDifferent = (numStr) => {
  for (let i = 0; i < numStr.length; i++) {
    if (numStr.indexOf(numStr[i], i + 1) !== -1) {
      return false
    }
  }
  return true
}

const stringToNumberInList = (list) => {
  return list.split('').map((num) => {
    return parseInt(num);
  });
}

