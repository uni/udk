import{r as s,c as t,h as i,g as r}from"./p-665ff20d.js";import{i as e}from"./p-4bd9bf92.js";import{u as o}from"./p-019a53c6.js";import{u as n}from"./p-4c665fc5.js";import{U as h}from"./p-17825669.js";import{u as p}from"./p-97801cd6.js";const a=class{constructor(i){s(this,i),this.uniReplaced=t(this,"uniReplaced",7),this.inactive=!1,this.activate=!1,this.strict=!1,this.clean=!1,this.excludes="uni-replace, uni-replace-shadow",this.bindStart="{{",this.bindEnd="}}"}render(){return h({props:{hidden:!1}},i("slot",null))}componentDidRender(){const{el:s,bindStart:t,bindEnd:i,uniReplaced:r}=this,n={el:s,state:o(this.state),bindStart:t,bindEnd:i,uniReplaced:r};e(this.state)&&(this.inactive?this.activate&&p(n,this.excludes,!0):p(n,this.excludes,this.clean)),setTimeout((()=>this.activate=!1))}componentDidLoad(){n("udk")}get el(){return r(this)}};export{a as U}