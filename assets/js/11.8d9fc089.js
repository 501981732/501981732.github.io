(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{266:function(t,e,n){"use strict";n.r(e);var s=n(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[n("a",{attrs:{href:"https://aerotwist.com/blog/flip-your-animations/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FLIP"),n("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),n("p",[n("a",{attrs:{href:"https://codepen.io/501981732/pen/vbNzXz?editors=1111",target:"_blank",rel:"noopener noreferrer"}},[t._v("实现vue中的动画"),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"flip动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flip动画","aria-hidden":"true"}},[this._v("#")]),this._v(" FLIP动画")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Animations in your web app should run at 60fps. Not always easy to achieve that, and it really depends on what you're trying to do, but I'm here to help. With FLIP.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("FLIP stands for First, Last, Invert, Play.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("First: the initial state of the element(s) involved in the transition.")])]),this._v(" "),e("li",[e("p",[this._v("Last: the final state of the element(s).")])]),this._v(" "),e("li",[e("p",[this._v("Invert: here’s the fun bit. You figure out from the first and last how the element has changed, so – say – its width, height, opacity. Next you apply transforms and opacity changes to reverse, or invert, them. If the element has moved 90px down between First and Last, you would apply a transform of -90px in Y. This makes the elements appear as though they’re still in the First position but, crucially, they’re not.")])]),this._v(" "),e("li",[e("p",[this._v("Play: switch on transitions for any of the properties you changed, and then remove the inversion changes. Because the element or elements are in their final position removing the transforms and opacities will ease them from their faux First position, out to the Last position.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("// Get the first position.\nvar first = el.getBoundingClientRect();\n\n// Now set the element to the last position.\nel.classList.add('totes-at-the-end');\n\n// Read again. This forces a sync\n// layout, so be careful.\nvar last = el.getBoundingClientRect();\n\n// You can do this for other computed\n// styles as well, if needed. Just be\n// sure to stick to compositor-only\n// props like transform and opacity\n// where possible.\nvar invert = first.top - last.top;\n\n// Invert.\nel.style.transform =`translateY(${invert}px)`;\n\n// Wait for the next frame so we\n// know all the style changes have\n// taken hold.\nrequestAnimationFrame(function() {\n\n  // Switch on animations.\n  el.classList.add('animate-on-transforms');\n\n  // GO GO GOOOOOO!\n  el.style.transform = '';\n});\n\n// Capture the end with transitionend\nel.addEventListener('transitionend',\n    tidyUpAnimations);\n")])])])}],!1,null,null,null);i.options.__file="FLIP动画.md";e.default=i.exports}}]);