# 컴포넌트에 대해 알아보기 
- 리액트에서는 모든 페이지가 컴포넌트로 구성되어 있고, 하나의 컴포넌트는 또 다른 여러 개의 컴포넌트의 조합으로 구성될 수 있다. 
> ![Image](https://github.com/user-attachments/assets/106446b5-d284-4f1b-9998-2b4d3a557b97)
- 리액트 컴포넌트의 역할 
  - 어떠한 속성들을 입력으로 받아서 그에 맞는 **리액트 엘리먼트를 생성하여 리턴해 주는 것** 
  - 화면에 나타날 엘리멘트를 생성

## Component
- **React 컴포넌트(Component)**는 UI를 구성하는 **독립적인 코드 블록**입니다.
- 컴포넌트는 **HTML, CSS, JavaScript**, 그리고 **상태(State)**와 **속성(Props)**을 포함하여 재사용 가능한 UI 단위를 만듭니다.
- 리액트는 **모든 페이지가 컴포넌트로 구성**되어 있으며, 하나의 컴포넌트는 또 다른 여러 개의 컴포넌트의 **조합**으로 구성될 수 있습니다.
- 작은 컴포넌트들이 모여 하나의 컴포넌트를 구성하고, 이러한 컴포넌트들이 모여 **전체 페이지**를 구성합니다.
- **하나의 컴포넌트를 반복적으로 사용**함으로써 전체 코드 양을 줄일 수 있어, **개발 시간**과 **유지보수 비용**을 자연스럽게 줄일 수 있습니다.
- 컴포넌트의 **이름은 항상 대문자로 시작**해야 합니다.
![Image](https://github.com/user-attachments/assets/400bcbd2-305c-4484-8ebf-d1ca95f3d8fc)

# Props에 대해 알아보기 
## Props의 개념
- Props는 리액트에서 **속성(properties)** 을 의미하며, 부모 컴포넌트가 자식 컴포넌트에 전달하는 **데이터**입니다.
- 자식 컴포넌트는 이 props를 **읽기 전용**으로 사용할 수 있습니다.
![Image](https://github.com/user-attachments/assets/a00c079c-2c5b-4726-9242-d309edae0a1c)

- **Props**는 **Property**의 줄임말로, **속성**을 의미합니다.
- **Property**는 일반적으로 '재산'이라는 뜻도 있지만, **속성** 또는 **특성**이라는 뜻을 갖고 있습니다. 리액트에서는 **속성**이라는 의미로 사용됩니다.
- **Props 복수형을 나타내는 's'**는 Prop이 여러 개일 수 있다는 것을 의미합니다. 즉, 하나의 컴포넌트에는 여러 개의 **Props**가 전달될 수 있습니다.
- 다시 말해, **Props는 리액트 컴포넌트의 속성**입니다.

![Image](https://github.com/user-attachments/assets/7ac25bc5-1046-45b9-8dd7-6b19abb3ee79)

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
    - 'div'나 'span': React.createElement()로 전달 
    - '<Foo />': React.createElement(Foo)로 전달 
```jsx 
// HTML div 태그로 인식 
const element = <div />; 

// Welcome이라는 리액트 컴포넌트로 인식 
const element = <Welcome name="인제" />;
``` 
- 컴포넌트 렌더링 
  - Virtual DOM에서 실제 DOM으로 이동하는 과정 
```jsx 
function Welcome(props) {
  return <h1>안녕, {props.name}</h1>;
}

const element = <Welcome name="인제" />;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
``` 

# 컴포넌트 합성 
- 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것 

![Image](https://github.com/user-attachments/assets/7e7d2a6d-1bec-4725-874e-d93bfe37c988)
```jsx 
function Welcome(props) { 
  return <h1>Hello, {props.name}</h1>;
} 

function App(props) { 
  return {
    <div> 
      <Welcome name="Mike" />
      <Welcome name="Steve" />
      <Welcome name="Jane" /> 
    </div> 
  }
} 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />);
``` 
# mutable immutable 차이
- Mutable한 객체는 생성된 이후에 상태가 변경될 수 있는 객체이고, Immutable한 객체는 생성된 이후에 상태가 변경되지 않는 객체를 말한다.

# 실습하기 
- index.js
```jsx 
import React from "react";
import ReactDOM from "react-dom/client";
import CommentList from './chapter_05/CommentList';
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<CommentList />);
``` 
- Comment.js
```jsx 
import React from "react";
const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }, nameText: {
        color: "black",
        fontsize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
}; function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    alt='작성자그림'
                    style={styles.image}
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}
export default Comment;
```
- CommentList.js 
```jsx
import React from "react";
import Comment from "./Comment";
const comments = [
    {
        name: "홍길동",
        comment: "안녕하세요! 홍길동입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재밌어요~~.",
    },
    {
        name: "최예진",
        comment: "안녕하세요! 프론트엔드 개발자입니다.",
    },
]; function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name}
                        comment={comment.comment} />
                );
            })}
        </div>
    );
}
export default CommentList; 
```
# Notification.jsx와 오류 해결법 

### 1.reservedNotifications 배열 
```jsx 
const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];
``` 
#### 역할 
- reservedNotifications는 고정된 알림 데이터를 미리 정의한 배열 
- 각 객체는 다음의 두 가지 속성을 포함 
  - id:알림의 고유 식별자 
  - message: 알림 메시지 내용 

#### 작동 방식 
- 예를 들어, reservedNotifications[0]은 첫 번째 알림으로, id가 1, 메시지가 "안녕하세요, 오늘 일정을 알려드립니다." 
- 이 배열은 컴포넌트 내부에서 상태(state)를 업데이트하는 원본 데이터로 사용된다. 

#### 클라스형 컴포넌트 
```jsx
class NotificationList extends React.Component { 
```
- NotificationList는 알림 목록을 관리하고 화면에 표시하는 React클래스형 컴포넌트이다.
- 내부 상태(state)와 생명주기 메서드(componentDidMount, componentWillUnmount)를 활용하여 동작한다.

#### constructor와 초기 상태 설정
```jsx
constructor(props) {
    super(props);
    this.state = {
        notifications: [],
    };
}
``` 
- constructor: 
  - React 클래스형 컴포넌트에서 초기 상태를 정의한다. 
  - super(props)는 부모 클래스의 생성자를 호출한다. 
- state 초기값: 
  - notifications 배열은 빈 배열로 초기환된다. 
  - 알림 데이터를 순차적으로 추가하여 업데이트 된다. 

#### 문제가 된 componentDidMount 
- 수정이 되기 전 버전 
```jsx
componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 1000);
  }
```
- 수정이 된 버전

```jsx
componentDidMount() {
    this.timer = setInterval(() => {
        this.setState((prevState) => {
            if (prevState.notifications.length < reservedNotifications.length) {
                return {
                    notifications: [
                        ...prevState.notifications,
                        reservedNotifications[prevState.notifications.length],
                    ],
                };
            }
            return prevState; // 알림 목록을 초기화하지 않음
        });
    }, 1000);
}
``` 
- 역할: 
  - 컴포넌트가 처음 랜더링된 직후 실행 
  - setlnterval을 사용하여 1초마다 상태를 업데이트한다. 
- 작동 방식: 
  - 1. 1초마다 setState를 호출 
  - 2. 현재 알림 배열의 길이(prevState.notitications.length)를 기준으로 다음 알림을 추가 
  - 3. 모든 알림이 추가되면 상태를 더 이상 업데이트하지 않는다. 

#### componentWillUnmount 
```jsx
componentWillUnmount() {
    if (this.timer) {
        clearInterval(this.timer);
    }
}
``` 
- 역할: 
  - 컴포넌트가 화면에서 제거되기 전에 호출된다. 
  - 타이머(setlnterval)를 제거하여 메모리 누수를 방지 

#### render 메서드 
```jsx
render() {
    return (
        <div>
            {this.state.notifications.map((notification) => {
                return (
                    <Notification
                        key={notification.id}
                        id={notification.id}
                        message={notification.message}
                    />
                );
            })}
        </div>
    );
}
``` 
- 역할: 
  - 상태(state)에 저장된 알림 데이터를 화면에 렌더링한다. 
  - notifications 배열의 각 항목을 Notification 컴포넌트로 변환한다. 
- 출력 결과: 
  - 각 알림은 고유한 key값과 메시지를 표시한다. 

#### 실행 흐름 
- 컴포넌트 마운트: 
  - componentDidMount가 호출되어 1초마다 알림이 추가 
- 랜더링: 
  - 상태가 업데이트되면 render 메서드가 호출되어 새로운 알림이 화면에 표시된다. 
- 컴포넌트 언마운트: 
  - componentwillUnmount가 호출되어 타이머가 제거 


#### 수정본
```jsx
import React from "react";
import Notification from "./Notification";
const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];
var timer;
class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((prevState) => {
                if (prevState.notifications.length < reservedNotifications.length) {
                    return {
                        notifications: [...prevState.notifications, reservedNotifications[prevState.notifications.length]],
                    };
                }
                return prevState; // 알림 목록을 초기화하지 않음
            });
        }, 1000);
    }
    
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }
    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}
export default NotificationList;

```
