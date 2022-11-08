class App {
  static isValidMenuInput(input) {
    return input.length === 1 && Number(input) >= 1 && Number(input) <= 2;
  }

  static isValidPlayInput(input) {
    return (
      input.length === 3
      && Array.from(input).every((x) => Number(x) >= 1 && Number(x) <= 9)
    );
  }

  play() { }
}

module.exports = App;
