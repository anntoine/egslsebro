function windowOpen(e,t,i){window.open(decodeURIComponent(e),decodeURIComponent(t),decodeURIComponent(i))}function extractAnchor(e){var t=e,i=t.indexOf("#");return-1!=i?t.substring(i+1):""}function initAnchorListener(){window.onhashchange=function(){visio=document.getElementById("Visio");var e=extractAnchor(window.location.hash);visio.onhashchange(escape(e))}}function onVisioHashChange(e){location.hash=unescape(e)}function setTitle(e){e&&(originalTitle=e,document.title=newtitle)}initAnchorListener();var isIE10orLesser=!!navigator.userAgent.match(/Trident/);if(isIE10orLesser){var originalTitle=document.title.replace(location.hash,"");document.attachEvent?document.attachEvent("onpropertychange",function(e){"title"===e.propertyName&&""!==originalTitle&&document.title!==originalTitle&&setTimeout(function(){document.title=originalTitle},1)}):document.addEventListener&&document.addEventListener("DOMSubtreeModified",function(e){"TITLE"===e.target.nodeName&&""!==originalTitle&&document.title!==originalTitle&&setTimeout(function(){document.title=originalTitle},1)},!1)}var swfobject=function(){function e(){if(!D){try{var e=F.getElementsByTagName("body")[0].appendChild(v("span"));e.parentNode.removeChild(e)}catch(t){return}D=!0;for(var i=M.length,n=0;i>n;n++)M[n]()}}function t(e){D?e():M[M.length]=e}function i(e){if(typeof H.addEventListener!=x)H.addEventListener("load",e,!1);else if(typeof F.addEventListener!=x)F.addEventListener("load",e,!1);else if(typeof H.attachEvent!=x)y(H,"onload",e);else if("function"==typeof H.onload){var t=H.onload;H.onload=function(){t(),e()}}else H.onload=e}function n(){_?a():r()}function a(){var e=F.getElementsByTagName("body")[0],t=v(S);t.setAttribute("type",V);var i=e.appendChild(t);if(i){var n=0;!function(){if(typeof i.GetVariable!=x){var a=i.GetVariable("$version");a&&(a=a.split(" ")[1].split(","),q.pv=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)])}else if(10>n)return n++,void setTimeout(arguments.callee,10);e.removeChild(t),i=null,r()}()}else r()}function r(){var e=P.length;if(e>0)for(var t=0;e>t;t++){var i=P[t].id,n=P[t].callbackFn,a={success:!1,id:i};if(q.pv[0]>0){var r=m(i);if(r)if(!g(P[t].swfVersion)||q.wk&&q.wk<312)if(P[t].expressInstall&&o()){var d={};d.data=P[t].expressInstall,d.width=r.getAttribute("width")||"0",d.height=r.getAttribute("height")||"0",r.getAttribute("class")&&(d.styleclass=r.getAttribute("class")),r.getAttribute("align")&&(d.align=r.getAttribute("align"));for(var u={},h=r.getElementsByTagName("param"),f=h.length,p=0;f>p;p++)"movie"!=h[p].getAttribute("name").toLowerCase()&&(u[h[p].getAttribute("name")]=h[p].getAttribute("value"));l(d,u,i,n)}else c(r),n&&n(a);else b(i,!0),n&&(a.success=!0,a.ref=s(i),n(a))}else if(b(i,!0),n){var v=s(i);v&&typeof v.SetVariable!=x&&(a.success=!0,a.ref=v),n(a)}}}function s(e){var t=null,i=m(e);if(i&&"OBJECT"==i.nodeName)if(typeof i.SetVariable!=x)t=i;else{var n=i.getElementsByTagName(S)[0];n&&(t=n)}return t}function o(){return!z&&g("6.0.65")&&(q.win||q.mac)&&!(q.wk&&q.wk<312)}function l(e,t,i,n){z=!0,C=n||null,I={success:!1,id:i};var a=m(i);if(a){"OBJECT"==a.nodeName?(E=d(a),N=null):(E=a,N=i),e.id=j,(typeof e.width==x||!/%$/.test(e.width)&&parseInt(e.width,10)<310)&&(e.width="310"),(typeof e.height==x||!/%$/.test(e.height)&&parseInt(e.height,10)<137)&&(e.height="137"),F.title=F.title.slice(0,47)+" - Flash Player Installation";var r=q.ie&&q.win?"ActiveX":"PlugIn",s="MMredirectURL="+H.location.toString().replace(/&/g,"%26")+"&MMplayerType="+r+"&MMdoctitle="+F.title;if(typeof t.flashvars!=x?t.flashvars+="&"+s:t.flashvars=s,q.ie&&q.win&&4!=a.readyState){var o=v("div");i+="SWFObjectNew",o.setAttribute("id",i),a.parentNode.insertBefore(o,a),a.style.display="none",function(){4==a.readyState?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)}()}u(e,t,i)}}function c(e){if(q.ie&&q.win&&4!=e.readyState){var t=v("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(d(e),t),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()}else e.parentNode.replaceChild(d(e),e)}function d(e){var t=v("div");if(q.win&&q.ie)t.innerHTML=e.innerHTML;else{var i=e.getElementsByTagName(S)[0];if(i){var n=i.childNodes;if(n)for(var a=n.length,r=0;a>r;r++)1==n[r].nodeType&&"PARAM"==n[r].nodeName||8==n[r].nodeType||t.appendChild(n[r].cloneNode(!0))}}return t}function u(e,t,i){var n,a=m(i);if(q.wk&&q.wk<312)return n;if(a)if(typeof e.id==x&&(e.id=i),q.ie&&q.win){var r="";for(var s in e)e[s]!=Object.prototype[s]&&("data"==s.toLowerCase()?t.movie=e[s]:"styleclass"==s.toLowerCase()?r+=' class="'+e[s]+'"':"classid"!=s.toLowerCase()&&(r+=" "+s+'="'+e[s]+'"'));var o="";for(var l in t)t[l]!=Object.prototype[l]&&(o+='<param name="'+l+'" value="'+t[l]+'" />');a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+o+"</object>",W[W.length]=e.id,n=m(e.id)}else{var c=v(S);c.setAttribute("type",V);for(var d in e)e[d]!=Object.prototype[d]&&("styleclass"==d.toLowerCase()?c.setAttribute("class",e[d]):"classid"!=d.toLowerCase()&&c.setAttribute(d,e[d]));for(var u in t)t[u]!=Object.prototype[u]&&"movie"!=u.toLowerCase()&&h(c,u,t[u]);a.parentNode.replaceChild(c,a),n=c}return n}function h(e,t,i){var n=v("param");n.setAttribute("name",t),n.setAttribute("value",i),e.appendChild(n)}function f(e){var t=m(e);t&&"OBJECT"==t.nodeName&&(q.ie&&q.win?(t.style.display="none",function(){4==t.readyState?p(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function p(e){var t=m(e);if(t){for(var i in t)"function"==typeof t[i]&&(t[i]=null);t.parentNode.removeChild(t)}}function m(e){var t=null;try{t=F.getElementById(e)}catch(i){}return t}function v(e){return F.createElement(e)}function y(e,t,i){e.attachEvent(t,i),R[R.length]=[e,t,i]}function g(e){var t=q.pv,i=e.split(".");return i[0]=parseInt(i[0],10),i[1]=parseInt(i[1],10)||0,i[2]=parseInt(i[2],10)||0,t[0]>i[0]||t[0]==i[0]&&t[1]>i[1]||t[0]==i[0]&&t[1]==i[1]&&t[2]>=i[2]?!0:!1}function w(e,t,i,n){if(!q.ie||!q.mac){var a=F.getElementsByTagName("head")[0];if(a){var r=i&&"string"==typeof i?i:"screen";if(n&&(A=null,L=null),!A||L!=r){var s=v("style");s.setAttribute("type","text/css"),s.setAttribute("media",r),A=a.appendChild(s),q.ie&&q.win&&typeof F.styleSheets!=x&&F.styleSheets.length>0&&(A=F.styleSheets[F.styleSheets.length-1]),L=r}q.ie&&q.win?A&&typeof A.addRule==S&&A.addRule(e,t):A&&typeof F.createTextNode!=x&&A.appendChild(F.createTextNode(e+" {"+t+"}"))}}}function b(e,t){if(U){var i=t?"visible":"hidden";D&&m(e)?m(e).style.visibility=i:w("#"+e,"visibility:"+i)}}function T(e){var t=/[\\\"<>\.;]/,i=null!=t.exec(e);return i&&typeof encodeURIComponent!=x?encodeURIComponent(e):e}{var E,N,C,I,A,L,x="undefined",S="object",k="Shockwave Flash",B="ShockwaveFlash.ShockwaveFlash",V="application/x-shockwave-flash",j="SWFObjectExprInst",O="onreadystatechange",H=window,F=document,$=navigator,_=!1,M=[n],P=[],W=[],R=[],D=!1,z=!1,U=!0,q=function(){var e=typeof F.getElementById!=x&&typeof F.getElementsByTagName!=x&&typeof F.createElement!=x,t=$.userAgent.toLowerCase(),i=$.platform.toLowerCase(),n=/win/.test(i?i:t),a=/mac/.test(i?i:t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,s=!1,o=[0,0,0],l=null;if(typeof $.plugins!=x&&typeof $.plugins[k]==S)l=$.plugins[k].description,!l||typeof $.mimeTypes!=x&&$.mimeTypes[V]&&!$.mimeTypes[V].enabledPlugin||(_=!0,s=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),o[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),o[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),o[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof H.ActiveXObject!=x)try{var c=new ActiveXObject(B);c&&(l=c.GetVariable("$version"),l&&(s=!0,l=l.split(" ")[1].split(","),o=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(d){}return{w3:e,pv:o,wk:r,ie:s,win:n,mac:a}}();!function(){q.w3&&((typeof F.readyState!=x&&"complete"==F.readyState||typeof F.readyState==x&&(F.getElementsByTagName("body")[0]||F.body))&&e(),D||(typeof F.addEventListener!=x&&F.addEventListener("DOMContentLoaded",e,!1),q.ie&&q.win&&(F.attachEvent(O,function(){"complete"==F.readyState&&(F.detachEvent(O,arguments.callee),e())}),H==top&&!function(){if(!D){try{F.documentElement.doScroll("left")}catch(t){return void setTimeout(arguments.callee,0)}e()}}()),q.wk&&!function(){return D?void 0:/loaded|complete/.test(F.readyState)?void e():void setTimeout(arguments.callee,0)}(),i(e)))}(),function(){q.ie&&q.win&&window.attachEvent("onunload",function(){for(var e=R.length,t=0;e>t;t++)R[t][0].detachEvent(R[t][1],R[t][2]);for(var i=W.length,n=0;i>n;n++)f(W[n]);for(var a in q)q[a]=null;q=null;for(var r in swfobject)swfobject[r]=null;swfobject=null})}()}return{registerObject:function(e,t,i,n){if(q.w3&&e&&t){var a={};a.id=e,a.swfVersion=t,a.expressInstall=i,a.callbackFn=n,P[P.length]=a,b(e,!1)}else n&&n({success:!1,id:e})},getObjectById:function(e){return q.w3?s(e):void 0},embedSWF:function(e,i,n,a,r,s,c,d,h,f){var p={success:!1,id:i};q.w3&&!(q.wk&&q.wk<312)&&e&&i&&n&&a&&r?(b(i,!1),t(function(){n+="",a+="";var t={};if(h&&typeof h===S)for(var m in h)t[m]=h[m];t.data=e,t.width=n,t.height=a;var v={};if(d&&typeof d===S)for(var y in d)v[y]=d[y];if(c&&typeof c===S)for(var w in c)typeof v.flashvars!=x?v.flashvars+="&"+w+"="+c[w]:v.flashvars=w+"="+c[w];if(g(r)){var T=u(t,v,i);t.id==i&&b(i,!0),p.success=!0,p.ref=T}else{if(s&&o())return t.data=s,void l(t,v,i,f);b(i,!0)}f&&f(p)})):f&&f(p)},switchOffAutoHideShow:function(){U=!1},ua:q,getFlashPlayerVersion:function(){return{major:q.pv[0],minor:q.pv[1],release:q.pv[2]}},hasFlashPlayerVersion:g,createSWF:function(e,t,i){return q.w3?u(e,t,i):void 0},showExpressInstall:function(e,t,i,n){q.w3&&o()&&l(e,t,i,n)},removeSWF:function(e){q.w3&&f(e)},createCSS:function(e,t,i,n){q.w3&&w(e,t,i,n)},addDomLoadEvent:t,addLoadEvent:i,getQueryParamValue:function(e){var t=F.location.search||F.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return T(t);for(var i=t.split("&"),n=0;n<i.length;n++)if(i[n].substring(0,i[n].indexOf("="))==e)return T(i[n].substring(i[n].indexOf("=")+1))}return""},expressInstallCallback:function(){if(z){var e=m(j);e&&E&&(e.parentNode.replaceChild(E,e),N&&(b(N,!0),q.ie&&q.win&&(E.style.display="block")),C&&C(I)),z=!1}}}}(),rgb2hex=function(){var e=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"),t=function(t){return isNaN(t)?"00":e[(t-t%16)/16]+e[t%16]};return function(e){return e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),e?"#"+t(e[1])+t(e[2])+t(e[3]):""}}(),flashvars={},params={menu:"false",scale:"noScale",allowFullscreen:"true",allowScriptAccess:"always",bgcolor:rgb2hex(document.body.style.backgroundColor),wmode:"direct"},attributes={id:"Visio",name:"Visio"},playerVersion=swfobject.getFlashPlayerVersion(),url3dfp15="publication/binary/visio3dfp15.swf",url3d="publication/binary/visio3d.swf",url2d="publication/binary/visio.swf",urlArgs=document.location.search.toLowerCase();playerVersion.major>=15&&(url3d=url3dfp15),webpublicationNamespace.Param.visio3d===!1&&(url3d="publication/binary/visio.swf",params.wmode="opaque");var urlVisio=url3d;-1!==urlArgs.indexOf("forceflash3d")?urlVisio=url3d:-1!==urlArgs.indexOf("forceflash2d")?(urlVisio=url2d,params.wmode="opaque"):(playerVersion.major<12||11===playerVersion.major&&playerVersion.minor<4)&&(urlVisio=url2d,params.wmode="opaque"),swfobject.embedSWF(urlVisio,"altContent","100%","100%","10.3","publication/js/expressInstall.swf",flashvars,params,attributes,function(e){e.success===!1&&webpublicationNamespace.Main.switcher.mobileSupported===!0?webpublicationNamespace.Main.switcher.rebuild():e.success===!1&&("undefined"==typeof jQuery?document.getElementsByClassName("noflash")[0].style.display="block":$(".noflash").css("display","block"))});var LightHtml=function(){var e={cont:"globals_lightbox",contBefore:"globals_lightbox-before",tabeCont:"light_table",tr2:"light_body_row",td2:"light_body_cell",td2_content:"td2_content",title:"light_body_title",close_bt:"close_bt"},t=function(e,t,i,n,a){e+=-1===e.indexOf("?")?"?":"&",e+="_zonesecure_sessionID="+webpublicationNamespace.Param.sessionId,this.url=e,this.width=t,this.height=i,this.atitle=n,this.into=a,isFinite(this.width)&&(this.width=this.width+"px"),this.numericalWidth=parseInt(this.width,10),isFinite(this.height)&&(this.height=this.height+"px"),this.numericalHeight=parseInt(this.height,10),this.autoId=e,this.transform=null,this.createHtml()},i=t.prototype;return i.create=function(e){return window.document.createElement(e)},i.className=function(e,t){e.className=t},i.createIframe=function(e){var t=this.create("iframe");return t.frameborder="0",t.src=e,t},i.append=function(e,t){e.appendChild(t)},i.createEvent=function(e,t){var i=this.contLightBox;i.closePop=this.closePop,e.addEventListener?(e.addEventListener("click",function(e){i.closePop()},!1),window.addEventListener("resize",this.rescale.bind(this),!1),-1!==this.width.indexOf("px")&&null!==this.transform&&(this.td2.style.textAlign="left",this.title.style.marginLeft=0)):(e.attachEvent("onclick",function(e){i.closePop()}),window.attachEvent("resize",this.rescale.bind(this)))},i.rescale=function(){var e=null,t=null,i=null,n=0,a=function(){e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)-this.title.clientHeight,i=1,e<this.numericalWidth&&(i=e/this.numericalWidth),t<this.numericalHeight&&i>t/this.numericalHeight&&(i=t/this.numericalHeight),this.td2.style.marginLeft=-this.numericalWidth*i/2+"px",this.td2.style.marginTop=-(this.numericalHeight+this.title.clientHeight)*i/2+"px",this.td2.style.width=this.numericalWidth*i+"px",this.td2.style.height=(this.numericalHeight+this.title.clientHeight)*i+"px",this.title.style.width=this.numericalWidth*i+"px",this.ifr.style[this.transform]="scale("+i+","+i+")"};return function(e){return e===!0?a.call(this):(0!==n&&(clearTimeout(n),n=0),void(n=setTimeout(a.bind(this),50)))}}(),i.closePop=function(){if("direct"===params.wmode){var e=document.getElementById("Visio");-1===navigator.userAgent.indexOf("Trident")?e.style.visibility="":(e.style.top="0",e.style.position="")}for(var t=this.getElementsByTagName("iframe"),i=0;i<t.length;i++)t[i].src="";setTimeout(function(){this.parentNode.removeChild(this)}.bind(this),0)},i.setTransform=function(e){"transform"in e.style?this.transform="transform":"webkitTransform"in e.style?this.transform="webkitTransform":"mozTransform"in e.style?this.transform="mozTransform":"oTransform"in e.style?this.transform="oTransform":"msTransform"in e.style&&(this.transform="msTransform")},i.createHtml=function(){var t=this.create("div");this.setTransform(t),this.contLightBox=t;var i=this.create("div"),n=this.create("div"),a=this.create("div"),r=this.create("div");if(this.className(t,e.cont),this.className(i,e.contBefore),this.className(a,e.title),this.className(r,e.close_bt),this.className(n,e.td2),this.append(t,i),this.append(t,n),this.title=a,this.ifr=this.createIframe(this.url),this.td2=n,this.title.style.width=this.width,this.ifr.style.width=this.width,this.ifr.style.height=this.height,this.append(a,r),this.append(n,a),this.append(n,this.ifr),"direct"===params.wmode)try{window.setTimeout(function(){var e=document.getElementById("Visio"),i=e.getSnapshot();-1===navigator.userAgent.indexOf("Trident")?e.style.visibility="hidden":(e.style.top="-100%",e.style.position="absolute"),t.style.backgroundImage="url(data:image/jpeg;base64,"+i+")"},10)}catch(s){}this.createEvent(t),this.rescale(!0),this.append(this.into,t)},t}(),loadDialog=function(e,t,i,n){new LightHtml(e,t,i,n,window.document.body)};