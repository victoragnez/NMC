(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},8418:function(e,r,n){"use strict";function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,l=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(s){l=!0,i=s}finally{try{t||null==a.return||a.return()}finally{if(l)throw i}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.default=void 0;var l,i=(l=n(7294))&&l.__esModule?l:{default:l},o=n(6273),a=n(387),s=n(7190);var c={};function u(e,r,n,t){if(e&&o.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var l=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;c[r+"%"+n+(l?"%"+l:"")]=!0}}var f=function(e){var r,n=!1!==e.prefetch,l=a.useRouter(),f=i.default.useMemo((function(){var r=t(o.resolveHref(l,e.href,!0),2),n=r[0],i=r[1];return{href:n,as:e.as?o.resolveHref(l,e.as):i||n}}),[l,e.href,e.as]),d=f.href,h=f.as,p=e.children,x=e.replace,v=e.shallow,j=e.scroll,y=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var g=(r=i.default.Children.only(p))&&"object"===typeof r&&r.ref,w=t(s.useIntersection({rootMargin:"200px"}),2),b=w[0],m=w[1],_=i.default.useCallback((function(e){b(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,b]);i.default.useEffect((function(){var e=m&&n&&o.isLocalURL(d),r="undefined"!==typeof y?y:l&&l.locale,t=c[d+"%"+h+(r?"%"+r:"")];e&&!t&&u(l,d,h,{locale:r})}),[h,d,m,y,n,l]);var N={ref:_,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,l,i,a,s){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==a&&t.indexOf("#")>=0&&(a=!1),r[l?"replace":"push"](n,t,{shallow:i,locale:s,scroll:a}))}(e,l,d,h,x,v,j,y)},onMouseEnter:function(e){o.isLocalURL(d)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),u(l,d,h,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var P="undefined"!==typeof y?y:l&&l.locale,C=l&&l.isLocaleDomain&&o.getDomainLocale(h,P,l&&l.locales,l&&l.domainLocales);N.href=C||o.addBasePath(o.addLocale(h,P,l&&l.defaultLocale))}return i.default.cloneElement(r,N)};r.default=f},7190:function(e,r,n){"use strict";function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,l=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(s){l=!0,i=s}finally{try{t||null==a.return||a.return()}finally{if(l)throw i}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!o,s=l.useRef(),c=t(l.useState(!1),2),u=c[0],f=c[1],d=l.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=a.get(r);if(n)return n;var t=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return a.set(r,n={id:r,observer:l,elements:t}),n}(n),l=t.id,i=t.observer,o=t.elements;return o.set(e,r),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),a.delete(l))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[n,r,u]);return l.useEffect((function(){if(!o&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var l=n(7294),i=n(9311),o="undefined"!==typeof IntersectionObserver;var a=new Map},5075:function(e,r,n){"use strict";n.r(r);var t=n(5893),l=(n(7294),n(1664));function i(){return(0,t.jsxs)("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34 26h-2v-1c0-6.627-5.373-12-12-12S8 18.374 8 25v1H6a1 1 0 01-1-1c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15a1 1 0 01-1 1z",fill:"url(#paint0_linear)"}),(0,t.jsx)("path",{d:"M27 25a7 7 0 00-14 0v1h2a1 1 0 001-1 4 4 0 018 0 1 1 0 001 1h2v-1z",fill:"url(#paint1_linear)"}),(0,t.jsx)("path",{d:"M30.999 25C30.999 18.925 26.075 14 20 14S9.001 18.926 9.001 25H9v1h3v-1a8 8 0 0116 0v1h3v-1h-.001z",fill:"url(#paint2_linear)"}),(0,t.jsxs)("defs",{children:[(0,t.jsxs)("linearGradient",{id:"paint0_linear",x1:5,y1:26,x2:35,y2:26,gradientUnits:"userSpaceOnUse",children:[(0,t.jsx)("stop",{stopColor:"#1877F2"}),(0,t.jsx)("stop",{offset:1,stopColor:"#04A4F4"})]}),(0,t.jsxs)("linearGradient",{id:"paint1_linear",x1:13,y1:26,x2:27,y2:26,gradientUnits:"userSpaceOnUse",children:[(0,t.jsx)("stop",{stopColor:"#F02849"}),(0,t.jsx)("stop",{offset:1,stopColor:"#F5533D"})]}),(0,t.jsxs)("linearGradient",{id:"paint2_linear",x1:9,y1:26,x2:31,y2:26,gradientUnits:"userSpaceOnUse",children:[(0,t.jsx)("stop",{stopColor:"#45BD62"}),(0,t.jsx)("stop",{offset:1,stopColor:"#2ABBA7"})]})]})]})}r.default=function(){return(0,t.jsx)("div",{style:{width:"100%",padding:"100px",alignContent:"center"},children:(0,t.jsxs)("header",{children:[(0,t.jsx)(i,{}),(0,t.jsx)("h1",{style:{margin:0},children:"Welcome to Plasmic!"}),(0,t.jsx)("h4",{children:(0,t.jsx)("a",{style:{color:"blue"},href:"https://www.plasmic.app/learn/",target:"_blank",rel:"noopener noreferrer",children:"Learn Plasmic"})}),(0,t.jsx)("h3",{children:"Your pages:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/498144",children:(0,t.jsx)("a",{style:{color:"blue"},children:"Homepage - /498144"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/497936",children:(0,t.jsx)("a",{style:{color:"blue"},children:"NewPage4 - /497936"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/497937",children:(0,t.jsx)("a",{style:{color:"blue"},children:"NewPage5 - /497937"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/498133",children:(0,t.jsx)("a",{style:{color:"blue"},children:"NewPage - /498133"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/497922",children:(0,t.jsx)("a",{style:{color:"blue"},children:"NewPage2 - /497922"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/497931",children:(0,t.jsx)("a",{style:{color:"blue"},children:"NewPage3 - /497931"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/498132",children:(0,t.jsx)("a",{style:{color:"blue"},children:"NewPage6 - /498132"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/498123",children:(0,t.jsx)("a",{style:{color:"blue"},children:"NewPage7 - /498123"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/498124",children:(0,t.jsx)("a",{style:{color:"blue"},children:"NewPage8 - /498124"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/498136",children:(0,t.jsx)("a",{style:{color:"blue"},children:"NewPage10 - /498136"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/498137",children:(0,t.jsx)("a",{style:{color:"blue"},children:"NewPage11 - /498137"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/498722",children:(0,t.jsx)("a",{style:{color:"blue"},children:"NewPage12 - /498722"})})})]}),(0,t.jsx)("p",{children:(0,t.jsx)("i",{children:"Note: Remember to remove this file if you introduce a Page component at the '/' path."})})]})})}},1664:function(e,r,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);