"use strict";(self.webpackChunkpools_fe=self.webpackChunkpools_fe||[]).push([[140],{65407:function(n,e,t){t(72791);var i=t(47987),o=t(57689),r=t(85880),l=t(1017),s=t(13524),a=t(80184);e.Z=function(n){var e=n.data,t=e.cover,c=e.developer,d=(e.id,e.slug),p=e.title,f=e.score,u=e.installs,x=(0,o.s0)();return(0,a.jsxs)(i.Wo,{onClick:function(){x("/detail/".concat(d))},children:[(0,a.jsx)("img",{src:"".concat(s.d,"/").concat(t),alt:"image"}),(0,a.jsxs)("div",{className:"detail_item",children:[(0,a.jsxs)("div",{className:"text_i",children:[(0,a.jsx)("div",{className:"_tit",children:p}),(0,a.jsx)("div",{className:"_tex",children:c})]}),(0,a.jsxs)("div",{className:"rate_i",children:[(0,a.jsx)("div",{className:"star",children:(0,a.jsx)(l.Z,{color:"yellow",rating:f,font:12})}),(0,a.jsxs)("div",{className:"download",children:[u," ",(0,a.jsx)(r.jtV,{className:"_icon"})]})]})]})]})}},47987:function(n,e,t){t.d(e,{En:function(){return d},Wo:function(){return u},ag:function(){return p},xL:function(){return f}});var i,o,r,l,s,a=t(30168),c=t(54088),d=c.ZP.div(i||(i=(0,a.Z)(["\n  margin-top: 100px;\n  position: relative;\n  width: 100%;\n"]))),p=(c.ZP.div(o||(o=(0,a.Z)(["\n  font-style: normal;\n  position: absolute;\n  font-weight: 700;\n  font-size: 40px;\n  top: 50%;\n  z-index: 999;\n  transform: translateY(-50%);\n  color: #ffffff;\n  transform: rotate(90deg);\n"]))),c.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  padding: 0 140px;\n  justify-content: space-between;\n  div {\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 25px;\n    color: #ffffff;\n  }\n"])))),f=c.ZP.div(l||(l=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 24px;\n  width: 100%;\n  .mySwiper {\n    width: 82%;\n  }\n"]))),u=c.ZP.div(s||(s=(0,a.Z)(["\n  cursor: pointer;\n  position: relative;\n  width: 255px;\n  height: 390px;\n  overflow: hidden;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n  img:hover {\n    scale: 1.1;\n    transition: 2s;\n  }\n  .detail_item {\n    bottom: 0;\n    position: absolute;\n    height: 88px;\n    width: 100%;\n    padding: 5px 25px;\n    backdrop-filter: blur(10px);\n    background: rgba(59, 114, 254, 0.1);\n    .rate_i {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-top: 15px;\n      .star {\n        .star_light {\n          margin-right: 4px;\n          color: white;\n          font-size: 10px;\n        }\n      }\n      .download {\n        font-style: normal;\n        font-weight: 400;\n        font-size: 10px;\n        line-height: 14px;\n        color: #ffffff;\n        ._icon {\n          font-size: 12px;\n        }\n      }\n    }\n    .text_i {\n      ._tit {\n        font-style: normal;\n        font-weight: 700;\n        font-size: 16px;\n        line-height: 23px;\n        color: #ffffff;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      ._tex {\n        font-style: normal;\n        font-weight: 400;\n        font-size: 10px;\n        line-height: 14px;\n        color: #ffffff;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n    }\n  }\n"])))},76140:function(n,e,t){t.r(e);var i,o,r,l=t(30168),s=t(93433),a=t(72791),c=t(59434),d=t(57689),p=t(11087),f=t(54088),u=t(65407),x=t(3914),h=t(80184);e.default=function(){var n,e,t,i,o,r,l,f,_,w,b,y,j=(0,c.v9)((function(n){return n.resultSearch})),Z=(j.isLoading,j.resultSearch),k=(0,c.I0)(),N=(0,d.s0)(),z=(0,d.TH)();console.log(Z);var P=z.search,C=null===Z||void 0===Z||null===(n=Z.res)||void 0===n||null===(e=n.prev_page_url)||void 0===e?void 0:e.split("https://v2.poolsplay.store/api/application/search"),S=null===Z||void 0===Z||null===(t=Z.res)||void 0===t||null===(i=t.next_page_url)||void 0===i?void 0:i.split("https://v2.poolsplay.store/api/application/search");console.log(S);var W=function(n){N({pathname:"/search",search:"?".concat((0,p.fW)(n))})};return(0,a.useEffect)((function(){k((0,x.m)(P))}),[P]),(0,h.jsxs)(v,{children:[(0,h.jsxs)("p",{className:"key_search",children:["There are"," ",(0,h.jsx)("span",{style:{color:"yellow"},children:null===(o=Z.res)||void 0===o?void 0:o.total})," ","search results for the keyword."]}),(0,h.jsx)(g,{children:null===(r=Z.res)||void 0===r?void 0:r.data.map((function(n){return(0,h.jsx)(u.Z,{data:n},n.id)}))}),(0,h.jsx)("div",{className:"pagi",children:(null===(l=Z.res)||void 0===l?void 0:l.last_page)>1&&(0,h.jsxs)(m,{status_pre:null===(null===Z||void 0===Z||null===(f=Z.res)||void 0===f?void 0:f.prev_page_url),status_nex:null===(null===Z||void 0===Z||null===(_=Z.res)||void 0===_?void 0:_.next_page_url),children:[(0,h.jsx)("button",{className:"btn_pre",disabled:null===(null===Z||void 0===Z||null===(w=Z.res)||void 0===w?void 0:w.prev_page_url),onClick:function(){W(C[0])},children:"Prev"}),(0,s.Z)(Array(null===(b=Z.res)||void 0===b?void 0:b.last_page)).map((function(n,e){var t;return(0,h.jsx)("div",{style:{color:"".concat((null===(t=Z.res)||void 0===t?void 0:t.current_page)===e+1?"yellow":"#ccc")},children:e+1},e)})),(0,h.jsx)("button",{className:"btn_nex",disabled:null===(null===Z||void 0===Z||null===(y=Z.res)||void 0===y?void 0:y.next_page_url),onClick:function(){W(S[0])},children:"Next"}),"current_page"]})})]})};var v=f.ZP.div(i||(i=(0,l.Z)(["\n  background-color: #121212;\n  width: 100%;\n  padding-bottom: 90px;\n  padding: 30px;\n  min-height: calc(100vh - 289px - 93px);\n\n  .key_search {\n    color: white;\n    font-weight: 700;\n    font-size: 48px;\n    position: relative;\n    padding-bottom: 60px;\n  }\n  .pagi {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),g=f.ZP.div(o||(o=(0,l.Z)(["\n  gap: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n"]))),m=f.ZP.div(r||(r=(0,l.Z)(["\n  margin-top: 20px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  width: fit-content;\n  padding: 20px;\n  background-color: transparent;\n  button {\n    padding: 5px 15px;\n    border-radius: 7px;\n    background-color: #3b72fe;\n    color: #ffffff;\n    cursor: pointer;\n  }\n  .btn_pre {\n    background-color: ",";\n    cursor: ",";\n  }\n  .btn_nex {\n    background-color: ",";\n    cursor: ",";\n  }\n  div {\n    color: white;\n  }\n"])),(function(n){return n.status_pre?"#000000":"#3b72fe"}),(function(n){return n.status_pre?"no-drop":"pointer"}),(function(n){return n.status_nex?"#000000":"#3b72fe"}),(function(n){return n.status_nex?"no-drop":"pointer"}))}}]);
//# sourceMappingURL=140.e1b115bb.chunk.js.map