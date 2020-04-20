(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{182:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(1),o=t(9),a=(t(0),t(202)),i={id:"AncillaryScreensModule",title:"Ancillary Screens Package",sidebar_label:"Ancillary Screens Package"},c={id:"AncillaryScreensModule",title:"Ancillary Screens Package",description:"## 1. Overview",source:"@site/docs/Ancillary Screens Module.md",permalink:"/docs/docs/AncillaryScreensModule",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Ancillary Screens Module.md",sidebar_label:"Ancillary Screens Package",sidebar:"someSidebar",previous:{title:"Form Management Module",permalink:"/docs/docs/FormManagementModule"},next:{title:"User Profile Package",permalink:"/docs/docs/AndroidProfileManagementModule"}},l=[{value:"1. Overview",id:"1-overview",children:[]},{value:"2. Setting up Module in Main Application",id:"2-setting-up-module-in-main-application",children:[{value:"2.1 Integrating Module into your Project",id:"21-integrating-module-into-your-project",children:[]},{value:"2.2 Initialization and Usage of Ancillary Screens Module",id:"22-initialization-and-usage-of-ancillary-screens-module",children:[]},{value:"2.3 Using Ancillary Screens Module",id:"23-using-ancillary-screens-module",children:[]}]}],s={rightToc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"1-overview"},"1. Overview"),Object(a.b)("p",null,"For any android app, it becomes imperative, as the usage increases and the features enhance, it is needed to provide an access control to the app. Hence, we developed a module, with certain UI modules which can be easily integrated with your app, to provide basic features which are to be generally present in almost every android application, which are Splash scree, Login Screen, Forgot Password and Reset password via OTP."),Object(a.b)("p",null,"The screens included in the Ancillary Screens Module are:"),Object(a.b)("p",null,"(i) ",Object(a.b)("strong",{parentName:"p"},"Splash Screen")," - User sees this activity in the fist time when app is launched.\n(ii) ",Object(a.b)("strong",{parentName:"p"},"Login Screen")," - User can login via user id and password, we are using FusionAuth for the management and authentication of users.\n(iii) ",Object(a.b)("strong",{parentName:"p"},"About Us Screen")," - Ability to confiure the title, icon and the description text of the About Us Screen\n(iv) ",Object(a.b)("strong",{parentName:"p"},"Reset Password")," - User can reset the app password from the Login screen via OTP sent to his registered Mobile number\n(v) ",Object(a.b)("strong",{parentName:"p"},"Tutorials Screen")," - In order to guide the app user about the flow of app via Youtube video, you can configure those videos inside these screens by passing in your Youtube API Key and Video ID. You can also remotely configure the video IDs."),Object(a.b)("h2",{id:"2-setting-up-module-in-main-application"},"2. Setting up Module in Main Application"),Object(a.b)("h3",{id:"21-integrating-module-into-your-project"},"2.1 Integrating Module into your Project"),Object(a.b)("p",null,"2.1.1 Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory.",Object(a.b)("br",null),"2.1.2 Launch Android Studio. Open the main project where you are to integrate these modules.",Object(a.b)("br",null),"\n2.1.3 If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the ancillaryscreens module later, using the following steps.",Object(a.b)("br",null),"\n2.1.4 Click on your app module. Select New Module Option -> Select Import Android Library -> Go to the downloaded project directory -> Select the module, sync your gradle. In case you face dependency resolution errors, please see the downloaded project's main app and project gradle to see what dependencies you are missing.",Object(a.b)("br",null),"\n2.1.5 Please follow the same steps for the integration of ancillaryscreens module.",Object(a.b)("br",null),"\n2.1.6 In the settings.gradle, Add ':ancillaryscreens' to the end of already added modules.",Object(a.b)("br",null)),Object(a.b)("h3",{id:"22-initialization-and-usage-of-ancillary-screens-module"},"2.2 Initialization and Usage of Ancillary Screens Module"),Object(a.b)("p",null,"Inside onCreate of Application class or Launcher Activity, in the manner as follows"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"AncillaryScreensDriver.init(this,\n                BASE_API_URL,\n                SEND_OTP_API_ENDPOINT,\n                RESET_PASSWORD_API_ENDPOINT,\n                APPLICATIO_ID);\n")),Object(a.b)("p",null,"The method signature of the initialisation invocation is as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"/**\n* \n* @param mainApplication - Instance of Application Class (Main Application, as you will see is an Interface implemented by\nApplication class)\n* @param BASE_API_URL - String (Base API URL for the Fusion Auth, to be later used for user authentication and user data related tasks.)\n* @param SEND_OTP_API_ENDPOINT - String (API Endpoint to send OTP to the mobile number for resetting app password.)\n* @param RESET_PASSWORD_API_ENDPOINT - String (API Endpoint to post user data to reset App Password.)\n* @param APPLICATION_ID - String (Application ID sent for this app in Fusion Auth Backend.)\n*/\npublic static void init(@NonNull MainApplication mainApplication, \n@NonNull String BASE_API_URL, \n@NonNull String SEND_OTP_API_ENDPOINT, \n@NonNull String RESET_PASSWORD_API_ENDPOINT,\n@NonNull String APPLICATION_ID);\n")),Object(a.b)("h3",{id:"23-using-ancillary-screens-module"},"2.3 Using Ancillary Screens Module"),Object(a.b)("p",null,"2.3.1 In order to make Splash Screen the launcher activity for your application, please add the following statement in the AndroidManifest.xml file of this module, if not present"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'<activity\nandroid:name="com.samagra.ancillaryscreens.screens.splash.SplashActivity"\n        android:theme="@style/Theme.AppCompat.Light.NoActionBar">\n          <intent-filter>\n                <action android:name="android.intent.action.MAIN" />\n                <category android:name="android.intent.category.LAUNCHER" />\n                </intent-filter>\n                </activity>\n')),Object(a.b)("p",null,"2.3.2 The module comes in such a way that you won't need to do any config changes with respect to Login flow for the user. Same goes for the Change Password flow of the user.\n2.3.3 To launch the About Us Screen from the module, use the following code:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"AncillaryScreensDriver.launchAboutActivity(context, aboutBundle);\n")),Object(a.b)("p",null,"Here, context is the Context Instance used to launch the About Us screen, AboutBundle is bundle object containing the information transferred to the Activity to render the UI.\n2.3.4 To launch the About Us Screen from the module, use the following code:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"AncillaryScreensDriver.launchTutorialsActivity(context, tutorialBundle);\n")),Object(a.b)("p",null,"Here, context is the Context Instance used to launch the Tutorials screen, tutorialBundle is bundle object containing the information transferred to the Activity to render the UI. It contains the video id and Youtube API Key\n2.3.5  We are using RxBus to communicate back and forth with the main app module. Please refer to the SplashPresenter class of the downloaded project where we communicate back with the main app module to notify Login success and launching of home screen."))}u.isMDXComponent=!0},202:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},d=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,h=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return t?o.a.createElement(h,c({ref:n},s,{components:t})):o.a.createElement(h,c({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);