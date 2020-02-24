import React from "react";
import ReactDOM from "react-dom";

export default class TextAreaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Hello" };
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.doSubmit(e)}>
          <label>
            <input
              type="checkbox"
              onChange={e => this.doChange(e)}
              checked={this.state.check}
            />
          </label>
          <br />
          <input type="submit" value="決定" />
        </form>
      </div>
    );
  }
  doChange(e) {
    this.setState({ value: e.target.value });
  }
  doSubmit(e) {
    e.preventDefault();
    window.alert(this.state.value);
  }
}
ReactDOM.render(<TextAreaForm />, document.getElementById("root"));
