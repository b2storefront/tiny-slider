var tns=function(){var t=window,Ai=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Li=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Bi(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function Si(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Hi(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function Oi(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Di(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function ki(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Pi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Ri(t){return("insertRule"in t?t.cssRules:t.rules).length}function Ii(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),zi=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Wi=i?function(t,e){zi(t,e)||t.classList.add(e)}:function(t,e){zi(t,e)||(t.className+=" "+e)},qi=i?function(t,e){zi(t,e)&&t.classList.remove(e)}:function(t,e){zi(t,e)&&(t.className=t.className.replace(e,""))};function Fi(t,e){return t.hasAttribute(e)}function ji(t,e){return t.getAttribute(e)}function r(t){return void 0!==t.item}function Vi(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Gi(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Qi(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function Xi(t,e){"none"!==t.style.display&&(t.style.display="none")}function Yi(t,e){"none"===t.style.display&&(t.style.display="")}function Ki(t){return"none"!==window.getComputedStyle(t).display}function Ji(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function Ui(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var u=!!a&&{passive:!0};function _i(t,e,n){for(var i in e){var a=0<=["touchstart","touchmove"].indexOf(i)&&!n&&u;t.addEventListener(i,e[i],a)}}function Zi(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&u;t.removeEventListener(n,e[n],i)}}function $i(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var ta=function(H){H=Bi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,loadPrevNext:0,useLocalStorage:!0,nonce:!1},H||{});var O=document,m=window,a={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},e={},n=H.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=m.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}var y=e.tC?Si(e.tC):Hi(e,"tC",function(){var t=document,e=Oi(),n=Di(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(r=u[l],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?ki(e,n):i.remove(),a}(),n),g=e.tPL?Si(e.tPL):Hi(e,"tPL",function(){var t,e=document,n=Oi(),i=Di(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?ki(n,i):a.remove(),t}(),n),D=e.tMQ?Si(e.tMQ):Hi(e,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=Oi(),i=Di(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?ki(n,i):a.remove(),"absolute"===t}(),n),r=e.tTf?Si(e.tTf):Hi(e,"tTf",Ji("transform"),n),o=e.t3D?Si(e.t3D):Hi(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Oi(),a=Di(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?ki(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(r),n),x=e.tTDu?Si(e.tTDu):Hi(e,"tTDu",Ji("transitionDuration"),n),u=e.tTDe?Si(e.tTDe):Hi(e,"tTDe",Ji("transitionDelay"),n),b=e.tADu?Si(e.tADu):Hi(e,"tADu",Ji("animationDuration"),n),l=e.tADe?Si(e.tADe):Hi(e,"tADe",Ji("animationDelay"),n),s=e.tTE?Si(e.tTE):Hi(e,"tTE",Ui(x,"Transition"),n),c=e.tAE?Si(e.tAE):Hi(e,"tAE",Ui(b,"Animation"),n),f=m.console&&"function"==typeof m.console.warn,d=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],v={};if(d.forEach(function(t){if("string"==typeof H[t]){var e=H[t],n=O.querySelector(e);if(v[t]=e,!n||!n.nodeName)return void(f&&console.warn("Can't find",H[t]));H[t]=n}}),!(H.container.children.length<1)){var k=H.responsive,P=H.nested,R="carousel"===H.mode;if(k){0 in k&&(H=Bi(H,k[0]),delete k[0]);var p={};for(var h in k){var w=k[h];w="number"==typeof w?{items:w}:w,p[h]=w}k=p,p=null}if(R||function t(e){for(var n in e)R||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(H),!R){H.axis="horizontal",H.slideBy="page",H.edgePadding=!1;var I=H.animateIn,z=H.animateOut,C=H.animateDelay,W=H.animateNormal}var M,q,F="horizontal"===H.axis,T=O.createElement("div"),j=O.createElement("div"),V=H.container,E=V.parentNode,N=V.outerHTML,G=V.children,Q=G.length,X=on(),Y=!1;k&&Nn(),R&&(V.className+=" tns-vpfix");var A,L,B,S,K,J,U,_,Z,$=H.autoWidth,tt=cn("fixedWidth"),et=cn("edgePadding"),nt=cn("gutter"),it=ln(),at=cn("center"),rt=$?1:Math.floor(cn("items")),ot=cn("slideBy"),ut=H.viewportMax||H.fixedWidthViewportWidth,lt=cn("arrowKeys"),st=cn("speed"),ct=H.rewind,ft=!ct&&H.loop,dt=cn("autoHeight"),vt=cn("controls"),pt=cn("controlsText"),ht=cn("nav"),mt=cn("touch"),yt=cn("mouseDrag"),gt=cn("autoplay"),xt=cn("autoplayTimeout"),bt=cn("autoplayText"),wt=cn("autoplayHoverPause"),Ct=cn("autoplayResetOnVisibility"),Mt=(U=null,_=cn("nonce"),Z=document.createElement("style"),U&&Z.setAttribute("media",U),_&&Z.setAttribute("nonce",_),document.querySelector("head").appendChild(Z),Z.sheet?Z.sheet:Z.styleSheet),Tt=H.lazyload,Et=H.lazyloadSelector,Nt=cn("loadPrevNext"),At=[],Lt=ft?(K=function(){{if($||tt&&!ut)return Q-1;var t=tt?"fixedWidth":"items",e=[];if((tt||H[t]<Q)&&e.push(H[t]),k)for(var n in k){var i=k[n][t];i&&(tt||i<Q)&&e.push(i)}return e.length||e.push(0),Math.ceil(tt?ut/Math.min.apply(null,e):Math.max.apply(null,e))}}(),J=R?Math.ceil((5*K-Q)/2):4*K-Q,J=Math.max(K,J),sn("edgePadding")?J+1:J):0,Bt=R?Q+2*Lt:Q+Lt,St=!(!tt&&!$||ft),Ht=tt?Zn():null,Ot=!R||!ft,Dt=F?"left":"top",kt="",Pt="",Rt=tt?function(){return at&&!ft?Q-1:Math.ceil(-Ht/(tt+nt))}:$?function(){for(var t=0;t<Bt;t++)if(A[t]>=-Ht)return t}:function(){return at&&R&&!ft?Q-1:ft||R?Math.max(0,Bt-Math.ceil(rt)):Bt-1},It=nn(cn("startIndex")),zt=It,Wt=(en(),0),qt=$?null:Rt(),Ft=H.preventActionWhenRunning,jt=H.swipeAngle,Vt=!jt||"?",Gt=!1,Qt=H.onInit,Xt=new $i,Yt=" tns-slider tns-"+H.mode,Kt=V.id||(S=window.tnsId,window.tnsId=S?S+1:1,"tns"+window.tnsId),Jt=cn("disable"),Ut=!1,_t=H.freezable,Zt=!(!_t||$)&&En(),$t=!1,te={click:ui,keydown:function(t){t=hi(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);0<=e&&(0===e?Ce.disabled||ui(t,-1):Me.disabled||ui(t,1))}},ee={click:function(t){if(Gt){if(Ft)return;ri()}var e=mi(t=hi(t));for(;e!==Ae&&!Fi(e,"data-nav");)e=e.parentNode;if(Fi(e,"data-nav")){var n=He=Number(ji(e,"data-nav")),i=tt||$?n*Q/Be:n*rt,a=se?n:Math.min(Math.ceil(i),Q-1);oi(a,t),Oe===n&&(ze&&di(),He=-1)}},keydown:function(t){t=hi(t);var e=O.activeElement;if(!Fi(e,"data-nav"))return;var n=[a.LEFT,a.RIGHT,a.ENTER,a.SPACE].indexOf(t.keyCode),i=Number(ji(e,"data-nav"));0<=n&&(0===n?0<i&&pi(Ne[i-1]):1===n?i<Be-1&&pi(Ne[i+1]):oi(He=i,t))}},ne={mouseover:function(){ze&&(si(),We=!0)},mouseout:function(){We&&(li(),We=!1)}},ie={visibilitychange:function(){O.hidden?ze&&(si(),Fe=!0):Fe&&(li(),Fe=!1)}},ae={keydown:function(t){t=hi(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);0<=e&&ui(t,0===e?-1:1)}},re={touchstart:bi,touchmove:wi,touchend:Ci,touchcancel:Ci},oe={mousedown:bi,mousemove:wi,mouseup:Ci,mouseleave:Ci},ue=sn("controls"),le=sn("nav"),se=!!$||H.navAsThumbnails,ce=sn("autoplay"),fe=sn("touch"),de=sn("mouseDrag"),ve="tns-slide-active",pe="tns-slide-cloned",he="tns-complete",me={load:function(t){Pn(mi(t))},error:function(t){e=mi(t),Wi(e,"failed"),Rn(e);var e}},ye="force"===H.preventScrollOnTouch;if(ue)var ge,xe,be=H.controlsContainer,we=H.controlsContainer?H.controlsContainer.outerHTML:"",Ce=H.prevButton,Me=H.nextButton,Te=H.prevButton?H.prevButton.outerHTML:"",Ee=H.nextButton?H.nextButton.outerHTML:"";if(le)var Ne,Ae=H.navContainer,Le=H.navContainer?H.navContainer.outerHTML:"",Be=$?Q:Ti(),Se=0,He=-1,Oe=rn(),De=Oe,ke="tns-nav-active",Pe="Carousel Page ",Re=" (Current Slide)";if(ce)var Ie,ze,We,qe,Fe,je="forward"===H.autoplayDirection?1:-1,Ve=H.autoplayButton,Ge=H.autoplayButton?H.autoplayButton.outerHTML:"",Qe=["<span class='tns-visually-hidden'>"," animation</span>"];if(fe||de)var Xe,Ye,Ke={},Je={},Ue=!1,_e=F?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};$||tn(Jt||Zt),r&&(Dt=r,kt="translate",o?(kt+=F?"3d(":"3d(0px, ",Pt=F?", 0px, 0px)":", 0px)"):(kt+=F?"X(":"Y(",Pt=")")),R&&(V.className=V.className.replace("tns-vpfix","")),function(){sn("gutter");T.className="tns-outer",j.className="tns-inner",T.id=Kt+"-ow",j.id=Kt+"-iw",""===V.id&&(V.id=Kt);Yt+=g||$?" tns-subpixel":" tns-no-subpixel",Yt+=y?" tns-calc":" tns-no-calc",$&&(Yt+=" tns-autowidth");Yt+=" tns-"+H.axis,V.className+=Yt,R?((M=O.createElement("div")).id=Kt+"-mw",M.className="tns-ovh",T.appendChild(M),M.appendChild(j)):T.appendChild(j);if(dt){var t=M||j;t.className+=" tns-ah"}if(E.insertBefore(T,V),j.appendChild(V),Ii(G,function(t,e){Wi(t,"tns-item"),t.id||(t.id=Kt+"-item"+e),!R&&W&&Wi(t,W),Vi(t,{"aria-hidden":"true",tabindex:"-1"})}),Lt){for(var e=O.createDocumentFragment(),n=O.createDocumentFragment(),i=Lt;i--;){var a=i%Q,r=G[a].cloneNode(!0);if(Wi(r,pe),Gi(r,"id"),n.insertBefore(r,n.firstChild),R){var o=G[Q-1-a].cloneNode(!0);Wi(o,pe),Gi(o,"id"),e.appendChild(o)}}V.insertBefore(e,V.firstChild),V.appendChild(n),G=V.children}}(),function(){if(!R)for(var t=It,e=It+Math.min(Q,rt);t<e;t++){var n=G[t];n.style.left=100*(t-It)/rt+"%",Wi(n,I),qi(n,W)}F&&(g||$?(Pi(Mt,"#"+Kt+" > .tns-item","font-size:"+m.getComputedStyle(G[0]).fontSize+";",Ri(Mt)),Pi(Mt,"#"+Kt,"font-size:0;",Ri(Mt))):R&&Ii(G,function(t,e){var n;t.style.marginLeft=(n=e,y?y+"("+100*n+"% / "+Bt+")":100*n/Bt+"%")}));if(D){if(x){var i=M&&H.autoHeight?mn(H.speed):"";Pi(Mt,"#"+Kt+"-mw",i,Ri(Mt))}i=fn(H.edgePadding,H.gutter,H.fixedWidth,H.speed,H.autoHeight),Pi(Mt,"#"+Kt+"-iw",i,Ri(Mt)),R&&(i=F&&!$?"width:"+dn(H.fixedWidth,H.gutter,H.items)+";":"",x&&(i+=mn(st)),Pi(Mt,"#"+Kt,i,Ri(Mt))),i=F&&!$?vn(H.fixedWidth,H.gutter,H.items):"",H.gutter&&(i+=pn(H.gutter)),R||(x&&(i+=mn(st)),b&&(i+=yn(st))),i&&Pi(Mt,"#"+Kt+" > .tns-item",i,Ri(Mt))}else{R&&dt&&(M.style[x]=st/1e3+"s"),j.style.cssText=fn(et,nt,tt,dt),R&&F&&!$&&(V.style.width=dn(tt,nt,rt));var i=F&&!$?vn(tt,nt,rt):"";nt&&(i+=pn(nt)),i&&Pi(Mt,"#"+Kt+" > .tns-item",i,Ri(Mt))}if(k&&D)for(var a in k){a=parseInt(a);var r=k[a],i="",o="",u="",l="",s="",c=$?null:cn("items",a),f=cn("fixedWidth",a),d=cn("speed",a),v=cn("edgePadding",a),p=cn("autoHeight",a),h=cn("gutter",a);x&&M&&cn("autoHeight",a)&&"speed"in r&&(o="#"+Kt+"-mw{"+mn(d)+"}"),("edgePadding"in r||"gutter"in r)&&(u="#"+Kt+"-iw{"+fn(v,h,f,d,p)+"}"),R&&F&&!$&&("fixedWidth"in r||"items"in r||tt&&"gutter"in r)&&(l="width:"+dn(f,h,c)+";"),x&&"speed"in r&&(l+=mn(d)),l&&(l="#"+Kt+"{"+l+"}"),("fixedWidth"in r||tt&&"gutter"in r||!R&&"items"in r)&&(s+=vn(f,h,c)),"gutter"in r&&(s+=pn(h)),!R&&"speed"in r&&(x&&(s+=mn(d)),b&&(s+=yn(d))),s&&(s="#"+Kt+" > .tns-item{"+s+"}"),(i=o+u+l+s)&&Mt.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",Mt.cssRules.length)}}(),gn();var Ze=ft?R?function(){var t=Wt,e=qt;t+=ot,e-=ot,et?(t+=1,e-=1):tt&&(it+nt)%(tt+nt)&&(e-=1),Lt&&(e<It?It-=Q:It<t&&(It+=Q))}:function(){if(qt<It)for(;Wt+Q<=It;)It-=Q;else if(It<Wt)for(;It<=qt-Q;)It+=Q}:function(){It=Math.max(Wt,Math.min(qt,It))},$e=R?function(){var e,n,i,a,t,r,o,u,l,s,c;Un(V,""),x||!st?(ei(),st&&Ki(V)||ri()):(e=V,n=Dt,i=kt,a=Pt,t=$n(),r=st,o=ri,u=Math.min(r,10),l=0<=t.indexOf("%")?"%":"px",t=t.replace(l,""),s=Number(e.style[n].replace(i,"").replace(a,"").replace(l,"")),c=(t-s)/r*u,setTimeout(function t(){r-=u,s+=c,e.style[n]=i+s+l+a,0<r?setTimeout(t,u):o()},u)),F||Mi()}:function(){At=[];var t={};t[s]=t[c]=ri,Zi(G[zt],t),_i(G[It],t),ni(zt,I,z,!0),ni(It,W,I),s&&c&&st&&Ki(V)||ri()};return{version:"2.9.3",getInfo:Ni,events:Xt,goTo:oi,play:function(){gt&&!ze&&(fi(),qe=!1)},pause:function(){ze&&(di(),qe=!0)},isOn:Y,updateSliderHeight:jn,refresh:gn,destroy:function(){if(Mt.disabled=!0,Mt.ownerNode&&Mt.ownerNode.remove(),Zi(m,{resize:Mn}),lt&&Zi(O,ae),be&&Zi(be,te),Ae&&Zi(Ae,ee),Zi(V,ne),Zi(V,ie),Ve&&Zi(Ve,{click:vi}),gt&&clearInterval(Ie),R&&s){var t={};t[s]=ri,Zi(V,t)}mt&&Zi(V,re),yt&&Zi(V,oe);var r=[N,we,Te,Ee,Le,Ge];for(var e in d.forEach(function(t,e){var n="container"===t?T:H[t];if("object"==typeof n&&n){var i=!!n.previousElementSibling&&n.previousElementSibling,a=n.parentNode;n.outerHTML=r[e],H[t]=i?i.nextElementSibling:a.firstElementChild}}),d=I=z=C=W=F=T=j=V=E=N=G=Q=q=X=$=tt=et=nt=it=rt=ot=ut=lt=st=ct=ft=dt=Mt=Tt=A=At=Lt=Bt=St=Ht=Ot=Dt=kt=Pt=Rt=It=zt=Wt=qt=jt=Vt=Gt=Qt=Xt=Yt=Kt=Jt=Ut=_t=Zt=$t=te=ee=ne=ie=ae=re=oe=ue=le=se=ce=fe=de=ve=he=me=L=vt=pt=be=we=Ce=Me=ge=xe=ht=Ae=Le=Ne=Be=Se=He=Oe=De=ke=Pe=Re=gt=xt=je=bt=wt=Ve=Ge=Ct=Qe=Ie=ze=We=qe=Fe=Ke=Je=Xe=Ue=Ye=_e=mt=yt=null,this)"rebuild"!==e&&(this[e]=null);Y=!1},rebuild:function(){return ta(Bi(H,v))}}}function tn(t){t&&(vt=ht=mt=yt=lt=gt=wt=Ct=!1)}function en(){for(var t=R?It-Lt:It;t<0;)t+=Q;return t%Q+1}function nn(t){return t=t?Math.max(0,Math.min(ft?Q-1:Q-rt,t)):0,R?t+Lt:t}function an(t){for(null==t&&(t=It),R&&(t-=Lt);t<0;)t+=Q;return Math.floor(t%Q)}function rn(){var t,e=an();return t=se?e:tt||$?Math.ceil((e+1)*Be/Q-1):Math.floor(e/rt),!ft&&R&&It===qt&&(t=Be-1),t}function on(){return m.innerWidth||O.documentElement.clientWidth||O.body.clientWidth}function un(t){return"top"===t?"afterbegin":"beforeend"}function ln(){var t=et?2*et-nt:0;return function t(e){if(null!=e){var n,i,a=O.createElement("div");return e.appendChild(a),i=(n=a.getBoundingClientRect()).right-n.left,a.remove(),i||t(e.parentNode)}}(E)-t}function sn(t){if(H[t])return!0;if(k)for(var e in k)if(k[e][t])return!0;return!1}function cn(t,e){if(null==e&&(e=X),"items"===t&&tt)return Math.floor((it+nt)/(tt+nt))||1;var n=H[t];if(k)for(var i in k)e>=parseInt(i)&&t in k[i]&&(n=k[i][t]);return"slideBy"===t&&"page"===n&&(n=cn("items")),R||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function fn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=F?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(F?u+" 0 0":"0 "+u+" 0")+";"}return!R&&a&&x&&i&&(r+=mn(i)),r}function dn(t,e,n){return t?(t+e)*Bt+"px":y?y+"("+100*Bt+"% / "+n+")":100*Bt/n+"%"}function vn(t,e,n){var i;if(t)i=t+e+"px";else{R||(n=Math.floor(n));var a=R?Bt:n;i=y?y+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==P?i+";":i+" !important;"}function pn(t){var e="";!1!==t&&(e=(F?"padding-":"margin-")+(F?"right":"bottom")+": "+t+"px;");return e}function hn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function mn(t){return hn(x,18)+"transition-duration:"+t/1e3+"s;"}function yn(t){return hn(b,17)+"animation-duration:"+t/1e3+"s;"}function gn(){if(sn("autoHeight")||$||!F){var t=V.querySelectorAll("img");Ii(t,function(t){var e=t.src;Tt||(e&&e.indexOf("data:image")<0?(t.src="",_i(t,me),Wi(t,"loading"),t.src=e):Pn(t))}),Ai(function(){Wn(Qi(t),function(){L=!0})}),sn("autoHeight")&&(t=In(It,Math.min(It+rt-1,Bt-1))),Tt?xn():Ai(function(){Wn(Qi(t),xn)})}else R&&ti(),wn(),Cn()}function xn(){if($&&1<Q){var i=ft?It:Q-1;!function t(){var e=G[i].getBoundingClientRect().left,n=G[i-1].getBoundingClientRect().right;Math.abs(e-n)<=1?bn():setTimeout(function(){t()},16)}()}else bn()}function bn(){F&&!$||(Vn(),$?(Ht=Zn(),_t&&(Zt=En()),qt=Rt(),tn(Jt||Zt)):Mi()),R&&ti(),wn(),Cn()}function wn(){if(Gn(),T.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+On()+"</span>  of "+Q+"</div>"),B=T.querySelector(".tns-liveregion .current"),ce){var t=gt?"stop":"start";Ve?Vi(Ve,{"data-action":t}):H.autoplayButtonOutput&&(T.insertAdjacentHTML(un(H.autoplayPosition),'<button type="button" data-action="'+t+'">'+Qe[0]+t+Qe[1]+bt[0]+"</button>"),Ve=T.querySelector("[data-action]")),Ve&&_i(Ve,{click:vi}),gt&&(fi(),wt&&_i(V,ne),Ct&&_i(V,ie))}if(le){if(Ae)Vi(Ae,{"aria-label":"Carousel Pagination"}),Ii(Ne=Ae.children,function(t,e){Vi(t,{"data-nav":e,tabindex:"-1","aria-label":Pe+(e+1),"aria-controls":Kt})});else{for(var e="",n=se?"":'style="display:none"',i=0;i<Q;i++)e+='<button type="button" data-nav="'+i+'" tabindex="-1" aria-controls="'+Kt+'" '+n+' aria-label="'+Pe+(i+1)+'"></button>';e='<div class="tns-nav" aria-label="Carousel Pagination">'+e+"</div>",T.insertAdjacentHTML(un(H.navPosition),e),Ae=T.querySelector(".tns-nav"),Ne=Ae.children}if(Ei(),x){var a=x.substring(0,x.length-18).toLowerCase(),r="transition: all "+st/1e3+"s";a&&(r="-"+a+"-"+r),Pi(Mt,"[aria-controls^="+Kt+"-item]",r,Ri(Mt))}Vi(Ne[Oe],{"aria-label":Pe+(Oe+1)+Re}),Gi(Ne[Oe],"tabindex"),Wi(Ne[Oe],ke),_i(Ae,ee)}ue&&(be||Ce&&Me||(T.insertAdjacentHTML(un(H.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+Kt+'">'+pt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+Kt+'">'+pt[1]+"</button></div>"),be=T.querySelector(".tns-controls")),Ce&&Me||(Ce=be.children[0],Me=be.children[1]),H.controlsContainer&&Vi(be,{"aria-label":"Carousel Navigation",tabindex:"0"}),(H.controlsContainer||H.prevButton&&H.nextButton)&&Vi([Ce,Me],{"aria-controls":Kt,tabindex:"-1"}),(H.controlsContainer||H.prevButton&&H.nextButton)&&(Vi(Ce,{"data-controls":"prev"}),Vi(Me,{"data-controls":"next"})),ge=Xn(Ce),xe=Xn(Me),Jn(),be?_i(be,te):(_i(Ce,te),_i(Me,te))),An()}function Cn(){if(R&&s){var t={};t[s]=ri,_i(V,t)}mt&&_i(V,re,H.preventScrollOnTouch),yt&&_i(V,oe),lt&&_i(O,ae),"inner"===P?Xt.on("outerResized",function(){Tn(),Xt.emit("innerLoaded",Ni())}):(k||tt||$||dt||!F)&&_i(m,{resize:Mn}),dt&&("outer"===P?Xt.on("innerLoaded",zn):Jt||zn()),kn(),Jt?Sn():Zt&&Bn(),Xt.on("indexChanged",qn),"inner"===P&&Xt.emit("innerLoaded",Ni()),"function"==typeof Qt&&Qt(Ni()),Y=!0}function Mn(t){Ai(function(){Tn(hi(t))})}function Tn(t){if(Y){"outer"===P&&Xt.emit("outerResized",Ni(t)),X=on();var e,n=q,i=!1;k&&(Nn(),(e=n!==q)&&Xt.emit("newBreakpointStart",Ni(t)));var a,r,o,u,l=rt,s=Jt,c=Zt,f=lt,d=vt,v=ht,p=mt,h=yt,m=gt,y=wt,g=Ct,x=It;if(e){var b=tt,w=dt,C=pt,M=at,T=bt;if(!D)var E=nt,N=et}if(lt=cn("arrowKeys"),vt=cn("controls"),ht=cn("nav"),mt=cn("touch"),at=cn("center"),yt=cn("mouseDrag"),gt=cn("autoplay"),wt=cn("autoplayHoverPause"),Ct=cn("autoplayResetOnVisibility"),e&&(Jt=cn("disable"),tt=cn("fixedWidth"),st=cn("speed"),dt=cn("autoHeight"),pt=cn("controlsText"),bt=cn("autoplayText"),xt=cn("autoplayTimeout"),D||(et=cn("edgePadding"),nt=cn("gutter"))),tn(Jt),it=ln(),F&&!$||Jt||(Vn(),F||(Mi(),i=!0)),(tt||$)&&(Ht=Zn(),qt=Rt()),(e||tt)&&(rt=cn("items"),ot=cn("slideBy"),(r=rt!==l)&&(tt||$||(qt=Rt()),Ze())),e&&Jt!==s&&(Jt?Sn():function(){if(!Ut)return;if(Mt.disabled=!1,V.className+=Yt,ti(),ft)for(var t=Lt;t--;)R&&Yi(G[t]),Yi(G[Bt-t-1]);if(!R)for(var e=It,n=It+Q;e<n;e++){var i=G[e],a=e<It+rt?I:W;i.style.left=100*(e-It)/rt+"%",Wi(i,a)}Ln(),Ut=!1}()),_t&&(e||tt||$)&&(Zt=En())!==c&&(Zt?(ei($n(nn(0))),Bn()):(!function(){if(!$t)return;et&&D&&(j.style.margin="");if(Lt)for(var t="tns-transparent",e=Lt;e--;)R&&qi(G[e],t),qi(G[Bt-e-1],t);Ln(),$t=!1}(),i=!0)),tn(Jt||Zt),gt||(wt=Ct=!1),lt!==f&&(lt?_i(O,ae):Zi(O,ae)),vt!==d&&(vt?be?Yi(be):(Ce&&Yi(Ce),Me&&Yi(Me)):be?Xi(be):(Ce&&Xi(Ce),Me&&Xi(Me))),ht!==v&&(ht?(Yi(Ae),Ei()):Xi(Ae)),mt!==p&&(mt?_i(V,re,H.preventScrollOnTouch):Zi(V,re)),yt!==h&&(yt?_i(V,oe):Zi(V,oe)),gt!==m&&(gt?(Ve&&Yi(Ve),ze||qe||fi()):(Ve&&Xi(Ve),ze&&di())),wt!==y&&(wt?_i(V,ne):Zi(V,ne)),Ct!==g&&(Ct?_i(O,ie):Zi(O,ie)),e){if(tt===b&&at===M||(i=!0),dt!==w&&(dt||(j.style.height="")),vt&&pt!==C&&(Ce.innerHTML=pt[0],Me.innerHTML=pt[1]),Ve&&bt!==T){var A=gt?1:0,L=Ve.innerHTML,B=L.length-T[A].length;L.substring(B)===T[A]&&(Ve.innerHTML=L.substring(0,B)+bt[A])}}else at&&(tt||$)&&(i=!0);if((r||tt&&!$)&&(Be=Ti(),Ei()),(a=It!==x)?(Xt.emit("indexChanged",Ni()),i=!0):r?a||qn():(tt||$)&&(kn(),Gn(),Hn()),r&&!R&&function(){for(var t=It+Math.min(Q,rt),e=Bt;e--;){var n=G[e];It<=e&&e<t?(Wi(n,"tns-moving"),n.style.left=100*(e-It)/rt+"%",Wi(n,I),qi(n,W)):n.style.left&&(n.style.left="",Wi(n,W),qi(n,I)),qi(n,z)}setTimeout(function(){Ii(G,function(t){qi(t,"tns-moving")})},300)}(),!Jt&&!Zt){if(e&&!D&&(et===N&&nt===E||(j.style.cssText=fn(et,nt,tt,st,dt)),F)){R&&(V.style.width=dn(tt,nt,rt));var S=vn(tt,nt,rt)+pn(nt);u=Ri(o=Mt)-1,"deleteRule"in o?o.deleteRule(u):o.removeRule(u),Pi(Mt,"#"+Kt+" > .tns-item",S,Ri(Mt))}dt&&zn(),i&&(ti(),zt=It)}e&&Xt.emit("newBreakpointEnd",Ni(t))}}function En(){if(!tt&&!$)return Q<=(at?rt-(rt-1)/2:rt);var t=tt?(tt+nt)*Q:A[Q],e=et?it+2*et:it+nt;return at&&(e-=tt?(it-tt)/2:(it-(A[It+1]-A[It]-nt))/2),t<=e}function Nn(){for(var t in q=0,k)(t=parseInt(t))<=X&&(q=t)}function An(){!gt&&Ve&&Xi(Ve),!ht&&Ae&&Xi(Ae),vt||(be?Xi(be):(Ce&&Xi(Ce),Me&&Xi(Me)))}function Ln(){gt&&Ve&&Yi(Ve),ht&&Ae&&Yi(Ae),vt&&(be?Yi(be):(Ce&&Yi(Ce),Me&&Yi(Me)))}function Bn(){if(!$t){if(et&&(j.style.margin="0px"),Lt)for(var t="tns-transparent",e=Lt;e--;)R&&Wi(G[e],t),Wi(G[Bt-e-1],t);An(),$t=!0}}function Sn(){if(!Ut){if(Mt.disabled=!0,V.className=V.className.replace(Yt.substring(1),""),Gi(V,["style"]),ft)for(var t=Lt;t--;)R&&Xi(G[t]),Xi(G[Bt-t-1]);if(F&&R||Gi(j,["style"]),!R)for(var e=It,n=It+Q;e<n;e++){var i=G[e];Gi(i,["style"]),qi(i,I),qi(i,W)}An(),Ut=!0}}function Hn(){var t=On();B.innerHTML!==t&&(B.innerHTML=t)}function On(){var t=Dn(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function Dn(t){null==t&&(t=$n());var n,i,a,r=It;if(at||et?($||tt)&&(i=-(parseFloat(t)+et),a=i+it+2*et):$&&(i=A[It],a=i+it),$)A.forEach(function(t,e){e<Bt&&((at||et)&&t<=i+.5&&(r=e),.5<=a-t&&(n=e))});else{if(tt){var e=tt+nt;at||et?(r=Math.floor(i/e),n=Math.ceil(a/e-1)):n=r+Math.ceil(it/e)-1}else if(at||et){var o=rt-1;if(at?(r-=o/2,n=It+o/2):n=It+o,et){var u=et*rt/it;r-=u,n+=u}r=Math.floor(r),n=Math.ceil(n)}else n=r+rt-1;r=Math.max(r,0),n=Math.min(n,Bt-1)}return[r,n]}function kn(){Tt&&!Jt&&(Dn().push(Et),In.apply(null,Dn()).forEach(function(t){if(!zi(t,he)){var e={};e[s]=function(t){t.stopPropagation()},_i(t,e),_i(t,me),t.src=ji(t,"data-src");var n=ji(t,"data-srcset");n&&(t.srcset=n),Wi(t,"loading")}}))}function Pn(t){Wi(t,"loaded"),Rn(t)}function Rn(t){Wi(t,he),qi(t,"loading"),Zi(t,me)}function In(t,e){0<=t-Nt?t-=Nt:t=0,G.length>e+Nt?e+=Nt:e=G.length-1;for(var n=[];t<=e;)Ii(G[t].querySelectorAll("img"),function(t){n.push(t)}),t++;return window.imgs=n,window.slideItems=G,n}function zn(){var t=In.apply(null,Dn());Ai(function(){Wn(t,jn)})}function Wn(n,t){return L?t():(n.forEach(function(t,e){!Tt&&t.complete&&Rn(t),zi(t,he)&&n.splice(e,1)}),n.length?void Ai(function(){Wn(n,t)}):t())}function qn(){kn(),Gn(),Hn(),Jn(),function(){if(ht&&(Oe=0<=He?He:rn(),He=-1,Oe!==De)){var t=Ne[De],e=Ne[Oe];Vi(t,{tabindex:"-1","aria-label":Pe+(De+1)}),qi(t,ke),Vi(e,{"aria-label":Pe+(Oe+1)+Re}),Gi(e,"tabindex"),Wi(e,ke),De=Oe}}()}function Fn(t,e){for(var n=[],i=t,a=Math.min(t+e,Bt);i<a;i++)n.push(G[i].offsetHeight);return Math.max.apply(null,n)}function jn(){var t=dt?Fn(It,rt):Fn(Lt,Q),e=M||j;e.style.height!==t&&(e.style.height=t+"px")}function Vn(){A=[0];var n=F?"left":"top",i=F?"right":"bottom",a=G[0].getBoundingClientRect()[n];Ii(G,function(t,e){e&&A.push(t.getBoundingClientRect()[n]-a),e===Bt-1&&A.push(t.getBoundingClientRect()[i]-a)})}function Gn(){var t=Dn(),n=t[0],i=t[1];Ii(G,function(t,e){n<=e&&e<=i?Fi(t,"aria-hidden")&&(Gi(t,["aria-hidden","tabindex"]),Wi(t,ve)):Fi(t,"aria-hidden")||(Vi(t,{"aria-hidden":"true",tabindex:"-1"}),qi(t,ve))})}function Qn(t){return t.nodeName.toLowerCase()}function Xn(t){return"button"===Qn(t)}function Yn(t){return"true"===t.getAttribute("aria-disabled")}function Kn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Jn(){if(vt&&!ct&&!ft){var t=ge?Ce.disabled:Yn(Ce),e=xe?Me.disabled:Yn(Me),n=It<=Wt,i=!ct&&qt<=It;n&&!t&&Kn(ge,Ce,!0),!n&&t&&Kn(ge,Ce,!1),i&&!e&&Kn(xe,Me,!0),!i&&e&&Kn(xe,Me,!1)}}function Un(t,e){x&&(t.style[x]=e)}function _n(t){return null==t&&(t=It),$?(it-(et?nt:0)-(A[t+1]-A[t]-nt))/2:tt?(it-tt)/2:(rt-1)/2}function Zn(){var t=it+(et?nt:0)-(tt?(tt+nt)*Bt:A[Bt]);return at&&!ft&&(t=tt?-(tt+nt)*(Bt-1)-_n():_n(Bt-1)-A[Bt-1]),0<t&&(t=0),t}function $n(t){var e;if(null==t&&(t=It),F&&!$)if(tt)e=-(tt+nt)*t,at&&(e+=_n());else{var n=r?Bt:rt;at&&(t-=_n()),e=100*-t/n}else e=-A[t],at&&$&&(e+=_n());return St&&(e=Math.max(e,Ht)),e+=!F||$||tt?"px":"%"}function ti(t){Un(V,"0s"),ei(t)}function ei(t){null==t&&(t=$n()),V.style[Dt]=kt+t+Pt}function ni(t,e,n,i){var a=t+rt;ft||(a=Math.min(a,Bt));for(var r=t;r<a;r++){var o=G[r];i||(o.style.left=100*(r-It)/rt+"%"),C&&u&&(o.style[u]=o.style[l]=C*(r-t)/1e3+"s"),qi(o,e),Wi(o,n),i&&At.push(o)}}function ii(t,e){Ot&&Ze(),(It!==zt||e)&&(Xt.emit("indexChanged",Ni()),Xt.emit("transitionStart",Ni()),dt&&zn(),ze&&t&&0<=["click","keydown"].indexOf(t.type)&&di(),Gt=!0,$e())}function ai(t){return t.toLowerCase().replace(/-/g,"")}function ri(t){if(R||Gt){if(Xt.emit("transitionEnd",Ni(t)),!R&&0<At.length)for(var e=0;e<At.length;e++){var n=At[e];n.style.left="",l&&u&&(n.style[l]="",n.style[u]=""),qi(n,z),Wi(n,W)}if(!t||!R&&t.target.parentNode===V||t.target===V&&ai(t.propertyName)===ai(Dt)){if(!Ot){var i=It;Ze(),It!==i&&(Xt.emit("indexChanged",Ni()),ti())}"inner"===P&&Xt.emit("innerLoaded",Ni()),Gt=!1,zt=It}}}function oi(t,e){if(!Zt)if("prev"===t)ui(e,-1);else if("next"===t)ui(e,1);else{if(Gt){if(Ft)return;ri()}var n=an(),i=0;if("first"===t?i=-n:"last"===t?i=R?Q-rt-n:Q-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(Q-1,t))),i=t-n)),!R&&i&&Math.abs(i)<rt){var a=0<i?1:-1;i+=Wt<=It+i-Q?Q*a:2*Q*a*-1}It+=i,R&&ft&&(It<Wt&&(It+=Q),qt<It&&(It-=Q)),an(It)!==an(zt)&&ii(e)}}function ui(t,e){if(Gt){if(Ft)return;ri()}var n;if(!e){for(var i=mi(t=hi(t));i!==be&&[Ce,Me].indexOf(i)<0;)i=i.parentNode;var a=[Ce,Me].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(ct){if(It===Wt&&-1===e)return void oi("last",t);if(It===qt&&1===e)return void oi("first",t)}e&&(It+=ot*e,$&&(It=Math.floor(It)),ii(n||t&&"keydown"===t.type?t:null))}function li(){Ie=setInterval(function(){ui(null,je)},xt),ze=!0}function si(){clearInterval(Ie),ze=!1}function ci(t,e){Vi(Ve,{"data-action":t}),Ve.innerHTML=Qe[0]+t+Qe[1]+e}function fi(){li(),Ve&&ci("stop",bt[1])}function di(){si(),Ve&&ci("start",bt[0])}function vi(){ze?(di(),qe=!0):(fi(),qe=!1)}function pi(t){t.focus()}function hi(t){return yi(t=t||m.event)?t.changedTouches[0]:t}function mi(t){return t.target||m.event.srcElement}function yi(t){return 0<=t.type.indexOf("touch")}function gi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function xi(){return a=Je.y-Ke.y,r=Je.x-Ke.x,t=Math.atan2(a,r)*(180/Math.PI),e=jt,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),n===H.axis;var t,e,n,i,a,r}function bi(t){if(Gt){if(Ft)return;ri()}gt&&ze&&si(),Ue=!0,Ye&&(Li(Ye),Ye=null);var e=hi(t);Xt.emit(yi(t)?"touchStart":"dragStart",Ni(t)),!yi(t)&&0<=["img","a"].indexOf(Qn(mi(t)))&&gi(t),Je.x=Ke.x=e.clientX,Je.y=Ke.y=e.clientY,R&&(Xe=parseFloat(V.style[Dt].replace(kt,"")),Un(V,"0s"))}function wi(t){if(Ue){var e=hi(t);Je.x=e.clientX,Je.y=e.clientY,R?Ye||(Ye=Ai(function(){!function t(e){if(!Vt)return void(Ue=!1);Li(Ye);Ue&&(Ye=Ai(function(){t(e)}));"?"===Vt&&(Vt=xi());if(Vt){!ye&&yi(e)&&(ye=!0);try{e.type&&Xt.emit(yi(e)?"touchMove":"dragMove",Ni(e))}catch(t){}var n=Xe,i=_e(Je,Ke);if(!F||tt||$)n+=i,n+="px";else{var a=r?i*rt*100/((it+nt)*Bt):100*i/(it+nt);n+=a,n+="%"}V.style[Dt]=kt+n+Pt}}(t)})):("?"===Vt&&(Vt=xi()),Vt&&(ye=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&ye&&t.preventDefault()}}function Ci(i){if(Ue){Ye&&(Li(Ye),Ye=null),R&&Un(V,""),Ue=!1;var t=hi(i);Je.x=t.clientX,Je.y=t.clientY;var a=_e(Je,Ke);if(Math.abs(a)){if(!yi(i)){var n=mi(i);_i(n,{click:function t(e){gi(e),Zi(n,{click:t})}})}R?Ye=Ai(function(){if(F&&!$){var t=-a*rt/(it+nt);t=0<a?Math.floor(t):Math.ceil(t),It+=t}else{var e=-(Xe+a);if(e<=0)It=Wt;else if(e>=A[Bt-1])It=qt;else for(var n=0;n<Bt&&e>=A[n];)e>A[It=n]&&a<0&&(It+=1),n++}ii(i,a),Xt.emit(yi(i)?"touchEnd":"dragEnd",Ni(i))}):Vt&&ui(i,0<a?-1:1)}}"auto"===H.preventScrollOnTouch&&(ye=!1),jt&&(Vt="?"),gt&&!ze&&li()}function Mi(){(M||j).style.height=A[It+rt]-A[It]+"px"}function Ti(){var t=tt?(tt+nt)*Q/it:Q/rt;return Math.min(Math.ceil(t),Q)}function Ei(){if(ht&&!se&&Be!==Se){var t=Se,e=Be,n=Yi;for(Be<Se&&(t=Be,e=Se,n=Xi);t<e;)n(Ne[t]),t++;Se=Be}}function Ni(t){return{container:V,slideItems:G,navContainer:Ae,navItems:Ne,controlsContainer:be,hasControls:ue,prevButton:Ce,nextButton:Me,items:rt,slideBy:ot,cloneCount:Lt,slideCount:Q,slideCountNew:Bt,index:It,indexCached:zt,displayIndex:en(),navCurrentIndex:Oe,navCurrentIndexCached:De,pages:Be,pagesCached:Se,sheet:Mt,isOn:Y,event:t||{}}}f&&console.warn("No slides found in",H.container)};return ta}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
