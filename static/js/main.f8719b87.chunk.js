(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(36)},26:function(e,t,n){},28:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),i=(n(26),n(7)),l=n(8),u=n(11),s=n(9),g=n(12),d=n(2),b=n(3),p=(n(28),function(e){return r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",onClick:e.toggle}),r.a.createElement("span",{className:"slider round"}))}),f=n(6);function h(){var e=Object(d.a)(["\n  background: #ffffff55;\n  padding: 0 5px;\n  border-radius: 5px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  height: 100%;\n"]);return h=function(){return e},e}var C=b.a.div(h()),E=function(e){return r.a.createElement(C,null,"Copied ",e.hex?"Hex Code":"RGB Code","!")};function v(){var e=Object(d.a)(["\n  background: ",";\n  width: 100%;\n  height: 20%;\n\tz-index: 999;\n\tdisplay: flex;\n"]);return v=function(){return e},e}var x=b.a.div(v(),function(e){return e.bg}),m=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={showPopup:!1},n.copyToClipboard=function(e){var t=document.createElement("textarea"),a=n.convertToRGB(n.props.bg);t.value=n.props.copyHex?n.rgb2hex(a):a,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),n.setState({showPopup:!0}),setTimeout(function(){n.setState({showPopup:!1})},1e3)},n.rgb2hex=function(e){var t=e.slice(4,-1).split(",").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}),n=Object(f.a)(t,3),a=n[0],r=n[1],o=n[2];return"#".concat(a).concat(r).concat(o)},n.convertToRGB=function(e){var t=n.convertToRGBAObj(e),a=n.convertToRGBAObj(n.props.rgba),r=Math.round((1-t.a)*a.r+t.a*t.r),o=Math.round((1-t.a)*a.g+t.a*t.g),c=Math.round((1-t.a)*a.b+t.a*t.b);return"rgb(".concat(r,", ").concat(o,", ").concat(c,")")},n.convertToRGBAObj=function(e){var t=e.slice(5,-1).split(","),n=Object(f.a)(t,4);return{r:n[0],g:n[1],b:n[2],a:n[3]}},n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(x,{bg:this.props.bg,onClick:this.copyToClipboard},this.state.showPopup?r.a.createElement(E,{hex:this.props.copyHex}):null)}}]),t}(r.a.Component);function F(){var e=Object(d.a)(["\n  background-color: transparent;\n  height: 100vh;\n  width: 10%;\n  position: absolute;\n  left: ","\n  top: 0;\n"]);return F=function(){return e},e}var y=b.a.div(F(),function(e){return e.left}),B=function(e){return r.a.createElement("div",null,r.a.createElement(y,{left:0},r.a.createElement(m,{bg:"rgba(255,255,255,0.1)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(m,{bg:"rgba(255,255,255,0.2)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(m,{bg:"rgba(255,255,255,0.3)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(m,{bg:"rgba(255,255,255,0.4)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(m,{bg:"rgba(255,255,255,0.5)",rgba:e.rgba,copyHex:e.copyHex})),r.a.createElement(y,{left:"90%"},r.a.createElement(m,{bg:"rgba(0,0,0,0.1)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(m,{bg:"rgba(0,0,0,0.2)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(m,{bg:"rgba(0,0,0,0.3)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(m,{bg:"rgba(0,0,0,0.4)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(m,{bg:"rgba(0,0,0,0.5)",rgba:e.rgba,copyHex:e.copyHex})))},A=function(e){var t=e.match(/\w\w/g),n=Object(f.a)(t,4),a=n[0],r=n[1],o=n[2],c=n[3],i=parseInt(a,16),l=parseInt(r,16),u=parseInt(o,16),s=c?(parseInt(c,16)/255).toFixed(2):1;return"rgba(".concat(i,",").concat(l,",").concat(u,",").concat(s,")")},k=function(e){return/^#[a-fA-F0-9]{6}$/.test(e)||/^#[a-fA-F0-9]{8}$/.test(e)},w=function(e){if("rgba"===e.slice(0,4)){var t=e.slice(5,-1).split(","),n=Object(f.a)(t,4),a=n[0],r=n[1],o=n[2],c=n[3],i=parseInt(a).toString(16).padStart(2,"0"),l=parseInt(r).toString(16).padStart(2,"0"),u=parseInt(o).toString(16).padStart(2,"0"),s=Math.round(255*parseFloat(c)).toString(16).padStart(2,"0");return"#".concat(i).concat(l).concat(u).concat(s)}var g=e.slice(4,-1).split(",").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}),d=Object(f.a)(g,3),b=d[0],p=d[1],h=d[2];return"#".concat(b).concat(p).concat(h)},j=function(e){var t=0,n=0,a=0,r=0;if("rgba"===e.slice(0,4)){var o=e.slice(5,-1).split(","),c=Object(f.a)(o,4);t=c[0],n=c[1],a=c[2],r=c[3]}else{var i=e.slice(4,-1).split(","),l=Object(f.a)(i,3);t=l[0],n=l[1],a=l[2],r=1}return D(t,255)&&D(n,255)&&D(a,255)&&D(r,1)},D=function(e,t){return parseInt(e)>=0&&parseInt(e)<=t},O=function(e){var t=e.slice(5,-1).split(","),n=Object(f.a)(t,4),a=n[0],r=n[1],o=n[2];n[3];return 299*parseInt(a)+587*parseInt(r)+114*parseInt(o)/1e3<123};function S(){var e=Object(d.a)(["\n  font-size: large;\n  background: transparent;\n  color: ",";\n  padding: 10px;\n  border: 1px solid ",";\n  border-radius: 5px;\n  position: absolute;\n  top: 5%;\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return S=function(){return e},e}function H(){var e=Object(d.a)(["\n  background-color: transparent;\n  color: ",";\n  border-style: none;\n  border-bottom: "," solid 1px;\n  font-size: 20px;\n  text-align: center;\n  padding: 5px 20px;\n  margin: 10px;\n\n  &:focus {\n    outline: none;\n  }\n"]);return H=function(){return e},e}function M(){var e=Object(d.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: ","\n"]);return M=function(){return e},e}var I=b.a.section(M(),function(e){return e.bg}),G=b.a.input(H(),function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"white":"black"}),R=G,T=G,P=b.a.button(S(),function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"black":"white"}),z=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={hex:"#ff00ffff",rgba:"rgba(255,0,255,1.0)",bg:"#ff00ffff",showShades:!0,darkMode:!1,isHexCopied:!0},n.handleButtonClick=function(e){n.setState(function(e){return{showShades:!e.showShades}})},n.handleHexChange=function(e){if(k(e.target.value)){var t=A(e.target.value);n.setState({bg:e.target.value,rgba:t,darkMode:O(t)})}n.setState({hex:e.target.value})},n.handleRGBAChange=function(e){j(e.target.value)&&n.setState({bg:e.target.value,hex:w(e.target.value),darkMode:O(e.target.value)}),n.setState({rgba:e.target.value})},n.toggleCopyMode=function(e){n.setState(function(e){return{isHexCopied:!e.isHexCopied}})},n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(I,{bg:this.state.bg},r.a.createElement(P,{onClick:this.handleButtonClick,darkMode:this.state.darkMode},"Show Shades"),r.a.createElement(p,{toggle:this.toggleCopyMode}),this.state.showShades?r.a.createElement(B,{rgba:this.state.rgba,copyHex:this.state.isHexCopied}):r.a.createElement("div",null),r.a.createElement(R,{type:"text",onChange:this.handleHexChange,value:this.state.hex,maxLength:9,darkMode:this.state.darkMode}),r.a.createElement(T,{type:"text",onChange:this.handleRGBAChange,value:this.state.rgba,darkMode:this.state.darkMode}))}}]),t}(a.Component),L={red:["#FFCDD2","#EF9A9A","#E57373","#EF5350","#F44336","#E53935","#D32F2F","#C62828","#B71C1C"],deeporange:["#FFCCBC","#FFAB91","#FF8A65","#FF7043","#FF5722","#F4511E","#E64A19","#D84315","#BF360C"],orange:["#FFECB3","#FFE082","#FFD54F","#FFCA28","#FFC107","#FFB300","#FFA000","#FF8F00","#FF6F00"],yellow:["#FFFDE7","#FFF9C4","#FFF59D","#FFF176","#FFEE58","#FFEB3B","#FDD835","#FBC02D","#F9A825"],lightgreen:["#DCEDC8","#C5E1A5","#AED581","#9CCC65","#8BC34A","#7CB342","#689F38","#558B2F","#33691E"],green:["#C8E6C9","#A5D6A7","#81C784","#66BB6A","#4CAF50","#43A047","#388E3C","#2E7D32","#1B5E20"],teal:["#B2DFDB","#80CBC4","#4DB6AC","#26A69A","#009688","#00897B","#00796B","#00695C","#004D40"],cyan:["#B2EBF2","#80DEEA","#4DD0E1","#26C6DA","#00BCD4","#00ACC1","#0097A7","#00838F","#006064"],lightblue:["#B3E5FC","#81D4FA","#4FC3F7","#29B6F6","#03A9F4","#039BE5","#0288D1","#0277BD","#01579B"],blue:["#BBDEFB","#90CAF9","#64B5F6","#42A5F5","#2196F3","#1E88E5","#1976D2","#1565C0","#0D47A1"],indigo:["#C5CAE9","#9FA8DA","#7986CB","#5C6BC0","#3F51B5","#3949AB","#303F9F","#283593","#1A237E"],deeppurple:["#D1C4E9","#B39DDB","#9575CD","#7E57C2","#673AB7","#5E35B1","#512DA8","#4527A0","#311B92"],purple:["#E1BEE7","#CE93D8","#BA68C8","#AB47BC","#9C27B0","#8E24AA","#7B1FA2","#6A1B9A","#4A148C"],pink:["#F8BBD0","#F48FB1","#F06292","#EC407A","#E91E63","#D81B60","#C2185B","#AD1457","#880E4F"],brown:["#D7CCC8","#BCAAA4","#A1887F","#8D6E63","#795548","#6D4C41","#5D4037","#4E342E","#3E2723"],grey:["#F5F5F5","#EEEEEE","#E0E0E0","#BDBDBD","#9E9E9E","#757575","#616161","#424242","#212121"],bluegrey:["#CFD8DC","#B0BEC5","#90A4AE","#78909C","#607D8B","#546E7A","#455A64","#37474F","#263238"]};function $(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  padding: 10px;\n  margin: 5px;\n  text-decoration: none;\n  color: white;\n"]);return $=function(){return e},e}function J(){var e=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 50%;\n  margin: 0 auto;\n  justify-content: center;\n"]);return J=function(){return e},e}function N(){var e=Object(d.a)(["\n  margin: 10px;\n"]);return N=function(){return e},e}function W(){var e=Object(d.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return W=function(){return e},e}var q=b.a.div(W()),K=b.a.div(N()),Q=b.a.div(J()),U=b.a.a($(),function(e){return e.bg}),V=function(e){return r.a.createElement(q,null,r.a.createElement(K,null,"The color ",e.color," does not exist."),r.a.createElement(K,null,"Perhaps you will be interested in these instead?"),r.a.createElement(Q,null,Object.keys(L).map(function(e,t){return r.a.createElement(U,{bg:L[e][4],href:e,key:t},e)})))};function X(){var e=Object(d.a)(["\n  flex: 1;\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"]);return X=function(){return e},e}function Y(){var e=Object(d.a)(["\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"]);return Y=function(){return e},e}function Z(){var e=Object(d.a)(["\n  background-color: transparent;\n  color: ",";\n  border-style: none;\n  border-bottom: "," solid 1px;\n  font-size: 20px;\n  text-align: center;\n  padding: 5px 20px;\n  margin: 10px;\n\n  &:focus {\n    outline: none;\n  }\n"]);return Z=function(){return e},e}function _(){var e=Object(d.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: ","\n"]);return _=function(){return e},e}var ee=b.a.section(_(),function(e){return e.bg}),te=b.a.input(Z(),function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"white":"black"}),ne=te,ae=te,re=b.a.div(Y()),oe=b.a.div(X(),function(e){return e.bg}),ce=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={hex:"#ffffffff",rgba:"rgba(255,255,255,1.0)",bg:"#ffffffff",darkMode:!1,colors:[],invalidColor:!1,color:""},n.handleHexChange=function(e){if(k(e.target.value)){var t=A(e.target.value);n.setState({bg:e.target.value,rgba:t,darkMode:O(t)})}n.setState({hex:e.target.value})},n.handleRGBAChange=function(e){j(e.target.value)&&n.setState({bg:e.target.value,hex:w(e.target.value),darkMode:O(e.target.value)}),n.setState({rgba:e.target.value})},n.onClickItem=function(e){n.setState({hex:e.target.textContent,bg:e.target.textContent,rgba:A(e.target.textContent)})},n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.color.toLowerCase();this.setState({color:e});var t=L[e];null==t?this.setState({invalidColor:!0}):this.setState({colors:t,hex:t[4],rgba:A(t[4]),bg:t[4]})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.invalidColor?r.a.createElement(V,{color:this.state.color}):r.a.createElement(ee,{bg:this.state.bg},r.a.createElement(ne,{type:"text",onChange:this.handleHexChange,value:this.state.hex,maxLength:9,darkMode:this.state.darkMode}),r.a.createElement(ae,{type:"text",onChange:this.handleRGBAChange,value:this.state.rgba,darkMode:this.state.darkMode}),r.a.createElement(re,null,this.state.colors.map(function(t,n){return r.a.createElement(oe,{bg:t,key:n,onClick:e.onClickItem},t)}))))}}]),t}(a.Component),ie=n(38),le=n(39),ue=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(ie.a,{basename:"/hex-to-rgba"},r.a.createElement("div",null,r.a.createElement(le.a,{path:"/",exact:!0,component:z}),r.a.createElement(le.a,{path:"/:color/",component:ce})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.f8719b87.chunk.js.map