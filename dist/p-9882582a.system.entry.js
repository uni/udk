System.register(["./p-07f85171.system.js","./p-1e736fd3.system.js","./p-2dea2bc9.system.js"],(function(t){"use strict";var e,n,i,s,r;return{setters:[function(t){e=t.r;n=t.h;i=t.g},function(t){s=t.u},function(t){r=t.U}],execute:function(){var o=t("uni_load_repeat",function(){function t(t){e(this,t);this.strict=false;this.multi=false;this.propagate=false;this.bindStart="{{";this.bindEnd="}}"}t.prototype.render=function(){return r(n("uni-event",{once:!this.multi,listen:"uniLoadSuccess",selector:"uni-repeat",prop:"state",stop:!this.propagate},n("uni-load",{url:this.url},n("uni-repeat",{strict:this.strict,selector:this.selector,bindStart:this.bindStart,bindEnd:this.bindEnd},n("slot",null)))))};t.prototype.componentDidLoad=function(){s("udk")};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}())}}}));