import{r as s,c as t,h as i,g as e}from"./p-165e1107.js";import{i as r}from"./p-53fd397d.js";import{u as o}from"./p-2780857d.js";import{U as a}from"./p-0aa8ab41.js";import{u as n}from"./p-e282851d.js";import{u as d}from"./p-1a110701.js";let h=class{constructor(i){s(this,i),this.uniReplaced=t(this,"uniReplaced",7),this.inactive=!1,this.activate=!1,this.strict=!1,this.clean=!1,this.excludes="uni-replace, uni-replace-shadow",this.bindstart="{{",this.bindend="}}"}render(){return a({props:{hidden:!1}},i("slot",null))}componentDidRender(){const{el:s,bindstart:t,bindend:i,uniReplaced:e}=this,a={el:s,state:o(this.state),bindstart:t,bindend:i,uniReplaced:e};r(this.state)&&(this.inactive?this.activate&&d(a,this.excludes,!0):d(a,this.excludes,this.clean)),setTimeout((()=>this.activate=!1))}componentDidLoad(){n("udk")}get el(){return e(this)}};export{h as U}