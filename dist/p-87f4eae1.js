import{r as t,g as e}from"./p-2e3e1c7e.js";import{c as o,e as s,f as n,b as i}from"./p-5769152e.js";import{u as a}from"./p-bfe64f9d.js";import{u as c}from"./p-9c1f6fe5.js";import{u as r}from"./p-78249524.js";import{u,b as h}from"./p-b7453060.js";const m={toggle:t=>!u.get(t),increment:(t,e)=>{const o=u.get(t);return(100*a(o)+100*(e||1))/100},decrement:(t,e)=>{const o=u.get(t);return(100*a(o)-100*(e||1))/100},getLink:t=>t.$event.target.pathname||function(t){let e="";return Array.from(t||[]).some((t=>(e=t.pathname||"",!!t.pathname))),e}(t.$event.path),push:(t,e)=>[...u.get(t)||[],e]};function f(t,e,o){const n=u.set(t,o,e.mode),i=JSON.parse(localStorage.getItem("uniStoreDebug"));i&&i[t.type]&&i[t.type].includes("set")&&function(t,e,o){console.log("%cSTORE SET:","color: darkred; font-weight: bold",Object.assign(Object.assign(Object.assign({},t),e),{value:o,$event:void 0}))}(t,e,n),setTimeout((()=>{const n=c(e.dispatch);p(n,t,o),s(o)&&l(n,h(t),t.separator,o)}))}function p(t,e,o){const s=h(e);t.forEach((t=>{t.dispatchEvent(new CustomEvent(s,{detail:o}))})),window.top.document.body.dispatchEvent(new CustomEvent(s,{detail:o}));const n=Object.assign({},e),i=e.path.split("."),a=i.pop();i.length>0&&(a.includes("[")&&i.push(a.split("[")[0]),n.path=i.join("."),p(t,n,u.get(n)))}function d(t,e,o,i){s(i)?l(t,e,o,i):n(i)&&function(t,e,o,s){s.forEach(((s,n)=>{d(t,`${e}[${n}]`,o,s)}))}(t,e,o,i),t.forEach((t=>{t.dispatchEvent(new CustomEvent(e,{detail:i}))})),window.top.document.body.dispatchEvent(new CustomEvent(e,{detail:i}))}function l(t,e,o,s){for(let[n,i]of Object.entries(s))d(t,e+o+n,o,i)}const v=class{constructor(e){t(this,e),this.activate=!1,this.inactive=!1,this.mode="merge",this.type="memory",this.feature="uni.store",this.separator=".",this.dispatch="uni-event, uni-event-shadow",this.bindStart="{{",this.bindEnd="}}"}onChange(){const{type:t,feature:e,separator:s,path:n,mode:c,state:r,action:u,dispatch:h}=this,p={type:t,feature:e,separator:s,path:n},d={mode:c,state:r,action:u,dispatch:h},l=[t,e,s,n,r,u,h];(o(this.state)||o(this.action))&&i(l,this.bindStart,this.bindEnd)&&(this.inactive&&!this.activate||function(t,e){t.path=t.path||"",o(e.state)?(e.state=a(e.state),f(t,e,e.action?m[e.action](t,e.state):e.state)):o(e.action)&&f(t,e,m[e.action](t))}(p,d)),setTimeout((()=>this.activate=!1))}onActivate(){this.onChange()}onInactive(){this.onChange()}onState(){this.onChange()}componentDidLoad(){r("uni-store-set","bottom"),this.onChange()}get el(){return e(this)}static get watchers(){return{activate:["onActivate"],inactive:["onInactive"],state:["onState"]}}};export{v as U}