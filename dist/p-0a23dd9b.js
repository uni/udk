import{r as t,g as e}from"./p-dcd71f28.js";import{u as o}from"./p-78249524.js";import{i as a}from"./p-4bd9bf92.js";import{u as r}from"./p-019a53c6.js";import{u as s}from"./p-d3bcdde1.js";import{u as i}from"./p-78d81ae0.js";const l=class{constructor(e){t(this,e),this.inactive=!1,this.activate=!1,this.activateNext=!1,this.top=!1,this.type="memory",this.feature="uni.store",this.separator=".",this.invert=!1,this.all=!1}componentDidRender(){const{el:t,activateNext:e,top:o,type:l,feature:p,separator:n,path:u,invert:c,equal:h,noEqual:m,all:f,selector:d,prop:v,value:q}=this;this.inactive&&!this.activate||(function(t,e){const{type:o,feature:l,path:p}=t,{el:n,activateNext:u,top:c,invert:h,equal:m,noEqual:f,all:d,selector:v,prop:q,value:g}=e,E=function(t,e,o,s){const i=function(t,e,o){return a(t)&&o===r(t)||a(e)&&o!==r(e)}(t,e,o);return a(t)||a(e)?a(s)?i?r(s):"uniIsNotEqualValue":i:o}(m,f,i.get(t,c),g),N=JSON.parse(localStorage.getItem("uniStoreDebug"));N&&N[o]&&N[o].includes("listen")&&console.log("%cSTORE LISTEN:","color: darkorange; font-weight: bold",{type:o,feature:l,path:p,prop:q,val:E,element:n}),"uniIsNotEqualValue"!==E&&(s(n,q,h?!E:E,d,v),u&&s(n,"activate",!0,d,v))}({type:l,feature:p,separator:n,path:u},{el:t,activateNext:e,top:o,invert:c,equal:h,noEqual:m,all:f,selector:d,prop:v,value:q}),setTimeout((()=>this.activate=!1)))}componentDidLoad(){o("uni-store-get","clear")}get el(){return e(this)}};export{l as U}