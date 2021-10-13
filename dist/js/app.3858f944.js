(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},s=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"12c3":function(e,t,a){},"1ca4":function(e,t,a){},"1ffc":function(e,t,a){"use strict";a("1ca4")},"31f2":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o={},i=o,c=(a("034f"),a("2877")),l=Object(c["a"])(i,n,s,!1,null,null,null),d=l.exports,u=a("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[e.loading?r("Spinner"):e._e(),r("div",{staticClass:"login-container"},[r("img",{staticClass:"logo-image",attrs:{src:a("b43a")}}),r("b-form",{staticClass:"login-box"},[r("b-form-group",{attrs:{label:"Email"}},[r("b-form-input",{attrs:{placeholder:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("b-form-group",{attrs:{label:"Password"}},[r("b-form-input",{attrs:{type:"password",placeholder:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.login()}}},[e._v("Login")]),e._v("   "),r("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.register()}}},[e._v("Register")])],1)],1)],1)},f=[],h=a("bc3a"),m=a.n(h),b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"opacity"}),a("div",{staticClass:"spinner-container"},[a("div",{staticClass:"spinner"}),a("div",{staticClass:"loading-text"})])])}],g={name:"Spinner",data:function(){return{}},methods:{}},S=g,w=(a("9d29"),Object(c["a"])(S,b,v,!1,null,"38abbd57",null)),k=w.exports,O={name:"Login",components:{Spinner:k},data:function(){return{email:null,password:null,loading:!1}},methods:{login:function(){var e=this;this.loading=!0,m.a.post("https://rm-api-1.azurewebsites.net/users/login/",{email:this.email,password:this.password}).then((function(t){t.data.accessToken&&(localStorage.setItem("jwt",t.data.accessToken),e.loading=!1,e.$router.push("dashboard")),e.loading=!1})).catch((function(t){console.log(t),e.loading=!1,alert(t)}))},register:function(){this.$router.push("register")}}},_=O,x=(a("c49d"),Object(c["a"])(_,p,f,!1,null,"2eb8055d",null)),y=x.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[e.loading?r("Spinner"):e._e(),r("div",{staticClass:"login-container"},[r("img",{staticClass:"logo-image",attrs:{src:a("b43a")}}),r("b-form",{staticClass:"login-box"},[r("b-form-group",{attrs:{label:"Email"}},[r("b-form-input",{attrs:{placeholder:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("b-form-group",{attrs:{label:"Password"}},[r("b-form-input",{attrs:{type:"password",placeholder:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("b-form-group",{attrs:{label:"Firstname"}},[r("b-form-input",{attrs:{placeholder:"First name"},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1),r("b-form-group",{attrs:{label:"Lastname"}},[r("b-form-input",{attrs:{placeholder:"Last name"},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1),r("b-button",{attrs:{variant:"primary"},on:{click:e.register}},[e._v("Register")])],1)],1)],1)},j=[],E={name:"Login",components:{Spinner:k},data:function(){return{email:null,password:null,firstname:null,lastname:null,loading:!1}},methods:{login:function(){var e=this;this.loading=!0,m.a.post("https://rm-api-1.azurewebsites.net/users/login/",{email:this.email,password:this.password}).then((function(t){t.data.accessToken&&(localStorage.setItem("jwt",t.data.accessToken),e.loading=!1),e.loading=!1})).catch((function(t){console.log(t),e.loading=!1,alert(t)}))},register:function(){var e=this;this.loading=!0,m.a.post("https://rm-api-1.azurewebsites.net/users/",{email:this.email,password:this.password,firstname:this.firstname,lastname:this.lastname}).then((function(t){console.log(t),e.$router.push("/")})).catch((function(e){console.log(e)}))}}},D=E,P=(a("1ffc"),Object(c["a"])(D,C,j,!1,null,"69d6e0ee",null)),L=P.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard"},[e.loading?r("Spinner"):e._e(),e.allDataLoaded<3?r("Spinner"):e._e(),r("div",{staticClass:"dashboard-container"},[r("img",{staticClass:"logo-image",attrs:{src:a("b43a")}}),r("div",{staticClass:"dashboard-services-container"},[r("b-modal",{attrs:{id:"edit-modal",title:"Edit order"},on:{ok:e.handleEdit},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[r("h5",[e._v("Cabin")]),e._v(" "+e._s(e.selectedOrderCabin)+" "),r("h5",[e._v("Choose service")]),r("b-form-select",{staticClass:"select-form",attrs:{options:e.serviceOptions},model:{value:e.selectedOrderService,callback:function(t){e.selectedOrderService=t},expression:"selectedOrderService"}}),r("h5",[e._v("Date")]),r("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"datepicker-modal"},model:{value:e.modalDate,callback:function(t){e.modalDate=t},expression:"modalDate"}})],1),r("div",{staticClass:"dashboard-cabins"},[r("h3",[e._v("Order service")]),r("h5",[e._v("Select cabin")]),r("b-form-select",{staticClass:"select-form",attrs:{options:e.cabinOptions},model:{value:e.cabinSelected,callback:function(t){e.cabinSelected=t},expression:"cabinSelected"}}),r("h5",[e._v("Choose service")]),r("b-form-select",{staticClass:"select-form",attrs:{options:e.serviceOptions},model:{value:e.serviceSelected,callback:function(t){e.serviceSelected=t},expression:"serviceSelected"}}),r("h5",[e._v("Date")]),r("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"datepicker"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.orderService()}}},[e._v("Order service")])],1),r("div",{staticClass:"dashboard-services"},[r("h3",[e._v("Ordered services")]),r("b-table",{ref:"selectableTable",attrs:{items:e.orderedServices,fields:e.orderedServicesfields,"select-mode":"single",responsive:"sm",selectable:""},on:{"row-selected":e.onRowSelected}}),r("b-button",{staticStyle:{"margin-right":"10px"},attrs:{variant:"secondary"},on:{click:function(t){return e.editService()}}},[e._v("Edit")]),r("b-button",{attrs:{variant:"danger"},on:{click:function(t){return e.deleteService()}}},[e._v("Delete")])],1)],1)])],1)},$=[],I=(a("159b"),{name:"Dashboard",components:{Spinner:k},data:function(){return{loading:!1,allDataLoaded:0,modalShow:!1,accessToken:null,cabinSelected:null,cabinOptions:[{value:null,text:"Please select an cabin"}],serviceSelected:null,serviceOptions:[{value:null,text:"Please select service"}],date:null,modalDate:null,orderedServicesfields:["date","service","cabin"],orderedServices:[],orderedServiceSelected:[],selectedOrderCabin:null,selectedOrderId:null,selectedOrderService:null}},mounted:function(){var e=this;this.accessToken=localStorage.getItem("jwt"),m.a.get("https://makeitrain-p2.herokuapp.com/cabins",{headers:{Authorization:"Bearer ".concat(this.accessToken)}}).then((function(t){e.allDataLoaded++,t.data.forEach((function(t){e.cabinOptions.push({value:t.address,text:t.address+" - Sauna: "+t.sauna+" - Beach: "+t.beach})}))})).catch((function(e){console.log(e)})),m.a.get("https://makeitrain-p2.herokuapp.com/services").then((function(t){e.allDataLoaded++,t.data.forEach((function(t){e.serviceOptions.push({value:t.service_type,text:t.service_type+" - "+t.price+"$"})}))})),this.refreshOrders()},methods:{onRowSelected:function(e,t){this.orderedServiceSelected=e,this.selectedOrderCabin=e[0].cabin,this.selectedOrderId=e[0].orderId,this.selectedOrderService=e[0].service,this.modalDate=e[0].date,console.log(t)},refreshOrders:function(){var e=this;m.a.get("https://makeitrain-p2.herokuapp.com/orders").then((function(t){e.allDataLoaded++,e.loading=!1,e.orderedServices=[],t.data.forEach((function(t){e.orderedServices.push({orderId:t.id,date:t.date,service:t.service,cabin:t.cabin})}))}))},orderService:function(){var e=this;this.loading=!0,m.a.post("https://makeitrain-p2.herokuapp.com/orders",{cabin:this.cabinSelected,service:this.serviceSelected,date:this.date}).then((function(t){e.refreshOrders(),console.log(t.data)})).catch((function(t){console.log(t),e.loading=!1}))},editService:function(){this.modalShow=!0},handleEdit:function(){var e=this;this.loading=!0,m.a.put("https://makeitrain-p2.herokuapp.com/orders/"+this.selectedOrderId,{service:this.selectedOrderService,date:this.modalDate}).then((function(t){console.log(t.data),e.refreshOrders()})).catch((function(t){e.loading=!1,console.log(t)}))},deleteService:function(){var e=this;this.loading=!0,m.a.delete("https://makeitrain-p2.herokuapp.com/orders/"+this.orderedServiceSelected[0].orderId).then((function(t){console.log(t.data),e.refreshOrders()})).catch((function(t){console.log(t),e.loading=!1}))}}}),R=I,z=(a("87b2"),Object(c["a"])(R,T,$,!1,null,"3b49655a",null)),M=z.exports;r["default"].use(u["a"]);var A=[{path:"/",name:"Login",component:y},{path:"/register",name:"Register",component:L},{path:"/dashboard",name:"Dashboard",component:M,meta:{requiresAuth:!0}}],q=new u["a"]({mode:"history",base:"/",routes:A});q.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))&&null==localStorage.getItem("jwt")&&a({path:"/"}),a()}));var B=q,F=a("5f5b"),J=a("b1e0");a("f9e3"),a("2dd8");r["default"].use(F["a"]),r["default"].use(J["a"]),r["default"].config.productionTip=!1,new r["default"]({router:B,render:function(e){return e(d)}}).$mount("#app")},"6b06":function(e,t,a){},"85ec":function(e,t,a){},"87b2":function(e,t,a){"use strict";a("31f2")},"9d29":function(e,t,a){"use strict";a("6b06")},b43a:function(e,t,a){e.exports=a.p+"img/rainmaker-black.46e3a7fa.png"},c49d:function(e,t,a){"use strict";a("12c3")}});
//# sourceMappingURL=app.3858f944.js.map