(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),o=n(10),r=(n(0),n(215)),i={id:"COMobileApplication",title:"Mobile Application (Android)",sidebar_label:"Overview"},c={id:"COMobileApplication",title:"Mobile Application (Android)",description:"![Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)",source:"@site/docs/Component Overview Mobile Application.md",permalink:"/docs/docs/COMobileApplication",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Component Overview Mobile Application.md",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/docs/ComponentsOverview"},next:{title:"Getting Started",permalink:"/docs/docs/GettingStartedMobileComponent"}},l=[{value:"1. Introduction",id:"1-introduction",children:[]},{value:"2. Use cases",id:"2-use-cases",children:[]},{value:"3. Component Design",id:"3-component-design",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/badge/Licence-MIT-blue.svg",alt:"Licence"}))),Object(r.b)("h1",{id:"component-overview"},"Component Overview"),Object(r.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(r.b)("p",null,"On-ground data collection activities conducted by different departments of the state and central governments have been increasingly conducted using mobile devices or tablets. To facilitate this upward trend of digital first data collection methods in the government, we have envisioned a opensource based modular design for a mobile application that can be scaled and reused efficiently for different governance use cases. After working closely with different state governments we have identified and abstracted common governance use cases that are typically required for on-ground data collection activities. These use cases have informed our architectural design for creating mobile applications for data collection. "),Object(r.b)("p",null,"This documentation of the Mobile Application component will give you an overview of the different use cases that inform the design of the component, how you can get started to deploy this component, how you can setup different modules within this component and additional reference information in case you want to dive deeper into the implementation of this component. "),Object(r.b)("h2",{id:"2-use-cases"},"2. Use cases"),Object(r.b)("p",null,"The following list includes a set of use cases abstracted from different on-ground state department functions."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Configure data collection forms"),Object(r.b)("li",{parentName:"ol"},"View submission data"),Object(r.b)("li",{parentName:"ol"},"Manage user profiles of on-ground officials"),Object(r.b)("li",{parentName:"ol"},"Configure additional information in the application (support content, helpline numbers)"),Object(r.b)("li",{parentName:"ol"},"Seamless in-application information update (for addition of administrative information such as schools, blocks, GPs, etc)"),Object(r.b)("li",{parentName:"ol"},"Offline application functioning for remote or low connectivity areas")),Object(r.b)("h2",{id:"3-component-design"},"3. Component Design"),Object(r.b)("p",null,"The mobile application component is developed using ",Object(r.b)("strong",{parentName:"p"},"multi-modular architecture")," with ",Object(r.b)("strong",{parentName:"p"},"independently functioning modules"),". "),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../img/component1v2.png",alt:"alt-text"}))),Object(r.b)("p",null,"The following table provides an overview of the different modules within the mobile applicaton component, the opensource libraries used for each and the additions we have done to the opensource libraries to have them architecturally and functionally aligned to our component design. "),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Module Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Form Management Module")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1. Integrate and setup data collection tool ",Object(r.b)("br",null),"2. Manage form access and submissions.",Object(r.b)("br",null),"3. View form submissions.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"OpenSource Libraries used"),": ",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/getodk/collect"}),"ODK Collect"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Ancilliary Screen Module")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"User can view custom designed screens at various points in the user flows such as:",Object(r.b)("br",null),"1. Application start (Splash screen)",Object(r.b)("br",null),"2. First-time login (guided onboarding screens)",Object(r.b)("br",null),"3. View information about the app (About Us screen)",Object(r.b)("br",null),"4. App usage guide/tutorials screen")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Profile Screen Module")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"User can manage his/her profile and conduct the following functions:",Object(r.b)("br",null),"1. View all editable and non-editable profile data",Object(r.b)("br",null),"2. Edit profile details",Object(r.b)("br",null),"3. Reset application password")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Offline Handling Module")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"User can use the application in offline mode:",Object(r.b)("br",null),"1. Add/Edit/Delete any data in different sections of the application",Object(r.b)("br",null),"2. Data is automatically synced for the user once the device is online")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Cascading Dropdown Module")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"User can select fields from the application metadata and have the following based on the data selection:",Object(r.b)("br",null),"1. Change in the forms shown to the users (users can view different forms based on the dropdown)",Object(r.b)("br",null),"2. Pre-fill in the data input forms (based on the variable mapping pre-defined in the data input form)",Object(r.b)("br",null),"3. In addition, cascading dropdown as pre-fill based on the profile of the users (Program Mission Director only sees cascading dropdown for 6/10 districts where the mission is ongoing)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Push Notification Module")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1. Integrating FCM firebase token to send push notifications",Object(r.b)("br",null),"2. Ability to generate push notifications",Object(r.b)("br",null),"3. Generate in-app notifications")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Mobile Application Logging Module")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1. Generate Logs for Application",Object(r.b)("br",null),"2. Receive Crash Notifications via Email",Object(r.b)("br",null),"3. Remote crash logging",Object(r.b)("br",null),"4. Push User App logs for further debugging",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"OpenSource Libraries used"),": ",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/JakeWharton/timber"}),"Timber"),", ",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://sentry.io"}),"Sentry"))))))}s.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||r;return n?o.a.createElement(m,c({ref:t},b,{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);