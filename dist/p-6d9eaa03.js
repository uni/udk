import{r as s,h as t,g as i}from"./p-f62ce9c5.js";import{U as h}from"./p-12df985d.js";import{u as o}from"./p-e282851d.js";import{u as r,a as e,b as a}from"./p-1f6c552d.js";let c=class{constructor(t){s(this,t),this.inactive=!1,this.once=!1,this.capture=!1,this.all=!1,this.prevent=!1,this.stop=!1}disconnect(){this.isConnected&&(r(this.el,this.listen),this.isConnected=!1)}connectedCallback(){e(this),this.isConnected=a(this)}render(){return this.disconnect(),e(this),this.isConnected=a(this),h(t("slot",null))}componentDidLoad(){o("udk")}disconnectedCallback(){this.disconnect()}get el(){return i(this)}};export{c as U}