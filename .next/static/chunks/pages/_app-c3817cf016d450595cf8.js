_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("rePB"),a=n("nKUr"),o=(n("zPlV"),n("q1tI")),c=n("YFqc"),i=n.n(c),s=n("20a2"),u=n("qG/y"),l=n("p46w"),d=n.n(l);var f=function(){var e=Object(s.useRouter)(),t=Object(o.useContext)(u.a),n=t.state,r=t.dispatch,c=n.auth,l=n.cart,f=function(t){return t===e.pathname?" active":""},p=function(){return d.a.remove("refreshtoken",{path:"api/auth/accessToken"}),localStorage.removeItem("firstLogin"),r({type:"AUTH",payload:{}}),r({type:"NOTIFY",payload:{success:"Logged out!"}}),e.push("/")};return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-warning",children:[Object(a.jsx)(i.a,{href:"/",children:Object(a.jsx)("a",{className:"navbar-brand",children:"OPAKU"})}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavDropdown",children:Object(a.jsxs)("ul",{className:"navbar-nav p-1",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.a,{href:"/cart",children:Object(a.jsxs)("a",{className:"nav-link"+f("/cart"),children:[Object(a.jsx)("i",{className:"fas fa-shopping-cart position-relative","aria-hidden":"true",children:Object(a.jsx)("span",{className:"position-absolute",style:{padding:"3px 6px",background:"#ed143dc2",borderRadius:"50%",top:"-10px",right:"-10px",color:"white",fontSize:"14px"},children:l.length})})," Cart"]})})}),0===Object.keys(c).length?Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.a,{href:"/signin",children:Object(a.jsxs)("a",{className:"nav-link"+f("/signin"),children:[Object(a.jsx)("i",{className:"fas fa-user","aria-hidden":"true"})," Sign in"]})})}):Object(a.jsxs)("li",{className:"nav-item dropdown",children:[Object(a.jsxs)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(a.jsx)("img",{src:c.user.avatar,alt:c.user.avatar,style:{borderRadius:"50%",width:"30px",height:"30px",transform:"translateY(-3px)",marginRight:"3px"}})," ",c.user.name]}),Object(a.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:[Object(a.jsx)(i.a,{href:"/profile",children:Object(a.jsx)("a",{className:"dropdown-item",children:"Profile"})}),"admin"===c.user.role&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.a,{href:"/users",children:Object(a.jsx)("a",{className:"dropdown-item",children:"Users"})}),Object(a.jsx)(i.a,{href:"/create",children:Object(a.jsx)("a",{className:"dropdown-item",children:"Products"})}),Object(a.jsx)(i.a,{href:"/categories",children:Object(a.jsx)("a",{className:"dropdown-item",children:"Categories"})})]}),Object(a.jsx)("div",{className:"dropdown-divider"}),Object(a.jsx)("button",{className:"dropdown-item",onClick:p,children:"Logout"})]})]})]})})]})},p=function(){return Object(a.jsx)("div",{className:"position-fixed w-100 h-100 text-center loading",style:{background:"#0008",color:"white",top:0,left:0,zIndex:9},children:Object(a.jsxs)("svg",{width:"205",height:"250",viewBox:"0 0 40 50",children:[Object(a.jsx)("polygon",{strokeWidth:"1",stroke:"#fff",fill:"none",points:"20,1 40,40 1,40"}),Object(a.jsx)("text",{fill:"#fff",x:"5",y:"47",children:"Loading"})]})})},b=function(e){var t=e.msg,n=e.handleShow,r=e.bgColor;return Object(a.jsxs)("div",{className:"toast show position-fixed text-light ".concat(r),style:{top:"5px",right:"5px",zIndex:9,minWidth:"280px"},children:[Object(a.jsxs)("div",{className:"toast-header ".concat(r," text-light"),children:[Object(a.jsx)("strong",{className:"mr-auto text-light",children:t.title}),Object(a.jsx)("button",{type:"button",className:"ml-2 mb-1 close text-light","data-dismiss":"toast",style:{outline:"none"},onClick:n,children:"x"})]}),Object(a.jsx)("div",{className:"toast-body",children:t.msg})]})},h=function(){var e=Object(o.useContext)(u.a),t=e.state,n=e.dispatch,r=t.notify;return Object(a.jsxs)(a.Fragment,{children:[r.loading&&Object(a.jsx)(p,{}),r.error&&Object(a.jsx)(b,{msg:{msg:r.error,title:"Error"},handleShow:function(){return n({type:"NOTIFY",payload:{}})},bgColor:"bg-danger"}),r.success&&Object(a.jsx)(b,{msg:{msg:r.success,title:"Success"},handleShow:function(){return n({type:"NOTIFY",payload:{}})},bgColor:"bg-success"})]})},y=n("WtUO"),j=n("EFaQ");function O(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=function(){var e=Object(o.useContext)(u.a),t=e.state,n=e.dispatch,r=t.modal,c=t.auth,i=Object(s.useRouter)(),l=function(e){n(Object(y.d)(e.data,e.id,e.type)),Object(j.a)("user/".concat(e.id),c.token).then((function(e){return e.err?n({type:"NOTIFY",payload:{error:e.err}}):n({type:"NOTIFY",payload:{success:e.msg}})}))},d=function(e){Object(j.a)("categories/".concat(e.id),c.token).then((function(t){return t.err?n({type:"NOTIFY",payload:{error:t.err}}):(n(Object(y.d)(e.data,e.id,e.type)),n({type:"NOTIFY",payload:{success:t.msg}}))}))},f=function(e){n({type:"NOTIFY",payload:{loading:!0}}),Object(j.a)("product/".concat(e.id),c.token).then((function(e){return e.err?n({type:"NOTIFY",payload:{error:e.err}}):(n({type:"NOTIFY",payload:{success:e.msg}}),i.push("/"))}))};return Object(a.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(a.jsx)("div",{className:"modal-dialog",role:"document",children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsxs)("div",{className:"modal-header",children:[Object(a.jsx)("h5",{className:"modal-title text-capitalize",id:"exampleModalLabel",children:0!==r.length&&r[0].title}),Object(a.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(a.jsx)("div",{className:"modal-body",children:"Do you want to delete this item?"}),Object(a.jsxs)("div",{className:"modal-footer",children:[Object(a.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:function(){if(0!==r.length){var e,t=O(r);try{for(t.s();!(e=t.n()).done;){var a=e.value;"ADD_CART"===a.type&&n(Object(y.d)(a.data,a.id,a.type)),"ADD_USERS"===a.type&&l(a),"ADD_CATEGORIES"===a.type&&d(a),"DELETE_PRODUCT"===a.type&&f(a),n({type:"ADD_MODAL",payload:[]})}}catch(o){t.e(o)}finally{t.f()}}},children:"Yes"}),Object(a.jsx)("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",children:"Cancel"})]})]})})})};var g=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(f,{}),Object(a.jsx)(h,{}),Object(a.jsx)(m,{}),t]})};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(a.jsx)(u.b,{children:Object(a.jsx)(g,{children:Object(a.jsx)(t,w({},n))})})}},"20a2":function(e,t,n){e.exports=n("nOHt")},EFaQ:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return d}));var r=n("o0o1"),a=n.n(r),o=n("HaE+"),c="http://localhost:3000",i=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/api/").concat(t),{method:"GET",headers:{Authorization:n}});case 2:return r=e.sent,e.next=5,r.json();case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s=function(){var e=Object(o.a)(a.a.mark((function e(t,n,r){var o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/api/").concat(t),{method:"POST",headers:{"Content-Type":"application/json",Authorization:r},body:JSON.stringify(n)});case 2:return o=e.sent,e.next=5,o.json();case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(a.a.mark((function e(t,n,r){var o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/api/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:r},body:JSON.stringify(n)});case 2:return o=e.sent,e.next=5,o.json();case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.a)(a.a.mark((function e(t,n,r){var o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/api/").concat(t),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:r},body:JSON.stringify(n)});case 2:return o=e.sent,e.next=5,o.json();case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/api/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:n}});case 2:return r=e.sent,e.next=5,r.json();case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,a,o,c){try{var i=e[o](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var c=e.apply(t,n);function i(e){r(c,a,o,i,s,"next",e)}function s(e){r(c,a,o,i,s,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return a}))},KQm4:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},WtUO:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return f}));var r=n("rePB"),a=n("KQm4");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={NOTIFY:"NOTIFY",AUTH:"AUTH",ADD_CART:"ADD_CART",ADD_MODAL:"ADD_MODAL",ADD_ORDERS:"ADD_ORDERS",ADD_USERS:"ADD_USERS",ADD_CATEGORIES:"ADD_CATEGORIES"},s=function(e,t){return 0===e.inStock?{type:"NOTIFY",payload:{error:"This product is out of stock."}}:t.every((function(t){return t._id!==e._id}))?{type:"ADD_CART",payload:[].concat(Object(a.a)(t),[c(c({},e),{},{quantity:1})])}:{type:"NOTIFY",payload:{error:"The product has been added to cart."}}},u=function(e,t){var n=Object(a.a)(e);return n.forEach((function(e){e._id===t&&(e.quantity-=1)})),{type:"ADD_CART",payload:n}},l=function(e,t){var n=Object(a.a)(e);return n.forEach((function(e){e._id===t&&(e.quantity+=1)})),{type:"ADD_CART",payload:n}},d=function(e,t,n){return{type:n,payload:e.filter((function(e){return e._id!==t}))}},f=function(e,t,n,r){return{type:r,payload:e.map((function(e){return e._id===t?n:e}))}}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),c=n("elyg"),i=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",d=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),f=d.href,p=d.as,b=e.children,h=e.replace,y=e.shallow,j=e.scroll,O=e.locale;"string"===typeof b&&(b=o.default.createElement("a",null,b));var v=o.Children.only(b),m=v&&"object"===typeof v&&v.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),x=r(g,2),w=x[0],D=x[1],N=o.default.useCallback((function(e){w(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,w]);(0,o.useEffect)((function(){var e=D&&t&&(0,c.isLocalURL)(f),r="undefined"!==typeof O?O:n&&n.locale,a=u[f+"%"+p+(r?"%"+r:"")];e&&!a&&l(n,f,p,{locale:r})}),[p,f,D,O,t,n]);var A={ref:N,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:i}))}(e,n,f,p,h,y,j,O)},onMouseEnter:function(e){(0,c.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),l(n,f,p,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var E="undefined"!==typeof O?O:n&&n.locale,_=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(p,E,n&&n.locales,n&&n.domainLocales);A.href=_||(0,c.addBasePath)((0,c.addLocale)(p,E,n&&n.defaultLocale))}return o.default.cloneElement(v,A)};t.default=d},p46w:function(e,t,n){var r,a;!function(o){if(void 0===(a="function"===typeof(r=o)?r.call(t,n,t,e):r)||(e.exports=a),!0,e.exports=o(),!!0){var c=window.Cookies,i=window.Cookies=o();i.noConflict=function(){return window.Cookies=c,i}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function a(){}function o(t,n,o){if("undefined"!==typeof document){"number"===typeof(o=e({path:"/"},a.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var c=JSON.stringify(n);/^[\{\[]/.test(c)&&(n=c)}catch(u){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var i="";for(var s in o)o[s]&&(i+="; "+s,!0!==o[s]&&(i+="="+o[s].split(";")[0]));return document.cookie=t+"="+n+i}}function c(e,n){if("undefined"!==typeof document){for(var a={},o=document.cookie?document.cookie.split("; "):[],c=0;c<o.length;c++){var i=o[c].split("="),s=i.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var u=t(i[0]);if(s=(r.read||r)(s,u)||t(s),n)try{s=JSON.parse(s)}catch(l){}if(a[u]=s,e===u)break}catch(l){}}return e?a[e]:a}}return a.set=o,a.get=function(e){return c(e,!1)},a.getJSON=function(e){return c(e,!0)},a.remove=function(t,n){o(t,"",e(n,{expires:-1}))},a.defaults={},a.withConverter=n,a}((function(){}))}))},"qG/y":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n("nKUr"),a=n("q1tI"),o=n("rePB"),c=n("WtUO");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e,t){switch(t.type){case c.a.NOTIFY:return s(s({},e),{},{notify:t.payload});case c.a.AUTH:return s(s({},e),{},{auth:t.payload});case c.a.ADD_CART:return s(s({},e),{},{cart:t.payload});case c.a.ADD_MODAL:return s(s({},e),{},{modal:t.payload});case c.a.ADD_ORDERS:return s(s({},e),{},{orders:t.payload});case c.a.ADD_USERS:return s(s({},e),{},{users:t.payload});case c.a.ADD_CATEGORIES:return s(s({},e),{},{categories:t.payload});default:return e}},l=n("EFaQ"),d=Object(a.createContext)(),f=function(e){var t=e.children,n=Object(a.useReducer)(u,{notify:{},auth:{},cart:[],modal:[],orders:[],users:[],categories:[]}),o=n[0],c=n[1],i=o.cart,s=o.auth;return Object(a.useEffect)((function(){localStorage.getItem("firstLogin")&&Object(l.b)("auth/accessToken").then((function(e){if(e.err)return localStorage.removeItem("firstLogin");c({type:"AUTH",payload:{token:e.access_token,user:e.user}})})),Object(l.b)("categories").then((function(e){if(e.err)return c({type:"NOTIFY",payload:{error:e.err}});c({type:"ADD_CATEGORIES",payload:e.categories})}))}),[]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("__next__cart01__devat"));e&&c({type:"ADD_CART",payload:e})}),[]),Object(a.useEffect)((function(){localStorage.setItem("__next__cart01__devat",JSON.stringify(i))}),[i]),Object(a.useEffect)((function(){s.token?(Object(l.b)("order",s.token).then((function(e){if(e.err)return c({type:"NOTIFY",payload:{error:e.err}});c({type:"ADD_ORDERS",payload:e.orders})})),"admin"===s.user.role&&Object(l.b)("user",s.token).then((function(e){if(e.err)return c({type:"NOTIFY",payload:{error:e.err}});c({type:"ADD_USERS",payload:e.users})}))):(c({type:"ADD_ORDERS",payload:[]}),c({type:"ADD_USERS",payload:[]}))}),[s.token]),Object(r.jsx)(d.Provider,{value:{state:o,dispatch:c},children:t})}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=(0,a.useRef)(),u=(0,a.useState)(!1),l=r(u,2),d=l[0],f=l[1],p=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,a.useEffect)((function(){if(!c&&!d){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[d]),[p,d]};var a=n("q1tI"),o=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var i=new Map},zPlV:function(e,t,n){}},[[0,0,2,1,3]]]);