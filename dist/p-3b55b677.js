import{r as t,h as s,g as i}from"./p-00d88981.js";import{U as e}from"./p-12df985d.js";import{u as r}from"./p-e282851d.js";let h=class{constructor(s){t(this,s),this.inactive=!1,this.activate=!1,this.multi=!1,this.ext=!1,this.text=!1,this.head=!1,this.scripts=!1,this.templatePart=!1,this.propagate=!1}render(){return e(s("uni-event",{once:!this.multi,listen:"uniLoadSuccess",prop:"value",stop:!this.propagate},s("uni-render",{text:this.text,head:this.head,scripts:this.scripts,templatePart:this.templatePart,insertSelector:"uni-load"},s("uni-load",{inactive:this.inactive,ext:this.ext,activate:this.activate,response:"text",url:this.url},s("slot",null)))))}componentDidLoad(){r("udk")}get el(){return i(this)}};export{h as U}