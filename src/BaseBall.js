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
}

module.exports = BaseBall;