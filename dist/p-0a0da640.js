import{r as t,h as s,g as i}from"./p-0973bc72.js";import{U as e}from"./p-34f55e9a.js";import{u as r}from"./p-e282851d.js";import{b as a}from"./p-6c1d584d.js";const o=class{constructor(s){t(this,s),this.inactive=!1,this.once=!1,this.top=!1,this.type="memory",this.feature="uni.store",this.separator=".",this.hidden=!1}uniDisplayInactiveHandler(t){this.hidden=t.detail}render(){const{type:t,feature:i,separator:r,path:o,hidden:p}=this;return e({props:{hidden:p}},s("uni-event",{inactive:this.inactive,once:this.once,capture:!0,listen:a({type:t,feature:i,separator:r,path:o}),prop:"activate",value:!0},s("uni-store-get",{top:this.top,type:this.type,feature:this.feature,separator:this.separator,path:this.path,invert:!0,equal:this.equal,noEqual:this.noEqual,selector:"uni-display",prop:"inactive"},s("uni-display",{inactive:!0},s("slot",null)))))}componentDidLoad(){r("udk")}get el(){return i(this)}};export{o as U}