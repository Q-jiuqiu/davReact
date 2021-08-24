// 创建组件方法1：函数式定义的无状态组件
// 为了创建纯展示组件，这种组件只负责根据传入的props来展示，不涉及到要state状态的操作。通过简单组合可以构建成其他的组件等；这种通过多个简单然后合并成一个大应用的设计模式被提倡。

import ReactDOM from "react-dom"


function HelloComponent(props) {
  console.log(props);
  return (
    <div id="hello">
      <h1>{props.name}11</h1>
    </div>
  )
}

ReactDOM.render(<HelloComponent name="名字" />, document.getElementById("root"))

export default HelloComponent

// 特点：
// 1.组件不会被实例化，整体渲染性能得到提升：因为组件被精简成一个render方法的函数来实现的，由于是无状态组件，所以无状态组件就不会在有组件实例化的过程，无实例化过程也就不需要分配多余的内存，从而性能得到一定的提升。
// 2.组件不能访问this对象：无状态组件由于没有实例化过程，所以无法访问组件this中的对象，例如：this.ref、this.state等均不能访问。若想访问就不能使用这种形式来创建组件
// 3.组件无法访问生命周期的方法：因为无状态组件是不需要组件生命周期管理和状态管理，所以底层实现这种形式的组件时是不会实现组件的生命周期方法。所以无状态组件是不能参与组件的各个生命周期管理的。
// 4.无状态组件只能访问输入的props，同样的props会得到同样的渲染结果，不会有副作用

// 为什么 react 的函数组件每次渲染执行两次?
// 这是 React的刻意为之，并发模式下在dev 时render-phase会执行两次。原因 Dan 在下面解释了This is not a bug. And you'll have the same behavior in Strict Mode too. We intentionally double-call render-phase lifecycles in development only (and function components using Hooks) to help people find issues caused by side effects in render. In our experience, them firing twice is enough for people to notice and fix such bugs.
// If component output is always a function of props and state (and not outer scope variables, like in your example), the double rendering in development should have no observable effect.
// 这不是一个bug。在严格模式下你也会有同样的行为。我们有意只在开发中双重调用渲染阶段生命周期（以及使用钩子的函数组件），以帮助人们发现渲染中的副作用引起的问题。根据我们的经验，它们发射两次就足以让人们注意到并修复这些bug。
// 如果组件输出始终是props和state的函数（而不是外部范围变量，如您的示例中所示），那么开发中的双重呈现应该没有明显的效果。
