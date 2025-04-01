# 컴포넌트에 대해 알아보기 
- 리액트에서는 모든 페이지가 컴포넌트로 구성되어 있고, 하나의 컴포넌트는 또 다른 여러 개의 컴포넌트의 조합으로 구성될 수 있다. 
> ![Image](https://github.com/user-attachments/assets/106446b5-d284-4f1b-9998-2b4d3a557b97)
- 리액트 컴포넌트의 역할 
  - 어떠한 속성들을 입력으로 받아서 그에 맞는 **리액트 엘리먼트를 생성하여 리턴해 주는 것** 
  - 화면에 나타날 엘리멘트를 생성

# Props에 대해 알아보기 
## Props의 개념
- Props는 리액트에서 **속성(properties)** 을 의미하며, 부모 컴포넌트가 자식 컴포넌트에 전달하는 **데이터**입니다.
- 자식 컴포넌트는 이 props를 **읽기 전용**으로 사용할 수 있습니다.
![Image](https://github.com/user-attachments/assets/a00c079c-2c5b-4726-9242-d309edae0a1c)

## Property, 리액트 컴포넌트의 속성
- 리액트 컴포넌트에서 **Property(속성)** 은 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터를 의미합니다.
- 각 컴포넌트는 자신이 받은 props를 통해 부모와 데이터를 주고받습니다.

## 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체
- Props는 자바스크립트 **객체**로 전달됩니다.
- 이 객체에는 다양한 데이터 유형을 담을 수 있으며, 배열, 객체, 함수 등도 전달 가능합니다.

## Props의 특징

- **읽기 전용**: Props는 **읽기 전용**입니다. 즉, 컴포넌트 내에서 props 값을 직접 수정할 수 없습니다.
  
- **모든 리액트 컴포넌트는 그들의 props에 관해서 Pure 함수 같은 역할을 해야 함**:  
  리액트 컴포넌트는 전달받은 props에 대해서 **Pure 함수**처럼 작동해야 합니다. 이는 동일한 props가 주어졌을 때 항상 같은 결과를 반환해야 한다는 의미입니다.
  
- **모든 리액트 컴포넌트는 props를 직접 바꿀 수 없고, 같은 props에 대해서는 항상 같은 결과를 보여줘야 함**:  
  컴포넌트는 props를 직접 수정할 수 없으며, 동일한 props에 대해서는 항상 **일관된** 결과를 출력해야 합니다.

```jsx
// pure 함수 
// input을 변경하지 않으며 같은 input에 대해서 항상 같은 output을 리턴 
function sum(a,b) {
  return a+b;
}
 ``` 
```jsx
// impure 함수 
// input을 변경함 
function withdraw(account, amount) {
  account.total -= amount;
}
 ```
## Props 사용법

- **키-값 쌍의 형태**:  
  Props는 **키-값** 쌍의 형태로 전달됩니다. 
  
- **문자열 이외의 데이터**:  
  문자열 이외에 정수, 변수, 다른 컴포넌트 등이 props에 들어갈 경우에는 **중괄호({ })**를 이용해 전달합니다.
```jsx
function App(props) {
  return ( 
    <Profile 
      name="소플" 
      introduction="안녕하세요, 소플입니다."
      viewCount={1500}
    />
  );
}
 ``` 
# 컴포넌트 만들기 
- 컴포넌트의 종류
  - 함수 컴포넌트를 개선(Hook,7장)하여 주로 사용

![Image](https://github.com/user-attachments/assets/5504b90a-b59a-4ee3-a151-aca98f002c06)
- 함수 컴포넌트 -간단함
```jsx 
function Welcome(props) {
  return <h1>안녕, {props.name}</h1>;
}
 ```  
- 클래스 컴포넌트 
```jsx 
class Welcome extends React.Component {
  render() {
    return <h1>안녕, {this.props.name}</h1>;
    }
}
``` 
- 컴포넌트 이름 짓기 
  - 컴포넌트의 이름은 **항상 대문자로 시작**해야 됨
  - 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문 
    -'div'나 'span': React.createElement()로 전달 
    -'<Foo />': React.createElement(Foo)로 전달
# mutable immutable 차이
- Mutable한 객체는 생성된 이후에 상태가 변경될 수 있는 객체이고, Immutable한 객체는 생성된 이후에 상태가 변경되지 않는 객체를 말한다.
# Notification.jsx와 오류 해결법 

