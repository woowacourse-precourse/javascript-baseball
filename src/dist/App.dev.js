"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MissionUtils = require('@woowacourse/mission-utils');

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.input;
    this.answer;
    this.hint = {
      ball: 0,
      strike: 0,
      nothing: 0
    };
  }

  _createClass(App, [{
    key: "setInput",
    value: function setInput(input) {
      input = Array.from(input.split(''), function (num) {
        return Number(num);
      });
      if (App.isValidInput(input)) this.input = input;
      this.setHint();
    }
  }, {
    key: "setAnswer",
    value: function setAnswer() {
      var answer = [];

      while (answer.length < 3) {
        var number = MissionUtils.Random.pickNumberInRange(1, 9);

        if (!answer.includes(number)) {
          answer.push(number);
        }
      }

      this.answer = [].concat(answer);
    }
  }, {
    key: "setHint",
    value: function setHint() {
      var _this = this;

      this.resetHint();
      this.input.forEach(function (digitNumber, index) {
        if (_this.answer[index] === digitNumber) _this.hint.strike += 1;

        if (_this.answer.includes(digitNumber) && _this.answer[index] !== digitNumber) {
          _this.hint.ball += 1;
        }

        if (!_this.answer.includes(digitNumber)) _this.hint.nothing += 1;
      });
      this.printHint();
      this.receiveInputFromConsole();
    }
  }, {
    key: "resetHint",
    value: function resetHint() {
      for (var key in this.hint) {
        this.hint[key] = 0;
      }
    }
  }, {
    key: "receiveInputFromConsole",
    value: function receiveInputFromConsole() {
      var _this2 = this;

      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', function (input) {
        _this2.setInput(input);
      });
    }
  }, {
    key: "success",
    value: function success() {
      App.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.receive1Or2FromConsole();
    }
  }, {
    key: "receive1Or2FromConsole",
    value: function receive1Or2FromConsole() {
      var _this3 = this;

      MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', function (selectedNumByUser) {
        _this3.selectReplayOrClose(selectedNumByUser);
      });
    }
  }, {
    key: "selectReplayOrClose",
    value: function selectReplayOrClose(selectedNum) {
      if (selectedNum === '1') return this.setAnswerAndreceiveInput();
      if (selectedNum === '2') return App.close();
      throw '1 또는 2만 입력해주세요.';
    }
  }, {
    key: "printHint",
    value: function printHint() {
      if (this.hint.strike === 3) {
        App.print('3스트라이크');
        return this.success();
      }

      if (this.hint.nothing === 3) return App.print('낫싱');
      if (this.hint.strike === 0) return App.print("".concat(this.hint.ball, "\uBCFC"));
      if (this.hint.ball === 0) return App.print("".concat(this.hint.strike, "\uC2A4\uD2B8\uB77C\uC774\uD06C"));
      return App.print("".concat(this.hint.ball, "\uBCFC ").concat(this.hint.strike, "\uC2A4\uD2B8\uB77C\uC774\uD06C"));
    }
  }, {
    key: "setAnswerAndreceiveInput",
    value: function setAnswerAndreceiveInput() {
      this.setAnswer();
      this.receiveInputFromConsole();
    }
  }, {
    key: "play",
    value: function play() {
      App.print('숫자 야구 게임을 시작합니다.');
      this.setAnswerAndreceiveInput();
    }
  }], [{
    key: "print",
    value: function print(message) {
      MissionUtils.Console.print(message);
    }
  }, {
    key: "close",
    value: function close() {
      MissionUtils.Console.close();
    }
  }, {
    key: "isValidInput",
    value: function isValidInput(input) {
      if (input.includes(NaN)) throw '문자를 제외한 숫자만 입력하세요.';
      if (input.includes(0)) throw '1~9 사이의 숫자만 입력하세요.';
      if (input.length !== 3) throw '3개의 숫자들을 입력하세요.';

      if (input.length !== new Set(input).size) {
        throw '서로 다른 숫자를 입력하세요.';
      }

      return true;
    }
  }]);

  return App;
}();

var app = new App();
app.play();
module.exports = App;