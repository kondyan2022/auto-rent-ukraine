import{n as c,j as t,u as m,g as A,a as I,b as N,c as z,d as C,r as x,s as V,e as M,f as P,h as y,i as $,k as F,C as B,l as O}from"./index-bcebb498.js";import{E as H,u as L,C as W,s as D,_ as E,p as U,a as _,I as G,T as K}from"./index-dc0e587e.js";const X=e=>{const o=e.replace(/[^\d]/g,"");return!o||o==="0"?"":Number(o).toLocaleString("en")},j=e=>e?Number(e.replace(/[^\d]/g,"")):0,q=c.ul`
  display: flex;
  gap: 50px 29px;
  justify-content: center;
  flex-wrap: wrap;
`,J=()=>t.jsx(H,{children:t.jsx("p",{children:"OOPS... We are very sorry! We don’t have any results matching your search."})}),Q=()=>{const e=m(A),o=m(I),i=m(N),p=m(z),[a]=C(),u=L(),n=({cars:r,serverPagination:v,searchParams:h})=>{if(v)return r;let d=[...r];const g=Number(h.get("price"));g&&(d=d.filter(({rentalPrice:b})=>j(b)<=g).sort(({rentalPrice:b},{rentalPrice:R})=>j(R)-j(b)));const k=Number(h.get("milefrom"));k&&(d=d.filter(({mileage:b})=>b>=k));const w=Number(h.get("mileto"));return w&&(d=d.filter(({mileage:b})=>b<=w)),d},s=({cars:r,serverPagination:v,currentPage:h,limit:d})=>v?r:r.slice(0,(h+1)*d),l=x.useMemo(()=>n({cars:e,serverPagination:o,searchParams:a}),[e,o,a]),f=x.useMemo(()=>s({cars:l,serverPagination:o,currentPage:i,limit:p}),[o,i,p,l]);return x.useEffect(()=>{o||(i+1)*p>=l.length&&u(V(!0))},[i,p,l,u,o]),f.length>0?t.jsx(q,{children:f.map(r=>t.jsx("li",{children:t.jsx(W,{carItem:r})},r.id))}):t.jsx(J,{})},Y=c.section`
  padding-top: 30px;
  padding-bottom: 150px;
`,Z=c.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 90px;
  background-color: inherit;
  border: none;
  color: var(--color-blue);

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  text-decoration-line: underline;
  transition: color 400ms ease-in-out;
  &:hover,
  &:focus {
    color: var(--color-accent-blue);
  }
`,ee=c.h2`
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
`,te=c.div`
  position: relative;
`,re=c.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${e=>e.width};
  height: 48px;
  border: none;
  padding-left: 18px;
  padding-right: 18px;
  border-radius: 14px;
  background-color: #f7f7fb;
  color: var(--color-black);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
  transition: color 250ms ease-in-out;
  &:focus {
    outline: none;
    color: var(--color-blue);
  }
`,oe=c.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29; /* 128.571% */
`,ie=c.svg`
  position: absolute;
  bottom: 14px;
  left: ${e=>`calc(${e.width} - 38px)`};
  width: 20px;
  height: 20px;
  stroke: var(--color-black);
  fill: transparent;
  transform: rotateX(${e=>e.listOpen?"-180deg":"0"});
  transition:
    transform 250ms ease-in-out,
    stroke 250ms ease-in-out;
  &:hover {
    stroke: var(--color-blue);
  }
`,ne=c.div`
  position: absolute;
  width: ${e=>e.width};
  height: ${e=>e.listHeight};
  z-index: 20;
  top: calc(100% + 4px);
  padding: 14px 8px 14px 18px;
  border-radius: 14px;
  border: 1px solid #1214170c;
  background-color: #fff;
`,se=c.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: ${e=>`calc(${e.listHeight} - 28px)`};
  overflow-y: auto;

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(18, 20, 23, 0.05);
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`,ae=c.p`
  color: ${e=>e.active?"var(--color-black)":"#12141733"};
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  transition: color 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: var(--color-blue);
  }
`,S=({labelText:e,startText:o="",finishText:i="",initValue:p,onChange:a,dropdownListValues:u,allValue:n="",name:s="",width:l="224px",listHeight:f="272px"})=>{const[r,v]=x.useState(()=>p===""?"All":p),[h,d]=x.useState(!1);return x.useEffect(()=>{a&&a(r)},[r,a]),console.log({filterValue:r,initValue:p,allValue:n}),t.jsxs(te,{children:[t.jsxs(oe,{children:[e,t.jsx(re,{readOnly:!0,autoComplete:"off",type:"text",name:s,id:s,value:`${o}${r==="All"?n:r}${i}`,width:l,onClick:()=>{d(g=>!g)}}),t.jsx(ie,{listOpen:h,width:l,children:t.jsx("use",{href:`${D}#icon-chevron-down`})})]}),h&&t.jsx(ne,{width:l,listHeight:f,children:t.jsx(se,{listHeight:f,children:["All",...u].map(g=>t.jsx("li",{onClick:k=>{const w=k.target.textContent;d(!1),v(w)},children:t.jsx(ae,{active:r===n||r===""?"All":r===`${g}`,children:g})},g))})})]})},le=c.input`
  width: 160px;
  height: 48px;
  padding: 14px 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  background-color: var(--color-background-input);
  border: none;
  transition: color 250ms ease-in-out;
  border-radius: ${e=>e.borderRadius?e.borderRadius:"0"};
  border-right: ${e=>e.borderRadius&&e.borderRadius[0]!=="0"?"1px solid rgba(138, 138, 137, 0.20)":"none"};
  &:focus {
    outline: none;
    color: var(--color-blue);
  }
`,ce=c.label`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29; /* 128.571% */
`,T=({initialValue:e,name:o,startText:i,borderRadius:p,labelText:a="",onChange:u})=>{const[n,s]=x.useState(()=>`${i}${e?Number(e).toLocaleString("en"):""}`);return x.useEffect(()=>{u&&u(n)},[n,u]),t.jsxs(ce,{children:[a,t.jsx(le,{type:"text",autoComplete:"off",name:o,id:o,value:n,borderRadius:p,onChange:l=>{s(`${i}${X(l.target.value)}`)}})]})},pe=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land Rover"],ue=c.form`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-bottom: 50px;
`,de=c.div`
  display: flex;
  align-items: flex-end;
`,xe=c.button`
  padding: 14px 44px;
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
`,fe=()=>{const[e,o]=C(),i=L(),p=x.useRef(!0),a=m(M);x.useEffect(()=>{a&&E.error(a||"Unknown error")},[a]),x.useEffect(()=>{if(p.current){const n={};for(let[s,l]of e.entries())n[s]=l;["milefrom","mileto","price"].some(s=>s in n)?i(P({make:n.make})):i(y({make:n.make})),p.current=!1}return()=>i($())},[i,e]);const u=n=>{n.preventDefault();const s={},l=new FormData(n.currentTarget);for(let[f,r]of l.entries())f!=="make"?r=r.replace(/[^\d]/g,""):r=r==="Enter the text"?"0":r,r&&r!=="0"&&(s[f]=r);o(s),["milefrom","mileto","price"].some(f=>f in s)?i(P({make:s.make})):(i($()),i(y({make:s.make})))};return t.jsxs(ue,{onSubmit:u,children:[t.jsx(S,{name:"make",labelText:"Car brand",initValue:e.get("make")||"All",dropdownListValues:pe,allValue:"Enter the text",width:"224px",listHieght:"272px"}),t.jsx(S,{name:"price",labelText:"Price/ 1 hour",startText:"To ",finishText:"$",initValue:e.get("price")?e.get("price").replace(/[^\d]/g,""):"",dropdownListValues:U,width:"125px",listHeight:"188px"}),t.jsxs(de,{children:[t.jsx(T,{labelText:"Сar mileage / km",name:"milefrom",initialValue:e.get("milefrom"),startText:"From ",borderRadius:"14px 0 0 14px"}),t.jsx(T,{name:"mileto",initialValue:e.get("mileto"),startText:"To ",borderRadius:"0 14px 14px 0"})]}),t.jsx(xe,{type:"submit",children:"Search"})]})},me=()=>{const e=L(),o=m(F),[i]=C(),p=m(I),a=x.useRef(null),u=m(M),{ref:n,inView:s}=_({threshold:1,rootMargin:"300px"}),l=()=>{p?e(y({make:i.get("make")})).unwrap().then(()=>a.current.scrollIntoView({behavior:"smooth"})).catch(()=>E.error(u)):(e(O()),setTimeout(()=>a.current.scrollIntoView({behavior:"smooth"}),400))};return t.jsxs(Y,{children:[t.jsxs(B,{children:[t.jsx("div",{ref:n}),t.jsx(ee,{children:"Auto Rent Ukraine Catalog"}),t.jsx(fe,{}),t.jsx(Q,{}),!o&&t.jsx(Z,{type:"button",onClick:l,children:"Load more"}),t.jsx("div",{ref:a})]}),t.jsx(G,{}),!s&&t.jsx(K,{})]})};export{me as default};
