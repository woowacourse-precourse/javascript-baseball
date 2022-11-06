class Judge {
  checkIsValidInput(player_input) {
    if (!player_input) throw "Player Input Is Invalid!";
  }
  countBallStrike(opponent_input, player_input) {
    let ball = 0;
    let strike = 0;
    this.checkIsValidInput(player_input);
    for (let idx in player_input) {
      strike += this.countIfStrike(player_input[idx], opponent_input[idx]);
      ball += this.countIfBall(player_input[idx], opponent_input);
    }
    return [ball, strike];
  }
  countIfStrike(player_char, opponent_char) {
    if (player_char === opponent_char) return 1;
    return 0;
  }
  countIfBall(player_char, opponent_input) {
    if (opponent_input.indexOf(player_char) > 0) return 1;
    return 0;
  }
}
module.exports = Judge;
