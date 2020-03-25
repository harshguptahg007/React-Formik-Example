(this["webpackJsonpreact-complete-form"]=this["webpackJsonpreact-complete-form"]||[]).push([[0],{23:function(e,a,t){},58:function(e,a,t){e.exports=t(74)},63:function(e,a,t){},64:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(54),m=t.n(l),i=(t(63),t(64),t(2)),c=(t(23),t(13)),o=(t(69),function(e){return r.a.createElement("div",{className:"Radio-container"},r.a.createElement("label",{className:"radio-checkbox-option",htmlFor:e.id},e.value,r.a.createElement(i.b,{type:"checkbox",name:e.name,id:e.id,value:e.value,className:"Field-checkbox"}),r.a.createElement("span",{className:"checkbox-mark"})))}),d=(t(70),function(e){return r.a.createElement("div",null,r.a.createElement("label",{className:"heading",htmlFor:e.id},e.label),r.a.createElement(i.b,{component:"textarea",name:e.name,rows:6,cols:74,placeholder:e.placeholder,id:e.id,className:"Textarea"}))}),s=(t(71),function(e){return r.a.createElement("div",{className:"Radio-container"},r.a.createElement("label",{className:"radio-checkbox-option",htmlFor:e.id},e.value,r.a.createElement(i.b,{type:"radio",name:e.name,id:e.id,value:e.value,className:"Field-radio"}),r.a.createElement("span",{className:"radio-mark"})))}),u=function(e){return r.a.createElement("div",null,r.a.createElement("label",{className:"heading",htmlFor:"name"},e.label),r.a.createElement(i.b,{type:"text",name:e.name,placeholder:e.placeholder,id:e.id,className:"Input-field"}))},E=function(e){return r.a.createElement("div",null,r.a.createElement("label",{className:"heading",htmlFor:"name"},e.label),r.a.createElement(i.b,{type:"number",name:e.name,placeholder:e.placeholder,id:e.id,className:"Input-field"}))},v=(t(72),function(e){return r.a.createElement("option",{disabled:e.disabled,value:e.disabled?"":e.value,className:"color-black"},e.value)}),p=(t(73),function(e){return r.a.createElement("div",null,r.a.createElement("label",{className:"heading",htmlFor:e.id},e.label),r.a.createElement(i.b,{component:"select",name:e.name,id:e.id,className:"Input-field Dropdown"},r.a.createElement(v,{disabled:!0,value:e.initialValue}),e.dropDownList.map((function(e){return r.a.createElement(v,{disabled:!1,value:e})}))))}),f=function(e){return r.a.createElement("div",{className:"Card"},r.a.createElement(i.c,{initialValues:{name:"",email:"",age:"",role:"",recommend:"definitely",feature:"",improved:"",comments:""},validationSchema:c.b().shape({name:c.c().required("*Field is required"),email:c.c().email("Invalid Email").required("*Field is required"),age:c.a().required("*Field is required"),role:c.c().required("*Field is required"),recommend:c.c().required("*Field is required"),feature:c.c().required("*Field is required"),improved:c.c().required("*Field is required"),comments:c.c().required("*Field is required")}),onSubmit:function(e,a){var t={name:e.name,email:e.email,age:e.age,role:e.role,recommend:e.recommend,feature:e.feature,improved:e.improved,comments:e.comments};console.log(t)}},(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,onReset:e.handleReset},r.a.createElement("div",{className:"Entry-field"},r.a.createElement(u,{label:"Name",name:"name",placeholder:"Enter your Name",id:"name"}),r.a.createElement(i.a,{name:"name",render:function(e){return r.a.createElement("div",{className:"Error-message"},e)}})),r.a.createElement("div",{className:"Entry-field"},r.a.createElement(u,{label:"Email",name:"email",placeholder:"Enter your Email",id:"email"}),r.a.createElement(i.a,{name:"email",render:function(e){return r.a.createElement("div",{className:"Error-message"},e)}})),r.a.createElement("div",{className:"Entry-field"},r.a.createElement(E,{label:"Age",name:"age",placeholder:"Enter your age",id:"age"}),r.a.createElement(i.a,{name:"age",render:function(e){return r.a.createElement("div",{className:"Error-message"},e)}})),r.a.createElement("div",{className:"Entry-field"},r.a.createElement(p,{label:"Which option best describes your current role?",id:"role",name:"role",initialValue:"Select current Role",dropDownList:["Student","Full Time Job","Full Time Learner","Prefer not to say","other"]}),r.a.createElement(i.a,{name:"role",render:function(e){return r.a.createElement("div",{className:"Error-message"},e)}})),r.a.createElement("div",{className:"Entry-field"},r.a.createElement("label",{className:"heading"},"Would you recommend freeCodeCamp to a friend?"),r.a.createElement(s,{name:"recommend",id:"definitely",value:"Definitely"}),r.a.createElement(s,{name:"recommend",id:"maybe",value:"Maybe"}),r.a.createElement(s,{name:"recommend",id:"not-sure",value:"Not Sure"}),r.a.createElement(i.a,{name:"recommend",render:function(e){return r.a.createElement("div",{className:"Error-message"},e)}})),r.a.createElement("div",{className:"Entry-field"},r.a.createElement(p,{label:"What is your favorite feature of freeCodeCamp?",id:"feature",name:"feature",initialValue:"Select current Feature",dropDownList:["Challenges","Projects","Community","Open Source"]}),r.a.createElement(i.a,{name:"feature",render:function(e){return r.a.createElement("div",{className:"Error-message"},e)}})),r.a.createElement("div",{className:"Entry-field"},r.a.createElement("label",{className:"heading"},"What would you like to see improved? (Check all that apply)"),r.a.createElement(o,{name:"improved",id:"front-end",value:"Front-End Projects"}),r.a.createElement(o,{name:"improved",id:"back-end",value:"Back-End Projects"}),r.a.createElement(o,{name:"improved",id:"data",value:"Data Visualization"}),r.a.createElement(o,{name:"improved",id:"challenges",value:"Challenges"}),r.a.createElement(o,{name:"improved",id:"open",value:"Open Source Community"}),r.a.createElement(o,{name:"improved",id:"gitter",value:"Gitter help rooms"}),r.a.createElement(o,{name:"improved",id:"videos",value:"Videos"}),r.a.createElement(o,{name:"improved",id:"city",value:"City Meetups"}),r.a.createElement(o,{name:"improved",id:"wiki",value:"Wiki"}),r.a.createElement(o,{name:"improved",id:"forum",value:"Forum"}),r.a.createElement(o,{name:"improved",id:"additional",value:"Additional Courses"}),r.a.createElement(i.a,{name:"improved",render:function(e){return r.a.createElement("div",{className:"Error-message"},e)}})),r.a.createElement("div",{className:"Entry-field"},r.a.createElement(d,{label:"Any comments or suggestions?",name:"comments",id:"comments",placeholder:"Enter your comments here..."}),r.a.createElement(i.a,{name:"comments",render:function(e){return r.a.createElement("div",{className:"Error-message"},e)}})),r.a.createElement("button",{type:"submit",disabled:e.isSubmitting,className:"btn-submit"},"Submit"))})))},h=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"freeCodeCamp Survey Form"),r.a.createElement("h3",null,"Thank you for taking the time to help us improve the platform"),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.3d7e3e3a.chunk.js.map