import{r as t,h as s,g as i}from"./p-165e1107.js";import{U as e}from"./p-12df985d.js";import{u as r}from"./p-e282851d.js";let o=class{constructor(s){t(this,s),this.strict=!1,this.multi=!1,this.propagate=!1,this.bindStart="{{",this.bindEnd="}}"}render(){return e(s("uni-event",{once:!this.multi,listen:"uniLoadSuccess",selector:"uni-repeat",prop:"state",stop:!this.propagate},s("uni-load",{url:this.url},s("uni-repeat",{strict:this.strict,selector:this.selector,bindStart:this.bindStart,bindEnd:this.bindEnd},s("slot",null)))))}componentDidLoad(){r("udk")}get el(){return i(this)}};export{o as uni_load_repeat}