![image](https://github.com/user-attachments/assets/4d6a0fed-a2d2-4291-a831-a0adcf88099e)

![image](https://github.com/user-attachments/assets/45870593-e4c9-4dbb-bd96-aab3c59ede65)

![image](https://github.com/user-attachments/assets/40bb24d3-2c56-474c-be9f-b76e3451e639)

![image](https://github.com/user-attachments/assets/01de8fca-da15-46d9-893c-6f3f86c6745f)

![image](https://github.com/user-attachments/assets/f3e2f711-6bc9-4008-99f0-0bf226cca0f6)

![image](https://github.com/user-attachments/assets/4bb01758-d900-4daa-8adc-0f60425ae5da)

![image](https://github.com/user-attachments/assets/aa2d76f1-0937-4faf-8fe5-498d9e49279e)

![image](https://github.com/user-attachments/assets/f32b38df-6027-43a6-ba96-09532c5dba94)

![image](https://github.com/user-attachments/assets/74abc3c5-0590-4a3f-919d-ce3d964d3ec9)

![image](https://github.com/user-attachments/assets/cbe0739f-c20e-4983-8b57-5d8d6062b1f0)

![image](https://github.com/user-attachments/assets/79dd5b1d-8d85-4afb-9662-9f1565b1640a)

![image](https://github.com/user-attachments/assets/b8ef2650-4f26-45db-acc3-a2a9f901fcaf)


- 동기
```javascript
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [processingTime, setProcessingTime] = useState(0);
  
  console.log('App 컴포넌트 렌더링 시작, 현재 count:', count);
  
  const handleSyncOperation = () => {
    console.log('1. 동기 함수 시작');
    
    // 현재 상태 기록
    console.log('2. 동기 작업 전 count 값:', count);
    
    // 무거운 동기 작업 실행
    console.log('3. 무거운 동기 작업 시작...');
    const startTime = performance.now();
    
    // CPU를 점유하는 동기 작업
    let result = 0;
    for (let i = 0; i < 500000000; i++) {
      result += (i % 3);
    }
    
    const endTime = performance.now();
    const timeSpent = (endTime - startTime).toFixed(2);
    
    console.log('4. 동기 작업 완료, 결과:', result);
    console.log('5. 작업 소요시간:', timeSpent, 'ms');
    
    // 상태 업데이트
    console.log('6. 상태 업데이트 전');
    setCount(count + 1);
    setProcessingTime(timeSpent);
    
    // 중요: 동기 함수에서는 상태 업데이트 후에도 이전 상태값이 유지됨
    console.log('7. 상태 업데이트 직후 count 값 (아직 변경되지 않음):', count);
    
    console.log('8. 동기 함수 종료');
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React 동기 실행 예제</h1>
        <p>현재 카운트: {count}</p>
        {processingTime > 0 && (
          <p>마지막 작업 소요시간: {processingTime} ms</p>
        )}
        <button onClick={handleSyncOperation}>
          동기 작업 실행하기
        </button>
        <p className="instruction">
          개발자 도구의 콘솔을 열어 로그를 확인하세요<br />
          버튼 클릭 시 UI가 잠시 멈추는 것을 확인할 수 있습니다
        </p>
      </header>
    </div>
  );
}

export default App;
```
```javascript
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("초기 메시지");
  const [isLoading, setIsLoading] = useState(false);
  
  console.log('1. 컴포넌트 렌더링 중, 현재 메시지:', message);
  
  const handleAsyncOperation = () => {
    console.log('2. 비동기 함수 시작');
    
    setIsLoading(true);
    console.log('3. 로딩 상태로 변경');
    
    console.log('4. setTimeout 호출 전 (비동기 작업 예약)');
    
    setTimeout(() => {
      console.log('6. setTimeout 콜백 실행 (2초 후)');
      setMessage(`업데이트된 메시지 (${new Date().toLocaleTimeString()})`);
      setIsLoading(false);
      console.log('7. 상태 업데이트 및 로딩 완료');
    }, 2000);
    
    console.log('5. setTimeout 호출 후 (함수는 계속 실행)');
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React 비동기 setTimeout 예제</h1>
        <p>{isLoading ? '로딩 중...' : message}</p>
        <button onClick={handleAsyncOperation} disabled={isLoading}>
          {isLoading ? '처리 중...' : '비동기 작업 시작'}
        </button>
        <p className="instruction">
          개발자 도구의 콘솔을 열어 로그를 확인하세요
        </p>
      </header>
    </div>
  );
}

export default App;
```
