import{d as g,a as A,Z as C,$ as H,a0 as N,j as O,r as K,u as M,a1 as u,a2 as V,a3 as E,a4 as U,h as v,a5 as D,O as f,a6 as F,a7 as Q,a8 as W,a9 as X,aa as Y,t as n,v as l,x as s,ab as B,W as o,_ as R,S as r,U as Z,V as q,Q as G,Y as h,C as J,D as ss,X as ts,z as m}from"./CpIEQbRM.js";import{a as es}from"./DDE5pjLF.js";const as=g({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const i=await u[t.name]().then(a=>a.default||a);return()=>v(i,t.layoutProps,e.slots)}}),Zs=g({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const i=A(),a=C(U),c=a===H()?N():a,_=O(()=>{let d=f(t.name)??c.meta.layout??"default";return d&&!(d in u)&&t.fallback&&(d=f(t.fallback)),d}),p=K();e.expose({layoutRef:p});const y=i.deferHydration();if(i.isHydrating){const d=i.hooks.hookOnce("app:error",y);M().beforeEach(d)}return()=>{const d=_.value&&_.value in u,k=c.meta.layoutTransition??V;return E(D,d&&k,{default:()=>v(W,{suspensible:!0,onResolve:()=>{Q(y)}},{default:()=>v(is,{layoutProps:F(e.attrs,{ref:p}),key:_.value||void 0,name:_.value,shouldProvide:!t.name,hasTransition:!!k},e.slots)})}).default()}}}),is=g({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const i=t.name;return t.shouldProvide&&X(Y,{isCurrent:a=>i===(a.meta.layout??"default")}),()=>{var a,c;return!i||typeof i=="string"&&!(i in u)?(c=(a=e.slots).default)==null?void 0:c.call(a):v(as,{key:i,layoutProps:t.layoutProps,name:i},e.slots)}}}),os=["innerHTML"],ns=["innerHTML"],rs={__name:"KeyIndicator",props:{value:String,text:String,size:{type:String,validator:t=>["m","l"].includes(t),default:"l"}},setup(t){return(e,i)=>(n(),l("div",{class:B(["key-indicator",`key-indicator--size-${t.size}`])},[s("span",{class:"key-indicator__value",innerHTML:t.value},null,8,os),s("span",{class:"key-indicator__text",innerHTML:t.text},null,8,ns)],2))}},$=o("/files/hero-video.webm"),cs=t=>(J("data-v-4c67509e"),t=t(),ss(),t),_s={class:"key-indicators"},ds=cs(()=>s("video",{class:"key-indicators__bg-video",muted:"",playsinline:"",loop:"",preload:"auto",autoplay:""},[s("source",{src:$,type:"video/webm"}),s("source",{src:$,type:"video/mov"})],-1)),ls={class:"container key-indicators__container"},ms={class:"key-indicators__content"},ps={class:"key-indicators__title"},us={class:"key-indicators__text"},vs={key:0,class:"key-indicators__indicators"},hs={__name:"KeyIndicatorsSection",props:{data:Array},setup(t){return(e,i)=>{var c;const a=rs;return n(),l("div",_s,[ds,s("div",ls,[s("div",ms,[s("p",ps,[r(e.$slots,"title",{},void 0,!0)]),s("p",us,[r(e.$slots,"text",{},void 0,!0)])]),(c=t.data)!=null&&c.length?(n(),l("div",vs,[(n(!0),l(Z,null,q(t.data,(_,p)=>(n(),h(a,{key:p,value:_.value,text:_.text,size:_.size},null,8,["value","text","size"]))),128))])):G("",!0)])])}}},qs=R(hs,[["__scopeId","data-v-4c67509e"]]),gs=o("/images/social-section-desk.png"),ys=o("/images/social-section.png"),b=o("/images/partners/ali.png"),S=o("/images/partners/tink.png"),j=o("/images/partners/sber.png"),w=o("/images/partners/alfa.png"),L=o("/images/partners/golden.png"),x=o("/images/partners/magnit.png"),P=o("/images/partners/geek.png"),I=o("/images/partners/gazprom.png"),T=o("/images/partners/lemana.png"),z=o("/images/partners/yandex.png"),ks={},fs={class:"partners"},$s=ts('<div class="partners__container"><div class="partners__row"><div class="partners__item"><img src="'+b+'" alt=""></div><div class="partners__item"><img src="'+S+'" alt=""></div><div class="partners__item"><img src="'+j+'" alt=""></div><div class="partners__item"><img src="'+w+'" alt=""></div><div class="partners__item"><img src="'+L+'" alt=""></div></div><div class="partners__row"><div class="partners__item"><img src="'+b+'" alt=""></div><div class="partners__item"><img src="'+S+'" alt=""></div><div class="partners__item"><img src="'+j+'" alt=""></div><div class="partners__item"><img src="'+w+'" alt=""></div><div class="partners__item"><img src="'+L+'" alt=""></div></div></div><div class="partners__container partners__container--invert"><div class="partners__row"><div class="partners__item"><img src="'+x+'" alt=""></div><div class="partners__item"><img src="'+P+'" alt=""></div><div class="partners__item"><img src="'+I+'" alt=""></div><div class="partners__item"><img src="'+T+'" alt=""></div><div class="partners__item"><img src="'+z+'" alt=""></div></div><div class="partners__row"><div class="partners__item"><img src="'+x+'" alt=""></div><div class="partners__item"><img src="'+P+'" alt=""></div><div class="partners__item"><img src="'+I+'" alt=""></div><div class="partners__item"><img src="'+T+'" alt=""></div><div class="partners__item"><img src="'+z+'" alt=""></div></div></div>',2),bs=[$s];function Ss(t,e){return n(),l("div",fs,bs)}const js=R(ks,[["render",Ss]]),ws=gs,Ls={class:"social-section"},xs={class:"social-section__top"},Ps={class:"social-section__wrapper"},Is={class:"container"},Ts=s("div",{class:"social-section__image"},[s("div",{class:"container"},[s("picture",null,[s("source",{media:"(min-width:768px)",srcset:ws}),s("img",{src:ys,alt:""})])])],-1),zs={class:"social-section__bottom"},Bs={class:"social-section__wrapper"},Rs={class:"container"},Gs={__name:"SocialSection",setup(t){return(e,i)=>(n(),l("div",Ls,[s("div",xs,[s("div",Ps,[s("div",Is,[r(e.$slots,"top")])])]),Ts,s("div",zs,[s("div",Bs,[s("div",Rs,[r(e.$slots,"bottom")]),m(js,{class:"social-section__partners"})])])]))}},As={class:"card-block__container container"},Cs=s("div",{class:"card-block__item card-block__item--bg"},null,-1),Hs={class:"card-block__item card-block__item--action-1"},Ns={class:"card-block__item card-block__item--projects projects"},Os={class:"projects__content"},Ks={class:"projects__list"},Ms={class:"projects__item projects__item"},Vs=s("div",{class:"projects__item"},"Эксклюзив",-1),Es=s("div",{class:"projects__item"},"Лучший проект",-1),Us={class:"projects__item projects__item--mic"},Ds={class:"card-block__item card-block__item--text"},Fs={class:"card-block__item card-block__item--action-2"},Qs={class:"card-block__item card-block__item--payment"},Ws={class:"payment"},Js={__name:"CardBlock",props:{theme:{type:String,default:"dark",validator:t=>["light","dark"].includes(t)}},setup(t){return(e,i)=>{const a=es;return n(),l("div",{class:B(["card-block",`card-block--theme-${t.theme}`])},[s("div",As,[Cs,s("div",Hs,[r(e.$slots,"action-1")]),s("div",Ns,[s("div",Os,[r(e.$slots,"projects")]),s("div",Ks,[s("div",Ms,[m(a,{name:"camera",width:"51",height:"41"})]),Vs,Es,s("div",Us,[m(a,{name:"microphone",width:"39",height:"56"})])])]),s("div",Ds,[r(e.$slots,"text-block")]),s("div",Fs,[r(e.$slots,"action-2")]),s("div",Qs,[r(e.$slots,"payment"),s("div",Ws,[m(a,{name:"visa",width:"49",height:"17"}),t.theme==="dark"?(n(),h(a,{key:0,name:"mastercard-dark",width:"32",height:"25"})):(n(),h(a,{key:1,name:"mastercard-light",width:"32",height:"25"})),m(a,{name:"mir",width:"61",height:"18"})])])])],2)}}};export{qs as K,Gs as _,Js as a,Zs as b};
