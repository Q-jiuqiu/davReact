import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading'
import { createHashHistory } from 'history'
import router from "./router"
import example from './models/example'
import test from './models/test'
// 1. Initialize  dva初始化,在这里可以设置全局state 全部error 还有包括router的事件 state的事件等等;都可以直接统一的在这边进行设置与管理;还有history这个参数是从react-router中来的,常用的history有三种形式，但是你也可以使用React Router'实现自定义的history.1.browserHistory;2.hashHistory;3.createMemoryHistory
// const app = dva({
//   history, // http://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html
//   initialstate,
//   onError,
//   onAction,
//   onStatechange,
//   onReducer,
//   onEffect,
//   onHmr,
//   extraReducers,
//   extraEnhancers
// });
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history: createHashHistory(),
  onError() { },
});

// 2. Plugins 这个是用来加载插件的,插件最终返回的是hooks
app.use(createLoading());

// 3. Model 这个是用来接收发送的action的
app.model(example);
app.model(test);

// 4. Router 进行所有页面的初始化路由设置  有两种路由设置写法
app.router(router);

// 5. Start
app.start('#root');
