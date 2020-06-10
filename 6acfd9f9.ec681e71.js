(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(1),o=a(9),r=(a(0),a(229)),i={id:"samikhaBehindTheScenes",title:"Samiksha - Behind the Scenes",author:"Chakshu Gautam",author_title:"Technology @Samagra",author_url:"https://www.linkedin.com/in/chakshu-gautam-6918736b/",author_image_url:"https://media-exp1.licdn.com/dms/image/C5603AQFqf5zRVhvlnA/profile-displayphoto-shrink_400_400/0?e=1596067200&v=beta&t=ODIqK7DKs-TXS6PIhiyNSAEJKe2XBHxEQZKnsWXPC1E",tags:["bureaucrats","govt engineers","govOS"]},l={permalink:"/docs/blog/samikhaBehindTheScenes",source:"@site/blog/2020-05-31-samiksha-behind-the-scenes.md",description:"This is a multipart behind-the-scenes series on how we built [Samiksha](https://tech.samagragovernance.in/index.php/home/ed-samiksha/) and how this led to the creation of abstracted reusable technology [components](https://samagra-development.github.io/docs/docs/ComponentsOverview) that we have today.",date:"2020-05-31T00:00:00.000Z",tags:[{label:"bureaucrats",permalink:"/docs/blog/tags/bureaucrats"},{label:"govt engineers",permalink:"/docs/blog/tags/govt-engineers"},{label:"govOS",permalink:"/docs/blog/tags/gov-os"}],title:"Samiksha - Behind the Scenes",truncated:!0,prevItem:{title:"Reusing Governance Technology Products",permalink:"/docs/blog/reusingtech"},nextItem:{title:"Evolution of Samiksha",permalink:"/docs/blog/evolutionsamiksha"}},c=[{value:"1. Problem Statement",id:"1-problem-statement",children:[]},{value:"2. Design Principles",id:"2-design-principles",children:[]},{value:"3. Navigating in the Open Source World",id:"3-navigating-in-the-open-source-world",children:[{value:"Exploring what is already there",id:"exploring-what-is-already-there",children:[]},{value:"Defining the criteria",id:"defining-the-criteria",children:[]},{value:"The result?",id:"the-result",children:[]}]},{value:"References",id:"references",children:[]}],s={rightToc:c};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This is a multipart behind-the-scenes series on how we built ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://tech.samagragovernance.in/index.php/home/ed-samiksha/"}),"Samiksha")," and how this led to the creation of abstracted reusable technology ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/ComponentsOverview"}),"components")," that we have today."),Object(r.b)("h2",{id:"1-problem-statement"},"1. Problem Statement"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://tech.samagragovernance.in/index.php/home/ed-samiksha/"}),"Samiksha")," is an Open Source product ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/blog/evolutionsamiksha"}),"designed")," to improve school quality control activities conducted by state education department officials in government schools. This typically includes mentoring to support teachers based on observations of their in-class teaching practices, and monitoring to inspect the status of infrastructure and quality of school processes such as classroom teaching, availability of teaching learning materials, functional toilets, completion of civil works projects in the school and so on."),Object(r.b)("p",null,"Translating this to tech, it is essentially an ecosystem that gives"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The administration console to build and deploy forms dynamically without updating the app. This also gives you the ability to manage roles, resources and permissions for individual users. This initial work essentially evolved into the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/COAppControl"}),"Application console"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The school mentors and monitors an application to fill forms in a secure way. The is what later became part of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/COMobileApplication"}),"Mobile Application"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"the ",Object(r.b)("inlineCode",{parentName:"p"},"program owner")," access to all the raw data on which he can perform analytics. This analytics and visualization part is the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/CODataAnalytics"}),"Data Analytics")," package that we have right now."))),Object(r.b)("h2",{id:"2-design-principles"},"2. Design Principles"),Object(r.b)("p",null,"Our approach to building software is heavily influenced by the need to empower government engineering teams with technology products built using Open Source tools that they could independently manage in the long term thereby reducing public expenditure, having confident deployments at scale, with any technology, infrastructure or vendor lock-ins. This is why"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Principle #1 - Build reusable, scalable, extensible & deployable technology products using Open Source tools"),Object(r.b)("li",{parentName:"ul"},"Principle #2 - Work with existing government systems, don\u2019t replace them"),Object(r.b)("li",{parentName:"ul"},"Principle #3 - Strengthen government technology capability, don\u2019t replace it")),Object(r.b)("p",null,"I will be focussing on Principle #1 here. More importantly, how we chose the exact same Open Source projects to power our program."),Object(r.b)("h2",{id:"3-navigating-in-the-open-source-world"},"3. Navigating in the Open Source World"),Object(r.b)("h3",{id:"exploring-what-is-already-there"},"Exploring what is already there"),Object(r.b)("p",null,"When we set out to build an open source application, we knew that there are four major components to it. The four major components for Samiksha are the following."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/FormManagementModule"}),"Form management module"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Authentication and Authorization server")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/COAppControl"}),"Aplication Control Module")," to manage and use data")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/CODataAnalytics"}),"Data Analytics")))),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://samagra-development.github.io/docs/img/SamikshaArchitecture.png",alt:"Architecture"}))," ",Object(r.b)("em",{parentName:"p"},"This is how they connect in the overall structure.")),Object(r.b)("p",null,"The challenge with a lot of Open Source projects is not the quality, but interoperatability. Even when you are able to find something that is in a language that you know, you are not able to figure out how to make customizations to the code due to bad (and mostly no) documentation on the code. Often it is more a reflection on what skillset and frameworks your team knows and how cutting edge you want (can afford) to be."),Object(r.b)("p",null,"Selecting Open Source projects is a science in its own right. With so many choices, it is inevitable that you would end up with decision fatigue."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://blog.vantagecircle.com/content/images/size/w860/2019/07/decision-fatigue.png",alt:"Chosing an open source project"}))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"What it is like when you are selecting an Open Source project")),Object(r.b)("p",null,"If you just go by the number of Open Source solutions you can build, it would be 20^4 (assuming 20 legit candidates for each). So how do you choose one out of 1.6 lakh choices that you have? How do you narrow down choices?"),Object(r.b)("h3",{id:"defining-the-criteria"},"Defining the criteria"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://miro.medium.com/max/1000/1*9nMBMt-OugnruBr_M-WuEQ.png",alt:"Chosing an open source project"}))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Why create a new new standard than using something already there?")),Object(r.b)("p",null,"Even before setting out to select the project, having a concrete idea of what we were looking for in the first place was essential. We listed down the requirements that were essential for each of the components and started mapping them to Open Source projects. But this was not enough, since a lot of projects were having similar features, so evolved the criteria to include some other parameters to make it more robust so that even a Github bot could check this. Since we were all willing to learn something new (even a new language), the criteria (in priority) apart from the core features that we were looking for was as follows"),Object(r.b)("h4",{id:"must-have"},"Must have"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Active, funded community with frequent (at least a monthly) release - Since we are not a big team, contributing on something straight away making multiple PRs was not something that we could have done. Having an active community leverages their expertise and helps in getting solutions others have already custom built for themselves. Having a huge stackoverflow repository of questions, in a similar way keeps us agile.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Having a fully featured GUI - Debugging based on logs was not something that we could afford. Also having a GUI implemented, gives an example to how to implement the APIs in other use cases.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Code quality and maturity of the project - Anything less than an year was not considered.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"An open licence - Open licences like MIT are favourable than others.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Docker based deployment - Deployment being one our design principles, anything without a container was a no go."))),Object(r.b)("h4",{id:"good-to-have"},"Good to have"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Issues and PRs raised - PRs and issues getting closed at a fast rate, was a metric that becomes a proxy of how fast our own issues will be resolved.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Continuous integration status - CI/CD enables more frequent code deployments and helps check for bad code commits. All pushes to master should go through a pipeline. An Open Source project without one feels unsafe.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"A CONTRIBUTING doc - Since we would be modifying a lot of what was already built, it was necessary to have a starting doc that would enable newcomers like us to ramp up faster.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Tests - Tests are essentially an indicator of robustness of the system. But not a deal breaker, they can be added later.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Benchmarking - For a low feature phone taking 100mb for just one app won't fly. Having benchmarks ensures the project is on the path of continuous improvement.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Code styling - This causes troubles for the contributors, 'cause one prefers spaces and another prefers tabs'"))),Object(r.b)("p",null,"Though ",Object(r.b)("em",{parentName:"p"},"stargazers")," is something that people generally look for as a proxy for all of the above, we went a step ahead since we won't be able to switch to anything else for a long time. We would also be modifying some of the features heavily so all of the above things were essential for us."),Object(r.b)("h3",{id:"the-result"},"The result?"),Object(r.b)("p",null,"When we were done evaluating everything, we were left with these four choices."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Component/Module"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Choice 1"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Choice 2"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Choice 3"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://samagra-development.github.io/docs/docs/FormManagementModule"}),"Form management")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ODK"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Identity Server"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FusionAuth"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Gluu"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OpenAM")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://samagra-development.github.io/docs/docs/COAppControl"}),"Application Console")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ReactAdmin"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://samagra-development.github.io/docs/docs/CODataAnalytics"}),"Analytics and Visualization")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Metabase"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Superset"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(r.b)("p",null,"Now since we had just 6 choices, we narrowed down to one based on the stack that we felt most comfortable with. React being one of them, Java being the other. So the final choices were, ",Object(r.b)("strong",{parentName:"p"},"FusionAuth")," for ",Object(r.b)("em",{parentName:"p"},"Identity Server")," and ",Object(r.b)("strong",{parentName:"p"},"Metabase")," for ",Object(r.b)("em",{parentName:"p"},"Visualization"),"."),Object(r.b)("p",null,"Now that we had made a bet on the above platforms, the next step was to figure out how to seamlessly integrate all these technologies such that everything is secure and ready to go. But we will take this up in the next post."),Object(r.b)("h2",{id:"references"},"References"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.freecodecamp.org/news/why-im-not-using-your-github-repository-2dff6c7ac7cf/"}),"https://www.freecodecamp.org/news/why-im-not-using-your-github-repository-2dff6c7ac7cf/")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://itnext.io/what-i-dont-like-in-your-repo-a602577a526b"}),"https://itnext.io/what-i-dont-like-in-your-repo-a602577a526b")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://towardsdatascience.com/how-to-choose-the-best-open-source-software-b1cbbe4f6398"}),"https://towardsdatascience.com/how-to-choose-the-best-open-source-software-b1cbbe4f6398"))))}b.isMDXComponent=!0},229:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||h[u]||r;return a?o.a.createElement(m,l({ref:t},s,{components:a})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);