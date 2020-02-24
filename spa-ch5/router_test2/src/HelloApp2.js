import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HelloApp2 = () => (
  <Router>
    <div style={{ margin: 20 }}>
      <HelloHeader />
      <div>
        <Route exact path="/" componnent={HelloJapanese} />
        <Route path="/ja" componnent={HelloJapanese} />
        <Route path="/en" componnent={HelloEnglish} />
        <Route path="/cn" componnent={HelloChinese} />
      </div>
      <HelloFooter />
    </div>
  </Router>
);

const HelloHeader = () => (
  <div>
    <h3 style={styleHeader}>HelloApp v2</h3>>
    <p>
      [<a href="/ja">日本語</a>] [<a href="/en">英語</a>] [
      <a href="/cn">中国語</a>]
    </p>
  </div>
);

const HelloFooter = () => (
  <div style={styleHeader}>挨拶をいろいろな言語で表示するアプリです。</div>
);

const HelloJapanese = () => (
  <div>
    <h1>こんにちは</h1>
  </div>
);
const HelloEnglish = () => (
  <div>
    <h1>Hello</h1>
  </div>
);
const HelloChinese = () => (
  <div>
    <h1>你好</h1>
  </div>
);

const styleHeader = {
  backgroundColor: "orange",
  color: "white",
  padding: 8
};

export default HelloApp2;
