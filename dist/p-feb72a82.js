import{r as t,h as s}from"./p-165e1107.js";import{u as o}from"./p-d16873c3.js";import{U as r}from"./p-12df985d.js";import{u as e}from"./p-e282851d.js";let i=class{constructor(s){t(this,s),this.shadow=!1,this.frame=!1,this.listen="popstate",this.dispatch="popstate",this.selector="uni-route, uni-route-shadow",this.tagPrevent="uni-router-link"}render(){return r(s("slot",null))}componentDidLoad(){e("udk"),window.top.addEventListener(this.listen,(t=>{const{state:s}=t,{selector:r,shadow:e,frame:i}=this;o({top:!0,shadow:e,frame:i,selector:r}).forEach((t=>{t.dispatchEvent(new PopStateEvent(this.dispatch,{state:s}))}))})),window.top.addEventListener("click",(t=>{var s,o;s=t.composedPath(),o=this.tagPrevent,s.filter((t=>t.localName===o)).length>0&&t.preventDefault()}))}};export{i as U}