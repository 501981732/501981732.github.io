(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{242:function(e,t,n){"use strict";n.r(t);var s=n(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._m(9),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._m(15),e._v(" "),e._m(16),n("p",[n("a",{attrs:{href:"https://www.npmjs.com/package/style-resources-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("style-resources-loader"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("总之更细分功能，常用的功能变量等 可以通过 style-resources-loader导入，不能用功能可单独拿出来，作为按需引入\n最终css文件结构")]),e._v(" "),e._m(17),n("p",[e._v("最红打包结果 69.9K")]),e._v(" "),n("p",[e._v("easy-vue")]),e._v(" "),e._m(18),e._v(" "),n("p",[e._v("20  uc触发图片查看器")]),e._v(" "),n("p",[e._v("21 组件封装")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_2019春运项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2019春运项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 2019春运项目")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("1-6 周日 刚刚开发完，打包发现我去....app.css 400k左右 经过进2个小时优化 到78.4K")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"开启优化之类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启优化之类","aria-hidden":"true"}},[this._v("#")]),this._v(" 开启优化之类")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"惰性载入-：函数执行的分支只会执行一次"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#惰性载入-：函数执行的分支只会执行一次","aria-hidden":"true"}},[this._v("#")]),this._v(" 惰性载入 ：函数执行的分支只会执行一次")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("- 方式一： 函数第一次调用的时候处理，函数会被另外一个函数所覆盖重写\n- 方式二： 函数第一次加载的时候就返回一个新的函数，仅在加载的时候耗费一点性能\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("函数重载 惰性载入 （和本文css优化无关）\n"),t("ul",[t("li",[this._v("就是某函数会根据某些环境下会执行多次判断，")]),this._v(" "),t("li",[this._v("函数的分支智慧之星一次 可以在第一次运行的时候 根据外界环境返回一个新的函数，当下次再次执行的时候就不再判断")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('/**\n * 跳转页面 app里调用jssdk跳转 h5 http跳转\n * 可优化 第一次运行就直接返回相关平台的方法 惰性载入\n * @Author   wangmeng\n * @DateTime 2018-12-28\n * @param    {string}   options.title [description]\n * @param    {string}   options.url   [description]\n * @param    {Object}   options.opts  [description]\n * @return   {}\n */\n// const goPage = ({ title = "", url = "" }) => {\n//     if (isInAPP()) {\n//         WBAPP.invoke("pagetrans", {\n//             action: "pagetrans",\n//             tradeline: "core",\n//             content: {\n//                 pagetype: "common",\n//                 url: url,\n//                 title: title\n//             }\n//         });\n//     } else {\n//         window.location.href = url;\n//     }\n// };\n\nconst goPage = (() => {\n    if (isInAPP()) {\n        return () => {\n            WBAPP.invoke("pagetrans", {\n                action: "pagetrans",\n                tradeline: "core",\n                content: {\n                    pagetype: "common",\n                    url: url,\n                    title: title\n                }\n            });\n        }\n    } else {\n        return () => window.location.href = url;\n    }\n})({ title:\'\', url:\'\' });\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("vw优化 (294---\x3e219  74.48%)\n"),t("ul",[t("li",[this._v("当初大漠vw中用的postcss-viewport-units")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('      // "postcss-viewport-units":{},  //给CSS的属性添加content的属性，配合viewport-units-buggyfill库给vw、vh、vmin和vmax做适配的操作。\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("- 这个东西会在很多css中的content中加入一坨东西，会让css变得很大\n- 而且content也会引起一定的副作用。比如img和伪元素::before(:before)或::after（:after）。在img中content会引起部分浏览器下，图片不会显示。这个时候需要全局添加\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("img { content: normal !important; } fix\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"3"}},[t("li",[t("p",[this._v("项目图片很多，之前是把超过10000的 base64 现在改为6 *1024")])]),this._v(" "),t("li",[t("p",[this._v("优化less css 结构 全局引入less变量 mixins等 （192--\x3e 78.4）")]),this._v(" "),t("ul",[t("li",[this._v("之前css分为： reset.css animation.less common.less base.less")]),this._v(" "),t("li",[this._v("animation.less放入所有的项目动画因为动画做后处理操作 导致编译后的文件很大，我在animation.less中又写入了mixins等 每次需要的时候都会引入，导致文件很大")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v(".c-zoom-time(@time: 4s,@type: ease-in-out, @delay:0s) {\n    animation: zoomIn2 @time @type @delay infinite;\n}\n@keyframes zoomIn2 {\n  from {\n    transform: scale(.95);\n  }\n\n  50% {\n    transform: scale(1.05);\n  }\n\n  100% {\n    transform: scale(.95);\n  }\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("- common文件中也有一些mixins 单独抽出来\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v(".linear-gradient(@deg: -180deg, @start: #4771ec,@startPos: 0%,@minddle: #4768ea, @middlePos: 20%, @end: #2731cd, @endPos: 100%) {\n    filter: progid:DXImageTransform.Microsoft.Gradient(gradientType=0, startColorStr=@start, endColorStr=@end);\n    background: linear-gradient(\n        @deg,\n        @start @startPos,\n        @minddle @middlePos,\n        @end @endPos\n    );\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("- 全局引入的 less 变量 mixins 函数等不会在单独模块起作用 好东西推荐 *style-resources-loader*\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("module.exports = {\n    // ...\n    module: {\n        rules: [{\n            test: /\\.less$/,\n            use: ['style-loader', 'css-loader', 'less-loader', {\n                loader: 'style-resources-loader',\n                options: {\n                    patterns: path.resolve(__dirname, 'path/to/less/variables/*.less'),\n                    injector: 'append'\n                }\n            }]\n        }]\n    },\n    // ...\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("vars.less\nmixins.less\ncommon.less\nanimation.css  index中import\nreset.css      index中import引入\n")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",[n("li",[n("p",[e._v("dns-prefetch")])]),e._v(" "),n("li",[n("p",[e._v("preconnect")])]),e._v(" "),n("li",[n("p",[e._v("preload")])]),e._v(" "),n("li",[n("p",[e._v("prefetch")])]),e._v(" "),n("li",[n("p",[e._v("skeleton")])]),e._v(" "),n("li",[n("p",[e._v("vw布局")])]),e._v(" "),n("li",[n("p",[e._v("reset.css")])]),e._v(" "),n("li",[n("p",[e._v("dll")])]),e._v(" "),n("li",[n("p",[e._v("z-index坑 cssnano的z-index会重新计算页面的z-index的值导致导入的组件z-index会出问题")])]),e._v(" "),n("li",[n("p",[e._v("router hooks")])]),e._v(" "),n("li",[n("p",[e._v("one-px-button")])]),e._v(" "),n("li",[n("p",[e._v("直调")]),e._v(" "),n("ul",[n("li",[e._v("涉及内网资料 已删除")])])]),e._v(" "),n("li",[n("p",[e._v("调起唤起&下载 中间页")]),e._v(" "),n("ul",[n("li",[e._v("中间页逻辑平台尚未升级 在中间页统一修改逻辑走直调的防止callWbApp")]),e._v(" "),n("li",[e._v("由于 调起中间页传入参数的url中的参数,只能一个参数，需要自己拼接")])])]),e._v(" "),n("li",[n("p",[e._v("微信分享回调现在拿不到确定状态")])]),e._v(" "),n("li",[n("p",[e._v("app分享&微信分享")])]),e._v(" "),n("li",[n("p",[e._v("APP跳转 触发toast 暂不支持下载")])]),e._v(" "),n("li",[n("p",[e._v("复制API")]),e._v(" "),n("ul",[n("li",[e._v("navigator.clipboard")]),e._v(" "),n("li",[e._v("input + execCommand")]),e._v(" "),n("li",[e._v("copy event")])])]),e._v(" "),n("li",[n("p",[e._v("下拉加载")])]),e._v(" "),n("li",[n("p",[e._v("WMDA & app埋点 M埋点")])]),e._v(" "),n("li",[n("p",[e._v("beforeDestroy")])]),e._v(" "),n("li",[n("p",[e._v("埋点&商业计费透传精准计费 &优选计费")]),e._v(" "),n("ul",[n("li",[e._v("商业计费slot")]),e._v(" "),n("li",[e._v("tjfrom infoID")]),e._v(" "),n("li",[e._v("Android && IOS && M")])])])])}],!1,null,null,null);r.options.__file="1-6春运优化.md";t.default=r.exports}}]);