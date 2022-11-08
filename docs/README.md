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