System.register(["./p-4084aa6f.system.js","./p-5e3f6742.system.js","./p-a821f331.system.js","./p-539b0d1f.system.js","./p-75b95d91.system.js"],(function(t){"use strict";var i,n,s,e,a,r,d;return{setters:[function(t){i=t.r;n=t.h},function(t){s=t.i;e=t.a},function(t){a=t.u},function(t){r=t.U},function(t){d=t.u}],execute:function(){var o=".uni-display-none{display:none!important}.uni-display-active{display:inherit}.uni-display-flex{display:-ms-flexbox!important;display:flex!important}";var p=t("U",function(){function t(t){i(this,t);this.inactive=false;this.flex=false;this.bindStart="{{";this.bindEnd="}}"}t.prototype.render=function(){var t=this.inactive||s(this.activeBind,this.bindStart,this.bindEnd)||e(this.inactiveBind,this.bindStart,this.bindEnd);var i={hidden:t};var a=d(!t,this.flex);return r({props:i},n("div",{class:a},n("slot",null)))};t.prototype.componentDidLoad=function(){a("uni-display-shadow","element")};return t}());p.style=o}}}));