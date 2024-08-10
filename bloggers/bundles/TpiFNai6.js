import{d as h,a as N,S as A,T as C,U as O,j as K,r as M,u as V,V as p,W as E,X as U,Y as D,h as g,Z as F,H as $,$ as J,a0 as Q,a1 as W,a2 as X,a3 as Y,t as c,v as d,x as t,a4 as B,P as a,_ as R,L as r,N as Z,O as q,J as G,R as u,C as ss,D as ts,Q as H,z as m}from"./DoR4Ktm5.js";import{a as is}from"./j_3BxurQ.js";const as=h({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(s,i){const o=await p[s.name]().then(e=>e.default||e);return()=>g(o,s.layoutProps,i.slots)}}),et=h({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(s,i){const o=N(),e=A(D),n=e===C()?O():e,_=K(()=>{let l=$(s.name)??n.meta.layout??"default";return l&&!(l in p)&&s.fallback&&(l=$(s.fallback)),l}),v=M();i.expose({layoutRef:v});const y=o.deferHydration();if(o.isHydrating){const l=o.hooks.hookOnce("app:error",y);V().beforeEach(l)}return()=>{const l=_.value&&_.value in p,k=n.meta.layoutTransition??E;return U(F,l&&k,{default:()=>g(W,{suspensible:!0,onResolve:()=>{Q(y)}},{default:()=>g(es,{layoutProps:J(i.attrs,{ref:v}),key:_.value||void 0,name:_.value,shouldProvide:!s.name,hasTransition:!!k},i.slots)})}).default()}}}),es=h({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(s,i){const o=s.name;return s.shouldProvide&&X(Y,{isCurrent:e=>o===(e.meta.layout??"default")}),()=>{var e,n;return!o||typeof o=="string"&&!(o in p)?(n=(e=i.slots).default)==null?void 0:n.call(e):g(as,{key:o,layoutProps:s.layoutProps,name:o},i.slots)}}}),os=["innerHTML"],cs=["innerHTML"],rs={__name:"KeyIndicator",props:{value:String,text:String,size:{type:String,validator:s=>["m","l"].includes(s),default:"l"}},setup(s){return(i,o)=>(c(),d("div",{class:B(["key-indicator",`key-indicator--size-${s.size}`])},[t("span",{class:"key-indicator__value",innerHTML:s.value},null,8,os),t("span",{class:"key-indicator__text",innerHTML:s.text},null,8,cs)],2))}},f=a("/images/video/hero-video.webm"),ns=s=>(ss("data-v-1b9f1862"),s=s(),ts(),s),_s={class:"key-indicators"},ls=ns(()=>t("video",{class:"key-indicators__bg-video",muted:"",playsinline:"",loop:"",preload:"auto",autoplay:""},[t("source",{src:f,type:"video/webm"}),t("source",{src:f,type:"video/mov"})],-1)),ds={class:"container key-indicators__container"},ms={class:"key-indicators__content"},vs={class:"key-indicators__title"},ps={class:"key-indicators__text"},gs={key:0,class:"key-indicators__indicators"},us={__name:"KeyIndicatorsSection",props:{data:Array},setup(s){return(i,o)=>{var n;const e=rs;return c(),d("div",_s,[ls,t("div",ds,[t("div",ms,[t("p",vs,[r(i.$slots,"title",{},void 0,!0)]),t("p",ps,[r(i.$slots,"text",{},void 0,!0)])]),(n=s.data)!=null&&n.length?(c(),d("div",gs,[(c(!0),d(Z,null,q(s.data,(_,v)=>(c(),u(e,{key:v,value:_.value,text:_.text,size:_.size},null,8,["value","text","size"]))),128))])):G("",!0)])])}}},ot=R(us,[["__scopeId","data-v-1b9f1862"]]),hs=a("/images/social/vk.svg"),ys=a("/images/social/twich.svg"),ks=a("/images/social/r.svg"),$s=a("/images/social/likes.svg"),fs=a("/images/social/pin.svg"),bs=a("/images/social/ok.svg"),Ss=a("/images/social/dz.svg"),js=a("/images/social/youtube.svg"),ws=a("/images/social/tt.svg"),Ls=a("/images/social/x.svg"),xs=a("/images/social/tg.svg"),b=a("/images/partners/ali.png"),S=a("/images/partners/tink.png"),j=a("/images/partners/sber.png"),w=a("/images/partners/alfa.png"),L=a("/images/partners/golden.png"),x=a("/images/partners/magnit.png"),P=a("/images/partners/geek.png"),T=a("/images/partners/gazprom.png"),z=a("/images/partners/lemana.png"),I=a("/images/partners/yandex.png"),Ps={},Ts={class:"partners"},zs=H('<div class="partners__container"><div class="partners__row"><div class="partners__item"><img src="'+b+'" alt=""></div><div class="partners__item"><img src="'+S+'" alt=""></div><div class="partners__item"><img src="'+j+'" alt=""></div><div class="partners__item"><img src="'+w+'" alt=""></div><div class="partners__item"><img src="'+L+'" alt=""></div></div><div class="partners__row"><div class="partners__item"><img src="'+b+'" alt=""></div><div class="partners__item"><img src="'+S+'" alt=""></div><div class="partners__item"><img src="'+j+'" alt=""></div><div class="partners__item"><img src="'+w+'" alt=""></div><div class="partners__item"><img src="'+L+'" alt=""></div></div></div><div class="partners__container partners__container--invert"><div class="partners__row"><div class="partners__item"><img src="'+x+'" alt=""></div><div class="partners__item"><img src="'+P+'" alt=""></div><div class="partners__item"><img src="'+T+'" alt=""></div><div class="partners__item"><img src="'+z+'" alt=""></div><div class="partners__item"><img src="'+I+'" alt=""></div></div><div class="partners__row"><div class="partners__item"><img src="'+x+'" alt=""></div><div class="partners__item"><img src="'+P+'" alt=""></div><div class="partners__item"><img src="'+T+'" alt=""></div><div class="partners__item"><img src="'+z+'" alt=""></div><div class="partners__item"><img src="'+I+'" alt=""></div></div></div>',2),Is=[zs];function Bs(s,i){return c(),d("div",Ts,Is)}const Rs=R(Ps,[["render",Bs]]),Hs={class:"social-section"},Ns={class:"social-section__top"},As={class:"social-section__wrapper"},Cs={class:"container"},Os=H('<div class="social-section__image"><div class="container"><div class="social-logos"><div class="social-logos__list"><div class="social-logos__item"><img class="social-logos__img" src="'+hs+'" alt=""></div><div class="social-logos__item"><img class="social-logos__img" src="'+ys+'" alt=""></div><div class="social-logos__item"><img class="social-logos__img" src="'+ks+'" alt=""></div><div class="social-logos__item"><img class="social-logos__img" src="'+$s+'" alt=""></div><div class="social-logos__item"><img class="social-logos__img" src="'+fs+'" alt=""></div><div class="social-logos__item"><img class="social-logos__img" src="'+bs+'" alt=""></div></div><div class="social-logos__list"><div class="social-logos__item"><img class="social-logos__img" src="'+Ss+'" alt=""></div><div class="social-logos__item"><img class="social-logos__img" src="'+js+'" alt=""></div><div class="social-logos__item"><img class="social-logos__img" src="'+ws+'" alt=""></div><div class="social-logos__item"><img class="social-logos__img" src="'+Ls+'" alt=""></div><div class="social-logos__item"><img class="social-logos__img" src="'+xs+'" alt=""></div></div></div></div></div>',1),Ks={class:"social-section__bottom"},Ms={class:"social-section__wrapper"},Vs={class:"container"},ct={__name:"SocialSection",setup(s){return(i,o)=>(c(),d("div",Hs,[t("div",Ns,[t("div",As,[t("div",Cs,[r(i.$slots,"top")])])]),Os,t("div",Ks,[t("div",Ms,[t("div",Vs,[r(i.$slots,"bottom")]),m(Rs,{class:"social-section__partners"})])])]))}},Es={class:"card-block__container container"},Us=t("div",{class:"card-block__item card-block__item--bg"},null,-1),Ds={class:"card-block__item card-block__item--action-1"},Fs={class:"card-block__item card-block__item--projects projects"},Js={class:"projects__content"},Qs={class:"projects__list"},Ws={class:"projects__item projects__item"},Xs=t("div",{class:"projects__item"},"Эксклюзив",-1),Ys=t("div",{class:"projects__item"},"Лучший проект",-1),Zs={class:"projects__item projects__item--mic"},qs={class:"card-block__item card-block__item--text"},Gs={class:"card-block__item card-block__item--action-2"},st={class:"card-block__item card-block__item--payment"},tt={class:"payment"},rt={__name:"CardBlock",props:{theme:{type:String,default:"dark",validator:s=>["light","dark"].includes(s)}},setup(s){return(i,o)=>{const e=is;return c(),d("div",{class:B(["card-block",`card-block--theme-${s.theme}`])},[t("div",Es,[Us,t("div",Ds,[r(i.$slots,"action-1")]),t("div",Fs,[t("div",Js,[r(i.$slots,"projects")]),t("div",Qs,[t("div",Ws,[m(e,{name:"camera",width:"51",height:"41"})]),Xs,Ys,t("div",Zs,[m(e,{name:"microphone",width:"39",height:"56"})])])]),t("div",qs,[r(i.$slots,"text-block")]),t("div",Gs,[r(i.$slots,"action-2")]),t("div",st,[r(i.$slots,"payment"),t("div",tt,[m(e,{name:"visa",width:"49",height:"17"}),s.theme==="dark"?(c(),u(e,{key:0,name:"mastercard-dark",width:"32",height:"25"})):(c(),u(e,{key:1,name:"mastercard-light",width:"32",height:"25"})),m(e,{name:"mir",width:"61",height:"18"})])])])],2)}}};export{ot as K,ct as _,rt as a,et as b};