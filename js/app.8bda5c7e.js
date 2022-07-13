(function(){"use strict";var A={8095:function(A,o,g){var e=g(9242),t=g(3396);function C(A,o,g,e,C,n){const i=(0,t.up)("Navbar"),a=(0,t.up)("Home"),s=(0,t.up)("about-me"),E=(0,t.up)("ProjectPage");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(i),(0,t.Wm)(a),(0,t.Wm)(s),(0,t.Wm)(E)])}var n=g.p+"img/logo-sm.27ad4c9e.svg";const i=A=>((0,t.dD)("data-v-6b2e4fc0"),A=A(),(0,t.Cn)(),A),a=i((()=>(0,t._)("div",{class:"logoSm"},[(0,t._)("img",{src:n,alt:"logo",lazy:""})],-1))),s={class:"navBtns"};function E(A,o,g,e,C,n){const i=(0,t.up)("NavButtons");return(0,t.wg)(),(0,t.iD)("nav",null,[a,(0,t._)("div",s,[(0,t.Wm)(i,{name:"Home",onScroll:n.scrollTo,position:C.scrollPositions[0]},null,8,["onScroll","position"]),(0,t.Wm)(i,{name:"aboutMe",onScroll:n.scrollTo,position:C.scrollPositions[1]},null,8,["onScroll","position"]),(0,t.Wm)(i,{name:"Projects",onScroll:n.scrollTo,position:C.scrollPositions[2]},null,8,["onScroll","position"]),(0,t.Wm)(i,{name:"Contact",onScroll:n.scrollTo,position:C.scrollPositions[3]},null,8,["onScroll","position"])])])}var B=g(7139);function c(A,o,g,e,C,n){return(0,t.wg)(),(0,t.iD)("div",{class:"btn",onClick:o[0]||(o[0]=(...A)=>n.makeActive&&n.makeActive(...A))},[(0,t._)("div",{class:(0,B.C_)(["btnName",this.position.active&&"highlight"])},(0,B.zw)("<")+(0,B.zw)(g.name)+(0,B.zw)("/>"),3),(0,t._)("div",{class:(0,B.C_)(["underline",!this.position.active&&"invisible animate-underline"])},null,2)])}var r={name:"NavButtons",emits:["scroll"],props:{name:String,position:Object},data(){return{}},methods:{makeActive(){this.$emit("scroll",this.position.x,this.position.y,this.position.name)}}},Q=g(89);const l=(0,Q.Z)(r,[["render",c],["__scopeId","data-v-780b0589"]]);var h=l,w={name:"Navbar",components:{NavButtons:h},data(){return{scrollPositions:[{name:"Home",x:0,y:0,active:!0},{name:"aboutMe",x:0,y:700,active:!1},{name:"Projects",x:0,y:1500,active:!1},{name:"Contact",x:0,y:0,active:!1}]}},methods:{scrollTo(A,o,g){this.scrollPositions.forEach(((A,o)=>{A.name==g?this.scrollPositions[o].active=!0:this.scrollPositions[o].active=!1})),console.log("name",g,this.scrollPositions),window.scrollTo(A,o)}}};const I=(0,Q.Z)(w,[["render",E],["__scopeId","data-v-6b2e4fc0"]]);var d=I,u=g.p+"img/mainlogo.4a9d9bfa.svg";const v=A=>((0,t.dD)("data-v-6ab85cde"),A=A(),(0,t.Cn)(),A),m={class:"mainTexts"},R={class:"text"},J=(0,t.Uk)(" Hey "),k=v((()=>(0,t._)("br",null,null,-1))),D=(0,t.Uk)("i'm partha "),p=v((()=>(0,t._)("br",null,null,-1))),f=v((()=>(0,t._)("div",{class:"typing-demo"},"web developer",-1))),b={class:"homeButtons"},M={href:"#aboutMe"},H=v((()=>(0,t._)("div",{class:"mainLogo"},[(0,t._)("img",{src:u,alt:"bigLogo"})],-1)));function Y(A,o,g,e,C,n){const i=(0,t.up)("button-filled"),a=(0,t.up)("button-outline");return(0,t.wg)(),(0,t.iD)("main",null,[(0,t._)("div",m,[(0,t._)("div",R,[J,k,D,p,f,(0,t._)("div",b,[(0,t._)("a",M,[(0,t.Wm)(i,{name:"<AboutMe/>"})]),(0,t.Wm)(a,{name:"<ContactMe/>"})])]),H])])}const S={class:"outer"};function U(A,o,g,e,C,n){return(0,t.wg)(),(0,t.iD)("div",S,[(0,t._)("div",null,(0,B.zw)(g.name),1)])}var G={name:"button-filled",props:{name:String}};const F=(0,Q.Z)(G,[["render",U],["__scopeId","data-v-351fd70a"]]);var T=F;const V={class:"outer"};function P(A,o,g,e,C,n){return(0,t.wg)(),(0,t.iD)("div",V,[(0,t._)("div",null,(0,B.zw)(g.name),1)])}var y={name:"button-outline",props:{name:String}};const K=(0,Q.Z)(y,[["render",P],["__scopeId","data-v-9a3c1894"]]);var O=K,L={name:"Home",components:{ButtonOutline:O,ButtonFilled:T}};const N=(0,Q.Z)(L,[["render",Y],["__scopeId","data-v-6ab85cde"]]);var X=N;const Z=A=>((0,t.dD)("data-v-04783aa2"),A=A(),(0,t.Cn)(),A),x={class:"main"},q=Z((()=>(0,t._)("h1",{class:"heading"},(0,B.zw)("<Projects/>"),-1))),j=Z((()=>(0,t._)("div",{class:"underline"},null,-1)));function z(A,o,g,e,C,n){const i=(0,t.up)("project-card");return(0,t.wg)(),(0,t.iD)("div",x,[q,j,(0,t.Wm)(i)])}var W=g.p+"img/project.fc39fae3.png";const _=A=>((0,t.dD)("data-v-5f0b4cf2"),A=A(),(0,t.Cn)(),A),$={class:"card"},AA={class:"left"},oA={class:"type"},gA={class:"name"},eA={class:"desc"},tA={class:"buttons"},CA=_((()=>(0,t._)("div",{class:"right"},[(0,t._)("img",{src:W,alt:"project image"})],-1)));function nA(A,o,g,e,C,n){const i=(0,t.up)("ButtonFilled"),a=(0,t.up)("button-outline");return(0,t.wg)(),(0,t.iD)("div",$,[(0,t._)("div",AA,[(0,t._)("div",oA,(0,B.zw)(C.project.type),1),(0,t._)("div",gA,(0,B.zw)(C.project.name),1),(0,t._)("div",eA,(0,B.zw)(C.project.description),1),(0,t._)("div",tA,[(0,t.Wm)(i,{name:"Visit Now"}),(0,t.Wm)(a,{name:"View Code"})])]),CA])}var iA={name:"projectCard",components:{ButtonFilled:T,ButtonOutline:O},data(){return{project:{type:"Website",name:"Secure Blink",description:"This is front end project based on Vue.js and Vuex. Where i have i worked on basically in api intigrations and settuing up many tools for the functioning of the website",image:"",githubLink:"",siteLink:""}}}};const aA=(0,Q.Z)(iA,[["render",nA],["__scopeId","data-v-5f0b4cf2"]]);var sA=aA,EA={components:{ProjectCard:sA},name:"ProjectPage",data(){return{project:{name:"",description:"",image:"",link:"",tags:[],date:""}}}};const BA=(0,Q.Z)(EA,[["render",z],["__scopeId","data-v-04783aa2"]]);var cA=BA,rA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAABfCAYAAAB83IwVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATZSURBVHgB7d1BbttGFAbgN5RROFm5N/AR1F0RtLG6U7KxbmDdwF4q2QTZuAa6sW4g3YDeNAa6Yesi6FJH4BG0SgTL4usMKzdyIkoiNSQfZ/4PUOB4af2Y+WeG0hCBNZ3OxdGP3cExgTWKYC8mlA+Hh22lWu/0H7NNxEf61xNmGs4pif65vYoJCkNAC/qpO+gESp0SBf1lKNdiolD/c3N3ezkiyA0BzeHF67ftA6JTYnWxKZTrqSkrDjlJxn/fXkUEO0FAtzBT+OLZs74eKU8VcYfsiHXAw3vmISrAZgjoGmkoDw97pFpnFkOZBX11AwR0hemVKtChZOrln8L3h776Le8Duutip2IxK4rQVz0NqJnCk+fPz/Vix4yUbZIt9rmvehPQkhY7lWJSETGPfeqrTgc0YxPdCb70VScDKrRXlsXpvupMQPfbRHdGrN/R0b0OqysVoNEBdaFXlsWVvtq4gFa8ie6EtK8Sj+8+/BpSwzQmoHVvojuicX1VdEA9W+xUrRF9VVxAHzfRmVUHU3g1JPdVEQHFYkcOXQFGOqw3UvpqbQF1eRPdESL6auUBRa9spJiJh3PmsOoKUElAzQfJvguCM8830Z1QdV8tLaDole6roq9aDSg20b2V9tXFfD78+MdvE7LISkDRK2GF1b5aOKBpKIPgBL0Ssjz21dbsUxhF11MqIFdAsYkORRXtq1sDisUOWJarr2YGNH04A5voUK6Ymd5v2rJ6ElAsdqAuWX1VfdlEp77+/zEB1Mz01ccjVvWy+2ZESp0RgDyTgADkOkJAQTQEFERDQEE0BBREQ0BBNAQURENAQTQEFERDQEE0BBREQ0BBNAQURENAQTQEFERDQEE0BBREQ0BBNAQURENAQTQEFERDQEE0BBREQ0BBNAQURENAQTQEFERDQEE0BBREQ0BBNAQURENAQTQE1K7p8gWWIKD7m5rvV084+eWvD5ffm9eDoh/M960TcUywlwOCQtIv/afkpvX58+jrS6o+/n5prlfpm5/TiylI9Sm9nIJwMUVOCGgOJpSK+c9g9ul615vTlnetR7jHtBgEdDsdxGScMIXLsBWyDPTIvDrdwfGCyNxDda5j3ybIhFs+1puyUiEni/E+odyFCWui6EK/FboCqGOCVTECuuK/y6QW49ZsVvjy03186at0grCmYu+n+E2Lnao99lXz88/dgQ6quR+VeuQxXwM61ckcPizm4S4Xmtbh7vZqRCt91dfFlU9TvJXFTp3SsCrV06PquScVwP0OaqZw5sX7g9lsUvcUbpMnfdXNDiqpV5blSV999aanWHdVBwcal0bQWCdzfE/JKOvucdc5eBjQ+BG08b3SJhcPA5o4gk5ZvxfMyRCh3M2L12/bBwlfNLCvNmcE9aFXlqXJD6+IDmiRhzNgs6YdBkgMaLqJnlASYQovVxMOA6R0UCx2hEgfXqFAj6x8JqCv1rtRv+yVQ90rI0zh8gg4DKh+kYTFTnNIOAyoagT1fhPdFRUfBpQ6gqJXOmj9YYB6V1YFsD2Cmk84TszDGQilX0o6DLAzgqJXQlmHAYUDik10yGLzMCBvQLGJDrl8fRiQ9+GVXTpoZZ9wBD/k+CRr9kZ93Z9wBD9sOQx4ukjCYgeqtu0wQL18NbgmDqbYRAcp/n94JWid/AtxJ0NKr9tivwAAAABJRU5ErkJggg==",QA="data:image/png;base64,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",lA="data:image/png;base64,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",hA="data:image/png;base64,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",wA="data:image/png;base64,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",IA=g.p+"img/my-photo.ace7aad0.png";const dA=A=>((0,t.dD)("data-v-38746dbc"),A=A(),(0,t.Cn)(),A),uA={class:"main",id:"aboutMe"},vA=(0,t.uE)('<img src="'+rA+'" alt="arrow5" class="arrow5" data-v-38746dbc><img src="'+QA+'" alt="arrow4" class="arrow4" data-v-38746dbc><img src="'+lA+'" alt="arrow3" class="arrow3" data-v-38746dbc><img src="'+hA+'" alt="arrow2" class="arrow2" data-v-38746dbc><img src="'+wA+'" alt="arrow1" class="arrow1" data-v-38746dbc><h1 class="heading" data-v-38746dbc>&lt;AboutMe /&gt;</h1><div class="underline" data-v-38746dbc></div>',7),mA={class:"content"},RA=dA((()=>(0,t._)("div",{class:"left"},[(0,t._)("img",{src:IA,alt:"my image"})],-1))),JA={class:"right"},kA=(0,t.uE)('<div class="social" data-v-38746dbc><h2 data-v-38746dbc>follow my work on</h2><a data-v-38746dbc><svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="60px" height="60px" data-v-38746dbc><path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" data-v-38746dbc></path></svg></a><a data-v-38746dbc><svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="60px" height="60px" data-v-38746dbc><path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z" data-v-38746dbc></path></svg></a><a data-v-38746dbc><svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="60px" height="60px" data-v-38746dbc><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" data-v-38746dbc></path></svg></a><a data-v-38746dbc><svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="60px" height="60px" data-v-38746dbc><path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z" data-v-38746dbc></path></svg></a></div>',1);function DA(A,o,g,e,C,n){return(0,t.wg)(),(0,t.iD)("div",uA,[vA,(0,t._)("div",mA,[RA,(0,t._)("div",JA,[(0,t._)("h2",null,(0,B.zw)(C.heading),1),(0,t._)("p",null,(0,B.zw)(C.firstLine),1),(0,t._)("p",null,(0,B.zw)(C.secondLine),1),kA])])])}var pA={name:"about-me",data(){return{heading:"Hello Everyone",firstLine:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",secondLine:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}}};const fA=(0,Q.Z)(pA,[["render",DA],["__scopeId","data-v-38746dbc"]]);var bA=fA,MA={name:"App",components:{Navbar:d,Home:X,ProjectPage:cA,AboutMe:bA}};const HA=(0,Q.Z)(MA,[["render",C]]);var YA=HA;(0,e.ri)(YA).mount("#app")}},o={};function g(e){var t=o[e];if(void 0!==t)return t.exports;var C=o[e]={exports:{}};return A[e](C,C.exports,g),C.exports}g.m=A,function(){var A=[];g.O=function(o,e,t,C){if(!e){var n=1/0;for(E=0;E<A.length;E++){e=A[E][0],t=A[E][1],C=A[E][2];for(var i=!0,a=0;a<e.length;a++)(!1&C||n>=C)&&Object.keys(g.O).every((function(A){return g.O[A](e[a])}))?e.splice(a--,1):(i=!1,C<n&&(n=C));if(i){A.splice(E--,1);var s=t();void 0!==s&&(o=s)}}return o}C=C||0;for(var E=A.length;E>0&&A[E-1][2]>C;E--)A[E]=A[E-1];A[E]=[e,t,C]}}(),function(){g.n=function(A){var o=A&&A.__esModule?function(){return A["default"]}:function(){return A};return g.d(o,{a:o}),o}}(),function(){g.d=function(A,o){for(var e in o)g.o(o,e)&&!g.o(A,e)&&Object.defineProperty(A,e,{enumerable:!0,get:o[e]})}}(),function(){g.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){g.o=function(A,o){return Object.prototype.hasOwnProperty.call(A,o)}}(),function(){g.p="/"}(),function(){var A={143:0};g.O.j=function(o){return 0===A[o]};var o=function(o,e){var t,C,n=e[0],i=e[1],a=e[2],s=0;if(n.some((function(o){return 0!==A[o]}))){for(t in i)g.o(i,t)&&(g.m[t]=i[t]);if(a)var E=a(g)}for(o&&o(e);s<n.length;s++)C=n[s],g.o(A,C)&&A[C]&&A[C][0](),A[C]=0;return g.O(E)},e=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=g.O(void 0,[998],(function(){return g(8095)}));e=g.O(e)})();
//# sourceMappingURL=app.8bda5c7e.js.map