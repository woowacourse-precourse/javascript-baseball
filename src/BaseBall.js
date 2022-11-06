class BaseBall {
    constructor(){
        this.strike=0;
        this.ball=0;
    }

    referee(player, balls){
        player.forEach((element)=>{
            for(const BALL of balls){
                if(balls.includes(element) && BALL===element){
                    this.strike+=1;
                }else if(balls.includes(element) && BALL!==element){
                    this.ball+=1;
                }
            }
        });
    }

    getResult(){
        if(this.strike!==0 && this.ball!==0) return `${this.ball}볼 ${this.strike}스트라이크`;
        else if(this.strike===0 && this.ball!==0) return `${this.ball}볼`;
        else if(this.strike!==0 && this.ball===0) return `${this.strike}스트라이크`;
        else return '낫싱';
    }
}

module.exports = BaseBall;