import Computer from './Computer';
import Interaction from './Interaction';
import { Console, Random } from '@woowacourse/mission-utils';

class App {
  play() {
    Interaction.printPlayMessage();
    const computer = new Computer();
    const interaction = new Interaction();
  }

  start() {
    const computer = new Computer();
    const interaction = new Interaction();
  }
}
const app = new App();
app.play();

module.exports = App;
