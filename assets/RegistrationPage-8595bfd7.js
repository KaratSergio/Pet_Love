import{u as c,a,s as d,b,c as g,j as e,C as i,d as f,o as h,f as u,L as w}from"./index-1450526d.js";import{P as l,r as j}from"./PasswordField-0b97416e.js";import{P}from"./PetBlock-ab6841b3.js";import{T as v}from"./Title-3e85e00b.js";const I="/Pet_Love/assets/mob-ab67bbc5.webp",L="/Pet_Love/assets/mob-2x-eed5bb04.webp",N="/Pet_Love/assets/mob-3x-f2f07062.webp",k="/Pet_Love/assets/tab-0da9d7cd.webp",_="/Pet_Love/assets/tab-2x-899b1b7c.webp",y="/Pet_Love/assets/tab-3x-edfb35bb.webp",S="/Pet_Love/assets/desk-ff8eebfc.webp",T="/Pet_Love/assets/desk-2x-337b7bb8.webp",R="/Pet_Love/assets/desk-3x-fe828667.webp",A={mobile:{default:I,"2x":L,"3x":N,position:{top:"8px",left:"0px"}},tablet:{default:k,"2x":_,"3x":y,position:{top:"8px",left:"0px"}},desktop:{default:S,"2x":T,"3x":R,position:{top:"38px",left:"40px"}}},C=()=>{const p=c(),o=a(d),r=a(b),{register:s,handleSubmit:m,formState:{errors:t}}=g({resolver:h(j)}),x=n=>{p(u(n))};return e.jsxs("form",{onSubmit:m(x),children:[e.jsxs("div",{className:"flex flex-col gap-4 mt-8",children:[e.jsx(i,{className:"h-[52px]",placeholder:"Name",type:"text",register:s("name"),error:t.name}),e.jsx(i,{className:"h-[52px]",placeholder:"Email",type:"email",register:s("email"),error:t.email}),e.jsx(l,{placeholder:"Password",register:s("password"),error:t.password}),e.jsx(l,{placeholder:"Confirm password",register:s("confirmPassword"),error:t.confirmPassword})]}),r&&e.jsx("p",{className:"text-red-500 mt-4",children:r}),e.jsx(f,{type:"submit",className:"h-[52px] mt-8 w-full py-4 bg-yellow text-white rounded-30",disabled:o,children:o?"Registering...":"REGISTRATION"})]})},M=()=>e.jsx("section",{className:"mx-auto bg-orange-50 p-8",children:e.jsxs("div",{className:"flex gap-8",children:[e.jsx(P,{images:A,imageWidth:"480px",imageHeight:"600px",className:"w-[592px] h-[654px] rounded-60"}),e.jsxs("div",{className:"bg-white w-[592px] h-[654px] py-[77px] px-[84px] rounded-60",children:[e.jsx(v,{}),e.jsx(C,{}),e.jsxs("p",{className:"text-lightBlack font-medium text-sm text-center mt-4",children:["Already have an account?"," ",e.jsx(w,{to:"/login",className:"text-yellow font-semibold",children:"Login"})]})]})]})});export{M as default};
