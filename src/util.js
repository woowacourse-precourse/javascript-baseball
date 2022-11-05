const makeAnswer = () => {};
const replyValidation = (input) => {
  const map = {};
  for (const value of input.split("")) {
    if (map[value]) return false;
    map[value] = value;
  }
  return true;
};
const replyCheckAnswer = (input, answer) => {};
const makeReplyToReply = ({ ball, strike }) => {};
const inputReply = () => {};
const inputReplay = () => {};
const closePlay = () => {};

exports.makeAnswer = makeAnswer;
exports.replyValidation = replyValidation;
exports.replyCheckAnswer = replyCheckAnswer;
exports.makeReplyToReply = makeReplyToReply;
exports.inputReply = inputReply;
exports.inputReplay = inputReplay;
exports.closePlay = closePlay;
