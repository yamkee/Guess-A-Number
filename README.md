# Guess A Number

## Component의 종류

1. Card
   - shadow 박스 디자인이 저장되어있다. 재사용이 용이하도록 분리함
2. Header
   - 모든 screen마다 맨 위에 위치 할 Header이다. 반복적으로 사용되므로 분리함
3. Input
   - TextInput의 기본적인 디자인이 저장되어있다. 재사용이 용이하도록 분리하고, props를 통해서 override를 가증하게 해놓음

## Screen의 종류

### StartGameScreen
      - 메인이 될 페이지이며 게임을 시작할 수 있는 페이지
    
   1. State의 종류
        - enteredNumber : Input을 통해 들어온 값을 보관
        - selectedNumber : Confirm 버튼을 눌렀을 때 enteredNumber에 저장된 값을 보관한다.
        - confirmed : 사용자에게 Confirm 버튼을 누른 후 한번 더 게임을 시작할 건지를 alert하기위해 사용
  
   2. Props의 종류
   3. 사용된 RN 컴포넌트 와 API
    - TouchableWithoutFeedback : 하나의 자식 컴포넌트만 가질 수 있으며, touch했을 때 아무런 반응이 일어 나지 않는다. 명확한 이유가 있을 때 사용하는 것을 권장함
    - Keyboard : Keyboard를 Native 수준으로 관리 할 수 있는 API, TouchableWithoutFeedback와 함꼐 사용하여 터치가 일어났을 때 키보드를 dismiss시키기 위해 사용함
    - Alert : alert dialog를 실행 시켜주는 API, 잘못된 입력 값에 대해 처리하기 위해 사용함

## constants디렉토리
    - color나 width, height등 자주 사용 되는 상수 값들을 보관하는 디렉토리
1. colors : 헥스 색상 코드를 보관함


## 잊어 먹을 것 같은 것들
- isNaN(number) : (number === NaN) 과 같은 의미 이며, (number === NaN)은 RN에서 체크가 되지 않는다. 