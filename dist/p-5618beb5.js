import{r as t,c as s,g as i}from"./p-00d88981.js";import{i as e}from"./p-53fd397d.js";import{u as r}from"./p-2780857d.js";import{U as d}from"./p-85f4ae06.js";import{u as o}from"./p-e282851d.js";import{u as h}from"./p-dc0bd615.js";let n=class{constructor(i){t(this,i),this.uniReplaced=s(this,"uniReplaced",7),this.inactive=!1,this.activate=!1,this.strict=!1,this.clean=!1,this.excludes="uni-replace, uni-replace-shadow",this.bindStart="{{",this.bindEnd="}}"}render(){return d({props:{hidden:!1}})}componentDidRender(){const{el:t,strict:s,bindStart:i,bindEnd:d,uniReplaced:o}=this,n={el:t,strict:s,state:r(this.state),bindStart:i,bindEnd:d,uniReplaced:o};e(this.state)&&(this.inactive?this.activate&&h(n,this.excludes,!0):h(n,this.excludes,this.clean)),setTimeout((()=>this.activate=!1))}componentDidLoad(){o("udk")}get el(){return i(this)}};export{n as U}