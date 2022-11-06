const MissionUtils = require('@woowacourse/mission-utils');

/**
 * MissionUtils.Console.readLine API async 래핑과 간략하게 사용하기 위한 함수
 * @param {string|null} query 유저의 입력을 받기 전 출력할 메세지
 * @returns {Promise<string>} 유저의 입력
 */
const read = async (query = null) => {
  return new Promise((resolve) => {
    MissionUtils.Console.readLine(query || '', resolve);
  });
};

/**
 * MissionUtils.Console.print API 를 간략하게 사용하기 위한 함수
 * @param {string} message 출력할 텍스트
 */
const print = (message) => {
  MissionUtils.Console.print(message);
};

module.exports = {
  read,
  print,
};
