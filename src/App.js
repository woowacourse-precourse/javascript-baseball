class App {
  play() {

  }
}


function comparingNumbers(inputNum, randomNum) {
  const result = [0, 0];
  const inputNumbers = inputNum.split('').map(item => +item);
  const randomNumbers = String(randomNum).split('').map(item => +item);
  randomNumbers.forEach((number, index) => {
    const inputNumIndex = inputNumbers.indexOf(number);
    if(inputNumIndex === -1) {
      result[0] += 0;
    } else if(inputNumIndex === index) {
      result[1]++;
    } else {
      result[0]++;
    }
  });
  return result;
}

const app = new App();
app.play();
module.exports = App;



