const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

describe("Exception Test", () => {
    test("Larger Than 999", () => {
        const userInput = ["1234"];
        const app = new App();
        expect(() => app.ExceptionTest(userInput)).toThrow();
    });
    test("Less Than 123", () => {
        const userInput = ["97"];
        const app = new App();
        expect(() => app.ExceptionTest(userInput)).toThrow();
    });
    test("Not a Number #1", () => {
        const userInput = ["98ㅁ"];
        const app = new App();
        expect(() => app.ExceptionTest(userInput)).toThrow();
    });
    test("Not a Number #2", () => {
        const userInput = ["6,4"];
        const app = new App();
        expect(() => app.ExceptionTest(userInput)).toThrow();
    });
    test("Not a Number #3", () => {
        const userInput = ["{23"];
        const app = new App();
        expect(() => app.ExceptionTest(userInput)).toThrow();
    });
    test("Include 0", () => {
        const userInput = ["820"];
        const app = new App();
        expect(() => app.ExceptionTest(userInput)).toThrow();
    });
    test("Same Number #1", () => {
        const userInput = ["979"];
        const app = new App();
        expect(() => app.ExceptionTest(userInput)).toThrow();
    });
    test("Same Number #2", () => {
        const userInput = ["199"];
        const app = new App();
        expect(() => app.ExceptionTest(userInput)).toThrow();
    });
    MissionUtils.Console.close();
});