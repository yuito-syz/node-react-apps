import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HelloApp = () => {
  <Router>
    <div style={{ margin: 20 }}>
      <Route exact path="/" componnent={Home} />
      <Route path="/ja" componnent={HelloJapanese} />
      <Route path="/en" componnent={HelloEnglish} />
      <Route path="/cn" componnent={HelloChinese} />
    </div>
  </Router>;
};

const Home = () => (
  <div>
    <h1>Hello App</h1>
    <p>言語を洗濯してください</p>
    <ul>
      <li>
        <a href="/ja">日本語</a>
      </li>
      <li>
        <a href="/en">英語</a>
      </li>
      <li>
        <a href="/cn">中国語</a>
      </li>
    </ul>
  </div>
);

const HelloJapanese = () => (
  <div>
    <h1>こんにちは</h1>
    <p>
      <a href="/">戻る</a>
    </p>
  </div>
);
const HelloEnglish = () => (
  <div>
    <h1>Hello</h1>
    <p>
      <a href="/">Back</a>
    </p>
  </div>
);
const HelloChinese = () => (
  <div>
    <h1>你好</h1>
    <p>
      <a href="/">返回</a>
    </p>
  </div>
);

export default HelloApp;
