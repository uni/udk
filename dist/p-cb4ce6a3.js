import{r as t,g as n}from"./p-2e3e1c7e.js";import{a as r,c as s,d as o}from"./p-7d841ea6.js";import{u as a}from"./p-54dca803.js";import{u as e}from"./p-78249524.js";function c(t){const{el:n,any:e,exact:c,path:i,noPath:u,params:h,noParams:p,prop:d,all:m,bindStart:f,bindEnd:l}=t;r(d,f,l)&&a(n,d,function(t,n,a,e,c,i){const u=window.top.location.pathname;return r(n,c,i)||r(a,c,i)?function(t,n,r,a){return!s(r)||(a?n===r:n.includes(r))||!!t&&function(t,n){return(n||"").split("/").filter((t=>!o(t))).some((n=>t.includes(n)))}(n,r)}(t,u,n,e)&&function(t,n,r){return!s(n)||(r?t!==n:!t.includes(n))}(u,a,e):!(s(n)||s(a))}(e,i,u,c,f,l)&&function(t,n,o,a,e){const c=new URLSearchParams(window.top.location.search);return r(n,a,e)||r(o,a,e)?function(t,n,r){const s=new URLSearchParams(n);return t?(n?n.split("&"):[]).some((t=>{const n=t.split("=")||[];return r.has(n[0])&&r.get(n[0])===n[1]})):Array.from(s.keys()||[]).every((t=>r.has(t)&&(!s.get(t)||r.get(t)===s.get(t))))}(t,n,c)&&function(t,n){const r=new URLSearchParams(t);return Array.from(r.keys()||[]).every((t=>!n.has(t)||!!r.get(t)&&n.get(t)!==r.get(t)))}(o,c):!(s(n)||s(o))}(e,h,p,f,l),m)}const i=class{constructor(n){t(this,n),this.any=!1,this.exact=!1,this.all=!1,this.bindStart="{{",this.bindEnd="}}"}connectedCallback(){c(this),this.el.addEventListener("popstate",(()=>c(this)))}componentDidRender(){c(this)}componentDidLoad(){e("uni-route","forEach")}disconnectedCallback(){this.el.removeEventListener("popstate",(()=>c(this)))}get el(){return n(this)}};export{i as U}