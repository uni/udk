import{r as t,c as s,g as i}from"./p-dcd71f28.js";import{i as o}from"./p-a937deb3.js";import{u as h}from"./p-f3c42451.js";import{u as n}from"./p-78249524.js";const a=class{constructor(i){t(this,i),this.uniLoadInitialized=s(this,"uniLoadInitialized",7),this.uniLoadStart=s(this,"uniLoadStart",7),this.uniLoadSuccess=s(this,"uniLoadSuccess",7),this.uniLoadError=s(this,"uniLoadError",7),this.inactive=!1,this.activate=!1,this.method="get",this.ext=!1,this.response="json"}componentDidRender(){if(!this.inactive||this.activate){const t=this.ext?h(this.el,"a","href"):this.url;o(t)&&(this.uniLoadStart.emit({url:t,responseType:this.response}),function(t,s,i,o){t&&async function(t,s,i){return await async function(t,s,i){const o=await fetch(t,i);return await o[s]()}(t,s,i)}(t,s,void 0).then((t=>i.emit(t))).catch((t=>o.emit(t)))}(t,this.response,this.uniLoadSuccess,this.uniLoadError)),setTimeout((()=>this.activate=!1))}}componentDidLoad(){n("uni-load","var"),this.uniLoadInitialized.emit(!0)}get el(){return i(this)}};export{a as U}