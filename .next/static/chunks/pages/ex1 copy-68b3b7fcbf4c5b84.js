(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[517],{7200:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(66),i=n(9332),l=n(3321),s=n(3841),o=(n(4142),n(2986)),u=n(7357),c=n(6886),d=n(5861),m=n(7906),p=n(295),b=n(3252),h=n(2882),x=n(3184),g=n(3816),f=n(629),v=n(1903),j=(n(8464),n(5893));function y(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw i}}}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function S(e){var t,n=0,a=y(e);try{for(a.s();!(t=a.n()).done;){t.value>0&&(n+=1)}}catch(r){a.e(r)}finally{a.f()}return 0==n?0:(e.reduce((function(e,t){return e+t}))/n).toFixed()}t.default=function(e){var t=(0,a.useState)(""),n=t[0],r=t[1],o=(0,a.useState)(""),y=o[0],Z=o[1],N=(0,a.useState)(""),_=N[0],k=N[1],L=(0,a.useState)(""),E=L[0],I=L[1],T=(0,a.useState)(0),B=T[0],D=T[1],z=(0,a.useState)(0),M=z[0],O=z[1],A=(0,a.useState)(0),F=A[0],R=A[1],U=(0,a.useState)(0),H=U[0],X=U[1],G=(0,a.useState)(0),V=G[0],W=G[1],q=(0,a.useState)(0),$=q[0],J=q[1],K=(0,a.useState)(0),Q=K[0],Y=K[1],ee=(0,a.useState)(0),te=ee[0],ne=ee[1],ae=(0,a.useState)(0),re=ae[0],ie=ae[1],le=(0,a.useState)(0),se=le[0],oe=le[1],ue=(0,a.useState)(0),ce=ue[0],de=ue[1],me=(0,a.useState)(0),pe=me[0],be=me[1],he=(0,a.useState)(0),xe=he[0],ge=he[1],fe=(0,a.useState)();fe[0],fe[1],(0,a.useEffect)((function(){var e=S([B,M,F,H,V,$,Q]);ne(e)}),[B,M,F,H,V,$,Q]),(0,a.useEffect)((function(){var e=S([re,se,ce]);be(e)}),[re,se,ce]),(0,a.useEffect)((function(){var e=S([1*te,1*pe]);ge(e)}),[te,pe]);var ve=function(e){switch(e.target.name){case"name":r(e.target.value);break;case"result_class":k(e.target.value);break;case"result_comment":I(e.target.value)}},je=function(e,t){switch(e.target.name){case"sub1":D(t);break;case"sub2":O(t);break;case"sub3":R(t);break;case"sub4":X(t);break;case"sub5":W(t);break;case"sub6":J(t);break;case"sub7":Y(t);break;case"sub8":ie(t);break;case"sub9":oe(t);break;case"sub10":de(t)}},ye=function(e){switch(e.target.name){case"sub1":D(""===e.target.value?"":Number(e.target.value));break;case"sub2":O(""===e.target.value?"":Number(e.target.value));break;case"sub3":R(""===e.target.value?"":Number(e.target.value));break;case"sub4":X(""===e.target.value?"":Number(e.target.value));break;case"sub5":W(""===e.target.value?"":Number(e.target.value));break;case"sub6":J(""===e.target.value?"":Number(e.target.value));break;case"sub7":Y(""===e.target.value?"":Number(e.target.value));break;case"sub8":ie(""===e.target.value?"":Number(e.target.value));break;case"sub9":oe(""===e.target.value?"":Number(e.target.value));break;case"sub10":de(""===e.target.value?"":Number(e.target.value))}},Ze=function(){B<0?(D(0),console.log("blurSub1=0")):B>100?(D(100),console.log("blurSub1=100")):M<0?(O(0),console.log("blurSub2=0")):M>100&&(O(100),console.log("blurSub2=100"))};return(0,j.jsxs)(C,{children:[(0,j.jsx)("div",{className:"Header",children:(0,j.jsx)("h1",{children:"RITE DIAGNOSTIC TEST (EX1)"})}),(0,j.jsxs)("div",{className:"info",children:[(0,j.jsxs)("div",{className:"infoDiv",children:[(0,j.jsx)(s.Z,{className:"infoLabel",htmlFor:"component-simple",children:"Name"}),(0,j.jsx)(i.Z,{className:"infoInput",name:"name",id:"name",onChange:ve,value:n,placeholder:"Enter Name."}),(0,j.jsx)(s.Z,{className:"infoLabel",htmlFor:"component-simple",children:"School/Grade"}),(0,j.jsx)(i.Z,{className:"infoInput",id:"school",onChange:function(e){Z(e.target.value)},value:y,placeholder:"Enter School/Grade."})]}),(0,j.jsx)(l.Z,{className:"btnSave",onClick:function(){fetch("api/save_ex1",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,school:y,result01:B,result02:M,result03:F,result04:H,result05:V,result06:$,result07:Q,result08:re,result09:se,result10:ce,result_class:_,comment:E})}).then((function(e){return function(e){200==e.status?(alert("Complete  Save!"),window.location.href="/"):alert(e.message)}(e)})).then((function(e){console.log(e)}))},children:"\uc800\uc7a5"})]}),(0,j.jsx)("div",{className:"Subject",children:(0,j.jsxs)(u.Z,{margin:4,children:[(0,j.jsx)(s.Z,{className:"subjectLabel",htmlFor:"component-simple",children:"Phonnics"}),(0,j.jsx)(d.Z,{id:"input-slider",gutterBottom:!0,children:"1) Uppercase/Lowercase"}),(0,j.jsxs)(c.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,j.jsx)(c.ZP,{item:!0}),(0,j.jsx)(c.ZP,{item:!0,xs:!0,children:(0,j.jsx)(w,{valueLabelDisplay:"auto",value:"number"==typeof B?B:0,onChange:je,"aria-labelledby":"input-slider",color:"primary",id:"sub1",name:"sub1"})}),(0,j.jsx)(c.ZP,{item:!0,children:(0,j.jsx)(i.Z,{name:"sub1",value:B,size:"small",onChange:ye,onBlur:Ze,inputProps:{step:1,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]}),(0,j.jsx)(d.Z,{id:"input-slider",gutterBottom:!0,children:"2) Phonetic"}),(0,j.jsxs)(c.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,j.jsx)(c.ZP,{item:!0}),(0,j.jsx)(c.ZP,{item:!0,xs:!0,children:(0,j.jsx)(w,{valueLabelDisplay:"auto",value:"number"==typeof M?M:0,onChange:je,"aria-labelledby":"input-slider",name:"sub2"})}),(0,j.jsx)(c.ZP,{item:!0,children:(0,j.jsx)(i.Z,{name:"sub2",value:M,size:"small",onChange:ye,onBlur:Ze,inputProps:{step:1,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]}),(0,j.jsx)(d.Z,{id:"input-slider",gutterBottom:!0,children:"3) Short vowel"}),(0,j.jsxs)(c.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,j.jsx)(c.ZP,{item:!0}),(0,j.jsx)(c.ZP,{item:!0,xs:!0,children:(0,j.jsx)(w,{valueLabelDisplay:"auto",value:"number"==typeof F?F:0,onChange:je,"aria-labelledby":"input-slider",name:"sub3"})}),(0,j.jsx)(c.ZP,{item:!0,children:(0,j.jsx)(i.Z,{name:"sub3",value:F,size:"small",onChange:ye,onBlur:Ze,inputProps:{step:1,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]}),(0,j.jsx)(d.Z,{id:"input-slider",gutterBottom:!0,children:"4) Long vowel"}),(0,j.jsxs)(c.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,j.jsx)(c.ZP,{item:!0}),(0,j.jsx)(c.ZP,{item:!0,xs:!0,children:(0,j.jsx)(w,{valueLabelDisplay:"auto",value:"number"==typeof H?H:0,onChange:je,"aria-labelledby":"input-slider",name:"sub4"})}),(0,j.jsx)(c.ZP,{item:!0,children:(0,j.jsx)(i.Z,{name:"sub4",value:H,size:"small",onChange:ye,onBlur:Ze,inputProps:{step:1,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]}),(0,j.jsx)(d.Z,{id:"input-slider",gutterBottom:!0,children:"5) Double consonant"}),(0,j.jsxs)(c.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,j.jsx)(c.ZP,{item:!0}),(0,j.jsx)(c.ZP,{item:!0,xs:!0,children:(0,j.jsx)(w,{valueLabelDisplay:"auto",value:"number"==typeof V?V:0,onChange:je,"aria-labelledby":"input-slider",name:"sub5"})}),(0,j.jsx)(c.ZP,{item:!0,children:(0,j.jsx)(i.Z,{name:"sub5",value:V,size:"small",onChange:ye,onBlur:Ze,inputProps:{step:1,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]}),(0,j.jsx)(d.Z,{id:"input-slider",gutterBottom:!0,children:"6) Vowel"}),(0,j.jsxs)(c.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,j.jsx)(c.ZP,{item:!0}),(0,j.jsx)(c.ZP,{item:!0,xs:!0,children:(0,j.jsx)(w,{valueLabelDisplay:"auto",value:"number"==typeof $?$:0,onChange:je,"aria-labelledby":"input-slider",name:"sub6"})}),(0,j.jsx)(c.ZP,{item:!0,children:(0,j.jsx)(i.Z,{name:"sub6",value:$,size:"small",onChange:ye,onBlur:Ze,inputProps:{step:1,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]}),(0,j.jsx)(d.Z,{id:"input-slider",gutterBottom:!0,children:"7) Sight words"}),(0,j.jsxs)(c.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,j.jsx)(c.ZP,{item:!0}),(0,j.jsx)(c.ZP,{item:!0,xs:!0,children:(0,j.jsx)(w,{valueLabelDisplay:"auto",value:"number"==typeof Q?Q:0,onChange:je,"aria-labelledby":"input-slider",name:"sub7"})}),(0,j.jsx)(c.ZP,{item:!0,children:(0,j.jsx)(i.Z,{name:"sub7",value:Q,size:"small",onChange:ye,onBlur:Ze,inputProps:{step:1,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]}),(0,j.jsxs)("div",{className:"overallDiv",children:[(0,j.jsx)(s.Z,{className:"overallLabel",htmlFor:"component-simple",children:"Overall\xa0:\xa0"}),(0,j.jsx)(s.Z,{className:"overallLabel",htmlFor:"component-simple",name:"overall1",children:te})]}),(0,j.jsx)(s.Z,{className:"subjectLabel",htmlFor:"component-simple",children:"Language"}),(0,j.jsx)(d.Z,{id:"input-slider",gutterBottom:!0,children:"1) Theme words"}),(0,j.jsxs)(c.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,j.jsx)(c.ZP,{item:!0}),(0,j.jsx)(c.ZP,{item:!0,xs:!0,children:(0,j.jsx)(P,{valueLabelDisplay:"auto",value:"number"==typeof re?re:0,onChange:je,"aria-labelledby":"input-slider",color:"primary",id:"sub8",name:"sub8"})}),(0,j.jsx)(c.ZP,{item:!0,children:(0,j.jsx)(i.Z,{name:"sub8",value:re,size:"small",onChange:ye,onBlur:Ze,inputProps:{step:1,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]}),(0,j.jsx)(d.Z,{id:"input-slider",gutterBottom:!0,children:"2) Simple directions"}),(0,j.jsxs)(c.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,j.jsx)(c.ZP,{item:!0}),(0,j.jsx)(c.ZP,{item:!0,xs:!0,children:(0,j.jsx)(P,{valueLabelDisplay:"auto",value:"number"==typeof se?se:0,onChange:je,"aria-labelledby":"input-slider",name:"sub9"})}),(0,j.jsx)(c.ZP,{item:!0,children:(0,j.jsx)(i.Z,{name:"sub9",value:se,size:"small",onChange:ye,onBlur:Ze,inputProps:{step:1,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]}),(0,j.jsx)(d.Z,{id:"input-slider",gutterBottom:!0,children:"3) Fluency"}),(0,j.jsxs)(c.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,j.jsx)(c.ZP,{item:!0}),(0,j.jsx)(c.ZP,{item:!0,xs:!0,children:(0,j.jsx)(P,{valueLabelDisplay:"auto",value:"number"==typeof ce?ce:0,onChange:je,"aria-labelledby":"input-slider",name:"sub10"})}),(0,j.jsx)(c.ZP,{item:!0,children:(0,j.jsx)(i.Z,{name:"sub10",value:ce,size:"small",onChange:ye,onBlur:Ze,inputProps:{step:1,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]}),(0,j.jsxs)("div",{className:"overallDiv",children:[(0,j.jsx)(s.Z,{className:"overallLabel",htmlFor:"component-simple",children:"Overall\xa0:\xa0"}),(0,j.jsx)(s.Z,{className:"overallLabel",htmlFor:"component-simple",name:"overall2",children:pe})]})]})}),(0,j.jsx)("div",{className:"Result",children:(0,j.jsx)(h.Z,{component:f.Z,children:(0,j.jsxs)(m.Z,{sx:{minWidth:"100%"},"aria-label":"simple table",children:[(0,j.jsx)(x.Z,{children:(0,j.jsxs)(g.Z,{sx:{"& th":{fontSize:"1.25rem",fontWeight:"bold"}},children:[(0,j.jsx)(b.Z,{align:"center",width:"15%",children:"Phonnics"}),(0,j.jsx)(b.Z,{align:"center",width:"15%",children:"Language"}),(0,j.jsx)(b.Z,{align:"center",width:"15%",children:"Overall"}),(0,j.jsx)(b.Z,{align:"center",width:"15%",children:"Class"}),(0,j.jsx)(b.Z,{align:"center",width:"40%",children:"Comment"})]})}),(0,j.jsx)(p.Z,{children:(0,j.jsxs)(g.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,j.jsx)(b.Z,{align:"center",children:(0,j.jsx)(s.Z,{className:"resultLabel",name:"result_phonnics",children:te})}),(0,j.jsx)(b.Z,{align:"center",children:(0,j.jsx)(s.Z,{name:"result_language",className:"resultLabel",children:pe})}),(0,j.jsx)(b.Z,{align:"center",children:(0,j.jsx)(s.Z,{name:"result_overall",className:"resultLabel",children:xe})}),(0,j.jsx)(b.Z,{align:"center",children:(0,j.jsx)(i.Z,{name:"result_class",className:"resultLabel",inputProps:{style:{textAlign:"center"}},onChange:ve,value:_})}),(0,j.jsx)(b.Z,{align:"center",children:(0,j.jsx)(v.Z,{name:"result_comment",fullWidth:!0,id:"outlined-multiline-static",multiline:!0,rows:4,onChange:ve,value:E})})]})})]})})})]})};var w=(0,r.ZP)(o.ZP).withConfig({displayName:"ex1copy__PrettoSlider",componentId:"sc-11iwuf5-0"})({color:"#97DECE",height:8,"& .MuiSlider-track":{border:"none"},"& .MuiSlider-thumb":{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor","&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":{boxShadow:"inherit"},"&:before":{display:"none"}},"& .MuiSlider-valueLabel":{lineHeight:1.2,fontSize:12,background:"unset",padding:0,width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"#62B6B7",transformOrigin:"bottom left",transform:"translate(50%, -100%) rotate(-45deg) scale(0)","&:before":{display:"none"},"&.MuiSlider-valueLabelOpen":{transform:"translate(50%, -100%) rotate(-45deg) scale(1)"},"& > *":{transform:"rotate(45deg)"}}}),P=(0,r.ZP)(o.ZP).withConfig({displayName:"ex1copy__PrettoSlider2",componentId:"sc-11iwuf5-1"})({color:"#1160AA",height:8,"& .MuiSlider-track":{border:"none"},"& .MuiSlider-thumb":{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor","&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":{boxShadow:"inherit"},"&:before":{display:"none"}},"& .MuiSlider-valueLabel":{lineHeight:1.2,fontSize:12,background:"unset",padding:0,width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"#161D6E",transformOrigin:"bottom left",transform:"translate(50%, -100%) rotate(-45deg) scale(0)","&:before":{display:"none"},"&.MuiSlider-valueLabelOpen":{transform:"translate(50%, -100%) rotate(-45deg) scale(1)"},"& > *":{transform:"rotate(45deg)"}}}),C=r.ZP.div.withConfig({displayName:"ex1copy__Info",componentId:"sc-11iwuf5-3"})(["height:100%;max-width:100%;margin:0 auto;.btnSave{margin-top:10px;}.Header{display:flex;align-items:center;justify-content:center;font-size:20pt;}.info{display:flex;flex-direction:column;align-items:flex-end;margin-right:35px;}.infoDiv{width:150px;}.infoInput{display:flex;margin-bottom:5px;}.subjectLabel{display:flex;text-align:left;font-size:40px;font-weight:bold;color:black;text-decoration:underline;text-underline-position:under;margin-bottom:20px;}.overallLabel{display:flex;font-size:27px;font-weight:bold;color:black;text-decoration:underline;text-underline-position:under;margin-bottom:20px;margin-top:20px;}.overallDiv{display:flex;align-items:flex-end;justify-content:flex-end;}.resultLabel{display:flex;font-size:30px;font-weight:bold;color:black;margin-bottom:20px;margin-top:20px;justify-content:center;text-align:center;}"])},4142:function(e,t,n){"use strict";n.r(t);n(7294);var a=n(66),r=n(5893);t.default=function(e){return(0,r.jsx)(i,{children:(0,r.jsx)("div",{children:(0,r.jsx)("h1",{children:"RITE EXAMPLE TEST"})})})};var i=a.ZP.div.withConfig({displayName:"ex_header__Main",componentId:"sc-4zij6p-0"})(["width:auto;display:flex;flex-direction:column;justify-content:center;align-items:center;.btnSave{margin-top:10px;}"])},411:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ex1 copy",function(){return n(7200)}])},738:function(e){(()=>{"use strict";"undefined"!==typeof __nccwpck_require__&&(__nccwpck_require__.ab="//");var t={};(()=>{var e=t;e.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var a={},i=t||{},s=e.split(r),o=i.decode||n,u=0;u<s.length;u++){var c=s[u],d=c.indexOf("=");if(!(d<0)){var m=c.substr(0,d).trim(),p=c.substr(++d,c.length).trim();'"'==p[0]&&(p=p.slice(1,-1)),void 0==a[m]&&(a[m]=l(p,o))}}return a},e.serialize=function(e,t,n){var r=n||{},l=r.encode||a;if("function"!==typeof l)throw new TypeError("option encode is invalid");if(!i.test(e))throw new TypeError("argument name is invalid");var s=l(t);if(s&&!i.test(s))throw new TypeError("argument val is invalid");var o=e+"="+s;if(null!=r.maxAge){var u=r.maxAge-0;if(isNaN(u)||!isFinite(u))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(u)}if(r.domain){if(!i.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!i.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if("function"!==typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}r.httpOnly&&(o+="; HttpOnly");r.secure&&(o+="; Secure");if(r.sameSite){switch("string"===typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return o};var n=decodeURIComponent,a=encodeURIComponent,r=/; */,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function l(e,t){try{return t(e)}catch(t){return e}}})(),e.exports=t})()},8464:function(e,t,n){"use strict";const a="x-prerender-revalidate";const r="__prerender_bypass";const i="__next_preview_data";Symbol(i);const l=Symbol(r);class s extends Error{constructor(e,t){super(t),this.statusCode=e}}}},function(e){e.O(0,[62,915,288,321,774,888,179],(function(){return t=411,e(e.s=t);var t}));var t=e.O();_N_E=t}]);