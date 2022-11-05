function randomNum(numbers) {
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
    console.log(answer);
  }

class App {
  play() {}
}

module.exports = App;
