import{H as m,j as s,I as c}from"./index-ee336524.js";const f=e=>e.notices.notices,j=e=>e.notices.categories,N=e=>e.notices.sexes,u=e=>e.notices.species,g=e=>e.notices.isLoading,w=e=>e.notices.error,b=e=>e.notices.notices.totalPages,d=e=>e.notices.notices.results,y=m([d,e=>e.notices.favoriteIds||[]],(e,t)=>e.filter(l=>t.includes(l._id))),p=e=>e?e.split("-").join("."):"",a=e=>e?e.charAt(0).toUpperCase()+e.slice(1):"",k=({notice:e,onToggleFavorite:t,size:l="large"})=>{const i=l==="small"?"w-[320px] h-[388px] p-[14px]":"w-[363px]",n=l==="small"?"w-[292px] h-[162px] mb-[14px]":"w-[315px] h-[178px] mb-6",x=l==="small"?"mt-6":"mt-[50px]",o=l==="small"?"h-[44px] max-w-[230px]":"h-[48px]",r=l==="small"?"mt-[14px] leading-tight":"mt-4";return s.jsxs("div",{className:`bg-white p-6 flex flex-col justify-between rounded-2xl ${i}`,children:[s.jsxs("div",{children:[s.jsx("div",{className:`relative overflow-hidden rounded-2xl ${n}`,children:s.jsx("img",{src:e.imgURL,alt:e.title,className:"h-full w-full object-cover"})}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("h2",{className:"font-bold",children:e.title}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(c,{id:"icon-star",strokeColor:"stroke-yellow",color:"fill-yellow",className:"mr-[2px]"})," ",e.popularity]})]}),s.jsxs("ul",{className:"flex justify-between mt-2",children:[s.jsxs("li",{className:"flex flex-col",children:[s.jsx("span",{className:"font-medium text-[10px] text-lightBlack",children:"Name"}),s.jsx("span",{className:"text-[12px]",children:e.name})]}),s.jsxs("li",{className:"flex flex-col",children:[s.jsx("span",{className:"font-medium text-[10px] text-lightBlack",children:"Birthday"}),s.jsx("span",{className:"text-[12px]",children:p(e.birthday)})]}),s.jsxs("li",{className:"flex flex-col",children:[s.jsx("span",{className:"font-medium text-[10px] text-lightBlack",children:"Sex"}),s.jsx("span",{className:"text-[12px]",children:a(e.sex)})]}),s.jsxs("li",{className:"flex flex-col",children:[s.jsx("span",{className:"font-medium text-[10px] text-lightBlack",children:"Species"}),s.jsx("span",{className:"text-[12px]",children:a(e.species)})]}),s.jsxs("li",{className:"flex flex-col",children:[s.jsx("span",{className:"font-medium text-[10px] text-lightBlack",children:"Category"}),s.jsx("span",{className:"text-[12px]",children:a(e.category)})]})]}),s.jsx("p",{className:`text-sm text-dark ${r}`,children:e.comment})]}),s.jsxs("div",{className:`flex justify-between gap-[10px] ${x}`,children:[s.jsx("button",{type:"button",className:`text-white max-w-64 bg-yellow rounded-30 w-full ${o}`,children:"Learn more"}),s.jsx("button",{type:"button",onClick:t,className:"rounded-full bg-lightYellow size-12",children:s.jsx(c,{id:"icon-like",strokeColor:"stroke-yellow"})})]})]})};export{k as N,g as a,w as b,j as c,N as d,u as e,b as f,y as g,f as s};
