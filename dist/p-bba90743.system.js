System.register(["./p-07f85171.system.js","./p-8cc0c8df.system.js","./p-06e860d1.system.js","./p-1e736fd3.system.js","./p-06b2e89f.system.js","./p-6272c681.system.js"],(function(t){"use strict";var e,i,n,s,c,r,u,a,o;return{setters:[function(t){e=t.r;i=t.c;n=t.h;s=t.g},function(t){c=t.i},function(t){r=t.u},function(t){u=t.u},function(t){a=t.U},function(t){o=t.u}],execute:function(){var f=t("U",function(){function t(t){e(this,t);this.uniReplaced=i(this,"uniReplaced",7);this.inactive=false;this.activate=false;this.strict=false;this.clean=false;this.excludes="uni-replace, uni-replace-shadow";this.bindStart="{{";this.bindEnd="}}"}t.prototype.render=function(){var t={hidden:false};return a({props:t},n("slot",null))};t.prototype.componentDidRender=function(){var t=this;var e=this,i=e.el,n=e.bindStart,s=e.bindEnd,u=e.uniReplaced;var a={el:i,state:r(this.state),bindStart:n,bindEnd:s,uniReplaced:u};if(c(this.state)){if(!this.inactive){o(a,this.excludes,this.clean)}else if(this.activate){o(a,this.excludes,true)}}setTimeout((function(){return t.activate=false}))};t.prototype.componentDidLoad=function(){u("udk")};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});return t}())}}}));