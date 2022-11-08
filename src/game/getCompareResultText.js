const getCompareResultText = () => {
  if (this.strikeScore === 0 && this.ballScore === 0) {
    this.compareResultText = '낫싱';
  } else if (this.ballScore === 0) {
    this.compareResultText = `${this.strikeScore}스트라이크`;
    if (this.strikeScore === 3) {
      this.isThreeStrike = true;
    }
  } else if (this.strikeScore === 0) {
    this.compareResultText = `${this.ballScore}볼`;
  } else if (this.strikeScore > 0 && this.ballScore > 0) {
    this.compareResultText = `${this.ballScore}볼 ${this.strikeScore}스트라이크`;
  }
};

module.exports = getCompareResultText;
