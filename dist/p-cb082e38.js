import{r as s,h as t,g as i}from"./p-2e3e1c7e.js";import{u as h}from"./p-78249524.js";import{U as o}from"./p-cf0d344f.js";import{u as e,a as r,b as a}from"./p-3fb58ae4.js";const c=class{constructor(t){s(this,t),this.inactive=!1,this.once=!1,this.capture=!1,this.all=!1,this.prevent=!1,this.stop=!1,this.bindStart="{{",this.bindEnd="}}"}disconnect(){this.isConnected&&(e(this.el,this.listen),this.isConnected=!1)}connectedCallback(){r(this),this.isConnected=a(this)}render(){return this.disconnect(),r(this),this.isConnected=a(this),o(t("slot",null))}componentDidLoad(){h("uni-event-shadow","try-catch")}disconnectedCallback(){this.disconnect()}get el(){return i(this)}};export{c as U}