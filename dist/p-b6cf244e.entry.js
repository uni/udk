import{r as t,c as e,h as s,e as i,g as a}from"./p-dcd71f28.js";import{f as r,b as n}from"./p-4bd9bf92.js";import{u as l}from"./p-019a53c6.js";import{u as o}from"./p-78249524.js";const p=class{constructor(s){t(this,s),this.uniRepeated=e(this,"uniRepeated",7),this.strict=!1}componentWillLoad(){const t=this.el.querySelector("template");t&&(this.template=t)}render(){const t=l(r(this.state)?this.state.replaceAll("``",'"'):this.state);return setTimeout((()=>this.uniRepeated.emit()),300),n(t)?s(i,null,s("slot",null),t.map((t=>s("uni-event",{listen:"uniRendered",prop:"inactive",value:!1,stop:!0,class:this.classes},s("uni-replace",{inactive:!0,strict:this.strict,state:t},s("uni-render",{selector:this.selector,template:this.template})))))):s("slot",null)}componentDidLoad(){o("uni-repeat","iterator")}get el(){return a(this)}};p.style="uni-repeat{display:inherit}.uni-repeat-flex{display:-ms-flexbox;display:flex}.uni-repeat-flex>uni-replace{display:-ms-flexbox;display:flex}";export{p as uni_repeat}