import{j as e,L as x,a as p}from"./index-b6edc807.js";import{u,a as o,s as g,b as h,c as j,C as i,P as l,d as f,o as w,r as N}from"./PasswordField-665a932a.js";const b=()=>{const n=u(),t=o(g),a=o(h),{register:s,handleSubmit:m,formState:{errors:r}}=j({resolver:w(N)}),c=d=>{n(p(d))};return e.jsxs("form",{onSubmit:m(c),className:"bg-white w-[592px] py-[77px] px-[84px] rounded-60",children:[e.jsx("h2",{className:"text-[54px] font-bold",children:"Registration"}),e.jsx("p",{className:"text-lg font-medium",children:"Thank you for your interest in our platform."}),e.jsxs("div",{className:"flex flex-col gap-4 mt-8",children:[e.jsx(i,{placeholder:"Name",type:"text",register:s("name"),error:r.name}),e.jsx(i,{placeholder:"Email",type:"email",register:s("email"),error:r.email}),e.jsx(l,{placeholder:"Password",register:s("password"),error:r.password}),e.jsx(l,{placeholder:"Confirm password",register:s("confirmPassword"),error:r.confirmPassword})]}),a&&e.jsx("p",{className:"text-red-500 mt-4",children:a}),e.jsx(f,{type:"submit",className:"h-[52px] mt-16 w-full py-4 bg-yellow text-white rounded-30",disabled:t,children:t?"Registering...":"REGISTRATION"}),e.jsxs("p",{className:"text-lightBlack font-medium text-sm text-center mt-4",children:["Already have an account?"," ",e.jsx(x,{to:"/login",className:"text-yellow font-semibold",children:"Login"})]})]})},S=()=>e.jsx("section",{className:"mx-auto bg-orange-50 p-8",children:e.jsxs("div",{className:"flex gap-8",children:[e.jsx("div",{className:"w-[592px] bg-yellow rounded-60"}),e.jsx("div",{children:e.jsx(b,{})})]})});export{S as default};
