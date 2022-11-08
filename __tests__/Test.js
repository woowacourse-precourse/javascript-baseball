const App = require("../src/App");

const find_duplicate_number = (n)=>{
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
        if(find_duplicate_number(result)){
            result=0;
        }
        expect(result).toEqual(0);
    });
    
    test("changeUserNumberToArray() 배열 타입 반환", () => {
        const app =new App();
        let result = app.changeUserNumberToArray("123");
        expect(result).toEqual(['1','2','3']);
    });

    test("changeComputerNumberToArray() 배열 타입 반환", () => {
        const app =new App();
        let result = app.changeComputerNumberToArray("1,2,3");
        expect(result).toEqual(['1','2','3']);
    });
});