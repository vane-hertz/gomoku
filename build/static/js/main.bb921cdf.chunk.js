(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/GreatVibes-Regular.859a0d36.ttf"},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(2),o=n.n(i);n(8),n(9),n(10),n(11);var a=0,s=0;function l(){for(var e=function(){for(var e=[],t=0;t<15;t++){e.push([]);for(var n=0;n<15;n++)e[t].push("   ")}return{pieces:{black:[],white:[],turn:"black"},grid:e}}(),t=0;t<15;t++){e.grid.push([]);for(var n=0;n<15;n++)e.grid[t].push("   ")}return e.pieces.white.push([0,0,!0]),e.pieces.black.push([0,0,!0]),console.log(e),e}var u=l(),d=function(e){var t=Object(r.useRef)(null),n=function(e){var t=e.canvas.height/80,n=.97*e.canvas.width,r=.97*e.canvas.height;e.clearRect(t,t,n+t,r+t),e.beginPath();for(var c=0;c<=480;c+=32)e.moveTo(.5+c+t,t),e.lineTo(.5+c+t,r+t);for(var o=0;o<=480;o+=32)e.moveTo(t,.5+o+t),e.lineTo(n+t,.5+o+t);e.strokeStyle="black",e.stroke();for(var a=23;a<480;a+=32)for(var s=23;s<480;s+=32){for(var l in u.pieces.white){var d=u.pieces.white[l][0],h=u.pieces.white[l][1];d>a-16&&d<a+16&&h>s-16&&h<s+16&&"BLK"!=u.grid[Math.round(a/32-1)][Math.round(s/32-1)]&&(i(e,"white",a,s),u.grid[Math.round(a/32-1)][Math.round(s/32-1)]="WHT",u.pieces.white[l][2]=!0)}for(var g in u.pieces.black){var f=u.pieces.black[g][0],p=u.pieces.black[g][1];f>a-16&&f<a+16&&p>s-16&&p<s+16&&"WHT"!=u.grid[Math.round(a/32-1)][Math.round(s/32-1)]&&(i(e,"black",a,s),u.grid[Math.round(a/32-1)][Math.round(s/32-1)]="BLK",u.pieces.black[g][2]=!0)}}};function i(e,t,n,r){e.beginPath(),e.arc(n,r,10,0,2*Math.PI,!1),e.fillStyle=t,e.fill(),e.lineWidth=1,e.strokeStyle="white"==t?"black":"white",e.stroke()}return Object(r.useEffect)(function(){var e=t.current,r=e.getContext("2d");n(r),document.getElementById("draw").onclick=function(){window.confirm("Accept draw?")&&(console.log("Resetting"),u=l(),n(r),console.log(u))},document.getElementById("resign").onclick=function(){window.confirm("Are you sure you want to resign?")&&(console.log("Resetting"),u=l(),n(r),console.log(u))},e.addEventListener("mousedown",function(e){var t;t=e,"black"==u.pieces.turn?u.pieces.black.push([t.offsetX,t.offsetY,!1]):"white"==u.pieces.turn&&u.pieces.white.push([t.offsetX,t.offsetY,!1]),n(r);for(var c,i="",o=0;o<15;o++){i+="\n";for(var d=0;d<15;d++)i+="".concat(d+1,",").concat(o+1,"[").concat(u.grid[d][o],"]")}console.log(i);for(var h=0;h<11;h++)for(var g=0;g<15;g++)"BLK"!=u.grid[h][g]&&"WHT"!=u.grid[h][g]||u.grid[h][g]==u.grid[h+1][g]&&u.grid[h][g]==u.grid[h+2][g]&&u.grid[h][g]==u.grid[h+3][g]&&u.grid[h][g]==u.grid[h+4][g]&&("BLK"==(c=u.grid[h][g])?a++:"WHT"==c&&s++,document.getElementById("score").innerText="BLACK: ".concat(a," WHITE: ").concat(s),u=l(),n(r));console.log("black "+u.pieces.black[u.pieces.black.length-1][2]),console.log("white "+u.pieces.white[u.pieces.white.length-1][2]),u.pieces.black[u.pieces.black.length-1][2]&&u.pieces.white[u.pieces.white.length-1][2]&&("black"==u.pieces.turn?(u.pieces.turn="white",document.getElementById("whosturn").innerText="It is white's turn"):"white"==u.pieces.turn&&(u.pieces.turn="black",document.getElementById("whosturn").innerText="It is black's turn"),console.log("".concat(u.pieces.turn,"'s turn")))})},[n]),c.a.createElement("canvas",Object.assign({ref:t},e))};n(12);var h=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"style.css"}),c.a.createElement("head",null,c.a.createElement("title",null,"Gomoku")),c.a.createElement("body",null,c.a.createElement(d,{width:"495",height:"495"}),c.a.createElement("div",{id:"whosturn"},"Black's turn to start"),c.a.createElement("div",{id:"score"},"BLACK: 0 WHITE: 0"),c.a.createElement("button",{id:"draw"},"OFFER DRAW"),c.a.createElement("button",{id:"resign"},"RESIGN"),c.a.createElement("script",{src:"modal.js"})))},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then(function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)})};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),g()}],[[3,1,2]]]);
//# sourceMappingURL=main.bb921cdf.chunk.js.map