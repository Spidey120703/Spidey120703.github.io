(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uview-ui-components-u-avatar-cropper-u-avatar-cropper"],{"287e":function(t,e,r){var o=r("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.content[data-v-40d667f5]{background:#fff}.cropper[data-v-40d667f5]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:11}.cropper-buttons[data-v-40d667f5]{background-color:#000;color:#eee}.cropper-wrapper[data-v-40d667f5]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nflex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;background-color:#000}.cropper-buttons[data-v-40d667f5]{width:100vw;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nflex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;bottom:0;left:0;font-size:%?28?%}.cropper-buttons .upload[data-v-40d667f5],\n.cropper-buttons .getCropperImage[data-v-40d667f5]{width:50%;text-align:center}.cropper-buttons .upload[data-v-40d667f5]{text-align:left;padding-left:%?50?%}.cropper-buttons .getCropperImage[data-v-40d667f5]{text-align:right;padding-right:%?50?%}',""]),t.exports=e},3538:function(t,e,r){var o=r("287e");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=r("4f06").default;n("4eb7488e",o,!0,{sourceMap:!1,shadowMode:!1})},5935:function(t,e,r){"use strict";r.r(e);var o=r("e460"),n=r.n(o);for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);e["default"]=n.a},"74ce":function(t,e,r){"use strict";r.r(e);var o=r("e8d1"),n=r("5935");for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);r("fa28");var a,c=r("f0c5"),u=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,"40d667f5",null,!1,o["a"],a);e["default"]=u.exports},af61:function(t,e,r){(function(e,o){r("99af"),r("cb29"),r("4160"),r("c975"),r("fb6a"),r("b64b"),r("d3b7"),r("acd8"),r("ac1f"),r("25f0"),r("466d"),r("5319"),r("159b"),
/**
 * we-cropper v1.3.9
 * (c) 2020 dlhandsome
 * @license MIT
 */
function(e,r){t.exports=r()}(0,(function(){"use strict";var t=void 0,r=["touchstarted","touchmoved","touchended"];function n(t){return t.charAt(0).toUpperCase()+t.slice(1)}function i(t){var e=[],o=arguments.length-1;while(o-- >0)e[o]=arguments[o+1];r.forEach((function(r,o){void 0!==e[o]&&(t[r]=e[o])}))}function a(t,e){Object.defineProperties(t,e)}function c(){return t||(t=uni.getSystemInfoSync()),t}var u={},s=c(),p=s.pixelRatio,d={id:{default:"cropper",get:function(){return u.id},set:function(t){"string"!==typeof t&&e("error","id："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:56"),u.id=t}},width:{default:750,get:function(){return u.width},set:function(t){"number"!==typeof t&&e("error","width："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:68"),u.width=t}},height:{default:750,get:function(){return u.height},set:function(t){"number"!==typeof t&&e("error","height："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:80"),u.height=t}},pixelRatio:{default:p,get:function(){return u.pixelRatio},set:function(t){"number"!==typeof t&&e("error","pixelRatio："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:92"),u.pixelRatio=t}},scale:{default:2.5,get:function(){return u.scale},set:function(t){"number"!==typeof t&&e("error","scale："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:104"),u.scale=t}},zoom:{default:5,get:function(){return u.zoom},set:function(t){"number"!==typeof t?e("error","zoom："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:116"):(t<0||t>10)&&e("error","zoom should be ranged in 0 ~ 10"," at uview-ui/components/u-avatar-cropper/weCropper.js:118"),u.zoom=t}},src:{default:"",get:function(){return u.src},set:function(t){"string"!==typeof t&&e("error","src："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:130"),u.src=t}},cut:{default:{},get:function(){return u.cut},set:function(t){"object"!==typeof t&&e("error","cut："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:142"),u.cut=t}},boundStyle:{default:{},get:function(){return u.boundStyle},set:function(t){"object"!==typeof t&&e("error","boundStyle："+t+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:154"),u.boundStyle=t}},onReady:{default:null,get:function(){return u.ready},set:function(t){u.ready=t}},onBeforeImageLoad:{default:null,get:function(){return u.beforeImageLoad},set:function(t){u.beforeImageLoad=t}},onImageLoad:{default:null,get:function(){return u.imageLoad},set:function(t){u.imageLoad=t}},onBeforeDraw:{default:null,get:function(){return u.beforeDraw},set:function(t){u.beforeDraw=t}}},h=c(),f=h.windowWidth;function l(){var t=this;t.attachPage=function(){var r=getCurrentPages(),o=r[r.length-1];Object.defineProperty(o,"wecropper",{get:function(){return e("warn","Instance will not be automatically bound to the page after v1.4.0\n\nPlease use a custom instance name instead\n\nExample: \nthis.mycropper = new WeCropper(options)\n\n// ...\nthis.mycropper.getCropperImage()"," at uview-ui/components/u-avatar-cropper/weCropper.js:211"),t},configurable:!0})},t.createCtx=function(){var r=t.id,o=t.targetId;r?(t.ctx=t.ctx||uni.createCanvasContext(r),t.targetCtx=t.targetCtx||uni.createCanvasContext(o)):e("error","constructor: create canvas context failed, 'id' must be valuable"," at uview-ui/components/u-avatar-cropper/weCropper.js:233")},t.deviceRadio=f/750}var v="undefined"!==typeof window?window:"undefined"!==typeof o?o:"undefined"!==typeof self?self:{};function g(t,e){return e={exports:{}},t(e,e.exports),e.exports}var w=g((function(t,e){e.isStr=function(t){return"string"===typeof t},e.isNum=function(t){return"number"===typeof t},e.isArr=Array.isArray,e.isUndef=function(t){return void 0===t},e.isTrue=function(t){return!0===t},e.isFalse=function(t){return!1===t},e.isFunc=function(t){return"function"===typeof t},e.isObj=e.isObject=function(t){return null!==t&&"object"===typeof t};var r=Object.prototype.toString;e.isPlainObject=function(t){return"[object Object]"===r.call(t)};var o=Object.prototype.hasOwnProperty;e.hasOwn=function(t,e){return o.call(t,e)},e.noop=function(t,e,r){},e.isValidArrayIndex=function(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}})),b=w.isFunc,y=w.isPlainObject,m=["ready","beforeImageLoad","beforeDraw","imageLoad"];function x(){var t=this;t.on=function(r,o){return m.indexOf(r)>-1?b(o)&&("ready"===r?o(t):t["on"+n(r)]=o):e("error","event: "+r+" is invalid"," at uview-ui/components/u-avatar-cropper/weCropper.js:348"),t}}function C(t){return function(e){var r=[],o=arguments.length-1;while(o-- >0)r[o]=arguments[o+1];return void 0===e&&(e={}),new Promise((function(o,n){e.success=function(t){o(t)},e.fail=function(t){n(t)},t.apply(void 0,[e].concat(r))}))}}function S(t,e){return void 0===e&&(e=!1),new Promise((function(r){t.draw(e,r)}))}var j=C(uni.getImageInfo),I=C(uni.canvasToTempFilePath),O=g((function(t,e){
/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
(function(r){var o=e,n=t&&t.exports==o&&t,i="object"==typeof v&&v;i.global!==i&&i.window!==i||(r=i);var a=function(t){this.message=t};a.prototype=new Error,a.prototype.name="InvalidCharacterError";var c=function(t){throw new a(t)},u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=/[\t\n\f\r ]/g,p=function(t){t=String(t).replace(s,"");var e=t.length;e%4==0&&(t=t.replace(/==?$/,""),e=t.length),(e%4==1||/[^+a-zA-Z0-9/]/.test(t))&&c("Invalid character: the string to be decoded is not correctly encoded.");var r,o,n=0,i="",a=-1;while(++a<e)o=u.indexOf(t.charAt(a)),r=n%4?64*r+o:o,n++%4&&(i+=String.fromCharCode(255&r>>(-2*n&6)));return i},d=function(t){t=String(t),/[^\0-\xFF]/.test(t)&&c("The string to be encoded contains characters outside of the Latin1 range.");var e,r,o,n,i=t.length%3,a="",s=-1,p=t.length-i;while(++s<p)e=t.charCodeAt(s)<<16,r=t.charCodeAt(++s)<<8,o=t.charCodeAt(++s),n=e+r+o,a+=u.charAt(n>>18&63)+u.charAt(n>>12&63)+u.charAt(n>>6&63)+u.charAt(63&n);return 2==i?(e=t.charCodeAt(s)<<8,r=t.charCodeAt(++s),n=e+r,a+=u.charAt(n>>10)+u.charAt(n>>4&63)+u.charAt(n<<2&63)+"="):1==i&&(n=t.charCodeAt(s),a+=u.charAt(n>>2)+u.charAt(n<<4&63)+"=="),a},h={encode:d,decode:p,version:"0.1.0"};if(o&&!o.nodeType)if(n)n.exports=h;else for(var f in h)h.hasOwnProperty(f)&&(o[f]=h[f]);else r.base64=h})(v)}));function T(t,e){return"data:"+e+";base64,"+t}function W(t){t=t.toLowerCase().replace(/jpg/i,"jpeg");var e=t.match(/png|jpeg|bmp|gif/)[0];return"image/"+e}function k(t){var e="";if("string"===typeof t)e=t;else for(var r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return O.encode(e)}function M(t,e,r,o,n,i){uni.canvasGetImageData({canvasId:t,x:e,y:r,width:o,height:n,success:function(t){i(t,null)},fail:function(t){i(null,t)}})}function _(t){var e=t.width,r=t.height,o=e*r*3,n=o+54,i=[66,77,255&n,n>>8&255,n>>16&255,n>>24&255,0,0,0,0,54,0,0,0],a=[40,0,0,0,255&e,e>>8&255,e>>16&255,e>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,1,0,24,0,0,0,0,0,255&o,o>>8&255,o>>16&255,o>>24&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=(4-3*e%4)%4,u=t.data,s="",p=e<<2,d=r,h=String.fromCharCode;do{for(var f=p*(d-1),l="",v=0;v<e;v++){var g=v<<2;l+=h(u[f+g+2])+h(u[f+g+1])+h(u[f+g])}for(var w=0;w<c;w++)l+=String.fromCharCode(0);s+=l}while(--d);var b=k(i.concat(a))+k(s);return b}function A(t,r,o,n,i,a,c){void 0===c&&(c=function(){}),void 0===a&&(a="png"),a=W(a),/bmp/.test(a)?M(t,r,o,n,i,(function(t,e){var r=_(t);b(c)&&c(T(r,"image/"+a),e)})):e("error","暂不支持生成'"+a+"'类型的base64图片"," at uview-ui/components/u-avatar-cropper/weCropper.js:732")}var L={convertToImage:A,convertToBMP:function(t,e){void 0===t&&(t={});var r=t.canvasId,o=t.x,n=t.y,i=t.width,a=t.height;return void 0===e&&(e=function(){}),A(r,o,n,i,a,"bmp",e)}};function P(){var t=this,e=t.width,r=t.height,o=t.id,n=t.targetId,i=t.pixelRatio,a=t.cut,c=a.x;void 0===c&&(c=0);var u=a.y;void 0===u&&(u=0);var s=a.width;void 0===s&&(s=e);var p=a.height;void 0===p&&(p=r),t.updateCanvas=function(e){return t.croperTarget&&t.ctx.drawImage(t.croperTarget,t.imgLeft,t.imgTop,t.scaleWidth,t.scaleHeight),b(t.onBeforeDraw)&&t.onBeforeDraw(t.ctx,t),t.setBoundStyle(t.boundStyle),t.ctx.draw(!1,e),t},t.pushOrigin=t.pushOrign=function(e){return t.src=e,b(t.onBeforeImageLoad)&&t.onBeforeImageLoad(t.ctx,t),j({src:e}).then((function(e){var r=e.width/e.height,o=s/p;return t.croperTarget=e.path,r<o?(t.rectX=c,t.baseWidth=s,t.baseHeight=s/r,t.rectY=u-Math.abs((p-t.baseHeight)/2)):(t.rectY=u,t.baseWidth=p*r,t.baseHeight=p,t.rectX=c-Math.abs((s-t.baseWidth)/2)),t.imgLeft=t.rectX,t.imgTop=t.rectY,t.scaleWidth=t.baseWidth,t.scaleHeight=t.baseHeight,t.update(),new Promise((function(e){t.updateCanvas(e)}))})).then((function(){b(t.onImageLoad)&&t.onImageLoad(t.ctx,t)}))},t.removeImage=function(){return t.src="",t.croperTarget="",S(t.ctx)},t.getCropperBase64=function(t){void 0===t&&(t=function(){}),L.convertToBMP({canvasId:o,x:c,y:u,width:s,height:p},t)},t.getCropperImage=function(e,r){var a=e,d={canvasId:o,x:c,y:u,width:s,height:p},h=function(){return Promise.resolve()};return y(a)&&a.original&&(h=function(){return t.targetCtx.drawImage(t.croperTarget,t.imgLeft*i,t.imgTop*i,t.scaleWidth*i,t.scaleHeight*i),d={canvasId:n,x:c*i,y:u*i,width:s*i,height:p*i},S(t.targetCtx)}),h().then((function(){y(a)&&(d=Object.assign({},d,a)),b(a)&&(r=a);var t=d.componentContext?[d,d.componentContext]:[d];return I.apply(null,t)})).then((function(e){var o=e.tempFilePath;return b(r)?r.call(t,o,null):o})).catch((function(e){if(!b(r))throw e;r.call(t,null,e)}))}}var R=function(t,e,r,o,n){var i,a,c;return i=Math.round(n.x-o.x),a=Math.round(n.y-o.y),c=Math.round(Math.sqrt(i*i+a*a)),t+.001*r*(c-e)};function E(){var t=this;t.src&&(t.__oneTouchStart=function(e){t.touchX0=Math.round(e.x),t.touchY0=Math.round(e.y)},t.__oneTouchMove=function(e){var r,o;if(t.touchended)return t.updateCanvas();r=Math.round(e.x-t.touchX0),o=Math.round(e.y-t.touchY0);var n=Math.round(t.rectX+r),i=Math.round(t.rectY+o);t.outsideBound(n,i),t.updateCanvas()},t.__twoTouchStart=function(e,r){var o,n,i;t.touchX1=Math.round(t.rectX+t.scaleWidth/2),t.touchY1=Math.round(t.rectY+t.scaleHeight/2),o=Math.round(r.x-e.x),n=Math.round(r.y-e.y),i=Math.round(Math.sqrt(o*o+n*n)),t.oldDistance=i},t.__twoTouchMove=function(e,r){var o=t.oldScale,n=t.oldDistance,i=t.scale,a=t.zoom;t.newScale=R(o,n,a,e,r),t.newScale<=1&&(t.newScale=1),t.newScale>=i&&(t.newScale=i),t.scaleWidth=Math.round(t.newScale*t.baseWidth),t.scaleHeight=Math.round(t.newScale*t.baseHeight);var c=Math.round(t.touchX1-t.scaleWidth/2),u=Math.round(t.touchY1-t.scaleHeight/2);t.outsideBound(c,u),t.updateCanvas()},t.__xtouchEnd=function(){t.oldScale=t.newScale,t.rectX=t.imgLeft,t.rectY=t.imgTop})}var H={touchStart:function(t){var e=this,r=t.touches,o=r[0],n=r[1];e.src&&(i(e,!0,null,null),e.__oneTouchStart(o),t.touches.length>=2&&e.__twoTouchStart(o,n))},touchMove:function(t){var e=this,r=t.touches,o=r[0],n=r[1];e.src&&(i(e,null,!0),1===t.touches.length&&e.__oneTouchMove(o),t.touches.length>=2&&e.__twoTouchMove(o,n))},touchEnd:function(t){var e=this;e.src&&(i(e,!1,!1,!0),e.__xtouchEnd())}};function B(){var t=this,e=t.width,r=t.height,o=t.cut,n=o.x;void 0===n&&(n=0);var i=o.y;void 0===i&&(i=0);var a=o.width;void 0===a&&(a=e);var c=o.height;void 0===c&&(c=r),t.outsideBound=function(e,r){t.imgLeft=e>=n?n:t.scaleWidth+e-n<=a?n+a-t.scaleWidth:e,t.imgTop=r>=i?i:t.scaleHeight+r-i<=c?i+c-t.scaleHeight:r},t.setBoundStyle=function(o){void 0===o&&(o={});var u=o.color;void 0===u&&(u="#04b00f");var s=o.mask;void 0===s&&(s="rgba(0, 0, 0, 0.3)");var p=o.lineWidth;void 0===p&&(p=1);var d=p/2,h=[{start:{x:n-d,y:i+10-d},step1:{x:n-d,y:i-d},step2:{x:n+10-d,y:i-d}},{start:{x:n-d,y:i+c-10+d},step1:{x:n-d,y:i+c+d},step2:{x:n+10-d,y:i+c+d}},{start:{x:n+a-10+d,y:i-d},step1:{x:n+a+d,y:i-d},step2:{x:n+a+d,y:i+10-d}},{start:{x:n+a+d,y:i+c-10+d},step1:{x:n+a+d,y:i+c+d},step2:{x:n+a-10+d,y:i+c+d}}];t.ctx.beginPath(),t.ctx.setFillStyle(s),t.ctx.fillRect(0,0,n,r),t.ctx.fillRect(n,0,a,i),t.ctx.fillRect(n,i+c,a,r-i-c),t.ctx.fillRect(n+a,0,e-n-a,r),t.ctx.fill(),h.forEach((function(e){t.ctx.beginPath(),t.ctx.setStrokeStyle(u),t.ctx.setLineWidth(p),t.ctx.moveTo(e.start.x,e.start.y),t.ctx.lineTo(e.step1.x,e.step1.y),t.ctx.lineTo(e.step2.x,e.step2.y),t.ctx.stroke()}))}}var z="1.3.9",F=function(t){var e=this,r={};return a(e,d),Object.keys(d).forEach((function(t){r[t]=d[t].default})),Object.assign(e,r,t),e.prepare(),e.attachPage(),e.createCtx(),e.observer(),e.cutt(),e.methods(),e.init(),e.update(),e};return F.prototype.init=function(){var t=this,e=t.src;return t.version=z,"function"===typeof t.onReady&&t.onReady(t.ctx,t),e?t.pushOrign(e):t.updateCanvas(),i(t,!1,!1,!1),t.oldScale=1,t.newScale=1,t},Object.assign(F.prototype,H),F.prototype.prepare=l,F.prototype.observer=x,F.prototype.methods=P,F.prototype.cutt=B,F.prototype.update=E,F}))}).call(this,r("0de9")["log"],r("c8ba"))},cb29:function(t,e,r){var o=r("23e7"),n=r("81d5"),i=r("44d2");o({target:"Array",proto:!0},{fill:n}),i("fill")},e460:function(t,e,r){"use strict";var o=r("4ea4");r("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(r("af61")),i={props:{boundStyle:{type:Object,default:function(){return{lineWidth:4,borderColor:"rgb(245, 245, 245)",mask:"rgba(0, 0, 0, 0.35)"}}}},data:function(){return{bottomNavHeight:50,originWidth:200,width:0,height:0,cropperOpt:{id:"cropper",targetId:"targetCropper",pixelRatio:1,width:0,height:0,scale:2.5,zoom:8,cut:{x:(this.width-this.originWidth)/2,y:(this.height-this.originWidth)/2,width:this.originWidth,height:this.originWidth},boundStyle:{lineWidth:uni.upx2px(this.boundStyle.lineWidth),mask:this.boundStyle.mask,color:this.boundStyle.borderColor}},destWidth:200,rectWidth:200,fileType:"jpg",src:""}},onLoad:function(t){var e=this,r=uni.getSystemInfoSync();if(this.width=r.windowWidth,this.height=r.windowHeight-this.bottomNavHeight,this.cropperOpt.width=this.width,this.cropperOpt.height=this.height,this.cropperOpt.pixelRatio=r.pixelRatio,t.destWidth&&(this.destWidth=t.destWidth),t.rectWidth){var o=Number(t.rectWidth);this.cropperOpt.cut={x:(this.width-o)/2,y:(this.height-o)/2,width:o,height:o}}this.rectWidth=t.rectWidth,t.fileType&&(this.fileType=t.fileType),this.cropper=new n.default(this.cropperOpt).on("ready",(function(t){})).on("beforeImageLoad",(function(t){})).on("imageLoad",(function(t){})).on("beforeDraw",(function(t,e){})),uni.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#000000"}),uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){e.src=t.tempFilePaths[0],e.cropper.pushOrign(e.src)}})},methods:{touchStart:function(t){this.cropper.touchStart(t)},touchMove:function(t){this.cropper.touchMove(t)},touchEnd:function(t){this.cropper.touchEnd(t)},getCropperImage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.src)return this.$u.toast("请先选择图片再裁剪");var r={destHeight:Number(this.destWidth),destWidth:Number(this.destWidth),fileType:this.fileType};this.cropper.getCropperImage(r,(function(r,o){o?uni.showModal({title:"温馨提示",content:o.message}):e?uni.previewImage({current:"",urls:[r]}):(uni.$emit("uAvatarCropper",r),t.$u.route({type:"back"}))}))},uploadTap:function(){var t=this,e=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(r){e.src=r.tempFilePaths[0],e.cropper.pushOrign(t.src)}})}}};e.default=i},e8d1:function(t,e,r){"use strict";var o;r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{staticClass:"cropper-wrapper",style:{height:t.cropperOpt.height+"px"}},[r("v-uni-canvas",{staticClass:"cropper",style:{width:t.cropperOpt.width,height:t.cropperOpt.height,backgroundColor:"rgba(0, 0, 0, 0.8)"},attrs:{"disable-scroll":!0,"canvas-id":"cropper",id:"cropper"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd.apply(void 0,arguments)}}}),r("v-uni-canvas",{staticClass:"cropper",style:{position:"fixed",top:"-"+t.cropperOpt.width*t.cropperOpt.pixelRatio+"px",left:"-"+t.cropperOpt.height*t.cropperOpt.pixelRatio+"px",width:t.cropperOpt.width*t.cropperOpt.pixelRatio+"px",height:""+t.cropperOpt.height*t.cropperOpt.pixelRatio},attrs:{"disable-scroll":!0,"canvas-id":"targetId",id:"targetId"}})],1),r("v-uni-view",{staticClass:"cropper-buttons safe-area-padding",style:{height:t.bottomNavHeight+"px"}},[r("v-uni-view",{staticClass:"upload",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadTap.apply(void 0,arguments)}}},[t._v("选择图片")]),r("v-uni-view",{staticClass:"getCropperImage",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCropperImage(!1)}}},[t._v("确定")])],1)],1)},i=[]},fa28:function(t,e,r){"use strict";var o=r("3538"),n=r.n(o);n.a}}]);