exports.calculateResult = function calculateResult(random, player) {
  var playerArr = [...player].map((item) => Number(item));
  var strike = 0;
  var ball = 0;

  for (let i = 0; i < random.length; i++) {
    if (playerArr[i] == random[i]) strike++;
    else if (playerArr[i] != random[i] && random.includes(playerArr[i])) ball++;
  }

  return [strike, ball];
};
