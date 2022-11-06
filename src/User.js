const MissionUtils = require("@woowacourse/mission-utils");

class User{
    constructor(){
        this.state='INGAME';
        this.input='';
    }

    setState(state){
        this.state=state;
    }

    print(msg){
        MissionUtils.Console.print(msg);
    }

    scan(){
        const MESSAGE = (this.state==='INGAME') ? '숫자를 입력해주세요 : ' : '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ';//좀 더 고려해보기.
        MissionUtils.Console.readLine(MESSAGE, (answer)=>{
            if(this.state==='INGAME') this.findErrorInGame(answer);
            if(this.state==='OUTGAME') this.findErrorOutGame(answer);
        });
    }

    setInput(input){
        this.input=input;
    }

    getInput(){
        return this.input.split('').map((element)=>Number(element));
    }

    findErrorInGame(input){
        const INPUT_LENGTH = input.replace(/[^0-9]/g,'').length;
        if(INPUT_LENGTH===3){
            this.setInput(input);
        }else{
            throw new Error('잘못된 값이 입력되었습니다.');
        }
    }

    findErrorOutGame(input){
        if(input===1 || input===2){
            this.setInput(input);
        }else{
            throw new Error('잘못된 값이 입력되었습니다.');
        }
    }
}

module.exports = User;