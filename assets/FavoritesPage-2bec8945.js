import{j as e,R as u,u as l,g as f,r as g,m,o as C,p as j,n as p,C as v}from"./index-bcebb498.js";import{b as I,E as y,S as F,g as S,c as w,u as E,_ as h,d as b,C as L,I as R,a as T,T as k}from"./index-dc0e587e.js";const P=()=>e.jsx(I,{children:e.jsx(u,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"48",visible:!0})}),W=()=>e.jsxs(y,{children:[e.jsx("p",{children:"OOPS... We are very sorry! You don’t have any car at your favorites."}),e.jsx(F,{to:"/catalog",children:"Search car"})]}),$=()=>{const o=l(S),n=l(f),d=l(w),c=E();g.useEffect(()=>{const i=o.reduce((t,r)=>{let s=d.filter(a=>a.id===r)[0];return s||(s=n.filter(a=>a.id===r)[0],s)||t.push(m(r)),t},[]);i.length>0&&Promise.allSettled(i).then(t=>t.forEach(r=>{if(r.status==="fulfilled"){const{data:s,id:a}=r.value;s?c(C(s)):(c(j(a)),h.error(`id=${a} isn't accessible, removed from favorites!`))}if(r.status==="rejected"){const{message:s,config:{params:{id:a}}}=r.reason;h.error(`Loading id=${a}: ${s}!`)}}))},[o,n,d,c]);const x=i=>d.filter(t=>t.id===i)[0];return e.jsxs(e.Fragment,{children:[" ",o.length>0?e.jsx(b,{children:o.map(i=>{const t=x(i);return e.jsx("li",{children:t?e.jsx(L,{carItem:t}):e.jsx(P,{})},i)})}):e.jsx(W,{}),e.jsx(R,{})]})},D=p.section`
  padding-top: 150px;
  padding-bottom: 150px;
`,M=p.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`,_=()=>{const{ref:o,inView:n}=T({threshold:1,rootMargin:"300px"});return e.jsx(D,{children:e.jsxs(v,{children:[e.jsx("div",{ref:o}),e.jsx(M,{children:"Auto Rent Ukraine My Favorites"}),e.jsx($,{}),!n&&e.jsx(k,{})]})})};export{_ as default};
