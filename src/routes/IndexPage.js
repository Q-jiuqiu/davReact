import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

// 组件的设计
// 1.容器组件：里面不含有状态 只有props
// 2.展示组件： 一般指的是具有监听数据行为的组件，一般来说它们的职责是绑定相关联的 model 数据，以数据容器的角色包含其它子组件

// 组件
function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

// 接收model中的数据
// 建立组件和数据的映射关系 注意state必传 返回的是需要绑定的model
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    ...state.example
  }
}

// 如果说ui里面需要用到model里面的数据的话 那么就可以直接用这个 将model里面的元素 当做props的方式 传递进来
// Connect 传递model中的数据给组件router 通过connect可以传递过来，然后通过this.props就可以访问了，同样也会把dispatch（可以发送请求到model去），history方法传递过来，这样就可以通过组件获取到model保存的值了
// 关联 model
export default connect(mapStateToProps)(IndexPage);
