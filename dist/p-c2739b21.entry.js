import{r as t,h as s,g as e}from"./p-dcd71f28.js";import{u as r}from"./p-78249524.js";import{U as i}from"./p-cf0d344f.js";const o=class{constructor(s){t(this,s),this.strict=!1,this.multi=!1,this.propagate=!1}render(){return i(s("uni-event",{once:!this.multi,listen:"uniLoadSuccess",selector:"uni-repeat",prop:"state",stop:!this.propagate},s("uni-load",{url:this.url},s("uni-repeat",{strict:this.strict,selector:this.selector},s("slot",null)))))}componentDidLoad(){r("uni-load-repeat","next")}get el(){return e(this)}};export{o as uni_load_repeat}