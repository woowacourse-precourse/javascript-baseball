class BaseBallGame{
  constructor() {
    this.gameAnswer = [];
  }
  
  resetGameAnswer() {
    const answer = [];

    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) answer.push(number);
    }

    this.gameAnswer = answer;
  }
}

export default BaseBallGame;