System.register(["./p-07f85171.system.js","./p-1e736fd3.system.js","./p-2dea2bc9.system.js","./p-07f186e1.system.js"],(function(t){"use strict";var e,i,r,s,n,a;return{setters:[function(t){e=t.r;i=t.h;r=t.g},function(t){s=t.u},function(t){n=t.U},function(t){a=t.b}],execute:function(){var u=t("U",function(){function t(t){e(this,t);this.inactive=false;this.once=false;this.top=false;this.type="memory";this.feature="uni.store";this.separator="."}t.prototype.render=function(){var t=this,e=t.type,r=t.feature,s=t.separator,u=t.path;return n(i("uni-event",{inactive:this.inactive,once:this.once,capture:true,listen:a({type:e,feature:r,separator:s,path:u}),prop:"activate",value:true},i("uni-store-get",{top:this.top,type:this.type,feature:this.feature,separator:this.separator,path:this.path,invert:true,equal:this.equal,noEqual:this.noEqual,selector:"uni-display",prop:"inactive"},i("uni-display",{inactive:true},i("slot",null)))))};t.prototype.componentDidLoad=function(){s("udk")};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return t}())}}}));