import{p as e,a as t,M as n,l as a,o as l,c as s,r as o,q as r,b as i,f as c,g as d,t as u,u as p,B as b,C as x,k as m,e as f,w as y,G as g,F as v,s as h,m as w}from"./vendor.839e5dc8.js";e("data-v-10df64c8");const k={class:"register_going p-4"},_={class:"\n          p-2\n          md:w-md md:mx-auto\n          rounded\n          bg-gray-100 bg-opacity-70\n          shadow-xl\n        "},j={class:"text-center text-2xl text-brown-500"},q={class:"input_block relative flex items-end h-14 mb-4"},G={class:"input_block relative flex items-end h-14 mb-4"},B={class:"flex items-center gap-x-2 my-4"},C=d("input",{class:"cursor-pointer",type:"checkbox",id:"agree"},null,-1),N={class:"cursor-pointer",for:"agree"},U=w("本人同意"),V=w("個人資料保護法之聲明"),F={class:"p-4 text-white bg-brown-500"},I=d("h3",{class:"text-2xl text-center mb-4"},"基富通開戶即享3大好康!!",-1),M={class:"md:flex md:justify-evenly md:gap-x-4"},z={class:"\n              flex\n              justify-center\n              items-center\n              w-32\n              h-32\n              mx-auto\n              my-6\n              text-2xl\n              font-black\n              border-4 border-white\n              rounded-full\n            "},A={class:"text-center text-sm"};t();const D={setup(e){const t=n(),w=a();l((()=>{t.query.type||w.replace("/registerGoing?type=2")}));const D=s((()=>t.meta.name[t.query.type]||"")),E=o(""),H=o(""),J=[{id:1,title:"省更多",content:"交易手續費折扣1.99折起，讓你有更多資金運用投資"},{id:2,title:"更好買",content:"超過3,000檔基金商品任你選擇"},{id:3,title:"更安心",content:"由集保、櫃買中心與34家國內外資產管理公司成立"}];return(e,t)=>{const n=r("router-link");return i(),c("div",null,[d("div",k,[d("form",_,[d("h3",j,u(p(D)),1),d("div",q,[b(d("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>E.value=e),class:"w-full block outline-none bg-transparent border-b peer",type:"text",id:"idNumber"},null,512),[[x,E.value]]),d("label",{class:m(["absolute bottom-0 left-0 text-lg text-gray-400 font-bold transition-all origin-left peer-focus:-translate-y-6 peer-focus:scale-75",""!==E.value&&"-translate-y-6 scale-75"]),for:"idNumber"},"請輸入身份證字號",2)]),d("div",G,[b(d("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>H.value=e),class:"w-full block outline-none bg-transparent border-b peer",type:"text",id:"phone"},null,512),[[x,H.value]]),d("label",{class:m(["absolute bottom-0 left-0 text-lg text-gray-400 font-bold transition-all origin-left peer-focus:-translate-y-6 peer-focus:scale-75",""!==H.value&&"-translate-y-6 scale-75"]),for:"phone"},"請輸入手機號碼",2)]),d("div",B,[C,d("label",N,[U,f(n,{class:"text-brown-500",to:"/registerGoing?type=2"},{default:y((()=>[V])),_:1})])]),d("button",{class:"\n            block\n            w-60\n            mx-auto\n            my-4\n            py-2\n            text-white\n            bg-darkBlue-800\n            rounded\n            hover:opacity-80\n            transition-all\n          ",onClick:t[2]||(t[2]=g((()=>{}),["prevent"]))}," 立即取得驗證碼 ")])]),d("div",F,[I,d("div",M,[(i(),c(v,null,h(J,(e=>d("div",{key:e.id},[d("div",z,u(e.title),1),d("p",A,u(e.content),1)]))),64))])])])}},__scopeId:"data-v-10df64c8"};export{D as default};
