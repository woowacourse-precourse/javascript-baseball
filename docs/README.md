## ⚾숫자야구 - Commit List
---
feat($App): setting method

Added new method to $App:
- declare the class's variable: COMPUTER, PLAYER
- store the COMPUTER value using MissionUtils.Random.pickNumberInRange

Breaks $App.setting, which was added

fix($MissionUtils): import MissionUtils

Changed the way to import MissionUtils:
- change the importing method "ES Modules" to "Common JS"
- const MissionUtils = require("@woowacourse/mission-utils");

Breaks ES Module's Importing Method to Common JS's Importing Method

feat($App): constructor method

Added constructor to $App:
- declare the class's variable: this._computer , this._player

Breaks $App.this_computer and $App.this_player, which was declared in $App.setting move to $App.constructor

feat($App): play method

Added new method 'play' to $App:
- start the baseball game: setting
- add other methods for the game

Breaks $App.play, which was added

feat($App): input method

Added new method 'input' to $App:
- input from the user
- change user's input to this._player(array type)

Breaks $App.input, which is added

feat($App): check method

Added new method 'check' to $App:
- compare the player's input with the computer's answer
- if the result is 'strike', return true

Breaks $App.check, which is added and $App.input, $App.play Print Method, which is changed

feat($App): end method

Added new method 'end' to $App:
- check if the player decides to re-play the game
- if input 2, stop the game

Breaks $App.end, which is added

feat($ApplicationTest): add the exception cases

Added the exception test cases:
- enter non-intger value
- enter same value
- enter longer or shorter value

Breaks $ApplicationTest, which the test cases are added