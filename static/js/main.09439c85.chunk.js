(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(31)},21:function(e,t,n){},23:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=(n(21),n(3)),u=n(5),l=n(6),s=n(8),g=n(7),d=n(9),b=n(1),p=n(2),h=(n(23),function(e){return r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",onClick:e.toggle}),r.a.createElement("span",{className:"slider round"}))});function f(){var e=Object(b.a)(["\n  background: #ffffff55;\n  padding: 0 5px;\n  border-radius: 5px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  height: 100%;\n"]);return f=function(){return e},e}var x=p.a.div(f()),v=function(e){return r.a.createElement(x,null,"Copied ",e.hex?"Hex Code":"RGB Code","!")};function m(){var e=Object(b.a)(["\n  background: ",";\n  width: 100%;\n  height: 20%;\n\tz-index: 999;\n\tdisplay: flex;\n"]);return m=function(){return e},e}var k=p.a.div(m(),function(e){return e.bg}),y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={showPopup:!1},n.copyToClipboard=function(e){var t=document.createElement("textarea"),a=n.convertToRGB(n.props.bg);t.value=n.props.copyHex?n.rgb2hex(a):a,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),n.setState({showPopup:!0}),setTimeout(function(){n.setState({showPopup:!1})},1e3)},n.rgb2hex=function(e){var t=e.slice(4,-1).split(",").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}),n=Object(i.a)(t,3),a=n[0],r=n[1],o=n[2];return"#".concat(a).concat(r).concat(o)},n.convertToRGB=function(e){var t=n.convertToRGBAObj(e),a=n.convertToRGBAObj(n.props.rgba),r=Math.round((1-t.a)*a.r+t.a*t.r),o=Math.round((1-t.a)*a.g+t.a*t.g),c=Math.round((1-t.a)*a.b+t.a*t.b);return"rgb(".concat(r,", ").concat(o,", ").concat(c,")")},n.convertToRGBAObj=function(e){var t=e.slice(5,-1).split(","),n=Object(i.a)(t,4);return{r:n[0],g:n[1],b:n[2],a:n[3]}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(k,{bg:this.props.bg,onClick:this.copyToClipboard},this.state.showPopup?r.a.createElement(v,{hex:this.props.copyHex}):null)}}]),t}(r.a.Component);function w(){var e=Object(b.a)(["\n  background-color: transparent;\n  height: 100vh;\n  width: 10%;\n  position: absolute;\n  left: ","\n  top: 0;\n"]);return w=function(){return e},e}var H=p.a.div(w(),function(e){return e.left}),E=function(e){return r.a.createElement("div",null,r.a.createElement(H,{left:0},r.a.createElement(y,{bg:"rgba(255,255,255,0.1)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(y,{bg:"rgba(255,255,255,0.2)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(y,{bg:"rgba(255,255,255,0.3)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(y,{bg:"rgba(255,255,255,0.4)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(y,{bg:"rgba(255,255,255,0.5)",rgba:e.rgba,copyHex:e.copyHex})),r.a.createElement(H,{left:"90%"},r.a.createElement(y,{bg:"rgba(0,0,0,0.1)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(y,{bg:"rgba(0,0,0,0.2)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(y,{bg:"rgba(0,0,0,0.3)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(y,{bg:"rgba(0,0,0,0.4)",rgba:e.rgba,copyHex:e.copyHex}),r.a.createElement(y,{bg:"rgba(0,0,0,0.5)",rgba:e.rgba,copyHex:e.copyHex})))};function j(){var e=Object(b.a)(["\n  font-size: large;\n  background: transparent;\n  color: ",";\n  padding: 10px;\n  border: 1px solid ",";\n  border-radius: 5px;\n  position: absolute;\n  top: 5%;\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return j=function(){return e},e}function C(){var e=Object(b.a)(["\n  background-color: transparent;\n  color: ",";\n  border-style: none;\n  border-bottom: "," solid 1px;\n  font-size: 20px;\n  text-align: center;\n  padding: 5px 20px;\n  margin: 10px;\n\n  &:focus {\n    outline: none;\n  }\n"]);return C=function(){return e},e}function O(){var e=Object(b.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  // padding: 4em;\n  background: ","\n"]);return O=function(){return e},e}var S=p.a.section(O(),function(e){return e.bg}),M=p.a.input(C(),function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"white":"black"}),I=M,R=M,B=p.a.button(j(),function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"white":"black"},function(e){return e.darkMode?"black":"white"}),A=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={hex:"#ff00ffff",rgba:"rgba(255,0,255,1.0)",bg:"#ff00ffff",showShades:!0,darkMode:!1,isHexCopied:!0},n.handleButtonClick=function(e){n.setState(function(e){return{showShades:!e.showShades}})},n.handleHexChange=function(e){if(n.checkValidHex(e.target.value)){var t=n.hex2rgba(e.target.value);n.setState({bg:e.target.value,rgba:t,darkMode:n.checkDarkMode(t)})}n.setState({hex:e.target.value})},n.checkValidHex=function(e){return/^#[a-fA-F0-9]{6}$/.test(e)||/^#[a-fA-F0-9]{8}$/.test(e)},n.hex2rgba=function(e){var t=e.match(/\w\w/g),n=Object(i.a)(t,4),a=n[0],r=n[1],o=n[2],c=n[3],u=parseInt(a,16),l=parseInt(r,16),s=parseInt(o,16),g=c?(parseInt(c,16)/255).toFixed(2):1;return"rgba(".concat(u,",").concat(l,",").concat(s,",").concat(g,")")},n.handleRGBAChange=function(e){n.checkValidRGBA(e.target.value)&&n.setState({bg:e.target.value,hex:n.rgba2hex(e.target.value),darkMode:n.checkDarkMode(e.target.value)}),n.setState({rgba:e.target.value})},n.checkValidRGBA=function(e){var t=0;if("rgba"===e.slice(0,4)){var a=e.slice(5,-1).split(","),r=Object(i.a)(a,4);r[0],r[1],r[2],r[3]}else{var o=e.slice(4,-1).split(","),c=Object(i.a)(o,3);c[0],c[1],c[2];t=1}return n.inRange(0,255)&&n.inRange(0,255)&&n.inRange(0,255)&&n.inRange(t,1)},n.inRange=function(e,t){return parseInt(e)>=0&&parseInt(e)<=t},n.rgba2hex=function(e){if("rgba"===e.slice(0,4)){var t=e.slice(5,-1).split(","),n=Object(i.a)(t,4),a=n[0],r=n[1],o=n[2],c=n[3],u=parseInt(a).toString(16).padStart(2,"0"),l=parseInt(r).toString(16).padStart(2,"0"),s=parseInt(o).toString(16).padStart(2,"0"),g=Math.round(255*parseFloat(c)).toString(16).padStart(2,"0");return"#".concat(u).concat(l).concat(s).concat(g)}var d=e.slice(4,-1).split(",").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}),b=Object(i.a)(d,3),p=b[0],h=b[1],f=b[2];return"#".concat(p).concat(h).concat(f)},n.checkDarkMode=function(e){var t=e.slice(5,-1).split(","),n=Object(i.a)(t,4),a=n[0],r=n[1],o=n[2];n[3];return 299*parseInt(a)+587*parseInt(r)+114*parseInt(o)/1e3<123},n.toggleCopyMode=function(e){n.setState(function(e){return{isHexCopied:!e.isHexCopied}})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(S,{bg:this.state.bg},r.a.createElement(B,{onClick:this.handleButtonClick,darkMode:this.state.darkMode},"Show Shades"),r.a.createElement(h,{toggle:this.toggleCopyMode}),this.state.showShades?r.a.createElement(E,{rgba:this.state.rgba,copyHex:this.state.isHexCopied}):r.a.createElement("div",null),r.a.createElement(I,{type:"text",onChange:this.handleHexChange,value:this.state.hex,maxLength:9,darkMode:this.state.darkMode}),r.a.createElement(R,{type:"text",onChange:this.handleRGBAChange,value:this.state.rgba,darkMode:this.state.darkMode}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.09439c85.chunk.js.map