import { Component } from "react";

export default class ConditionalRender extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShow: true
    }
  }

  handleClick() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  // 方式4: 函数式组件渲染
  isShowCom() {
    if (this.state.isShow) {
      return <div>show</div>
    } else {
      return <div>hidden</div>
    }
  }

  render() {
    const isShow = this.state.isShow;
    // 方式3: 适用于多选一
    let show;
    if (isShow) {
      show = <div>show</div>
    } else {
      show = <div>hidden</div>
    }
    return (
      <div>
        {/* 方式1: 二选一 */}
        {
          isShow ?
            (<div> show</div>) : (<div> hidden</div>)
        }
        {/* 方式2: 一个组件有无 */}
        {isShow > 0 && <h2>show</h2>}
        <button onClick={() => this.handleClick()}>show/hidden</button>
        {show}
        {this.isShowCom()}
      </div>
    )
  }
}
