## 📖 **INDEX**

1. [구현 기능 목록](#🧐-구현-목록)

   (1) [Test](#🔹-test)<br>
   (2) [Constant](#🔹-constantsjs)<br>
   (3) [App](#🔹-appjs)<br>
   (4) [Utils](#🔹-util)<br>
   (5) [Model](#🔹-model)<br>

2. [디렉토리 구조](#🧐-디렉토리-구조)
3. [실행 결과](#🧐-실행결과)

---

<br>

## 🧐 **구현 목록**

### 🔹 **Test**

- [x] 실행은 제대로 되나 jest 이용한 test case 출력이 제대로 안되는 상황 -> 다시 리팩토링
  - [x] 연쇄적인 함추 호출 방법으로 해결

### 🔹 **Constants.js**

- [x] 출력용 상수 처리
  - [x] 게임시작문구
  - [x] 실행 결과 문구
  - [x] 게임을 다시 진행할지 여부를 출력하는 문구
  - [x] 예외처리용 에러문구

### 🔹 **App.js**

- [x] 전체 게임 횟수를 count 해 첫번째 게임에서만 게임을 시작합니다 문구가 출력되도록 설정
- [x] Controller 호출을 통해 게임을 시작

### 🔹 **Util**

- [x] error throw 메서드
- [x] input이 제대로 들어왔는지 체크하는 메서드

### 🔹 **Controller.js**

- [x] Random number의 값을 받아 정답(컴퓨터)으로 처리
- [x] 입력을 받고 게임을 시작
- [x] Model 을 호출하여 결과를 계산하고 그 결과를 return
- [x] 게임을 재진행할지 묻고 다시 함수 호출

### 🔹 **Model**

#### 🔸 Game.js

- [x] 실행 결과 계산 후 return
  - [x] strike 체크
  - [x] ball 체크
  - [x] 아무것도 없으면 낫싱 처리

#### 🔸 Random.js

- [x] MissionUtils 라이브러리를 이용하여 random 값 추출 후 return

#### 🔸 Print.js

- [x] 실행 결과를 출력

#### 🔸 Exception.js

- [x] 예외처리
  - [x] 숫자를 입력하지않고 문자를 입력한 경우
  - [x] 숫자에 0이 포함된 경우
  - [x] 숫자입력이 3자리 수가 아닌 경우
  - [x] 게임을 새로 시작하는 문구에서 1이나 2가 아닌 다른 문구(수)를 입력했을 때
  - [x] 숫자가 중복되게 3자리를 입력한 경우

<br>

## 🧐 디렉토리 구조

<details open="true">
  <summary>Click to toggle</summary>
  <pre>📦 /
┣ 📂__tests__
┃ ┣ 📜ApplicationTest.js
┃ ┗ 📜StringTest.js
┣ 📁docs
┃ ┃ ┣ 📜README.md
┣ 📂src
┃ ┣ 📁model
┃ ┃ ┣ 📜Exception.js
┃ ┃ ┣ 📜Game.js
┃ ┃ ┣ 📜Print.js
┃ ┃ ┗ 📜Random.js
┃ ┣ 📁utils
┃ ┃ ┣ 📜throw-error.js
┃ ┃ ┗ 📜validation.js
┃ ┣ 📜App.js
┃ ┣ 📜Constants.js
┃ ┗ 📜Controller.js
┣ 📜package-lock.json
┣ 📜package.json
┗ 📜README.md</pre>
<br>

## 🧐 실행결과

![image](https://user-images.githubusercontent.com/96935132/199890892-02ebd2b2-54e9-43fc-8384-61f7b5762017.png)
