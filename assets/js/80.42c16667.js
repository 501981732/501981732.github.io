(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{260:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("blockquote",[a("p",[s._v("一般我都是用2个git账号，一个个人的github,一个公司的gitlab，这就需要我们在本地创建多个公钥信息。")])]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("自定义第二个公钥")])])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('id_rsa_github \n> ssh-keygen -t rsa -C "xxx@xxx.com"\n')])])]),a("p",[s._v("不要一直回车，记得修改文件名称例如id_rsa_github\nssh_key就会保存到相对文件下，目录下会生成id_rsa_github，id_rsa_github.pub两个文件;")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[s._v("设置密码")])])]),s._v(" "),a("p",[s._v("这个密码在你提交代码到Github时会用到（最好和github代码一致）")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[s._v("将ssh-key添加到ssh-agent")])])]),s._v(" "),a("p",[s._v("ssh-key 添加到ssh agent ，因为默认只读 id_rsa，首先查看一下已经添加进去的 ssh-key,当出现下面 这种情况是说明 ssh agent 里面并没有把我们新生产的 ssh-key添加进去")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ssh-add -l\nThe agent has no identities.\n")])])]),a("p",[s._v("可以选择添加或全部添加到ssh-anent")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//全部添加\nssh-add  \n\n//指定添加（可以切换到.ssh下添加，也可以直接指定路径添加）\n.ssh ssh-add id_rsa_test_github                   \n\n")])])]),a("p",[s._v("这是再查看")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ssh-add -l\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[a("strong",[s._v("我们将 id_rsa_github.pub 中的内容粘帖到 github 的 SSH-key 的配置中")])])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("获取公钥\n ssh  cat id_rsa_github.pub\n")])])]),a("p",[s._v("复制粘贴到你的github的setting > SSH里面")]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("strong",[s._v("测试")])])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ssh -T git@github.com\nHi XXX! You've successfully authenticated, but GitHub does not provide shell access.\n")])])]),a("p",[s._v("搞定!")])])}],!1,null,null,null);n.options.__file="ssh-key.md";t.default=n.exports}}]);