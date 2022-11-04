class Validation {
  static validateUserPickNumbers(numbers) {
    const stringNumber = String(numbers).split("");
    if (typeof numbers === number) {
      throw new Error("userChoice must be number");
    }
  }
}

module.export = Validation;
