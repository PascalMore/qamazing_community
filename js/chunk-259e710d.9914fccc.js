(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-259e710d","chunk-ce422ccc","chunk-2d208fb9"],{"0084":function(t,e,s){"use strict";function r(){var t=JSON.parse(localStorage.getItem("URL")),e="192.168.2.149",s="quantaxis.tech",r="192.168.2.117",a="192.168.2.124",n="quantaxis.tech",o=t&&t.accURL?t.accURL:"http://".concat(e,":10115"),i=t&&t.pnlURL?t.pnlURL:"http://".concat(e,":8028"),c=t&&t.listURL?t.listURL:"http://".concat(r,":8020"),l=t&&t.wsURL?t.wsURL:"ws://".concat(e,":10115/ws/"),u=t&&t.selectedURL?t.selectedURL:"http://".concat(s,":8022"),d=t&&t.indicatorURL?t.indicatorURL:"http://".concat(e,":8030"),p=t&&t.backtestURL?t.backtestURL:"http://192.168.2.117:8010",m=t&&t.innerURL?t.innerURL:"http://".concat(a,":8028"),f=t&&t.financialURL?t.financialURL:"http://".concat(n,":8018"),g=t&&t.groupURL?t.groupURL:"http://".concat(n,":8018"),L=t&&t.orderURL?t.orderURL:"http://".concat(n,":8018"),U=t&&t.klineURL?t.klineURL:"http://".concat(e,":8029"),h=t&&t.cashURL?t.cashURL:"http://".concat(n,":8020"),R=t&&t.backtestqifiURL?t.backtestqifiURL:"http://".concat(a,":8019"),b=t&&t.varietiesURL?t.varietiesURL:"http://".concat(n,":8018"),v=t&&t.strategyURL?t.strategyURL:"http://192.168.2.125:8800";return{accURL:o,pnlURL:i,listURL:c,wsURL:l,selectedURL:u,indicatorURL:d,backtestURL:p,innerURL:m,financialURL:f,groupURL:g,orderURL:L,klineURL:U,cashURL:h,backtestqifiURL:R,varietiesURL:b,strategyURL:v}}s.d(e,"a",(function(){return r}))},2973:function(t,e,s){},3547:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-login"},[r("div",{staticClass:"page-login--layer page-login--layer-area"},[r("ul",{staticClass:"circles"},t._l(10,(function(t){return r("li",{key:t})})),0)]),r("div",{staticClass:"page-login--layer page-login--layer-time",attrs:{flex:"main:center cross:center"}},[t._v(t._s(t.time))]),r("div",{staticClass:"page-login--layer"},[r("div",{staticClass:"page-login--content",attrs:{flex:"dir:top main:justify cross:stretch box:justify"}},[r("div",{staticClass:"page-login--content-header"}),r("div",{staticClass:"page-login--content-main",attrs:{flex:"dir:top main:center cross:center"}},[r("img",{staticClass:"page-login--logo",attrs:{src:s("a6b0")}}),r("div",{staticClass:"page-login--form"},[r("el-card",{attrs:{shadow:"never"}},[r("el-form",{ref:"loginForm",attrs:{"label-position":"top",rules:t.rules,model:t.formLogin,size:"default"}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{type:"text",placeholder:"用户名"},model:{value:t.formLogin.username,callback:function(e){t.$set(t.formLogin,"username",e)},expression:"formLogin.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.formLogin.password,callback:function(e){t.$set(t.formLogin,"password",e)},expression:"formLogin.password"}})],1),r("el-form-item",{attrs:{prop:"address"}},[r("el-input",{attrs:{type:"text",placeholder:"回测地址"},model:{value:t.formLogin.address,callback:function(e){t.$set(t.formLogin,"address",e)},expression:"formLogin.address"}})],1),r("el-button",{staticClass:"button-login",attrs:{size:"default",type:"primary"},on:{click:t.submit}},[t._v("登录")])],1)],1)],1)]),t._m(0)])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-login--content-footer"},[s("p",{staticClass:"page-login--content-footer-copyright"},[t._v("QUANTAXIS Trade Admin")]),s("p",{staticClass:"page-login--content-footer-options"})])}],n=(s("a4d3"),s("4de4"),s("e439"),s("dbb4"),s("b64b"),s("5319"),s("159b"),s("ade3")),o=s("6e85"),i=s.n(o),c=s("5880"),l=s("1353"),u=s("0084"),d=s("c276");function p(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function m(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?p(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var f={mixins:[l["a"]],data:function(){return{backtestURL:"",allURL:"",timeInterval:null,time:i()().format("HH:mm:ss"),dialogVisible:!1,users:[{name:"Admin",username:"admin",password:"admin"},{name:"Editor",username:"editor",password:"editor"},{name:"User1",username:"user1",password:"user1"}],formLogin:{username:"admin",password:"admin",address:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}]}}},mounted:function(){var t=this,e=Object(u["a"])();this.backtestURL=e.backtestURL,this.allURL=e,this.formLogin.address=this.backtestURL,this.timeInterval=setInterval((function(){t.refreshTime()}),1e3)},beforeDestroy:function(){clearInterval(this.timeInterval)},methods:m({},Object(c["mapActions"])("d2admin/account",["login"]),{refreshTime:function(){this.time=i()().format("HH:mm:ss")},handleUserBtnClick:function(t){this.formLogin.username=t.username,this.formLogin.password=t.password,this.submit()},submit:function(){var t=this,e=this.formLogin.address;this.$refs.loginForm.validate((function(s){s?t.$http.get(e+"/user",{params:{username:t.formLogin.username,password:t.formLogin.password,model:"password"}}).then((function(e){var s=e.result;t.allURL.backtestURL=t.formLogin.address,localStorage.setItem("URL",JSON.stringify(t.allURL)),d["a"].cookies.set("uuid",s.user_cookie),d["a"].cookies.set("token",s.user_cookie),d["a"].cookies.set("userInfo",t.formLogin),t.$store.dispatch("d2admin/page/closeAll"),t.$store.dispatch("d2admin/user/set",{name:s.username},{root:!0}),t.$store.dispatch("d2admin/account/load"),t.$router.replace(t.$route.query.redirect||"/")})):t.$message.error("表单校验失败，请检查")}))}})},g=f,L=(s("60d0"),s("2877")),U=Object(L["a"])(g,r,a,!1,null,null,null);e["default"]=U.exports},"60d0":function(t,e,s){"use strict";var r=s("2973"),a=s.n(r);a.a},"99c7":function(t,e,s){"use strict";s.r(e);var r=s("3547");e["default"]=r["default"]},a6b0:function(t,e,s){t.exports=s.p+"img/logo@2x.286f12ac.png"}}]);