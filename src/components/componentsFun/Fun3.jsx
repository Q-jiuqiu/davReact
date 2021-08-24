import { Component } from "react";
import PropTypes from 'prop-types';

export default class component2 extends Component {
  constructor(props) {
    super(props)

    // 初始化state
    this.state = {
      text: props.initialValue || 'placeholder'
    }

    // ES6 类中函数必须手动绑定
    // this绑定方式1:
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value //this绑定方式3会报错,因为获取不到event
    });
  }

  handleClick(event) {
    console.log(111, event);
  }

  render() {
    return (
      <div>
        Type something:
        {/* this绑定方式1: */}
        {/* <input onChange={this.handleChange} value={this.state.text} /> */}

        {/* this绑定方式2: */}
        {/* <input onChange={this.handleChange.bind(this)} value={this.state.text} /> */}

        {/* this绑定方式3: 此方式获取不到event*/}
        <input onChange={() => this.handleChange()} value={this.state.text} />
        <button onClick={() => this.handleClick(11)}> 按钮</button>
      </div >
    );
  }
}

component2.propTypes = {
  name: PropTypes.string
};

// React.Component创建的组件，其成员函数不会自动绑定this，需要开发者手动绑定，否则this不能获取当前组件实例对象。
