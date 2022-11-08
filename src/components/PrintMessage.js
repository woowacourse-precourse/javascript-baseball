const MissionUtils = require('@woowacourse/mission-utils');
const gameConstant = require('./GameConstant');

const printNothing = () => {
  MissionUtils.Console.print(gameConstant.NOTHING);
};

const printBallStrike = result => {
  MissionUtils.Console.print(
    `${result.ball}${gameConstant.BALL} ${result.strike}${gameConstant.STRIKE}`,
  );
};

const printBall = result => {
  MissionUtils.Console.print(`${result.ball}${gameConstant.BALL}`);
};

const printStrike = result => {
  MissionUtils.Console.print(`${result.strike}${gameConstant.STRIKE}`);
};

exports.printNothing = printNothing;
exports.printBallStrike = printBallStrike;
exports.printBall = printBall;
exports.printStrike = printStrike;
