import{q as F,t as te,v as re,n as f,j as c,u as oe,r as u,B as ie,p as se,w as ne,o as ae,L as le}from"./index-bb260936.js";function J(e=F){const t=e===F?te:re(e);return function(){const{store:s}=t();return s}}const ce=J();function de(e=F){const t=e===F?ce:J(e);return function(){return t().dispatch}}const pe=de(),ue=e=>e.favorites.indexes,St=e=>e.favorites.cacheItems,fe=e=>e.reduce((t,r)=>t.length>r.length?r:t),he=()=>{const e=[];for(let t=30;t<=500;t+=10)e.push(t);return e},Tt=he(),ge=f.div`
  padding-top: 12px;
  padding-bottom: 12px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  text-align: center;
  border: none;
  border-radius: 12px;
  color: var(--color-white);
  background-color: var(--color-blue);
  transition: background-color 300ms ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--color-accent-blue);
  }
`,xe=f.div`
  position: relative;
  width: 274px;
  height: 426px;
  font-size: 12px;

  img {
    height: 268px;
    margin-bottom: 14px;
    border-radius: 14px;
    object-fit: cover;
    object-position: center;
    background: linear-gradient(
        180deg,
        rgba(18, 20, 23, 0.5) 2.5%,
        rgba(18, 20, 23, 0) 41.07%
      ),
      #f3f3f2;
  }
`,It=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-backdrop-loader);
  width: 274px;
  height: 426px;
  border-radius: 14px;
`,me=f.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: var(--color-black);
  h3 {
    font-size: 16px;
    font-weight: 500;
    color: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    span {
      color: var(--color-blue);
    }
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
`,be=f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-bottom: 28px;
`,X=f.svg`
  position: absolute;
  z-index: 10;
  cursor: pointer;
  right: 14px;
  top: 14px;
  width: 18px;
  height: 18px;
  opacity: ${e=>e.favorite?1:0};
  transition: opacity 500ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`,P="/auto-rent-ukraine/assets/sprite-6929c30d.svg",ve=f.p`
  white-space: ${e=>e.wrapText?"wrap":"nowrap"};
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-gray);
`,ye=f.span`
  color: var(--color-lightgray);
`,we=()=>c.jsx(ye,{children:" | "}),I=({list:e,wrapText:t=!1})=>c.jsx(ve,{wrapText:t,children:e.map((r,s,n)=>c.jsxs("span",{children:[r.trim()," ",s!==n.length-1&&c.jsx(we,{})]},s))}),je=f.ul`
  height: 72px;
  /* overflow: hidden; */
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  span {
    color: var(--color-blue);
    font-weight: 600;
  }
`,ke=f.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  font-family: ${e=>e.double?"Montserrat":"Manrope"};
  letter-spacing: ${e=>e.double?"-0.24px":"0"};
`,$e=({list:e})=>{const t=e[2],r=[...e];return t.length>35&&(r.splice(2,1),r.splice(3,0,t)),c.jsx(je,{children:r.map((s,n)=>c.jsx(ke,{double:s.includes(":"),children:s.split(":").map((o,a,i)=>a===0?i.length>1?o+":":o:c.jsx("span",{children:o},a))},n))})},Ce=f.div`
  position: relative;
  width: 541px;
  height: 752px;
  padding: 40px;
  border-radius: 24px;
  color: var(--color-black);
  background-color: var(--color-white);
  img {
    margin-bottom: 14px;
    width: 461px;
    height: 248px;
    border-radius: 14px;
    border-radius: 14px;
    object-fit: cover;
    object-position: center;

    background: #f3f3f2;
  }
  h3 {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    color: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    span {
      color: var(--color-blue);
    }
  }
`,Ee=f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
  font-size: 12px;
  line-height: 1.5;
`,ze=f.p`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 12px;
  }

  height: 60px;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 1.42;
`,Y=f.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`,Se=f.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 62px;
  margin-bottom: 2px;
  font-size: 12px;
  line-height: 1.5;
`,Te=f.svg`
  position: absolute;
  z-index: 10;
  cursor: pointer;
  right: 16px;
  top: 16px;
  width: 24px;
  height: 24px;
  stroke: var(--color-black);
  transition: all 500ms ease-in-out;
  &:hover {
    stroke: var(--color-accent-blue);
    transform: scale(1.1);
  }
`,Ie=f.a`
  display: inline-block;
  margin-top: 24px;
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border-radius: 12px;
  color: var(--color-white);
  background-color: var(--color-blue);
  transition: background-color 300ms ease-in-out;
  &:hover,
  &:focus {
    background-color: var(--color-accent-blue);
  }
`,Re=({carItem:e,closeModal:t})=>{const{id:r,img:s,photoLink:n,year:o,type:a,make:i,model:l,fuelConsumption:d,engineSize:p,description:h,address:x,rentalPrice:g,mileage:m,accessories:k,functionalities:E,rentalConditions:z}=e;return c.jsxs(Ce,{children:[c.jsx("img",{src:s||n,alt:`${i} ${l}, ${o}`}),c.jsxs("h3",{children:[i," ",c.jsx("span",{children:l}),`, ${o}`]}),c.jsxs(Ee,{children:[c.jsx(I,{list:x.split(",").slice(-2).concat([`Id: ${r}`,`Year: ${o}`,`Type: ${a}`])}),c.jsx(I,{list:[`Fuel Consumption: ${d}`,`Engine Size: ${p}`]})]}),c.jsx(ze,{children:h}),c.jsx(Y,{children:"Accessories and functionalities:"}),c.jsxs(Se,{children:[c.jsx("li",{children:c.jsx(I,{list:k})}),c.jsx("li",{children:c.jsx(I,{list:E,wrapText:!0})})]}),c.jsx(Y,{children:"Rental Conditions:"}),c.jsx($e,{list:z.split(`
`).concat([`Mileage: ${m.toLocaleString("en")}`,`Price: ${g}`])}),c.jsx(Ie,{href:"tel:+380730000000",children:"Rental car"}),c.jsx(Te,{onClick:t,children:c.jsx("use",{href:`${P}#icon-close`})})]})},Rt=({carItem:e})=>{const{id:t,img:r,photoLink:s,year:n,type:o,make:a,model:i,address:l,rentalCompany:d,rentalPrice:p,mileage:h,accessories:x,functionalities:g}=e,m=oe(ue),k=pe(),[E,z]=u.useState(!1),v=T=>{m.includes(T)?k(se(T)):(k(ne(T)),k(ae(e)))},y=()=>{z(!1)};return c.jsxs(c.Fragment,{children:[c.jsxs(xe,{children:[c.jsx("img",{src:r||s,alt:`${a} ${i}, ${n}`,loading:"lazy"}),c.jsxs(me,{children:[c.jsxs("h3",{children:[a," ",c.jsx("span",{children:i}),`, ${n}`]}),c.jsx("p",{children:p})]}),c.jsxs(be,{children:[c.jsx(I,{list:l.split(",").slice(-2).concat([d])}),c.jsx(I,{list:[o,a.length>i.length?i:a,`${h}`,fe(x.concat(g))]})]}),c.jsx(ge,{type:"button",onClick:()=>z(!0),children:"Learn more"}),c.jsx(X,{favorite:!m.includes(t),children:c.jsx("use",{href:`${P}#icon-heart-normal`})}),c.jsx(X,{favorite:m.includes(t),onClick:()=>v(t),children:c.jsx("use",{href:`${P}#icon-heart-active`})})]}),E&&c.jsx(ie,{closeModal:y,children:c.jsx(Re,{carItem:e,closeModal:y})})]})},Mt=f.ul`
  display: flex;
  gap: 50px 29px;
  justify-content: center;
  flex-wrap: wrap;
`,Lt=f.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
    max-width: 300px;
    font-weight: 600;
  }
`,Ot=f(le)`
  border-radius: 12px;
  background-color: var(--color-blue);
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  text-align: center;
  border: none;
  border-radius: 12px;
  color: var(--color-white);
  background-color: var(--color-blue);
  transition: background-color 300ms ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--color-accent-blue);
  }
`;let Me={data:""},Le=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Me,Oe=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,De=/\/\*[^]*?\*\/|  +/g,q=/\n+/g,$=(e,t)=>{let r="",s="",n="";for(let o in e){let a=e[o];o[0]=="@"?o[1]=="i"?r=o+" "+a+";":s+=o[1]=="f"?$(a,o):o+"{"+$(a,o[1]=="k"?"":t)+"}":typeof a=="object"?s+=$(a,t?t.replace(/([^,])+/g,i=>o.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):o):a!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=$.p?$.p(o,a):o+":"+a+";")}return r+(t&&n?t+"{"+n+"}":n)+s},w={},Q=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+Q(e[r]);return t}return e},Ae=(e,t,r,s,n)=>{let o=Q(e),a=w[o]||(w[o]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(o));if(!w[a]){let l=o!==e?e:(d=>{let p,h,x=[{}];for(;p=Oe.exec(d.replace(De,""));)p[4]?x.shift():p[3]?(h=p[3].replace(q," ").trim(),x.unshift(x[0][h]=x[0][h]||{})):x[0][p[1]]=p[2].replace(q," ").trim();return x[0]})(e);w[a]=$(n?{["@keyframes "+a]:l}:l,r?"":"."+a)}let i=r&&w.g?w.g:null;return r&&(w.g=w[a]),((l,d,p,h)=>{h?d.data=d.data.replace(h,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(w[a],t,s,i),a},Fe=(e,t,r)=>e.reduce((s,n,o)=>{let a=t[o];if(a&&a.call){let i=a(r),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=l?"."+l:i&&typeof i=="object"?i.props?"":$(i,""):i===!1?"":i}return s+n+(a??"")},"");function B(e){let t=this||{},r=e.call?e(t.p):e;return Ae(r.unshift?r.raw?Fe(r,[].slice.call(arguments,1),t.p):r.reduce((s,n)=>Object.assign(s,n&&n.call?n(t.p):n),{}):r,Le(t.target),t.g,t.o,t.k)}let K,H,W;B.bind({g:1});let j=B.bind({k:1});function Pe(e,t,r,s){$.p=t,K=e,H=r,W=s}function C(e,t){let r=this||{};return function(){let s=arguments;function n(o,a){let i=Object.assign({},o),l=i.className||n.className;r.p=Object.assign({theme:H&&H()},i),r.o=/ *go\d+/.test(l),i.className=B.apply(r,s)+(l?" "+l:""),t&&(i.ref=a);let d=e;return e[0]&&(d=i.as||e,delete i.as),W&&d[0]&&W(i),K(d,i)}return t?t(n):n}}var Ne=e=>typeof e=="function",N=(e,t)=>Ne(e)?e(t):e,Be=(()=>{let e=0;return()=>(++e).toString()})(),ee=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),_e=20,O=new Map,He=1e3,Z=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),S({type:4,toastId:e})},He);O.set(e,t)},We=e=>{let t=O.get(e);t&&clearTimeout(t)},V=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,_e)};case 1:return t.toast.id&&We(t.toast.id),{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:r}=t;return e.toasts.find(o=>o.id===r.id)?V(e,{type:1,toast:r}):V(e,{type:0,toast:r});case 3:let{toastId:s}=t;return s?Z(s):e.toasts.forEach(o=>{Z(o.id)}),{...e,toasts:e.toasts.map(o=>o.id===s||s===void 0?{...o,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+n}))}}},D=[],A={toasts:[],pausedAt:void 0},S=e=>{A=V(A,e),D.forEach(t=>{t(A)})},Ve={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Ue=(e={})=>{let[t,r]=u.useState(A);u.useEffect(()=>(D.push(r),()=>{let n=D.indexOf(r);n>-1&&D.splice(n,1)}),[t]);let s=t.toasts.map(n=>{var o,a;return{...e,...e[n.type],...n,duration:n.duration||((o=e[n.type])==null?void 0:o.duration)||(e==null?void 0:e.duration)||Ve[n.type],style:{...e.style,...(a=e[n.type])==null?void 0:a.style,...n.style}}});return{...t,toasts:s}},Xe=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Be()}),R=e=>(t,r)=>{let s=Xe(t,e,r);return S({type:2,toast:s}),s.id},b=(e,t)=>R("blank")(e,t);b.error=R("error");b.success=R("success");b.loading=R("loading");b.custom=R("custom");b.dismiss=e=>{S({type:3,toastId:e})};b.remove=e=>S({type:4,toastId:e});b.promise=(e,t,r)=>{let s=b.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(n=>(b.success(N(t.success,n),{id:s,...r,...r==null?void 0:r.success}),n)).catch(n=>{b.error(N(t.error,n),{id:s,...r,...r==null?void 0:r.error})}),e};var Ye=(e,t)=>{S({type:1,toast:{id:e,height:t}})},qe=()=>{S({type:5,time:Date.now()})},Ze=e=>{let{toasts:t,pausedAt:r}=Ue(e);u.useEffect(()=>{if(r)return;let o=Date.now(),a=t.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(o-i.createdAt);if(l<0){i.visible&&b.dismiss(i.id);return}return setTimeout(()=>b.dismiss(i.id),l)});return()=>{a.forEach(i=>i&&clearTimeout(i))}},[t,r]);let s=u.useCallback(()=>{r&&S({type:6,time:Date.now()})},[r]),n=u.useCallback((o,a)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:d}=a||{},p=t.filter(g=>(g.position||d)===(o.position||d)&&g.height),h=p.findIndex(g=>g.id===o.id),x=p.filter((g,m)=>m<h&&g.visible).length;return p.filter(g=>g.visible).slice(...i?[x+1]:[0,x]).reduce((g,m)=>g+(m.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:Ye,startPause:qe,endPause:s,calculateOffset:n}}},Ge=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Je=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Qe=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ke=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ge} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Je} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Qe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,et=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,tt=C("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${et} 1s linear infinite;
`,rt=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ot=j`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,it=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${rt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ot} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,st=C("div")`
  position: absolute;
`,nt=C("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,at=j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,lt=C("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${at} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ct=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?u.createElement(lt,null,t):t:r==="blank"?null:u.createElement(nt,null,u.createElement(tt,{...s}),r!=="loading"&&u.createElement(st,null,r==="error"?u.createElement(Ke,{...s}):u.createElement(it,{...s})))},dt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,pt=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ut="0%{opacity:0;} 100%{opacity:1;}",ft="0%{opacity:1;} 100%{opacity:0;}",ht=C("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,gt=C("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,xt=(e,t)=>{let r=e.includes("top")?1:-1,[s,n]=ee()?[ut,ft]:[dt(r),pt(r)];return{animation:t?`${j(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},mt=u.memo(({toast:e,position:t,style:r,children:s})=>{let n=e.height?xt(e.position||t||"top-center",e.visible):{opacity:0},o=u.createElement(ct,{toast:e}),a=u.createElement(gt,{...e.ariaProps},N(e.message,e));return u.createElement(ht,{className:e.className,style:{...n,...r,...e.style}},typeof s=="function"?s({icon:o,message:a}):u.createElement(u.Fragment,null,o,a))});Pe(u.createElement);var bt=({id:e,className:t,style:r,onHeightUpdate:s,children:n})=>{let o=u.useCallback(a=>{if(a){let i=()=>{let l=a.getBoundingClientRect().height;s(e,l)};i(),new MutationObserver(i).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return u.createElement("div",{ref:o,className:t,style:r},n)},vt=(e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ee()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...n}},yt=B`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,M=16,Dt=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:n,containerStyle:o,containerClassName:a})=>{let{toasts:i,handlers:l}=Ze(r);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:M,left:M,right:M,bottom:M,pointerEvents:"none",...o},className:a,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(d=>{let p=d.position||t,h=l.calculateOffset(d,{reverseOrder:e,gutter:s,defaultPosition:t}),x=vt(p,h);return u.createElement(bt,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?yt:"",style:x},d.type==="custom"?N(d.message,d):n?n(d):u.createElement(mt,{toast:d,position:p}))}))},At=b;const wt=f.div`
  position: fixed;
  z-index: 100;
  right: 30px;
  bottom: 30px;

  cursor: pointer;
  svg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    fill: transparent;
    stroke: var(--color-blue);
    transform: rotateX(180deg);
    transition: color 250ms ease-in-out;
    box-shadow: 5px 4px 15px 1px rgba(0, 0, 0, 0.75);

    &:hover {
      stroke: var(--color-accent-blue);
      transform: scale(1.1) rotateX(180deg);
    }
  }
`,Ft=()=>c.jsx(wt,{onClick:()=>{window.scroll({top:0,left:0,behavior:"smooth"})},children:c.jsx("svg",{children:c.jsx("use",{href:`${P}#icon-chevron-down`})})});var U=new Map,L=new WeakMap,G=0,jt=void 0;function kt(e){return e?(L.has(e)||(G+=1,L.set(e,G.toString())),L.get(e)):"0"}function $t(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?kt(e.root):e[t]}`).toString()}function Ct(e){let t=$t(e),r=U.get(t);if(!r){const s=new Map;let n;const o=new IntersectionObserver(a=>{a.forEach(i=>{var l;const d=i.isIntersecting&&n.some(p=>i.intersectionRatio>=p);e.trackVisibility&&typeof i.isVisible>"u"&&(i.isVisible=d),(l=s.get(i.target))==null||l.forEach(p=>{p(d,i)})})},e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:s},U.set(t,r)}return r}function Et(e,t,r={},s=jt){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const l=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:n,observer:o,elements:a}=Ct(r);let i=a.get(e)||[];return a.has(e)||a.set(e,i),i.push(t),o.observe(e),function(){i.splice(i.indexOf(t),1),i.length===0&&(a.delete(e),o.unobserve(e)),a.size===0&&(o.disconnect(),U.delete(n))}}function Pt({threshold:e,delay:t,trackVisibility:r,rootMargin:s,root:n,triggerOnce:o,skip:a,initialInView:i,fallbackInView:l,onChange:d}={}){var p;const[h,x]=u.useState(null),g=u.useRef(),[m,k]=u.useState({inView:!!i,entry:void 0});g.current=d,u.useEffect(()=>{if(a||!h)return;let y;return y=Et(h,(T,_)=>{k({inView:T,entry:_}),g.current&&g.current(T,_),_.isIntersecting&&o&&y&&(y(),y=void 0)},{root:n,rootMargin:s,threshold:e,trackVisibility:r,delay:t},l),()=>{y&&y()}},[Array.isArray(e)?e.toString():e,h,n,s,o,a,r,l,t]);const E=(p=m.entry)==null?void 0:p.target,z=u.useRef();!h&&E&&!o&&!a&&z.current!==E&&(z.current=E,k({inView:!!i,entry:void 0}));const v=[x,m.inView,m.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}export{Rt as C,Lt as E,Dt as I,Ot as S,Ft as T,At as _,Pt as a,It as b,St as c,Mt as d,ue as g,Tt as p,P as s,pe as u};
