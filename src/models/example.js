
export default {

  namespace: 'example',

  state: {
    test: "哈哈哈"
  },

  // 监听数据
  subscriptions: {
    // 以 key/value格式定义subscription。
    // subscription是订阅，用于订阅一个数据源，然后根据需要dispatch相应的action。在app.start()时被执行，数据源可以是当前的时间、服务器的websocket 连接、keyboard输入、geolocation变化、history路由变化等等。
    // 需要注意的是：action的名称（type）如果是在 model 以外调用需要添加 namespace。
    // 通过 dispatch 函数，可以通过 type 属性指定对应的 actions 类型，而这个类型名在 reducers（effects）会一一对应，从而知道该去调用哪一个 reducers（effects）。
    // 通常第一次的还没有数据的时候可以在组件的生命周期内部发起dispatch，或者监听路由（subscriptions）当时这个路由的时候发起dispatch 从而更新model
    setup({ dispatch, history }) {  // eslint-disable-line
      console.log(dispatch, history);
    },
  },

  // 接收数据
  effects: {
    // 以 key/value格式定义effect。
    // 用于处理异步操作和业务逻辑，不直接修改state。由 action触发，可以触发action ,可以和服务器交互，可以获取全局state的数据等等。
    // 格式为*(action，effects) => void或〔*(action，effects) => void, i type }]。
    // type类型有: 1.takeEvery 2.takeLates 3.tthrottle 4.watcher
    // put  用来发起一条action
    // call 以异步的方式调用函数
    // select 从state中获取相关的数据
    // take 获取发送的数据
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });// 调用当前reducers中的save方法
    },
  },

  // 处理数据
  reducers: {
    // 以 key/value格式定义reducer。
    // 用于处理同步操作，唯一可以修改state的地方。由action触发。格式为（state，action) => newState或[(state，action) => newState，enhancer]。
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
