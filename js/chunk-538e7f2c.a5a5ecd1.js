(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-538e7f2c"],{a7e0:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("d2-container",{attrs:{type:"card"}},[i("d2-crud",t._b({staticStyle:{margin:"-15px 0"},on:{edit:function(e){e.index;var i=e.row;return t.goToEditPage("demo-business-issues-142-edit",i.id)},"edit-cache-db":function(e){e.index;var i=e.row;return t.goToEditPage("demo-business-issues-142-edit-cache-db",i.id)}}},"d2-crud",t.crud,!1)),i("d2-link-btn",{attrs:{slot:"footer",title:"issue #142",link:"https://github.com/d2-projects/d2-admin/issues/142"},slot:"footer"})],1)},s=[],d=i("cfab"),r={data:function(){return{crud:{columns:[{title:"姓名",key:"name",width:100},{title:"地址",key:"address"}],data:[],options:{border:!0,size:"mini"},rowHandle:{align:"center",width:240,custom:[{text:"无缓存编辑",size:"mini",emit:"edit"},{text:"带缓存编辑 DB",size:"mini",emit:"edit-cache-db"}]}}}},created:function(){this.getTableData()},methods:{getTableData:function(){var t=this;Object(d["b"])().then((function(e){t.crud.data=e.list})).catch((function(t){return console.log(t)}))},goToEditPage:function(t,e){this.$router.push({name:t,params:{id:e}})}}},o=r,a=i("2877"),u=Object(a["a"])(o,n,s,!1,null,null,null);e["default"]=u.exports},cfab:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return d}));var n=i("9bd2d");function s(){return Object(n["a"])({url:"/demo/business/issues/142/fetch",method:"get"})}function d(t){return Object(n["a"])({url:"/demo/business/issues/142/detail",method:"get",params:{id:t}})}}}]);