import{r as t,c as s,g as i}from"./p-165e1107.js";import{i as e}from"./p-53fd397d.js";import{u as r}from"./p-2780857d.js";import{U as d}from"./p-0aa8ab41.js";import{u as n}from"./p-e282851d.js";import{u as o}from"./p-46215052.js";let a=class{constructor(i){t(this,i),this.uniReplaced=s(this,"uniReplaced",7),this.inactive=!1,this.activate=!1,this.strict=!1,this.clean=!1,this.excludes="uni-replace, uni-replace-shadow",this.bindStart="{{",this.bindEnd="}}"}render(){return d({props:{hidden:!1}})}componentDidRender(){const{el:t,strict:s,index:i,bindStart:d,bindEnd:n,uniReplaced:a}=this,h={el:t,strict:s,state:r(this.state),index:i,bindStart:d,bindEnd:n,uniReplaced:a};e(this.state)&&(this.inactive?this.activate&&o(h,this.excludes,!0):o(h,this.excludes,this.clean)),setTimeout((()=>this.activate=!1))}componentDidLoad(){n("udk")}get el(){return i(this)}};export{a as U}