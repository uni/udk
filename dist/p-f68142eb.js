import{r as t,g as e}from"./p-2e3e1c7e.js";import{c as s,b as o}from"./p-7d841ea6.js";import{u as a}from"./p-abcd1c57.js";import{u as r}from"./p-54dca803.js";import{u as i}from"./p-78249524.js";import{u as p}from"./p-846eded1.js";const l=class{constructor(e){t(this,e),this.activate=!1,this.inactive=!1,this.type="memory",this.feature="uni.store",this.separator=".",this.all=!1,this.bindStart="{{",this.bindEnd="}}"}componentDidRender(){const{el:t,type:e,feature:i,separator:l,path:u,equal:n,noEqual:h,all:c,selector:m,prop:f,value:d}=this,q={type:e,feature:i,separator:l,path:u},g={el:t,equal:n,noEqual:h,all:c,selector:m,prop:f,value:d};o([this.type,this.feature,this.separator,this.path,this.equal,this.noEqual,this.selector,this.prop,this.value],this.bindStart,this.bindEnd)&&(this.inactive&&!this.activate||function({type:t,feature:e,separator:o,path:i},{el:l,equal:u,noEqual:n,all:h,selector:c,prop:m,value:f}){const d=function(t,e,o,r){const i=function(t,e,o){return s(t)&&o===a(t)||s(e)&&o!==a(e)}(t,e,o);return s(t)||s(e)?s(r)?i?a(r):"uniIsNotEqualValue":i:o}(u,n,p.get({type:t,feature:e,separator:o,path:i}),f),q=JSON.parse(localStorage.getItem("uniStoreDebug"));q&&q[t]&&q[t].includes("listen")&&console.log("%cSTORE LISTEN:","color: darkorange; font-weight: bold",{type:t,feature:e,path:i,prop:m,val:d,element:l}),"uniIsNotEqualValue"!==d&&r(l,m,d,h,c)}(q,g)),setTimeout((()=>this.activate=!1))}componentDidLoad(){i("uni-store-get","clear")}get el(){return e(this)}};export{l as U}