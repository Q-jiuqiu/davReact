// 以及不支持了

// es5原生方式React.createClass定义的组件
import React from "react"

const component1 = React.createClass({
  //定义传入props中的属性各种类型
  propTypes: {},
  //组件默认的props对象
  defaultProps: {},
  // 设置 initial state
  getInitialState: function () {//组件相关的状态对象
    return {
      text: this.props.initialValue || 'placeholder'
    };
  },
  handleChange(event) {
    this.setState({ //this represents react component instance
      text: event.target.value
    });
  },
  render() {
    return (
      <div>
        Type something:
        <input onChange={this.handleChange} value={this.state.text} />
      </div>
    )
  }
})

export default component1

// 函数this自绑定
// React.createClass创建的组件，其每一个成员函数的this都有React自动绑定，任何时候使用，直接使用this.method即可，函数中的this会被正确设置。
