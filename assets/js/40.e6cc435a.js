(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{205:function(e,t,s){"use strict";s.r(t);var r=s(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("p",[e._v("todo:")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("ul",[e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),s("li",[s("p",[e._v("客户端防止 XSRF")]),e._v(" "),s("p",[e._v("工具："),s("a",{attrs:{href:"https://github.com/alexjoverm/typescript-library-starter",target:"_blank",rel:"noopener noreferrer"}},[e._v("typescript-library-starter"),s("OutboundLink")],1)])])]),e._v(" "),s("p",[e._v("集成了许多优秀的开源库：")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),s("p",[e._v("有时候我们希望取消已经发送的请求：比如输入框搜索，每次输入都要重新请求，通常的解决方案是前端做debounce节流，延时200ms发送请求，当用户连续输入时，当间隔小于200ms不会发送请求。")]),e._v(" "),s("p",[e._v("但是当极端情况，后端接口很慢，我超过200ms去输入，在前面的请求还没有响应前，可能已经发出多个请求了，接口的相应时长不定，先发的请求比后发出的请求先相应，就会导致混乱。")]),e._v(" "),s("p",[e._v("xhr中adortAPI可以取消请求"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/abort",target:"_blank",rel:"noopener noreferrer"}},[e._v("XMLHttpRequest.abort()"),s("OutboundLink")],1),e._v(",but 在axios中我们并不能接触到xhr,我们希望在XHR请求中插入一段代码，当我们在外面执行cancel的时候，能驱动这段代码执行，然后执行xhr.abort方法取消请求。")]),e._v(" "),e._m(18),e._v(" "),s("p",[e._v("axios.CancelToken是一个类，\n我们直接把它实例化的对象传给请求配置中的 cancelToken 属性，CancelToken 的构造函数参数支持传入一个 executor 方法，该方法的参数是一个取消函数 c，我们可以在 executor 方法执行的内部拿到这个取消函数 c，赋值给我们外部定义的 cancel 变量，之后我们可以通过调用这个 cancel 方法来取消请求。")]),e._v(" "),s("p",[e._v("#异步分离的")]),e._v(" "),e._m(19),s("p",[e._v("我们给 axios 添加一个 CancelToken 的对象，它有一个 source 方法可以返回一个 source 对象，source.token 是在每次请求的时候传给配置对象中的 cancelToken 属性，然后在请求发出去之后，我们可以通过 source.cancel 方法取消请求。")]),e._v(" "),e._m(20),e._v(" "),s("p",[e._v("我们需要为请求配置一个 cancelToken，然后在外部调用一个 cancel 方法。请求是一个异步过程，最终会执行xhr.send,我们在axios外面是碰不到axios自己封装的xhr的，我们希望在执行cancel的时候去执行 xhr.abort()方法,")]),e._v(" "),s("p",[e._v("相当于我们在xhr异步请求的时候插入一段代码，当我们在外部执行cancel的时候驱动这段代码执行从而取消请求。")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._m(24),e._v(" "),s("p",[e._v("在 CancelToken构造函数内部，实例化一个pending状态的Promise,然后用resolvePromise指向resolve函数,接着执行executor, 在cancel内部会调用resolvePromise，利用闭包，外面可以拿到executor的函数参数，调用该函数，使promise从pending变成resolved。")]),e._v(" "),e._m(25),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),s("img",{attrs:{src:"/img/xsrf.png"}}),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._m(38),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),e._m(42),s("p",[e._v("如果请求的数据是 FormData 类型，我们应该主动删除请求 headers 中的 Content-Type 字段，让浏览器自动根据请求数据设置 Content-Type。比如当我们通过 FormData 上传文件的时候，浏览器会把请求 headers 中的 Content-Type 设置为 multipart/form-data")]),e._v(" "),e._m(43),e._m(44),e._m(45),e._v(" "),s("p",[e._v("HTTP 协议中的 Authorization 请求 header 会包含服务器用于验证用户代理身份的凭证，通常会在服务器返回 401 Unauthorized 状态码以及 WWW-Authenticate 消息头之后在后续请求中发送此消息头。")]),e._v(" "),s("p",[e._v("axios 库也允许你在请求配置中配置 auth 属性，auth 是一个对象结构，包含 username 和 password 2 个属性。一旦用户在请求的时候配置这俩属性，我们就会自动往 HTTP 的 请求 header 中添加 Authorization 属性，它的值为 Basic 加密串。 这里的加密串是 username:password base64 加密后的结果。")]),e._v(" "),s("p",[e._v("useage")]),e._v(" "),e._m(46),s("p",[e._v("实现")]),e._v(" "),e._m(47),s("p",[e._v("server")]),e._v(" "),e._m(48),e._m(49),e._v(" "),s("p",[e._v("useage:")]),e._v(" "),e._m(50),s("p",[e._v("实现")]),e._v(" "),e._m(51),s("p",[e._v("如果没有配置 validateStatus 以及 validateStatus 函数返回的值为 true 的时候，都认为是合法的,正常 resolve(response)，否则都创建一个错误。")]),e._v(" "),e._m(52),e._v(" "),e._m(53),e._v(" "),s("p",[e._v("useage")]),e._v(" "),e._m(54),s("p",[e._v("实现")]),e._v(" "),e._m(55),e._m(56),e._v(" "),e._m(57),e._m(58),e._v(" "),e._m(59),e._v(" "),e._m(60),e._v(" "),s("p",[e._v("使用rollup打包，相对于webpack,更适合去编译和打包一些js库")]),e._v(" "),s("p",[e._v("rollup.config.ts")]),e._v(" "),e._m(61),e._m(62),e._v(" "),e._m(63),e._v(" "),e._m(64),e._v(" "),e._m(65),s("p",[e._v("其中 lib 目录是单个 .ts 文件编译后的 .js 文件。types 目录是所有 .ts 文件编译后生产的 .d.ts 声明文件。axios.es5.js 是编译后生成的 es 模式的入口文件，用在 package.json 的 module 字段，axios.umd.js 文件是编译后生成的 umd 模式的入口文件，用在 package.json 的 main 字段。")]),e._v(" "),e._m(66),e._v(" "),s("p",[e._v("semantic-release 插件过于黑盒也略微重量,我们自己编写自动化插件")]),e._v(" "),e._m(67),e._m(68),e._v(" "),s("p",[e._v("npm run test:prod 实际上运行了 npm run lint && npm run test -- --no-cache。 先运行 lint 去校验我们的源码和测试文件是否遵循 tslint 规范，再运行 test 去跑测试。")]),e._v(" "),s("p",[e._v("npm run build 实际上运行了 tsc --module commonjs、rollup -c rollup.config.ts 和 typedoc --out docs --target es6 --theme minimal --mode file src。先运行 tsc 去编译我们的 TypeScript 文件，dist/lib 和 dist/types 下的文件就是该命令产生的，然后运行 rollup 去构建 axios.umd.js 及 axios.es.js，最后运行 typedoc 去构建项目的文档。")]),e._v(" "),s("p",[e._v("运行完 prepub 后就会再运行 pub 命令，实际上执行了 sh release.sh 命令，但是目前我们没有这个脚本，接下来我们就需要来编写部署脚本 release.sh。")]),e._v(" "),e._m(69),e._v(" "),s("p",[e._v("release.sh")]),e._v(" "),e._m(70),e._m(71),e._v(" "),e._m(72),e._v(" "),e._m(73),e._v(" "),e._m(74),e._v(" "),e._m(75),e._v(" "),e._m(76),e._v(" "),e._m(77),e._v(" "),e._m(78),e._v(" "),e._m(79),e._v(" "),e._m(80),e._v(" "),e._m(81),e._v(" "),e._m(82),e._v(" "),e._m(83),e._v(" "),e._m(84),e._v(" "),e._m(85),e._v(" "),s("p",[e._v("/* istanbul ignore next */ 忽略某些代码分支的测试。")]),e._v(" "),s("p",[e._v("当我们执行 npm run pub时候，先执行test，再build,再执行release.sh自动部署。就完成了整个代码的发布流程")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("性能优化--性能优化易-如何判断性能出现的原因难")]),this._v(" "),t("li",[this._v("游戏组件库")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("掌握造轮子过程--- 单元测试 ----前端工具的辅助开发----   提成段位")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("ts开发项目")]),this._v(" "),t("li",[this._v("学会造轮子 单元测试")]),this._v(" "),t("li",[this._v("使用先进的开发工具")]),this._v(" "),t("li",[this._v("axios实现原理")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("jest")]),e._v(" "),s("li",[e._v("tslint")]),e._v(" "),s("li",[e._v("commitizen")]),e._v(" "),s("li",[e._v("prettier")]),e._v(" "),s("li",[e._v("rollupJs")]),e._v(" "),s("li",[e._v("semantic release 完全自动化版本管理和软件包发布")]),e._v(" "),s("li",[e._v("typescript")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"axios-实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#axios-实现","aria-hidden":"true"}},[this._v("#")]),this._v(" axios 实现")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("在浏览器端使用 XMLHttpRequest 对象通讯")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("支持 Promise API")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("支持请求和响应的拦截器")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("支持请求数据和响应数据的转换")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("支持请求的取消")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("JSON 数据的自动转换")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("使用 "),s("strong",[e._v("RollupJS")]),e._v(" 帮助我们打包。")]),e._v(" "),s("li",[e._v("使用 "),s("strong",[e._v("Prettier")]),e._v(" 和 "),s("strong",[e._v("TSLint")]),e._v(" 帮助我们格式化代码以及保证代码风格一致性。")]),e._v(" "),s("li",[e._v("使用 "),s("strong",[e._v("TypeDoc")]),e._v(" 帮助我们自动生成文档并部署到 "),s("strong",[e._v("GitHub pages")]),e._v("。")]),e._v(" "),s("li",[e._v("使用 "),s("strong",[e._v("Jest")]),e._v("帮助我们做单元测试。")]),e._v(" "),s("li",[e._v("使用 "),s("strong",[e._v("Commitizen")]),e._v("帮助我们生成规范化的提交注释。")]),e._v(" "),s("li",[e._v("使用 "),s("strong",[e._v("Semantic release")]),e._v("帮助我们管理版本和发布。\n使用 "),s("strong",[e._v("husk")]),e._v(" 帮助我们更简单地使用 git hooks。")]),e._v(" "),s("li",[e._v("使用 "),s("strong",[e._v("Conventional changelog")]),e._v("帮助我们通过代码提交信息自动生成 change log。")]),e._v(" "),s("li",[e._v("Automatic types (*.d.ts) file generation")]),e._v(" "),s("li",[e._v("Travis integration and Coveralls report")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"错误信息增强-扩展error类-axioserror-extends-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误信息增强-扩展error类-axioserror-extends-error","aria-hidden":"true"}},[this._v("#")]),this._v(" 错误信息增强 扩展Error类 AxiosError extends Error")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"ts-axios-接口扩展【工厂模式的合理运用，设计思想的转变】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ts-axios-接口扩展【工厂模式的合理运用，设计思想的转变】","aria-hidden":"true"}},[this._v("#")]),this._v(" ts-axios 接口扩展【工厂模式的合理运用，设计思想的转变】")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"ts-axios-拦截器实现【巧妙运用-promise-链式调用】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ts-axios-拦截器实现【巧妙运用-promise-链式调用】","aria-hidden":"true"}},[this._v("#")]),this._v(" ts-axios 拦截器实现【巧妙运用 Promise 链式调用】")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"ts-axios-配置化实现【巧妙运用策略模式实现配置合并】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ts-axios-配置化实现【巧妙运用策略模式实现配置合并】","aria-hidden":"true"}},[this._v("#")]),this._v(" ts-axios 配置化实现【巧妙运用策略模式实现配置合并】")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"ts-axios-取消功能实现【巧妙运用-promise-实现异步分离】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ts-axios-取消功能实现【巧妙运用-promise-实现异步分离】","aria-hidden":"true"}},[this._v("#")]),this._v(" ts-axios 取消功能实现【巧妙运用 Promise 实现异步分离】")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"需求分析："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需求分析：","aria-hidden":"true"}},[this._v("#")]),this._v(" 需求分析：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("调用方式一")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("const CancelToken = axios.CancelToken;\nlet cancel;\n\naxios.get('/user/12345', {\n  cancelToken: new CancelToken(function executor(c) {\n    cancel = c;\n  })\n});\n\n// 取消请求\ncancel();\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"异步分离的设计方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异步分离的设计方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 异步分离的设计方案")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"利用primise实现异步分离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用primise实现异步分离","aria-hidden":"true"}},[this._v("#")]),this._v(" 利用Primise实现异步分离")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("利用Primise实现异步分离")]),this._v("，在cancelToken中保存一个pending状态的Promise对象，当我们执行cancel的时候能访问到这个Promise，把它从pending状态变成reslove，这样我们就可以在 then 函数中去实现取消请求的逻辑。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("\n插入在 xhr.js中\n\n//当 请求传入了 cancelToken 实例，并且该实例内部的promise从pending变成reslove时 会执行\n//啥时候回变呢\nif (cancelToken) {\n  cancelToken.promise\n    .then(reason => {\n      request.abort()\n      reject(reason)\n    })\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"canceltoken类的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#canceltoken类的实现","aria-hidden":"true"}},[this._v("#")]),this._v(" CancelToken类的实现")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("export default class CancelToken {\n  promise: Promise<string>\n  reason?: string\n\n  constructor(executor: CancelExecutor) {\n    let resolvePromise: ResolvePromise\n    this.promise = new Promise<string>(resolve => {\n      resolvePromise = resolve\n    })\n    \x3c!--调用的时候 传入CancelToken类里面的c 就是这 里面的function ,执行会  --\x3e\n    executor(message => {\n      if (this.reason) {\n        return\n      }\n      this.reason = message\n      resolvePromise(this.reason)\n    })\n  }\n}\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"其他功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他功能","aria-hidden":"true"}},[this._v("#")]),this._v(" 其他功能")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"withcredentials"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#withcredentials","aria-hidden":"true"}},[this._v("#")]),this._v(" withCredentials")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("通过CORS解决的跨域问题，默认不会请求不会懈怠cookie的， 需要设置xhr的 WithCredentials为true")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"xsrf防御"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xsrf防御","aria-hidden":"true"}},[this._v("#")]),this._v(" XSRF防御")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("又叫  CSRF，跨站请求访问。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"防御手段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防御手段","aria-hidden":"true"}},[this._v("#")]),this._v(" 防御手段")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("验证请求的referer,但是referer也可以伪造")]),e._v(" "),s("li",[e._v("服务器端要求每次请求都包含一个"),s("code",[e._v("token")]),e._v(", "),s("code",[e._v("token")]),e._v("在我们每次访问站点的时候生成，并且"),s("code",[e._v("set-cookie")]),e._v("的方式种到客户端。 每次请求的时候从"),s("code",[e._v("cookie")]),e._v("中读取"),s("code",[e._v("token")]),e._v("，添加到"),s("code",[e._v("headers")]),e._v("中。 这样服务端从header中读取"),s("code",[e._v("token")]),e._v("并验证，这个"),s("code",[e._v("token")]),e._v("很难伪造，就能确保安全。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("axios.get('/more/get',{\n  xsrfCookieName: 'XSRF-TOKEN', // default\n  xsrfHeaderName: 'X-XSRF-TOKEN' // default\n}).then(res => {\n  console.log(res)\n})\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("判断是否配置withCredentials为true或者同域请求，再添加字段")]),this._v(" "),t("li",[this._v("判断成功从cookie中读取xsrf的token")]),this._v(" "),t("li",[this._v("读到在假如到headers的相关字段")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("判断是否同域小技巧")]),this._v("创建一个 a 标签的 DOM，然后设置 href 属性为我们传入的 url，然后可以获取该 DOM 的 protocol、host。当前页面的 url 和请求的 url 都通过这种方式获取。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("const urlParsingNode = document.createElement('a')\nconst currentOrigin = resolveURL(window.location.href)\n\nfunction resolveURL(url: string): URLOrigin {\n  urlParsingNode.setAttribute('href', url)\n  const { protocol, host } = urlParsingNode\n\n  return {\n    protocol,\n    host\n  }\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"上传与下载的进度监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传与下载的进度监控","aria-hidden":"true"}},[this._v("#")]),this._v(" 上传与下载的进度监控")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需求","aria-hidden":"true"}},[this._v("#")]),this._v(" 需求")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("我们想上传文件或者请求大体积数据的时候知道实时进度，做进度条。xhr提供了"),t("code",[this._v("progress")]),this._v("事件，监听下载进度， "),t("code",[this._v("xhr.upload")]),this._v("也提供"),t("code",[this._v("progress")]),this._v("对上传进度监控")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用方法")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("axios.get('/more/get',{\n  onDownloadProgress(progressEvent) {\n    // 监听下载进度\n  }\n})\n\naxios.post('/more/post',{\n  onUploadProgress(progressEvent) {\n    // 监听上传进度\n  }\n})\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("      if (onDownloadProgress) {\n        request.onprogress = onDownloadProgress\n      }\n\n      if (onUploadProgress) {\n        request.upload.onprogress = onUploadProgress\n      }\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("export function isFormData(val: any): boolean {\n  return typeof val !== 'undefined' && val instanceof FormData\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"auth授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auth授权","aria-hidden":"true"}},[this._v("#")]),this._v(" auth授权")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("axios.post('/more/post', {\n  a: 1\n}, {\n  auth: {\n    username: 'Yee',\n    password: '123456'\n  }\n}).then(res => {\n  console.log(res)\n})\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("if (auth) {\n  headers['Authorization'] = 'Basic ' + btoa(auth.username + ':' + auth.password)\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("router.post('/more/post', function(req, res) {\n  const auth = req.headers.authorization\n  const [type, credentials] = auth.split(' ')\n  console.log(atob(credentials))\n  const [username, password] = atob(credentials).split(':')\n  if (type === 'Basic' && username === 'Yee' && password === '123456') {\n    res.json(req.body)\n  } else {\n    res.end('UnAuthorization')\n  }\n})\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"自定义合法状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义合法状态码","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义合法状态码")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("axios.get('/more/304', {\n  validateStatus(status) {\n    return status >= 200 && status < 400\n  }\n}).then(res => {\n  console.log(res)\n}).catch((e: AxiosError) => {\n  console.log(e.message)\n})\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("function handleResponse(response: AxiosResponse): void {\n  if (!validateStatus || validateStatus(response.status)) {\n    resolve(response)\n  } else {\n    reject(\n      createError(\n        `Request failed with status code ${response.status}`,\n        config,\n        null,\n        request,\n        response\n      )\n    )\n  }\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"自定义参数序列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义参数序列","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义参数序列")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("axios默认会对我们传入的params对象解析，根据一定规则把它解析成字符串拼接在url后面。默认对字符串encode，对一些特殊字符"),t("code",[this._v("@ +")]),this._v("不转义,我们也可以自己配置解析规则，接受params返回值作为解析后的结果。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("axios.get('/more/get', {\n  params: {\n    a: 1,\n    b: 2,\n    c: ['a', 'b', 'c']\n  },\n  paramsSerializer(params) {\n    return qs.stringify(params, { arrayFormat: 'brackets' })\n  }\n}).then(res => {\n  console.log(res)\n})\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("url.ts\n\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params)\n  } else if (isURLSearchParams(params)) {\n    serializedParams = params.toString()\n  } else {\n    ...\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"baseurl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#baseurl","aria-hidden":"true"}},[this._v("#")]),this._v(" baseURL")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("url.js\nexport function isAbsoluteURL(url: string): boolean {\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url)\n}\n\nexport function combineURL(baseURL: string, relativeURL?: string): string {\n  return relativeURL ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '') : baseURL\n}\ndispatchRequest.ts调用\nfunction transformURL(config: AxiosRequestConfig): string {\n  let { url, params, paramsSerializer, baseURL } = config\n  if (baseURL && !isAbsoluteURL(url!)) {\n    url = combineURL(baseURL, url)\n  }\n  return buildURL(url!, params, paramsSerializer)\n}\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"单元测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单元测试","aria-hidden":"true"}},[this._v("#")]),this._v(" 单元测试")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"部署-编译与发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署-编译与发布","aria-hidden":"true"}},[this._v("#")]),this._v(" 部署 编译与发布")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"编译打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译打包","aria-hidden":"true"}},[this._v("#")]),this._v(" 编译打包")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("\nimport resolve from 'rollup-plugin-node-resolve'\nimport commonjs from 'rollup-plugin-commonjs'\nimport sourceMaps from 'rollup-plugin-sourcemaps'\nimport camelCase from 'lodash.camelcase'\nimport typescript from 'rollup-plugin-typescript2'\nimport json from 'rollup-plugin-json'\n\nconst pkg = require('./package.json')\n\nconst libraryName = 'axios'\n\nexport default {\n  input: `src/index.ts`,\n  output: [\n    { file: pkg.main, name: camelCase(libraryName), format: 'umd', sourcemap: true },\n    { file: pkg.module, format: 'es', sourcemap: true }\n  ],\n  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')\n  external: [],\n  watch: {\n    include: 'src/**'\n  },\n  plugins: [\n    // Allow json resolution\n    json(),\n    // Compile TypeScript files\n    typescript({ useTsconfigDeclarationDir: true }),\n    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)\n    commonjs(),\n    // Allow node_modules resolution, so you can use 'external' to control\n    // which external modules to include in the bundle\n    // https://github.com/rollup/rollup-plugin-node-resolve#usage\n    resolve(),\n\n    // Resolve source maps to the original source\n    sourceMaps()\n  ]\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"rollup简单讲解："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rollup简单讲解：","aria-hidden":"true"}},[this._v("#")]),this._v(" rollup简单讲解：")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("input: 打包入口文件")]),e._v(" "),s("li",[e._v("output：输出的目标文件，是个对象数组，我们可以指定输出格式，umd（通用模块规范，兼容AMD commonjs），es模式等")]),e._v(" "),s("li",[e._v("external: 外部声明 不被打包进入")]),e._v(" "),s("li",[e._v("watch: 监听文件变化重新编译，只有在编译的时候开启--watch才生效。")]),e._v(" "),s("li",[e._v("plugins: 编译用到的插件 。rollup-plugin-typescript2 就是用来编译 TypeScript 文件，useTsconfigDeclarationDir 表示使用 tsconfig.json 文件中定义的 declarationDir")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"修改package-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改package-json","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改package.json")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{\n  "main": "dist/axios.umd.js",\n  "module": "dist/axios.es5.js",\n  "typings": "dist/types/index.d.ts"\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"自动化部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署","aria-hidden":"true"}},[this._v("#")]),this._v(" 自动化部署")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('  "scripts": {\n    ...\n  "prepub": "npm run test:prod && npm run build",\n  "pub": "sh release.sh"\n  },\n  "repository": {//关联远程参考地址\n    "type": "git",\n    "url": "git+https://github.com/Suremotoo/ts-axios-doc.git"\n  },\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("prepub")]),this._v("钩子在执行"),t("code",[this._v("npm run pub")]),this._v("的时候优先执行，"),t("code",[this._v("&&")]),this._v("便是前面命令执行完再执行后面的。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"编写部署脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写部署脚本","aria-hidden":"true"}},[this._v("#")]),this._v(" 编写部署脚本")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('#!/usr/bin/env sh\nset -e\necho "Enter release version: "\nread VERSION\nread -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r\necho  # (optional) move to a new line\nif [[ $REPLY =~ ^[Yy]$ ]]\nthen\n  echo "Releasing $VERSION ..."\n\n  # commit\n  git add -A\n  git commit -m "[build] $VERSION"\n  npm version $VERSION --message "[release] $VERSION"\n  git push origin master\n\n  # publish\n  npm publish\nfi\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("解读")]),this._v("部署脚本是 shell 脚本，shell 脚本就是封装了多行控制台命令")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("#!/usr/bin/env sh")]),this._v(" 用来表示它是一个 shell 脚本。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("set -e")]),this._v(" 告诉脚本如果执行结果不为 true 则退出。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v('echo "Enter release version: "')]),this._v(" 在控制台输出 Enter release version:。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("read VERSION")]),this._v(" 表示从标准输入读取值，并赋值给 $VERSION 变量。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v('read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r')]),this._v("，其中 read -p 表示给出提示符，后面接着 Releasing $VERSION - are you sure? (y/n) 提示符；-n 1 表示限定最多可以有 1 个字符可以作为有效读入；-r 表示禁止反斜线的转义功能。因为我们的 read 并没有指定变量名，那么默认这个输入读取值会赋值给 $REPLY 变量。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("echo")]),this._v(" 输出空值表示跳到一个新行，"),t("code",[this._v("#")]),this._v(" 在 shell 脚本中表示注释。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("if [[ $REPLY =~ ^[Yy]$ ]]")]),this._v(" 表示 shell 脚本中的流程控制语句，判断 $REPLY 是不是大小写的 y，如果满足，则走到后面的 then 逻辑。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v('echo "Releasing $VERSION ..."')]),this._v(" 在控制台输出 Releasing $VERSION ...。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("git add -A")]),this._v(" 表示把代码所有变化提交到暂存区。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v('git commit -m "[build] $VERSION"')]),this._v(" 表示提交代码，提交注释是 [build] $VERSION。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v('npm version $VERSION --message "[release] $VERSION"')]),this._v(" 是修改 package.json 中的 version 字段到 $VERSION，并且提交一条修改记录，提交注释是 [release] $VERSION。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("git push origin master")]),this._v(" 是把代码发布到主干分支。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("npm publish")]),this._v(' 是把仓库发布到 npm 上，我们会把 dist 目录下的代码都发布到 npm 上，因为我们在 package.json 中配置的是 files 是 ["dist"]。\n'),t("code",[this._v("fi")]),this._v("if 结束")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"运行部署脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行部署脚本","aria-hidden":"true"}},[this._v("#")]),this._v(" 运行部署脚本")])}],!1,null,null,null);n.options.__file="从0用ts重构axios.md";t.default=n.exports}}]);