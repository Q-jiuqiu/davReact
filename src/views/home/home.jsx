import { Component } from "react";
import home from "./home.css"

// import Fun1 from "../../components/componentsFun/Fun1"
// import Fun3 from "../../components/componentsFun/Fun3"

// 条件渲染
// import ConditionalRender from "../../components/ConditionalRender/ConditionalRender"
// 列表渲染
import ListRender from "../../components/ListRender.js/ListRender"

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShow: true,
      name: { test: 1 }
    }

    this.handleShow = this.handleShow.bind(this)
  }
  handleShow() {
    console.log(this.state.isShow);
  }

  render() {
    return (
      <>
        <div className={home.round}></div>
        {/* <Fun1 name="test" />
        <Fun3 name={this.state.name} /> */}

        {/* <ConditionalRender /> */}
        <ListRender />

        {/* <button onClick={this.handleShow}> 显示/隐藏 </button> */}
      </>
    )
  }
}
