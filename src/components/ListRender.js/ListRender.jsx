import { Component } from "react";
import css from "./ListRender.css"

export default class ListRender extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: [
        { username: 'xu', age: 21, gender: 'male' },
        { username: 'Tongbao', age: 22, gender: 'male' },
        { username: 'Lily', age: 19, gender: 'female' },
        { username: 'Lucy', age: 20, gender: 'female' }
      ]
    }
  }

  renderList(user, index) {
    console.log(user);
    return (
      <div className={css.nav} key={index}>
        <div>
          <span>姓名:{user.username}</span>
        </div>
        <div>
          <span>年龄:{user.age}</span>
        </div>
        <div>
          <span>性别:{user.gender}</span>
        </div>
        <br />
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.user.map((user, i) => this.renderList(user, i))}
      </div>
    )
  }
}
