import{_ as g,r as w,o as _,a as k,b as r,c as m,d as a,t as d,w as v,v as b,n as u,e as h,F as y,f,p as S,g as x}from"./index.7645804b.js";function C(t,n="baidu"){let e=document.createElement("script");switch(n){case"bing":e.src=`  http://api.bing.com/qsonhs.aspx?type=cb&q=${t}&cb=bing&t=${Date.now()}`;break;case"baidu":e.src=`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd=${t}&cb=dosomething`;break}document.body.appendChild(e),document.body.removeChild(e)}window.dosomething=function(t){let n=document.getElementsByClassName("searchList")[0];if(document.getElementsByClassName("searchList-item").length===0)t.s.map(e=>{let s=document.createElement("li");s.className="searchList-item",s.innerText=e,s.onclick=()=>{window.open(`https://www.baidu.com/s?wd=${e}`)},n.appendChild(s)});else if(t.s.length===0){let e=document.getElementsByClassName("searchList-item");for(let s=1;s<e.length;s++)e[s].style.display="none";e[0].innerText="\u641C\u7D22\u65E0\u54CD\u5E94"}else{let e=document.getElementsByClassName("searchList-item");t.s.map((s,l)=>{try{e[l].innerHTML=s,e[l].style.display="block",e[l].onclick=()=>{window.open(`https://www.baidu.com/s?wd=${s}`)}}catch{}})}};const B=t=>(S("data-v-d2a55d33"),t=t(),x(),t),L={class:"home height_width_full"},$={class:"content"},D=B(()=>a("div",{class:"mark-bg height_width_full"},null,-1)),E={class:"bookmark-content"},I=["onClick"],N=["src"],F={__name:"home",setup(t){let n=new Date;const e=w({hours:n.getHours(),minutes:n.getMinutes(),seconds:n.getSeconds(),markData:[],value:"",isShow:!0,inpWidth:230}),s=setInterval(()=>{n=new Date,e.seconds=n.getSeconds(),e.seconds===0&&(e.minutes=n.getMinutes(),e.minutes===0&&(e.hours=n.getHours()))},1e3),l=()=>{C(e.value)};_(()=>{clearInterval(s)}),k(()=>{fetch("api/bookmark").then(c=>{c.json().then(o=>{e.markData=o})})});const p=c=>{open(c)};return(c,o)=>(r(),m("div",L,[a("div",$,[a("div",{class:"home-date text_shadow",onClick:o[0]||(o[0]=i=>e.isShow=!e.isShow)},d(e.hours)+":"+d(e.minutes<10?"0"+e.minutes:e.minutes)+":"+d(e.seconds<10?"0"+e.seconds:e.seconds),1),v(a("input",{type:"text",class:u(["home-int ground_glass",{"no-int":!e.isShow}]),style:h({width:e.inpWidth+"px","transition-delay":e.isShow?".3s":""}),"onUpdate:modelValue":o[1]||(o[1]=i=>e.value=i),onInput:l,onFocus:o[2]||(o[2]=i=>e.inpWidth=450),onBlur:o[3]||(o[3]=i=>e.inpWidth=230)},null,38),[[b,e.value]]),a("ul",{class:u(["searchList ground_glass",{"no-int":!e.isShow}]),style:h({height:e.value.length===0?"0px":"294px","transition-delay":e.isShow?".3s":""})},null,6),a("div",{class:u(["bookmark",{"no-bookmark":e.isShow}]),style:h({"transition-delay":e.isShow?"":".3s"})},[D,a("div",E,[(r(!0),m(y,null,f(e.markData,i=>(r(),m("div",{class:"bookmark-item",key:i.id,onClick:M=>p(i.url)},[a("img",{src:i.image,class:"bookmark-item-image"},null,8,N),a("p",null,d(i.title),1)],8,I))),128))])],6)])]))}},W=g(F,[["__scopeId","data-v-d2a55d33"]]);export{W as default};
