const App = require("../src/App");

const duplicate_number = (n)=>{
    if(n[0]==n[1]) return 0;
    if(n[0]==n[2]) return 0;
    if(n[1]==n[2]) return 0;
    return 1;
}

describe("함수 기능 테스트", () => {
    test("selectComputerNumber() 함수로 컴퓨터 숫자 3개를 반환", () => {
        const app =new App();
        const result = app.selectComputerNumber().length;
        expect(result).toEqual(3);
    });
    test("selectComputerNumber() 함수로 컴퓨터 숫자 서로 다른 숫자 반환", () => {
        const app =new App();
        let result = app.selectComputerNumber();
        if(duplicate_number(result)){
            result=0;
        }
        expect(result).toEqual(0);
    });
});