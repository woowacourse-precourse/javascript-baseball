class Utils {
  static removeDuplicatedString(string) {
    return [...new Set([...string])];
  }
}

module.exports = Utils;
