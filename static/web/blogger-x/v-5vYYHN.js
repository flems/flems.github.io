import{_ as u,a as l}from"./CU-ruegT.js";import{t as o,v as c,x as e,U as d,z as a,A as r,B as i,ab as h,_ as m,S as p}from"./CBm_s1WN.js";const $={class:"container"},v={class:"header__wrapper"},g=["src"],y={class:"header__buttons"},b={__name:"HeaderLayout",props:{theme:{type:String,default:"default",validator:t=>["default","brief"].includes(t)}},setup(t){return(n,s)=>{const _=u;return o(),c("header",{class:h(["header",`header--theme-${t.theme}`])},[e("div",$,[e("div",v,[e("img",{class:"header__logo",src:t.theme!=="brief"?"/images/rafinad-logo-white.svg":"/images/rafinad-logo.svg",alt:""},null,8,g),e("div",y,[t.theme!=="brief"?(o(),c(d,{key:0},[a(_,{href:"#123",size:"m"},{default:r(()=>[i("Регистрация")]),_:1}),a(_,{href:"/brief",theme:"bordered-white",size:"s"},{default:r(()=>[i("Рекламодателям")]),_:1})],64)):(o(),c(d,{key:1},[a(_,{theme:"bordered",href:"#123",size:"s"},{default:r(()=>[i("Заявка на бриф")]),_:1}),a(_,{href:"/",theme:"bordered-black",size:"s"},{default:r(()=>[i("Блогерам")]),_:1})],64))])])])],2)}}},x={},k={class:"contact-card"},z={class:"contact-card__contact"},S=e("span",{class:"contact-card__value"},[e("a",{href:"mailto:info@rafinad.io"},"info@rafinad.io")],-1),w={class:"contact-card__contact"},B=e("span",{class:"contact-card__value"},[e("a",{href:"tel:+74951092025"},"+7 (495) 109-20-25")],-1),C={class:"contact-card__contact"},U=e("span",{class:"contact-card__value"}," Г.МОСКВА, Б-Р ЦВЕТНОЙ, Д. 30, СТР. 1 ",-1);function L(t,n){const s=l;return o(),c("div",k,[e("div",z,[a(s,{class:"contact-card__icon",name:"mail"}),S]),e("div",w,[a(s,{class:"contact-card__icon",name:"phone"}),B]),e("div",C,[a(s,{class:"contact-card__icon",name:"address"}),U])])}const N=m(x,[["render",L]]),V={},F={class:"social"},I={class:"social__item",href:"#"},A={class:"social__item",href:"#"},E={class:"social__item",href:"#"};function H(t,n){const s=l;return o(),c("div",F,[e("a",I,[a(s,{name:"vk"})]),e("a",A,[a(s,{name:"telegram"})]),e("a",E,[a(s,{name:"youtube"})])])}const T=m(V,[["render",H]]),j={class:"footer__container"},q={class:"container"},D=e("h2",{class:"footer__title"},"Контакты",-1),G={class:"footer__wrapper"},J=e("div",{class:"footer__copyright"}," ООО «РАФИНАД» ",-1),K={__name:"FooterLayout",props:{theme:{type:String,default:"light",validator:t=>["light","dark"].includes(t)}},setup(t){return(n,s)=>{const _=N,f=T;return o(),c("footer",{class:h(["footer",`footer--theme-${t.theme}`])},[e("div",j,[e("div",q,[D,e("div",G,[a(_),a(f)]),J])])],2)}}},M={class:"layout"},O={class:"layout__main"},R={__name:"Layout",props:{theme:{type:String,default:"default",validator:t=>["default","brief"].includes(t)}},setup(t){return(n,s)=>(o(),c("div",M,[a(b,{class:"layout__header",theme:t.theme},null,8,["theme"]),e("main",O,[p(n.$slots,"default")]),a(K,{theme:t.theme==="brief"?"dark":"light",class:"layout__footer"},null,8,["theme"])]))}};export{R as _};
