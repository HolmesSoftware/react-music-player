(this["webpackJsonpreact-music-player"]=this["webpackJsonpreact-music-player"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(2),o=a.n(n),r=a(15),i=a.n(r),s=a(5),l=a.n(s),p=a(8),u=a(3),d=a(4),h=a(14),b=a(7),f=a(6),m=function(e){var t=e.isPlaying,a=e.setIsPlaying,o=e.currentSong,r=e.audioRef,i=e.setSongInfo,s=e.songInfo,m=e.songs,j=e.setCurrentSong,v=e.setSongs,g=e.animationPercent,O=e.requestRef,x=e.setRepeatToggle,y=e.repeatToggle,k=Object(n.useState)({}),S=Object(d.a)(k,2),w=S[0],T=S[1],C=Object(n.useState)({}),M=Object(d.a)(C,2),F=M[0],N=M[1],P=Object(n.useState)(!1),z=Object(d.a)(P,2),R=z[0],A=z[1],I=Object(n.useState)([0]),E=Object(d.a)(I,2),D=E[0],X=E[1],L=function(e){var t=m.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{active:!0}):Object(u.a)(Object(u.a)({},t),{},{active:!1})}));v(t)},H=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},B=.5,q=function(){var e=Object(p.a)(l.a.mark((function e(a){var c,n,i,s,p,u,d,b,f,v,g,O;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=m.findIndex((function(e){return e.id===o.id})),"skip-forward"!==a){e.next=7;break}return e.next=4,j(m[(c+1)%m.length]);case 4:L(m[(c+1)%m.length]),e.next=66;break;case 7:if("shuffle-forward"!==a){e.next=45;break}if(n=!1,i=D.indexOf(c),D.length===i+1){e.next=17;break}return s=D[i+1],e.next=14,j(m[s]);case 14:L(m[s]),e.next=41;break;case 17:if(D.length!==m.length){e.next=31;break}X(D.length=0);case 19:if(n){e.next=29;break}if(p=Math.floor(Math.random()*Math.floor(m.length)),D.includes(p)){e.next=27;break}return e.next=24,j(m[p]);case 24:L(m[p]),X([].concat(Object(h.a)(D),[p])),n=!0;case 27:e.next=19;break;case 29:e.next=41;break;case 31:if(n){e.next=41;break}if(u=Math.floor(Math.random()*Math.floor(m.length)),D.includes(u)){e.next=39;break}return e.next=36,j(m[u]);case 36:L(m[u]),X([].concat(Object(h.a)(D),[u])),n=!0;case 39:e.next=31;break;case 41:return t&&void 0!==(d=r.current.play())&&d.then((function(e){})).catch((function(e){console.log("Playback has been prevented since song wasn't finished loading. For more infomation contact me at HolmesSoftwareDev@gmail.com")})),e.abrupt("return");case 45:if("skip-back"!==a){e.next=57;break}if((c-1)%m.length!==-1){e.next=52;break}return e.next=49,j(m[m.length-1]);case 49:return L(m[m.length-1]),t&&void 0!==(b=r.current.play())&&b.then((function(e){})).catch((function(e){console.error(e)})),e.abrupt("return");case 52:return e.next=54,j(m[(c-1)%m.length]);case 54:L(m[(c-1)%m.length]),e.next=66;break;case 57:if("shuffle-back"!==a){e.next=66;break}if(f=D.indexOf(c),v=D[f-1],f-1===-1){e.next=66;break}return e.next=63,j(m[v]);case 63:return L(m[v]),t&&void 0!==(g=r.current.play())&&g.then((function(e){})).catch((function(e){console.log("Playback has been prevented since song wasn't finished loading. For more infomation contact me at HolmesSoftwareDev@gmail.com")})),e.abrupt("return");case 66:t&&void 0!==(O=r.current.play())&&O.then((function(e){})).catch((function(e){console.log("Playback has been prevented since song wasn't finished loading. For more infomation contact me at HolmesSoftwareDev@gmail.com")}));case 67:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useLayoutEffect)((function(){return O.current=requestAnimationFrame((function e(a){t&&(T({transform:"translateX(".concat(g,"%)"),MozTransform:"translateX(".concat(g,"%)"),WebkitTransform:"translateX(".concat(g,"%)"),OTransform:"translateX(".concat(g,"%)"),msTransform:"translateX(".concat(g,"%)")}),O.current=requestAnimationFrame(e))})),function(){return cancelAnimationFrame(O.current)}}),[t,g]),Object(c.jsxs)("div",{className:"player",children:[Object(c.jsxs)("div",{className:"time-control",children:[Object(c.jsx)("p",{children:H(s.currentTime)}),Object(c.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(o.color[0],", ").concat(o.color[1],")")},className:"track",children:[Object(c.jsx)("input",{min:0,max:s.duration||0,value:s.currentTime,onChange:function(e){r.current.currentTime=e.target.value,i(Object(u.a)(Object(u.a)({},s),{},{currentTime:e.target.value}))},type:"range"}),Object(c.jsx)("div",{style:w,className:"animate-track"})]}),Object(c.jsx)("p",{children:s.duration?H(s.duration):"0:00"})]}),Object(c.jsxs)("div",{className:"play-control",children:[Object(c.jsx)(b.a,{style:{color:"".concat(R?o.color[0]:"")},onClick:function(){return A(!R)},size:"2x",icon:f.f}),Object(c.jsx)(b.a,{onClick:R?function(){return q("shuffle-back")}:function(){return q("skip-back")},onMouseOver:{color:"".concat(o.color[0])},className:"skip-back",size:"2x",icon:f.a}),Object(c.jsx)(b.a,{onMouseOver:{color:"".concat(o.color[0])},onClick:function(){if(t)r.current.pause(),a(!t);else try{r.current.play(),a(!t)}catch(e){console.log("playback Prevented")}},className:"play",size:"2x",icon:t?f.d:f.e}),Object(c.jsx)(b.a,{onMouseOver:{color:"".concat(o.color[0])},className:"skip-forward",onClick:R?function(){return q("shuffle-forward")}:function(){return q("skip-forward")},size:"2x",icon:f.b}),Object(c.jsx)(b.a,{style:{color:"".concat(y?o.color[0]:"")},onClick:function(){return x(!y)},size:"2x",icon:f.g}),Object(c.jsxs)("div",{className:"volume-control",children:[Object(c.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(o.color[0],", ").concat(o.color[1],")")},className:"volume",children:[Object(c.jsx)("input",{min:0,max:100,type:"range",onChange:function(e){r.current.volume=e.target.value/100,B=e.target.value,N({transform:"translateX(".concat(B,"%)"),MozTransform:"translateX(".concat(B,"%)"),WebkitTransform:"translateX(".concat(B,"%)"),OTransform:"translateX(".concat(B,"%)"),msTransform:"translateX(".concat(B,"%)")})}}),Object(c.jsx)("div",{style:F,className:"animate-volume"})]}),Object(c.jsx)(b.a,{icon:f.h,size:"2x",className:"volume-icon"})]})]})]})},j=function(e){var t=e.currentSong,a=e.isPlaying;return Object(c.jsxs)("div",{className:"song-container",children:[Object(c.jsx)("img",{className:a?"rotateSong":"",alt:t.name+" cover image",src:t.cover}),Object(c.jsx)("h2",{children:t.name}),Object(c.jsx)("h3",{children:t.artist})]})},v=(a(27),a(32));var g=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(v.a)(),active:!0},{name:"Chrysalism",cover:"https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",artist:"Toonorth",audio:"https://mp3.chillhop.com/serve.php/?mp3=8405",color:["#e79434","#97713b"],id:Object(v.a)(),active:!1},{name:"Hereafter",cover:"https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",artist:"Makzo",audio:"https://mp3.chillhop.com/serve.php/?mp3=11770",color:["#f87817","#fee96b"],id:Object(v.a)(),active:!1},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(v.a)(),active:!1},{name:"Through Trees",cover:"https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",artist:"Sleepy Fish, The Field Tapes",audio:"https://mp3.chillhop.com/serve.php/?mp3=11251",color:["#a0bd59","#4c6045"],id:Object(v.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(v.a)(),active:!1},{name:"Hibiscus",cover:"https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",artist:"G Mills, Felty",audio:"https://mp3.chillhop.com/serve.php/?mp3=8971",color:["#80b3d9","#12437e"],id:Object(v.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(v.a)(),active:!1},{name:"Cloud Carpets",cover:"https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",artist:"The Field Tapes, Ezzy, Wowflower",audio:"https://mp3.chillhop.com/serve.php/?mp3=11248",color:["#a0bd59","#4c6045"],id:Object(v.a)(),active:!1},{name:"Inside",cover:"https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",artist:"Miscel",audio:"https://mp3.chillhop.com/serve.php/?mp3=9322",color:["#51224c","#d963c9"],id:Object(v.a)(),active:!1},{name:"Railways",cover:"https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",artist:"Sleepy Fish",audio:"https://mp3.chillhop.com/serve.php/?mp3=7813",color:["#e79434","#97713b"],id:Object(v.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(v.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(v.a)(),active:!1},{name:"Lilo",cover:"https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",artist:"Middle School, The Field Tapes",audio:"https://mp3.chillhop.com/serve.php/?mp3=11244",color:["#a0bd59","#4c6045"],id:Object(v.a)(),active:!1},{name:"Mozambique",cover:"https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",artist:"Comodo",audio:"https://mp3.chillhop.com/serve.php/?mp3=8985",color:["#e79434","#97713b"],id:Object(v.a)(),active:!1},{name:"Caffeine",cover:"https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",artist:"Blue Wednesday, Felty",audio:"https://mp3.chillhop.com/serve.php/?mp3=9334",color:["#80b3d9","#12437e"],id:Object(v.a)(),active:!1},{name:"ny90",cover:"https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",artist:"Ezzy",audio:"https://mp3.chillhop.com/serve.php/?mp3=9331",color:["#51224c","#d963c9"],id:Object(v.a)(),active:!1},{name:"Vinho Verde",cover:"https://chillhop.com/wp-content/uploads/2020/07/ae91385fc2d92e40dd4bf337867dee16fb5648d2-1024x1024.jpg",artist:"Clap Cotton",audio:"https://mp3.chillhop.com/serve.php/?mp3=9447",color:["#3d8952","#9eeee3"],id:Object(v.a)(),active:!1},{name:"Oasis",cover:"https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",artist:"Makzo",audio:"https://mp3.chillhop.com/serve.php/?mp3=11768",color:["#f87817","#fee96b"],id:Object(v.a)(),active:!1},{name:"Embers",cover:"https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",artist:"Blue Wednesday, Aso",audio:"https://mp3.chillhop.com/serve.php/?mp3=9048",color:["#51224c","#d963c9"],id:Object(v.a)(),active:!1},{name:"Toft",cover:"https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",artist:"Felty, Ezzy",audio:"https://mp3.chillhop.com/serve.php/?mp3=9312",color:["#80b3d9","#12437e"],id:Object(v.a)(),active:!1},{name:"Isla Bella",cover:"https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",artist:"Kendall Miles",audio:"https://mp3.chillhop.com/serve.php/?mp3=8349",color:["#e79434","#97713b"],id:Object(v.a)(),active:!1}]},O=function(e){var t=e.song,a=e.allSongs,n=e.setCurrentSong,o=e.id,r=(e.audioRef,e.isPlaying,e.setSongs),i=function(){var e=Object(p.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:c=a.map((function(e){return e.id===o?Object(u.a)(Object(u.a)({},e),{},{active:!0}):Object(u.a)(Object(u.a)({},e),{},{active:!1})})),r(c);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{onClick:i,className:"library-song ".concat(t.active?"selected":""),children:[Object(c.jsx)("img",{alt:t.name+" cover image",src:t.cover}),Object(c.jsxs)("div",{className:"song-description",children:[Object(c.jsx)("h3",{children:t.name}),Object(c.jsx)("h4",{children:t.artist})]})]})},x=(a(28),function(e){var t=e.songs,a=e.setCurrentSong,n=e.audioRef,o=e.isPlaying,r=e.setSongs,i=e.libraryStatus;return Object(c.jsxs)("div",{className:"library ".concat(i?"active-library":""),children:[Object(c.jsx)("h2",{children:"Library"}),Object(c.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(c.jsx)(O,{id:e.id,allSongs:t,song:e,setCurrentSong:a,audioRef:n,isPlaying:o,setSongs:r},e.id)}))})]})}),y=(a(29),function(e){var t=e.libraryStatus,a=e.setLibraryStatus;return Object(c.jsxs)("nav",{children:[Object(c.jsx)("h1",{children:"Tyler Holmes"}),Object(c.jsxs)("button",{onClick:function(){return a(!t)},children:["Library \xa0",Object(c.jsx)(b.a,{icon:f.c})]})]})});var k=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(),a=Object(n.useState)(g()),o=Object(d.a)(a,2),r=o[0],i=o[1],s=Object(n.useState)(r[0]),h=Object(d.a)(s,2),b=h[0],f=h[1],v=Object(n.useState)(!1),O=Object(d.a)(v,2),k=O[0],S=O[1],w=Object(n.useState)(0),T=Object(d.a)(w,2),C=T[0],M=T[1],F=Object(n.useState)(!1),N=Object(d.a)(F,2),P=N[0],z=N[1],R=Object(n.useState)({currentTime:0,duration:0}),A=Object(d.a)(R,2),I=A[0],E=A[1],D=Object(n.useState)(!1),X=Object(d.a)(D,2),L=X[0],H=X[1],B=function(e){var t=e.target.currentTime,a=e.target.duration;M(t/a*100),E(Object(u.a)(Object(u.a)({},I),{},{currentTime:t,duration:a}))},q=function(){var t=Object(p.a)(l.a.mark((function t(){var a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.findIndex((function(e){return e.id===b.id})),t.next=3,f(r[a]);case 3:k&&void 0!==(c=e.current.play())&&c.then((function(e){})).catch((function(e){console.log("Playback has been prevented since song wasn't finished loading. For more infomation contact me at HolmesSoftwareDev@gmail.com")}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),W=function(){var t=Object(p.a)(l.a.mark((function t(){var a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.findIndex((function(e){return e.id===b.id})),t.next=3,f(r[(a+1)%r.length]);case 3:k&&void 0!==(c=e.current.play())&&c.then((function(e){})).catch((function(e){console.log("Playback has been prevented since song wasn't finished loading.")}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"App ".concat(L?"library-active":""),children:[Object(c.jsx)(y,{libraryStatus:L,setLibraryStatus:H}),Object(c.jsx)(j,{currentSong:b,isPlaying:k}),Object(c.jsx)(m,{audioRef:e,isPlaying:k,setIsPlaying:S,currentSong:b,setSongInfo:E,songInfo:I,songs:r,setCurrentSong:f,setSongs:i,animationPercent:C,requestRef:t,repeatToggle:P,setRepeatToggle:z}),Object(c.jsx)(x,{songs:r,audioRef:e,setCurrentSong:f,isPlaying:k,setSongs:i,libraryStatus:L}),Object(c.jsx)("audio",{preload:"auto",onTimeUpdate:B,onLoadedMetadata:B,ref:e,src:b.audio,onEnded:P?q:W})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),o(e),r(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),S()}},[[30,1,2]]]);
//# sourceMappingURL=main.d44c3b92.chunk.js.map