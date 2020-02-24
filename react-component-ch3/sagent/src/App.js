import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null
    };
  }
  componentWillMount() {
    // JSONデータを読み込む
    request
      .get("./fruits.json")
      .accept("application/json")
      .end((err, res) => {
        this.loadedJSON(err, res);
      });
  }
  // データを読み込んだとき
  loadedJSON(err, res) {
    if (err) {
      console.log("JSON読み込みエラー");
      return;
    }
    this.setState({
      items: res.body
    });
  }
  render() {
    // JSONデータの読み込みが完了しているか?
    if (!this.state.items) {
      return <div className="App">現在読み込み中</div>;
    }
    // 読み込んだデータからselect要素を作る
    const options = this.state.items.map(e => {
      return (
        <option value={e.price} key={e.name}>
          {e.name}
        </option>
      );
    });
    return (
      <div className="App">
        果物：<select>{options}</select>
      </div>
    );
  }
}

export default App;
