import{r as t,c as e,g as s}from"./p-dcd71f28.js";import{u as i}from"./p-78249524.js";const r={before:"beforebegin",start:"afterebegin",end:"beforeend",after:"afterend"},a=class{constructor(s){t(this,s),this.uniRendered=e(this,"uniRendered",7),this.inactive=!1,this.text=!1,this.head=!1,this.scripts=!1,this.templatePart=!1,this.place="end"}componentWillLoad(){this.tmp=this.template||(this.selector?document.querySelector(this.selector):this.el.querySelector("template"))}componentDidRender(){this.template&&(this.tmp=this.template);const t=this.insertSelector?this.el.querySelector(this.insertSelector):this.el;if((this.inactive||this.tmp||this.value)&&(t.innerHTML=""),!this.inactive){const{text:e,head:s,scripts:i,templatePart:a,place:h,value:n,tmp:o}=this;!function(t,e){let{el:s,text:i,head:a,scripts:h,templatePart:n,place:o,value:p,tmp:c}=t;if(c){if(s.appendChild(c.content.cloneNode(!0)),i){const t=s.innerHTML;s.innerHTML="",s.insertAdjacentText(r[o],t.trim().replace("\x3c!----\x3e",""))}setTimeout((()=>e.emit(!0)))}else if(p){if(!a&&p.includes("</body>")){let t=p.split("<body")[1].split("</body>")[0].split(">");t.shift(),p=t.join(">")}if(!h&&p.includes("</script")&&(p=p.split("<\/script>")[1]),n&&p.includes("<template uni-render-part>")){const t=p.split("<template uni-render-part>")[1].split("</template>");t.pop(),p=t.join("</template>")}i?s.insertAdjacentText(r[o],p.trim()):s.insertAdjacentHTML(r[o],p.trim()),setTimeout((()=>e.emit(!0)))}}({el:t,text:e,head:s,scripts:i,templatePart:a,place:h,value:n,tmp:o},this.uniRendered)}}componentDidLoad(){i("uni-render","cursor")}get el(){return s(this)}};export{a as U,r as a}