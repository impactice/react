import React, { useState } from 'react';

// 헤더 컴포넌트 - props 사용
function Header({ title, userName, theme }) {
  return (
    <header className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-500 text-white'}`}>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm">환영합니다, {userName}님!</p>
    </header>
  );
}

// 습관 트래커 항목 컴포넌트 - props 사용
function HabitItem({ icon, label, value, unit, onChange }) {
  return (
    <div className="border rounded-lg p-4 mb-4 flex items-center">
      <div className="mr-4 text-2xl">{icon}</div>
      <div className="flex-grow">
        <h3 className="font-medium">{label}</h3>
        <div className="flex items-center mt-2">
          <input
            type="range"
            min="0"
            max={label === "물 마시기" ? "10" : label === "운동하기" ? "120" : "12"}
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="w-full mr-2"
          />
          <span className="w-16 text-right">{value} {unit}</span>
        </div>
      </div>
    </div>
  );
}

// 건강 점수 컴포넌트 - props 사용
function HealthScore({ waterScore, exerciseScore, sleepScore }) {
  const totalScore = waterScore + exerciseScore + sleepScore;
  
  let message = "평균 이하의 건강 습관입니다. 개선이 필요해요!";
  if (totalScore >= 75) {
    message = "훌륭한 건강 습관을 유지하고 있어요!";
  } else if (totalScore >= 50) {
    message = "좋은 건강 습관을 가지고 있어요. 조금만 더 노력해보세요!";
  }
  
  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-2">오늘의 건강 점수</h2>
      <div className="flex justify-between items-center">
        <div className="text-4xl font-bold">{totalScore}점</div>
        <div className="text-sm">{message}</div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="text-center">
          <div className="text-blue-500">💧</div>
          <div className="text-sm">{waterScore}점</div>
        </div>
        <div className="text-center">
          <div className="text-green-500">🏃</div>
          <div className="text-sm">{exerciseScore}점</div>
        </div>
        <div className="text-center">
          <div className="text-purple-500">😴</div>
          <div className="text-sm">{sleepScore}점</div>
        </div>
      </div>
    </div>
  );
}

// 메인 앱 컴포넌트
function App() {
  // 상태(state) 3개 정의
  const [waterIntake, setWaterIntake] = useState(2);
  const [exerciseMinutes, setExerciseMinutes] = useState(30);
  const [sleepHours, setSleepHours] = useState(7);
  
  // 건강 점수 계산 함수
  const calculateWaterScore = () => Math.min(100, waterIntake * 10);
  const calculateExerciseScore = () => Math.min(100, exerciseMinutes * 0.8333);
  const calculateSleepScore = () => {
    if (sleepHours < 6) return sleepHours * 10;
    if (sleepHours > 9) return 100 - (sleepHours - 9) * 10;
    return 100;
  };

  return (
    <div className="max-w-md mx-auto">
      <Header 
        title="일일 건강 습관 트래커" 
        userName="사용자" 
        theme="light" 
      />
      
      <main className="p-4">
        <HabitItem 
          icon="💧" 
          label="물 마시기" 
          value={waterIntake} 
          unit="리터"
          onChange={setWaterIntake} 
        />
        
        <HabitItem 
          icon="🏃" 
          label="운동하기" 
          value={exerciseMinutes} 
          unit="분"
          onChange={setExerciseMinutes} 
        />
        
        <HabitItem 
          icon="😴" 
          label="수면 시간" 
          value={sleepHours} 
          unit="시간"
          onChange={setSleepHours} 
        />
        
        <HealthScore 
          waterScore={calculateWaterScore()} 
          exerciseScore={calculateExerciseScore()} 
          sleepScore={calculateSleepScore()} 
        />
      </main>
    </div>
  );
}

export default App;
