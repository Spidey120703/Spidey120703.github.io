(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsA-parse-index"],{"256c":function(t,e,n){"use strict";n.r(e);var i=n("285b"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"285b":function(t,e,n){"use strict";var i=n("4ea4");n("99af"),n("caad"),n("c975"),n("acd8"),n("e25e"),n("ac1f"),n("2532"),n("466d"),n("5319"),n("841c"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o=i(n("b85c")),a=uni.getSystemInfoSync(),s=a.windowWidth,c=(a.platform,n("b5c8")),l={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var n,i=e.split("://")[0],r=i.length;n=e[r];r++){if("/"==n&&"/"!=e[r-1]&&"/"!=e[r+1])break;i+=Math.random()>.5?n.toUpperCase():n}return i+=e.substr(r),this[t]=i}if(this[t]=e,e.includes("data:image")){var o=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!o)return}}}},mounted:function(){var t=this;this.document=document.getElementById("rtf"+this._uid),r&&(this.search=function(e){return r(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var n=this;if(t){var i=document.createElement("div");e?this.rtf?this.rtf.appendChild(i):this.rtf=i:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=i),i.innerHTML=this._handleHtml(t,e);for(var r,a=this.rtf.getElementsByTagName("style"),l=0;r=a[l++];)r.innerHTML=r.innerHTML.replace(/body/g,"#rtf"+this._uid),r.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,i=0;e=t[i++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),n._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var u=this,f=this.rtf.getElementsByTagName("title");f.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:f[0].innerText});var d=function(t){var e=t.getAttribute("src");n.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(n.domain.includes("://")?n.domain.split("://")[0]:"")+":"+e:t.src=n.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=n.domain+"/"+e))};this.imgList.length=0;for(var p,h=this.rtf.getElementsByTagName("img"),m=0,g=0;p=h[m];m++)parseInt(p.style.width||p.getAttribute("width"))>s&&(p.style.height="auto"),d(p),p.hasAttribute("ignore")||"A"==p.parentElement.nodeName||(p.i=g++,u.imgList.push(p.getAttribute("original-src")||p.src||p.getAttribute("data-src")),p.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},u.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:u.imgList})}),p.onerror=function(){c.errorImg&&(u.imgList[this.i]=this.src=c.errorImg),u.$emit("error",{source:"img",target:this})},u.lazyLoad&&this._observer&&p.src&&0!=p.i&&(p.setAttribute("data-src",p.src),p.removeAttribute("src"),this._observer.observe(p));var v,b=this.rtf.getElementsByTagName("a"),y=(0,o.default)(b);try{for(y.s();!(v=y.n()).done;){var _=v.value;_.onclick=function(t){t.stopPropagation();var e=!0,n=this.getAttribute("href");if(u.$emit("linkpress",{href:n,ignore:function(){return e=!1}}),e&&n)if("#"==n[0])u.useAnchor&&u.navigateTo({id:n.substr(1)});else{if(0==n.indexOf("http")||0==n.indexOf("//"))return!0;uni.navigateTo({url:n})}return!1}}}catch(N){y.e(N)}finally{y.f()}var x=this.rtf.getElementsByTagName("video");u.videoContexts=x;for(var w,T=0;w=x[T++];)d(w),w.style.maxWidth="100%",w.onerror=function(){u.$emit("error",{source:"video",target:this})},w.onplay=function(){if(u.autopause)for(var t,e=0;t=u.videoContexts[e++];)t!=this&&t.pause()};var A,k,C=this.rtf.getElementsByTagName("audio"),I=(0,o.default)(C);try{for(I.s();!(A=I.n()).done;){var S=A.value;d(S),S.onerror=function(){u.$emit("error",{source:"audio",target:this})}}}catch(N){I.e(N)}finally{I.f()}if(this.autoscroll){var B,L=this.rtf.getElementsByTagName("table"),O=(0,o.default)(L);try{for(O.s();!(B=O.n()).done;){var E=B.value,M=document.createElement("div");M.style.overflow="scroll",E.parentNode.replaceChild(M,E),M.appendChild(E)}}catch(N){O.e(N)}finally{O.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){n.nodes=[1],n.$emit("load")})),setTimeout((function(){return n.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){n.rect=n.rtf.getBoundingClientRect(),n.rect.height==k&&(n.$emit("ready",n.rect),clearInterval(n._timer)),k=n.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var n=" ",i=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(n,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(n,".").concat(t.id):"")).boundingClientRect();this._in?i.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():i.selectViewport().scrollOffset(),i.exec((function(n){if(!n[0])return t.fail&&t.fail("Label not found");var i=n[1].scrollTop+n[0].top-(n[2]?n[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=i:uni.pageScrollTo({scrollTop:i,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var n="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var i in c.userAgentStyles)n+="".concat(i,"{").concat(c.userAgentStyles[i],"}");for(i in this.tagStyle)n+="".concat(i,"{").concat(this.tagStyle[i],"}");n+="</style>",t=n+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*s/750+"px"}))),t}}};e.default=l},"2a33":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-content[data-v-884f2096]{padding:%?24?%;font-size:%?32?%;color:#606266;line-height:1.6}',""]),t.exports=e},"3b59":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{detail:{content:'\n\t\t\t\t\t<div class="content_area" id="content_area" style="display: block;">\n\t\t\t\t\t                    \n\t\t\t\t\t                        \x3c!--repaste.body.begin--\x3e<p>　　巴尼小镇是云南省怒江傈僳族自治州首个易地扶贫搬迁集中安置点。从山上的金满村搬迁到巴尼小镇，近3年的时间里，搬迁户们的生活发生了可喜的变化。</p>\n\t\t\t\t\t<p class="photo_img_20190808" style="text-align: center;"><img src="//p2.img.cctvpic.com/photoworkspace/contentimg/2020/07/16/2020071613380766481.jpg" alt="泸水市巴尼小镇易地扶贫搬迁安置点全景 李韩金摄（人民视觉）" isflag="1"></p>\n\t\t\t\t\t<p class="photo_alt_20190808" style="text-align: center;"><em></em>泸水市巴尼小镇易地扶贫搬迁安置点全景 李韩金摄（人民视觉）</p>\n\t\t\t\t\t<p>　　搬出四面透风、容易漏雨的“千脚落地房”，住进如今宽敞明亮的楼房，当地居民的生活不断改善。另一边，留在山上的村民在企业帮助下改种经济林果，家庭收入节节攀升。</p>\n\t\t\t\t\t<p class="photo_img_20190808" style="text-align: center;"><img src="//p3.img.cctvpic.com/photoworkspace/contentimg/2020/07/16/2020071613382671669.jpg" alt="金满村搬迁户在巴尼小镇的扶贫车间里上班 余秀英摄（人民视觉）" isflag="1"></p>\n\t\t\t\t\t<p class="photo_alt_20190808" style="text-align: center;"><em></em>金满村搬迁户在巴尼小镇的扶贫车间里上班 余秀英摄（人民视觉）</p>\n\t\t\t\t\t<p>　　这阵子，52岁的米四东心里老惦记个事：吃两碗包谷稀饭。包谷稀饭是把包谷和蚕豆混在一起，有时加点腊肉，搁在三脚架上，生火煮制而成。在高黎贡山上，包谷稀饭曾是金满村人的主食，大多数人连个菜都不舍得炒，就配一碗蘸水吃。从山上搬下来快3年了，米四东说：“在山上盼着吃大米饭，如今天天吃米饭，又想念包谷稀饭了。”</p>\n\t\t\t\t\t<p>　　米四东的家在巴尼小镇，地处云南省怒江傈僳族自治州泸水市洛本卓白族乡，紧邻着怒江。这里是怒江州首个易地扶贫搬迁集中安置点，2017年国庆节，金满村首批40户村民入住，2018年最后11户村民入住新居。如今已有搬迁户168户744人，都属于白族支系勒墨人。</p>\n\t\t\t\t\t<p>　　3年时间，这里的人和生活发生了哪些变化？这个夏天，记者走进了巴尼小镇。</p>\n\t\t\t\t\t<p>　　曾经——</p>\n\t\t\t\t\t<p>　　8公里的距离，20年的差距</p>\n\t\t\t\t\t<p>　　村民叁益光的家里干净亮堂，客厅的墙上，挂着一家三口在老房子前的合影。由于山地太陡，找不到平地打地基，老房子都是篱笆为墙、木板为顶、木头为柱的“千脚落地房”的样子。四面透风的房子里面黑黢黢的，下面养牲畜，中间住人，上面放粮食。“一入雨季，屋里就怕漏雨，潮乎乎有虱子”。2017年搬迁前，金满村九成村民就住在这种房子里。</p>\n\t\t\t\t\t<p>　　从巴尼小镇往背后的高黎贡山深处走，沿着一条水泥路走上8公里，就回到了金满村村委会。金满村11个村民小组，其中5个不通公路、1个是地质灾害隐患点，这6个组如今已整体搬迁。“最远的马社王底小组有16户人家，到村委会要过悬崖、涉小河、爬陡坡，走上三四个小时。”说起过往，村委会主任沈光干嘘唏不已。</p>\n\t\t\t\t\t<p>　　站在村委会的院子里，只见大山围绕、白云悠悠，山外面还是山。2014年底，金满村人均收入仅有1400多元，全村1310人有建档立卡贫困户1250人。沈光干说：“在山上，一年到头辛辛苦苦，还是穷成这个样！”</p>\n\t\t\t\t\t<p>　　听老人们说起以前的生活，就像听“穿越故事”一样：去邻近的县背洋芋回来种，前后得一星期，头疼脑热不舍得花钱去卫生院……“过去从金满村到巴尼小镇的8公里距离，也是发展相差20年的距离。”巴尼小镇社区副主任和碧武介绍，群众刚搬出大山时，不会用电器，连起床叠被子的习惯都没有。</p>\n\t\t\t\t\t<p>　　不过，在宽敞明亮的楼房里住上一段时间，大家都知道了现代生活的好处。乡中心完小五年级的学生花燕梅一家去年搬到小镇上，每天早上走几分钟就能到学校。“搬下来好，在这里衣服不容易脏，老师也讲得好！”孩子的话，总是简单明了。</p>\n\t\t\t\t\t<p>　　如今，按照“一户一宅基地”的政策，米四东在山上的老房子拆了，一家人踏踏实实住在了小镇上。米四东感慨：“还是在山下容易赚钱。”</p>\n\t\t\t\t\t<p>　　山下——</p>\n\t\t\t\t\t<p>　　干活更方便，管理更规范</p>\n\t\t\t\t\t<p>　　在巴尼小镇，最常见的交通工具就是摩托车，还有不少人家门口停着机动三轮车、小货车和轿车。米四东说，有了钱，大家都愿意买辆摩托车，“干活方便了许多。”</p>\n\t\t\t\t\t<p>　　记者了解到，巴尼小镇目前外出务工118户282人，以本地打零工为主。在小镇上，就有家扶贫车间生产民族服装，平时有20多个女工。车间的管理人员告诉记者，一个熟练女工一个月挣三四千元没问题。</p>\n\t\t\t\t\t<p>　　赚得多了，还要看花得多不多，对于搬出大山的人来说，上楼后的生活成本增加了多少？</p>\n\t\t\t\t\t<p>　　米四东算了算账：小镇的水费一户每年20元，电费也不贵，过日子主要就是买些吃的。“这个就丰俭由己了，青菜要买，土豆南瓜山上就有。”</p>\n\t\t\t\t\t<p>　　和碧武介绍，随着巴尼小镇社区建设越来越规范，一些以前“难以想象”的方法都有了实打实的用处。“比如我们这里实行积分制管理，积极参加升国旗仪式、搞好卫生都有加分，居民可以到超市用积分兑换商品。”社区超市经营者玉花梅说，去年超市里兑换了2万多元的积分。</p>\n\t\t\t\t\t<p>　　当然，搬下来的时间并不长，对大部分人来说还是处在适应阶段。在和碧武看来，村子里的人与外界的交流还是偏少，视野和观念转变得还不够快。</p>\n\t\t\t\t\t<p>　　米四东就有这种体会。洛本卓白族乡是“中国民间文化艺术之乡”，金满村被列入“云南省第四批旅游特色村”。作为州级非物质文化遗产传人，米四东如今在巴尼小镇教授勒墨人的传统歌舞。“等哪天怒江大峡谷的旅游火起来了，这门技艺一定会是旅游的‘招牌’产品。”米四东心里寻思着。</p>\n\t\t\t\t\t<p>　　山上——</p>\n\t\t\t\t\t<p>　　既抓“生态账”，又算“经济账”</p>\n\t\t\t\t\t<p>　　一边是米四东感慨“山下容易赚钱”，另一边却是仍然留在山上的5个村民小组80户人家，如今的8公里，还有20年的发展差距吗？</p>\n\t\t\t\t\t<p>　　“‘两不愁三保障’早就实现了，现在村里的生活跟过去相比简直是天壤之别。眼下村里惦记的，是怎样既抓‘生态账’，又算‘经济账’。”洛本卓乡宣传委员麻继成兼任金满村党总支书记，搬迁启动前就驻村工作，到现在还扎在村里忙活调整种养殖业结构。</p>\n\t\t\t\t\t<p>　　靠山吃山，金满村过去是在四五十度的山坡地上开荒种包谷，如今要进行山体生态修复，除了改种经济林果，别无他法。</p>\n\t\t\t\t\t<p>　　麻继成说，乡里组织搬迁群众将原住地的土地林地出租、流转或退耕还林，采取“合作社+村党总支+农户+基地”模式，种植花椒、核桃、草果、香橼等经济作物。现在，1000多亩花椒、1000多亩核桃、600多亩草果和300多亩香橼已经成了山上的“绿色银行”。“村里今年准备再发展250亩香橼，香橼两年就能挂果，收益前景非常可观。”</p>\n\t\t\t\t\t<p>　　农产品“升了级”，收入也“开了源”。麻继成说，农民在企业承包的果园里务工，每天的工资有100元，如今每天都有二三十人在果园里干活。</p>\n\t\t\t\t\t<p>　　“搬出去有盼头，留下来有干劲。”如今，乡里还在加紧研究制定金满村乡村旅游规划。“等客栈、农家乐、步行街都建好了，幸福一定来敲门。”洛本卓乡党委书记郝春荣说，巩固脱贫成果、走向乡村振兴，“好日子还在后头”。</p>\x3c!--repaste.body.end--\x3e\n\t\t\t\t\t                    \n\t\t\t\t\t                </div>\n\t\t\t\t'}}},onLoad:function(){},methods:{}};e.default=i},4032:function(t,e,n){"use strict";var i=n("48ee"),r=n.n(i);r.a},"40ed":function(t,e,n){var i=n("6ca3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("85852186",i,!0,{sourceMap:!1,shadowMode:!1})},"48ee":function(t,e,n){var i=n("2a33");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("e6c97256",i,!0,{sourceMap:!1,shadowMode:!1})},"545a":function(t,e,n){"use strict";n.r(e);var i=n("3b59"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"5bd2":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uParse:n("a4cf").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-content"},[n("u-parse",{attrs:{html:t.detail.content}})],1)},o=[]},"6ca3":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-f207f29a{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-f207f29a{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},a4cf:function(t,e,n){"use strict";n.r(e);var i=n("d0db"),r=n("256c");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("b835");var a,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"f207f29a",null,!1,i["a"],a);e["default"]=c.exports},b467:function(t,e,n){"use strict";n.r(e);var i=n("5bd2"),r=n("545a");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("4032");var a,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"884f2096",null,!1,i["a"],a);e["default"]=c.exports},b5c8:function(t,e,n){n("ac1f"),n("1276");var i={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:r(" , ,\t,\r,\n,\f"),boolAttrs:r("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:r("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:r("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:r("a,colgroup,fieldset,legend"),selfClosingTags:r("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:r("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function r(t){for(var e=Object.create(null),n=t.split(","),i=n.length;i--;)e[n[i]]=!0;return e}t.exports=i},b835:function(t,e,n){"use strict";var i=n("40ed"),r=n.n(i);r.a},b85c:function(t,e,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var i=r(n("06c5"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=(0,i.default)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(c)throw a}}}}},d0db:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.nodes.length?t._e():t._t("default"),n("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[n("div",{attrs:{id:"rtf"+t.uid}})])],2)},o=[]}}]);