!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/assets/js",n(n.s=1)}([function(t,e,n){"use strict";n.r(e);var o={now:function(){return window.performance&&window.performance.now?this.now=function(){return window.performance.now()}:this.now=function(){return+new Date},this.now()},cubicProgress:function(t){return t=(t=t<0?0:t)>1?1:t,(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},debounce:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var r=this,u=arguments,c=function(){e=null,!o&&t.apply(r,u)},a=o&&!e;clearTimeout(e),e=setTimeout(c,n),a&&t.apply(r,u)}},throttle:function(t){var e,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=!1;function u(){r?(e=arguments,n=this):(t.apply(this,arguments),r=!0,setTimeout((function(){r=!1,e&&(u.apply(n,e),e=n=null)}),o))}return u},formatNumber:function(t){for(var e="",n=(t=t.toString()).length-1,o=0;n>=0;n--,o++)3===o?(o=0,e=t.substr(n,1)+" "+e):e=t.substr(n,1)+e;return e},parseNumberFromString:function(t){return parseFloat(t.replace(/\s/g,""))},declOfNum:function(t,e){return e[t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]}};e.default=o},function(t,e,n){t.exports=n(2)},function(t,e,n){(function(t){function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}var r=o((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.utils=n(0).default,this.basket=n(4).default,this.helpers={},this.modules={},document.addEventListener("DOMContentLoaded",(function(){document.documentElement.classList.remove("_loading")}))}));t.ProjectApp=new r,t.ProjectApp.basket.init()}).call(this,n(3))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var o=n(0),r={init:function(){var t=this;this.countBasketItems(),this.calcSubtotalAmount(),this.calcTotalAmount();var e=document.querySelectorAll(".basket__item-remove"),n=function(e){e.target.closest(".basket__item").remove(),t.countBasketItems(),t.calcSubtotalAmount(),t.calcTotalAmount()};e.forEach((function(t){t.addEventListener("click",n)}));var o=document.querySelectorAll(".quantity__plus"),r=document.querySelectorAll(".quantity__minus"),u=function(e){var n=e.target.closest("button"),o=n.closest(".basket__item"),r=o.querySelector(".quantity__number"),u=o.querySelector(".basket__item-amount"),c=o.querySelector(".basket__item-price").dataset.price,a=r.textContent;n.matches(".quantity__plus")?a++:n.matches(".quantity__minus")&&a>1&&a--,r.textContent=a,u.textContent=a*c,t.calcSubtotalAmount(),t.calcTotalAmount()},c=function(t){t.addEventListener("click",u)};o.forEach((function(t){c(t)})),r.forEach((function(t){c(t)}))},countBasketItems:function(){var t=document.querySelectorAll(".basket__item"),e=document.querySelector(".header__cart-counter"),n=t.length;n<1?e.classList.add("hidden"):e.textContent=n},calcSubtotalAmount:function(){var t=document.querySelectorAll(".basket__item"),e=document.querySelector(".amount__subtotal"),n=document.querySelector(".amount__tax"),r=document.querySelector(".amount__shipping"),u=0;t.forEach((function(t){var e=t.querySelector(".quantity__number").textContent,n=t.querySelector(".basket__item-price").dataset.price;u+=e*n})),e.textContent=o.default.formatNumber(u),0===u&&(n.textContent=0,r.textContent=0)},calcTotalAmount:function(){var t=o.default.parseNumberFromString(document.querySelector(".amount__subtotal").textContent),e=o.default.parseNumberFromString(document.querySelector(".amount__tax").textContent),n=o.default.parseNumberFromString(document.querySelector(".amount__shipping").textContent);document.querySelector(".amount__total-number").textContent=o.default.formatNumber(t+e+n)}};e.default=r}]);