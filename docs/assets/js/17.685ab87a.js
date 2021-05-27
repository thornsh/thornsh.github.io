(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{203:function(t,s,e){"use strict";e.r(s);var a=e(6),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"对象方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象方法"}},[t._v("#")]),t._v(" 对象方法")]),t._v(" "),e("h3",{attrs:{id:"禁止扩展-object-preventextensions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#禁止扩展-object-preventextensions"}},[t._v("#")]),t._v(" 禁止扩展 Object.preventExtensions()")]),t._v(" "),e("p",[t._v("如果想禁止一个对象添加新属性并且保留已有属性，可以使用 Object.preventExtensions()")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myObject "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nObject"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventExtensions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myObject"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyObject"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyObject"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h3",{attrs:{id:"密封-object-seal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#密封-object-seal"}},[t._v("#")]),t._v(" 密封 Object.seal()")]),t._v(" "),e("p",[t._v("这个方法本质上调用 Object.preventExtensions()并把所有现有的属性标记为"),e("strong",[t._v("configurable: false")])]),t._v(" "),e("p",[t._v("所以密封之后不能添加新属性，并且不能重新配置或者删除现有属性,但是可以修改属性的值")]),t._v(" "),e("h3",{attrs:{id:"冻结-object-freeze"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#冻结-object-freeze"}},[t._v("#")]),t._v(" 冻结 Object.freeze()")]),t._v(" "),e("p",[t._v("这个方法在密封的基础上把所有“数据访问”属性标记为"),e("strong",[t._v("writable: false")]),t._v("，使得无法修改值")]),t._v(" "),e("h3",{attrs:{id:"propertyisenumerable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#propertyisenumerable"}},[t._v("#")]),t._v(" propertyIsEnumerable()")]),t._v(" "),e("p",[t._v("检查给定的属性名是否直接存在于对象中，并且满足可枚举")]),t._v(" "),e("h2",{attrs:{id:"存在性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存在性"}},[t._v("#")]),t._v(" 存在性")]),t._v(" "),e("p",[t._v("如何区分一个对象的属性是定义成了 undefined 还是本身不存在返回 undefined？")]),t._v(" "),e("h3",{attrs:{id:"in-操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#in-操作符"}},[t._v("#")]),t._v(" in 操作符")]),t._v(" "),e("p",[t._v("in 操作符会检查属性是否存在对象以及其[[Prototype]]原型链中。")]),t._v(" "),e("h3",{attrs:{id:"hasownproperty"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hasownproperty"}},[t._v("#")]),t._v(" hasOwnProperty()")]),t._v(" "),e("p",[t._v("hasOwnProperty()则只会检查属性是否存在当前对象中，并不会检查原型链")]),t._v(" "),e("h3",{attrs:{id:"object-keys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-keys"}},[t._v("#")]),t._v(" Object.keys()")]),t._v(" "),e("p",[t._v("只会查找当前对象，返回可枚举的属性数组")]),t._v(" "),e("h3",{attrs:{id:"object-getownpropertynames"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-getownpropertynames"}},[t._v("#")]),t._v(" Object.getOwnPropertyNames()")]),t._v(" "),e("p",[t._v("只会查找当前对象，返回所有属性数组，不管是否可枚举")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v('因为 hasOwnProperty()是存在对象 prototype 上的方法，有些对象有可能没有连接到 Object.prototype,(比如通过 Object.create(null)来创建的对象)，这时候可以使用：Object.prototype.hasOwnProperty.call(myObject, "a")来判断是否有属性 a')])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("in 操作符判断的是属性名，4 in [1,2,3,4] 并不是 TRUE")])])])}),[],!1,null,null,null);s.default=r.exports}}]);