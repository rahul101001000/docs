(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{198:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(215),i=a(208),c=a(203),m=a(207),s=a(204);var o=function(e){var t=e.metadata;return l.a.createElement("nav",{className:"pagination-nav"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__link--label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__link--label"},t.next.title," \xbb"))))};var d=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],i=l[1];Object(n.useEffect)((function(){var n=[],l=[];function c(){var c=function(){var e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){var l=n[e],r=l.getBoundingClientRect().top;r>=0&&r<=a&&(t=l),e+=1}return t}();if(c){var m=0,s=!1;for(l=document.getElementsByClassName(e);m<l.length&&!s;){var o=l[m],d=o.href,v=decodeURIComponent(d.substring(d.indexOf("#")+1));c.id===v&&(r&&r.classList.remove(t),o.classList.add(t),i(o),s=!0),m+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}))},v=a(205),E=a.n(v),u=a(140),g=a.n(u);function p(e){var t=e.headings;return d("contents__link","contents__link--active",100),l.a.createElement("div",{className:"col col--3"},l.a.createElement("div",{className:g.a.tableOfContents},l.a.createElement(_,{headings:t})))}function _(e){var t=e.headings,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"contents contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(_,{isChild:!0,headings:e.children}))}))):null}t.default=function(e){var t=Object(c.a)().siteConfig,a=void 0===t?{}:t,n=a.url,s=a.title,d=e.content,v=d.metadata,u=v.description,_=v.title,h=v.permalink,N=v.editUrl,f=v.lastUpdatedAt,b=v.lastUpdatedBy,k=v.version,w=d.frontMatter,y=w.image,C=w.keywords,x=w.hide_title,L=w.hide_table_of_contents,O=_?_+" | "+s:s,j=n+Object(m.a)(y);return Object(i.a)(y)||(j=y),l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,O),l.a.createElement("meta",{property:"og:title",content:O}),u&&l.a.createElement("meta",{name:"description",content:u}),u&&l.a.createElement("meta",{property:"og:description",content:u}),C&&C.length&&l.a.createElement("meta",{name:"keywords",content:C.join(",")}),y&&l.a.createElement("meta",{property:"og:image",content:j}),y&&l.a.createElement("meta",{property:"twitter:image",content:j}),y&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_}),h&&l.a.createElement("meta",{property:"og:url",content:n+h})),l.a.createElement("div",{className:"padding-vert--lg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:E()("col",g.a.docItemCol)},l.a.createElement("div",{className:g.a.docItemContainer},l.a.createElement("article",null,k&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",k)),!x&&l.a.createElement("header",null,l.a.createElement("h1",{className:g.a.docTitle},_)),l.a.createElement("div",{className:"markdown"},l.a.createElement(d,null))),(N||f||b)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},N&&l.a.createElement("a",{href:N,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(f||b)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",f&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*f).toISOString(),className:g.a.docLastUpdatedAt},new Date(1e3*f).toLocaleDateString()),b&&" "),b&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,b)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(o,{metadata:v})))),!L&&d.rightToc&&l.a.createElement(p,{headings:d.rightToc})))))}}}]);