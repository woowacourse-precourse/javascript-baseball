class App {
  play() {
    let baseLine = null;
    const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    function setBaseLine() {
      baseLine = new Set();
      while (baseLine.size < 3) {
        baseLine.add(wRandom.pickNumberInList(numList));
      }
      baseLine = Array.from(baseLine);
    }
    setBaseLine();
    wConsole.print("숫자 야구 게임을 시작합니다.");

    function compare(testCase) {
      let ball = 0;
      let strike = 0;
      testCase.map((num, i) => {
        if (baseLine.includes(num)) {
          baseLine[i] === num ? strike++ : ball++;
        }
      });
      let text = "";
      if (ball != 0) text += `${ball}볼`;
      if (strike != 0) text += `${text != "" ? " " : ""}${strike}스트라이크`;
      if (text === "") text = "낫싱";
      wConsole.print(text);
      return strike === 3;
    }

    function progress() {
      wConsole.readLine("숫자를 입력해주세요. : ", (input) => {
        const testCase = inputToTestData(input);
        const end = compare(testCase);
        nextProgress(end);
      });
    }
    
    try {
      progress();
    } catch (error) {
      throw new Error();
    }
  }
}

module.exports = App;
