(function(t){function e(e){for(var o,l,a=e[0],i=e[1],s=e[2],d=0,b=[];d<a.length;d++)l=a[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&b.push(r[l][0]),r[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(e);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},r={app:0},c=[];function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="https://a62527776a.github.io/yifanshangmoniqi/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var u=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"318c":function(t,e,n){"use strict";n("9b43")},8696:function(t,e,n){},"9b43":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(t,e,n,r,c,l){var a=Object(o["k"])("HelloWorld");return Object(o["g"])(),Object(o["c"])(a,{msg:"Welcome to Your Vue.js + TypeScript App"})}n("b0c0");var c=function(t){return Object(o["i"])("data-v-c30da9e4"),t=t(),Object(o["h"])(),t},l={class:"hello"},a=c((function(){return Object(o["e"])("h2",null,"一番赏模拟器",-1)})),i=["onClick"],s=c((function(){return Object(o["e"])("br",null,null,-1)})),u=c((function(){return Object(o["e"])("br",null,null,-1)}));function d(t,e,n,r,c,d){return Object(o["g"])(),Object(o["d"])("div",l,[a,Object(o["e"])("div",null,"总计："+Object(o["l"])(r.a.total)+"剩余："+Object(o["l"])(r.a.len),1),(Object(o["g"])(!0),Object(o["d"])(o["a"],null,Object(o["j"])(r.a.slots,(function(t,e){return Object(o["g"])(),Object(o["d"])("div",{key:e},[Object(o["e"])("a",null,Object(o["l"])(t.name)+" "+Object(o["l"])(t.good.name),1),Object(o["f"])("x"+Object(o["l"])(t.count)+" ",1),Object(o["e"])("span",null,"几率："+Object(o["l"])(r.a.scale(t.type).scaleStr),1),Object(o["e"])("i",{onClick:function(e){return r.addItem(t.type)}},"   + 添加",8,i)])})),128)),Object(o["e"])("div",null,[Object(o["e"])("a",null,Object(o["l"])(r.a.last.name)+" "+Object(o["l"])(r.a.last.good.name),1)]),Object(o["e"])("div",null,[s,Object(o["e"])("div",null,"箱子初始预期：预期出手办概率"+Object(o["l"])(r.a.lotteryDraw.scaleStr)+" 预期每"+Object(o["l"])(r.a.lotteryDraw.everyOutGood)+"发出一手办",1),Object(o["e"])("div",null,"每次不出手办将叠加几率"+Object(o["l"])(r.a.lotteryDraw.everyOutGoodScaleStr),1)]),Object(o["e"])("div",null," 当前中手办叠加几率 "+Object(o["l"])(r.a.lotteryDraw.GKScaleStr)+" 每次抽完后将按照叠加几率增减 ",1),u,Object(o["e"])("button",{onClick:e[0]||(e[0]=function(){return r.loop80&&r.loop80.apply(r,arguments)}),type:"button",class:"btn btn-primary"},"来一发"),Object(o["e"])("button",{onClick:e[1]||(e[1]=function(){return r.refresh&&r.refresh.apply(r,arguments)}),type:"button",class:"btn btn-primary"},"刷新"),Object(o["e"])("div",null,[(Object(o["g"])(!0),Object(o["d"])(o["a"],null,Object(o["j"])(r.a.lotteryDraw.records,(function(t,e){return Object(o["g"])(),Object(o["d"])("div",{key:e},Object(o["l"])(t),1)})),128))])])}var b,h,f=n("a1e9"),y=n("b85c"),O=n("d4ec"),p=n("bee2");n("d3b7"),n("25f0"),n("4ec9"),n("3ca3"),n("ddb0"),n("159b"),n("b680"),n("99af");(function(t){t["时尚小垃圾"]="时尚小垃圾",t["手办"]="手办"})(b||(b={})),function(t){t[t["one"]=1]="one",t[t["three"]=3]="three",t[t["five"]=5]="five",t["all"]="all"}(h||(h={}));var j,v=function(){function t(e){Object(O["a"])(this,t),this.goodType=e}return Object(p["a"])(t,[{key:"name",get:function(){return this.goodType.toString()}}]),t}();(function(t){t["A"]="A",t["B"]="B",t["C"]="C",t["D"]="D",t["E"]="E",t["F"]="F",t["G"]="G",t["H"]="H",t["I"]="I",t["J"]="J",t["K"]="K",t["L"]="L",t["M"]="M",t["N"]="N",t["Last"]="Last"})(j||(j={}));var w=function(){function t(e,n,o){Object(O["a"])(this,t),this.type=e,this.total=o,this.count=o,this.good=n}return Object(p["a"])(t,[{key:"name",get:function(){return this.type+"赏"}}]),t}(),g=function(){function t(){Object(O["a"])(this,t),this._slots=new Map,this.last=new w(j.Last,new v(b.手办),1),this.lotteryDraw=new S,this.len=0,this.total=0,this.GKLen=0,this.lajiLen=0,this._slots.set(j.A,new w(j.A,new v(b.手办),1)),this._slots.set(j.B,new w(j.B,new v(b.手办),1)),this._slots.set(j.C,new w(j.C,new v(b.手办),1)),this._slots.set(j.D,new w(j.D,new v(b.手办),2)),this._slots.set(j.E,new w(j.E,new v(b.手办),2)),this._slots.set(j.F,new w(j.F,new v(b.时尚小垃圾),28)),this._slots.set(j.G,new w(j.G,new v(b.时尚小垃圾),17)),this._slots.set(j.H,new w(j.H,new v(b.时尚小垃圾),28)),this.numbers()}return Object(p["a"])(t,[{key:"numbers",value:function(){var t=this,e=0,n=0;this.GKLen=0,this.lajiLen=0,this._slots.forEach((function(o){n+=o.total,o.count>0&&(e+=o.count,o.good.goodType==b.手办?t.GKLen+=o.count:t.lajiLen+=o.count)})),this.len=e,this.total=n,this.expectitionGKExec()}},{key:"slots",get:function(){return this._slots.values()}},{key:"addItem",value:function(t){var e=this._slots.get(t);e&&(e.count+=1,e.total+=1),this.numbers()}},{key:"scale",value:function(t){var e=this._slots.get(t);if(e){var n=e.count/this.len;return{scale:n,scaleStr:(100*n).toFixed(2)+"%"}}return{scale:0,scaleStr:"0%"}}},{key:"lotteryDrawFn",value:function(){var t=this.lotteryDraw.lottry(this.slots,this.GKLen,this.lajiLen);t&&t.type&&(this.delGoods(t.type),this.lotteryDraw.updateGKScale(t,this.lotteryDraw.everyOutGoodScale),this.numbers())}},{key:"delGoods",value:function(t){var e=this._slots.get(t);e&&(e.count-=1,this.lotteryDraw.records.unshift("您抽中了".concat(e.name).concat(e.good.name)))}},{key:"expectitionGKExec",value:function(){var t=0,e=0;this._slots.forEach((function(n){n.good.goodType==b.手办&&(t+=n.count),e+=n.count}));var n=t/e;this.lotteryDraw.updateScale(e,n)}}]),t}(),S=function(){function t(){Object(O["a"])(this,t),this.GKScale=0,this.records=[],this.scale=0,this.scaleStr="",this.everyOutGood=0,this.everyOutGoodScale=0,this.everyOutGoodScaleStr=""}return Object(p["a"])(t,[{key:"GKScaleStr",get:function(){return(100*this.GKScale).toFixed(2)+"%"}},{key:"updateGKScale",value:function(t,e){t.good.goodType==b.手办?this.GKScale-=1-e/100:this.GKScale+=e/100}},{key:"lottry",value:function(t,e,n){var o,r,c,l=Math.random(),a=0,i=e+n,s=Object(y["a"])(t);try{for(s.s();!(c=s.n()).done;){var u=c.value;if(0!=u.count){if(a+=u.count/i,0!=this.GKScale){var d=0;u.good.goodType==b.手办?(d=this.GKScale/e,a+=d):(d=this.GKScale/n,a-=d)}if(console.log("scale",a,l),r=u,!(a<=0)&&l<=a){o=u;break}}}}catch(h){s.e(h)}finally{s.f()}return l>a&&(o=r),console.log(o),o}},{key:"updateScale",value:function(t,e){this.scale=e,this.scaleStr=(100*e).toFixed(2)+"%",this.everyOutGood=t/(t*e),this.everyOutGoodScale=100/this.everyOutGood,this.everyOutGoodScaleStr=this.everyOutGoodScale+"%"}}]),t}(),G={setup:function(){var t=Object(f["l"])(new g),e=function(e){t.addItem(e)},n=function(){window.location.reload()},o=function(){for(var e=0;e<80;e++)t.lotteryDrawFn()};return{msg:"dwqqwd",a:t,addItem:e,refresh:n,loop80:o}}},m=(n("e21e"),n("6b0d")),k=n.n(m);const _=k()(G,[["render",d],["__scopeId","data-v-c30da9e4"]]);var K=_,D={name:"",components:{HelloWorld:K},setup:function(){}};n("318c");const x=k()(D,[["render",r]]);var L=x;Object(o["b"])(L).mount("#app")},e21e:function(t,e,n){"use strict";n("8696")}});
//# sourceMappingURL=app.4ae3bbdc.js.map