class IsValid {
  isValid(answer) {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (answer.length !== 3) {
      throw new Error("3자리의 수를 입력해주세요");
    }
    if (answer.split("").filter((x) => numbers.includes(x)).length < 3) {
      throw new Error(
        "1부터의 9까지의 숫자로 이루어진 3자리의 수만 입력 가능합니다."
      );
    }
    const answerSet = new Set(answer.split(""));
    if (answer.length !== answerSet.size) {
      throw new Error("중복된 숫자는 입력할 수 없습니다.");
    }
    return true;
  }
}
module.exports = IsValid;
