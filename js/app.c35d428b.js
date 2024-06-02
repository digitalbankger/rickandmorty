(function(){"use strict";var t={3280:function(t,e,n){var a=n(5130),r=n(6768),o=n(4232);const l={class:"container mx-auto p-10"},s=(0,r.Lk)("h1",{class:"text-5xl font-bold font-mont mb-4"},'Персонажи из "Rick и Morty"',-1),i={class:"mb-4"},u=(0,r.Lk)("option",{value:""},"Любой статус",-1),c=(0,r.Lk)("option",{value:"alive"},"Живые",-1),p=(0,r.Lk)("option",{value:"dead"},"Мертвые",-1),d=(0,r.Lk)("option",{value:"unknown"},"Неизвестно",-1),f=[u,c,p,d],g={key:0,class:"text-red-500 mb-4"},v={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},m={class:"text-xl font-bold mb-2"},b={class:"text-gray-300"},y=(0,r.Lk)("strong",null,"Статус:",-1),x={class:"text-gray-300"},k=(0,r.Lk)("strong",null,"Био. принадлежность:",-1),h=["src"],w={class:"flex flex-row items-center justify-center mt-6"},L=["disabled"],_=["disabled"];function O(t,e,n,u,c,p){return(0,r.uX)(),(0,r.CE)("div",l,[s,(0,r.Lk)("div",i,[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>u.filters.name=t),type:"text",placeholder:"Введите имя",class:"border border-opacity p-3 mr-2 bg-opacity rounded-lg text-sm w-60 font-mont text-gray-400"},null,512),[[a.Jo,u.filters.name]]),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>u.filters.status=t),class:"border border-opacity bg-opacity rounded-lg p-3 mr-2 text-sm w-60 font-mont text-gray-400"},f,512),[[a.u1,u.filters.status]]),(0,r.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>u.applyFilters&&u.applyFilters(...t)),class:"bg-grad text-white px-5 text-sm py-3 rounded-lg font-mont"},"Применить")]),u.message?((0,r.uX)(),(0,r.CE)("p",g,(0,o.v_)(u.message),1)):(0,r.Q3)("",!0),(0,r.Lk)("div",v,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(u.characters,(t=>((0,r.uX)(),(0,r.CE)("div",{key:t.id,class:"char-card p-4"},[(0,r.Lk)("h2",m,(0,o.v_)(t.name),1),(0,r.Lk)("p",b,[y,(0,r.eW)(" "+(0,o.v_)(t.status),1)]),(0,r.Lk)("p",x,[k,(0,r.eW)(" "+(0,o.v_)(t.species),1)]),(0,r.Lk)("img",{src:t.image,alt:"Character Image",class:"w-full h-64 object-cover rounded-xl mt-3"},null,8,h)])))),128))]),(0,r.Lk)("div",w,[(0,r.Lk)("button",{onClick:e[3]||(e[3]=(...t)=>u.prevPage&&u.prevPage(...t)),disabled:1===u.page,class:(0,o.C4)(["bg-opacity text-white px-4 py-2 mr-2 rounded-lg",{"cursor-not-allowed opacity-50":1===u.page}])},"Назад",10,L),(0,r.Lk)("button",{onClick:e[4]||(e[4]=(...t)=>u.nextPage&&u.nextPage(...t)),disabled:!u.hasNextPage,class:(0,o.C4)(["bg-opacity text-white px-4 py-2 rounded-lg",{"cursor-not-allowed opacity-50":!u.hasNextPage}])},"Вперед",10,_)])])}var P=n(144),C=n(5071),j={setup(){const t=(0,P.KR)(""),e=(0,P.KR)([]),n=(0,P.KR)(1),a=(0,P.KR)(!0),o=(0,P.Kh)({name:"",status:""}),l=async()=>{const r={page:n.value,name:o.name,status:o.status};try{const n=await C.A.get("https://rickandmortyapi.com/api/character",{params:r});e.value=n.data.results,a.value=!!n.data.info.next,t.value=""}catch(l){t.value="По вашему запросу ничего не найдено",e.value=[],a.value=!1}},s=()=>{n.value=1,l()},i=()=>{n.value++,l()},u=()=>{n.value>1&&(n.value--,l())};return(0,r.sV)((()=>{l()})),{characters:e,page:n,hasNextPage:a,filters:o,applyFilters:s,nextPage:i,prevPage:u,message:t}}},E=n(1241);const K=(0,E.A)(j,[["render",O]]);var F=K;(0,a.Ef)(F).mount("#app")}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,o){if(!a){var l=1/0;for(c=0;c<t.length;c++){a=t[c][0],r=t[c][1],o=t[c][2];for(var s=!0,i=0;i<a.length;i++)(!1&o||l>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[i])}))?a.splice(i--,1):(s=!1,o<l&&(l=o));if(s){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[a,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,l=a[0],s=a[1],i=a[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(i)var c=i(n)}for(e&&e(a);u<l.length;u++)o=l[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},a=self["webpackChunkrick_and_morty_app"]=self["webpackChunkrick_and_morty_app"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(3280)}));a=n.O(a)})();
//# sourceMappingURL=app.c35d428b.js.map