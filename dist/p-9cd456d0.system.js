var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),a=0,e=0;e<n;e++)for(var o=arguments[e],i=0,s=o.length;i<s;i++,a++)r[a]=o[i];return r};System.register(["./p-4084aa6f.system.js","./p-5fc59fe9.system.js","./p-a821f331.system.js"],(function(t){"use strict";var e,n,r,a;return{setters:[function(t){e=t.r;n=t.g},function(t){r=t.a},function(t){a=t.u}],execute:function(){function o(t,e){var n=e||this,a=n.path,o=n.params,i=n.noParams,s=n.prevent,c=n.reload;var f=new URLSearchParams(window.top.location.search);var p=new URLSearchParams(o);if(t&&s){t.preventDefault()}if(r(o)){p.forEach((function(t,e){f.set(e,t)}))}if(r(i)){i.split("&").forEach((function(t){f.delete(t)}))}var h=window.top.location;var l=h.search.includes("?")?h.search:"?"+h.search;var u=""+(__spreadArrays(f.keys()).length>0?"?":"")+f.toString();if(a!==h.pathname||l!=="?"+f.toString()){window.top.history.pushState({},"",h.protocol+"//"+h.host+(a||h.pathname)+u);window.top.dispatchEvent(new PopStateEvent("popstate",{state:{params:o,noParams:i}}))}if(c){window.location.reload()}}var i=t("U",function(){function t(t){e(this,t);this.prevent=false;this.reload=false;this.bindStart="{{";this.bindEnd="}}"}t.prototype.connectedCallback=function(){this.el.addEventListener("click",o)};t.prototype.componentDidLoad=function(){a("uni-router-link","do")};t.prototype.disconnectedCallback=function(){this.el.removeEventListener("click",o)};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return t}())}}}));