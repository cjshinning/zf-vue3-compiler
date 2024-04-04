# 编译过程
- 先将模板进行分析，生成对应的ast树->对象描述语法
- 做转化流程 transform -> 对动态节点做一些标记 指令 事件 属性 ... patchFlag
- 代码生成 codegen -> 生成最终的代码

## Block的概念 -> Block Tree

- diff算法的特点是递归遍历，每次比较同一层，之前写的都是全量比对
- block的作用就是就是为了收集动态节点（它自己下面所有的）将树的递归拍平成了一个数组
- 在createVnode时候，会判断这个节点是动态的，就让外层的block收集起来
- 目的就是为了diff的时候只diff动态的节点

> 如果会影响结构的，都会被标记成block节点 v-if v-else
> 父亲也会手机儿子的节点 -> blockTree（多个节点组成的）

block -> div  父亲更新 会找到dynamicChildren -> 子的block和动态节点
  block(e-if key="0") <div>xxx</div>

block -> div
  block(e-else key="1") <div>xxx</div>

> 改变结构的也要封装到block中，我们希望的更新方式是拿以前的和现在的去对比，靶向更新，如果前后节点个数不一致，那只能全部递归

block -> div
    block -> v-for    不收集动态节点

> 两个儿子的全量比对

## patchFlage 对不同的动态节点进行描述

> 表示要比对哪些类型

## 性能优化
- 每次重新渲染，都要创建虚拟节点createVnode这个方法
- 静态提升 静态节点进行提取

## 事件缓存
- 缓存事件，防止重新创建事件

> jsx目的是为了灵活（没有优化），template是为了简单（模板编译优化）

## vue3和vue2对比
- 响应式原理 proxy -> defineProperty
- vue3 diff算法（可以根据patchFlag做对比） 和 vue2 的区别（全量对比） 最长递增子序列算法
- options API（功能拆分不便于代码封装）/ composition API（功能集中方便复用） -> tree shaking
- Fragment 多个根节点，可以支持、Teleport Suspense、keep-alive、transition
- vue3 ts -> vue2 flow
- 自定义渲染器 createRenderer() 传入自己渲染的方法，好处就是可以根据vue核心来实现不同平台的代码
- monorepo
- 模板编译的优化