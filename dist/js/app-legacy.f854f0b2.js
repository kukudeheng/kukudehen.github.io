(function(){"use strict";var n={716:function(n,e,t){t.d(e,{LP:function(){return i},gy:function(){return u},o4:function(){return o}});var r="token";function o(n){localStorage.setItem(r,n)}function i(){return localStorage.getItem(r)}function u(){localStorage.removeItem(r)}},9589:function(n,e,t){t(6992),t(8674),t(9601),t(7727);var r=t(144),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],u=t(1001),a={},c=(0,u.Z)(a,o,i,!1,null,null,null),f=c.exports,l=t(6665);r.Z.config.productionTip=!1,new r.Z({router:l.Z,render:function(n){return n(f)}}).$mount("#app")},6665:function(n,e,t){t(1539),t(8783),t(3948),t(6699);var r=t(144),o=t(8345),i=t(716);r.Z.use(o.Z);var u=[{path:"/login",name:"login",component:function(){return Promise.all([t.e(789),t.e(570)]).then(t.bind(t,5570))}},{path:"/",name:"layout",component:function(){return t.e(788).then(t.bind(t,4788))},children:[{path:"",redirect:"home"},{path:"home",name:"home",component:function(){return t.e(186).then(t.bind(t,3186))}},{path:"hero",name:"hero",component:function(){return Promise.all([t.e(789),t.e(125)]).then(t.bind(t,4125))}},{path:"joke",name:"joke",component:function(){return t.e(776).then(t.bind(t,9776))}},{path:"HeroDetail/:id?",name:"HeroDetail",component:function(){return Promise.all([t.e(789),t.e(539)]).then(t.bind(t,2333))}}]},{path:"/notfound",name:"notfound",component:function(){return t.e(149).then(t.bind(t,7149))}},{path:"*",redirect:"/notfound"},{path:"/login",component:function(){return t.e(149).then(t.bind(t,7149))}}],a=new o.Z({routes:u}),c=["/login","/notdound"];a.beforeEach((function(n,e,t){!0===c.includes(n.path)||(0,i.LP)()?t():(alert("请先登录"),t("/login"))})),e["Z"]=a}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,i){if(!r){var u=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],i=n[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){n.splice(l--,1);var f=o();void 0!==f&&(e=f)}}return e}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[r,o,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+n+"-legacy."+{125:"a492042f",149:"f2f93df7",186:"c3a9a976",539:"30fffcdd",570:"6c52cd53",776:"c58c7587",788:"f6030706",789:"31f75d0b"}[n]+".js"}}(),function(){t.miniCssF=function(n){return"css/"+n+"."+{125:"e539d52d",149:"b86a04ce",186:"829a559c",539:"9eaa2efb",570:"0699cde7",776:"11e9bbc6",788:"57a6335a"}[n]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="changya:";t.l=function(r,o,i,u){if(n[r])n[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",e+i),a.src=r),n[r]=[o];var s=function(e,t){a.onerror=a.onload=null,clearTimeout(h);var o=n[r];if(delete n[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(n){return n(t)})),e)return e(t)},h=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var n=function(n,e,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+n+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=e,document.head.appendChild(o),o},e=function(n,e){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===n||i===e))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===n||i===e)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(e(u,a))return o();n(r,a,o,i)}))},o={143:0};t.f.miniCss=function(n,e){var t={125:1,149:1,186:1,539:1,570:1,776:1,788:1};o[n]?e.push(o[n]):0!==o[n]&&t[n]&&e.push(o[n]=r(n).then((function(){o[n]=0}),(function(e){throw delete o[n],e})))}}(),function(){var n={143:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(e),a=new Error,c=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(e){return 0!==n[e]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var l=c(t)}for(e&&e(r);f<u.length;f++)i=u[f],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(l)},r=self["webpackChunkchangya"]=self["webpackChunkchangya"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(9589)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.f854f0b2.js.map