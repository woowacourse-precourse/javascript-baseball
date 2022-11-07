class BaseBall {
    reset(){
        this.strike = 0;
        this.ball = 0;
    }

    referee(player, balls){
        player.forEach((element, idx)=>{
            for(let index = 0; index<balls.length; index++){
                const BALL = balls[index];
                if(idx===index && BALL===element){
                    this.strike+=1;
                }else if(idx!==index && BALL===element){
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

    isEnded(){
        return (this.strike===3);
    }
}

module.exports = BaseBall;