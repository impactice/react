# 컴포넌트에 대해 알아보기 
- 리액트에서는 모든 페이지가 컴포넌트로 구성되어 있고, 하나의 컴포넌트는 또 다른 여러 개의 컴포넌트의 조합으로 구성될 수 있다. 

- 리액트 컴포넌트의 역할 
 - 어떠한 속성들을 입력으로 받아서 그에 맞는 **리액트 엘리먼트를 생성하여 리턴해 주는 것** 
 - 화면에 나타날 엘리멘트를 생성

# Notification.jsx와 오류 해결법 

## React NotificationList 컴포넌트 설명

이 `NotificationList` 컴포넌트는 주어진 일정에 따라 알림을 1초 간격으로 화면에 보여주고, 모든 알림을 표시한 후 초기화하는 기능을 가집니다.

### 컴포넌트 구성

1. **상태 관리**:
   - `notifications` 상태는 현재 표시된 알림들을 저장합니다. 초기값은 빈 배열입니다.

2. **라이프사이클 메서드**:
   - **`componentDidMount`**: 컴포넌트가 마운트될 때 `setInterval`을 사용하여 매초 새로운 알림을 상태에 추가합니다. 모든 알림이 표시되면 `setInterval`을 멈추고 알림 목록을 초기화합니다.
   - **`componentWillUnmount`**: 컴포넌트가 언마운트될 때, `setInterval`을 정리하여 메모리 누수를 방지합니다.

3. **렌더링**:
   - `notifications` 배열에 저장된 알림들을 순차적으로 렌더링합니다. 각 알림은 `Notification` 컴포넌트로 표시되며, 각 `Notification`에 `id`와 `message`를 전달합니다.

### 코드 예시

```javascript
import React from "react";
import Notification from "./Notification"; // Notification 컴포넌트를 가져옵니다.

const reservedNotifications = [
  { id: 1, message: "안녕하세요, 오늘 일정을 알려드립니다." },
  { id: 2, message: "점심식사 시간입니다." },
  { id: 3, message: "이제 곧 미팅이 시작됩니다." },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        
        // 상태를 불변성 있게 업데이트
        this.setState(prevState => ({
          notifications: [...prevState.notifications, reservedNotifications[index]],
        }));
      } else {
        this.setState({ notifications: [] });
        clearInterval(timer);
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (timer) {
      clearInterval(timer);
    }
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => (
          <Notification
            key={notification.id}
            id={notification.id}
            message={notification.message}
          />
        ))}
      </div>
    );
  }
}

export default NotificationList;
