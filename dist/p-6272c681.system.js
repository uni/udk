System.register(["./p-8cc0c8df.system.js"],(function(t){"use strict";var n,i,e;return{setters:[function(t){n=t.i;i=t.b;e=t.f}],execute:function(){t("u",r);function r(t,n,i){var e;var r=t.el,o=t.strict,u=t.state,s=t.index,c=t.bindStart,f=t.bindEnd,l=t.uniReplaced;var v=((e=r.querySelector("slot"))===null||e===void 0?void 0:e.assignedNodes())||r.childNodes;a(v,o,i,u,s,n,c,f);l===null||l===void 0?void 0:l.emit()}function a(t,n,i,e,r,s,c,f){t.forEach((function(t){if(t.hasChildNodes()){if(t.nodeType===1){o(t,n,i,e,r,c,f)}var l=s.toUpperCase().split(",").map((function(t){return t.trim()}));if(!l.includes(t.nodeName)){a(t.childNodes,n,i,e,r,s,c,f)}}else{switch(t.nodeType){case 1:o(t,n,i,e,r,c,f);break;case 3:u(t,i,e,r,c,f);break}}}))}function o(t,i,e,r,a,o,u){var s=t.attributes;if(s&&s.length>0){for(var c=0;c<s.length;++c){var l=s[c].name;if(l!=="class"){if(!n(t.originalAttributes)){t.originalAttributes=new Map}var v=s[c].value;var d=e?v:t.originalAttributes.get(l)||v;if(d.trim()!==""){var g=f(r,a,d,o,u,i);if(g!==v){t.originalAttributes.set(l,d);s[c].value=g}}}}}}function u(t,n,i,e,r,a){var o=s(t);if(o.length>0){var u=n?o:t.originalContent||o;var l=f(i,e,u,r,a);if(l!==o){t.originalContent=u;c(t,l)}}}function s(t){return(t.textContent||t.data).trim()}function c(t,i){if(n(t.textContent)){t.textContent=i}else{t.data=i}}function f(t,n,i,e,r,a){return l(t,n,g(t,n,i,a)||i,e.trim(),r.trim())}function l(t,n,i,e,r){return i.includes(e)&&i.includes(r)?v(t,n,i,e,r):i}function v(t,n,i,e,r){d(i,e,r).forEach((function(a){var o=e+a+r;var u=l(t,n,g(t,n,a,false)||a,e,r);i=i.replace(o,u!==a?u:o)}));return i}function d(t,n,i){var e=[];var r=t.split(i).filter((function(t){return t!==""}));var a=n.split("").map((function(t){return"["+t+"]"})).join("");r.forEach((function(t){var i=new RegExp(a+".+","g");var r=t.match(i);if(r&&r.length){e.push(r[0].replace(n,""))}}));return e}function g(t,r,a,o){var u=o?a:a.trim()==="uniself"?e(t)?t:n(t)&&JSON.stringify(t):a.trim()==="unindex"?""+r:t&&t[a.trim()];return u?i(u)?JSON.stringify(u):u.toString():u}}}}));