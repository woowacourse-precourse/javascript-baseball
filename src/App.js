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

// 2. 사용자에게 숫자 3개 받는 함수
function readNums() {
  Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    let user = answer.split("").map((string) => Number(string));
    if (typeof answer !== "number") {
      throw "Not a number";
    } else if (user.includes(0)) {
      throw "0 exists";
    } else if (user.length !== 3) {
      throw "Not three digits";
    }
  });
  return user;
}

// 3. 컴퓨터 숫자와 사용자 숫자 비교하는 함수
function compareNums(computer, user) {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < user.length; i++) {
    if (user[i] === computer[i]) {
      strike++;
    } else if (computer.includes(user[i])) {
      ball++;
    }
  }
  return [ball, strike];
}

class App {
  play() {}
}

module.exports = App;
