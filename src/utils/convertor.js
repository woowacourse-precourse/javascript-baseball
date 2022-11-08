class Convertor {
  static stringToNumber(string) {
    return parseInt(string, 10);
  }

  static stringToNumberArray(string) {
    return Array.from(string, Number);
  }

  static numberArrayToString(numberArray) {
    return numberArray.join('');
  }
}

export default Convertor;
