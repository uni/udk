import{r as t,c as s,h as e,g as i}from"./p-f62ce9c5.js";import{U as h}from"./p-12df985d.js";import{u as r}from"./p-e282851d.js";import{u as a}from"./p-9788d0ae.js";let o=class{constructor(e){t(this,e),this.uniRendered=s(this,"uniRendered",7),this.inactive=!1,this.text=!1,this.head=!1,this.scripts=!1,this.templatePart=!1,this.place="end"}componentWillLoad(){this.tmp=this.template||this.el.querySelector("template")||this.el.querySelector("uni-render-template")||this.el.querySelector("[uni-render]")||document.querySelector(this.selector)}render(){return h(e("slot",null))}componentDidRender(){this.template&&(this.tmp=this.template);const t=this.insertSelector?this.el.querySelector(this.insertSelector):this.el;if((this.inactive||this.tmp||this.value)&&(t.innerHTML=""),!this.inactive){const{text:s,head:e,scripts:i,templatePart:h,place:r,value:o,tmp:n}=this;a({el:t,text:s,head:e,scripts:i,templatePart:h,place:r,value:o,tmp:n},this.uniRendered)}}componentDidLoad(){r("udk")}get el(){return i(this)}};export{o as U}