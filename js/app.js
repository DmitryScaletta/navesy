!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="js/",e(e.s=6)}([function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),o=n.n(r),i=n(2),s=n.n(i),a=n(5);!function(){var t=document.querySelector(".js-popup");if(null!==t){var e=function(){return t.classList.toggle("js-popup-visible")};window.addEventListener("click",function(n){n.target===t&&e()}),Array.prototype.forEach.call(document.querySelectorAll(".js-popup-toggle"),function(t){return t.addEventListener("click",function(t){e(),t.preventDefault()})})}}(),function(){var t=[document.querySelector(".slider-reviews"),document.querySelector(".mobile-slider-reviews")],e=function(t,e){Array.prototype.forEach.call(t,function(t){return t.classList.remove("active")}),t[e].classList.add("active")};t.forEach(function(t){if(null!==t){var n=t.querySelectorAll(".js-slider-dots span"),r=new o.a(t,{draggable:!0,callback:function(t){return e(n,t)}});Array.prototype.forEach.call(n,function(t,o){return t.addEventListener("click",function(){e(n,o),r.slide(o)})})}})}(),function(){var t=document.querySelector(".slider-portfolio");if(null!==t){var e=t.querySelectorAll(".js-slide"),n=t.querySelectorAll(".js-dot"),r=e.length,o=0,i=function(){return 0===o?r-1:o-1},s=function(){return o===r-1?0:o+1},a=function(t){return e[t].classList.toggle("prev")},u=function(t){return e[t].classList.toggle("next")},c=function(t){return e[t].classList.toggle("active")},f=function(t){return n[t].classList.toggle("active")},l=function(){a(i()),u(s()),c(o),f(o)},d=function(t){l(),o=t,l()},p=function(){return d(i())},h=function(){return d(s())};t.querySelector(".js-prev").addEventListener("click",p),t.querySelector(".js-next").addEventListener("click",h),Array.prototype.forEach.call(n,function(t,e){return t.addEventListener("click",function(){return d(e)})})}}(),function(){[document.querySelector(".mobile-slider-portfolio"),document.querySelector(".mobile-canopies-slider")].forEach(function(t){if(null!==t){var e=new o.a(t,{draggable:!0}),n=t.querySelector(".js-prev"),r=t.querySelector(".js-next");null!==n&&null!==r&&(n.addEventListener("click",function(){return e.prev()}),r.addEventListener("click",function(){return e.next()}))}})}(),function(){var t=new s.a;Array.prototype.forEach.call(document.querySelectorAll(".js-move-to"),function(e){return t.registerTrigger(e)})}(),function(){Array.prototype.forEach.call(document.querySelectorAll(".js-order-form"),function(t){var e=[t.querySelector("input[name=name]"),t.querySelector("input[name=phone]")],n=e.map(function(t){return new a.a(t,{title:"Это обязательное поле",trigger:""})});e.forEach(function(t,e){t.addEventListener("focus",function(){t.classList.contains("invalid")&&t.classList.remove("invalid"),n[e].hide()})});var r=function(t){return""!==t.trim()};t.addEventListener("submit",function(t){e.every(function(t,e){var o=r(t.value);return o||(t.classList.add("invalid"),n[e].show()),o})||t.preventDefault()})})}(),function(){var t=document.querySelector(".js-show-more"),e=document.querySelector(".js-canopy-types");if(null!==t&&null!==e){var n=e.querySelectorAll(".image-card");if(0!==n.length){var r=function(t){return Array.prototype.forEach.call(n,function(e,n){n>5&&e.setAttribute("aria-hidden",!t)})};r(!1);t.addEventListener("click",function(n){var o="true"===e.getAttribute("data-expanded");e.setAttribute("data-expanded",!o),t.textContent=o?"Посмотреть ещё":"Скрыть",r(!o),n.preventDefault()})}}}(),function(){var t=document.querySelector(".js-floating-button");if(null!==t){var e=function(){var e=window.pageYOffset<250;t.setAttribute("aria-hidden",e)};window.addEventListener("load",e),window.addEventListener("scroll",e)}}()},function(t,e,n){"use strict";/*!
 * MoveTo - A lightweight scroll animation javascript library without any dependency.
 * Version 1.6.1 (12-04-2017 10:18)
 * Licensed under MIT
 * Copyright 2017 Hasan Aydoğdu <hsnaydd@gmail.com>
 */
var r=function(){function t(t,e,n,r){return t/=r,t--,-n*(t*t*t*t-1)+e}function e(t){for(var e=0,n=0;t;)e+=t.offsetTop,n+=t.offsetLeft,t=t.offsetParent;return{top:e,left:n}}function n(t,e){var n={};return Object.keys(t).forEach(function(e){n[e]=t[e]}),Object.keys(e).forEach(function(t){n[t]=e[t]}),n}function r(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.options=n(s,e),this.easeFunctions=n({easeOutQuart:t},r)}function i(t,e){var n={};return Object.keys(e).forEach(function(e){var o=t.getAttribute("data-mt-"+r(e));o&&(n[e]=isNaN(o)?o:parseInt(o,10))}),n}var s={tolerance:0,duration:800,easing:"easeOutQuart",callback:function(){}};return o.prototype.registerTrigger=function(t,e){var r=this;if(t){var o=t.getAttribute("href")||t.getAttribute("data-target"),s=o&&"#"!==o?document.getElementById(o.substring(1)):0,a=n(this.options,i(t,this.options));"function"==typeof e&&(a.callback=e);var u=function(t){t.preventDefault(),r.move(s,a)};return t.addEventListener("click",u,!1),function(){return t.removeEventListener("click",u,!1)}}},o.prototype.move=function(t){var r=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(0===t||t){o=n(this.options,o);var i="number"==typeof t?t:e(t).top,s=window.pageYOffset;i-=o.tolerance;var a=i-s,u=null,c=void 0,f=function e(n){var f=window.pageYOffset;u||(u=n-1);var l=n-u;if(c&&(a>0&&c>f||a<0&&c<f))return o.callback(t);c=f;var d=r.easeFunctions[o.easing](l,s,a,o.duration);window.scroll(0,d),l<o.duration?window.requestAnimationFrame(e):(window.scroll(0,i),o.callback(t))};window.requestAnimationFrame(f)}},o.prototype.addEaseFunction=function(t,e){this.easeFunctions[t]=e},o}();t.exports=r},function(t,e,n){"use strict";(function(t){function n(t){var e=!1,n=0,r=document.createElement("span");return new MutationObserver(function(){t(),e=!1}).observe(r,{attributes:!0}),function(){e||(e=!0,r.setAttribute("x-index",n),n+=1)}}function r(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},ct))}}function o(t){var e={};return t&&"[object Function]"===e.toString.call(t)}function i(t,e){if(1!==t.nodeType)return[];var n=window.getComputedStyle(t,null);return e?n[e]:n}function s(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function a(t){if(!t||-1!==["HTML","BODY","#document"].indexOf(t.nodeName))return window.document.body;var e=i(t),n=e.overflow,r=e.overflowX;return/(auto|scroll)/.test(n+e.overflowY+r)?t:a(s(t))}function u(t){var e=t.nodeName;return"BODY"!==e&&("HTML"===e||t.firstElementChild.offsetParent===t)}function c(t){return null!==t.parentNode?c(t.parentNode):t}function f(t){var e=t&&t.offsetParent,n=e&&e.nodeName;return n&&"BODY"!==n&&"HTML"!==n?e:window.document.documentElement}function l(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return window.document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?t:e,o=n?e:t,i=document.createRange();i.setStart(r,0),i.setEnd(o,0);var s=i.commonAncestorContainer;if(t!==s&&e!==s||r.contains(o))return u(s)?s:f(s);var a=c(t);return a.host?l(a.host,e):l(t,c(e).host)}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===e?"scrollTop":"scrollLeft",r=t.nodeName;if("BODY"===r||"HTML"===r){var o=window.document.documentElement;return(window.document.scrollingElement||o)[n]}return t[n]}function p(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=d(e,"top"),o=d(e,"left"),i=n?-1:1;return t.top+=r*i,t.bottom+=r*i,t.left+=o*i,t.right+=o*i,t}function h(t,e){var n="x"===e?"Left":"Top",r="Left"===n?"Right":"Bottom";return+t["border"+n+"Width"].split("px")[0]+ +t["border"+r+"Width"].split("px")[0]}function v(t,e,n,r){return Math.max(e["offset"+t],n["client"+t],n["offset"+t],ht()?n["offset"+t]+r["margin"+("Height"===t?"Top":"Left")]+r["margin"+("Height"===t?"Bottom":"Right")]:0)}function m(){var t=window.document.body,e=window.document.documentElement,n=ht()&&window.getComputedStyle(e);return{height:v("Height",t,e,n),width:v("Width",t,e,n)}}function g(t){return bt({},t,{right:t.left+t.width,bottom:t.top+t.height})}function b(t){var e={};if(ht())try{e=t.getBoundingClientRect();var n=d(t,"top"),r=d(t,"left");e.top+=n,e.left+=r,e.bottom+=n,e.right+=r}catch(t){}else e=t.getBoundingClientRect();var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},s="HTML"===t.nodeName?m():{},a=s.width||t.clientWidth||o.right-o.left,u=s.height||t.clientHeight||o.bottom-o.top,c=t.offsetWidth-a,f=t.offsetHeight-u;if(c||f){var l=i(t);c-=h(l,"x"),f-=h(l,"y"),o.width-=c,o.height-=f}return g(o)}function w(t,e){var n=ht(),r="HTML"===e.nodeName,o=b(t),s=b(e),u=a(t),c=i(e),f=+c.borderTopWidth.split("px")[0],l=+c.borderLeftWidth.split("px")[0],d=g({top:o.top-s.top-f,left:o.left-s.left-l,width:o.width,height:o.height});if(d.marginTop=0,d.marginLeft=0,!n&&r){var h=+c.marginTop.split("px")[0],v=+c.marginLeft.split("px")[0];d.top-=f-h,d.bottom-=f-h,d.left-=l-v,d.right-=l-v,d.marginTop=h,d.marginLeft=v}return(n?e.contains(u):e===u&&"BODY"!==u.nodeName)&&(d=p(d,e)),d}function y(t){var e=window.document.documentElement,n=w(t,e),r=Math.max(e.clientWidth,window.innerWidth||0),o=Math.max(e.clientHeight,window.innerHeight||0),i=d(e),s=d(e,"left");return g({top:i-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:r,height:o})}function E(t){var e=t.nodeName;return"BODY"!==e&&"HTML"!==e&&("fixed"===i(t,"position")||E(s(t)))}function L(t,e,n,r){var o={top:0,left:0},i=l(t,e);if("viewport"===r)o=y(i);else{var u=void 0;"scrollParent"===r?(u=a(s(t)),"BODY"===u.nodeName&&(u=window.document.documentElement)):u="window"===r?window.document.documentElement:r;var c=w(u,i);if("HTML"!==u.nodeName||E(i))o=c;else{var f=m(),d=f.height,p=f.width;o.top+=c.top-c.marginTop,o.bottom=d+c.top,o.left+=c.left-c.marginLeft,o.right=p+c.left}}return o.left+=n,o.top+=n,o.right-=n,o.bottom-=n,o}function x(t){return t.width*t.height}function O(t,e,n,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=L(n,r,i,o),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},u=Object.keys(a).map(function(t){return bt({key:t},a[t],{area:x(a[t])})}).sort(function(t,e){return e.area-t.area}),c=u.filter(function(t){var e=t.width,r=t.height;return e>=n.clientWidth&&r>=n.clientHeight}),f=c.length>0?c[0].key:u[0].key,l=t.split("-")[1];return f+(l?"-"+l:"")}function T(t,e,n){return w(n,l(e,n))}function k(t){var e=window.getComputedStyle(t),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom),r=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+r,height:t.offsetHeight+n}}function _(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function S(t,e,n){n=n.split("-")[0];var r=k(t),o={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),s=i?"top":"left",a=i?"left":"top",u=i?"height":"width",c=i?"width":"height";return o[s]=e[s]+e[u]/2-r[u]/2,o[a]=n===a?e[a]-r[c]:e[_(a)],o}function A(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function N(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var r=A(t,function(t){return t[e]===n});return t.indexOf(r)}function M(t,e,n){return(void 0===n?t:t.slice(0,N(t,"name",n))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&o(n)&&(e.offsets.popper=g(e.offsets.popper),e.offsets.reference=g(e.offsets.reference),e=n(e,t))}),e}function j(){if(!this.state.isDestroyed){var t={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=T(this.state,this.popper,this.reference),t.placement=O(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.offsets.popper=S(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position="absolute",t=M(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function D(t,e){return t.some(function(t){var n=t.name;return t.enabled&&n===e})}function C(t){for(var e=[!1,"ms","webkit","moz","o"],n=t.charAt(0).toUpperCase()+t.slice(1),r=0;r<e.length-1;r++){var o=e[r],i=o?""+o+n:t;if(void 0!==window.document.body.style[i])return i}return null}function q(){return this.state.isDestroyed=!0,D(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[C("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function P(t,e,n,r){var o="BODY"===t.nodeName,i=o?window:t;i.addEventListener(e,n,{passive:!0}),o||P(a(i.parentNode),e,n,r),r.push(i)}function H(t,e,n,r){n.updateBound=r,window.addEventListener("resize",n.updateBound,{passive:!0});var o=a(t);return P(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function I(){this.state.eventsEnabled||(this.state=H(this.reference,this.options,this.state,this.scheduleUpdate))}function W(t,e){return window.removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}function B(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=W(this.reference,this.state))}function F(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function R(t,e){Object.keys(e).forEach(function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&F(e[n])&&(r="px"),t.style[n]=e[n]+r})}function Y(t,e){Object.keys(e).forEach(function(n){!1!==e[n]?t.setAttribute(n,e[n]):t.removeAttribute(n)})}function z(t){return R(t.instance.popper,t.styles),Y(t.instance.popper,t.attributes),t.offsets.arrow&&R(t.arrowElement,t.offsets.arrow),t}function U(t,e,n,r,o){var i=T(o,e,t),s=O(n.placement,i,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),R(e,{position:"absolute"}),n}function K(t,e){var n=e.x,r=e.y,o=t.offsets.popper,i=A(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==i?i:e.gpuAcceleration,a=f(t.instance.popper),u=b(a),c={position:o.position},l={left:Math.floor(o.left),top:Math.floor(o.top),bottom:Math.floor(o.bottom),right:Math.floor(o.right)},d="bottom"===n?"top":"bottom",p="right"===r?"left":"right",h=C("transform"),v=void 0,m=void 0;if(m="bottom"===d?-u.height+l.bottom:l.top,v="right"===p?-u.width+l.right:l.left,s&&h)c[h]="translate3d("+v+"px, "+m+"px, 0)",c[d]=0,c[p]=0,c.willChange="transform";else{var g="bottom"===d?-1:1,w="right"===p?-1:1;c[d]=m*g,c[p]=v*w,c.willChange=d+", "+p}var y={"x-placement":t.placement};return t.attributes=y,t.styles=bt({},c,t.styles),t}function Q(t,e,n){var r=A(t,function(t){return t.name===e}),o=!!r&&t.some(function(t){return t.name===n&&t.enabled&&t.order<r.order});if(!o){var i="`"+e+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}function X(t,e){if(!Q(t.instance.modifiers,"arrow","keepTogether"))return t;var n=e.element;if("string"==typeof n){if(!(n=t.instance.popper.querySelector(n)))return t}else if(!t.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var r=t.placement.split("-")[0],o=t.offsets,i=o.popper,s=o.reference,a=-1!==["left","right"].indexOf(r),u=a?"height":"width",c=a?"top":"left",f=a?"left":"top",l=a?"bottom":"right",d=k(n)[u];s[l]-d<i[c]&&(t.offsets.popper[c]-=i[c]-(s[l]-d)),s[c]+d>i[l]&&(t.offsets.popper[c]+=s[c]+d-i[l]);var p=s[c]+s[u]/2-d/2,h=p-g(t.offsets.popper)[c];return h=Math.max(Math.min(i[u]-d,h),0),t.arrowElement=n,t.offsets.arrow={},t.offsets.arrow[c]=Math.round(h),t.offsets.arrow[f]="",t}function Z(t){return"end"===t?"start":"start"===t?"end":t}function G(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=yt.indexOf(t),r=yt.slice(n+1).concat(yt.slice(0,n));return e?r.reverse():r}function V(t,e){if(D(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=L(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement),r=t.placement.split("-")[0],o=_(r),i=t.placement.split("-")[1]||"",s=[];switch(e.behavior){case Et.FLIP:s=[r,o];break;case Et.CLOCKWISE:s=G(r);break;case Et.COUNTERCLOCKWISE:s=G(r,!0);break;default:s=e.behavior}return s.forEach(function(a,u){if(r!==a||s.length===u+1)return t;r=t.placement.split("-")[0],o=_(r);var c=t.offsets.popper,f=t.offsets.reference,l=Math.floor,d="left"===r&&l(c.right)>l(f.left)||"right"===r&&l(c.left)<l(f.right)||"top"===r&&l(c.bottom)>l(f.top)||"bottom"===r&&l(c.top)<l(f.bottom),p=l(c.left)<l(n.left),h=l(c.right)>l(n.right),v=l(c.top)<l(n.top),m=l(c.bottom)>l(n.bottom),g="left"===r&&p||"right"===r&&h||"top"===r&&v||"bottom"===r&&m,b=-1!==["top","bottom"].indexOf(r),w=!!e.flipVariations&&(b&&"start"===i&&p||b&&"end"===i&&h||!b&&"start"===i&&v||!b&&"end"===i&&m);(d||g||w)&&(t.flipped=!0,(d||g)&&(r=s[u+1]),w&&(i=Z(i)),t.placement=r+(i?"-"+i:""),t.offsets.popper=bt({},t.offsets.popper,S(t.instance.popper,t.offsets.reference,t.placement)),t=M(t.instance.modifiers,t,"flip"))}),t}function J(t){var e=t.offsets,n=e.popper,r=e.reference,o=t.placement.split("-")[0],i=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",u=s?"left":"top",c=s?"width":"height";return n[a]<i(r[u])&&(t.offsets.popper[u]=i(r[u])-n[c]),n[u]>i(r[a])&&(t.offsets.popper[u]=i(r[a])),t}function $(t,e,n,r){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+o[1],s=o[2];if(!i)return t;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=r}return g(a)[e]/100*i}if("vh"===s||"vw"===s){return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i}return i}function tt(t,e,n,r){var o=[0,0],i=-1!==["right","left"].indexOf(r),s=t.split(/(\+|\-)/).map(function(t){return t.trim()}),a=s.indexOf(A(s,function(t){return-1!==t.search(/,|\s/)}));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var u=/\s*,\s*|\s+/,c=-1!==a?[s.slice(0,a).concat([s[a].split(u)[0]]),[s[a].split(u)[1]].concat(s.slice(a+1))]:[s];return c=c.map(function(t,r){var o=(1===r?!i:i)?"height":"width",s=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,s=!0,t):s?(t[t.length-1]+=e,s=!1,t):t.concat(e)},[]).map(function(t){return $(t,o,e,n)})}),c.forEach(function(t,e){t.forEach(function(n,r){F(n)&&(o[e]+=n*("-"===t[r-1]?-1:1))})}),o}function et(t,e){var n=e.offset,r=t.placement,o=t.offsets,i=o.popper,s=o.reference,a=r.split("-")[0],u=void 0;return u=F(+n)?[+n,0]:tt(n,i,s,a),"left"===a?(i.top+=u[0],i.left-=u[1]):"right"===a?(i.top+=u[0],i.left+=u[1]):"top"===a?(i.left+=u[0],i.top-=u[1]):"bottom"===a&&(i.left+=u[0],i.top+=u[1]),t.popper=i,t}function nt(t,e){var n=e.boundariesElement||f(t.instance.popper);t.instance.reference===n&&(n=f(n));var r=L(t.instance.popper,t.instance.reference,e.padding,n);e.boundaries=r;var o=e.priority,i=t.offsets.popper,s={primary:function(t){var n=i[t];return i[t]<r[t]&&!e.escapeWithReference&&(n=Math.max(i[t],r[t])),gt({},t,n)},secondary:function(t){var n="right"===t?"left":"top",o=i[n];return i[t]>r[t]&&!e.escapeWithReference&&(o=Math.min(i[n],r[t]-("right"===t?i.width:i.height))),gt({},n,o)}};return o.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";i=bt({},i,s[e](t))}),t.offsets.popper=i,t}function rt(t){var e=t.placement,n=e.split("-")[0],r=e.split("-")[1];if(r){var o=t.offsets,i=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),u=a?"left":"top",c=a?"width":"height",f={start:gt({},u,i[u]),end:gt({},u,i[u]+i[c]-s[c])};t.offsets.popper=bt({},s,f[r])}return t}function ot(t){if(!Q(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=A(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}function it(t){var e=t.placement,n=e.split("-")[0],r=t.offsets,o=r.popper,i=r.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=i[e]-(a?o[s?"width":"height"]:0),t.placement=_(e),t.offsets.popper=g(o),t}for(var st=["native code","[object MutationObserverConstructor]"],at="undefined"!=typeof window,ut=["Edge","Trident","Firefox"],ct=0,ft=0;ft<ut.length;ft+=1)if(at&&navigator.userAgent.indexOf(ut[ft])>=0){ct=1;break}var lt=at&&function(t){return st.some(function(e){return(t||"").toString().indexOf(e)>-1})}(window.MutationObserver),dt=lt?n:r,pt=void 0,ht=function(){return void 0===pt&&(pt=-1!==navigator.appVersion.indexOf("MSIE 10")),pt},vt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},mt=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),gt=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},bt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],yt=wt.slice(3),Et={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},Lt={shift:{order:100,enabled:!0,fn:rt},offset:{order:200,enabled:!0,fn:et,offset:0},preventOverflow:{order:300,enabled:!0,fn:nt,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:J},arrow:{order:500,enabled:!0,fn:X,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:V,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:it},hide:{order:800,enabled:!0,fn:ot},computeStyle:{order:850,enabled:!0,fn:K,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:z,onLoad:U,gpuAcceleration:void 0}},xt={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Lt},Ot=function(){function t(e,n){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};vt(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=dt(this.update.bind(this)),this.options=bt({},t.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e.jquery?e[0]:e,this.popper=n.jquery?n[0]:n,this.options.modifiers={},Object.keys(bt({},t.Defaults.modifiers,i.modifiers)).forEach(function(e){r.options.modifiers[e]=bt({},t.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return bt({name:t},r.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&o(t.onLoad)&&t.onLoad(r.reference,r.popper,r.options,t,r.state)}),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return mt(t,[{key:"update",value:function(){return j.call(this)}},{key:"destroy",value:function(){return q.call(this)}},{key:"enableEventListeners",value:function(){return I.call(this)}},{key:"disableEventListeners",value:function(){return B.call(this)}}]),t}();Ot.Utils=("undefined"!=typeof window?window:t).PopperUtils,Ot.placements=wt,Ot.Defaults=xt,e.a=Ot}).call(e,n(0))},function(t,e,n){(function(n){var r,o;!function(n,i){r=[],void 0!==(o=function(){return n.Swipe=i(),n.Swipe}.apply(e,r))&&(t.exports=o)}(this,function(){function t(t,n){"use strict";function o(){D.addEventListener?(I.removeEventListener("touchstart",R,!1),I.removeEventListener("mousedown",R,!1),I.removeEventListener("webkitTransitionEnd",R,!1),I.removeEventListener("msTransitionEnd",R,!1),I.removeEventListener("oTransitionEnd",R,!1),I.removeEventListener("otransitionend",R,!1),I.removeEventListener("transitionend",R,!1),e.removeEventListener("resize",R,!1)):e.onresize=null}function i(){D.addEventListener?(D.touch&&I.addEventListener("touchstart",R,!1),n.draggable&&I.addEventListener("mousedown",R,!1),D.transitions&&(I.addEventListener("webkitTransitionEnd",R,!1),I.addEventListener("msTransitionEnd",R,!1),I.addEventListener("oTransitionEnd",R,!1),I.addEventListener("otransitionend",R,!1),I.addEventListener("transitionend",R,!1)),e.addEventListener("resize",R,!1)):e.onresize=F}function s(t){var e=t.cloneNode(!0);I.appendChild(e),e.setAttribute("data-cloned",!0),e.removeAttribute("id")}function a(){C=I.children,H=C.length;for(var e=0;e<C.length;e++)C[e].getAttribute("data-cloned")&&H--;C.length<2&&(n.continuous=!1),D.transitions&&n.continuous&&C.length<3&&(s(C[0]),s(C[1]),C=I.children),q=new Array(C.length),P=t.getBoundingClientRect().width||t.offsetWidth,I.style.width=C.length*P*2+"px";for(var r=C.length;r--;){var a=C[r];a.style.width=P+"px",a.setAttribute("data-index",r),D.transitions&&(a.style.left=r*-P+"px",v(r,W>r?-P:W<r?P:0,0))}n.continuous&&D.transitions&&(v(d(W-1),-P,0),v(d(W+1),P,0)),D.transitions||(I.style.left=W*-P+"px"),t.style.visibility="visible",o(),i()}function u(){N||(n.continuous?h(W-1):W&&h(W-1))}function c(){N||(n.continuous?h(W+1):W<C.length-1&&h(W+1))}function f(t,e,r){n.callback&&n.callback(t,e,r)}function l(t,e){n.transitionEnd&&n.transitionEnd(t,e)}function d(t){return(C.length+t%C.length)%C.length}function p(){var t=W;return t>=H&&(t-=H),t}function h(t,e){if(t="number"!=typeof t?parseInt(t,10):t,W!==t){if(D.transitions){var r=Math.abs(W-t)/(W-t);if(n.continuous){var o=r;r=-q[d(t)]/P,r!==o&&(t=-r*C.length+t)}for(var i=Math.abs(W-t)-1;i--;)v(d((t>W?t:W)-i-1),P*r,0);t=d(t),v(W,P*r,e||B),v(t,0,e||B),n.continuous&&v(d(t-r),-P*r,0)}else t=d(t),g(W*-P,t*-P,e||B);W=t,j(function(){f(p(),C[W],r)})}}function v(t,e,n){m(t,e,n),q[t]=e}function m(t,e,n){var r=C[t],o=r&&r.style;o&&(o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=n+"ms",o.webkitTransform="translate("+e+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+e+"px)")}function g(t,e,r){if(!r)return void(I.style.left=e+"px");var o=+new Date,i=setInterval(function(){var s=+new Date-o;if(s>r)return I.style.left=e+"px",(A||n.autoRestart)&&y(),l(p(),C[W]),void clearInterval(i);I.style.left=(e-t)*(Math.floor(s/r*100)/100)+t+"px"},4)}function b(){k=setTimeout(c,A)}function w(){A=0,clearTimeout(k)}function y(){w(),A=n.auto||0,b()}function E(){w(),N=!0}function L(){N=!1,y()}function x(t){return/^mouse/.test(t.type)}function O(){w(),t.style.visibility="",I.style.width="",I.style.left="";for(var e=C.length;e--;){D.transitions&&m(e,0,0);var n=C[e];if(n.getAttribute("data-cloned")){n.parentElement.removeChild(n)}n.style.width="",n.style.left="",n.style.webkitTransitionDuration=n.style.MozTransitionDuration=n.style.msTransitionDuration=n.style.OTransitionDuration=n.style.transitionDuration="",n.style.webkitTransform=n.style.msTransform=n.style.MozTransform=n.style.OTransform=""}o(),F.cancel()}n=n||{};var T,k,_={},S={},A=n.auto||0,N=!1,M=function(){},j=function(t){setTimeout(t||M,0)},D={addEventListener:!!e.addEventListener,touch:"ontouchstart"in e||e.DocumentTouch&&r instanceof DocumentTouch,transitions:function(t){var e=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in e)if(void 0!==t.style[e[n]])return!0;return!1}(r.createElement("swipe"))};if(t){var C,q,P,H,I=t.children[0],W=parseInt(n.startSlide,10)||0,B=n.speed||300;n.continuous=void 0===n.continuous||n.continuous,n.autoRestart=void 0!==n.autoRestart&&n.autoRestart;var F=function(t,e){function n(){o&&clearTimeout(o)}function r(){var r=this,i=arguments;n(),o=setTimeout(function(){o=null,t.apply(r,i)},e)}e=e||100;var o=null;return r.cancel=n,r}(a),R={handleEvent:function(t){if(!N){switch(t.type){case"mousedown":case"touchstart":this.start(t);break;case"mousemove":case"touchmove":this.move(t);break;case"mouseup":case"mouseleave":case"touchend":this.end(t);break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":this.transitionEnd(t);break;case"resize":F()}n.stopPropagation&&t.stopPropagation()}},start:function(t){var e;x(t)?(e=t,t.preventDefault()):e=t.touches[0],_={x:e.pageX,y:e.pageY,time:+new Date},T=void 0,S={},x(t)?(I.addEventListener("mousemove",this,!1),I.addEventListener("mouseup",this,!1),I.addEventListener("mouseleave",this,!1)):(I.addEventListener("touchmove",this,!1),I.addEventListener("touchend",this,!1))},move:function(t){var e;if(x(t))e=t;else{if(t.touches.length>1||t.scale&&1!==t.scale)return;n.disableScroll&&t.preventDefault(),e=t.touches[0]}S={x:e.pageX-_.x,y:e.pageY-_.y},void 0===T&&(T=!!(T||Math.abs(S.x)<Math.abs(S.y))),T||(t.preventDefault(),w(),n.continuous?(m(d(W-1),S.x+q[d(W-1)],0),m(W,S.x+q[W],0),m(d(W+1),S.x+q[d(W+1)],0)):(S.x=S.x/(!W&&S.x>0||W===C.length-1&&S.x<0?Math.abs(S.x)/P+1:1),m(W-1,S.x+q[W-1],0),m(W,S.x+q[W],0),m(W+1,S.x+q[W+1],0)))},end:function(t){var e=+new Date-_.time,r=Number(e)<250&&Math.abs(S.x)>20||Math.abs(S.x)>P/2,o=!W&&S.x>0||W===C.length-1&&S.x<0;n.continuous&&(o=!1);var i=Math.abs(S.x)/S.x;T||(r&&!o?(i<0?(n.continuous?(v(d(W-1),-P,0),v(d(W+2),P,0)):v(W-1,-P,0),v(W,q[W]-P,B),v(d(W+1),q[d(W+1)]-P,B),W=d(W+1)):(n.continuous?(v(d(W+1),P,0),v(d(W-2),-P,0)):v(W+1,P,0),v(W,q[W]+P,B),v(d(W-1),q[d(W-1)]+P,B),W=d(W-1)),f(p(),C[W],i)):n.continuous?(v(d(W-1),-P,B),v(W,0,B),v(d(W+1),P,B)):(v(W-1,-P,B),v(W,0,B),v(W+1,P,B))),x(t)?(I.removeEventListener("mousemove",R,!1),I.removeEventListener("mouseup",R,!1),I.removeEventListener("mouseleave",R,!1)):(I.removeEventListener("touchmove",R,!1),I.removeEventListener("touchend",R,!1))},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)===W&&((A||n.autoRestart)&&y(),l(p(),C[W]))}};return a(),A&&b(),{setup:a,slide:function(t,e){w(),h(t,e)},prev:function(){w(),u()},next:function(){w(),c()},restart:y,stop:w,getPos:p,disable:E,enable:L,getNumSlides:function(){return H},kill:O}}}var e="object"==typeof self&&self.self===self&&self||"object"==typeof n&&n.global===n&&n||this,r=e.document;return(e.jQuery||e.Zepto)&&function(e){e.fn.Swipe=function(n){return this.each(function(){e(this).data("Swipe",new t(e(this)[0],n))})}}(e.jQuery||e.Zepto),t})}).call(e,n(0))},function(t,e,n){"use strict";function r(t){var e={};return t&&"[object Function]"===e.toString.call(t)}var o=n(3),i=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u={container:!1,delay:0,html:!1,placement:"top",title:"",template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",offset:0},c=function(){function t(e,n){i(this,t),f.call(this),n=a({},u,n),e.jquery&&(e=e[0]),this.reference=e,this.options=n;var r="string"==typeof n.trigger?n.trigger.split(" ").filter(function(t){return-1!==["click","hover","focus"].indexOf(t)}):[];this._isOpen=!1,this._setEventListeners(e,r,n)}return s(t,[{key:"_create",value:function(t,e,n,o){var i=window.document.createElement("div");i.innerHTML=e.trim();var s=i.childNodes[0];s.id="tooltip_"+Math.random().toString(36).substr(2,10),s.setAttribute("aria-hidden","false");var a=i.querySelector(this.innerSelector);if(1===n.nodeType)o&&a.appendChild(n);else if(r(n)){var u=n.call(t);o?a.innerHTML=u:a.innerText=u}else o?a.innerHTML=n:a.innerText=n;return s}},{key:"_show",value:function(t,e){if(this._isOpen)return this;if(this._isOpen=!0,this._tooltipNode)return this._tooltipNode.style.display="",this._tooltipNode.setAttribute("aria-hidden","false"),this.popperInstance.update(),this;var n=t.getAttribute("title")||e.title;if(!n)return this;var r=this._create(t,e.template,n,e.html);r.setAttribute("aria-describedby",r.id);var i=this._findContainer(e.container,t);this._append(r,i);var s={placement:e.placement,modifiers:{arrow:{element:this.arrowSelector}}};return e.boundariesElement&&(s.modifiers.preventOverflow={boundariesElement:e.boundariesElement}),this.popperInstance=new o.a(t,r,s),this._tooltipNode=r,this}},{key:"_hide",value:function(){return this._isOpen?(this._isOpen=!1,this._tooltipNode.style.display="none",this._tooltipNode.setAttribute("aria-hidden","true"),this):this}},{key:"_dispose",value:function(){var t=this;return this._tooltipNode&&(this._hide(),this.popperInstance.destroy(),this._events.forEach(function(e){var n=e.func,r=e.event;t.reference.removeEventListener(r,n)}),this._events=[],this._tooltipNode.parentNode.removeChild(this._tooltipNode),this._tooltipNode=null),this}},{key:"_findContainer",value:function(t,e){return"string"==typeof t?t=window.document.querySelector(t):!1===t&&(t=e.parentNode),t}},{key:"_append",value:function(t,e){e.appendChild(t)}},{key:"_setEventListeners",value:function(t,e,n){var r=this,o=[],i=[];e.forEach(function(t){switch(t){case"hover":o.push("mouseenter"),i.push("mouseleave");case"focus":o.push("focus"),i.push("blur");case"click":o.push("click"),i.push("click")}}),o.forEach(function(e){var o=function(e){!0!==r._isOpen&&(e.usedByTooltip=!0,r._scheduleShow(t,n.delay,n,e))};r._events.push({event:e,func:o}),t.addEventListener(e,o)}),i.forEach(function(e){var o=function(e){!0!==e.usedByTooltip&&r._scheduleHide(t,n.delay,n,e)};r._events.push({event:e,func:o}),t.addEventListener(e,o)})}},{key:"_scheduleShow",value:function(t,e,n){var r=this,o=e&&e.show||e||0;window.setTimeout(function(){return r._show(t,n)},o)}},{key:"_scheduleHide",value:function(t,e,n,r){var o=this,i=e&&e.hide||e||0;window.setTimeout(function(){if(!1!==o._isOpen&&document.body.contains(o._tooltipNode)){if("mouseleave"===r.type){if(o._setTooltipNodeEvent(r,t,e,n))return}o._hide(t,n)}},i)}}]),t}(),f=function(){var t=this;this.show=function(){return t._show(t.reference,t.options)},this.hide=function(){return t._hide()},this.dispose=function(){return t._dispose()},this.toggle=function(){return t._isOpen?t.hide():t.show()},this.arrowSelector=".tooltip-arrow, .tooltip__arrow",this.innerSelector=".tooltip-inner, .tooltip__inner",this._events=[],this._setTooltipNodeEvent=function(e,n,r,o){var i=e.relatedreference||e.toElement,s=function r(i){var s=i.relatedreference||i.toElement;t._tooltipNode.removeEventListener(e.type,r),n.contains(s)||t._scheduleHide(n,o.delay,o,i)};return!!t._tooltipNode.contains(i)&&(t._tooltipNode.addEventListener(e.type,s),!0)}};e.a=c},function(t,e,n){t.exports=n(1)}]);