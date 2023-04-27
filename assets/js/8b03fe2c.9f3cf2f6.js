"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[50575],{88827:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={},o="Trello",i={unversionedId:"integrations/sources/trello",id:"integrations/sources/trello",title:"Trello",description:"This page contains the setup guide and reference information for the Trello source connector.",source:"@site/../docs/integrations/sources/trello.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/trello",permalink:"/integrations/sources/trello",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/trello.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"TPL/3PL Central",permalink:"/integrations/sources/tplcentral"},next:{title:"TrustPilot",permalink:"/integrations/sources/trustpilot"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up Trello",id:"step-1-set-up-trello",level:3},{value:"Step 2: Set up the Trello connector in Airbyte",id:"step-2-set-up-the-trello-connector-in-airbyte",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Changelog",id:"changelog",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"trello"},"Trello"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Trello source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Start Date"),(0,n.kt)("li",{parentName:"ul"},"Trello Board IDs (Optional)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OAuth 1.0")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"API Key (see ",(0,n.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/#authorizing-a-client"},"Authorizing A Client"),")"),(0,n.kt)("li",{parentName:"ul"},"API Token (see ",(0,n.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/#authorizing-a-client"},"Authorizing A Client"),")")),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-set-up-trello"},"Step 1: Set up Trello"),(0,n.kt)("p",null,"Create a ",(0,n.kt)("a",{parentName:"p",href:"https://trello.com"},"Trello Account"),"."),(0,n.kt)("h3",{id:"step-2-set-up-the-trello-connector-in-airbyte"},"Step 2: Set up the Trello connector in Airbyte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"Trello")," from the Source type dropdown and enter a name for this connector."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Authenticate your Trello account"),"."),(0,n.kt)("li",{parentName:"ol"},"Log in and ",(0,n.kt)("inlineCode",{parentName:"li"},"Allow")," access."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Start date")," - The date from which you'd like to replicate data for streams."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Trello Board IDs (Optional)")," - IDs of the boards to replicate data from. If left empty, data from all boards to which you have access will be replicated.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Authenticate with ",(0,n.kt)("strong",{parentName:"li"},"API Key")," and ",(0,n.kt)("strong",{parentName:"li"},"API Token")," pair.")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Trello source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-overwrite/"},"Full Refresh - Overwrite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental - Append"))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("p",null,"This connector outputs the following streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/trello/rest/api-group-members/#api-members-id-boards-get"},"Boards")," ","(","Full Refresh",")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-boardid-actions-get"},"Actions")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-cards-get"},"Cards")," ","(","Full Refresh",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-checklists-get"},"Checklists")," ","(","Full Refresh",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-lists-get"},"Lists")," ","(","Full Refresh",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-members-get"},"Users")," ","(","Full Refresh",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/trello/rest/api-group-members/#api-members-id-organizations-get"},"Organizations")," ","(","Full Refresh",")")))),(0,n.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The connector is restricted by normal Trello ",(0,n.kt)("a",{parentName:"p",href:"https://developer.atlassian.com/cloud/trello/guides/rest-api/rate-limits/"},"requests limitation"),"."),(0,n.kt)("p",null,"The Trello connector should not run into Trello API limitations under normal usage. Please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/24266"},"24266")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get board ids also from organizations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/24141"},"24141")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Certify to Beta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/24045"},"24045")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix schema for boards and cards streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8628"},"8628")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated fields in source-connector specifications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8183"},"8183")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable specifying board ids in configuration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6968"},"6968")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add oAuth flow support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5501"},"5501")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Release Trello CDK Connector")))))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);