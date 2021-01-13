(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b8dac6c","chunk-106444ba"],{"0084":function(t,a,e){"use strict";function o(){var t=JSON.parse(localStorage.getItem("URL")),a="192.168.2.149",e="quantaxis.tech",o="192.168.2.117",r="192.168.2.124",s="quantaxis.tech",n=t&&t.accURL?t.accURL:"http://".concat(a,":10115"),i=t&&t.pnlURL?t.pnlURL:"http://".concat(a,":8028"),c=t&&t.listURL?t.listURL:"http://".concat(o,":8020"),l=t&&t.wsURL?t.wsURL:"ws://".concat(a,":10115/ws/"),p=t&&t.selectedURL?t.selectedURL:"http://".concat(e,":8022"),_=t&&t.indicatorURL?t.indicatorURL:"http://".concat(a,":8030"),h=t&&t.backtestURL?t.backtestURL:"http://192.168.2.117:8010",d=t&&t.innerURL?t.innerURL:"http://".concat(r,":8028"),f=t&&t.financialURL?t.financialURL:"http://".concat(s,":8018"),u=t&&t.groupURL?t.groupURL:"http://".concat(s,":8018"),m=t&&t.orderURL?t.orderURL:"http://".concat(s,":8018"),g=t&&t.klineURL?t.klineURL:"http://".concat(a,":8029"),v=t&&t.cashURL?t.cashURL:"http://".concat(s,":8020"),b=t&&t.backtestqifiURL?t.backtestqifiURL:"http://".concat(r,":8019"),k=t&&t.varietiesURL?t.varietiesURL:"http://".concat(s,":8018"),y=t&&t.strategyURL?t.strategyURL:"http://192.168.2.125:8800";return{accURL:n,pnlURL:i,listURL:c,wsURL:l,selectedURL:p,indicatorURL:_,backtestURL:h,innerURL:d,financialURL:f,groupURL:u,orderURL:m,klineURL:g,cashURL:v,backtestqifiURL:b,varietiesURL:k,strategyURL:y}}e.d(a,"a",(function(){return o}))},1148:function(t,a,e){"use strict";var o=e("a691"),r=e("1d80");t.exports="".repeat||function(t){var a=String(r(this)),e="",s=o(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(a+=a))1&s&&(e+=a);return e}},"390a":function(t,a,e){"use strict";var o=e("8ada"),r=e.n(o);r.a},"408a":function(t,a,e){var o=e("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},"5e89":function(t,a,e){var o=e("861d"),r=Math.floor;t.exports=function(t){return!o(t)&&isFinite(t)&&r(t)===t}},"600d":function(t,a,e){},"8ada":function(t,a,e){},"8ba4":function(t,a,e){var o=e("23e7"),r=e("5e89");o({target:"Number",stat:!0},{isInteger:r})},9407:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("d2-container",{attrs:{type:"full"}},[e("div",{ref:"backtest",staticClass:"backtest"},[e("div",{staticClass:"card strategyGroup"},[e("p",[t._v("策略组")]),e("ul",t._l(t.strategyList,(function(a,o){return e("li",{key:o,class:t.curIndex===o?"active":"",on:{click:function(e){return t.chooseStrategy(o,a)}}},[t._v(t._s(a))])})),0)]),e("div",{staticClass:"backtestRes"},[e("div",{staticClass:"card chart"},[e("backtest-echart",{ref:"backtestEchart"})],1),e("div",{staticClass:"card combination"},[e("el-table",{ref:"combinationTab",style:{width:t.combinationTabW},attrs:{stripe:"",height:t.combinationTabH,data:t.strategyData},on:{"row-click":t.detailClick}},[e("el-table-column",{attrs:{prop:"account_cookie",label:"account","min-width":"13%"}}),e("el-table-column",{attrs:{prop:"alpha",label:"alpha",sortable:"","min-width":"10%"}}),e("el-table-column",{attrs:{prop:"beta",label:"beta",sortable:"","min-width":"10%"}}),e("el-table-column",{attrs:{prop:"sharpe",label:"sharpe",sortable:"","min-width":"10%"}}),e("el-table-column",{attrs:{prop:"annualize_return",label:"年化收益",sortable:"","min-width":"11%"}}),e("el-table-column",{attrs:{prop:"ir",label:"信息比率",sortable:"","min-width":"11%"}}),e("el-table-column",{attrs:{prop:"max_dropback",label:"最大回撤",sortable:"","min-width":"11%"}}),e("el-table-column",{attrs:{prop:"profit_money",label:"利润",sortable:"","min-width":"12%"}}),e("el-table-column",{attrs:{prop:"time_gap",label:"持续时间",sortable:"","min-width":"12%"}})],1)],1)]),e("div",{staticClass:"backtestAnalysis"},[e("div",{staticClass:"card accountInfo"},[e("p",{staticClass:"accName"},[t._v("当前账户:"+t._s(t.backtestInfo.account_cookie))]),e("p",[e("span",[t._v("年化 "+t._s(t.backtestInfo.annualize_return))]),e("span",{staticStyle:{margin:"0 20px"}},[t._v("alpha "+t._s(t.backtestInfo.alpha))]),e("span",[t._v("sharpe "+t._s(t.backtestInfo.sharpe))])])]),e("div",{staticClass:"card analTab"},[e("el-button-group",[e("el-button",{class:t.switchFlag?"switchActive":"",attrs:{type:"default"},on:{click:function(a){t.switchFlag=!0}}},[t._v("绩效分析")]),e("el-button",{class:t.switchFlag?"":"switchActive",attrs:{type:"default"},on:{click:function(a){t.switchFlag=!1}}},[t._v("买卖信号")])],1),e("table",{directives:[{name:"show",rawName:"v-show",value:t.switchFlag,expression:"switchFlag"},{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"dataframe",staticClass:"dataframe",attrs:{cellspacing:"0",cellpadding:"0"}},[e("thead",{staticClass:"portfolio-thead"},[e("tr",[e("td"),e("td",[t._v("总共")]),e("td",[t._v("买入开仓")]),e("td",[t._v("卖空开仓")])])]),e("tbody",{staticClass:"portfolio-tbody"},[e("tr",[e("td",[t._v("总收益")]),e("td",{staticClass:"profit"},[t._v(t._s(t.performanceData["total_profit"]))]),e("td",{staticClass:"profit"},[t._v(t._s(t.performanceData["buyopen"]["total_profit"]))]),e("td",{staticClass:"profit"},[t._v(t._s(t.performanceData["sellopen"]["total_profit"]))])]),e("tr",[e("td",[t._v("总亏损")]),e("td",{staticClass:"loss"},[t._v(t._s(t.performanceData["total_loss"]))]),e("td",{staticClass:"loss"},[t._v(t._s(t.performanceData["buyopen"]["total_loss"]))]),e("td",{staticClass:"loss"},[t._v(t._s(t.performanceData["sellopen"]["total_loss"]))])]),e("tr",[e("td",[t._v("总盈利/总亏损")]),e("td",[t._v(t._s(t.performanceData["total_pnl"]))]),e("td",[t._v(t._s(t.performanceData["buyopen"]["total_pnl"]))]),e("td",[t._v(t._s(t.performanceData["sellopen"]["total_pnl"]))])]),e("tr",[e("td",[t._v("交易笔数")]),e("td",[t._v(t._s(t.performanceData["trading_amounts"]))]),e("td",[t._v(t._s(t.performanceData["buyopen"]["trading_amounts"]))]),e("td",[t._v(t._s(t.performanceData["sellopen"]["trading_amounts"]))])]),e("tr",[e("td",[t._v("利润笔数")]),e("td",[t._v(t._s(t.performanceData["profit_amounts"]))]),e("td",[t._v(t._s(t.performanceData["buyopen"]["profit_amounts"]))]),e("td",[t._v(t._s(t.performanceData["sellopen"]["profit_amounts"]))])]),e("tr",[e("td",[t._v("亏损笔数")]),e("td",[t._v(t._s(t.performanceData["loss_amounts"]))]),e("td",[t._v(t._s(t.performanceData["buyopen"]["loss_amounts"]))]),e("td",[t._v(t._s(t.performanceData["sellopen"]["loss_amounts"]))])]),e("tr",[e("td",[t._v("持平笔数")]),e("td",[t._v(t._s(t.performanceData["even_amounts"]))]),e("td",[t._v(t._s(t.performanceData["buyopen"]["even_amounts"]))]),e("td",[t._v(t._s(t.performanceData["sellopen"]["even_amounts"]))])]),e("tr",[e("td",[t._v("利润单占比")]),e("td",[t._v(t._s(t.performanceData["profit_precentage"]))]),e("td",[t._v(t._s(t.performanceData["buyopen"]["profit_precentage"]))]),e("td",[t._v(t._s(t.performanceData["sellopen"]["profit_precentage"]))])]),e("tr",[e("td",[t._v("亏损单占比")]),e("td",[t._v(t._s(t.performanceData["loss_precentage"]))]),e("td",[t._v(t._s(t.performanceData["buyopen"]["loss_precentage"]))]),e("td",[t._v(t._s(t.performanceData["sellopen"]["loss_precentage"]))])]),e("tr",[e("td",[t._v("持平单占比")]),e("td",[t._v(t._s(t.performanceData["even_precentage"]))]),e("td",[t._v(t._s(t.performanceData["buyopen"]["even_precentage"]))]),e("td",[t._v(t._s(t.performanceData["sellopen"]["even_precentage"]))])]),e("tr",[e("td",[t._v("每单平均利润")]),e("td",{staticClass:"profit"},[t._v(t._s(t.performanceData["average_profit"]))]),e("td",{staticClass:"profit"},[t._v(t._s(t.performanceData["buyopen"]["average_profit"]))]),e("td",{staticClass:"profit"},[t._v(t._s(t.performanceData["sellopen"]["average_profit"]))])]),e("tr",[e("td",[t._v("每单平均亏损")]),e("td",{staticClass:"loss"},[t._v(t._s(t.performanceData["average_loss"]))]),e("td",{staticClass:"loss"},[t._v(t._s(t.performanceData["buyopen"]["average_loss"]))]),e("td",{staticClass:"loss"},[t._v(t._s(t.performanceData["sellopen"]["average_loss"]))])]),e("tr",[e("td",[t._v("均利润/均亏损")]),e("td",[t._v(t._s(t.performanceData["average_pnl"]))]),e("td",[t._v(t._s(t.performanceData["buyopen"]["average_pnl"]))]),e("td",[t._v(t._s(t.performanceData["sellopen"]["average_pnl"]))])]),e("tr",[e("td",[t._v("单笔最大利润")]),e("td",{staticClass:"profit"},[t._v(t._s(t.performanceData["max_profit"]))]),e("td",{staticClass:"profit"},[t._v(t._s(t.performanceData["buyopen"]["max_profit"]))]),e("td",{staticClass:"profit"},[t._v(t._s(t.performanceData["sellopen"]["max_profit"]))])]),e("tr",[e("td",[t._v("单笔最大亏损")]),e("td",{staticClass:"loss"},[t._v(t._s(t.performanceData["max_loss"]))]),e("td",{staticClass:"loss"},[t._v(t._s(t.performanceData["buyopen"]["max_loss"]))]),e("td",{staticClass:"loss"},[t._v(t._s(t.performanceData["sellopen"]["max_loss"]))])]),e("tr",[e("td",[t._v("单笔最大利润/亏损")]),e("td",[t._v(t._s(t.performanceData["max_pnl"]))]),e("td",[t._v(t._s(t.performanceData["buyopen"]["max_pnl"]))]),e("td",[t._v(t._s(t.performanceData["sellopen"]["max_pnl"]))])]),e("tr",[e("td",[t._v("净利润/总亏损")]),e("td",{staticClass:"profit",class:{loss:t.performanceData["netprofio_maxloss_ratio"]<0}},[t._v(t._s(t.performanceData["netprofio_maxloss_ratio"]))]),e("td",{staticClass:"profit",class:{loss:t.performanceData["buyopen"]["netprofio_maxloss_ratio"]<0}},[t._v(t._s(t.performanceData["buyopen"]["netprofio_maxloss_ratio"]))]),e("td",{staticClass:"profit",class:{loss:t.performanceData["sellopen"]["netprofio_maxloss_ratio"]<0}},[t._v(t._s(t.performanceData["sellopen"]["netprofio_maxloss_ratio"]))])]),e("tr",[e("td",[t._v("连续利润单数")]),e("td",[t._v(t._s(t.performanceData["continue_profit_amount"]))]),e("td",[t._v(t._s(t.performanceData["buyopen"]["continue_profit_amount"]))]),e("td",[t._v(t._s(t.performanceData["sellopen"]["continue_profit_amount"]))])]),e("tr",[e("td",[t._v("连续亏损单数")]),e("td",[t._v(t._s(t.performanceData["continue_loss_amount"]))]),e("td",[t._v(t._s(t.performanceData["buyopen"]["continue_loss_amount"]))]),e("td",[t._v(t._s(t.performanceData["sellopen"]["continue_loss_amount"]))])]),e("tr",[e("td",[t._v("平均持仓时间")]),e("td",[t._v(t._s(t.performanceData["average_holdgap"]))]),e("td",[t._v(t._s(t.performanceData["buyopen"]["average_holdgap"]))]),e("td",[t._v(t._s(t.performanceData["sellopen"]["average_holdgap"]))])]),e("tr",[e("td",[t._v("利润单平均持仓时间")]),e("td",[t._v(t._s(t.performanceData["average_profitholdgap"]))]),e("td",[t._v(t._s(t.performanceData["buyopen"]["average_profitholdgap"]))]),e("td",[t._v(t._s(t.performanceData["sellopen"]["average_profitholdgap"]))])]),e("tr",[e("td",[t._v("亏损单平均持仓时间")]),e("td",[t._v(t._s(t.performanceData["average_losssholdgap"]))]),e("td",[t._v(t._s(t.performanceData["buyopen"]["average_losssholdgap"]))]),e("td",[t._v(t._s(t.performanceData["sellopen"]["average_losssholdgap"]))])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.switchFlag,expression:"!switchFlag"}],staticClass:"signal"},[e("div",{staticClass:"serachBox"},[e("el-input",{attrs:{placeholder:"请输入code"},on:{input:t.serach},model:{value:t.serachCode,callback:function(a){t.serachCode="string"===typeof a?a.trim():a},expression:"serachCode"}})],1),e("table",{staticClass:"signalTabHeader"},[e("tr",[e("td",[t._v("datetime")]),e("td",[t._v("code")]),e("td",[t._v("price")]),e("td",[t._v("amount")])])]),e("table",{staticClass:"signalTabBody"},[e("vue-scroll",{style:{height:t.scrollHeight},attrs:{ops:t.ops}},t._l(t.serachSignalData,(function(a,o){return e("tr",{key:o,on:{click:function(e){return t.detailRowClick(a)}}},[e("td",[t._v(t._s(a[0]))]),e("td",[t._v(t._s(a[1]))]),e("td",[t._v(t._s(t._f("toFixed")(a[2])))]),e("td",[t._v(t._s(a[3]))])])})),0),0!==t.serachSignalData.length?e("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}):t._e()],1)])],1)])])])},r=[],s=(e("4de4"),e("caad"),e("fb6a"),e("a9e3"),e("8ba4"),e("b680"),e("d3b7"),e("25f0"),e("2532"),e("5319"),e("841c"),e("d515")),n=e("0084"),i=e("c276"),c={inject:["reload"],name:"demo-backtest-index",data:function(){return{total:0,pageSize:50,currentPage:1,backtestURL:"",loading:!1,params:{},cookie:"",userInfo:"",monthbarchart:null,chart:null,curIndex:0,combinationTabW:"",switchFlag:!0,chartFlag:!0,chartSize:{},combinationTabH:250,scrollHeight:"500px",serachCode:"",strategyList:[],strategyData:[],backtestInfo:{},token:"",performanceData:{netprofio_maxloss_ratio:"",continue_profit_amount:"",continue_loss_amount:"",average_holdgap:"",average_profitholdgap:"",average_losssholdgap:"",total_profit:"",total_loss:"",total_pnl:"",trading_amounts:"",profit_amounts:"",loss_amounts:"",even_amounts:"",profit_precentage:"",loss_precentage:"",even_precentage:"",average_profit:"",average_loss:"",average_pnl:"",max_profit:"",max_loss:"",max_pnl:"",buyopen:{netprofio_maxloss_ratio:"",continue_profit_amount:"",continue_loss_amount:"",average_holdgap:"",average_profitholdgap:"",average_losssholdgap:"",total_profit:"",total_loss:"",total_pnl:"",trading_amounts:"",profit_amounts:"",loss_amounts:"",even_amounts:"",profit_precentage:"",loss_precentage:"",even_precentage:"",average_profit:"",average_loss:"",average_pnl:"",max_profit:"",max_loss:"",max_pnl:""},sellopen:{netprofio_maxloss_ratio:"",continue_profit_amount:"",continue_loss_amount:"",average_holdgap:"",average_profitholdgap:"",average_losssholdgap:"",total_profit:"",total_loss:"",total_pnl:"",trading_amounts:"",profit_amounts:"",loss_amounts:"",even_amounts:"",profit_precentage:"",loss_precentage:"",even_precentage:"",average_profit:"",average_loss:"",average_pnl:"",max_profit:"",max_loss:"",max_pnl:""}},initPerformanceData:{},tableData:[{account:"喵喵1号",alpha:.33,beta:.26,sharpe:3.88,annualized:.36,ratio:4.5,retracement:.03,profit:.66,time:456},{account:"喵喵1号",alpha:.33,beta:.26,sharpe:3.88,annualized:.36,ratio:4.5,retracement:.03,profit:.66,time:456},{account:"喵喵1号",alpha:.33,beta:.26,sharpe:3.88,annualized:.36,ratio:4.5,retracement:.03,profit:.66,time:456},{account:"喵喵1号",alpha:.33,beta:.26,sharpe:3.88,annualized:.36,ratio:4.5,retracement:.03,profit:.66,time:456},{account:"喵喵1号",alpha:.33,beta:.26,sharpe:3.88,annualized:.36,ratio:4.5,retracement:.03,profit:.66,time:456},{account:"喵喵1号",alpha:.33,beta:.26,sharpe:3.88,annualized:.36,ratio:4.5,retracement:.03,profit:.66,time:456},{account:"喵喵1号",alpha:.33,beta:.26,sharpe:3.88,annualized:.36,ratio:4.5,retracement:.03,profit:.66,time:456}],serachAllSignalData:[],serachSignalData:[],signalData:[],ops:{vuescroll:{mode:"native"},scrollPanel:{},rail:{background:"#01a99a",opacity:0,size:"10px",specifyBorderRadius:!1,gutterOfEnds:null,gutterOfSide:"0px",keepShow:!0,border:"none"},bar:{keepShow:!0,hoverStyle:!0,onlyShowBarOnScroll:!0,background:"#ccc"}}}},components:{backtestEchart:s["default"]},mounted:function(){this.backtestURL=Object(n["a"])().backtestURL,this.token=i["a"].cookies.get("token"),this.userInfo=JSON.parse(i["a"].cookies.get("userInfo")),this.getStrategyGroupList(),this.monitor()},filters:{toFixed:function(t){return Number.isInteger(t)?t:t.toFixed(2)}},methods:{monitor:function(){var t=this;this.$erd.listenTo(this.$refs.backtest,(function(a){var e=a.offsetWidth-800,o=a.offsetHeight*(7/11)-20;t.$refs.backtestEchart.size={width:e+"px",height:o/2+"px"};var r=a.offsetHeight*(4/11)-5;t.combinationTabH=r,t.combinationTabW=e+"px";var s=a.offsetHeight-155;t.$refs.dataframe.style.height=s+"px",t.scrollHeight=s-135+"px",t.$refs.backtestEchart.chart1&&(t.$refs.backtestEchart.chart1.resize(),t.$refs.backtestEchart.chart2.resize())}))},serach:function(){var t=this;this.serachAllSignalData=this.singalData.filter((function(a){return a[1].includes(t.serachCode)})),this.total=this.serachAllSignalData.length,this.serachSignalData=this.serachAllSignalData.slice(this.pageSize*(this.currentPage-1),this.pageSize*this.currentPage)},chooseStrategy:function(t,a){this.curIndex=t,this.getStrategyData(a)},getStrategyGroupList:function(){var t=this;this.$http.get(this.backtestURL+"/user",{params:{username:this.userInfo.username,password:this.userInfo.password,model:"password"}}).then((function(a){var e=a.result;t.strategyList=e.portfolio_list}))},getStrategyData:function(t){var a=this;this.$http.get(this.backtestURL+"/risk",{params:{user_cookie:this.token,portfolio_cookie:t}}).then((function(t){var e=Object.prototype.toString.call(t);"[object String]"===e&&(t=t.replace(/NaN/gi,0),t=t.replace(/Infinity/gi,0));var o=JSON.parse(JSON.stringify(t));a.strategyData=o.result}))},detailClick:function(t){this.backtestInfo=t,this.cookie={account_cookie:t.account_cookie,portfolio_cookie:t.portfolio_cookie},this.getPerformanceData(t.account_cookie,t.portfolio_cookie),this.getTransaction(t.account_cookie,t.portfolio_cookie),this.getChartData(t.account_cookie,t.portfolio_cookie)},getPerformanceData:function(t,a){var e=this;this.loading=!0,this.$http.get(this.backtestURL+"/account",{params:{action:"query_performance",account_cookie:t,user_cookie:this.token,portfolio_cookie:a}}).then((function(t){var a=t.result;e.performanceData=a,e.loading=!1}))},getTransaction:function(t,a){var e=this;this.$http.get(this.backtestURL+"/account",{params:{account_cookie:t,portfolio_cookie:a,user_cookie:this.token}}).then((function(t){e.params.frequence=t.frequence,e.params.market=t.market,e.singalData=t.result,e.serachAllSignalData=t.result,e.serachSignalData=e.serachAllSignalData.slice(0,e.pageSize),e.total=e.serachAllSignalData.length,sessionStorage.setItem("tradeData",JSON.stringify(t.result))}))},getChartData:function(t,a){var e=this;this.$http.get(this.backtestURL+"/risk",{params:{account_cookie:t,user_cookie:this.token,portfolio_cookie:a}}).then((function(t){var a=t.result,o=a[0],r=o["benchmark_assets"],s=o["assets"],n=o["totaltimeindex"];e.$refs.backtestEchart.chartOptions1.series[1].data=r,e.$refs.backtestEchart.chartOptions1.series[0].data=s,e.$refs.backtestEchart.chartOptions1.xAxis.data=n;var i=o["month_profit"],c=[],l=[];for(var p in i)c.push(p),l.push(i[p]);e.$refs.backtestEchart.chartOptions2.series[0].data=l,e.$refs.backtestEchart.chartOptions2.xAxis[0].data=c,e.$refs.backtestEchart.initChart()}))},renderChart:function(){this.$refs.chart.URL="https://www.fastmock.site/mock/61f0489100bd66f32c048b3694e432f9/klinePage/page",this.$refs.chart.isRequest=!0,this.$refs.chart.recreate()},detailRowClick:function(t){var a=this.$router.resolve({name:"backtestChart"});window.open(a.href+"?account_cookie="+this.cookie.account_cookie+"&portfolio_cookie="+this.cookie.portfolio_cookie+"&market="+this.params.market+"&frequence="+this.params.frequence,"_blank")},fixNaN:function(t){return t!==t?0:t},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){this.currentPage=t,""===this.search?this.serachSignalData=this.singalData.slice(this.pageSize*(this.currentPage-1),this.pageSize*this.currentPage):this.serachSignalData=this.serachAllSignalData.slice(this.pageSize*(this.currentPage-1),this.pageSize*this.currentPage)}}},l=c,p=(e("f146"),e("9ef0"),e("2877")),_=Object(p["a"])(l,o,r,!1,null,"3dce9e3c",null);a["default"]=_.exports},9513:function(t,a,e){},"9ef0":function(t,a,e){"use strict";var o=e("600d"),r=e.n(o);r.a},b680:function(t,a,e){"use strict";var o=e("23e7"),r=e("a691"),s=e("408a"),n=e("1148"),i=e("d039"),c=1..toFixed,l=Math.floor,p=function(t,a,e){return 0===a?e:a%2===1?p(t,a-1,e*t):p(t*t,a/2,e)},_=function(t){var a=0,e=t;while(e>=4096)a+=12,e/=4096;while(e>=2)a+=1,e/=2;return a},h=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i((function(){c.call({})}));o({target:"Number",proto:!0,forced:h},{toFixed:function(t){var a,e,o,i,c=s(this),h=r(t),d=[0,0,0,0,0,0],f="",u="0",m=function(t,a){var e=-1,o=a;while(++e<6)o+=t*d[e],d[e]=o%1e7,o=l(o/1e7)},g=function(t){var a=6,e=0;while(--a>=0)e+=d[a],d[a]=l(e/t),e=e%t*1e7},v=function(){var t=6,a="";while(--t>=0)if(""!==a||0===t||0!==d[t]){var e=String(d[t]);a=""===a?e:a+n.call("0",7-e.length)+e}return a};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(f="-",c=-c),c>1e-21)if(a=_(c*p(2,69,1))-69,e=a<0?c*p(2,-a,1):c/p(2,a,1),e*=4503599627370496,a=52-a,a>0){m(0,e),o=h;while(o>=7)m(1e7,0),o-=7;m(p(10,o,1),0),o=a-1;while(o>=23)g(1<<23),o-=23;g(1<<o),m(1,1),g(2),u=v()}else m(0,e),m(1<<-a,0),u=v()+n.call("0",h);return h>0?(i=u.length,u=f+(i<=h?"0."+n.call("0",h-i)+u:u.slice(0,i-h)+"."+u.slice(i-h))):u=f+u,u}})},d515:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chart"},[e("div",{style:{width:t.size.width,height:t.size.height},attrs:{id:"chart1"}}),e("div",{style:{width:t.size.width,height:t.size.height},attrs:{id:"chart2"}})])},r=[],s={data:function(){return{size:{width:"600px",height:"300px"},chart1:null,chart2:null,chartOptions1:{title:{textStyle:{color:"#999"}},grid:{left:0,top:25,right:10,bottom:20},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none",iconStyle:{shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10,borderType:"dotted"}},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},xAxis:{data:[],zlevel:1,gridIndex:0,axisLabel:{align:"left"}},yAxis:[{},{type:"value",axisLabel:{inside:!0,verticalAlign:"bottom"},axisTick:{inside:!0},name:"account",max:"dataMax",min:"dataMin",axisLine:{lineStyle:{color:"#999"}},splitLine:{show:!0,lineStyle:{color:["rgba(80,80,80, 0.7)"],type:"dashed"}}}],legend:{data:[{name:"assets"},{name:"benchmark"}],x:"left",top:"5%",textStyle:{color:"#999"}},dataZoom:[{type:"slider",show:!1,fillerColor:"#999",realtime:!0,start:0,end:100,backgroundColor:"#303030",showDataShadow:!1}],series:[{name:"assets",type:"line",data:[],lineStyle:{normal:{color:"#c23531"}},areaStyle:{normal:{color:"#c23531",opacity:.3}},yAxisIndex:1},{name:"benchmark",type:"line",data:[],lineStyle:{normal:{color:"#2f4554"}},areaStyle:{normal:{color:"#2f4554",opacity:.3}},yAxisIndex:1}]},chartOptions2:{title:{},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:20,left:0,right:10,bottom:0},xAxis:[{type:"category",data:[]}],yAxis:[{type:"value",axisLabel:{inside:!0,verticalAlign:"bottom"},axisTick:{inside:!0},position:"right",axisLine:{lineStyle:{color:"#999"}},splitLine:{show:!0,lineStyle:{color:["rgba(80,80,80, 0.7)"],type:"dashed"}}}],series:[{name:"monthporfit",type:"bar",data:[],itemStyle:{normal:{color:function(t){return t.value<0?"#51b9b8":"#c23531"},opacity:.6}}}]}}},watch:{size:{handler:function(t){(this.chart1||this.chart2)&&(this.chart1.resize({width:t.width,height:t.height}),this.chart2.resize({width:t.width,height:t.height}))},deep:!0}},methods:{initChart:function(){this.chart1=this.$echarts.init(document.getElementById("chart1")),this.chart1.setOption(this.chartOptions1),this.chart2=this.$echarts.init(document.getElementById("chart2")),this.chart2.setOption(this.chartOptions2)}}},n=s,i=(e("390a"),e("2877")),c=Object(i["a"])(n,o,r,!1,null,null,null);a["default"]=c.exports},f146:function(t,a,e){"use strict";var o=e("9513"),r=e.n(o);r.a}}]);