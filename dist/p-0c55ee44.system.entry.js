System.register(["./p-4084aa6f.system.js","./p-a821f331.system.js","./p-2dea2bc9.system.js"],(function(t){"use strict";var e,n,i,r,s;return{setters:[function(t){e=t.r;n=t.h;i=t.g},function(t){r=t.u},function(t){s=t.U}],execute:function(){var o=t("uni_load_repeat",function(){function t(t){e(this,t);this.multi=false;this.bindStart="{{";this.bindEnd="}}";this.propagate=false}t.prototype.render=function(){return s(n("uni-event",{once:!this.multi,listen:"uniLoadSuccess",selector:"uni-repeat",prop:"value",stop:!this.propagate},n("uni-load",{url:this.url,bindStart:this.bindStart,bindEnd:this.bindEnd},n("uni-repeat",{selector:this.selector,bindStart:this.bindStart,bindEnd:this.bindEnd},n("slot",null)))))};t.prototype.componentDidLoad=function(){r("uni-load-repeat","next")};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}())}}}));