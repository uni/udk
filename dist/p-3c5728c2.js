import{u as n}from"./p-f3c42451.js";async function t(n,t,a){const c=await fetch(n,a);return await c[t]()}function a(n,a,c,u){n&&async function(n,a,c){return await t(n,a,c)}(n,a,u).then((n=>c.emit(n)))}function c(a,c,u,i){(async function(a,c,u){const i=n(a,"a","href");return i?await t(i,c,u):null})(a,c,i).then((n=>u.emit(n)))}export{c as a,a as u}