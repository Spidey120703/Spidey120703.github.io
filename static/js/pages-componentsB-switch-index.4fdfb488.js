(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsB-switch-index"],{"01f3":function(t,e,i){var n=i("d7bc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("89d6066a",n,!0,{sourceMap:!1,shadowMode:!1})},"45df":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uSwitch:i("4bfe").default,uSubsection:i("fa67").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-demo"},[i("v-uni-view",{staticClass:"u-demo-wrap"},[i("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),i("v-uni-view",{staticClass:"u-demo-area"},[i("u-switch",{attrs:{loading:t.loading,size:t.size,"active-color":t.activeColor,disabled:t.disabled,activeValue:100,inactiveValue:1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)],1),i("v-uni-view",{staticClass:"u-config-wrap"},[i("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("状态")]),i("u-subsection",{attrs:{list:["关闭","打开"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.modelChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("颜色")]),i("u-subsection",{attrs:{list:["primary","error","warning","success"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.colorChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("尺寸(单位rpx)")]),i("u-subsection",{attrs:{current:"1",list:["40","60","80"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sizeChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("加载中")]),i("u-subsection",{attrs:{list:["否","是"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.loadingChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("禁用")]),i("u-subsection",{attrs:{current:"1",list:["是","否"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.disabledChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("异步控制")]),i("u-subsection",{attrs:{list:["关闭","打开"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.asyncChange.apply(void 0,arguments)}}})],1)],1)],1)},s=[]},"7be1":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-subsection",style:[t.subsectionStyle]},[t._l(t.listInfo,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-item u-line-1",class:[t.noBorderRight(n),"u-item-"+n],style:[t.itemStyle(n)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(n)}}},[i("v-uni-view",{staticClass:"u-item-text u-line-1",style:[t.textStyle(n)]},[t._v(t._s(e.name))])],1)})),i("v-uni-view",{staticClass:"u-item-bg",style:[t.itemBarStyle]})],2)},s=[]},"87fb":function(t,e,i){"use strict";i.r(e);var n=i("a077"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},a077:function(t,e,i){"use strict";i("99af"),i("d81d"),i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-subsection",props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0}},watch:{current:{immediate:!0,handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)}}},created:function(){this.listInfo=this.list.map((function(t,e){if("object"!=typeof t){var i={width:0,name:t};return i}return t.width=0,t}))},computed:{noBorderRight:function(){var t=this;return function(e){if("subsection"==t.mode){var i="";return e<t.list.length-1&&(i+=" u-none-border-right"),0==e&&(i+=" u-item-first"),e==t.list.length-1&&(i+=" u-item-last"),i}}},textStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode?e==t.currentIndex?i.color="#ffffff":i.color=t.activeColor:e==t.currentIndex?i.color=t.activeColor:i.color=t.inactiveColor,e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),i.fontSize=t.fontSize+"rpx",i}},itemStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode&&(i.borderColor=t.activeColor,i.borderWidth="1px",i.borderStyle="solid"),i}},subsectionStyle:function(){var t={};return t.height=uni.upx2px(this.height)+"px","button"==this.mode&&(t.backgroundColor=this.bgColor,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"px")),t},itemBarStyle:function(){var t={};return t.backgroundColor=this.activeColor,t.zIndex=1,"button"==this.mode&&(t.backgroundColor=this.buttonColor,t.borderRadius="".concat(this.borderRadius,"px"),t.bottom="".concat(this.buttonPadding,"px"),t.height=uni.upx2px(this.height)-2*this.buttonPadding+"px",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var e=this;"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0==t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){e.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)))},getTabsInfo:function(){for(var t=this,e=uni.createSelectorQuery().in(this),i=0;i<this.list.length;i++)e.select(".u-item-"+i).boundingClientRect();e.exec((function(e){e.length||setTimeout((function(){t.getTabsInfo()}),10),e.map((function(e,i){t.listInfo[i].width=e.width})),("subsection"==t.mode||"button"==t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this;this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";var e=0;this.listInfo.map((function(i,n){n<t.currentIndex&&(e+=i.width)})),"subsection"==this.mode?this.itemBgStyle.left=e+"px":"button"==this.mode&&(this.itemBgStyle.left=e+this.buttonPadding+"px")}}};e.default=n},b3a1:function(t,e,i){var n=i("c88b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("02de29ee",n,!0,{sourceMap:!1,shadowMode:!1})},c652:function(t,e,i){"use strict";i.r(e);var n=i("45df"),o=i("d1cb");for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("e364");var a,u=i("f0c5"),r=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"0d601f9e",null,!1,n["a"],a);e["default"]=r.exports},c88b:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */',""]),t.exports=e},d014:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{checked:!1,activeColor:"#2979ff",size:50,loading:!1,disabled:!1}},methods:{modelChange:function(t){this.checked=!!t},colorChange:function(t){var e=0==t?"primary":1==t?"error":2==t?"warning":"success";this.activeColor=this.$u.color[e]},sizeChange:function(t){this.size=0==t?"40":1==t?"60":"80"},loadingChange:function(t){this.loading=!!t},disabledChange:function(t){this.disabled=0==t},asyncChange:function(t){var e=this;if(this.checked&&1==t)this.$u.toast("请先关闭选择器");else if(this.checked||0!=t){var i=0==t?"是否要关闭？":"是否要打开？";this.loading=!0;var n=this.checked;this.checked=!0,uni.showModal({title:"提示",content:i,complete:function(t){e.loading=!1,t.confirm?e.checked=!n:e.checked=!!n}})}else this.$u.toast("请先打开选择器")},change:function(t){}}};e.default=n},d1cb:function(t,e,i){"use strict";i.r(e);var n=i("d014"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},d7bc:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-subsection[data-v-05edd86e]{display:flex;flex-direction:row;align-items:center;overflow:hidden;position:relative}.u-item[data-v-05edd86e]{flex:1;text-align:center;font-size:%?26?%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;color:#303133;padding:0 %?6?%}.u-item-bg[data-v-05edd86e]{background-color:#2979ff;position:absolute;z-index:-1}.u-none-border-right[data-v-05edd86e]{border-right:none!important}.u-item-first[data-v-05edd86e]{border-top-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.u-item-last[data-v-05edd86e]{border-top-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.u-item-text[data-v-05edd86e]{transition:all .35s;color:#303133;display:flex;flex-direction:row;align-items:center;position:relative;z-index:3}',""]),t.exports=e},d833:function(t,e,i){"use strict";var n=i("01f3"),o=i.n(n);o.a},e364:function(t,e,i){"use strict";var n=i("b3a1"),o=i.n(n);o.a},fa67:function(t,e,i){"use strict";i.r(e);var n=i("7be1"),o=i("87fb");for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("d833");var a,u=i("f0c5"),r=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"05edd86e",null,!1,n["a"],a);e["default"]=r.exports}}]);