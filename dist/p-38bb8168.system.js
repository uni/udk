System.register(["./p-bada99c2.system.js","./p-3e4da347.system.js"],(function(e){"use strict";var t,i,n,r;return{setters:[function(e){t=e.r;i=e.c;n=e.g},function(e){r=e.u}],execute:function(){var s=e("a",{before:"beforebegin",start:"afterebegin",end:"beforeend",after:"afterend"});function a(e,t){var i=e.el,n=e.text,r=e.head,a=e.scripts,l=e.templatePart,p=e.place,c=e.value,o=e.tmp;if(o){i.appendChild(o.content?o.content.cloneNode(true):o);if(n){var u=i.innerHTML;i.innerHTML="";i.insertAdjacentText(s[p],u.trim().replace("\x3c!----\x3e",""))}setTimeout((function(){return t.emit(true)}))}else if(c){if(!r&&c.includes("</body>")){var d=c.split("<body")[1].split("</body>")[0].split(">");d.shift();c=d.join(">")}if(!a&&c.includes("</script")){c=c.split("<\/script>")[1]}if(l&&c.includes("<template uni-render-part>")){var f=c.split("<template uni-render-part>")[1].split("</template>");f.pop();c=f.join("</template>")}if(n){i.insertAdjacentText(s[p],c.trim())}else{i.insertAdjacentHTML(s[p],c.trim())}setTimeout((function(){return t.emit(true)}))}}var l=e("U",function(){function e(e){t(this,e);this.uniRendered=i(this,"uniRendered",7);this.inactive=false;this.text=false;this.head=false;this.scripts=false;this.templatePart=false;this.place="end"}e.prototype.componentWillLoad=function(){this.tmp=this.template||(this.selector?document.querySelector(this.selector):this.el.querySelector("template"))};e.prototype.componentDidRender=function(){if(this.template){this.tmp=this.template}var e=this.insertSelector?this.el.querySelector(this.insertSelector):this.el;if(this.inactive||this.tmp||this.value){e.innerHTML=""}if(!this.inactive){var t=this,i=t.text,n=t.head,r=t.scripts,s=t.templatePart,l=t.place,p=t.value,c=t.tmp;var o={el:e,text:i,head:n,scripts:r,templatePart:s,place:l,value:p,tmp:c};a(o,this.uniRendered)}};e.prototype.componentDidLoad=function(){r("udk")};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return e}())}}}));