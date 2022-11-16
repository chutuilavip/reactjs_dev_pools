"use strict";(self.webpackChunkpools_fe=self.webpackChunkpools_fe||[]).push([[537],{92537:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var i,r,o,s,a,f,l,c,p,d=t(29439),m=t(44695),g=t(87309),u=t(19653),h=t(72791),x=t(61134),w=t(59434),b=t(57689),y=(t(69226),t(92450),t(21620),t(9144),t(76216),t(81468),t(3075),t(26337),t(72773),t(12307),t(27387)),_=t(41150),j=t(47988),v=t(1413),Z=t(62797),z=[[{placeholder:"Business Name *",register:"business_name"}],[{placeholder:"First Name *",register:"first_name"},{placeholder:"Last Name *",register:"last_name"}],[{placeholder:"Email*",register:"email"},{placeholder:"Phone Number *",register:"phone_number"}],[{placeholder:"Password *",register:"password",type:"password"},{placeholder:"Confirm Password *",register:"password_confirmation",type:"password"}]],k=Z.Ry({first_name:Z.Z_().required("First name is required").min(2,"Min length of First Name is 2").max(10,"Max length of First Name is 10"),last_name:Z.Z_().required("Last name is required").min(2,"Min length validate message").max(10),email:Z.Z_().required("Email is required").email("Invalid email address"),phone_number:Z.Z_().required("Phone number is required").matches(/^!*([0-9]!*){10,}$/gi,"Phone number must be at least 10 digits"),business_name:Z.Z_().required("Business name is required"),password:Z.Z_().required("Password is required").min(8,"Password must be at least 8 characters"),password_confirmation:Z.Z_().required().oneOf([Z.iH("password"),null],"Password confirm does not match")}).required(),P=t(30168),q=t(54088),N=q.ZP.div(i||(i=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 100vh;\n  background-color: #131313;\n  .title_form {\n    margin-top: 50px;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 32px;\n    letter-spacing: 0.0025em;\n    color: #ffffff;\n  }\n  .validateMessage {\n    color: red;\n    font-size: 2rem;\n  }\n  .switch_register_type {\n    margin-bottom: 2rem;\n    label {\n      user-select: none;\n      cursor: pointer;\n      color: white;\n      margin-left: 1rem;\n    }\n  }\n"]))),E=q.ZP.form(r||(r=(0,P.Z)(["\n  width: 100%;\n  height: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  margin-bottom: 10rem;\n"])),(function(n){return n.height||"43%"})),C=q.ZP.div(o||(o=(0,P.Z)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 14px;\n  opacity: ",";\n  z-index: ",";\n  .btn_form {\n    background-color: #3b72fe;\n    padding: 14px 0;\n    width: 100%;\n    font-weight: 700;\n    font-size: 20px;\n    letter-spacing: 0.0025em;\n    color: #ffffff;\n    cursor: pointer;\n    height: 5rem;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n  }\n  .input_form_last {\n    width: 100%;\n    background-color: #212121;\n    padding: 1.5rem;\n    color: #ffffff;\n  }\n  .field_item {\n    display: flex;\n    flex-direction: column;\n    height: 10rem;\n    width: 100%;\n  }\n"])),(function(n){return n.status?1:0}),(function(n){return n.status?99:-99})),F=(q.ZP.div(s||(s=(0,P.Z)(["\n  width: 100%;\n  display: flex;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n  font-weight: 400;\n  font-size: 16px;\n  input {\n    background-color: #212121;\n    padding: 17px 50px;\n    width: 100%;\n    color: #ffffff;\n  }\n"]))),q.ZP.div(a||(a=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n  position: absolute;\n  opacity: ",";\n  z-index: ",";\n"])),(function(n){return n.status?0:1}),(function(n){return n.status?-99:99})),q.ZP.div(f||(f=(0,P.Z)(["\n  background-color: #1c212f;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  max-width: 536px;\n  height: auto;\n  padding: 20px;\n  gap: 20px;\n  .list_app_footer {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    width: 100%;\n    margin-top: 2rem;\n    span {\n      font-weight: 400;\n      font-size: 11px;\n      letter-spacing: 0.0025em;\n      color: #3b72fe;\n    }\n    p {\n      font-size: 11px;\n      color: #ffffff;\n    }\n  }\n  .step_two_header {\n    h3 {\n      font-weight: 700;\n      font-size: 32px;\n      letter-spacing: 0.0025em;\n      color: #ffffff;\n    }\n    p {\n      font-weight: 400;\n      font-size: 14px;\n      letter-spacing: 0.0025em;\n      color: #9e9e9e;\n    }\n  }\n  .apps {\n    display: flex;\n    gap: 20px;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    width: 85%;\n    margin: 0 auto;\n    .bg_app {\n      background-color: #ffffff;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 90px;\n      height: 90px;\n    }\n    .list_app_footer {\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-end;\n      width: 100%;\n      margin-top: 2rem;\n      span {\n        font-weight: 400;\n        font-size: 11px;\n        letter-spacing: 0.0025em;\n        color: #3b72fe;\n      }\n      p {\n        font-size: 11px;\n        color: #ffffff;\n      }\n    }\n  }\n"]))),q.ZP.div(l||(l=(0,P.Z)(["\n  background-color: #1c212f;\n  padding: 20px;\n  max-width: 536px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 45px;\n  h3 {\n    font-weight: 700;\n    font-size: 32px;\n    letter-spacing: 0.0025em;\n    color: #ffffff;\n  }\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    letter-spacing: 0.0025em;\n    color: #9e9e9e;\n  }\n  .form_connect {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    .input_meta {\n      background: #212121;\n      font-style: normal;\n      font-weight: 400;\n      font-size: 11px;\n      letter-spacing: 0.0025em;\n      color: #ffffff;\n      padding: 15px;\n      width: 100%;\n    }\n    .input_top {\n      display: flex;\n      width: 85%;\n      gap: 20px;\n    }\n    .btn_QR {\n      background: #212121;\n      font-weight: 400;\n      font-size: 11px;\n      line-height: 130%;\n      color: #ffffff;\n      padding: 12px 0;\n      width: 85%;\n      cursor: pointer;\n    }\n  }\n\n  .btn_connectWallet {\n    background: #3b72fe;\n    font-weight: 700;\n    font-size: 16px;\n    letter-spacing: 0.0025em;\n    color: #ffffff;\n    width: 100%;\n    padding: 12px 0;\n  }\n  .or {\n    text-align: center;\n    font-weight: 400;\n    font-size: 11px;\n    letter-spacing: 0.0025em;\n    color: #ffffff;\n  }\n"]))),q.ZP.div(c||(c=(0,P.Z)(["\n  font-weight: 700;\n  font-size: 24px;\n  letter-spacing: 0.0025em;\n  color: #9e9e9e;\n  display: flex;\n  .btn_step {\n    width: 229px;\n    max-height: 57px;\n\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    justify-content: center;\n\n    background-color: #1c212f;\n    font-weight: 700;\n    font-size: 24px;\n    letter-spacing: 0.0025em;\n    color: #9e9e9e;\n    cursor: pointer;\n    span:last-child {\n      font-size: 12px;\n    }\n  }\n  .btn_step_active {\n    width: 229px;\n    max-height: 57px;\n\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    justify-content: center;\n\n    background-color: #181818;\n    font-weight: 700;\n    font-size: 24px;\n    letter-spacing: 0.0025em;\n    color: #ffffff;\n    border: 2px solid #3b72fe;\n    cursor: pointer;\n    span:last-child {\n      font-size: 12px;\n    }\n  }\n"]))),q.ZP.div(p||(p=(0,P.Z)(["\n  width: 100%;\n  .row {\n    display: flex;\n    gap: 5rem;\n  }\n  .field_item {\n    margin-bottom: 2rem;\n    color: white;\n    input {\n      color: white;\n      width: 100%;\n      background: #1c212f;\n      padding: 2rem;\n      border-radius: 5px;\n    }\n  }\n"])))),M=t(80184),R=function(n){var e=n.register,t=n.errors;return(0,M.jsx)(F,{children:z.map((function(n,i){return(0,M.jsx)("div",{className:"row",children:n.map((function(n,i){var r;return(0,M.jsxs)("div",{className:"field_item",children:[(0,M.jsx)("input",(0,v.Z)({placeholder:n.placeholder,type:n.type||"text"},e(n.register))),(0,M.jsxs)("p",{className:"validateMessage",children:[" ",null===(r=t[n.register])||void 0===r?void 0:r.message]})]},"field-".concat(i))}))},"row-".concat(i))}))})},S=function(){var n=(0,h.useState)(!0),e=(0,d.Z)(n,2),t=e[0],i=(e[1],(0,x.cI)({resolver:(0,m.X)(k)})),r=i.register,o=i.handleSubmit,s=(i.reset,i.getValues,i.formState.errors),a=(0,w.I0)(),f=(0,w.v9)((function(n){return n.user})),l=(f.statusRegis,f.isLoading),c=(0,b.s0)(),p=function(){c("/login")};return(0,M.jsx)(u.E.main,{variants:_.o,initial:"hidden",animate:"visible",exit:"hidden",children:(0,M.jsxs)(N,{children:[(0,M.jsx)("h3",{className:"title_form",children:"CREATE ACOUNT"}),(0,M.jsx)("div",{className:"switch_register_type",children:(0,M.jsx)("label",{htmlFor:"switch_register_type",children:"Register for Publisher"})}),(0,M.jsx)(E,{onSubmit:o((function(n){var e=(0,y.x)(n);a((0,j.Ek)({payload:e,goHome:p}))})),height:"100%",children:(0,M.jsxs)(C,{status:t,children:[(0,M.jsx)(R,{register:r,errors:s}),(0,M.jsx)(g.Z,{loading:l,htmlType:"submit",className:"btn_form",children:"Submit"})]})})]})})}}}]);
//# sourceMappingURL=537.bfa1a4f8.chunk.js.map