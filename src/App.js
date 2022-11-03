const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    console.log(init());
  }
}

const init = () => {
  let answers = [];
  let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 3; i++) {
    let pickNumber = MissionUtils.Random.pickNumberInList(numberList);
    answers.push(pickNumber);
    numberList = deleteItemInArr(numberList, pickNumber);
  }
  return answers;
};

const deleteItemInArr = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

const app = new App();
app.play();

module.exports = App;
