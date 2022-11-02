// 1. 컴퓨터가 뽑은 랜덤 숫자 3개 배열로 만드는 함수
function randomNums() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

class App {
  play() {}
}

module.exports = App;
