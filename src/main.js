

// import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, normalizeProps as _normalizeProps, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

// export function render(_ctx, _cache, $props, $setup, $data, $options) {
//   return (_openBlock(), _createElementBlock(_Fragment, null, [
//     _createElementVNode("div", null, _toDisplayString(_ctx.name), 1 /* TEXT */),
//     _createElementVNode("p", null, [
//       _createTextVNode(_toDisplayString(_ctx.age), 1 /* TEXT */),
//       _createElementVNode("span", null, [
//         _createElementVNode("a", null, _toDisplayString(_ctx.age), 1 /* TEXT */)
//       ])
//     ]),
//     _createElementVNode("span", _normalizeProps({ [_ctx.a || ""]: 'xxx' }), null, 16 /* FULL_PROPS */)
//   ], 64 /* STABLE_FRAGMENT */))
// }

// import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode } from "vue"

// export function render(_ctx, _cache, $props, $setup, $data, $options) {
//   return (_openBlock(), _createElementBlock("div", null, [
//     (_ctx.flag)
//       ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
//         _createElementVNode("p", null, "hello world"),
//         _createElementVNode("div", null, _toDisplayString(_ctx.xxx), 1 /* TEXT */)
//       ], 64 /* STABLE_FRAGMENT */))
//       : (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [
//         _createElementVNode("div", null, _toDisplayString(_ctx.xxx), 1 /* TEXT */),
//         _createElementVNode("p", null, "hello world")
//       ], 64 /* STABLE_FRAGMENT */))
//   ]))
// }

import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString } from "vue"

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", null, [
    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.count, (item) => {
      return (_openBlock(), _createElementBlock("span", null, _toDisplayString(item), 1 /* TEXT */))
    }), 256 /* UNKEYED_FRAGMENT */))
  ]))
}


console.log(render({ count: 3 }))