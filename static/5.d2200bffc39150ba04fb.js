(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{102:function(e,t,n){var r=n(103);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(88)("0c63c78b",r,!0,{manualInject:!0})},103:function(e,t,n){(e.exports=n(87)(!1)).push([e.i,".user-view{background-color:#fff;box-sizing:border-box;padding:2em 3em}.user-view h1{margin:0;font-size:1.5em}.user-view .meta{list-style-type:none;padding:0}.user-view .label{display:inline-block;min-width:4em}.user-view .about{margin:1em 0}.user-view .links a{text-decoration:underline}",""])},104:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var r,o=n(1),a=n.n(o),i=n(22),s=n(23),u=n(31),c=n(102),l=n.n(c);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=Object(i.connect)(function(e){return{users:e.users}},function(e,t){return{fetchUser:function(){return e(Object(s.f)(t.match.params.id))}}})(r=Object(u.d)(l.a,!1,function(e){var t=e.props,n=t.users,r=t.match.params.id,o=n[r];return o?r:!1===o?"User Not Found":e.props.fetchUser().then(function(){return e.props.users[r]?r:"User Not Found"})})(r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,m(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a.a.PureComponent),n=t,(r=[{key:"bootstrap",value:function(){return null!=this.user||this.props.fetchUser().then(function(){return!0})}},{key:"componentDidMount",value:function(){this.bootstrap()}},{key:"render",value:function(){var e=this.user;return a.a.createElement("div",{className:"user-view"},e?a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"User : ",e.id),a.a.createElement("ul",{className:"meta"},a.a.createElement("li",null,a.a.createElement("span",{className:"label"},"Created:")," ",Object(u.c)(e.created)," ","ago"),a.a.createElement("li",null,a.a.createElement("span",{className:"label"},"Karma:")," ",e.karma),e.about?a.a.createElement("li",{className:"about",dangerouslySetInnerHTML:{__html:e.about}}):null),a.a.createElement("p",{className:"links"},a.a.createElement("a",{href:"https://news.ycombinator.com/submitted?id="+e.id},"submissions")," ","|",a.a.createElement("a",{href:"https://news.ycombinator.com/threads?id="+e.id},"comments"))):!1===e?a.a.createElement("h1",null,"User not found."):null)}},{key:"user",get:function(){var e=this.props,t=e.match;return e.users[t.params.id]}}])&&p(n.prototype,r),o&&p(n,o),t}())||r)||r},87:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];null!=i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},88:function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("react-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(89),a={},i=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},f=null,p="data-react-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e){for(var t=0;t<e.length;t++){var n=e[t],r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(b(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(b(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:i}}}}function h(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function b(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(d){var o=u++;r=s||(s=h()),t=g.bind(null,r,o,!1),n=g.bind(null,r,o,!0)}else r=h(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);f.ssrId&&e.setAttribute(ssridKey,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){c=n,f=r||{};var i=o(e,t);return m(i),function(t){for(var n=[],r=0;r<i.length;r++){var s=i[r];(u=a[s.id]).refs--,n.push(u)}t?m(i=o(e,t)):i=[];for(r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}};var v,y=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function g(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},89:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}}}]);