import{_ as k,r as C,k as b,b as u,c,d as l,e as p,F as g,f as y}from"./index.7645804b.js";import{a as I,r as T}from"./fn.67c79b6f.js";const x={class:"absolute_margin_center_center"},h={class:"carousel"},B={class:"btns"},F={__name:"Carousel",setup($){const a=C([]),t=b(0),o=b(.3);let r=!1,i=null,v=null,_=null;for(let e=0;e<4;e++)a.push({id:I(),bg:T()});a.push(a[0]);const d=e=>{r||(r=!0,clearInterval(v),clearTimeout(i),m(e),i=setTimeout(()=>{f()},500))},m=(e=20,s=.3)=>{t.value+=e,o.value=s,clearTimeout(_),_=setTimeout(()=>{t.value>=80&&e===20?(t.value=0,o.value=0):t.value<=0&&e===-20&&(t.value=80,o.value=0),r=!1},300)},f=()=>{v=setInterval(()=>{m(20)},1e3)};return f(),(e,s)=>(u(),c("div",x,[l("div",h,[l("div",{class:"carousel-content",style:p({translate:-t.value+"%",transition:o.value+"s"})},[(u(!0),c(g,null,y(a,n=>(u(),c("div",{class:"carousel-item",key:n.id,style:p({backgroundColor:n.bg})},null,4))),128))],4),l("div",B,[l("button",{class:"btn left",onClick:s[0]||(s[0]=n=>d(-20))},"\u5DE6\u79FB"),l("button",{class:"btn right",onClick:s[1]||(s[1]=n=>d(20))},"\u53F3\u79FB")])])]))}},L=k(F,[["__scopeId","data-v-449f59ba"]]);export{L as default};
