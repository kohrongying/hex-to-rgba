(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(38)},28:function(e,t,n){},30:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),i=(n(28),n(6)),l=n(7),u=n(10),s=n(8),d=n(11),g=n(15),h=n(2),p=n(3),b=(n(30),function(e){return r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",onClick:e.toggle}),r.a.createElement("span",{className:"slider round"}))}),f=n(12);function m(){var e=Object(h.a)(["\n  background: #ffffff55;\n  padding: 0 5px;\n  border-radius: 5px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  height: 100%;\n"]);return m=function(){return e},e}var v=p.a.div(m()),y=function(e){return r.a.createElement(v,null,"Copied ",e.hex?"Hex Code":"RGB Code","!")};function x(){var e=Object(h.a)(["\n  background: ",";\n  width: 100%;\n  height: 20%;\n\tz-index: 999;\n\tdisplay: flex;\n"]);return x=function(){return e},e}var E=p.a.div(x(),function(e){return e.bg}),k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={showPopup:!1},n.copyToClipboard=function(e){var t=document.createElement("textarea"),a=n.convertToRGB(n.props.bg);t.value=n.props.copyHex?n.rgb2hex(a):a,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),n.setState({showPopup:!0}),setTimeout(function(){n.setState({showPopup:!1})},1e3)},n.rgb2hex=function(e){var t=e.slice(4,-1).split(",").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}),n=Object(f.a)(t,3),a=n[0],r=n[1],o=n[2];return"#".concat(a).concat(r).concat(o)},n.convertToRGB=function(e){var t=n.convertToRGBAObj(e),a=n.convertToRGBAObj(n.props.rgba),r=Math.round((1-t.a)*a.r+t.a*t.r),o=Math.round((1-t.a)*a.g+t.a*t.g),c=Math.round((1-t.a)*a.b+t.a*t.b);return"rgb(".concat(r,", ").concat(o,", ").concat(c,")")},n.convertToRGBAObj=function(e){var t=e.slice(5,-1).split(","),n=Object(f.a)(t,4);return{r:n[0],g:n[1],b:n[2],a:n[3]}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(E,{bg:this.props.bg,onClick:this.copyToClipboard},this.state.showPopup?r.a.createElement(y,{hex:this.props.copyHex}):null)}}]),t}(r.a.Component);function C(){var e=Object(h.a)(["\n  background-color: transparent;\n  height: 100vh;\n  width: 10%;\n  position: absolute;\n  left: ","\n  top: 0;\n"]);return C=function(){return e},e}var w=p.a.div(C(),function(e){return e.left}),F=function(e){return r.a.createElement("div",null,r.a.createElement(w,{left:0},r.a.createElement(k,{bg:"rgba(255,255,255,0.1)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(k,{bg:"rgba(255,255,255,0.2)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(k,{bg:"rgba(255,255,255,0.3)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(k,{bg:"rgba(255,255,255,0.4)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(k,{bg:"rgba(255,255,255,0.5)",rgba:e.rgba,copyHex:e.copyHex})),r.a.createElement(w,{left:"90%"},r.a.createElement(k,{bg:"rgba(0,0,0,0.1)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(k,{bg:"rgba(0,0,0,0.2)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(k,{bg:"rgba(0,0,0,0.3)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(k,{bg:"rgba(0,0,0,0.4)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(k,{bg:"rgba(0,0,0,0.5)",rgba:e.rgba,copyHex:e.copyHex})))},B=function(e){var t=e.match(/\w\w/g),n=Object(f.a)(t,4),a=n[0],r=n[1],o=n[2],c=n[3],i=parseInt(a,16),l=parseInt(r,16),u=parseInt(o,16),s=c?(parseInt(c,16)/255).toFixed(2):1;return"rgba(".concat(i,",").concat(l,",").concat(u,",").concat(s,")")},S=function(e){return/^#[a-fA-F0-9]{6}$/.test(e)||/^#[a-fA-F0-9]{8}$/.test(e)},O=function(e){if("rgba"===e.slice(0,4)){var t=e.slice(5,-1).split(","),n=Object(f.a)(t,4),a=n[0],r=n[1],o=n[2],c=n[3],i=parseInt(a).toString(16).padStart(2,"0"),l=parseInt(r).toString(16).padStart(2,"0"),u=parseInt(o).toString(16).padStart(2,"0"),s=Math.round(255*parseFloat(c)).toString(16).padStart(2,"0");return"#".concat(i).concat(l).concat(u).concat(s)}var d=e.slice(4,-1).split(",").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}),g=Object(f.a)(d,3),h=g[0],p=g[1],b=g[2];return"#".concat(h).concat(p).concat(b)},j=function(e){var t=0,n=0,a=0,r=0;if("rgba"===e.slice(0,4)){var o=e.slice(5,-1).split(","),c=Object(f.a)(o,4);t=c[0],n=c[1],a=c[2],r=c[3]}else{var i=e.slice(4,-1).split(","),l=Object(f.a)(i,3);t=l[0],n=l[1],a=l[2],r=1}return A(t,255)&&A(n,255)&&A(a,255)&&A(r,1)},A=function(e,t){return parseInt(e)>=0&&parseInt(e)<=t},D=function(e){var t=e.slice(5,-1).split(","),n=Object(f.a)(t,4),a=n[0],r=n[1],o=n[2];n[3];return 299*parseInt(a)+587*parseInt(r)+114*parseInt(o)/1e3<123};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var P=r.a.createElement("path",{d:"M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"}),H=function(e){return r.a.createElement("svg",M({height:"32px",id:"Layer_1",style:{enableBackground:"new 0 0 32 32"},version:1.1,viewBox:"0 0 32 32",width:"32px",xmlSpace:"preserve",xmlnsXlink:"http://www.w3.org/1999/xlink"},e),P)};n.p;function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var N=r.a.createElement("g",{className:"st2",id:"cross"},r.a.createElement("g",{className:"st0"},r.a.createElement("line",{className:"st1",x1:112.5,x2:401,y1:112.5,y2:401}),r.a.createElement("line",{className:"st1",x1:401,x2:112.5,y1:112.5,y2:401}))),T=r.a.createElement("g",{id:"cross_copy"},r.a.createElement("path",{d:"M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436   L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343   c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593   c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z"})),z=function(e){return r.a.createElement("svg",I({height:"512px",style:{enableBackground:"new 0 0 512 512"},version:1.1,viewBox:"0 0 512 512",width:"512px",xmlSpace:"preserve",xmlnsXlink:"http://www.w3.org/1999/xlink"},e),N,T)};n.p;function G(){var e=Object(h.a)(["\n  text-decoration: none;\n  color: black;\n"]);return G=function(){return e},e}function J(){var e=Object(h.a)(["\n  flex: 1;\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 5px;\n  color: ",";\n"]);return J=function(){return e},e}function L(){var e=Object(h.a)(["\n  height: 15px;\n  flex-direction: row;\n  justify-content: space-between;\n"]);return L=function(){return e},e}function R(){var e=Object(h.a)(["\n  align-items: center;\n  justify-content: center;\n"]);return R=function(){return e},e}function $(){var e=Object(h.a)(["\n  height: calc(91% - 15px);\n  display: flex;\n  flex-direction: column;\n  background: white;\n  padding: 10px;\n"]);return $=function(){return e},e}function W(){var e=Object(h.a)(["\n  height: 100vh;\n  position: absolute;\n  background: white;\n  left: 0;\n  width: 30vh;\n  overflow: hidden;\n  transition: all 0.5s ease-in-out; \n  z-index: 999;\n"]);return W=function(){return e},e}var X=p.a.div(W()),_=p.a.div($()),q=Object(p.a)(_)(R()),K=Object(p.a)(_)(L()),Q=p.a.div(J(),function(e){return e.bg},function(e){return e.darkMode?"white":"black"}),U=p.a.a(G()),V={cross:{width:20,height:20}},Y=function(e){return r.a.createElement(X,null,r.a.createElement(K,null,r.a.createElement(U,{href:"/hex-to-rgba/my-palette"},"Open Palette"),r.a.createElement(z,{style:V.cross,onClick:e.close})),0===e.myPalette.length?r.a.createElement(q,null,"Palette is empty"):r.a.createElement(_,null,e.myPalette.map(function(e,t){return r.a.createElement(Q,{darkMode:D(B(e)),bg:e,key:t},e)})))};function Z(){var e=Object(h.a)(["\n  margin-top: 10px;\n"]);return Z=function(){return e},e}function ee(){var e=Object(h.a)(["\n  top: 5%;\n  position: absolute;\n"]);return ee=function(){return e},e}function te(){var e=Object(h.a)(["\n  font-size: large;\n  background: transparent;\n  color: ",";\n  padding: 10px;\n  border: 1px solid ",";\n  border-radius: 5px;  \n  &:hover {\n    background: ",";\n    color: ",";\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return te=function(){return e},e}function ne(){var e=Object(h.a)(["\n  background-color: transparent;\n  color: ",";\n  border-style: none;\n  border-bottom: "," solid 1px;\n  font-size: 20px;\n  text-align: center;\n  padding: 5px 20px;\n  margin: 10px;\n\n  &:focus {\n    outline: none;\n  }\n"]);return ne=function(){return e},e}function ae(){var e=Object(h.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: ","\n"]);return ae=function(){return e},e}var re=p.a.section(ae(),function(e){return e.bg}),oe=p.a.input(ne(),function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"white":"black"}),ce=oe,ie=oe,le=p.a.button(te(),function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"black":"white"}),ue=Object(p.a)(le)(ee()),se=Object(p.a)(le)(Z()),de={hamburger:{position:"absolute",top:20,left:20}},ge=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={hex:"#ff00ffff",rgba:"rgba(255,0,255,1.0)",bg:"#ff00ffff",showShades:!1,darkMode:!1,isHexCopied:!0,showSideBar:!1,myPalette:[]},n.handleButtonClick=function(e){n.setState(function(e){return{showShades:!e.showShades}})},n.handleHexChange=function(e){if(S(e.target.value)){var t=B(e.target.value);n.setState({bg:e.target.value,rgba:t,darkMode:D(t)})}n.setState({hex:e.target.value})},n.handleRGBAChange=function(e){j(e.target.value)&&n.setState({bg:e.target.value,hex:O(e.target.value),darkMode:D(e.target.value)}),n.setState({rgba:e.target.value})},n.toggleCopyMode=function(e){n.setState(function(e){return{isHexCopied:!e.isHexCopied}})},n.addToPalette=function(){var e=localStorage.getItem("kry-myPalette")?JSON.parse(localStorage.getItem("kry-myPalette")):[];e.push(n.state.bg),e=Object(g.a)(new Set(e)),localStorage.setItem("kry-myPalette",JSON.stringify(e)),n.setState({myPalette:e})},n.showSideBar=function(){n.setState({showSideBar:!0})},n.closeSideBar=function(){n.setState({showSideBar:!1})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("kry-myPalette")?JSON.parse(localStorage.getItem("kry-myPalette")):[];this.setState({myPalette:e})}},{key:"render",value:function(){return r.a.createElement(re,{bg:this.state.bg},r.a.createElement(H,{style:de.hamburger,onClick:this.showSideBar}),this.state.showSideBar?r.a.createElement(Y,{close:this.closeSideBar,myPalette:this.state.myPalette}):null,r.a.createElement(ue,{onClick:this.handleButtonClick,darkMode:this.state.darkMode},"Show Shades"),r.a.createElement(b,{toggle:this.toggleCopyMode}),this.state.showShades?r.a.createElement(F,{rgba:this.state.rgba,copyHex:this.state.isHexCopied}):r.a.createElement("div",null),r.a.createElement(ce,{type:"text",onChange:this.handleHexChange,value:this.state.hex,maxLength:9,darkMode:this.state.darkMode}),r.a.createElement(ie,{type:"text",onChange:this.handleRGBAChange,value:this.state.rgba,darkMode:this.state.darkMode}),r.a.createElement(se,{onClick:this.addToPalette,darkMode:this.state.darkMode},"Add to My Palette"))}}]),t}(a.Component),he={red:["#FFCDD2","#EF9A9A","#E57373","#EF5350","#F44336","#E53935","#D32F2F","#C62828","#B71C1C"],deeporange:["#FFCCBC","#FFAB91","#FF8A65","#FF7043","#FF5722","#F4511E","#E64A19","#D84315","#BF360C"],orange:["#FFECB3","#FFE082","#FFD54F","#FFCA28","#FFC107","#FFB300","#FFA000","#FF8F00","#FF6F00"],yellow:["#FFFDE7","#FFF9C4","#FFF59D","#FFF176","#FFEE58","#FFEB3B","#FDD835","#FBC02D","#F9A825"],lightgreen:["#DCEDC8","#C5E1A5","#AED581","#9CCC65","#8BC34A","#7CB342","#689F38","#558B2F","#33691E"],green:["#C8E6C9","#A5D6A7","#81C784","#66BB6A","#4CAF50","#43A047","#388E3C","#2E7D32","#1B5E20"],teal:["#B2DFDB","#80CBC4","#4DB6AC","#26A69A","#009688","#00897B","#00796B","#00695C","#004D40"],cyan:["#B2EBF2","#80DEEA","#4DD0E1","#26C6DA","#00BCD4","#00ACC1","#0097A7","#00838F","#006064"],lightblue:["#B3E5FC","#81D4FA","#4FC3F7","#29B6F6","#03A9F4","#039BE5","#0288D1","#0277BD","#01579B"],blue:["#BBDEFB","#90CAF9","#64B5F6","#42A5F5","#2196F3","#1E88E5","#1976D2","#1565C0","#0D47A1"],indigo:["#C5CAE9","#9FA8DA","#7986CB","#5C6BC0","#3F51B5","#3949AB","#303F9F","#283593","#1A237E"],deeppurple:["#D1C4E9","#B39DDB","#9575CD","#7E57C2","#673AB7","#5E35B1","#512DA8","#4527A0","#311B92"],purple:["#E1BEE7","#CE93D8","#BA68C8","#AB47BC","#9C27B0","#8E24AA","#7B1FA2","#6A1B9A","#4A148C"],pink:["#F8BBD0","#F48FB1","#F06292","#EC407A","#E91E63","#D81B60","#C2185B","#AD1457","#880E4F"],brown:["#D7CCC8","#BCAAA4","#A1887F","#8D6E63","#795548","#6D4C41","#5D4037","#4E342E","#3E2723"],grey:["#F5F5F5","#EEEEEE","#E0E0E0","#BDBDBD","#9E9E9E","#757575","#616161","#424242","#212121"],bluegrey:["#CFD8DC","#B0BEC5","#90A4AE","#78909C","#607D8B","#546E7A","#455A64","#37474F","#263238"]};function pe(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  padding: 10px;\n  margin: 5px;\n  text-decoration: none;\n  color: white;\n"]);return pe=function(){return e},e}function be(){var e=Object(h.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 50%;\n  margin: 0 auto;\n  justify-content: center;\n"]);return be=function(){return e},e}function fe(){var e=Object(h.a)(["\n  margin: 10px;\n"]);return fe=function(){return e},e}function me(){var e=Object(h.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return me=function(){return e},e}var ve=p.a.div(me()),ye=p.a.div(fe()),xe=p.a.div(be()),Ee=p.a.a(pe(),function(e){return e.bg}),ke=function(e){return r.a.createElement(ve,null,r.a.createElement(ye,null,"The color ",e.color," does not exist."),r.a.createElement(ye,null,"Perhaps you will be interested in these instead?"),r.a.createElement(xe,null,Object.keys(he).map(function(e,t){return r.a.createElement(Ee,{bg:he[e][4],href:"/hex-to-rgba/"+e,key:t},e)})))};function Ce(){var e=Object(h.a)(["\n  font-size: large;\n  background: transparent;\n  color: ",";\n  padding: 10px;\n  border: 1px solid ",";\n  border-radius: 5px;  \n  &:hover {\n    background: ",";\n    color: ",";\n  }\n  &:focus {\n    outline: none;\n  }\n  margin-top: 10px;\n"]);return Ce=function(){return e},e}function we(){var e=Object(h.a)(["\n  flex: 1;\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"]);return we=function(){return e},e}function Fe(){var e=Object(h.a)(["\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"]);return Fe=function(){return e},e}function Be(){var e=Object(h.a)(["\n  background-color: transparent;\n  color: ",";\n  border-style: none;\n  border-bottom: "," solid 1px;\n  font-size: 20px;\n  text-align: center;\n  padding: 5px 20px;\n  margin: 10px;\n\n  &:focus {\n    outline: none;\n  }\n"]);return Be=function(){return e},e}function Se(){var e=Object(h.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: ","\n"]);return Se=function(){return e},e}var Oe=p.a.section(Se(),function(e){return e.bg}),je=p.a.input(Be(),function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"white":"black"}),Ae=je,De=je,Me=p.a.div(Fe()),Pe=p.a.div(we(),function(e){return e.bg}),He=p.a.button(Ce(),function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"black":"white"}),Ie={hamburger:{position:"absolute",top:20,left:20}},Ne=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={hex:"#ffffffff",rgba:"rgba(255,255,255,1.0)",bg:"#ffffffff",darkMode:!1,colors:[],invalidColor:!1,color:"",showSideBar:!1,myPalette:[]},n.handleHexChange=function(e){if(S(e.target.value)){var t=B(e.target.value);n.setState({bg:e.target.value,rgba:t,darkMode:D(t)})}n.setState({hex:e.target.value})},n.handleRGBAChange=function(e){j(e.target.value)&&n.setState({bg:e.target.value,hex:O(e.target.value),darkMode:D(e.target.value)}),n.setState({rgba:e.target.value})},n.onClickItem=function(e){n.setState({hex:e.target.textContent,bg:e.target.textContent,rgba:B(e.target.textContent)})},n.addToPalette=function(){var e=localStorage.getItem("kry-myPalette")?JSON.parse(localStorage.getItem("kry-myPalette")):[];e.push(n.state.bg),e=Object(g.a)(new Set(e)),localStorage.setItem("kry-myPalette",JSON.stringify(e)),n.setState({myPalette:e})},n.showSideBar=function(){n.setState({showSideBar:!0})},n.closeSideBar=function(){n.setState({showSideBar:!1})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.color.toLowerCase();this.setState({color:e});var t=he[e];null==t?this.setState({invalidColor:!0}):this.setState({colors:t,hex:t[4],rgba:B(t[4]),bg:t[4]});var n=localStorage.getItem("kry-myPalette")?JSON.parse(localStorage.getItem("kry-myPalette")):[];this.setState({myPalette:n})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.invalidColor?r.a.createElement(ke,{color:this.state.color}):r.a.createElement(Oe,{bg:this.state.bg},r.a.createElement(H,{style:Ie.hamburger,onClick:this.showSideBar}),this.state.showSideBar?r.a.createElement(Y,{close:this.closeSideBar,myPalette:this.state.myPalette}):null,r.a.createElement(Ae,{type:"text",onChange:this.handleHexChange,value:this.state.hex,maxLength:9,darkMode:this.state.darkMode}),r.a.createElement(De,{type:"text",onChange:this.handleRGBAChange,value:this.state.rgba,darkMode:this.state.darkMode}),r.a.createElement(He,{onClick:this.addToPalette,darkMode:this.state.darkMode},"Add to My Palette"),r.a.createElement(Me,null,this.state.colors.map(function(t,n){return r.a.createElement(Pe,{bg:t,key:n,onClick:e.onClickItem},t)}))))}}]),t}(a.Component);function Te(){var e=Object(h.a)(["\n  flex: 1;\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  color: ",";\n"]);return Te=function(){return e},e}function ze(){var e=Object(h.a)(["\n  display: flex;\n  height: 100vh;\n  width: 100vw;\n"]);return ze=function(){return e},e}var Ge=p.a.div(ze()),Je=p.a.div(Te(),function(e){return e.bg},function(e){return e.darkMode?"white":"black"}),Le={cross:{width:20,height:20,position:"absolute",top:10,right:10,cursor:"pointer"}},Re=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={myPalette:[]},n.removeColor=function(e){var t=n.state.myPalette;t.splice(e,1),localStorage.setItem("kry-myPalette",JSON.stringify(t)),n.setState({myPalette:t})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("kry-myPalette")?JSON.parse(localStorage.getItem("kry-myPalette")):[];this.setState({myPalette:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(Ge,null,this.state.myPalette.map(function(t,n){return r.a.createElement(Je,{darkMode:D(B(t)),bg:t,key:n},r.a.createElement(z,{onClick:function(){return e.removeColor(n)},style:Le.cross}),t)}))}}]),t}(a.Component),$e=n(40),We=n(41),Xe=n(42),_e=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement($e.a,null,r.a.createElement(We.a,null,r.a.createElement(Xe.a,{path:"/hex-to-rgba/",exact:!0,component:ge}),r.a.createElement(Xe.a,{path:"/hex-to-rgba/my-palette",exact:!0,component:Re}),r.a.createElement(Xe.a,{path:"/hex-to-rgba/:color",component:Ne})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.af44bf31.chunk.js.map