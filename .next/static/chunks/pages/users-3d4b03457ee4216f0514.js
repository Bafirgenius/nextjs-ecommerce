_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{NhoZ:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("g4pe"),c=n.n(a),s=n("q1tI"),o=n("qG/y"),i=n("YFqc"),l=n.n(i);t.default=function(){var e=Object(s.useContext)(o.a),t=e.state,n=e.dispatch,a=t.users,i=t.auth;t.modal;return i.user?Object(r.jsxs)("div",{className:"table-responsive",children:[Object(r.jsx)(c.a,{children:Object(r.jsx)("title",{children:"Users"})}),Object(r.jsxs)("table",{className:"table w-100",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{}),Object(r.jsx)("th",{children:"ID"}),Object(r.jsx)("th",{children:"Avatar"}),Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Email"}),Object(r.jsx)("th",{children:"Admin"}),Object(r.jsx)("th",{children:"Action"})]})}),Object(r.jsx)("tbody",{children:a.map((function(e,t){return Object(r.jsxs)("tr",{style:{cursor:"pointer"},children:[Object(r.jsx)("th",{children:t+1}),Object(r.jsx)("th",{children:e._id}),Object(r.jsx)("th",{children:Object(r.jsx)("img",{src:e.avatar,alt:e.avatar,style:{width:"30px",height:"30px",overflow:"hidden",objectFit:"cover"}})}),Object(r.jsx)("th",{children:e.name}),Object(r.jsx)("th",{children:e.email}),Object(r.jsx)("th",{children:"admin"===e.role?e.root?Object(r.jsx)("i",{className:"fas fa-check text-success",children:" Root"}):Object(r.jsx)("i",{className:"fas fa-check text-success"}):Object(r.jsx)("i",{className:"fas fa-times text-danger"})}),Object(r.jsxs)("th",{children:[Object(r.jsx)(l.a,{href:i.user.root&&i.user.email!==e.email?"/edit_user/".concat(e._id):"#!",children:Object(r.jsx)("a",{children:Object(r.jsx)("i",{className:"fas fa-edit text-info mr-2",title:"Edit"})})}),i.user.root&&i.user.email!==e.email?Object(r.jsx)("i",{className:"fas fa-trash-alt text-danger ml-2",title:"Remove","data-toggle":"modal","data-target":"#exampleModal",onClick:function(){return n({type:"ADD_MODAL",payload:[{data:a,id:e._id,title:e.name,type:"ADD_USERS"}]})}}):Object(r.jsx)("i",{className:"fas fa-trash-alt text-danger ml-2",title:"Remove"})]})]},e._id)}))})]})]}):null}},URgp:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return n("NhoZ")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c=a(n("q1tI")),s=n("elyg"),o=n("nOHt"),i=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),a=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,s.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],o=n[1];return{href:c,as:e.as?(0,s.resolveHref)(a,e.as):o||c}}),[a,e.href,e.as]),d=f.href,h=f.as,j=e.children,p=e.replace,b=e.shallow,v=e.scroll,m=e.locale;"string"===typeof j&&(j=c.default.createElement("a",null,j));var x=c.Children.only(j),O=x&&"object"===typeof x&&x.ref,g=(0,i.useIntersection)({rootMargin:"200px"}),y=r(g,2),_=y[0],N=y[1],w=c.default.useCallback((function(e){_(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,_]);(0,c.useEffect)((function(){var e=N&&t&&(0,s.isLocalURL)(d),r="undefined"!==typeof m?m:n&&n.locale,a=l[d+"%"+h+(r?"%"+r:"")];e&&!a&&u(n,d,h,{locale:r})}),[h,d,N,m,t,n]);var E={ref:w,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:i,scroll:o}))}(e,n,d,h,p,b,v,m)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(n,d,h,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var L="undefined"!==typeof m?m:n&&n.locale,M=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(h,L,n&&n.locales,n&&n.domainLocales);E.href=M||(0,s.addBasePath)((0,s.addLocale)(h,L,n&&n.defaultLocale))}return c.default.cloneElement(x,E)};t.default=f},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,i=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),f=u[0],d=u[1],h=(0,a.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,s=r.elements;return s.set(e,t),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),o.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!s&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[h,f]};var a=n("q1tI"),c=n("0G5g"),s="undefined"!==typeof IntersectionObserver;var o=new Map}},[["URgp",0,2,1,3,4]]]);