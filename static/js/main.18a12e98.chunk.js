(this.webpackJsonpcovid_kanvas=this.webpackJsonpcovid_kanvas||[]).push([[0],{180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(57),c=a.n(i),l=(a(64),a(1)),s=a(2),o=a(4),d=a(3),m=a(7),u=a.n(m),f=(a(81),function(e){return r.a.createElement("div",{className:"sk-chase"},r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}))}),h=(a(41),a(82),a(83),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={state_data:[],district_data:[{district_name:[]},{district_cases:[]}]},e.capitalizeFirstLetter=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},e.searchDeleteHandler=function(){e.setState({district_data:[{district_name:[]},{district_cases:[]}],district:""})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this;e.searched!==this.props.searched&&u.a.get("https://api.covid19india.org/state_district_wise.json").then((function(e){t.setState({state_data:e.data});var a=[],n=[];for(var r in t.state.state_data)if(r===t.capitalizeFirstLetter(t.props.searched))for(var i in t.state.state_data[r].districtData)a.push(i),n.push(t.state.state_data[r].districtData[i].confirmed);t.setState({district_data:[{district_name:a},{district_cases:n}]})}))}},{key:"render",value:function(){var e=this,t=null,a=null;return this.state.district_data[1].district_cases.length&&(a=this.state.district_data[0].district_name.map((function(t,a){return e.state.district_data[1].district_cases.map((function(e,n){var i=null;return a===n&&(i=r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement("strong",null,t)),r.a.createElement("td",null,e))),i}))})),t=r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("table",{style:{padding:"0px"}},r.a.createElement("thead",null,r.a.createElement("button",{onClick:this.searchDeleteHandler,style:{marginLeft:"200%"}},r.a.createElement("i",{className:"fa fa-times fa-lg","aria-hidden":"true",style:{color:"#726B6B"}})),r.a.createElement("tr",null,r.a.createElement("th",{style:{fontSize:"20px"}},"District"),r.a.createElement("th",{style:{fontSize:"20px"}},"No. Of Cases"))),r.a.createElement("tbody",null,a))))),r.a.createElement("div",null,r.a.createElement("div",{style:{paddingLeft:"30%"}},t))}}]),a}(r.a.Component)),p=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={district:"",input:"Search For Your State"},e.changeHandler=function(t){t.preventDefault(),e.setState({input:t.target.value})},e.submitHandler=function(t){t.preventDefault(),e.setState({district:e.state.input})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"SearchBar",placeholder:"Search For Your State",onChange:this.changeHandler}),r.a.createElement("button",{className:"placeholder",onClick:this.submitHandler},r.a.createElement("i",{className:"fa fa-search fa-2x"}))),r.a.createElement(h,{searched:this.state.district}))}}]),a}(r.a.Component),v=(a(84),function(e){return e.data.map((function(e){return r.a.createElement("div",{key:e.statecode},r.a.createElement("strong",null,"Last Updated On:",e.lastupdatedtime," ")," ")}))}),E=(a(85),a(11)),g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={Data:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.covid19india.org/data.json").then((function(t){var a=[],n=[];t.data.cases_time_series.forEach((function(e){a.push(e.date),n.push(e.totalconfirmed)})),e.setState({Data:{labels:a,datasets:[{data:n,fill:!1,lineTension:.5,backgroundColor:"sky",borderColor:"red",borderWidth:2}]}})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{width:100,height:300,data:this.state.Data,options:{scales:{xAxes:[{display:!1}]},maintainAspectRatio:!1,title:{text:"Total Cases",fontSize:25,fontColor:"black",display:!0},legend:{display:!1,position:"right"}}}))}}]),a}(r.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={Data:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.covid19india.org/data.json").then((function(t){var a=[],n=[];t.data.cases_time_series.forEach((function(e){a.push(e.date),n.push(e.totaldeceased)})),e.setState({Data:{labels:a,datasets:[{data:n,fill:!1,lineTension:.5,backgroundColor:"sky",borderColor:"grey",borderWidth:2}]}})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{width:100,height:300,data:this.state.Data,options:{scales:{xAxes:[{display:!1}]},maintainAspectRatio:!1,title:{text:"Deceased Cases",fontColor:"black",fontSize:25,display:!0},legend:{display:!1,position:"right"}}}))}}]),a}(r.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={Data:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.covid19india.org/data.json").then((function(t){var a=[],n=[];t.data.cases_time_series.forEach((function(e){a.push(e.date),n.push(e.totalrecovered)})),e.setState({Data:{labels:a,datasets:[{data:n,fill:!1,lineTension:.5,backgroundColor:"sky",borderColor:"green",borderWidth:2}]}})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{width:700,height:300,data:this.state.Data,options:{scales:{xAxes:[{display:!1}]},maintainAspectRatio:!1,title:{text:"Recovered Cases",fontColor:"black",fontSize:25,display:!0},legend:{display:!1,position:"right"}}}))}}]),a}(r.a.Component),k=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Graphs"},r.a.createElement("div",{style:{paddingTop:"5%"}},r.a.createElement(g,null)),r.a.createElement("div",{style:{paddingTop:"5%"}},r.a.createElement(b,null)),r.a.createElement("div",{style:{paddingTop:"5%"}},r.a.createElement(y,null)))}}]),a}(r.a.Component),j=(a(180),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={state_data:[],total_data:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.covid19india.org/data.json").then((function(t){e.setState({state_data:t.data.statewise.slice(1,38)}),e.setState({total_data:t.data.statewise.slice(0,1)}),console.log(e.state.state_data),console.log(e.state.total_data[0])}))}},{key:"render",value:function(){var e=this.state.state_data.map((function(e){return r.a.createElement("tr",{key:e.statecode},r.a.createElement("td",{className:"States"},e.state),r.a.createElement("td",{className:"Confirmed"},e.confirmed),r.a.createElement("td",{className:"Active"},e.active),r.a.createElement("td",{className:"Recovered"},e.recovered),r.a.createElement("td",{className:"Deaths"},e.deaths))})),t=this.state.total_data.map((function(e){return r.a.createElement("tr",{key:e.statecode},r.a.createElement("td",{className:"States"},e.state),r.a.createElement("td",{className:"Confirmed"},e.confirmed),r.a.createElement("td",{className:"Active"},e.active),r.a.createElement("td",{className:"Recovered"},e.recovered),r.a.createElement("td",{className:"Deaths"},e.deaths," "))}));return r.a.createElement("table",null,r.a.createElement("thead",{style:{borderBottom:"1px solid black"}},r.a.createElement("tr",{style:{fontSize:"18px"}},r.a.createElement("th",null,"STATE/UT"),r.a.createElement("th",null,"CONFIRMED"),r.a.createElement("th",null,"ACTIVE"),r.a.createElement("th",null,"RECOVERED"),r.a.createElement("th",null,"DECEASED"))),r.a.createElement("tbody",null,e),r.a.createElement("tbody",null,t))}}]),a}(r.a.Component)),O=(a(181),function(e){var t=e.data.map((function(e){return r.a.createElement("div",{className:"Head",key:e.statecode},r.a.createElement("section",{className:"ConfirmedData"},r.a.createElement("h1",{style:{textAlign:"left",fontSize:"100%",marginLeft:"10%",marginBottom:"4%"}},"Confirmed"),r.a.createElement("div",{style:{fontSize:"175%",textAlign:"left",marginLeft:"10%",marginBottom:"4%"}},e.confirmed)),r.a.createElement("section",{className:"ActiveData"},r.a.createElement("h1",{style:{textAlign:"left",fontSize:"100%",marginLeft:"10%",marginBottom:"4%"}},"Active"),r.a.createElement("div",{style:{fontSize:"175%",textAlign:"left",marginLeft:"10%",marginBottom:"4%"}},e.active)),r.a.createElement("section",{className:"RecoveredData"},r.a.createElement("h1",{style:{textAlign:"left",fontSize:"100%",marginLeft:"10%",marginBottom:"4%"}},"Recovered"),r.a.createElement("div",{style:{fontSize:"175%",textAlign:"left",marginLeft:"10%",marginBottom:"4%"}},e.recovered)),r.a.createElement("section",{className:"DeathsData"},r.a.createElement("h1",{style:{textAlign:"left",fontSize:"100%",marginLeft:"10%",marginBottom:"4%"}},"Deaths"),r.a.createElement("div",{style:{fontSize:"175%",textAlign:"left",marginLeft:"10%",marginBottom:"4%"}},e.deaths)))}));return r.a.createElement("div",{className:"Header"},t)}),S=(a(182),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={posts:[],Total:[],labels:[],loading:!0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.covid19india.org/data.json").then((function(t){e.setState({posts:t.data.statewise.slice(1,38)}),e.setState({Total:t.data.statewise.slice(0,1)}),e.setState({timeStamp:t.data.statewise.slice(0,1).lastupdatedtime}),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=r.a.createElement("div",{style:{marginLeft:"49%",marginTop:"20%"}},r.a.createElement(f,null));return this.state.loading?r.a.createElement("div",null,e):r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement(v,{data:this.state.Total}),r.a.createElement(O,{data:this.state.Total})),r.a.createElement("div",{className:"Content"},r.a.createElement(j,null),r.a.createElement("div",{style:{marginTop:"200px"}}," ",r.a.createElement(p,null)," ",r.a.createElement(k,{style:{margin:"30px"}}))))}}]),a}(r.a.Component)),_=(a(183),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(h,null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){e.exports=a(184)},64:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.18a12e98.chunk.js.map