(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(5268)}])},5268:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return x}});var d=c(5893),e=c(9008),f=c.n(e),g=c(4924),h=c(6042),i=c(9396),j=c(797),k=c(7294),l=c(894),m=c(3748),n=c(8500),o=c(1889),p=c(2993),q=c(8484),r=c(7632),s=c(5408),t=function(a){var b=a.heading,c=[];(c=localStorage.getItem("tbd_raw_data"))&&(c=JSON.parse(c));var e=(0,k.useState)(c||[]),f=e[0],t=e[1],u=null==f?void 0:f.reduce(function(a,b){var c={key:(0,r.Z)(),destination:b.result["All_Traffic.dest"],source:b.result["All_Traffic.dest"],sumbytes:b.result.sum_bytes};return a.push(c),a},[]),v=(0,k.useState)([]),w=v[0],x=v[1],y=(0,k.useState)([]),z=y[0],A=y[1],B=(0,k.useState)([]),C=B[0],D=B[1],E=(0,k.useState)([]),F=E[0],G=E[1],H=(0,k.useState)([]),I=H[0],J=H[1],K=(0,k.useState)([]),L=K[0],M=K[1],N=(0,k.useContext)(s.Z),O=N[0],P=N[1],Q=function(a){var b={destination:a.destination||[],source:a.source||[],sumbytes:a.sumbytes||[]};J(b.destination),G(b.source),M(b.sumbytes),P(b)},R=function(a,b){var c=(0,j.Z)(O[a]),d=c.indexOf(b[a]);d> -1?c.splice(d,1):c.push(b[a]);var e=(0,i.Z)((0,h.Z)({},O),(0,g.Z)({},a,c));P(e)};(0,k.useEffect)(function(){var a,b,c,d=null==O?void 0:null===(a=O.source)|| void 0===a?void 0:a.map(function(a){return{value:a,text:a}}),e=null==O?void 0:null===(b=O.destination)|| void 0===b?void 0:b.map(function(a){return{value:a,text:a}}),f=null==O?void 0:null===(c=O.sumbytes)|| void 0===c?void 0:c.map(function(a){return{value:a,text:a}});x(d),A(e),D(f)},[O]),(0,k.useEffect)(function(){var a=null==w?void 0:w.map(function(a){return a.value}),b=null==z?void 0:z.map(function(a){return a.value}),c=null==C?void 0:C.map(function(a){return a.value});G(a),J(b),M(c)},[w,z,C]);var S=function(){x([]),A([]),D([]),G([]),J([]),M([]),P({source:[],destination:[],sumbytes:[]})};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.Z.Title,{level:3,children:void 0===b?"\uD83D\uDEA6 Traffic Bytes Dive \uD83E\uDD3F":b}),(0,d.jsxs)(m.Z,{direction:"horizontal",align:"start",size:"large",style:{margin:8},children:[(0,d.jsx)(n.Z,(0,i.Z)((0,h.Z)({},{name:"file",accept:".json",onChange:function(a){if("uploading"!==a.file.status){console.log(a.file,a.fileList);var b=new FileReader;b.onload=function(a){console.log(a.target.result),t(JSON.parse(a.target.result)),localStorage.setItem("tbd_raw_data",a.target.result)},b.readAsText(a.file.originFileObj)}"done"===a.file.status?console.log("".concat(a.file.name," file uploaded successfully")):"error"===a.file.status&&console.error("".concat(a.file.name," file upload failed."))}}),{children:(0,d.jsx)(o.Z,{icon:(0,d.jsx)(q.Z,{}),size:"small",children:"Upload raw data (JSON)"})})),(0,d.jsx)(o.Z,{size:"small",onClick:S,children:"Clear all filters"})]}),(0,d.jsx)(p.Z,{style:{width:520,margin:12},columns:[{title:"Source",dataIndex:"source",filters:w,filteredValue:F,filterSearch:!0,onFilter:function(a,b){return b.source.startsWith(a)},width:"45%",render:function(a,b){return(0,d.jsx)("a",{onClick:function(){R("source",b)},children:a})}},{title:"Destination",dataIndex:"destination",filters:z,filteredValue:I,filterSearch:!0,onFilter:function(a,b){return b.destination.startsWith(a)},render:function(a,b){return(0,d.jsx)("a",{onClick:function(){R("destination",b)},children:a})}},{title:"Sum Bytes",dataIndex:"sumbytes",filters:C,filteredValue:L,filterSearch:!0,onFilter:function(a,b){return b.sumbytes.startsWith(a)},render:function(a,b){return(0,d.jsx)("a",{onClick:function(){R("sumbytes",b)},children:a})}},],dataSource:u,onChange:Q})]})},u=t,v=c(214),w=c.n(v);function x(){return(0,d.jsxs)("div",{className:w().container,children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"Traffic Bytes Dive"}),(0,d.jsx)("meta",{name:"description",content:"Dive and navigate through IP address traffic and its sum bytes"})]}),(0,d.jsx)("main",{className:w().main,children:(0,d.jsx)(u,{})})]})}},214:function(a){a.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}}},function(a){a.O(0,[683,774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])