class RegExpUtil {
  constructor({ regExp, errorMessage }) {
    this.regExp = regExp;
    this.errorMessage = errorMessage;
  }

  validate(query) {
    if (this.regExp.test(query)) return;
    throw new Error(this.errorMessage);
  }
}

module.exports = RegExpUtil;
