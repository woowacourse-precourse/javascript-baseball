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
