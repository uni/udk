import{i as n,b as t}from"./p-53fd397d.js";function o(n,t,o){var i;const{el:s,strict:u,state:e,bindStart:f,bindEnd:r,uniReplaced:a}=n;c((null===(i=s.querySelector("slot"))||void 0===i?void 0:i.assignedNodes())||s.childNodes,u,o,e,t,f,r),null==a||a.emit()}function c(t,o,u,e,f,r,a){t.forEach((t=>{if(t.hasChildNodes())1===t.nodeType&&i(t,o,u,e,r,a),f.toUpperCase().split(",").map((n=>n.trim())).includes(t.nodeName)||c(t.childNodes,o,u,e,f,r,a);else switch(t.nodeType){case 1:i(t,o,u,e,r,a);break;case 3:!function(t,o,c,i,u,e){const f=function(n){return(n.textContent||n.data).trim()}(t);if(f.length>0){const r=c?f:t.originalContent||f,a=s(i,r,u,e,o);a!==f&&(t.originalContent=r,function(t,o){n(t.textContent)?t.textContent=o:t.data=o}(t,a))}}(t,o,u,e,r,a)}}))}function i(t,o,c,i,u,e){const f=t.attributes;if(f&&f.length>0)for(let r=0;r<f.length;++r){const a=f[r].name;if("class"!==a){n(t.originalAttributes)||(t.originalAttributes=new Map);const l=f[r].value,d=c?l:t.originalAttributes.get(a)||l;if(""!==d.trim()){const n=s(i,d,u,e,o);n!==l&&(t.originalAttributes.set(a,d),f[r].value=n)}}}}function s(n,t,o,c,i){return u(n,e(n,t,i)||t,o.trim(),c.trim())}function u(n,t,o,c){return t.includes(o)&&t.includes(c)?function(n,t,o,c){return function(n,t,o){const c=[],i=n.split(o).filter((n=>""!==n)),s=t.split("").map((n=>"["+n+"]")).join("");return i.forEach((n=>{const o=new RegExp(`${s}.+`,"g"),i=n.match(o);i&&i.length&&c.push(i[0].replace(t,""))})),c}(t,o,c).forEach((i=>{const s=o+i+c,f=u(n,e(n,i,!1)||i,o,c);t=t.replace(s,f!==i?f:s)})),t}(n,t,o,c):t}function e(n,o,c){const i=c?o:"uniself"===o.trim()?n&&JSON.stringify(n):n&&n[o.trim()];return i?t(i)?JSON.stringify(i):i.toString():i}export{o as u}