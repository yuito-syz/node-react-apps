import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // マウント
  constructor (props) {
    super(props)
    console.log('constructor')
  }
  componentWillMount(){
    console.log('componentWillMount')
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  // 更新
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillMount(){
    console.log('componentWillMount')
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  // アンマウント
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  render (){
    console.log('render')
    const setStateHandler =(e)=> {
      console.log('* call setState()')
      this.setState({r: Math.random()})
    }
    return (
      <div>
        <button onClick={setStateHandler}>setState</button>
      </div>
    )
  }
}

export default App;