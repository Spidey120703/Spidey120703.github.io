(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uview-ui-components-u-avatar-cropper-u-avatar-cropper"],{"153f":function(t,e,r){var o=r("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.content[data-v-40d667f5]{background:#fff}.cropper[data-v-40d667f5]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:11}.cropper-buttons[data-v-40d667f5]{background-color:#000;color:#eee}.cropper-wrapper[data-v-40d667f5]{position:relative;display:flex;flex-direction:row;flex-direction:row;justify-content:space-between;align-items:center;width:100%;background-color:#000}.cropper-buttons[data-v-40d667f5]{width:100vw;display:flex;flex-direction:row;flex-direction:row;justify-content:space-between;align-items:center;position:fixed;bottom:0;left:0;font-size:%?28?%}.cropper-buttons .upload[data-v-40d667f5],\n.cropper-buttons .getCropperImage[data-v-40d667f5]{width:50%;text-align:center}.cropper-buttons .upload[data-v-40d667f5]{text-align:left;padding-left:%?50?%}.cropper-buttons .getCropperImage[data-v-40d667f5]{text-align:right;padding-right:%?50?%}',""]),t.exports=e},"1c69":function(t,e,r){var o=r("153f");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=r("4f06").default;n("506445a8",o,!0,{sourceMap:!1,shadowMode:!1})},4716:function(t,e,r){"use strict";r("7a82");var o=r("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("a9e3");var n=o(r("fb5a")),i={props:{boundStyle:{type:Object,default:function(){return{lineWidth:4,borderColor:"rgb(245, 245, 245)",mask:"rgba(0, 0, 0, 0.35)"}}}},data:function(){return{bottomNavHeight:50,originWidth:200,width:0,height:0,cropperOpt:{id:"cropper",targetId:"targetCropper",pixelRatio:1,width:0,height:0,scale:2.5,zoom:8,cut:{x:(this.width-this.originWidth)/2,y:(this.height-this.originWidth)/2,width:this.originWidth,height:this.originWidth},boundStyle:{lineWidth:uni.upx2px(this.boundStyle.lineWidth),mask:this.boundStyle.mask,color:this.boundStyle.borderColor}},destWidth:200,rectWidth:200,fileType:"jpg",src:""}},onLoad:function(t){var e=this,r=uni.getSystemInfoSync();if(this.width=r.windowWidth,this.height=r.windowHeight-this.bottomNavHeight,this.cropperOpt.width=this.width,this.cropperOpt.height=this.height,this.cropperOpt.pixelRatio=r.pixelRatio,t.destWidth&&(this.destWidth=t.destWidth),t.rectWidth){var o=Number(t.rectWidth);this.cropperOpt.cut={x:(this.width-o)/2,y:(this.height-o)/2,width:o,height:o}}this.rectWidth=t.rectWidth,t.fileType&&(this.fileType=t.fileType),this.cropper=new n.default(this.cropperOpt).on("ready",(function(t){})).on("beforeImageLoad",(function(t){})).on("imageLoad",(function(t){})).on("beforeDraw",(function(t,e){})),uni.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#000000"}),uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){e.src=t.tempFilePaths[0],e.cropper.pushOrign(e.src)}})},methods:{touchStart:function(t){this.cropper.touchStart(t)},touchMove:function(t){this.cropper.touchMove(t)},touchEnd:function(t){this.cropper.touchEnd(t)},getCropperImage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.src)return this.$u.toast("请先选择图片再裁剪");var r={destHeight:Number(this.destWidth),destWidth:Number(this.destWidth),fileType:this.fileType};this.cropper.getCropperImage(r,(function(r,o){o?uni.showModal({title:"温馨提示",content:o.message}):e?uni.previewImage({current:"",urls:[r]}):(uni.$emit("uAvatarCropper",r),t.$u.route({type:"back"}))}))},uploadTap:function(){var t=this,e=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(r){e.src=r.tempFilePaths[0],e.cropper.pushOrign(t.src)}})}}};e.default=i},5463:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{staticClass:"cropper-wrapper",style:{height:t.cropperOpt.height+"px"}},[r("v-uni-canvas",{staticClass:"cropper",style:{width:t.cropperOpt.width,height:t.cropperOpt.height,backgroundColor:"rgba(0, 0, 0, 0.8)"},attrs:{"disable-scroll":!0,"canvas-id":"cropper",id:"cropper"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd.apply(void 0,arguments)}}}),r("v-uni-canvas",{staticClass:"cropper",style:{position:"fixed",top:"-"+t.cropperOpt.width*t.cropperOpt.pixelRatio+"px",left:"-"+t.cropperOpt.height*t.cropperOpt.pixelRatio+"px",width:t.cropperOpt.width*t.cropperOpt.pixelRatio+"px",height:""+t.cropperOpt.height*t.cropperOpt.pixelRatio},attrs:{"disable-scroll":!0,"canvas-id":"targetId",id:"targetId"}})],1),r("v-uni-view",{staticClass:"cropper-buttons safe-area-padding",style:{height:t.bottomNavHeight+"px"}},[r("v-uni-view",{staticClass:"upload",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadTap.apply(void 0,arguments)}}},[t._v("选择图片")]),r("v-uni-view",{staticClass:"getCropperImage",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCropperImage(!1)}}},[t._v("确定")])],1)],1)},n=[]},"63f2":function(t,e,r){"use strict";var o=r("1c69"),n=r.n(o);n.a},cb29:function(t,e,r){var o=r("23e7"),n=r("81d5"),i=r("44d2");o({target:"Array",proto:!0},{fill:n}),i("fill")},eead:function(t,e,r){"use strict";r.r(e);var o=r("4716"),n=r.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);e["default"]=n.a},faac:function(t,e,r){"use strict";r.r(e);var o=r("5463"),n=r("eead");for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);r("63f2");var a=r("f0c5"),c=Object(a["a"])(n["default"],o["b"],o["c"],!1,null,"40d667f5",null,!1,o["a"],void 0);e["default"]=c.exports},fb5a:function(t,e,r){(function(o,n){var i,a,c=r("7037").default;r("fb6a"),r("d3b7"),r("1d1c"),r("7a82"),r("acd8"),r("c975"),r("99af"),r("d9e2"),r("d401"),r("ac1f"),r("5319"),r("00b4"),r("466d"),r("cb29"),r("159b"),r("b64b"),
/**
 * we-cropper v1.3.9
 * (c) 2020 dlhandsome
 * @license MIT
 */
function(o,n){"object"===c(e)&&"undefined"!==typeof t?t.exports=n():(i=n,a="function"===typeof i?i.call(e,r,e,t):i,void 0===a||(t.exports=a))}(0,(function(){"use strict";var t=void 0,e=["touchstarted","touchmoved","touchended"];function r(t){var r=[],o=arguments.length-1;while(o-- >0)r[o]=arguments[o+1];e.forEach((function(e,o){void 0!==r[o]&&(t[e]=r[o])}))}function i(){return t||(t=uni.getSystemInfoSync()),t}var a={},u=i(),s=u.pixelRatio,p={id:{default:"cropper",get:function(){return a.id},set:function(t){"string"!==typeof t&&o("error","id："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:56"),a.id=t}},width:{default:750,get:function(){return a.width},set:function(t){"number"!==typeof t&&o("error","width："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:68"),a.width=t}},height:{default:750,get:function(){return a.height},set:function(t){"number"!==typeof t&&o("error","height："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:80"),a.height=t}},pixelRatio:{default:s,get:function(){return a.pixelRatio},set:function(t){"number"!==typeof t&&o("error","pixelRatio："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:92"),a.pixelRatio=t}},scale:{default:2.5,get:function(){return a.scale},set:function(t){"number"!==typeof t&&o("error","scale："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:104"),a.scale=t}},zoom:{default:5,get:function(){return a.zoom},set:function(t){"number"!==typeof t?o("error","zoom："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:116"):(t<0||t>10)&&o("error","zoom should be ranged in 0 ~ 10"," at uview-ui/components/u-avatar-cropper/weCropper.js:118"),a.zoom=t}},src:{default:"",get:function(){return a.src},set:function(t){"string"!==typeof t&&o("error","src："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:130"),a.src=t}},cut:{default:{},get:function(){return a.cut},set:function(t){"object"!==c(t)&&o("error","cut："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:142"),a.cut=t}},boundStyle:{default:{},get:function(){return a.boundStyle},set:function(t){"object"!==c(t)&&o("error","boundStyle："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:154"),a.boundStyle=t}},onReady:{default:null,get:function(){return a.ready},set:function(t){a.ready=t}},onBeforeImageLoad:{default:null,get:function(){return a.beforeImageLoad},set:function(t){a.beforeImageLoad=t}},onImageLoad:{default:null,get:function(){return a.imageLoad},set:function(t){a.imageLoad=t}},onBeforeDraw:{default:null,get:function(){return a.beforeDraw},set:function(t){a.beforeDraw=t}}},d=i(),h=d.windowWidth;var f="undefined"!==typeof window?window:"undefined"!==typeof n?n:"undefined"!==typeof self?self:{};function l(t,e){return e={exports:{}},t(e,e.exports),e.exports}var v=l((function(t,e){e.isStr=function(t){return"string"===typeof t},e.isNum=function(t){return"number"===typeof t},e.isArr=Array.isArray,e.isUndef=function(t){return void 0===t},e.isTrue=function(t){return!0===t},e.isFalse=function(t){return!1===t},e.isFunc=function(t){return"function"===typeof t},e.isObj=e.isObject=function(t){return null!==t&&"object"===c(t)};var r=Object.prototype.toString;e.isPlainObject=function(t){return"[object Object]"===r.call(t)};var o=Object.prototype.hasOwnProperty;e.hasOwn=function(t,e){return o.call(t,e)},e.noop=function(t,e,r){},e.isValidArrayIndex=function(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}})),g=v.isFunc,w=v.isPlainObject,m=["ready","beforeImageLoad","beforeDraw","imageLoad"];function b(t){return function(e){var r=[],o=arguments.length-1;while(o-- >0)r[o]=arguments[o+1];return void 0===e&&(e={}),new Promise((function(o,n){e.success=function(t){o(t)},e.fail=function(t){n(t)},t.apply(void 0,[e].concat(r))}))}}function y(t,e){return void 0===e&&(e=!1),new Promise((function(r){t.draw(e,r)}))}var x=b(uni.getImageInfo),C=b(uni.canvasToTempFilePath),S=l((function(t,e){
/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
(function(r){var o=e,n=t&&t.exports==o&&t,i="object"==c(f)&&f;i.global!==i&&i.window!==i||(r=i);var a=function(t){this.message=t};a.prototype=new Error,a.prototype.name="InvalidCharacterError";var u=function(t){throw new a(t)},s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=/[\t\n\f\r ]/g,d={encode:function(t){t=String(t),/[^\0-\xFF]/.test(t)&&u("The string to be encoded contains characters outside of the Latin1 range.");var e,r,o,n,i=t.length%3,a="",c=-1,p=t.length-i;while(++c<p)e=t.charCodeAt(c)<<16,r=t.charCodeAt(++c)<<8,o=t.charCodeAt(++c),n=e+r+o,a+=s.charAt(n>>18&63)+s.charAt(n>>12&63)+s.charAt(n>>6&63)+s.charAt(63&n);return 2==i?(e=t.charCodeAt(c)<<8,r=t.charCodeAt(++c),n=e+r,a+=s.charAt(n>>10)+s.charAt(n>>4&63)+s.charAt(n<<2&63)+"="):1==i&&(n=t.charCodeAt(c),a+=s.charAt(n>>2)+s.charAt(n<<4&63)+"=="),a},decode:function(t){t=String(t).replace(p,"");var e=t.length;e%4==0&&(t=t.replace(/==?$/,""),e=t.length),(e%4==1||/[^+a-zA-Z0-9/]/.test(t))&&u("Invalid character: the string to be decoded is not correctly encoded.");var r,o,n=0,i="",a=-1;while(++a<e)o=s.indexOf(t.charAt(a)),r=n%4?64*r+o:o,n++%4&&(i+=String.fromCharCode(255&r>>(-2*n&6)));return i},version:"0.1.0"};if(o&&!o.nodeType)if(n)n.exports=d;else for(var h in d)d.hasOwnProperty(h)&&(o[h]=d[h]);else r.base64=d})(f)}));function I(t){var e="";if("string"===typeof t)e=t;else for(var r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return S.encode(e)}function O(t,e,r,n,i,a,c){void 0===c&&(c=function(){}),void 0===a&&(a="png"),a=function(t){t=t.toLowerCase().replace(/jpg/i,"jpeg");var e=t.match(/png|jpeg|bmp|gif/)[0];return"image/"+e}(a),/bmp/.test(a)?function(t,e,r,o,n,i){uni.canvasGetImageData({canvasId:t,x:e,y:r,width:o,height:n,success:function(t){i(t,null)},fail:function(t){i(null,t)}})}(t,e,r,n,i,(function(t,e){var r=function(t){var e=t.width,r=t.height,o=e*r*3,n=o+54,i=[66,77,255&n,n>>8&255,n>>16&255,n>>24&255,0,0,0,0,54,0,0,0],a=[40,0,0,0,255&e,e>>8&255,e>>16&255,e>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,1,0,24,0,0,0,0,0,255&o,o>>8&255,o>>16&255,o>>24&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=(4-3*e%4)%4,u=t.data,s="",p=e<<2,d=r,h=String.fromCharCode;do{for(var f=p*(d-1),l="",v=0;v<e;v++){var g=v<<2;l+=h(u[f+g+2])+h(u[f+g+1])+h(u[f+g])}for(var w=0;w<c;w++)l+=String.fromCharCode(0);s+=l}while(--d);var m=I(i.concat(a))+I(s);return m}(t);g(c)&&c(function(t,e){return"data:"+e+";base64,"+t}(r,"image/"+a),e)})):o("error","暂不支持生成'"+a+"'类型的base64图片"," at uview-ui/components/u-avatar-cropper/weCropper.js:732")}var j={convertToImage:O,convertToBMP:function(t,e){void 0===t&&(t={});var r=t.canvasId,o=t.x,n=t.y,i=t.width,a=t.height;return void 0===e&&(e=function(){}),O(r,o,n,i,a,"bmp",e)}};var T={touchStart:function(t){var e=t.touches,o=e[0],n=e[1];this.src&&(r(this,!0,null,null),this.__oneTouchStart(o),t.touches.length>=2&&this.__twoTouchStart(o,n))},touchMove:function(t){var e=t.touches,o=e[0],n=e[1];this.src&&(r(this,null,!0),1===t.touches.length&&this.__oneTouchMove(o),t.touches.length>=2&&this.__twoTouchMove(o,n))},touchEnd:function(t){this.src&&(r(this,!1,!1,!0),this.__xtouchEnd())}};var M=function(t){var e={};return function(t,e){Object.defineProperties(t,e)}(this,p),Object.keys(p).forEach((function(t){e[t]=p[t].default})),Object.assign(this,e,t),this.prepare(),this.attachPage(),this.createCtx(),this.observer(),this.cutt(),this.methods(),this.init(),this.update(),this};return M.prototype.init=function(){var t=this.src;return this.version="1.3.9","function"===typeof this.onReady&&this.onReady(this.ctx,this),t?this.pushOrign(t):this.updateCanvas(),r(this,!1,!1,!1),this.oldScale=1,this.newScale=1,this},Object.assign(M.prototype,T),M.prototype.prepare=function(){var t=this;t.attachPage=function(){var e=getCurrentPages(),r=e[e.length-1];Object.defineProperty(r,"wecropper",{get:function(){return o("warn","Instance will not be automatically bound to the page after v1.4.0\n\nPlease use a custom instance name instead\n\nExample: \nthis.mycropper = new WeCropper(options)\n\n// ...\nthis.mycropper.getCropperImage()"," at uview-ui/components/u-avatar-cropper/weCropper.js:211"),t},configurable:!0})},t.createCtx=function(){var e=t.id,r=t.targetId;e?(t.ctx=t.ctx||uni.createCanvasContext(e),t.targetCtx=t.targetCtx||uni.createCanvasContext(r)):o("error","constructor: create canvas context failed, 'id' must be valuable"," at uview-ui/components/u-avatar-cropper/weCropper.js:233")},t.deviceRadio=h/750},M.prototype.observer=function(){var t=this;t.on=function(e,r){return m.indexOf(e)>-1?g(r)&&("ready"===e?r(t):t["on"+function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(e)]=r):o("error","event: "+e+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:348"),t}},M.prototype.methods=function(){var t=this,e=t.width,r=t.height,o=t.id,n=t.targetId,i=t.pixelRatio,a=t.cut,c=a.x;void 0===c&&(c=0);var u=a.y;void 0===u&&(u=0);var s=a.width;void 0===s&&(s=e);var p=a.height;void 0===p&&(p=r),t.updateCanvas=function(e){return t.croperTarget&&t.ctx.drawImage(t.croperTarget,t.imgLeft,t.imgTop,t.scaleWidth,t.scaleHeight),g(t.onBeforeDraw)&&t.onBeforeDraw(t.ctx,t),t.setBoundStyle(t.boundStyle),t.ctx.draw(!1,e),t},t.pushOrigin=t.pushOrign=function(e){return t.src=e,g(t.onBeforeImageLoad)&&t.onBeforeImageLoad(t.ctx,t),x({src:e}).then((function(e){var r=e.width/e.height,o=s/p;return t.croperTarget=e.path,r<o?(t.rectX=c,t.baseWidth=s,t.baseHeight=s/r,t.rectY=u-Math.abs((p-t.baseHeight)/2)):(t.rectY=u,t.baseWidth=p*r,t.baseHeight=p,t.rectX=c-Math.abs((s-t.baseWidth)/2)),t.imgLeft=t.rectX,t.imgTop=t.rectY,t.scaleWidth=t.baseWidth,t.scaleHeight=t.baseHeight,t.update(),new Promise((function(e){t.updateCanvas(e)}))})).then((function(){g(t.onImageLoad)&&t.onImageLoad(t.ctx,t)}))},t.removeImage=function(){return t.src="",t.croperTarget="",y(t.ctx)},t.getCropperBase64=function(t){void 0===t&&(t=function(){}),j.convertToBMP({canvasId:o,x:c,y:u,width:s,height:p},t)},t.getCropperImage=function(e,r){var a=e,d={canvasId:o,x:c,y:u,width:s,height:p},h=function(){return Promise.resolve()};return w(a)&&a.original&&(h=function(){return t.targetCtx.drawImage(t.croperTarget,t.imgLeft*i,t.imgTop*i,t.scaleWidth*i,t.scaleHeight*i),d={canvasId:n,x:c*i,y:u*i,width:s*i,height:p*i},y(t.targetCtx)}),h().then((function(){w(a)&&(d=Object.assign({},d,a)),g(a)&&(r=a);var t=d.componentContext?[d,d.componentContext]:[d];return C.apply(null,t)})).then((function(e){var o=e.tempFilePath;return g(r)?r.call(t,o,null):o})).catch((function(e){if(!g(r))throw e;r.call(t,null,e)}))}},M.prototype.cutt=function(){var t=this,e=t.width,r=t.height,o=t.cut,n=o.x;void 0===n&&(n=0);var i=o.y;void 0===i&&(i=0);var a=o.width;void 0===a&&(a=e);var c=o.height;void 0===c&&(c=r),t.outsideBound=function(e,r){t.imgLeft=e>=n?n:t.scaleWidth+e-n<=a?n+a-t.scaleWidth:e,t.imgTop=r>=i?i:t.scaleHeight+r-i<=c?i+c-t.scaleHeight:r},t.setBoundStyle=function(o){void 0===o&&(o={});var u=o.color;void 0===u&&(u="#04b00f");var s=o.mask;void 0===s&&(s="rgba(0, 0, 0, 0.3)");var p=o.lineWidth;void 0===p&&(p=1);var d=p/2,h=[{start:{x:n-d,y:i+10-d},step1:{x:n-d,y:i-d},step2:{x:n+10-d,y:i-d}},{start:{x:n-d,y:i+c-10+d},step1:{x:n-d,y:i+c+d},step2:{x:n+10-d,y:i+c+d}},{start:{x:n+a-10+d,y:i-d},step1:{x:n+a+d,y:i-d},step2:{x:n+a+d,y:i+10-d}},{start:{x:n+a+d,y:i+c-10+d},step1:{x:n+a+d,y:i+c+d},step2:{x:n+a-10+d,y:i+c+d}}];t.ctx.beginPath(),t.ctx.setFillStyle(s),t.ctx.fillRect(0,0,n,r),t.ctx.fillRect(n,0,a,i),t.ctx.fillRect(n,i+c,a,r-i-c),t.ctx.fillRect(n+a,0,e-n-a,r),t.ctx.fill(),h.forEach((function(e){t.ctx.beginPath(),t.ctx.setStrokeStyle(u),t.ctx.setLineWidth(p),t.ctx.moveTo(e.start.x,e.start.y),t.ctx.lineTo(e.step1.x,e.step1.y),t.ctx.lineTo(e.step2.x,e.step2.y),t.ctx.stroke()}))}},M.prototype.update=function(){var t=this;t.src&&(t.__oneTouchStart=function(e){t.touchX0=Math.round(e.x),t.touchY0=Math.round(e.y)},t.__oneTouchMove=function(e){var r,o;if(t.touchended)return t.updateCanvas();r=Math.round(e.x-t.touchX0),o=Math.round(e.y-t.touchY0);var n=Math.round(t.rectX+r),i=Math.round(t.rectY+o);t.outsideBound(n,i),t.updateCanvas()},t.__twoTouchStart=function(e,r){var o,n,i;t.touchX1=Math.round(t.rectX+t.scaleWidth/2),t.touchY1=Math.round(t.rectY+t.scaleHeight/2),o=Math.round(r.x-e.x),n=Math.round(r.y-e.y),i=Math.round(Math.sqrt(o*o+n*n)),t.oldDistance=i},t.__twoTouchMove=function(e,r){var o=t.oldScale,n=t.oldDistance,i=t.scale,a=t.zoom;t.newScale=function(t,e,r,o,n){var i,a,c;return i=Math.round(n.x-o.x),a=Math.round(n.y-o.y),c=Math.round(Math.sqrt(i*i+a*a)),t+.001*r*(c-e)}(o,n,a,e,r),t.newScale<=1&&(t.newScale=1),t.newScale>=i&&(t.newScale=i),t.scaleWidth=Math.round(t.newScale*t.baseWidth),t.scaleHeight=Math.round(t.newScale*t.baseHeight);var c=Math.round(t.touchX1-t.scaleWidth/2),u=Math.round(t.touchY1-t.scaleHeight/2);t.outsideBound(c,u),t.updateCanvas()},t.__xtouchEnd=function(){t.oldScale=t.newScale,t.rectX=t.imgLeft,t.rectY=t.imgTop})},M}))}).call(this,r("0de9")["log"],r("c8ba"))}}]);