# Router 

## 라우팅 
- 웹 애플리케이션에서 라우팅이라는 개념은 사용자가 요청한 URL에 따라 알맞는 페이지를 보여주는 것을 의미한다. 웹 애플리케이션을 만들 때 프로젝트를 하나의 페이지로 구성할 수도 있고, 여러 페이지를 구성할 수도 있다
- 예를 들어, 일정 관리 애플리케이션에서는 하나의 페이지로 충분할 수 있겠지만, 블로그를 만든다고 가정하면 여러 페이지로 구성이 되어있다
- 글쓰기 페이지: 새로운 포스트를 작성하는 페이지
- 포스트 목록 페이지: 블로그에 작성된 여러 포스트들의 목록을 보여주는 페이지
- 포스트 읽기 페이지: 하나의 포스트를 보여주는 페이지
- 이렇게 여러 페이지로 구성된 웹 애플리케이션을 만들 때 페이지 별로 컴포넌트들을 분리해가면서 프로젝트를 관리하기 위해 필요한 것이 바로 라우팅 시스템이다

![image](https://github.com/user-attachments/assets/854a411a-6710-4f6b-870a-fc6310435714)

## SPA 
- 싱글 페이지 애플리케이션이란, 한 개의 페이지로 이루어진 애플리케이션
- MPA는 사용자 인터랙션이 별로 없는 정적인 페이지들은 기존의 방식이 적합하지만, 사용자 인터랙션이 많고 다양한 정보를 제공하는 모던 웹 애플리케이션은 이 방식이 적합하지 않다
- HTML을 한번만 받아와서 웹 애플리케이션을 실행시킨 후에 그 이후에는 필요한 데이터만 받아와서 화면에 업데이트 해주는 것이 싱글 페이지 애플리케이션이다
- 싱글 페이지 애플리케이션은 기술적으로는 한 페이지만 존재하는 것이지만, 사용자가 경험하기에는 여러 페이지가 존재하는 것 처럼 느낄 수 있다. 리액트 라우터와 같은 라우팅 시스템은 사용자의 브라우저 주소창의 경로에 따라 알맞는 페이지를 보여주는데, 이후 링크를 눌러서 다른 페이지로 이동하게 될 때 서버에 다른 페이지의 html을 새로 요청하는 것이 아니라, 브라우저의 History API를 사용하여 브라우저의 주소창의 값만 변경하고 기존에 페이지에 띄웠던 웹 애플리케이션을 그대로 유지하면서 라우팅 설정에 따라 또 다른 페이지를 보여주게 된다


## 리액트 라우터 적용 및 기본 사용법 

![image](https://github.com/user-attachments/assets/17831937-f0b6-4d21-a58a-c26bc02c53a0)

## 프로젝트 생성 및 라이브러리 설치 
```
npx create-react-app router-tutorial 
```
or
```
yarn create react-app router-tutorial
```

```
cd router-tutorial
```

```
yarn add react-router-dom 
```

```
npm i react-router-dom
```

## 프로젝트에 라우터 적용 
- src/index.js 파일에서 react-router-dom에 내장되어 있는 BrowserRouter라는 컴포넌트를 사용하여 감싸면 된다 이 컴포넌트는 웹 애플리케이션에 HtmL5의 History API를 사용하여 페이지를 새로 불러오지 않고도 주소를 변경하고 현재 주소의 경로에 관련된 정보를 리액트 컴포넌트에서 사용할 수 있도록 해 준다

```
import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

## 페이지 컴포넌트 만들기 
- 사용자가 웹 사이트에 들어오게 됐을 때 가장 먼저 보여지게 될 Home 페이지 컴포넌트와 웹 사이트를 소개하는 About 페이지 컴포넌트를 만들기
- src 디렉터리에 pages 디렉토리를 만들고, 그 안에 다음 파일들을 생성
- src/pages/Home.js
```
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
    </div>
  );
};

export default Home;
```
- src/pages/About.js
```
import React from 'react';

const About = () => {
  return (
    <>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
    </>
  );
};

export default About;
```

## Route 컴포넌트로 특정 경로에 원하는 컴포넌트 보여주기 
- 사용자의 브라우저 주소 경로에 따라 원하는 컴포넌트를 보여주기 위해서 Route라는 컴포넌트를 통해 라우트 설정을 해주어야 한다
- Route 컴포넌트는 다음과 같이 사용한다
  - <Route path="주소규칙" element={보여 줄 컴포넌트 JSX} />
- 그리고, Route 컴포넌트는 Routes 컴포넌트 내부에서 사용
- App 컴포넌트를 다음과 같이 Route 컴포넌트를 사용하여 라우트 설정
```
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
```
## Link 컴포넌트를 사용하여 다른 페이지로 이동하는 링크 보여주기 
- Link 컴포넌트는 a 태그를 사용하긴 하지만, 페이지를 새로 불러오는 것을 막고 History API를 통해 브라우저 주소의 결로만 바꾸는 기능이 내장되어 있다
- Link 컴포넌트는 다음과 같이 사용한다
  - <Link to="경로">링크 이름</Link> 
- Link 컴포넌트를 Home 페이지 컴포넌트에서 사용 


## URL 파라미터와 쿼리스트링 

## URL 파라미터 

## 쿼리스트링 
```
import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>쿼리스트링: <strong>{location.search}</strong></p>
    </div>
  );
};

export default About;
```

```
import React from "react";
import { useSearchParams } from "react-router-dom";
const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");
  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };
  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};
export default About;
```

## 중첩된 라우트 
- Articles.js 
```
import React from "react";
import { Link } from "react-router-dom";
const Articles = () => {
  return (
    <ul>
      <li>
        <Link to="/articles/1">게시글 1</Link>
      </li>
      <li>
        <Link to="/articles/2">게시글 2</Link>
      </li>
      <li>
        <Link to="/articles/3">게시글 3</Link>
      </li>
    </ul>
  );
};
export default Articles;
```

- Article.js
```
import React from "react";
import { useParams } from "react-router-dom";
const Article = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>게시글 {id}</h2>
    </div>
  );
};
export default Article;
```

```
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} />
    </Routes>
  );
};
export default App;
```

```
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/velopert">velopert의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
```

```
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  );
};
export default App;
```

```
import React from "react";
import { Link, Outlet } from "react-router-dom";
const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
    </div>
  );
};
export default Articles;
```

## 공통 레이아웃 컴포넌트 
```
import React from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
```
```
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  );
};
export default App;
```

## index props 
```
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  );
};
export default App;
```

## useNavigate 
```
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
const Layout = () => {
  const navigate = useNavigate();
  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };
  const goArticles = () => {
    // articles 경로로 이동
    navigate("/articles");
  };
  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
```

```
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Articles = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };
  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <NavLink
            to="/articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 3
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Articles;
```
```
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};
const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};
export default Articles;
```

## NotFound 페이지 만들기
```
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 64,
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      404
    </div>
  );
};
export default NotFound;
```
```
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
```
## Navigate 컴포넌트
```
import React from "react";
const Login = () => {
  return <div>로그인 페이지</div>;
};
export default Login;
```

```
import React from "react";
import { Navigate } from "react-router-dom";
const MyPage = () => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return <div>마이 페이지</div>;
};
export default MyPage;
```
```
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
```

