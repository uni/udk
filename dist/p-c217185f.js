import{i as t}from"./p-4bd9bf92.js";import{u as n}from"./p-019a53c6.js";import{u as i}from"./p-cafcfad3.js";function o(t,n){t.removeEventListener(n,s)}function s(o,s){var c;const a=s||this,e=o.detail||(null===(c=o.target)||void 0===c?void 0:c.value),r=!a.equal||n(a.equal)===e,u=!a.noEqual||n(a.noEqual)!==e;a.prop&&r&&u&&i(a,a.all,a.selector).forEach((n=>{n[a.prop]=t(a.value)?a.value:e})),a.stop&&o.stopPropagation(),a.prevent&&o.preventDefault()}function c(n){const{inactive:i,isConnected:o,listen:s}=n||this;return!i&&!o&&t(s)}function a(t){const{el:n,once:i,capture:o,listen:a}=t||this,e={once:i,capture:o};c(t||this)&&function(t,n,i){t.addEventListener(n,s,i)}(n,a,e)}export{a,c as b,o as u}