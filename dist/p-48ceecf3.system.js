System.register(["./p-956bcfb7.system.js","./p-8cc0c8df.system.js","./p-06e860d1.system.js","./p-a821f331.system.js","./p-f5fe9db5.system.js","./p-a6da3c7f.system.js"],(function(t){"use strict";var e,i,n,s,c,a,r,u,o;return{setters:[function(t){e=t.r;i=t.c;n=t.h;s=t.g},function(t){c=t.i},function(t){a=t.u},function(t){r=t.u},function(t){u=t.U},function(t){o=t.u}],execute:function(){var f=t("U",function(){function t(t){e(this,t);this.uniReplaced=i(this,"uniReplaced",7);this.inactive=false;this.activate=false;this.strict=false;this.clean=false;this.excludes="uni-replace, uni-replace-shadow";this.bindStart="{{";this.bindEnd="}}"}t.prototype.render=function(){var t={hidden:false};return u({props:t},n("slot",null))};t.prototype.componentDidRender=function(){var t=this;var e=this,i=e.el,n=e.bindStart,s=e.bindEnd,r=e.uniReplaced;var u={el:i,state:a(this.state),bindStart:n,bindEnd:s,uniReplaced:r};if(c(this.state)){if(!this.inactive){o(u,this.excludes,this.clean)}else if(this.activate){o(u,this.excludes,true)}}setTimeout((function(){return t.activate=false}))};t.prototype.componentDidLoad=function(){r("uni-replace-shadow","filter")};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});return t}())}}}));