(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(n,e,t){},16:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var o=t(1),r=t.n(o),i=t(4),c=t.n(i),a=(t(15),t(16),t(5)),s=t(6),l=t(10),u=t(9),d=t(7),h=t.n(d),f=t(0),v=function(n){Object(l.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(a.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).state={result:"No result"},n.handleScan=function(e){e&&n.setState({result:e})},n.handleError=function(n){console.error(n)},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(h.a,{delay:300,facingMode:"user",onError:this.handleError,onScan:this.handleScan,style:{width:"100%"}}),Object(f.jsx)("p",{children:this.state.result})]})}}]),t}(o.Component);var p=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h3",{children:"Sample PWA - QR Scanner"}),Object(f.jsx)("div",{className:"qr-div",children:Object(f.jsx)(v,{})})]})},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var j=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),o(n),r(n),i(n),c(n)}))};c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");g?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):w(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):w(e,n)}))}}(),j()}},[[26,1,2]]]);
//# sourceMappingURL=main.fa6166a9.chunk.js.map