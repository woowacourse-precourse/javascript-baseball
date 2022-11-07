const throwError = require('../game/throwError')

function restartGame() {
  MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', 
    (answer) => {
      const computerRandNumsArray = makeComputerRandNums();
      // if(answer !== '1' && answer !== '2') throwError();
      if(answer === '1') playGame(computerRandNumsArray);
      else if(answer === '2') MissionUtils.Console.close();
      else throwError();
  })
}

function playGame(computerRandNumsArray) {
  let gameMustGoOn = true;
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', async (answer) => {
    let userInputArray = [];
    userInputArray = await userInputCallback(answer, userInputArray);
    gameMustGoOn = getGameResult(computerRandNumsArray, userInputArray);
    if(gameMustGoOn) playGame(computerRandNumsArray);
    else restartGame();
  })
}