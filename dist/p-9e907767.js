import{r as t,c as s,h as i,g as e}from"./p-0973bc72.js";import{u as r,i as n}from"./p-734c8632.js";import{U as o}from"./p-34f55e9a.js";import{u as d}from"./p-e282851d.js";import{u as h}from"./p-6d13cbde.js";const p=class{constructor(i){t(this,i),this.uniReplaced=s(this,"uniReplaced",7),this.inactive=!1,this.activate=!1,this.strict=!1,this.clean=!1,this.empty=!1,this.excludes="uni-replace, uni-replace-shadow",this.bindstart="((",this.bindend="))"}render(){return o({props:{hidden:!1}},i("slot",null))}componentDidRender(){const{el:t,strict:s,empty:i,index:e,bindstart:o,bindend:d,uniReplaced:p}=this,a={el:t,strict:s,empty:i,state:r(this.state),index:e,bindstart:o,bindend:d,uniReplaced:p};n(this.state)&&(this.inactive?this.activate&&h(a,this.excludes,!0):h(a,this.excludes,this.clean)),setTimeout((()=>this.activate=!1))}componentDidLoad(){d("udk")}get el(){return e(this)}};export{p as U}