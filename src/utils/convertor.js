class Convertor {
  static stringToNumber(answer) {
    return parseInt(answer, 10);
  }

  static stringToNumberArray(answer) {
    return Array.from(answer, Number);
  }
}

export default Convertor;
