#### 2.0.0 (2022-11-08)

##### Documentation Changes

* **feature:**
  *  updated feature list ([76b9f3cd](https://github.com/woowacourse-precourse/javascript-baseball/commit/76b9f3cdf2e34d2780a4ab938ec3ac6e25aae1b8))
  *  updated feature list ([80e174c5](https://github.com/woowacourse-precourse/javascript-baseball/commit/80e174c5af857a5642ab5be2efd79722cfc06066))
  *  updated feature list ([5f887372](https://github.com/woowacourse-precourse/javascript-baseball/commit/5f8873724fcc9c46c63c2f2c3dd1d427eafbc0c1))
  *  updated feature list ([79c75ed1](https://github.com/woowacourse-precourse/javascript-baseball/commit/79c75ed1d21c6abf143c3a0c43e972d0c8d4ed4a))
  *  updated feature list ([3a84e7fb](https://github.com/woowacourse-precourse/javascript-baseball/commit/3a84e7fb11420c22d0057a7946afc0664849bd12))
  *  updated feature list ([9452b5a6](https://github.com/woowacourse-precourse/javascript-baseball/commit/9452b5a69ab1f66ee1843553c0cfc43f749d4d15))
  *  updated feature list ([dfe1403b](https://github.com/woowacourse-precourse/javascript-baseball/commit/dfe1403bf9f6b270d033b225946a801fd6c8dba4))
  *  updated feature list ([46d35614](https://github.com/woowacourse-precourse/javascript-baseball/commit/46d356143d92000ecd1f69e8b4e6e93cb1713b3d))
  *  add feature list ([d0f58194](https://github.com/woowacourse-precourse/javascript-baseball/commit/d0f58194f5713a3a9744633cb1fa3c736abc6af3))

##### New Features

* **BaseballGame:**
  *  add Exception handling to BasballGame ([46129e36](https://github.com/woowacourse-precourse/javascript-baseball/commit/46129e36f1dd2d1ed197970f40b0c9d556d64e89))
  *  add restart or game exit method ([1d6c479a](https://github.com/woowacourse-precourse/javascript-baseball/commit/1d6c479a9945f7dd105948d494c343b46f69ac7e))
  *  add gameOver method ([780bdaef](https://github.com/woowacourse-precourse/javascript-baseball/commit/780bdaef26beaec7293cfb711a0d12e5b7f79adb))
  *  add getBallAndStrikeMessage method ([d9d363b3](https://github.com/woowacourse-precourse/javascript-baseball/commit/d9d363b3fa7b8ab93d5025cbfec635902dc8c764))
  *  add countBallAndStrike method ([c010ed05](https://github.com/woowacourse-precourse/javascript-baseball/commit/c010ed05eecbecbc2d1064c8d2f0fc3da83db1df))
  *  add inputPlayerNumbers method in BaseballGame ([34f40bfe](https://github.com/woowacourse-precourse/javascript-baseball/commit/34f40bfebfc68429ce1e21dd2283ca7ac70c47e1))
* **Player:**  add Exception handling to Player ([26b706ef](https://github.com/woowacourse-precourse/javascript-baseball/commit/26b706efd1e122c2f5724b771c640ea6887bd5c4))
* **Computer:**  add setRandomNumbers method in Computer ([0b7befe4](https://github.com/woowacourse-precourse/javascript-baseball/commit/0b7befe4f29dc92585f76baba107fb3fb784c7e7))
* **App:**  add printStartMessage method in App ([8fb73f4c](https://github.com/woowacourse-precourse/javascript-baseball/commit/8fb73f4c37cc5e3436d4d7cdfdcfcf4d2d2d1be8))
* **Console:**  add console method in Console class ([a6b4662b](https://github.com/woowacourse-precourse/javascript-baseball/commit/a6b4662b9e5fd68a9f3377dea978ba025b776cab))
*  setup precourse baseball project ([35cbc066](https://github.com/woowacourse-precourse/javascript-baseball/commit/35cbc066f1e57749df4ed3b240757ac154c14f85))

##### Bug Fixes

* **ConsoleTest:**  add spy mockClear ([57093f9c](https://github.com/woowacourse-precourse/javascript-baseball/commit/57093f9c574c0c051d27d4882e7efeb1bc348a2e))
* **BaseballGame:**  updated start method to clarify conditions ([10a4ec32](https://github.com/woowacourse-precourse/javascript-baseball/commit/10a4ec3213b57ba848974e9c632dd45b2f4a6518))
* **createRandomNumbers:**  use pickNumberInRange method ([d1cd82f2](https://github.com/woowacourse-precourse/javascript-baseball/commit/d1cd82f235a51089bda7ec6f17ea5cb920847990))
* **myConsole:**  remove close function in readLine method for develop ([fc6019fc](https://github.com/woowacourse-precourse/javascript-baseball/commit/fc6019fca2d9e751443ce60df3dbab9689fa3604))
* **Player:**  return type of setNumbers method in Player ([2149c3b8](https://github.com/woowacourse-precourse/javascript-baseball/commit/2149c3b8b62cef64b2fcd9937edbe12fdb8e642e))

##### Refactors

* **BaseballGame:**  move BaseballGame methods to utils file ([677771be](https://github.com/woowacourse-precourse/javascript-baseball/commit/677771be0761fc0da00e61d58bc9b835f5fd544f))

##### Code Style Changes

*  setup eslint ([3cd66d01](https://github.com/woowacourse-precourse/javascript-baseball/commit/3cd66d0197e9cb8a62d583e7d626ce1e850ff22d))

##### Tests

* **BaseballGameTest:**  add unit test ([12fbcfaa](https://github.com/woowacourse-precourse/javascript-baseball/commit/12fbcfaac87c53f2d10a07d86fd4dd8bb7a39e9d))
* **utilTest:**  add unit test ([d6316c89](https://github.com/woowacourse-precourse/javascript-baseball/commit/d6316c8939c06a21e5871849b8f85e9c6dc78025))
* **PlayerTest:**  add unit test method in Player ([792e4af2](https://github.com/woowacourse-precourse/javascript-baseball/commit/792e4af2d6b6256758ad6af03ede38f8a7085b5a))
* **ComputerTest:**  add unit test of setRandomNumbers method in Computer ([a5a8f2c1](https://github.com/woowacourse-precourse/javascript-baseball/commit/a5a8f2c114df25db6bfc4c9a34cabe5499b30042))
* **AppTest:**  add unit test of printStartMessage method in App ([1af66bbe](https://github.com/woowacourse-precourse/javascript-baseball/commit/1af66bbed3b1c1bfc722e0b8858da91e4a55fad9))
* **ConsoleTest:**  add unit test of print method in Console ([80409ff3](https://github.com/woowacourse-precourse/javascript-baseball/commit/80409ff39e2d99ea5c67036672480815a8f9d4ab))

#### 1.0.0 (2022-11-04)

##### New Features

*  setup precourse baseball project ([35cbc066](https://github.com/woowacourse-precourse/javascript-baseball/commit/35cbc066f1e57749df4ed3b240757ac154c14f85))
