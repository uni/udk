System.register([],(function(n){"use strict";return{execute:function(){n({a:v,b:s,d:u,f:f,i:c});var t=n("c",(function(n){return typeof n!=="undefined"}));var e=n("g",(function(n){return Array.isArray(n)}));var r=n("e",(function(n){return typeof n==="object"&&n!==null&&!e(n)}));var i=n("h",(function(n){return typeof n==="string"}));function u(n){return t(n)&&(e(n)&&n.length===0||r(n)&&Object.keys(n).length===0||i(n)&&n===""||n===null)}function f(n){var t='(".+"[:].+)?';var e=new RegExp("^[{]"+t+"[}]$","g");var r=new RegExp("^[\\[]"+t+"[\\]]$","g");var u=new RegExp("^[\\[][{]"+t+"[}][\\]]$","g");return i(n)&&(e.test(n)||r.test(n)||u.test(n))}function o(n,t,e){if(t===void 0){t="{{"}if(e===void 0){e="}}"}return i(n)&&n.includes(t)&&n.includes(e)}function c(n,e,r){if(e===void 0){e="{{"}if(r===void 0){r="}}"}return t(n)&&o(n,e,r)}function v(n,e,r){if(e===void 0){e="{{"}if(r===void 0){r="}}"}return t(n)&&!o(n,e,r)}function d(n,e,r){if(e===void 0){e="{{"}if(r===void 0){r="}}"}return!t(n)||!o(n,e,r)}function s(n,t,e){if(t===void 0){t="{{"}if(e===void 0){e="}}"}return n.every((function(n){return d(n,t,e)}))}}}}));