import { Component } from "react";
import home from "./home.css"

import Fun1 from "../../components/componentsFun/Fun1"
import Fun3 from "../../components/componentsFun/Fun3"

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
        <Fun1 name="test" />
        <Fun3 name={this.state.name} />
        {/* <button onClick={this.handleShow}> 显示/隐藏 </button> */}
      </>
    )
  }
}
