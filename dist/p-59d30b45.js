import{r as t,h as s,g as n}from"./p-fd281745.js";import{U as o}from"./p-12df985d.js";import{u as a}from"./p-e282851d.js";import{i as e,d as i}from"./p-53fd397d.js";import{u as r}from"./p-86619b4d.js";function c(t){const{ext:s,params:n,noParams:o,prevent:a,reload:c}=this;let{path:h}=this;const p=new URLSearchParams(window.top.location.search);t&&!c&&t.preventDefault(),e(n)&&new URLSearchParams(n).forEach(((t,s)=>{p.set(s,t)})),e(o)&&o.split("&").forEach((t=>{p.delete(t)}));const w=window.top.location,l=w.search.includes("?")?w.search:`?${w.search}`;let f=s?r(this,"a","href"):"";if(f.includes("mailto")&&(window.open(f),f=""),e(h)&&h.includes("mailto")&&(window.open(h),h=""),!i(f)){const t=f.split("?")[1];t&&new URLSearchParams(t).forEach(((t,s)=>{p.set(s,t)}))}if(m(h,w)||d(f,w)||l!==`?${p.toString()}`){const t=`${[...p.keys()].length>0?"?":""}${p.toString()}`;window.top.history.pushState({},"",function(t,s,n,o){return m(t,n)?`${n.protocol}//${n.host}${t}`:!o&&d(s,n)?s.split("?")[0]:`${n.protocol}//${n.host}${n.pathname}`}(h,f,w,a)+t),window.top.dispatchEvent(new PopStateEvent("popstate",{state:{path:h,href:f,params:n,noParams:o}}))}c&&window.location.reload()}function d(t,s){return!i(t)&&t!==s.href}function m(t,s){return!!e(t)&&t!==s.pathname}let h=class{constructor(s){t(this,s),this.activate=!1,this.ext=!1,this.prevent=!1,this.reload=!1}connectedCallback(){this.el.addEventListener("click",c)}render(){return o(s("slot",null))}componentDidRender(){this.activate&&setTimeout((()=>{c.apply(this.el),this.activate=!1}))}componentDidLoad(){a("udk")}disconnectedCallback(){this.el.removeEventListener("click",c)}get el(){return n(this)}};export{h as U,c as u}