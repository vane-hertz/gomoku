(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/GreatVibes-Regular.859a0d36.ttf"},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(2),o=n.n(l),r=(n(8),n(9),n(10),n(11),{black:[],white:[]}),i=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)(function(){var e=t.current,n=e.getContext("2d");e.addEventListener("mousedown",function(e){var t;t=e,r.black.push([t.offsetX,t.offsetY,!1]);for(var a=23;a<480;a+=32)for(var c=23;c<480;c+=32)for(var l in r.black){var o=r.black[l][0],i=r.black[l][1];n.fillRect(a,c-16,1,16),o>a-16&&o<a+16&&i>c-16&&i<c+16&&(n.fillRect(a,c,15,15),r.black[l][2]=!0)}console.log("black pieces: ".concat(r.black))}),function(e){for(var t=e.canvas.height/80,n=.97*e.canvas.width,a=.97*e.canvas.height,c=0;c<=480;c+=32)e.moveTo(.5+c+t,t),e.lineTo(.5+c+t,a+t);for(var l=0;l<=480;l+=32)e.moveTo(t,.5+l+t),e.lineTo(n+t,.5+l+t);e.strokeStyle="black",e.stroke()}(n)}),c.a.createElement("canvas",Object.assign({ref:t},e))};var s=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"style.css"}),c.a.createElement("head",null,c.a.createElement("title",null,"Gomoku")),c.a.createElement("body",null,c.a.createElement(i,{width:"495",height:"495"}),c.a.createElement("script",{src:"modal.js"})))},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),l(e),o(e)})};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root")),u()}],[[3,1,2]]]);
//# sourceMappingURL=main.6e01ccb7.chunk.js.map