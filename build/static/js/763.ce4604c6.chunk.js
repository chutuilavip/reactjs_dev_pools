"use strict";(self.webpackChunkpools_fe=self.webpackChunkpools_fe||[]).push([[763],{49763:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var a,r,i,o,s,l,c,d=n(1413),u=n(29439),p=n(2649),m=n(87309),h=n(25886),x=n(39916),g=n(69221),f=n(72791),v=n(59434),b=n(11087),y=n(16254),k=n(34457),j=n(83099),Z=n(34571),w=n(80184),I=function(e){var t=e.slug,n=e.appId,a=e.appId2,r=e.pagingParams,i=e.setIsModalOpen,o=(0,v.I0)();return(0,w.jsxs)(j.Z,{children:[(0,w.jsx)(Z.Z,{title:"Are you sure delete this App\uff1f",okText:"Yes",cancelText:"No",onConfirm:function(){return o((0,y.P2)({appId:n,callBack:function(){o((0,y.Ct)(r))}}))},children:(0,w.jsx)(m.Z,{type:"primary",danger:!0,className:"button",children:"Delete"})}),(0,w.jsx)(m.Z,{type:"primary",className:"button",children:(0,w.jsx)(b.OL,{to:"/for-publishers/edit-app/".concat(t),children:"Edit"})}),(0,w.jsx)(m.Z,{type:"primary",className:"button",style:{backgroundColor:"yellow",border:"none",color:"black"},children:(0,w.jsx)(b.OL,{onClick:function(){return i(!0)},style:{backgroundColor:"yellow",border:"none",color:"black"},to:"/created-app/".concat(a),children:"Comment"})})]})},C=n(36755),N=n(82862),A=n(57689),_=n(30168),S=n(54088),O=S.ZP.div(a||(a=(0,_.Z)(["\n  .ant-modal-content {\n    width: 30rem !important;\n  }\n  .user_avatar {\n    width: 20rem;\n  }\n"]))),L=(n(85798),[{title:"User",dataIndex:"user",key:"user",render:function(e){return(0,w.jsx)(C.Z,{className:"user_avatar",src:"".concat(k.dz,"/").concat(e),preview:!1})}},{title:"Name",dataIndex:"name",key:"cover"},{title:"Comment",dataIndex:"comment",key:"comment",width:"55%",height:"auto"},{title:"Title",dataIndex:"title",key:"title"},{title:"Rating",dataIndex:"rating",key:"rating"},{title:"Status",dataIndex:"status",key:"status"},{title:"Update at",dataIndex:"updated_at",key:"updated_at"},{title:"Dislike",dataIndex:"dislike",key:"dislike"},{title:"Like",dataIndex:"approval",key:"approval"},{title:"Action",dataIndex:"actions",key:"actions",render:function(e){e.appId,e.commentId;return(0,w.jsx)(m.Z,{type:"primary",className:"button",children:"Reply"})}}]),P=function(e){var t=e.onOk,n=e.onCancel,a=(0,A.UO)(),r=(0,v.I0)(),i=(0,f.useRef)(),o=(0,v.v9)((function(e){return e.detailApp})),s=o.appComments,l=o.isLoadingGetComment,c=(0,f.useState)({limit:10,page:0,search:""}),p=(0,u.Z)(c,2),m=p[0],b=p[1];(0,f.useEffect)((function(){var e={appId:a.appId,limit:m.limit,page:m.page,search:m.search};r((0,y.bQ)(e))}),[m]);return(0,w.jsx)(O,{children:(0,w.jsxs)(N.Z,{title:"App Comment",open:!0,onOk:t,onCancel:n,children:[0!==Number(null===s||void 0===s?void 0:s.total)&&(0,w.jsx)(h.Z,{placeholder:"Find somethings....",allowClear:!0,size:"large",onChange:function(e){i.current&&clearTimeout(i.current),i.current=setTimeout((function(){b((function(t){return(0,d.Z)((0,d.Z)({},t),{},{search:e.target.value})}))}),1e3)},style:{marginBottom:"4rem",width:"50%",marginLeft:"auto",borderRadius:"5px"}}),(0,w.jsx)("div",{className:"pagination_modal",children:0!==Number(null===s||void 0===s?void 0:s.total)&&(0,w.jsx)(g.Z,{onChange:function(e,t){b((function(n){return(0,d.Z)((0,d.Z)({},n),{},{limit:t,page:e})}))},total:(null===s||void 0===s?void 0:s.total)||10,showSizeChanger:!0,showQuickJumper:!0})}),(0,w.jsx)(x.Z,{columns:L,dataSource:function(){var e,t=[];s&&(null===(e=s.data)||void 0===e||e.forEach((function(e){var n,a="";switch(Number(e.status)){case"0":a="Not approve";break;case"1":a="Active";break;default:a="Waiting"}t.push({comment:e.comment,name:e.title,title:e.title,rating:e.rating,user:null===(n=e.user)||void 0===n?void 0:n.avatar,updated_at:e.updated_at,status:a,dislike:e.dislike,like:e.approval,actions:{appId:e.appid}})})));return t}(),pagination:!1,loading:l})]})})},T=n(83734),E=(0,S.F4)(r||(r=(0,_.Z)(["\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }"]))),M=S.ZP.div(i||(i=(0,_.Z)(["\n  min-height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),R=S.ZP.div(o||(o=(0,_.Z)(["\n  width: 120px;\n  height: 120px;\n  border-top: 4px solid rgb(237, 44, 73);\n  border-radius: 50%;\n  animation: "," 0.8s linear infinite;\n"])),E),U=function(){return(0,w.jsx)(M,{className:"loading",children:(0,w.jsx)(R,{})})},Y=n(72426),z=n.n(Y),D=S.ZP.div(s||(s=(0,_.Z)(["\n  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n  padding: 2rem;\n  border-radius: 15px;\n  margin-bottom: 2rem;\n  min-width: 70rem;\n  p {\n    margin-bottom: 1rem;\n    width: 100%;\n    margin-right: 5rem;\n    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;\n    padding: 5px 2rem;\n    border-radius: 5px;\n  }\n  .label {\n    color: #4e7093;\n    text-transform: uppercase;\n    margin-right: 2rem;\n  }\n"]))),B=function(e){var t=e.data;return(0,w.jsxs)(D,{children:[(0,w.jsxs)("h1",{children:[(0,w.jsx)("span",{className:"",children:"Update At"}),(0,w.jsxs)("span",{className:"detail",children:[" ",z()(t.updated_at).format("MMMM Do YYYY, h:mm:ss a")]})]}),(0,w.jsxs)("p",{children:[(0,w.jsx)("span",{className:"label",children:"Description"})," ",(0,w.jsxs)("span",{className:"detail",children:[t.description," "]})]}),(0,w.jsxs)("p",{children:[(0,w.jsx)("span",{className:"label",children:"App Version"}),(0,w.jsxs)("span",{className:"detail",children:[" ",t.app_version," "]})]}),(0,w.jsxs)("p",{children:[(0,w.jsx)("span",{className:"label",children:"App ID"}),(0,w.jsxs)("span",{className:"detail",children:[" ",t.id_app," "]})]}),(0,w.jsxs)("p",{children:[(0,w.jsx)("span",{className:"label",children:"Created At"}),(0,w.jsxs)("span",{className:"detail",children:[" ",z()(t.created_at).format("MMMM Do YYYY, h:mm:ss a")]})]})]})},F=function(e){var t=e.historyUpdate;return(0,w.jsx)(w.Fragment,{children:t&&t.map((function(e,t){return(0,w.jsx)(B,{data:e},"history-".concat(t))}))})},H=S.ZP.div(l||(l=(0,_.Z)([""]))),V=function(e){var t=e.onOk,n=e.onCancel,a=(0,A.UO)(),r=(0,v.I0)(),i=(0,f.useRef)(),o=(0,f.useState)({keyword:"",locale:""}),s=(0,u.Z)(o,2),l=s[0],c=s[1],p=(0,f.useState)(null),m=(0,u.Z)(p,2),x=m[0],g=m[1],b=(0,v.v9)((function(e){return e.detailApp})),j=b.historyUpdate,Z=b.isLoadingGetHistory,I=b.statusGetHistory,C=b.languages,_=b.isLoading,S=function(){var e,t=(0,k.Vb)();r((0,y.dq)({appId:a.id,keyword:l.keyword,locale:l.locale||(null===(e=t[0])||void 0===e?void 0:e.code)}))};(0,f.useEffect)((function(){var e=(0,k.Vb)();e&&g(e[0].code),_||S()}),[l]);return console.log(x),(0,w.jsx)(H,{children:(0,w.jsx)(N.Z,{title:"History update of app",open:!0,onOk:t,onCancel:n,footer:null,children:null!==x&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("p",{children:"Choose Locale"}),(0,w.jsx)(T.Z,{style:{width:"100%",margin:"auto",marginBottom:"2rem"},defaultValue:x,onChange:function(e){c((function(t){return(0,d.Z)((0,d.Z)({},t),{},{locale:e})}))},options:C&&C.map((function(e,t){return{key:t,value:e.code,label:e.language}}))}),(0,w.jsx)(h.Z,{placeholder:"Enter your App Version to find....",allowClear:!0,size:"large",onChange:function(e){i.current&&clearTimeout(i.current),i.current=setTimeout((function(){c((function(t){return(0,d.Z)((0,d.Z)({},t),{},{keyword:e.target.value})}))}),1e3)},style:{marginBottom:"4rem",width:"50%",marginLeft:"auto",borderRadius:"5px"}}),Z&&"success"!==I?(0,w.jsx)(U,{}):(0,w.jsx)(F,{historyUpdate:j})]})})})},G=S.ZP.div(c||(c=(0,_.Z)(["\n  background: var(--bg-dark);\n  padding: 1rem;\n  h1 {\n    color: white;\n  }\n  &&& {\n    .ant-select:not(.ant-select-customize-input) .ant-select-selector {\n      border: none;\n    }\n    .ant-pagination {\n      color: white;\n    }\n    .ant-table table {\n      padding: 5rem;\n    }\n    .ant-table-row {\n      transition: all 0.4s;\n      &:hover {\n        /* transform: scale(1.05); */\n        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n      }\n    }\n  }\n  .button {\n    transition: all 0.5s;\n    color: white;\n    border-radius: 4px;\n    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n    text-align: center;\n\n    &:active {\n      transform: scale(1.1);\n    }\n    a {\n      background: transparent !important;\n\n      &:active {\n      }\n    }\n  }\n  .status_active {\n    background: #2cbc63;\n    clip-path: polygon(10px 0%, 100% 0%, 100% 100%, 10px 100%, 0 50%);\n  }\n\n  .status_waiting {\n    background: var(--bg-blue);\n    clip-path: polygon(10px 0%, 100% 0%, 100% 100%, 10px 100%, 0 50%);\n  }\n  .status_reject {\n    background: red;\n    clip-path: polygon(10px 0%, 100% 0%, 100% 100%, 10px 100%, 0 50%);\n  }\n  .table {\n    display: flex;\n    flex-direction: column;\n  }\n  .pagination {\n    background: #1c212f;\n    padding: 1rem;\n    margin-top: 2rem;\n    color: white;\n  }\n  .feature {\n    display: flex;\n  }\n"])));function J(e,t){var n=(0,v.I0)(),a=f.useRef(),r=(0,v.v9)((function(e){return e.detailApp})),i=r.createdApps,o=r.isLoadingCreatedApps,s=(0,f.useState)({limit:10,page:0,title:""}),l=(0,u.Z)(s,2),c=l[0],j=l[1],Z=(0,f.useState)(!1),C=(0,u.Z)(Z,2),N=C[0],A=C[1],_=(0,f.useState)(!1),S=(0,u.Z)(_,2),O=S[0],L=S[1];(0,f.useEffect)((function(){n((0,y.Ct)(c))}),[c]),(0,f.useEffect)((function(){return function(){localStorage.setItem("pagingParams",JSON.stringify(c))}}),[]);var T=function(e){switch(e){case"Active":return"status_active";case"Waiting":return"status_waiting";default:return"status_rejected"}},E=[{title:"Cover",dataIndex:"cover",key:"cover",render:function(e){return(0,w.jsx)(p.C,{src:e?"".concat(k.dz,"/").concat(e):"https://joeschmoe.io/api/v1/random"})}},{title:"Developer",dataIndex:"developer",key:"developer"},{title:"Installs",dataIndex:"installs",key:"installs"},{title:"History Update",dataIndex:"history",key:"history",render:function(e){return(0,w.jsx)(m.Z,{type:"primary",className:"button",style:{width:"90%"},children:(0,w.jsx)(b.OL,{onClick:function(){return L(!0)},to:"/created-app/history-update/".concat(e),style:{width:"100%",display:"block"},children:"History"})})}},{title:"Score",dataIndex:"score",key:"score"},{title:"Slug",dataIndex:"slug",key:"slug"},{title:"Status",dataIndex:"status",key:"status",render:function(e){return(0,w.jsx)("p",{className:"button ".concat(T(e)),children:e})}},{title:"Title",dataIndex:"title",key:"title"},{title:"Action",dataIndex:"action",key:"action",render:function(e){var t=e.slug,n=e.appId,a=e.appId2;return(0,w.jsx)(I,{slug:t,appId:n,appId2:a,pagingParams:c,setIsModalOpen:A})}}];return(0,f.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]),(0,w.jsxs)(w.Fragment,{children:[N&&(0,w.jsx)(P,{onOk:function(){A(!1)},onCancel:function(){A(!1)}}),O&&(0,w.jsx)(V,{onOk:function(){L(!1)},onCancel:function(){L(!1)}}),(0,w.jsxs)(G,{ref:t,id:"created-app",children:[(0,w.jsx)("h1",{style:{width:"100%",textAlign:"center",marginBottom:"5rem"},children:"CREATED APP"}),(0,w.jsxs)("div",{className:"table",children:[(0,w.jsx)(h.Z,{placeholder:"Find somethings....",allowClear:!0,size:"large",onChange:function(e){a.current&&clearTimeout(a.current),a.current=setTimeout((function(){j((function(t){return(0,d.Z)((0,d.Z)({},t),{},{title:e.target.value})}))}),1e3)},style:{marginBottom:"4rem",width:"50%",marginLeft:"auto"}}),(0,w.jsx)(x.Z,{columns:E,dataSource:function(){var e,t=[];i&&(null===(e=i.data)||void 0===e||e.forEach((function(e){var n="";switch(Number(e.status)){case 0:n="Not approve";break;case 1:n="Active";break;default:n="Waiting"}t.push({cover:e.cover,developer:e.developer,installs:e.installs,history:e.id,score:e.score,slug:e.slug,status:n,title:e.title,action:{slug:e.slug,appId:e.id,appId2:e.appid}})})));return t}(),pagination:!1,loading:o}),(0,w.jsx)("div",{className:"pagination",children:(0,w.jsx)(g.Z,{onChange:function(e,t){j((function(n){return(0,d.Z)((0,d.Z)({},n),{},{limit:t,page:e})}))},total:(null===i||void 0===i?void 0:i.total)||10,showSizeChanger:!0,showQuickJumper:!0})})]})]})]})}var Q=(0,f.forwardRef)(J)}}]);
//# sourceMappingURL=763.ce4604c6.chunk.js.map