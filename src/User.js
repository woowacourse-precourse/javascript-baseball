const MissionUtils = require("@woowacourse/mission-utils");

class User{
    constructor(){
        this.state='INGAME';
        this.input='';
    }

    scan(){
        const MESSAGE = (this.state==='INGAME') ? '숫자를 입력해주세요 : ' : '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ';//좀 더 고려해보기.
        MissionUtils.Console.readLine(MESSAGE, (answer)=>{
            if(this.state==='INGAME') this.findErrorInGame(answer);
            if(this.state==='OUTGAME') this.findErrorOutGame(answer);
        });
    }

    findErrorInGame(input){
        
    }

    findErrorOutGame(input){

    }
}

module.exports = User;