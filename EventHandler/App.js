import React, { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? <h1>환영합니다!</h1> : <h1>로그인 해주세요.</h1>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>
    </div>
  );
}
export default App;
