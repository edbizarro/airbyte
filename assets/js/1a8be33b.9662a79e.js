"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[24238],{84234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="Review the sync summary",c={unversionedId:"cloud/managing-airbyte-cloud/review-sync-summary",id:"cloud/managing-airbyte-cloud/review-sync-summary",title:"Review the sync summary",description:"The sync summary displays information about synced data, such as the amount of data moved, the number of records read and committed, and the total sync time. Reviewing this summary can help you monitor the sync performance and identify any potential issues.",source:"@site/../docs/cloud/managing-airbyte-cloud/review-sync-summary.md",sourceDirName:"cloud/managing-airbyte-cloud",slug:"/cloud/managing-airbyte-cloud/review-sync-summary",permalink:"/cloud/managing-airbyte-cloud/review-sync-summary",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/cloud/managing-airbyte-cloud/review-sync-summary.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Manage credits",permalink:"/cloud/managing-airbyte-cloud/manage-credits"},next:{title:"Manage notifications",permalink:"/cloud/managing-airbyte-cloud/manage-airbyte-cloud-notifications"}},s={},l=[{value:"Sync summary",id:"sync-summary",level:2}],m={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"review-the-sync-summary"},"Review the sync summary"),(0,a.kt)("p",null,"The sync summary displays information about synced data, such as the amount of data moved, the number of records read and committed, and the total sync time. Reviewing this summary can help you monitor the sync performance and identify any potential issues.  "),(0,a.kt)("p",null,"To review the sync summary:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("a",{parentName:"p",href:"http://cloud.airbyte.com/"},"Airbyte Cloud")," dashboard, click ",(0,a.kt)("strong",{parentName:"p"},"Connections"),".   ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click a connection in the list to view its sync history."),(0,a.kt)("p",{parentName:"li"},"Sync History displays the sync status or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/operator-guides/reset/"},"reset")," status (Succeeded, Partial Success, Failed, Cancelled, or Running) and the ",(0,a.kt)("a",{parentName:"p",href:"#sync-summary"},"sync summary"),".  "),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Airbyte will try to sync your data five times. After a fifth failure, it will stop attempting to sync."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To view the full sync log, click the sync summary dropdown."))),(0,a.kt)("h2",{id:"sync-summary"},"Sync summary"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Data"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x GB (also measured in KB, MB)"),(0,a.kt)("td",{parentName:"tr",align:null},"Amount of data moved during the sync. If basic normalization is on, the amount of data would not change since normalization occurs in the destination.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x extracted records"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of records read from the source during the sync.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x loaded records"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of records the destination confirmed it received.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"xh xm xs"),(0,a.kt)("td",{parentName:"tr",align:null},"Total time (hours, minutes, seconds) for the sync and basic normalization, if enabled, to complete.")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In a successful sync, the number of extracted records and loaded records should be the same.")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),y=a,p=u["".concat(s,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(p,i(i({ref:t},m),{},{components:n})):r.createElement(p,i({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);