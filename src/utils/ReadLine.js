const { Console } = require('@woowacourse/mission-utils');

const asyncLine = async (query) => {
  try {
    return await new Promise((res) => Console.readLine(query, res));
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = asyncLine;
