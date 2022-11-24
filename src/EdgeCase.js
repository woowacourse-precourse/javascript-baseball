const {ERROR} = require("./constant");
class EdgeCase {
  isValid(answer) {
    if (answer.length !== 3) {
      throw new Error(ERROR.LENGTH);
    }
    if (answer.split('').filter(x => isNaN(x)).length > 0) {
      throw new ERROR(ERROR.ISNAN);
    }
    const answerSet = new Set(answer.split(""));
    if (answer.length !== answerSet.size) {
      throw new Error(ERROR.DUPLICATE);
    }
    return true;
  }
}
module.exports = EdgeCase;
