(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsC-link-index"],{"01f3":function(t,e,n){var i=n("d7bc");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("89d6066a",i,!0,{sourceMap:!1,shadowMode:!1})},"0664":function(t,e,n){"use strict";n.r(e);var i=n("6dfc"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"2c44":function(t,e,n){"use strict";var i=n("6f532"),o=n.n(i);o.a},6006:function(t,e,n){"use strict";n.r(e);var i=n("7b6e"),o=n("9c66");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("6d46");var u,s=n("f0c5"),a=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"2f5c83fe",null,!1,i["a"],u);e["default"]=a.exports},"67da":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uLink:n("6006").default,uSubsection:n("fa67").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-demo"},[n("v-uni-view",{staticClass:"u-demo-wrap"},[n("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),n("v-uni-view",{staticClass:"u-demo-area"},[n("u-link",{attrs:{color:t.color,"font-size":t.fontSize,"under-line":t.underLine,href:t.href}},[t._v("点此链接，跳转uView官网")])],1)],1),n("v-uni-view",{staticClass:"u-config-wrap"},[n("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),n("v-uni-view",{staticClass:"u-config-item"},[n("v-uni-view",{staticClass:"u-item-title"},[t._v("下划线")]),n("u-subsection",{attrs:{list:["显示","隐藏"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.underLineChange.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"u-config-item"},[n("v-uni-view",{staticClass:"u-item-title"},[t._v("自定义样式")]),n("u-subsection",{attrs:{current:"1",list:["是","否"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.styleChange.apply(void 0,arguments)}}})],1)],1)],1)},r=[]},"6d46":function(t,e,n){"use strict";var i=n("e55e"),o=n.n(i);o.a},"6dfc":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{href:"https://www.uviewui.com",underLine:!0,fontSize:28,color:"#2979ff"}},methods:{underLineChange:function(t){this.underLine=0==t},styleChange:function(t){0==t?(this.color=this.$u.color["tipsColor"],this.fontSize=34):(this.color=this.$u.color["primary"],this.fontSize=28)}}};e.default=i},"6f532":function(t,e,n){var i=n("f839");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("1b8b4b48",i,!0,{sourceMap:!1,shadowMode:!1})},7488:function(t,e,n){"use strict";n.r(e);var i=n("67da"),o=n("0664");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("2c44");var u,s=n("f0c5"),a=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"d8871a06",null,!1,i["a"],u);e["default"]=a.exports},"7b6e":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",{staticClass:"u-link",style:{color:t.color,fontSize:t.fontSize+"rpx",borderBottom:t.underLine?"1px solid "+(t.lineColor?t.lineColor:t.color):"none",paddingBottom:t.underLine?"0rpx":"0"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.openLink.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},"7be1":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-subsection",style:[t.subsectionStyle]},[t._l(t.listInfo,(function(e,i){return n("v-uni-view",{key:i,staticClass:"u-item u-line-1",class:[t.noBorderRight(i),"u-item-"+i],style:[t.itemStyle(i)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(i)}}},[n("v-uni-view",{staticClass:"u-item-text u-line-1",style:[t.textStyle(i)]},[t._v(t._s(e.name))])],1)})),n("v-uni-view",{staticClass:"u-item-bg",style:[t.itemBarStyle]})],2)},r=[]},"7e58":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-link[data-v-2f5c83fe]{line-height:1}',""]),t.exports=e},"87fb":function(t,e,n){"use strict";n.r(e);var i=n("a077"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"9c66":function(t,e,n){"use strict";n.r(e);var i=n("d9e0"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},a077:function(t,e,n){"use strict";n("99af"),n("d81d"),n("a9e3"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-subsection",props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0}},watch:{current:{immediate:!0,handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)}}},created:function(){this.listInfo=this.list.map((function(t,e){if("object"!=typeof t){var n={width:0,name:t};return n}return t.width=0,t}))},computed:{noBorderRight:function(){var t=this;return function(e){if("subsection"==t.mode){var n="";return e<t.list.length-1&&(n+=" u-none-border-right"),0==e&&(n+=" u-item-first"),e==t.list.length-1&&(n+=" u-item-last"),n}}},textStyle:function(){var t=this;return function(e){var n={};return"subsection"==t.mode?e==t.currentIndex?n.color="#ffffff":n.color=t.activeColor:e==t.currentIndex?n.color=t.activeColor:n.color=t.inactiveColor,e==t.currentIndex&&t.bold&&(n.fontWeight="bold"),n.fontSize=t.fontSize+"rpx",n}},itemStyle:function(){var t=this;return function(e){var n={};return"subsection"==t.mode&&(n.borderColor=t.activeColor,n.borderWidth="1px",n.borderStyle="solid"),n}},subsectionStyle:function(){var t={};return t.height=uni.upx2px(this.height)+"px","button"==this.mode&&(t.backgroundColor=this.bgColor,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"px")),t},itemBarStyle:function(){var t={};return t.backgroundColor=this.activeColor,t.zIndex=1,"button"==this.mode&&(t.backgroundColor=this.buttonColor,t.borderRadius="".concat(this.borderRadius,"px"),t.bottom="".concat(this.buttonPadding,"px"),t.height=uni.upx2px(this.height)-2*this.buttonPadding+"px",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var e=this;"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0==t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){e.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)))},getTabsInfo:function(){for(var t=this,e=uni.createSelectorQuery().in(this),n=0;n<this.list.length;n++)e.select(".u-item-"+n).boundingClientRect();e.exec((function(e){e.length||setTimeout((function(){t.getTabsInfo()}),10),e.map((function(e,n){t.listInfo[n].width=e.width})),("subsection"==t.mode||"button"==t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this;this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";var e=0;this.listInfo.map((function(n,i){i<t.currentIndex&&(e+=n.width)})),"subsection"==this.mode?this.itemBgStyle.left=e+"px":"button"==this.mode&&(this.itemBgStyle.left=e+this.buttonPadding+"px")}}};e.default=i},d7bc:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-subsection[data-v-05edd86e]{display:flex;flex-direction:row;align-items:center;overflow:hidden;position:relative}.u-item[data-v-05edd86e]{flex:1;text-align:center;font-size:%?26?%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;color:#303133;padding:0 %?6?%}.u-item-bg[data-v-05edd86e]{background-color:#2979ff;position:absolute;z-index:-1}.u-none-border-right[data-v-05edd86e]{border-right:none!important}.u-item-first[data-v-05edd86e]{border-top-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.u-item-last[data-v-05edd86e]{border-top-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.u-item-text[data-v-05edd86e]{transition:all .35s;color:#303133;display:flex;flex-direction:row;align-items:center;position:relative;z-index:3}',""]),t.exports=e},d833:function(t,e,n){"use strict";var i=n("01f3"),o=n.n(i);o.a},d9e0:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-link",props:{color:{type:String,default:"#2979ff"},fontSize:{type:[String,Number],default:28},underLine:{type:Boolean,default:!1},href:{type:String,default:""},mpTips:{type:String,default:"链接已复制，请在浏览器打开"},lineColor:{type:String,default:""}},methods:{openLink:function(){window.open(this.href)}}};e.default=i},e55e:function(t,e,n){var i=n("7e58");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("4c48244b",i,!0,{sourceMap:!1,shadowMode:!1})},f839:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */',""]),t.exports=e},fa67:function(t,e,n){"use strict";n.r(e);var i=n("7be1"),o=n("87fb");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("d833");var u,s=n("f0c5"),a=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"05edd86e",null,!1,i["a"],u);e["default"]=a.exports}}]);