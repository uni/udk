import{r as s,g as t}from"./p-dcd71f28.js";import{u as i}from"./p-78249524.js";import{u as h,a as o,b as n}from"./p-b16d3945.js";const c=class{constructor(t){s(this,t),this.inactive=!1,this.once=!1,this.capture=!1,this.all=!1,this.prevent=!1,this.stop=!1}disconnect(){this.isConnected&&(h(this.el,this.listen),this.isConnected=!1)}connectedCallback(){o(this),this.isConnected=n(this)}componentDidRender(){this.disconnect(),o(this),this.isConnected=n(this)}componentDidLoad(){i("uni-event","try")}disconnectedCallback(){this.disconnect()}get el(){return t(this)}};export{c as U}