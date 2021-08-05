
// main js start

!function(t,e){"function"==typeof define&&define.amd?define([],function(){return e(t)}):"object"==typeof exports?module.exports=e(t):t.va=e(t)}("undefined"==typeof global?"undefined"==typeof window?this:window:global,function(t){"use strict";var e,n={},r=t,o=document,i=o.documentElement,c=o.body,u=Object.prototype.toString;n.isObject=function(t){return"[object Object]"===u.call(t)},n.isArray=function(t){return"[object Array]"===u.call(t)},n.isBoolean=function(t){return"[object Boolean]"===u.call(t)},n.isString=function(t){return"[object String]"===u.call(t)},n.isFunction=function(t){return"[object Function]"===u.call(t)},n.isUndefined=function(t){return void 0===t},n.isNull=function(t){return null===t},n.isNil=function(t){return n.isUndefined(t)||n.isNull(t)},n.ifUndefined=function(t){return void 0!==t},n.ifNull=function(t){return null!==t},n.ifNil=function(t){return n.ifUndefined(t)&&n.ifNull(t)},n.isElement=function(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},n.isNode=function(t){return"object"==typeof Node?t instanceof Node:t&&"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},n.isLiteralObject=function(t){return t&&"object"==typeof t&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})},n.isIterable=function(t){return!n.isNode(t)&&!n.isElement(t)&&t!==r&&(n.isLiteralObject(t)||n.isArray(t)||"object"==typeof t&&null!==t&&void 0!==t.length)},n.type=function(t){return u.call(t)},n.hasProperty=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.extend=function(){var t={},e=!1,r=0;n.isBoolean(arguments[0])&&(e=arguments[0],r++);for(var o=function(r){for(var o in r)r.hasOwnProperty(o)&&(t[o]=e&&n.isObject(r[o])?n.extend(t[o],r[o]):r[o])};r<arguments.length;r++)o(arguments[r]);return t},n.each=function(t,e,r){if(n.isObject(t))for(var o in t)n.hasProperty(t,o)&&e.call(r,t[o],o,t);else for(var i=t.length,c=0;c<i;c++)e.call(r,t[c],c,t)},n.encodeURL=function(t){return encodeURIComponent(t)},n.on=function(t,e,r,i){if(i&&(r=r.bind(i)),!t)throw new Error("Please provide an element to attach the event to.");if(!e)throw new Error("Please provide an event to listen for.");return n.isString(t)?o.addEventListener(t,e,r||!1):t.addEventListener(e,r,i||!1)},n.off=function(t,e,r,i){if(i&&(r=r.bind(i)),!t)throw new Error("Please provide an element to attach the event to.");if(!e)throw new Error("Please provide an event to listen for.");return n.isString(t)?o.removeEventListener(t,e,r||!1):t.removeEventListener(e,r,i||!1)},n.passive=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});n.on(r,"test",null,e),n.off(r,"test",null,e)}catch(e){t=!1}return t},n.ready=function(t){return"interactive"===o.readyState||"complete"===o.readyState?void t():void n.on("DOMContentLoaded",function e(){t(),n.off("DOMContentLoaded",e,!1)},!1)},n.loaded=function(t){return"complete"===o.readyState?void t():void n.on(r,"load",function e(){t(),n.off("load",e,!1)},!1)},n.query=n.$=function(t,e){return n.isString(t)?o.querySelector(t):t.querySelector(e)},n.queryAll=n.$$=function(t,e){return n.isString(t)?o.querySelectorAll(t):t.querySelectorAll(e)},n.byId=function(t){return o.getElementById(t)},n.byClass=function(t,e){return n.isString(t)?o.getElementsByClassName(t):t.getElementsByClassName(e)},n.byTag=function(t,e){return n.isString(t)?o.getElementsByTagName(t):t.getElementsByTagName(e)},n.getAttr=function(t,e){return t.getAttribute(e)},n.setAttr=function(t,e,n){return t.setAttribute(e,n)},n.removeAttr=function(t,e){return t.removeAttribute(e)},n.hasAttr=function(t,e){return t.hasAttribute(e)},n.findAttr=function(t,r,o){o=o||"*";var i=n.byTag(o),c=i.length;for(e=0;e<c;e++)if(n.getAttr(i[e],t)==r)return i[e]},n.html=function(t,e){return e?(t.innerHTML=e,e):t.innerHTML},n.text=function(t,e){return e?(t.innerText?t.innerText=e:t.textContent=e,e):t.innerText?t.innerText:t.textContent},n.children=function(t,r){if(n.isBoolean(r)&&r)return t.childNodes;var o=[];if(n.isString(r)){var i=t.childNodes;return n.each(i,function(t){t.nodeName.toLowerCase()===r.toLowerCase()&&o.push(t)}),o}for(e in t.childNodes)1===t.childNodes[e].nodeType&&o.push(t.childNodes[e]);return o},n.create=function(t){var e=document.createElement("tbody"),r=document.createDocumentFragment();n.html(e,t);var o=n.children(e);return n.each(o,function(t){n.append(r,t)}),r},n.append=function(t,e){return n.isString(e)&&(e=n.create(e)),t.appendChild(e),e},n.remove=function(t){var e=t.parentNode||t.parentElement;e&&e.removeChild(t)},n.htmlAfterBegin=function(t,e){return t.insertAdjacentHTML("afterbegin",e)},n.htmlBeforeEnd=function(t,e){return t.insertAdjacentHTML("beforeend",e)},n.getStyle=function(t,e){var i;return i=n.isFunction(r.getComputedStyle)?r.getComputedStyle(t):n.ifUndefined(o.currentStyle)?t.currentStyle:t.style,e?i[e]:i};var a=function(t){return t};n.setStyle=function(t,r){if(n.isIterable(t)&&n.isLiteralObject(r))return n.each(t,function(t){n.css(t,r)}),v;if(n.isString(r))return n.getStyle(t,a(r));if(n.isArray(r)){var o={};for(e in r)o[r[e]]=n.getStyle(t,a(r[e]));return o}if(n.isLiteralObject(r)){for(e in r)t.style[a(e)]=r[e];return r}return!1},n.rect=function(t){return t.getBoundingClientRect()},n.offset=function(t){if(!n.isElement(t))return!1;var e=n.rect(t),r={top:Math.round(e.top),right:Math.round(e.right),bottom:Math.round(e.bottom),left:Math.round(e.left),width:e.width?Math.round(e.width):Math.round(t.offsetWidth),height:e.height?Math.round(e.height):Math.round(t.offsetHeight)};return 0>=r.width&&(r.width=parseFloat(n.getStyle(t,"width"))),0>=r.height&&(r.height=parseFloat(n.getStyle(t,"height"))),r},n.elementHeight=function(t){return n.offset(t).height},n.scrollTop=function(){return r.pageYOffset||r.scrollY||i.scrollTop||c.scrollTop},n.documentHeight=function(){return Math.max(c.scrollHeight,i.scrollHeight,c.offsetHeight,i.offsetHeight,c.clientHeight,i.clientHeight)};var s=r.matchMedia||r.webkitMatchMedia||r.mozMatchMedia||r.msMatchMedia||r.oMatchMedia;n.matchMedia=function(t){return s(t)},n.matches=function(t,e){var n=Element.prototype;return(n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||function(t){return-1!==[].indexOf.call(o.querySelectorAll(t),this)}).call(t,e)},n.once=function(t,e){var n;return function(){return t&&(n=t.apply(e||this,arguments),t=null),n}},n.timeout=function(t,e){return setTimeout(t,e)},n.throttle=function(t,e,n){var r;return function(){var o=this,i=arguments,c=n&&!r;r||(r=setTimeout(function(){r=null,n||t.apply(o,i)},e)),c&&t.apply(o,i)}};var l,f=r.requestAnimationFrame,d=r.cancelAnimationFrame||r.cancelRequestAnimationFrame;f&&d||n.each(["-moz-","-ms-","-webkit-","-o-",""],function(t){var e=t;f=f||r[e+"RequestAnimationFrame"],d=d||r[e+"CancelAnimationFrame"]||r[e+"CancelRequestAnimationFrame"]}),f&&d||(f=function(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-l)),o=r.setTimeout(function(){t(e+n)},n);return l=e+n,o},d=function(t){r.clearTimeout(t)}),n.raf=function(t){return f(t)},n.caf=function(t){return f(t)},n.touch=function(){return"ontouchstart"in r||r.DocumentTouch&&o instanceof DocumentTouch},String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")});var h,m,g,p,y=function(t,r){"[object Array]"!==n.type(t)&&(t=t.split(" "));var o=t.length;for(e=0;e<o;e++)r(t[e],e)};"classList"in i?(h=function(t,e){return t.classList.contains(e)},m=function(t,e){t.classList.add(e)},g=function(t,e){t.classList.remove(e)},p=function(t,e){t.classList.toggle(e)}):(h=function(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},m=function(t,e){h(t,e)||(t.className+=(t.className?" ":"")+e)},g=function(t,e){if(h(t,e)){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," "),t.className=t.className.trim()}},p=function(t,e){(h(t,e)?g:m)(t,e)}),n.hasClass=function(t,e){return h(t,e)},n.addClass=function(t,e){y(e,function(e){m(t,e)})},n.removeClass=function(t,e){y(e,function(e){g(t,e)})},n.toggleClass=function(t,e){y(e,function(e){p(t,e)})};var b=function(t){return t.getAttribute("class")};return n.$hasClass=function(t,e){return new RegExp("(\\s|^)"+e+"(\\s|$)").test(b(t))},n.$addClass=function(t,e){n.$hasClass(t,e)||t.setAttribute("class",(b(t)&&b(t)+" ")+e)},n.$removeClass=function(t,e){var r=b(t).replace(new RegExp("(\\s|^)"+e+"(\\s|$)","g"),"$2");n.$hasClass(t,e)&&t.setAttribute("class",r)},n.$toggleClass=function(t,e){(n.$hasClass(t,e)?n.$removeClass:n.$addClass)(t,e)},n});





// main functions
(function(g, j) {
"use strict"; var z, A, B, C, k = j.documentElement, w = j.body; if (B = "IniY", C = "1.1", va.findAttr("system-name", B) && va.findAttr("system-version", C)) {
function G(H, I) {
try { if (va.isString(H)) { var J = (I || j).querySelectorAll(H), K = J.length; for (z = 0; z < K; z++) this[z] = J[z]; this.length = K } else H && 1 === H.nodeType ? (this[0] = H, this.length = 1) : this.length = 0 } catch (L) { console.error(L.message) }
}	console.log("Finished initializing " + B + " template."), k && va.removeClass(k, "no-js"); 




// local storage support check // night mode // change directions
var D=function(){if("undefined"==typeof Storage)throw new Error("Your browser does not support HTML5 localStorage. Please upgrade your browser!");!function(){var e=va.query("[data-night-mode] svg"),a=va.query(e,".is-night"),t=va.query(e,".is-light");if(localStorage.getItem("nightMode")&&localStorage.getItem("toggleNight")&&localStorage.getItem("toggleLight")){var l=localStorage.getItem("nightMode"),o=localStorage.getItem("toggleNight"),g=localStorage.getItem("toggleLight");va.addClass(w,l),va.$toggleClass(a,o),va.$toggleClass(t,g)}va.on("click",function(e){va.hasAttr(e.target,"data-night-mode")&&(e.preventDefault(),va.hasClass(w,"night-mode")||localStorage.setItem("nightMode","night-mode")&&va.$hasClass(a,"hidden")||localStorage.setItem("toggleNight","hidden")&&va.$hasClass(t,"hidden")||localStorage.setItem("toggleLight","hidden")?(va.removeClass(w,"night-mode"),localStorage.removeItem("nightMode"),localStorage.removeItem("toggleNight"),va.$addClass(a,"hidden"),va.$removeClass(t,"hidden"),localStorage.removeItem("toggleLight")):(va.addClass(w,"night-mode"),localStorage.setItem("nightMode","night-mode"),localStorage.setItem("toggleNight","hidden"),va.$removeClass(a,"hidden"),va.$addClass(t,"hidden"),localStorage.setItem("toggleLight","hidden")))},!1)}();!function(){var e=va.query("[data-rtl-mode] svg"),a=va.query(e,".is-rtl"),t=va.query(e,".is-ltr");if("ltr"==j.dir){if(localStorage.getItem("RTL")&&localStorage.getItem("toggleRTL")&&localStorage.getItem("toggleLTR")){var l=localStorage.getItem("RTL"),o=localStorage.getItem("toggleRTL"),g=localStorage.getItem("toggleLTR");va.addClass(k,l),va.$toggleClass(a,o),va.$toggleClass(t,g)}va.on("click",function(e){va.hasAttr(e.target,"data-rtl-mode")&&(e.preventDefault(),va.hasClass(k,"rtl")||localStorage.setItem("RTL","rtl")&&va.$hasClass(a,"hidden")||localStorage.setItem("toggleRTL","hidden")&&va.$hasClass(t,"hidden")||localStorage.setItem("toggleLTR","hidden")?(va.removeClass(k,"rtl"),localStorage.removeItem("RTL"),localStorage.removeItem("toggleRTL"),va.$addClass(a,"hidden"),va.$removeClass(t,"hidden"),localStorage.removeItem("toggleLTR")):!va.hasClass(k,"translated-rtl")&&(va.addClass(k,"rtl"),localStorage.setItem("RTL","rtl"),localStorage.setItem("toggleRTL","hidden"),va.$removeClass(a,"hidden"),va.$addClass(t,"hidden"),localStorage.setItem("toggleLTR","hidden")))},!1)}"rtl"==j.dir&&(va.$hasClass(a,"hidden")&&(va.$removeClass(a,"hidden"),va.$addClass(t,"hidden")),va.on("click",function(e){va.hasAttr(e.target,"data-rtl-mode")&&(e.preventDefault(),!va.hasClass(k,"translated-rtl")&&va.$hasClass(t,"hidden")?(va.setAttr(k,"dir","ltr"),va.$removeClass(t,"hidden"),va.$addClass(a,"hidden")):"ltr"==j.dir&&va.$hasClass(a,"hidden")&&(va.setAttr(k,"dir","rtl"),va.$removeClass(a,"hidden"),va.$addClass(t,"hidden")))},!1))}()};




// app start
D(), va.ready(function() {
var H = va.byId("app"), I = va.byId("toolbar"), J = va.byId("drawer");
(function() { va.htmlBeforeEnd(H, "<div id=\"overlay\"></div>") })();
var K = va.byId("overlay");





// get current year for copyrights
(function() { var ca = new Date, da = ca.getFullYear(), fa = va.byId("copyright-years"); va.html(fa, da) })();


// print 
!function(){var n=function(n){var e=n.type;"keydown"===e?(13===n.keyCode||32===n.keyCode)&&(g.print(),n.preventDefault()):"click"===e&&g.print()},e=va.byClass("js-print")[0];va.ifUndefined(e)&&(va.on(e,"click",n,!1),va.on(e,"keydown",n,!1))}();


// full screen
!function(){var e=Element.prototype;e.requestFullscreen||(e.requestFullscreen=e.mozRequestFullscreen||e.webkitRequestFullscreen||e.msRequestFullscreen),j.exitFullscreen||(j.exitFullscreen=j.mozExitFullscreen||j.webkitExitFullscreen||j.msExitFullscreen),j.fullscreenElement||(Object.defineProperty(j,"fullscreenElement",{get:function(){return j.mozFullScreenElement||j.msFullscreenElement||j.webkitFullscreenElement}}),Object.defineProperty(j,"fullscreenEnabled",{get:function(){return j.mozFullScreenEnabled||j.msFullscreenEnabled||j.webkitFullscreenEnabled}})),va.on("click",function(e){va.hasAttr(e.target,"data-fullscreen")&&(j.fullscreenElement?j.exitFullscreen():k.requestFullscreen())},!1)}();


// nav menu // nav submenu
va.each(va.queryAll("li.nav-menu"),function(a){var e=va.query(a,'[data-nav-toggle="menu"]'),v=va.query(e.parentNode,"ul.nav-item"),t=va.query(e,".menu-indicator");if(va.setStyle(v,{marginTop:-v.scrollHeight+"px"}),va.ifNil(e)){var l=va.throttle(function(){va.toggleClass(v,"open"),va.ifNull(t)&&va.toggleClass(t,"open"),va.toggleClass(e,"active"),v.style.marginTop?va.setStyle(v,{marginTop:null}):va.setStyle(v,{marginTop:-v.scrollHeight+"px"})},15);va.touch()?va.on(e,"touchstart",l,!!va.passive&&{passive:!0}):va.on(e,"click",l,!1)}va.each(va.queryAll(a,'[data-nav-toggle="submenu"]'),function(a){if(va.ifNil(a)){var e=va.throttle(function(){var e=va.query(a.parentNode,"ul.nav-sub-menu"),v=va.query(a,".submenu-indicator");va.toggleClass(e,"open"),va.ifNull(v)&&va.toggleClass(v,"open"),va.toggleClass(a,"active"),e.style.maxHeight?va.setStyle(e,{maxHeight:null}):va.setStyle(e,{maxHeight:e.scrollHeight+"px"})},15);va.touch()?va.on(a,"touchstart",e,!!va.passive&&{passive:!0}):va.on(a,"click",e,!1)}})});var P=function(){va.addClass(w,"lock")},Q=function(){va.hasClass(w,"lock")&&va.removeClass(w,"lock")},R=function(){va.addClass(K,"anim");var a=va.throttle(function(){va.removeClass(K,"anim"),va.addClass(K,"active"),P()},15);va.raf(a)},S=function(){va.hasClass(K,"active")&&(va.removeClass(K,"active"),Q())};


// dialog
va.each(va.queryAll(".js-dialog-open"),function(a){va.on(a,"click",function(o){var l=o.target||a||this,v=va.getAttr(l,"data-open-dialog");if(va.addClass(va.byId(v),"dialog-opening"),va.hasClass(va.byId(v),"dialog-opening")){var i=va.throttle(function(){va.removeClass(va.byId(v),"dialog-opening"),va.addClass(va.byId(v),"dialog-open"),P()},15);va.raf(i)}},!1)}),va.each(va.queryAll(".js-dialog-close"),function(a){va.on(a,"click",function(o){var l=o.target||a||this,v=va.getAttr(l,"data-close-dialog");va.hasClass(va.byId(v),"dialog-open")&&(va.removeClass(va.byId(v),"dialog-open"),Q())},!1)}),va.each(va.queryAll(".dialog-scrim"),function(a){va.on(a,"click",function(){va.each(va.queryAll(".dialog"),function(a){va.hasClass(a,"dialog-open")&&(va.removeClass(a,"dialog-open"),Q())})},!1)});


// dropdown
va.each(va.queryAll(".js-dropdown-toggle"),function(a){va.on(a,"click",function(t){t.stopPropagation();var e=t.target||a||this,v=va.getAttr(e,"data-toggle-dropdown");va.hasClass(va.byId(v),"active")?(va.removeClass(va.byId(v),"active"),va.setAttr(e,"aria-expanded","false")):(va.addClass(va.byId(v),"active"),va.setAttr(e,"aria-expanded","true")),va.on(g,"click",function(){va.hasClass(va.byId(v),"active")&&(va.removeClass(va.byId(v),"active"),va.setAttr(e,"aria-expanded","false"))},!1)},!1)});


// drawer
!function(){var a=va.query(".multi-view .js-drawer");if(a){var e=va.throttle(function(){va.addClass(J,"active"),R(),va.hasClass(J,"active")&&va.setAttr(a,"aria-expanded","true"),va.on(K,"click",function(){va.hasClass(J,"active")&&(va.removeClass(J,"active"),S(),va.setAttr(a,"aria-expanded","false"))},!1)},15);va.on(a,"click",e,!1)}}(),function(){var a=va.query(".article-view .js-drawer");if(a){var e=va.throttle(function(){va.toggleClass(H,"active"),va.toggleClass(J,"active"),va.hasClass(J,"active")?va.setAttr(a,"aria-expanded","true"):va.setAttr(a,"aria-expanded","false")},15);va.on(a,"click",e,!1)}}();


// search
!function(){var a=va.byId("toolbar-search"),e=va.byClass("js-search")[0],v=va.byClass("toolbar-title")[0],s=va.byClass("toolbar-blog-title")[0];va.each(va.queryAll(".toolbar-action:not(.js-drawer)"),function(i){va.ifNil(e)&&va.on(e,"click",function(){va.addClass(a,"active"),va.addClass(i,"hide"),va.addClass(v,"hide"),va.setAttr(e,"aria-expanded","true"),va.setAttr(a,"aria-hidden","false"),va.ifNil(s)&&va.addClass(s,"hide")},!1);var l=va.byClass("ts-close")[0],t=function(){(va.hasClass(a,"active")||va.hasClass(i,"hide"))&&(va.removeClass(a,"active"),va.removeClass(i,"hide"),va.removeClass(v,"hide"),va.setAttr(e,"aria-expanded","false"),va.setAttr(a,"aria-hidden","true"),va.ifNil(s)&&va.removeClass(s,"hide"))};va.ifNil(l)&&va.on(l,"click",t,!1);var r=va.query(".multi-view #header");va.ifNil(r)&&va.on(g,"scroll",function a(){va.scrollTop()>va.elementHeight(r)?va.addClass(I,"active"):(va.removeClass(I,"active"),t()),va.off(g,"scroll",a,!1)},!!va.passive&&{passive:!0});var o=va.query(".article-view #toolbar");va.ifNil(o)&&va.on(g,"scroll",function a(){va.scrollTop()>va.elementHeight(o)?va.addClass(I,"active"):(va.removeClass(I,"active"),t()),va.off(g,"scroll",a,!1)},!!va.passive&&{passive:!0})})}(),function(){var a=va.byClass("header-search")[0],e=va.query(".header-search form"),v=va.byId("hs-input"),s=va.byClass("hs-clear")[0];va.ifNil(v)&&(va.on(v,"keyup",function(){0===v.value.length?(va.removeClass(s,"active"),va.setAttr(s,"aria-hidden","true")):(va.addClass(s,"active"),va.setAttr(s,"aria-hidden","false"))},!1),va.on(e,"focus",function(){va.addClass(a,"focus")},!0),va.on(e,"blur",function(){va.removeClass(a,"focus")},!0)),va.ifNil(s)&&va.on(s,"click",function(){va.removeClass(s,"active"),v.value="",v.focus(),va.setAttr(s,"aria-hidden","true")},!1)}(),function(){var a=va.byClass("toolbar-searchbar")[0],e=va.query(".toolbar-searchbar form"),v=va.byId("sb-input"),s=va.byClass("sb-clear")[0];va.ifNil(v)&&(va.on(v,"keyup",function(){0===v.value.length?(va.removeClass(s,"active"),va.setAttr(s,"aria-hidden","true")):(va.addClass(s,"active"),va.setAttr(s,"aria-hidden","false"))},!1),va.on(e,"focus",function(){va.addClass(a,"focus")},!0),va.on(e,"blur",function(){va.removeClass(a,"focus")},!0)),va.ifNil(s)&&va.on(s,"click",function(){va.removeClass(s,"active"),v.value="",v.focus(),va.setAttr(s,"aria-hidden","true")},!1)}();


// footer drop items
!function(){var a=function(a){a.matches&&va.each(va.queryAll(".footer-item-title"),function(a){va.on(a,"click",function(e){e.stopPropagation();var t=e.target||a||this,o=va.query(t.parentNode,".footer-item");va.ifNull(o)&&(va.toggleClass(o,"active"),va.toggleClass(t,"open"),va.on(g,"click",function(){va.hasClass(o,"active")&&(va.removeClass(o,"active"),va.removeClass(t,"open"))},!1))},!1)})},e=va.matchMedia("(max-width: 600px)");a(e),e.addListener(a)}();


// tabs
new function(){var a=function(a){va.each(va.queryAll("[data-tab]"),function(a){va.removeClass(a,"active");var t=va.getAttr(a,"data-tab"),v=va.byId(t);va.removeClass(v,"active")}),va.addClass(a.target||this,"active");var t=va.getAttr(a.currentTarget||this,"data-tab"),v=va.byId(t);va.addClass(v,"active")};va.each(va.queryAll("[data-tab]"),function(t){va.on(t,"click",a,!1)})};


// scroll by id
!function(){if("querySelector"in j&&"addEventListener"in g){g.scrolling={offset:84,to:function(t){var o,a=va.query(va.getAttr(t,"data-scroll")).offsetTop;a-=va.hasAttr(t,"data-scroll-offset")?va.getAttr(t,"data-scroll-offset"):84,o=va.hasAttr(t,"data-scroll-speed")?va.getAttr(t,"data-scroll-speed"):300,function(t,o,a){var r=va.scrollTop()||0,l=function(t){var n=function(t,o,a,r){return 1>(t/=r/2)?a/2*t*t+o:-a/2*((t-=1)*(t-2)-1)+o}(t+=20,r,o-r,a);k.scrollTop=n,w.scrollTop=n,t<a&&va.timeout(function(){l(t)},20)};l(0)}(w,a,o)}},va.each(va.queryAll("[data-scroll]"),function(t){va.on(t,"click",function(o){g.scrolling.to(o.currentTarget||t||this)},!1)})}}();


// loademore move it
var aa=va.once(function(){va.raf(function(){va.addClass(w,"js-loading"),console.log("Loading...")}),va.loaded(function(){va.addClass(w,"js-loaded"),va.removeClass(w,"js-loading"),console.log("Loaded!")})});aa();


});  // app end




// notification get element by id
var E=function(){var I=va.byId("notification-code"),J=va.byId("notification-content");va.ifNil(I)&&va.html(J,va.text(I))};E(),

// ripple
G.rippleEffect=function(){va.loaded(function(){va.each(va.queryAll(".js-ripple"),function(H){va.on(H,"mousedown",function I(J){var K=J.currentTarget||H||this,L=j.createElement("div");L.className="ripple";var P,M=va.offset(K),N=J.clientX-M.left,O=J.clientY-M.top;P=M.width===M.height?1.412*M.width:Math.sqrt(M.width*M.width+M.height*M.height);var Q=2*P+"px";va.setStyle(L,{width:Q}),va.setStyle(L,{height:Q}),va.setStyle(L,{left:-P+N+"px"}),va.setStyle(L,{top:-P+O+"px"});var R=va.getAttr(K,"data-ripple-color");R&&va.setStyle(L,{background:R});var S=va.getAttr(K,"data-ripple-opacity");S&&va.setStyle(L,{opacity:S});var T=va.getAttr(K,"data-ripple-radius");T&&va.setStyle(L,{borderRadius:T}),va.append(K,L);var U=va.throttle(function(){va.addClass(L,"animate")},15);U();var V=va.throttle(function(){va.remove(L)},650);V(),va.off(H,"mousedown",I,!1)},!!va.passive&&{passive:!0})})})},


// tooltip
G.tooltip=function(){va.ready(function(){var H=!1, I=!1,J=!1;I=j.createElement("div"),I.id="tooltip",va.setAttr(I,"role","tooltip"), va.each(va.queryAll(".js-tooltip"),function(K){ var L=function(N){H=N.target||K||this;var O=va.offset(H);if (J=va.getAttr(H,"title"),!J||""== J) return !1;va.removeAttr(H,"title"),va.html(I,J),va.append(app,I);(function(){var S=O.left+va.offset(H).width/2-va.offset(I).width/2,T=O.top -va.offset(I).height-14,U=Math.max(k.clientWidth,g.innerWidth||0);0>S?(S=O.left+va.offset(H).width/2-14,va.addClass(I,"left")):va.removeClass(I,"left"),S+va.offset(I).width>U?(S=O.left-va.offset(I).width + va.offset(H).width/2+14, va.addClass(I,"right")):va.removeClass(I,"right"),0>T?(T=O.top+va.offset(H).height+14,va.addClass(I,"top")):va.removeClass(I,"top"), va.setStyle(I,{left:S+"px" }),va.setStyle(I,{top:T+"px"}),va.addClass(I,"active")})();var Q=function(){va.setAttr(H,"title",J),va.removeClass(I,"active"),va.remove(I)};va.touch()?va.on(H,"touchend",Q.bind(this),!!va.passive&&{passive:!0}):(va.on(H,"mouseleave",Q.bind(this),!!va.passive&&{passive:!0}),va.on(H,"click",Q.bind(this),!1),va.on(g,"click",Q.bind(this),!1)),va.on(g, "scroll",Q.bind(this),!!va.passive&&{passive:!0})};va.touch()?va.on(K,"touchstart",L.bind(this),!!va.passive&&{passive:!0}):va.on(K, "mouseenter",L.bind(this),!!va.passive&&{passive:!0})})})},


// ads get ellement by id
G.ads = function() {
var H = va.byId("adba-code"); va.ifNil(H) && va.each(va.queryAll(".adba"), function(J) { va.html(J, va.text(H)) });
var I = va.byId("adf-code");va.ifNil(I) && va.each(va.queryAll(".afc"), function(J) { va.html(J, va.text(I)) })
}, 


// lazy load Images
G.loadImages=function(H){var J=va.extend(A||{lazyClass:"js-lazy",throttle:200,threshold:200},H||{}),K="img."+J.lazyClass;va.ready(function(){var L=[].slice.call(va.queryAll(K)),M=function(R){var S=va.getAttr(R,"data-src"),T=va.getAttr(R,"data-srcset");if(va.hasAttr(R,"data-src")||va.hasAttr(R,"data-srcset")){var U=R.width,V=R.height,W=new Image;V=0==V?"":"-h"+V+"-p",S=S.replace("/s1600/","/w"+U+V+"/"),S=S.replace("/w1600/","/w"+U+V+"/"),S=S.replace("/s680/","/w"+U+V+"/"),S=S.replace("/w680/","/w"+U+V+"/"),S=S.replace("/s500/","/w"+U+V+"/"),S=S.replace("/w500/","/w"+U+V+"/"),S=S.replace("/s400/","/w"+U+V+"/"),S=S.replace("/w400/","/w"+U+V+"/"),S=S.replace("/s300/","/w"+U+V+"/"),S=S.replace("/w300/","/w"+U+V+"/"),va.hasAttr(R,"data-src")&&(W.src=S,R.src=W.src,va.removeAttr(R,"data-src")),va.hasAttr(R,"data-srcset")&&(W.srcset=T,R.srcset=W.srcset,va.removeAttr(R,"data-srcset")),va.removeClass(R,J.lazyClass),L=L.filter(function(X){return X!==R})}},N={intersectionObserverSupport:"IntersectionObserver" in g&&"IntersectionObserverEntry" in g&&"intersectionRatio" in g.IntersectionObserverEntry.prototype};if(!0===N.intersectionObserverSupport){var P=new IntersectionObserver(function(Q){va.each(Q,function(S){if(!0===S.isIntersecting||0<S.intersectionRatio){var T=S.target;M(T),P.unobserve(T)}})},{rootMargin:J.threshold+"px 0%"});va.each(L,function(Q){P.observe(Q)})}else(function(){function R(){!1===S&&(S=!0,va.timeout(function(){va.each(L,function(T){(va.offset(T).top<=g.innerHeight||k.clientHeight+J.threshold&&va.offset(T).bottom>=-J.threshold&&"none"!==va.getStyle(T).display)&&(M(T),0===L.length&&(va.off("scroll",R),va.off("touchmove",R),va.off(g,"resize",R),va.off(g,"orientationchange",R)))}),S=!1},J.throttle))}var S=!1;va.on("scroll",R),va.on("touchmove",R),va.on(g,"resize",R),va.on(g,"orientationchange",R)})()})},


// popup links
G.popup=function(H){var J=va.extend(A||{target:"data-href",style:"height=500, width=500, left=10, top=10, resizable=yes, scrollbars=yes, toolbar=yes, menubar=no, location=no, directories=no, status=yes"},H||{});va.each(va.queryAll(".js-popup"),function(K){va.on(K,"click",function(L){var M=va.getAttr(L.currentTarget||K||this,J.target);g.open(M,"popUpWindow",J.style)},!1)})},



// notranslate 
G.notranslate=function(H){var J=va.extend(A||{selector:"pre, code"});va.each(va.queryAll(J.selector),function(K){va.addClass(K,"notranslate")})},


// doubleclick to select 
G.doubleclick=function(H){var J=va.extend(A||{selector:"pre, code, kbd, mark, textarea, .link"},H||{});va.each(va.queryAll(J.selector),function(K){va.on(K,"dblclick",function(L){if(L.preventDefault(),j.createRange){var M=getSelection(),N=j.createRange();N.selectNodeContents(L.target||K||this),M.removeAllRanges(),M.addRange(N)}},!1)})},


// ripple
G.ripple=function(H){var J=va.extend(A||{selector:".btn:not(.no-ripple), .toolbar-action, #drawer-list a, #drawer-list button, .dropdown-content ul > li, .dropdown-action, .accordion-toggle"},H||{});va.each(va.queryAll(J.selector),function(K){va.addClass(K,"js-ripple")})},


// toc
G.toc=va.once(function(H){var J=va.extend(A||{selector:".post-body h2, .post-body .heading",target:"#toc",headingLevel:"h2",heading:"Table of Contents",listType:"ol",style:null,scrollAnim:!0,scrollSpeed:300,scrollOffset:-84},H||{}),K=va.query(J.target);if(K){var L=va.queryAll(J.selector),M="",N=L.length;for(z=0;z<N;z++)if(L[z].id){var O=J.scrollAnim?" data-scroll=\"#"+L[z].id+"\" data-scroll-speed=\""+J.scrollSpeed+"\" data-scroll-offset=\""+J.scrollOffset+"\" ":"";M+="<li><a "+O+" href=\"#"+L[z].id+"\" title=\""+va.html(L[z])+"\">"+va.html(L[z])+"</a></li>"}1>M.length||va.html(K,"<"+J.headingLevel+">"+J.heading+"</"+J.headingLevel+"><"+J.listType+(J.style?" class=\""+J.style+"\"":"")+">"+M+"</"+J.listType+">")}}),


// anchor
G.anchor=va.once(function(H){var J=va.extend(A||{title:"Link to this heading",heading:".post-body h2, .post-body h3, .post-body h4",style:"anchor"},H||{}),K=va.queryAll(J.heading),L=K.length;for(z=0;z<L;z++)K[z].id&&va.htmlBeforeEnd(K[z]," <a class=\""+J.style+"\" href=\"#"+K[z].id+"\" title=\""+J.title+"\"></a>");va.matches(w,".js-anchors")}),


// google analytics
G.analytics=function(H){var J=va.extend(A||{command:"blogger.send"},H||{});va.each(va.queryAll(".js-ga-event"),function(K){va.on(K,"click",function(L){var M=L.currentTarget||K||this;if("undefined"!=typeof ga){var N=va.getAttr(M,"data-ga-category")||"Null",O=va.getAttr(M,"data-ga-action")||"Null",P=va.getAttr(M,"data-ga-label")||"Null";ga(J.command,{hitType:"event",eventCategory:N,eventAction:O,eventLabel:P,transport:"beacon"})}},!1)})},


// clipboard
G.clipboard=va.once(function(H){var J=va.extend(A||{textCopied:"Copied to clipboard!",copied:"Copied to clipboard!",copy:"Copy",command:"blogger.send"},H||{});va.loaded(function(){"undefined"!=typeof ClipboardJS&&ClipboardJS&&va.each(va.queryAll(".snackbar-text"),function(K){va.each(va.queryAll(".js-copy"),function(L){var M=new ClipboardJS(L,{text:function(){return va.getAttr(L,"data-copy-text")}});M.on("success",function(){var N=va.byClass("snackbar")[0];va.addClass(N,"active"),va.text(K,J.textCopied);var O=va.throttle(function(){va.removeClass(N,"active")},3e3);if(O(),"undefined"!=typeof ga){var P=va.getAttr(L,"data-copy-text");ga(J.command,{hitType:"event",eventCategory:"Share",eventAction:"Copy post url to clipboard",eventLabel:P,transport:"beacon"})}})}),va.each(va.queryAll("pre"),function(L){var M=j.createElement("div");M.className="copy",va.html(M,"<span class=\"btn btn-fab raised \" role=\"button\" tabindex=\"-1\" title=\"copy"+J.copy+"\">📋</span>"),L.insertBefore(M,L.childNodes[0]);var N=new ClipboardJS(M,{text:function(){return va.text(L)}});N.on("success",function(){var O=va.byClass("snackbar")[0];va.addClass(O,"active"),va.text(K,J.copied);var P=va.throttle(function(){va.removeClass(O,"active")},3e3);P(),"undefined"!=typeof ga&&ga(J.command,{hitType:"event",eventCategory:"Code",eventAction:"Copy code to clipboard",eventLabel:g.location.href,transport:"beacon"})})})})})}),


// snackbar
G.snackbar=va.once(function(H){var J=va.extend(A||{position:"snackbar-bottom snackbar-left"},H||{});va.hasClass(k,"article-view")&&va.ready(function(){va.htmlBeforeEnd(app,"<div class=\"snackbar "+J.position+"\"><div class=\"snackbar-wrap\"><div class=\"snackbar-content\"><span class=\"snackbar-text\"></span></div></div></div>")})}),


// accordion 
G.accordion=function(H){function I(){va.each(va.queryAll(".accordion-content"),function(U){va.addClass(U,R),U.style.maxHeight&&va.setStyle(U,{maxHeight:null})})}
function J(T){va.removeClass(T,R),va.setStyle(T,{maxHeight:T.scrollHeight})&&va.setStyle(T,{maxHeight:T.scrollHeight+"px"})}
function K(T){va.addClass(T,S),L(T)}
function L(T){var U=va.hasClass(T,S)?"true":"false";va.setAttr(T,"aria-expanded",U)}
function M(){va.each(va.queryAll(".accordion-toggle"),function(U){va.removeClass(U,S),L(U)})}
function N(T){var U=va.query(T,".accordion-toggle");T=va.query(T,".accordion-content"),va.addClass(U,S),L(U),va.removeClass(T,R),va.setStyle(T,{maxHeight:T.scrollHeight})&&va.setStyle(T,{maxHeight:T.scrollHeight+"px"})}
var P=va.extend(A||{firstActive:!0},H||{}),Q=va.queryAll(".accordion"),R="hide",S="active";va.each(Q&&Q,function(T){I(T),!0==P.firstActive&&!1==!P.firstActive&&N(T),va.each(va.queryAll(".accordion-toggle"),function(U){va.on(U,"click",function(V){V=va.getAttr(U,"aria-controls"),V=va.query(T,"#"+V);var W=!va.hasClass(U,S);I(T),M(T),W&&(J(V),K(U))},!1)})})},


// toolbar
G.toolbar=function(H){var J=va.extend(A||{hide:!0,showBottom:!1},H||{}),K=va.byClass("has-toolbar")[0];if(K&&!0==J.hide&&!1==!J.hide){var L=0,M=0,N=0,O=0,P=0,Q=0;va.on(g,"scroll",function R(){L=va.elementHeight(K),M=va.documentHeight(),N=g.innerHeight||k.clientHeight,O=va.scrollTop(),Q=P-O,0>=O?va.removeClass(K,"hide"):0<Q?va.removeClass(K,"hide"):0>Q&&(O+N>=M-L?!0==J.showBottom&&!1==!J.showBottom&&va.removeClass(K,"hide"):va.addClass(K,"hide")),P=O,va.off(g,"scroll",R,!1)},!!va.passive&&{passive:!0})}},


// scrollIndicator
G.scrollIndicator=va.once(function(H){!0==H&&!1==!H&&va.loaded(function(){va.on(g,"scroll",function I(){var J=va.byClass("indicator-bar")[0],K=va.documentHeight()-va.elementHeight(k),L=100*(va.scrollTop()/K);va.setStyle(J,{width:L+"%"}),va.off(g,"scroll",I,!1)},!!va.passive&&{passive:!0})})}),


// stickyWidget
G.stickyWidget=function(H){if(!0==H&&!1==!H){var I=va.byId("sidebar-sticky"),J=va.byId("Sticky-Sidebar"),K=va.byId("navigation"),L=function(){if(I){var P=va.offset(I),Q=J.clientHeight||J.scrollHeight||J.offsetHeight,R=J.offsetWidth,S=va.offset(K);1>P.top&&0<S.top- +Q+R+S.top?va.addClass(J,"sticky"):va.removeClass(J,"sticky")}},M=!1,N=0;va.on(g,"scroll",function O(){var P=va.scrollTop();if(!M){var Q=function(){L(),M=!1,N=P};va.raf(Q)}M=!0,va.off(g,"scroll",O,!1)},!!va.passive&&{passive:!0})}},


// random posts feed
G.shufflePosts=va.once(function(H){!0==H&&!1==!H&&va.each(va.queryAll(".multi-view .post-outer ~ .post-outer, .multi-view .post-wrap ~ .post-wrap"),function(I){var J=I.parentNode,K=Math.floor(Math.random()*J.children.length-1);va.remove(I),J.insertBefore(I,J.children[K])})}),


// no Inspect
G.antiInspect=function(H){!0==H&&!1==!H&&function I(){try{(function J(K){if(1!==(""+K/K).length||0==K%20)(function(){}).constructor("debugger")();else debugger;J(++K)})(0)}catch(J){va.timeout(I,5e3)}}()},Object.defineProperty(g,"INIY3",{value:function(H,I){return new G(H,I)}})




var F = g.INIY3;
F.rippleEffect = G.rippleEffect, 
F.tooltip = G.tooltip, 
F.ads = G.ads, 
F.loadImages = G.loadImages, 
F.popup = G.popup, 
F.notranslate = G.notranslate, 
F.doubleclick = G.doubleclick, 
F.ripple = G.ripple, 
F.toc = G.toc, 
F.anchor = G.anchor, 
F.analytics = G.analytics, 
F.clipboard = G.clipboard, 
F.snackbar = G.snackbar, 
F.accordion = G.accordion, 
F.toolbar = G.toolbar, 
F.scrollIndicator = G.scrollIndicator, 
F.stickyWidget = G.stickyWidget, 
F.shufflePosts = G.shufflePosts, 
F.antiInspect = G.antiInspect, Object.freeze(g.INIY3), G.rippleEffect(), G.tooltip(), G.ads() } 
else throw new Error("Initializing " + B + " template failed.")
})(window, document);

// main js end 
