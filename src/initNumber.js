const MissionUtils = require("@woowacourse/mission-utils");

const initNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

const compareNumber = () => {
    const initNumber = setNumber().join("");
    console.log(initNumber)
    MissionUtils.Console.readLine("번호를 입력하세요", (userNumber) => {
        if (initNumber === userNumber) {
            MissionUtils.Console.print('맞췄습니다!');
            MissionUtils.Console.readLine('리/끝?', (answer) => {
                if (answer === 1) {
                    compareNumber();
                } else if (answer === 2) {
                    MissionUtils.Console.close();
                }
            })
        } else {
            MissionUtils.Console.print('탈락!');
            compareNumber();
        }        
    });
}

compareNumber()

module.exports = initNumber;