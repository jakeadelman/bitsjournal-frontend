(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"8x5e":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("YFqc"),o=n.n(i),l=n("nOHt"),s=n("vOnD"),c=n("1MVt"),u=n("tdIn"),m=(n("V2I+"),n("6S3F")),d=n("fdFK"),p=r.a.createElement,f=n("p46w");t.a=Object(l.withRouter)((function(e){var t=e.router,n=f.get("isAuth");console.log(n),console.log(t.pathname);var a="true"===n;return p(s.a,{theme:Object(c.a)(!1)},a?p(v,null,p(u.a,null),p(g,null,p(h,null,p(m.a,null)),p(h,null,p(m.a,null))),p(o.a,{prefetch:!0,href:"/settings"},p(w,{className:"/settings"===t.pathname?"is-active":""},"settings")),p(o.a,{prefetch:!0,href:"/logout"},p(w,null,"logout"))):p(v,null,p(u.a,null),p(g,null,p(h,null,p(m.a,null)),p(h,null,p(m.a,null))),p(o.a,{prefetch:!0,href:"/login"},p(w,{className:"/login"===t.pathname?"is-active":""},"login")),p(o.a,{prefetch:!0,href:"/register"},p(w,{className:"/register"===t.pathname?"is-active":""},"register"))))}));s.c.div.withConfig({displayName:"Header__LogoWrap",componentId:"sc-19c2vr5-0"})([""]),s.c.div.withConfig({displayName:"Header__TempDiv",componentId:"sc-19c2vr5-1"})(["margin:auto;"]),s.c.div.withConfig({displayName:"Header__LinksWrap",componentId:"sc-19c2vr5-2"})(["margin-right:0;margin-left:auto;"]);var g=s.c.div.withConfig({displayName:"Header__DatePickersWrap",componentId:"sc-19c2vr5-3"})(["margin-left:0;margin-right:auto;display:flex;flex-direction:row;"]),h=s.c.div.withConfig({displayName:"Header__DatePickerWrap",componentId:"sc-19c2vr5-4"})(["margin:auto;"]),w=s.c.div.withConfig({displayName:"Header__StyledLink",componentId:"sc-19c2vr5-5"})(["",";",";margin:0;color:",";color:#fff;text-transform:capitalize;position:relative;cursor:pointer;"],d.a,d.b,(function(e){return e.theme.mutedText})),v=s.c.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-19c2vr5-6"})(["position:sticky;z-index:10;top:0;display:flex;align-items:stretch;border-bottom:2px solid #eee;height:55px;padding:0 0vw;font-weight:700;background-color:",";user-select:none;background-color:#212527;@media (max-width:425px){margin-bottom:16px;height:40px;}@media (max-width:768px){padding:0;}"],(function(e){return e.theme.foreground}));s.c.div.withConfig({displayName:"Header__StyledLinkFirst",componentId:"sc-19c2vr5-7"})(["",";",";margin:0;color:",";color:#fff;text-transform:capitalize;position:relative;cursor:pointer;::after{",';content:"";position:absolute;left:0;right:0;bottom:0;opacity:0;border-bottom:1px solid ',";}:hover{opacity:1;color:",";}:hover::after{opacity:1;border-bottom:1px solid ",";}&.active::after{left:0;right:0;bottom:0;border-bottom:3px solid ",";}font-weight:700;letter-spacing:0.05em;font-size:14px;margin-left:auto;"],d.a,d.b,(function(e){return e.theme.mutedText}),Object(d.d)("opacity","border-bottom-width"),(function(e){return e.theme.accent}),(function(e){return e.theme.accent}),(function(e){return e.theme.accent}),(function(e){return e.theme.accent}))},Cp4z:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n("Dsvi")}])},Dsvi:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var a=n("q1tI"),r=n.n(a),i=n("3aVm"),o=(n("8x5e"),n("h4VS")),l=n("oJmH"),s=n("lTCR"),c=n.n(s),u=n("5IWx"),m=n("teKy"),d=n("4Us4"),p=n("wC3/"),f=n("vOnD"),g=n("nOHt"),h=n.n(g),w=r.a.createElement;function v(){var e=Object(o.a)(["\n          mutation register(\n            $firstName: String!\n            $lastName: String!\n            $email: String!\n            $password: String!\n          ) {\n            register(\n              data: {\n                firstName: $firstName\n                lastName: $lastName\n                email: $email\n                password: $password\n              }\n            ) {\n              id\n            }\n          }\n        "]);return v=function(){return e},e}var x=n("p46w");function b(){return w(l.ApolloConsumer,null,(function(e){return w(p.a,null,w(y,{onSubmit:function(t){return function(e,t){e.preventDefault();var n=e.target,a=new window.FormData(n),r=a.get("firstName"),i=a.get("lastName"),o=a.get("email"),l=a.get("password");n.reset(),t.mutate({mutation:c()(v()),variables:{firstName:r,lastName:i,email:o,password:l}}).then((function(e){e.data?(x.set("uid",e.data.register.id),h.a.push("/signup")):console.log("there was an error")}))}(t,e)}},w(N,null,w(m.a,null,"firstname"),w(u.a,{placeholder:"",name:"firstName",type:"text",required:!0})),w(N,null,w(m.a,null,"lastname"),w(u.a,{placeholder:"",name:"lastName",type:"text",required:!0})),w(N,null,w(m.a,null,"email"),w(u.a,{placeholder:"",name:"email",type:"text",required:!0})),w(N,null,w(m.a,null,"password"),w(u.a,{placeholder:"",name:"password",type:"text",required:!0})),w(_,{type:"submit"},"Submit")))}))}var y=f.c.form.withConfig({displayName:"RegisterForm__StyledForm",componentId:"uh5rr5-0"})(["display:flex;flex-direction:column;align-items:flex-start;",";"],(function(e){return e.loading&&"filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none"})),_=Object(f.c)(d.a).withConfig({displayName:"RegisterForm__SubmitButton",componentId:"uh5rr5-1"})(["align-self:flex-end;margin-right:0px;margin-left:auto;"]),N=f.c.div.withConfig({displayName:"RegisterForm__InputWrapper",componentId:"uh5rr5-2"})(["position:relative;margin-bottom:24px;width:100%;"]),I=n("1MVt"),C=n("IIFv"),F=n("YFqc"),O=n.n(F),S=n("O2ls"),k=r.a.createElement,q=n("p46w");function D(){var e="true"===q.get("isAuth");if(console.log(e),!e)return k(i.a,null,k(f.a,{theme:Object(I.a)(!1)},k(H,null,k(S.HeaderLogoDiv,null,k(C.a,null)),k(b,null),k(S.Annotation1,null,"Back to ",k(O.a,{href:"/login"},"login"),"."))));h.a.push("/dashboard")}var H=f.c.div.withConfig({displayName:"register__Wrapper",componentId:"sc-128t810-0"})(["display:flex;flex-direction:column;align-items:flex-start;margin:0 10vw;@media (max-width:1024px){margin:0 5vw;}@media (max-width:768px){display:block;margin:0;}"])},IIFv:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("vOnD"),o=n("YFqc"),l=n.n(o),s=n("fdFK"),c=r.a.createElement;t.a=function(){return c(u,null,c(l.a,{prefetch:!0,href:"/"},c("span",null,"\u20bfitsjournal")))};var u=i.c.div.withConfig({displayName:"LogoDark",componentId:"kfhi11-0"})([""," margin-right:0;font-size:26px;font-weight:500;color:",";text-decoration:none;@media (max-width:425px){padding:0 8px 0 16px;font-size:19px;}"],s.a,(function(e){return e.theme.normalText}))},O2ls:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W})),n.d(t,"HeaderLogoDiv",(function(){return $})),n.d(t,"Annotation1",(function(){return T}));var a=n("q1tI"),r=n.n(a),i=n("3aVm"),o=(n("8x5e"),n("IIFv")),l=n("vOnD"),s=n("1MVt"),c=n("o0o1"),u=n.n(c),m=n("h4VS"),d=n("HaE+"),p=n("oJmH"),f=n("lTCR"),g=n.n(f),h=n("nOHt"),w=n.n(h),v=n("aLZG"),x=(n("q4sD"),n("wC3/")),b=n("5IWx"),y=n("teKy"),_=n("4Us4"),N=r.a.createElement;function I(){var e=Object(m.a)(["\n        mutation login($email: String!, $password: String!) {\n          login(email: $email, password: $password)\n        }\n      "]);return I=function(){return e},e}var C=n("p46w"),F=function(){function e(){return(e=Object(d.a)(u.a.mark((function e(t,n){var a,i,o,l,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target,i=new window.FormData(a),o=i.get("email"),l=i.get("password"),a.reset(),s=n.mutate({mutation:g()(I()),variables:{email:o,password:l}}),console.log("LOGGING IN"),e.next=10,s;case 10:if(c=(c=e.sent).data.login,1!=("true"==c)){e.next=18;break}C.set("isAuth","true"),w.a.push("/dashboard"),e.next=20;break;case 18:return r(!0),e.abrupt("return");case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var t=Object(a.useState)(!1),n=t[0],r=t[1];return N(p.ApolloConsumer,null,(function(t){return N(x.a,null,N(O,{onSubmit:function(n){return function(t,n){return e.apply(this,arguments)}(n,t)}},N(k,null,N(y.a,null,"email"),N(b.a,{placeholder:"",name:"email",type:"text",required:!0})),N(k,null,N(y.a,null,"password"),N(b.a,{placeholder:"",name:"password",type:"text",required:!0})),N("div",{style:{display:"flex",width:"100%"}},N(S,{type:"submit"},"Submit")),1==n?N("div",{className:"login-alert"},N(v.a,{color:"secondary",isOpen:1==n},"Wrong login credentials")):null))}))},O=l.c.form.withConfig({displayName:"LoginForm__StyledForm",componentId:"zc9mcq-0"})(["display:flex;flex-direction:column;align-items:flex-start;",";"],(function(e){return e.loading&&"filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none"})),S=Object(l.c)(_.a).withConfig({displayName:"LoginForm__SubmitButton",componentId:"zc9mcq-1"})(["align-self:flex-end;margin-right:0px;margin-left:auto;"]),k=l.c.div.withConfig({displayName:"LoginForm__InputWrapper",componentId:"zc9mcq-2"})(["position:relative;margin-bottom:24px;width:100%;"]),q=n("fdFK"),D=n("YFqc"),H=n.n(D),j=r.a.createElement,L=n("p46w");function W(){var e="true"===L.get("isAuth");if(console.log(e),!e)return j(i.a,null,j(l.a,{theme:Object(s.a)(!1)},j(z,null,j($,null,j(o.a,null)),j(F,null),j(T,null,"BitsJournal is an automated trade journal for Bitmex."," ",j(H.a,{href:"/register"},"Register")," for our free beta or view demos on YouTube."))));w.a.push("/dashboard")}var $=l.c.div.withConfig({displayName:"login__HeaderLogoDiv",componentId:"ljat1g-0"})(["margin:15px auto;margin-top:20vh;"]),z=l.c.div.withConfig({displayName:"login__Wrapper",componentId:"ljat1g-1"})(["display:flex;flex-direction:column;align-items:flex-start;margin:0 10vw;@media (max-width:1024px){margin:0 5vw;}@media (max-width:768px){display:block;margin:0;}"]),T=l.c.div.withConfig({displayName:"login__Annotation1",componentId:"ljat1g-2"})(["margin:11px auto;",";display:block;margin-bottom:8px;font-weight:500;text-transform:none;max-width:18vw;text-align:center;color:",";"],q.c,(function(e){return e.theme.mutedText}))}},[["Cp4z",1,2,3,0,4,5,7,6,8,9,10]]]);