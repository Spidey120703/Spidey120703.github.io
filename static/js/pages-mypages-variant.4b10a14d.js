(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mypages-variant"],{"0a7b":function(e,n,t){"use strict";t("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"u-th",props:{width:{type:[Number,String],default:""}},data:function(){return{thStyle:{}}},created:function(){this.parent=!1},mounted:function(){if(this.parent=this.$u.$parent.call(this,"u-table"),this.parent){var e={};this.width&&(e.flex="0 0 ".concat(this.width)),e.textAlign=this.parent.align,e.padding=this.parent.padding,e.borderBottom="solid 1px ".concat(this.parent.borderColor),e.borderRight="solid 1px ".concat(this.parent.borderColor),Object.assign(e,this.parent.style),this.thStyle=e}}};n.default=r},"0cfb8":function(e,n,t){"use strict";t("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"},searchIcon:{type:String,default:"search"}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(e){this.$emit("input",e),this.$emit("change",e)},value:{immediate:!0,handler:function(e){this.keyword=e}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(e){this.keyword=e.detail.value},clear:function(){var e=this;this.keyword="",this.$nextTick((function(){e.$emit("clear")}))},search:function(e){this.$emit("search",e.detail.value);try{uni.hideKeyboard()}catch(e){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(e){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var e=this;setTimeout((function(){e.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")}}};n.default=r},"0dcc":function(e,n,t){var r=t("24fb");n=r(!1),n.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-search[data-v-05573061]{display:flex;flex-direction:row;align-items:center;flex:1}.u-content[data-v-05573061]{display:flex;flex-direction:row;align-items:center;padding:0 %?18?%;flex:1}.u-clear-icon[data-v-05573061]{display:flex;flex-direction:row;align-items:center}.u-input[data-v-05573061]{flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-05573061]{width:%?40?%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;border-radius:50%}.u-placeholder-class[data-v-05573061]{color:#909399}.u-action[data-v-05573061]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-05573061]{width:%?80?%;margin-left:%?10?%}',""]),e.exports=n},"35ca":function(e,n,t){var r=t("24fb");n=r(!1),n.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-navbar[data-v-1d7f90d0]{width:100%}.u-navbar-fixed[data-v-1d7f90d0]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-1d7f90d0]{width:100%}.u-navbar-inner[data-v-1d7f90d0]{display:flex;flex-direction:row;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-1d7f90d0]{display:flex;flex-direction:row;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-1d7f90d0]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-1d7f90d0]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-1d7f90d0]{flex:1}.u-title[data-v-1d7f90d0]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-1d7f90d0]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.u-slot-content[data-v-1d7f90d0]{flex:1;display:flex;flex-direction:row;align-items:center}',""]),e.exports=n},"432e":function(e,n,t){"use strict";t.r(n);var r=t("0cfb8"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=i.a},"53ca":function(e,n,t){"use strict";t.r(n);var r=t("c736"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=i.a},5555:function(e,n,t){"use strict";var r=t("a674"),i=t.n(r);i.a},"71d0":function(e,n,t){"use strict";var r=t("73b8"),i=t.n(r);i.a},"73b8":function(e,n,t){var r=t("0dcc");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=t("4f06").default;i("64186996",r,!0,{sourceMap:!1,shadowMode:!1})},"8cfb":function(e,n,t){var r=t("24fb");n=r(!1),n.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-th[data-v-4d2c4dbd]{display:flex;flex-direction:row;flex-direction:column;flex:1;justify-content:center;font-size:%?28?%;color:#303133;font-weight:700;background-color:#f5f6f8}',""]),e.exports=n},"8ee9":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var r={uNavbar:t("df30").default,uSearch:t("ee45").default,uTable:t("b298").default,uTr:t("6c4f").default,uTh:t("b1fb").default,uTd:t("6711").default},i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("u-navbar",{attrs:{"is-back":0!=e.keyword.length}},[t("v-uni-view",{style:{padding:0==e.keyword.length?"0rpx 8vw":"",width:0==e.keyword.length?"100vw":"80vw"}},[t("u-search",{attrs:{showAction:!1},on:{clear:function(n){arguments[0]=n=e.$handleEvent(n),e.keyword0=e.keyword=""}},model:{value:e.keyword0,callback:function(n){e.keyword0=n},expression:"keyword0"}})],1)],1),t("u-table",[e.isH5?t("v-uni-scroll-view",{attrs:{"scroll-x":!0,"scroll-left":e.titleOffsetLeft},on:{scroll:function(n){arguments[0]=n=e.$handleEvent(n),e.titleScrolling.apply(void 0,arguments)}}},[t("u-tr",{ref:"title"},[t("u-th",{attrs:{width:"42px"}},[e._v("序号")]),t("u-th",{attrs:{width:"128px"}},[e._v("词义")]),t("u-th",{attrs:{width:"128px"}},[e._v("原型")]),t("u-th",{attrs:{width:"128px"}},[e._v("过去式")]),t("u-th",{attrs:{width:"128px"}},[e._v("过去分词")]),t("u-th",{attrs:{width:"128px"}},[e._v("现在分词")])],1)],1):e._e(),t("v-uni-scroll-view",{style:e.scrollStyle,attrs:{"scroll-x":!0,"scroll-y":!0,"scroll-left":e.contentOffsetLeft},on:{scroll:function(n){arguments[0]=n=e.$handleEvent(n),e.contentScrolling.apply(void 0,arguments)}}},[e.isH5?e._e():t("u-tr",{ref:"title"},[t("u-th",{attrs:{width:"42px"}},[e._v("序号")]),t("u-th",{attrs:{width:"128px"}},[e._v("词义")]),t("u-th",{attrs:{width:"128px"}},[e._v("原型")]),t("u-th",{attrs:{width:"128px"}},[e._v("过去式")]),t("u-th",{attrs:{width:"128px"}},[e._v("过去分词")]),t("u-th",{attrs:{width:"128px"}},[e._v("现在分词")])],1),e._l(e.words.filter((function(n){return n.id==e.keyword||n.mean.includes(e.keyword)||n.verb.includes(e.keyword)||n.verb_ed.includes(e.keyword)||n.verb_en.includes(e.keyword)||n.verb_ing.includes(e.keyword)})),(function(n,r){return t("u-tr",{key:r},[t("u-td",{attrs:{width:"42px"}},[e._v(e._s(n.id))]),t("u-td",{attrs:{width:"128px"}},[e._v(e._s(n.mean))]),t("u-td",{attrs:{width:"128px"}},[e._v(e._s(n.verb))]),t("u-td",{attrs:{width:"128px"}},[e._v(e._s(n.verb_ed))]),t("u-td",{attrs:{width:"128px"}},[e._v(e._s(n.verb_en))]),t("u-td",{attrs:{width:"128px"}},[e._v(e._s(n.verb_ing))])],1)}))],2)],1)],1)},a=[]},a674:function(e,n,t){var r=t("35ca");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=t("4f06").default;i("4f95e210",r,!0,{sourceMap:!1,shadowMode:!1})},b1fb:function(e,n,t){"use strict";t.r(n);var r=t("f3a2"),i=t("e2d5");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("b917");var d,o=t("f0c5"),v=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"4d2c4dbd",null,!1,r["a"],d);n["default"]=v.exports},b3d4:function(e,n,t){var r=t("8cfb");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=t("4f06").default;i("f7ac26e4",r,!0,{sourceMap:!1,shadowMode:!1})},b5b3:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var r={uIcon:t("b783").default},i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"u-search",style:{margin:e.margin},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.clickHandler.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"u-content",style:{backgroundColor:e.bgColor,borderRadius:"round"==e.shape?"100rpx":"10rpx",border:e.borderStyle,height:e.height+"rpx"}},[t("v-uni-view",{staticClass:"u-icon-wrap"},[t("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:e.searchIcon,color:e.searchIconColor?e.searchIconColor:e.color}})],1),t("v-uni-input",{staticClass:"u-input",style:[{textAlign:e.inputAlign,color:e.color,backgroundColor:e.bgColor},e.inputStyle],attrs:{"confirm-type":"search",value:e.value,disabled:e.disabled,focus:e.focus,maxlength:e.maxlength,"placeholder-class":"u-placeholder-class",placeholder:e.placeholder,"placeholder-style":"color: "+e.placeholderColor,type:"text"},on:{blur:function(n){arguments[0]=n=e.$handleEvent(n),e.blur.apply(void 0,arguments)},confirm:function(n){arguments[0]=n=e.$handleEvent(n),e.search.apply(void 0,arguments)},input:function(n){arguments[0]=n=e.$handleEvent(n),e.inputChange.apply(void 0,arguments)},focus:function(n){arguments[0]=n=e.$handleEvent(n),e.getFocus.apply(void 0,arguments)}}}),e.keyword&&e.clearabled&&e.focused?t("v-uni-view",{staticClass:"u-close-wrap",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.clear.apply(void 0,arguments)}}},[t("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close-circle-fill",size:"34",color:"#c0c4cc"}})],1):e._e()],1),t("v-uni-view",{staticClass:"u-action",class:[e.showActionBtn||e.show?"u-action-active":""],style:[e.actionStyle],on:{click:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=e.$handleEvent(n),e.custom.apply(void 0,arguments)}}},[e._v(e._s(e.actionText))])],1)},a=[]},b917:function(e,n,t){"use strict";var r=t("b3d4"),i=t.n(r);i.a},bc11:function(e,n,t){"use strict";t.r(n);var r=t("f4e2"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=i.a},c736:function(e,n,t){"use strict";t("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=uni.getSystemInfoSync(),i={},a={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:i,statusBarHeight:r.statusBarHeight}},computed:{navbarInnerStyle:function(){var e={};return e.height=this.navbarHeight+"px",e},navbarStyle:function(){var e={};return e.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(e,this.background),e},titleStyle:function(){var e={};return e.left=(r.windowWidth-uni.upx2px(this.titleWidth))/2+"px",e.right=(r.windowWidth-uni.upx2px(this.titleWidth))/2+"px",e.width=uni.upx2px(this.titleWidth)+"px",e},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};n.default=a},cf3e:function(e,n,t){"use strict";t.r(n);var r=t("8ee9"),i=t("bc11");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);var d,o=t("f0c5"),v=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"599c2dc4",null,!1,r["a"],d);n["default"]=v.exports},df30:function(e,n,t){"use strict";t.r(n);var r=t("fb1f"),i=t("53ca");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("5555");var d,o=t("f0c5"),v=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"1d7f90d0",null,!1,r["a"],d);n["default"]=v.exports},e2d5:function(e,n,t){"use strict";t.r(n);var r=t("0a7b"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=i.a},ee45:function(e,n,t){"use strict";t.r(n);var r=t("b5b3"),i=t("432e");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("71d0");var d,o=t("f0c5"),v=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"05573061",null,!1,r["a"],d);n["default"]=v.exports},f3a2:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"u-th",style:[e.thStyle]},[e._t("default")],2)},a=[]},f4e2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{isH5:!1,scrollStyle:{},titleOffsetLeft:0,contentOffsetLeft:0,keyword0:"",keyword:"",words:[{id:1,mean:"是",verb:"be",verb_ed:"was/were",verb_en:"been",verb_ing:"being"},{id:2,mean:"出生",verb:"bear",verb_ed:"bore",verb_en:"born",verb_ing:"bearing"},{id:3,mean:"打",verb:"beat",verb_ed:"beat",verb_en:"beaten",verb_ing:"beating"},{id:4,mean:"变",verb:"become",verb_ed:"became",verb_en:"become",verb_ing:"becoming"},{id:5,mean:"开始",verb:"begin",verb_ed:"began",verb_en:"begun",verb_ing:"beginning"},{id:6,mean:"弯曲",verb:"bend",verb_ed:"bent",verb_en:"bent",verb_ing:"bending"},{id:7,mean:"吹",verb:"blow",verb_ed:"blew",verb_en:"blown",verb_ing:"blowing"},{id:8,mean:"打破",verb:"break",verb_ed:"broke",verb_en:"broken",verb_ing:"breaking"},{id:9,mean:"带来",verb:"bring",verb_ed:"brought",verb_en:"brought",verb_ing:"bringing"},{id:10,mean:"建筑，建设",verb:"build",verb_ed:"built",verb_en:"built",verb_ing:"building"},{id:11,mean:"燃烧",verb:"burn",verb_ed:"burnt/burned",verb_en:"burnt/burned",verb_ing:"burning"},{id:12,mean:"买",verb:"buy",verb_ed:"bought",verb_en:"bought",verb_ing:"buying"},{id:13,mean:"捉",verb:"catch",verb_ed:"caught",verb_en:"caught",verb_ing:"catching"},{id:14,mean:"选择",verb:"choose",verb_ed:"chose",verb_en:"chosen",verb_ing:"choosing"},{id:15,mean:"来",verb:"come",verb_ed:"came",verb_en:"come",verb_ing:"coming"},{id:16,mean:"对付",verb:"deal",verb_ed:"dealt",verb_en:"dealt",verb_ing:"dealing"},{id:17,mean:"做，作",verb:"do",verb_ed:"did",verb_en:"done",verb_ing:"doing"},{id:18,mean:"拉",verb:"draw",verb_ed:"drew",verb_en:"drawn",verb_ing:"drawing"},{id:19,mean:"喝",verb:"drink",verb_ed:"drank",verb_en:"drunk",verb_ing:"drinking"},{id:20,mean:"驾驶，赶",verb:"drive",verb_ed:"drove",verb_en:"driven",verb_ing:"driving"},{id:21,mean:"吃",verb:"eat",verb_ed:"ate",verb_en:"eaten",verb_ing:"eating"},{id:22,mean:"落下",verb:"fall",verb_ed:"fell",verb_en:"fallen",verb_ing:"falling"},{id:23,mean:"喂",verb:"feed",verb_ed:"fed",verb_en:"fed",verb_ing:"feeding"},{id:24,mean:"觉得",verb:"feel",verb_ed:"felt",verb_en:"felt",verb_ing:"feeling"},{id:25,mean:"战斗",verb:"fight",verb_ed:"fought",verb_en:"fought",verb_ing:"fighting"},{id:26,mean:"发现",verb:"find",verb_ed:"found",verb_en:"found",verb_ing:"finding"},{id:27,mean:"逃，消失",verb:"flee",verb_ed:"fled",verb_en:"fled",verb_ing:"fleeing"},{id:28,mean:"飞",verb:"fly",verb_ed:"flew",verb_en:"flown",verb_ing:"flying"},{id:29,mean:"禁止",verb:"forbid",verb_ed:"forbade/forbad",verb_en:"forbidden/forbad",verb_ing:"forbidding"},{id:30,mean:"忘记",verb:"forget",verb_ed:"forgot",verb_en:"forgotten",verb_ing:"forgetting"},{id:31,mean:"宽恕",verb:"forgive",verb_ed:"forgave",verb_en:"forgiven",verb_ing:"forgiving"},{id:32,mean:"冻结",verb:"freeze",verb_ed:"froze",verb_en:"frozen",verb_ing:"freezing"},{id:33,mean:"得到",verb:"get",verb_ed:"got",verb_en:"got/gotten",verb_ing:"getting"},{id:34,mean:"给",verb:"give",verb_ed:"gave",verb_en:"given",verb_ing:"giving"},{id:35,mean:"去",verb:"go",verb_ed:"went",verb_en:"gone",verb_ing:"going"},{id:36,mean:"生长",verb:"grow",verb_ed:"grew",verb_en:"grown",verb_ing:"growing"},{id:37,mean:"有",verb:"have",verb_ed:"had",verb_en:"had",verb_ing:"having"},{id:38,mean:"听到",verb:"hear",verb_ed:"heard",verb_en:"heard",verb_ing:"hearing"},{id:39,mean:"藏，隐瞒，痛打",verb:"hide",verb_ed:"hid",verb_en:"hid/hidden",verb_ing:"hiding"},{id:40,mean:"持",verb:"hold",verb_ed:"held",verb_en:"held",verb_ing:"holding"},{id:41,mean:"保持",verb:"keep",verb_ed:"kept",verb_en:"kept",verb_ing:"keeping"},{id:42,mean:"知道",verb:"know",verb_ed:"knew",verb_en:"known",verb_ing:"knowing"},{id:43,mean:"放,放置",verb:"lay",verb_ed:"laid",verb_en:"laid",verb_ing:"laying"},{id:44,mean:"领导",verb:"lead",verb_ed:"led",verb_en:"led",verb_ing:"leading"},{id:45,mean:"学习",verb:"learn",verb_ed:"learnt/learned",verb_en:"learnt/learned",verb_ing:"learning"},{id:46,mean:"离开",verb:"leave",verb_ed:"left",verb_en:"left",verb_ing:"leaving"},{id:47,mean:"借给",verb:"lend",verb_ed:"lent",verb_en:"lent",verb_ing:"lending"},{id:48,mean:"躺",verb:"lie",verb_ed:"lay",verb_en:"lain",verb_ing:"lying"},{id:49,mean:"点着",verb:"light",verb_ed:"lit/lighted",verb_en:"lit/lighted",verb_ing:"lighting"},{id:50,mean:"失去",verb:"lose",verb_ed:"lost",verb_en:"lost",verb_ing:"losing"},{id:51,mean:"做，制作",verb:"make",verb_ed:"made",verb_en:"made",verb_ing:"making"},{id:52,mean:"意欲，想要",verb:"mean",verb_ed:"meant",verb_en:"meant",verb_ing:"meaning"},{id:53,mean:"遇见",verb:"meet",verb_ed:"met",verb_en:"met",verb_ing:"meeting"},{id:54,mean:"误认",verb:"mistake",verb_ed:"mistook",verb_en:"mistaken",verb_ing:"mistaking"},{id:55,mean:"误解，误会",verb:"misunderstand",verb_ed:"misunderstood",verb_en:"misunderstood",verb_ing:"misunderstanding"},{id:56,mean:"克服，战胜",verb:"overcome",verb_ed:"overcame",verb_en:"overcome",verb_ing:"overcoming"},{id:57,mean:"支付",verb:"pay",verb_ed:"paid",verb_en:"paid",verb_ing:"paying"},{id:58,mean:"重建",verb:"rebuild",verb_ed:"rebuilt",verb_en:"rebuilt",verb_ing:"rebuilding"},{id:59,mean:"再付给",verb:"repay",verb_ed:"repaid",verb_en:"repaid",verb_ing:"repaying"},{id:60,mean:"骑",verb:"ride",verb_ed:"rode",verb_en:"ridden",verb_ing:"riding"},{id:61,mean:"响， 打电话给",verb:"ring",verb_ed:"rang",verb_en:"rung",verb_ing:"ringing"},{id:62,mean:"升，上升",verb:"rise",verb_ed:"rose",verb_en:"risen",verb_ing:"rising"},{id:63,mean:"跑",verb:"run",verb_ed:"ran",verb_en:"run",verb_ing:"running"},{id:64,mean:"说，说话",verb:"say",verb_ed:"said",verb_en:"said",verb_ing:"saying"},{id:65,mean:"看见",verb:"see",verb_ed:"saw",verb_en:"seen",verb_ing:"seeing"},{id:66,mean:"找，找方法",verb:"seek",verb_ed:"sought",verb_en:"sought",verb_ing:"seeking"},{id:67,mean:"卖",verb:"sell",verb_ed:"sold",verb_en:"sold",verb_ing:"selling"},{id:68,mean:"送",verb:"send",verb_ed:"sent",verb_en:"sent",verb_ing:"sending"},{id:69,mean:"摇动",verb:"shake",verb_ed:"shook",verb_en:"shaken",verb_ing:"shaking"},{id:70,mean:"射击",verb:"shoot",verb_ed:"shot",verb_en:"shot",verb_ing:"shooting"},{id:71,mean:"表明，指示",verb:"show",verb_ed:"showed",verb_en:"shown/showed",verb_ing:"showing"},{id:72,mean:"唱",verb:"sing",verb_ed:"sang",verb_en:"sung",verb_ing:"singing"},{id:73,mean:"沉",verb:"sink",verb_ed:"sank",verb_en:"sunk",verb_ing:"sinking"},{id:74,mean:"坐",verb:"sit",verb_ed:"sat",verb_en:"sat",verb_ing:"sitting"},{id:75,mean:"睡",verb:"sleep",verb_ed:"slept",verb_en:"slept",verb_ing:"sleeping"},{id:76,mean:"嗅，闻",verb:"smell",verb_ed:"smelt/smelled",verb_en:"smelt/smelled",verb_ing:"smelling"},{id:77,mean:"说话",verb:"speak",verb_ed:"spoke",verb_en:"spoken",verb_ing:"speaking"},{id:78,mean:"拼写",verb:"spell",verb_ed:"spelt/spelled",verb_en:"spelt/spelled",verb_ing:"spelling"},{id:79,mean:"花费",verb:"spend",verb_ed:"spent",verb_en:"spent",verb_ing:"spending"},{id:80,mean:"溢出，流出",verb:"spill",verb_ed:"spilt",verb_en:"spilt",verb_ing:"spilling"},{id:81,mean:"溺爱，损坏",verb:"spoil",verb_ed:"spoilt",verb_en:"spoilt",verb_ing:"spoiling"},{id:82,mean:"站，立",verb:"stand",verb_ed:"stood",verb_en:"stood",verb_ing:"standing"},{id:83,mean:"偷",verb:"steal",verb_ed:"stole",verb_en:"stolen",verb_ing:"stealing"},{id:84,mean:"粘住，刺，戳",verb:"stick",verb_ed:"stuck",verb_en:"stuck",verb_ing:"sticking"},{id:85,mean:"打",verb:"strike",verb_ed:"struck",verb_en:"struck",verb_ing:"striking"},{id:86,mean:"打扫，扫地",verb:"sweep",verb_ed:"swept",verb_en:"swept",verb_ing:"sweeping"},{id:87,mean:"游泳",verb:"swim",verb_ed:"swam",verb_en:"swum",verb_ing:"swimming"},{id:88,mean:"拿",verb:"take",verb_ed:"took",verb_en:"taken",verb_ing:"taking"},{id:89,mean:"教",verb:"teach",verb_ed:"taught",verb_en:"taught",verb_ing:"teaching"},{id:90,mean:"撕",verb:"tear",verb_ed:"tore",verb_en:"torn",verb_ing:"tearing"},{id:91,mean:"告诉",verb:"tell",verb_ed:"told",verb_en:"told",verb_ing:"telling"},{id:92,mean:"想",verb:"think",verb_ed:"thought",verb_en:"thought",verb_ing:"thinking"},{id:93,mean:"抛，掷",verb:"throw",verb_ed:"threw",verb_en:"thrown",verb_ing:"throwing"},{id:94,mean:"了解，理解",verb:"understand",verb_ed:"understood",verb_en:"understood",verb_ing:"understanding"},{id:95,mean:"承担，保证",verb:"undertake",verb_ed:"undertook",verb_en:"undertaken",verb_ing:"undertaking"},{id:96,mean:"醒",verb:"wake",verb_ed:"woke/waked",verb_en:"woken/waked",verb_ing:"waking"},{id:97,mean:"穿",verb:"wear",verb_ed:"wore",verb_en:"worn",verb_ing:"wearing"},{id:98,mean:"得胜",verb:"win",verb_ed:"won",verb_en:"won",verb_ing:"winning"},{id:99,mean:"写",verb:"write",verb_ed:"wrote",verb_en:"written",verb_ing:"writing"},{id:100,mean:"爆发",verb:"burst",verb_ed:"burst",verb_en:"burst",verb_ing:"bursting"},{id:101,mean:"值，花费",verb:"cost",verb_ed:"cost",verb_en:"cost",verb_ing:"costing"},{id:102,mean:"割",verb:"cut",verb_ed:"cut",verb_en:"cut",verb_ing:"cutting"},{id:103,mean:"预测，预报",verb:"forecast",verb_ed:"forecast",verb_en:"forecast",verb_ing:"forecasting"},{id:104,mean:"打中",verb:"hit",verb_ed:"hit",verb_en:"hit",verb_ing:"hitting"},{id:105,mean:"损伤",verb:"hurt",verb_ed:"hurt",verb_en:"hurt",verb_ing:"hurting"},{id:106,mean:"让",verb:"let",verb_ed:"let",verb_en:"let",verb_ing:"letting"},{id:107,mean:"放,放下",verb:"put",verb_ed:"put",verb_en:"put",verb_ing:"putting"},{id:108,mean:"读，阅读",verb:"read",verb_ed:"read",verb_en:"read",verb_ing:"reading"},{id:109,mean:"去掉",verb:"rid",verb_ed:"rid",verb_en:"rid",verb_ing:"ridding"},{id:110,mean:"安放、设置",verb:"set",verb_ed:"set",verb_en:"set",verb_ing:"setting"},{id:111,mean:"关闭",verb:"shut",verb_ed:"shut",verb_en:"shut",verb_ing:"shutting"},{id:112,mean:"展开",verb:"spread",verb_ed:"spread",verb_en:"spread",verb_ing:"spreading"}]}},onBackPress:function(){return this.keyword.length>0&&(this.keyword=this.keyword0="",!0)},onLoad:function(){this.isH5=!0,this.scrollStyle.maxHeight="calc(100vh - 125px)"},watch:{keyword0:function(){var e=this;this.$u.debounce((function(){e.keyword=e.keyword0}),300)}},methods:{titleScrolling:function(e){this.titleOffsetLeft=e.detail.scrollLeft,this.$nextTick((function(){this.contentOffsetLeft=e.detail.scrollLeft}))},contentScrolling:function(e){this.contentOffsetLeft=e.detail.scrollLeft,this.$nextTick((function(){this.titleOffsetLeft=e.detail.scrollLeft}))}}};n.default=r},fb1f:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var r={uIcon:t("b783").default},i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{},[t("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":e.isFixed,"u-border-bottom":e.borderBottom},style:[e.navbarStyle]},[t("v-uni-view",{staticClass:"u-status-bar",style:{height:e.statusBarHeight+"px"}}),t("v-uni-view",{staticClass:"u-navbar-inner",style:[e.navbarInnerStyle]},[e.isBack?t("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.goBack.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"u-icon-wrap"},[t("u-icon",{attrs:{name:e.backIconName,color:e.backIconColor,size:e.backIconSize}})],1),e.backText?t("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[e.backTextStyle]},[e._v(e._s(e.backText))]):e._e()],1):e._e(),e.title?t("v-uni-view",{staticClass:"u-navbar-content-title",style:[e.titleStyle]},[t("v-uni-view",{staticClass:"u-title u-line-1",style:{color:e.titleColor,fontSize:e.titleSize+"rpx",fontWeight:e.titleBold?"bold":"normal"}},[e._v(e._s(e.title))])],1):e._e(),t("v-uni-view",{staticClass:"u-slot-content"},[e._t("default")],2),t("v-uni-view",{staticClass:"u-slot-right"},[e._t("right")],2)],1)],1),e.isFixed&&!e.immersive?t("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(e.navbarHeight)+e.statusBarHeight+"px"}}):e._e()],1)},a=[]}}]);