import{r as t,g as a}from"./p-2e3e1c7e.js";import{a as s}from"./p-7d841ea6.js";import{u as o}from"./p-78249524.js";function n(t,a){const{path:o,params:n,noParams:e,prevent:i,reload:r}=a||this,c=new URLSearchParams(window.top.location.search),p=new URLSearchParams(n);t&&i&&t.preventDefault(),s(n)&&p.forEach(((t,a)=>{c.set(a,t)})),s(e)&&e.split("&").forEach((t=>{c.delete(t)}));const d=window.top.location,m=d.search.includes("?")?d.search:`?${d.search}`,w=`${[...c.keys()].length>0?"?":""}${c.toString()}`;o===d.pathname&&m===`?${c.toString()}`||(window.top.history.pushState({},"",`${d.protocol}//${d.host}${o||d.pathname}${w}`),window.top.dispatchEvent(new PopStateEvent("popstate",{state:{params:n,noParams:e}}))),r&&window.location.reload()}const e=class{constructor(a){t(this,a),this.prevent=!1,this.reload=!1,this.bindStart="{{",this.bindEnd="}}"}connectedCallback(){this.el.addEventListener("click",n)}componentDidLoad(){o("uni-router-link","do")}disconnectedCallback(){this.el.removeEventListener("click",n)}get el(){return a(this)}};export{e as U}