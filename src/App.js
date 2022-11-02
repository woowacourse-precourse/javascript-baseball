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
    
    try {
      progress();
    } catch (error) {
      throw new Error();
    }
  }
}

module.exports = App;
