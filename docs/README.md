# ⚾ 미션 - 숫자 야구 게임

## 🦴 구조

```sh
├─── App.js
└── src
    └── modules
        ├── gameInformation.js # BaseBall 파일
        ├── gameStart.js # 게임 시작 파일
        ├── generateNumbers.js # 랜덤 숫자 생성 파일
        ├── isStrikeBallResult.js # 힌트 제공 파일
        └── isValid.js # 유효성 검증 파일
```

## 📌 세부 구현 사항

- [x] indent depth `2`까지 허용
- [x] 함수(또는 메소드)는 한 가지 역할만 수행하도록 설계
- [x] 생성된 숫자는 `서로 다른 수`로 이뤄져야 함 (숫자는 1 ~ 9)
- [x] 사용자의 잘못된 입력 => `throw` 이용해 처리
- [x] 힌트로 볼과 스트라이크가 제공될 경우 `볼 -> 스트라이크` 순으로 출력 ex) 1볼 1스트라이크
- [x] 3스트라이크로 게임이 끝날 시 `1`은 재시작, `2`는  게임 종료 그 외 입력 시 `throw` 이용해 처리
- [x] 입력된 숫자는 `String` 형태로 변환하여 구현


## 🍌 기타

[1주차 미션 정리하기](https://jade-gasoline-2a3.notion.site/6b1b05ed691b451b8665a492c74f1b78)