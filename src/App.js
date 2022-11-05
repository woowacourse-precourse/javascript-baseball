function randomNum() {
    let numbers = [];
    for (let i = 0; i < 9; i++) {
      numbers.push(i + 1);
    }

    let answer = [];
    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * (numbers.length - i));
      answer.push(numbers[index]);
      numbers.splice(index, 1);
    }
  
  }

class App {
  play() {
    console.print("숫자 야구 게임을 시작합니다.");
  }
}

module.exports = App;
