import{r as s}from"./p-2e3e1c7e.js";import{i,a as t}from"./p-7d841ea6.js";import{u as o}from"./p-78249524.js";import{U as p}from"./p-e0f66d77.js";import{u as a}from"./p-a2e948d3.js";const r=class{constructor(i){s(this,i),this.inactive=!1,this.flex=!1,this.bindStart="{{",this.bindEnd="}}"}render(){const s=this.inactive||i(this.activeBind,this.bindStart,this.bindEnd)||t(this.inactiveBind,this.bindStart,this.bindEnd),o={hidden:s},r=a(!s,this.flex);return p({props:o,classes:r})}componentDidLoad(){o("uni-display","component")}};r.style=".uni-display-none{display:none!important}.uni-display-active{display:inherit}.uni-display-flex{display:-ms-flexbox!important;display:flex!important}";export{r as U}