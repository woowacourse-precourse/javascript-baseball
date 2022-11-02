// 컴퓨터의 수 3자리 구하기.
function getMachineNum() {
  let value = [];
  let inputNumber;
  while (1) {
    inputNumber = Math.floor(Math.random() * 10);
    if (value.indexOf(inputNumber) !== -1 || inputNumber === 0) {
      continue;
    }
    value.push(inputNumber);
    if (value.length === 3) {
      break;
    }
  }
  return value.join("");
}


// class App {
//   play() { }



// }

// module.exports = App;
