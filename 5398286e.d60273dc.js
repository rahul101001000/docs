(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),i=n(9),o=(n(0),n(215)),a={id:"AndroidProfileManagementModule",title:"Profile Screens Module",sidebar_label:"Profile Screens Module"},l={id:"AndroidProfileManagementModule",title:"Profile Screens Module",description:"## 1. Overview\r",source:"@site/docs/Android Profile Mangement Module.md",permalink:"/docs/docs/AndroidProfileManagementModule",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Android Profile Mangement Module.md",sidebar_label:"Profile Screens Module",sidebar:"someSidebar",previous:{title:"Ancillary Screens Module",permalink:"/docs/docs/AncillaryScreensModule"},next:{title:"Cascading Dropdowns Module",permalink:"/docs/docs/CascadingSearchModule"}},s=[{value:"1. Overview",id:"1-overview",children:[]},{value:"2. Setup Module In Starter App",id:"2-setup-module-in-starter-app",children:[{value:"2.1 Integrate Module",id:"21-integrate-module",children:[]},{value:"2.2 Start The Module",id:"22-start-the-module",children:[]},{value:"2.3 Setup Firebase (for Android Project &amp; Client End Consumption)",id:"23-setup-firebase-for-android-project--client-end-consumption",children:[]},{value:"2.4 UI Capabilities For Application Administrators",id:"24-ui-capabilities-for-application-administrators",children:[]}]},{value:"3. FAQs",id:"3-faqs",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-overview"},"1. Overview"),Object(o.b)("p",null,"For any app, at a user\u2019s level, it is essential to provide the user with an option to control the user\u2019s profiles in terms of editing his/her basic contact details (Contact and email). These details can be leveraged by the back-end to send personalized messages/emails/notifications. At a user\u2019s level, the contact number can be used by the user to reset his/her password. The module provides the following functionalities:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Option to display the user\u2019s profile, to display the user's basic role details, contact details, as well as information pertaining to the app, depending on the user.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The details for the user can be configured from the backend, via Firebase, as in, the whole profile section has been designed to be dynamically generated. Details of this are discussed in the further part of the document.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Users have the option to edit certain profile information, depending on the app contract, meaning dependent on the back end configuration.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Users can reset the password for the application via OTP that will be sent to the user\u2019s registered number."))),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://media.giphy.com/media/Z9haa44Y6bhaPLAfbK/giphy.gif",alt:null}))),Object(o.b)("h2",{id:"2-setup-module-in-starter-app"},"2. Setup Module In Starter App"),Object(o.b)("p",null,"Unzip the github project to a folder. You can find the github repository at this ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Samagra-Development/mobile-profile"}),"link"),". "),Object(o.b)("p",null,"Download it as zip locally and then unzip the root directory. Launch Android Studio. Open the main project where you are to integrate these modules."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note: Please note that,before you start integrating the module into your project, please do get a run thorugh the demo project downloaded from the github repository, to understand the user flow.")),Object(o.b)("h3",{id:"21-integrate-module"},"2.1 Integrate Module"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note: This is applicable for any android module, you want to import.")),Object(o.b)("p",null,"2.1.1 If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the ancillaryscreens module later, using the following steps."),Object(o.b)("p",null,"2.1.2 Import the library module to your project (the library source becomes part of your project). Click File > New > Import Module"),Object(o.b)("p",null,"2.1.3 Select the source directory of the Module you want to import and click Finish. The library module is copied to your project, so you can actually edit the library code."),Object(o.b)("p",null,"2.1.4 Open the Dependencies tab."),Object(o.b)("p",null,"2.1.5 Click the (+) icon and select Module Dependency. Select the module and click Ok."),Object(o.b)("p",null,"2.1.6 Open your build.gradle file and check that the module is now listed under dependencies."),Object(o.b)("p",null,"2.1.7 Sync your gradle. Clean your project."),Object(o.b)("p",null,"2.1.8 Please follow the same steps for the integration of ancillaryscreens module."),Object(o.b)("p",null,"2.1.9 Open the app module's build.gradle file and add a new line to the dependencies block as shown in the following snippet and then run the ",Object(o.b)("inlineCode",{parentName:"p"},"gradle-sync"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"dependencies { \n    implementation project(':user_profile');\n    }\n")),Object(o.b)("p",null,"2.1.10 Make sure the library is listed at the top of your settings.gradle file, as shown here for a library named ':user_profile'. This means for other modules included as well.",Object(o.b)("br",null),Object(o.b)("br",null)),Object(o.b)("h3",{id:"22-start-the-module"},"2.2 Start The Module"),Object(o.b)("p",null,"2.2.1 Inside ",Object(o.b)("inlineCode",{parentName:"p"},"onCreate")," of Application class or Launcher Activity, in the manner, as follows"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"ComponentManager.registerProfilePackage(new ProfileSectionInteractor(), this, AppConstants.BASE_API_URL, applicationID);\n\n")),Object(o.b)("p",null,"The method signature of this Module Contract Initialisation is as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"/**\n     * @param profileContractImpl - {IProfileContract} Implementation Class of the Interface which will be further used to launch the Profile Section further.\n     * @param application         - {Application} Instance of the Application class, which will be used to validate for IllegalState checks.\n     * @param baseURL             - {String} Base URL for Fusion Auth APIs used when editing user profile\n     * @param applicationID       - {String} Application Identifier for this project, from Fusion Auth, used further as parameter for API interactions.\n     * @param sendOTPUrl          - {String}API Endpoint to send OTP to reset Password\n     * @param sendOTPUrl          - {String}API Endpoint to send OTP to reset Password\n     * @param updatePasswordUrl   - {String}API Endpoint to reset Password\n     * @param fusionAuthKey       - {String}Fusion Auth API Key\n     * @param user                -  {String} User UUID   \n     */\n\n   public static void registerProfilePackage(IProfileContract profileContractImpl, \n                                            MainApplication application,\n                                            String baseURL, String applicationID, \n                                            String sendOTPUrl, String updatePasswordUrl, \n                                            String fusionAuthKey, String userID) {\n \n")),Object(o.b)("p",null,"This method invocation will also initialize the ProfileScreenDriver class, which will be further used to launch the Profile Screen."),Object(o.b)("p",null,"2.2.2 Wherever you want to launch the Profile Section, use the following code piece."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{})," IProfileContract initializer = ComponentManager.iProfileContract;\n\nif(initializer!=null){\n\n        initializer.launchProfileActivity(context,profileConfig,fusionauthAPIKey,sendOTPUrl,updateAppPasswordURL);\n\n        }\n\n")),Object(o.b)("p",null,"The method signature of the above method is mentioned below."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"/**\n     * *@param context-{Context}Context Instance used to further launch Profile Screen.\n     *\n     * @param profileConfig-{ArrayList<UserProfileElement>}List of Profile Screen Elements which will be received via Firebase Remote Config,\n     *                                                          <p>\n     *                                                          Attributes would be discussed ahead while discussing on how to set up Firebase for project.\n     * @param fusionAuthApiKey-{String}Fusion                   API Auth Key for the Application,used to authenticate the API Requests.\n     * @param sendOTPUrl-{String}API                            End Point to receive OTP for resetting App Password.\n     * @param updatePasswordURL-{String}API                     End-point to update the User Password for the App,after receiving the OTP of registered Mobile Number\n     * @param profileContentValues-{HashMap<String,             String>}Map of the various content fields to be populated,(received via Firebase Remote Config)with their values.\n     */\n\n    void launchProfileActivity(@NonNull Context context, ArrayList<UserProfileElement> profileConfig, String fusionAuthApiKey,\n                               String sendOTPUrl, String updatePasswordURL, HashMap<String, String> profileContentValues);\n")),Object(o.b)("h3",{id:"23-setup-firebase-for-android-project--client-end-consumption"},"2.3 Setup Firebase (for Android Project & Client End Consumption)"),Object(o.b)("p",null,"2.3.1 First of all, for setting up Remote Config for Firebase, you need to setup Firebase for your Android Application Project. The tutorial for setting up Firebase for Android can be accessed via the link, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://firebase.google.com/docs/android/setup"}),"Adding Firebase to your Android Project"),"."),Object(o.b)("p",null,"2.3.2 Configure Remote Config for your Android App after the above step is successfully completed, accessible via the link, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://firebase.google.com/docs/remote-config/use-config-android"}),"Getting started with Firebase Remote Config on Android"),"."),Object(o.b)("p",null,"2.3.3 Go to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.console.firebase.google.com/"}),"Google Firebase Console"),", navigate to your project view. In your project view, launch the Remote Config View by clicking on the Remote Config tab."),Object(o.b)("p",null,"2.3.4 In the Remote Config window, Click on Add Parameter option. Add the profile config parameters as mentioned ahead."),Object(o.b)("p",null,"2.3.5 Add the key and value in the format mentioned below."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'key : "profile_config"\n\ndefault value :\n\n[\n\n{\n\n"base64Icon": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0", // String - Base64 String of the Label Icon\n\n"title": "Contact Number - Please note this number will be used for sending OTP for password reset.", // String - Title for the Profile Screen Item\n\n"content": "user.mobilePhone", // String - Type of the Profile Item. (Possible types could be mobilePhone, email, username, Date Of Joining or Date of Birth)\n\n"isEditable": true, //Boolean - determines if the value of this Profile Item could be edited by user or not.\n\n"section": 0, //Integer - This identifier is section out the Profile Items while displaying.\n\n"type": "PHONE_NUMBER", // String - Type of the Profile Item, based on which different type of Layout will be inflated, types yet configured are TEXT/PHONE_NUMBER/DATE/SPINNER\n\n"spinnerExtra": null\n\n},\n\n{\n\n"base64Icon": "iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA7UlEQVR4Ae3UIQwBcRTHceGioE/Qk6gXQRT0JIiCqE8URFEQBX2CKOgT9Anihedbbru97c/bf3dvwvtun8h+zqMTORdFBda4Q1p2wgRfm0OcLZDsBnF2QzKp2aGHpuvjAKlJJsoT0wbvc4EXJGeQPsABchviCgHyBs3Vp3ljiQLWutigVE99ljOo+r6P0Ec4wq8meNReV2Jb3WXGIOObq4wfIn+Q4fFP1dFav+b8QYYDPeNq+CG0MEg9DcNfhcMgdS+Ju3IdpBvro/UfZC8GxaAY9NeD3hBnFyTbQ5zNkKyLFR4OQ17YoIBbURR9AFTnXP/wlPyjAAAAAElFTkSuQmCC",\n\n"title": "Official Email",\n\n"content": "user.email",\n\n"isEditable": true,\n\n"section": 0,\n\n"type": "TEXT",\n\n"spinnerExtra": null\n\n},\n\n{\n\n"base64Icon": "iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA7UlEQVR4Ae3UIQwBcRTHceGioE/Qk6gXQRT0JIiCqE8URFEQBX2CKOgT9Anihedbbru97c/bf3dvwvtun8h+zqMTORdFBda4Q1p2wgRfm0OcLZDsBnF2QzKp2aGHpuvjAKlJJsoT0wbvc4EXJGeQPsABchviCgHyBs3Vp3ljiQLWutigVE99ljOo+r6P0Ec4wq8meNReV2Jb3WXGIOObq4wfIn+Q4fFP1dFav+b8QYYDPeNq+CG0MEg9DcNfhcMgdS+Ju3IdpBvro/UfZC8GxaAY9NeD3hBnFyTbQ5zNkKyLFR4OQ17YoIBbURR9AFTnXP/wlPyjAAAAAElFTkSuQmCC",\n\n"title": "Official Email",\n\n"content": "user.state",\n\n"isEditable": true,\n\n"section": 0,\n\n"type": "SPINNER",\n\n"spinnerExtra": [{"Andhra Pradesh", "Delhi", "Punjab", "Odisha", "Haryana", "Himachal Pradesh",......}] //ArrayList<String> - Possible values of the Spinner Items.\n\n}\n\n},.......\n\n]\n')),Object(o.b)("p",null,"2.3.6 You can retrieve the above set values at the client end using the following code snippet."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'public ArrayList<UserProfileElement> getProfileConfig() {\n\nString configString = mFirebaseRemoteConfig.getString("profile_config"); // mFirebaseRemoteConfig is an instance of FirebaseRemoteConfig initialised in the Application level class of the Application.\n\nArrayList<UserProfileElement> userProfileElements = new ArrayList<>();\n\ntry {\n\nJSONArray config = new JSONArray(configString);\n\nfor (int i = 0; i < config.length(); i++) {\n\nJSONArray spinnerExtra = config.getJSONObject(i).optJSONArray("spinnerExtra");\n\nArrayList<String> spinnerValues = null;\n\nif (spinnerExtra != null) {\n\nspinnerValues = new ArrayList<>();\n\nfor (int j = 0; j < spinnerExtra.length(); j++) {\n\nspinnerValues.add(spinnerExtra.get(j).toString());\n\n}\n\n}\n\nuserProfileElements.add(new UserProfileElement(config.getJSONObject(i).get("base64Icon").toString(),\n\nconfig.getJSONObject(i).get("title").toString(),\n\nconfig.getJSONObject(i).get("content").toString(),\n\n(Boolean) config.getJSONObject(i).get("isEditable"),\n\n(int) config.getJSONObject(i).get("section"),\n\nUserProfileElement.ProfileElementContentType.valueOf(config.getJSONObject(i).get("type").toString()),\n\nspinnerValues));\n\n}\n\n} catch (JSONException e) {\n\ne.printStackTrace();\n\n}\n\nreturn userProfileElements;\n\n}\n')),Object(o.b)("p",null,"2.3.7 Map the values corresponding to these content fields, as per your app\u2019s scenario. You could fetch and store these values in the SharedPreerences or in local DB, after receiving User Info from App Login Response or from particular User Data API."),Object(o.b)("h3",{id:"24-ui-capabilities-for-application-administrators"},"2.4 UI Capabilities For Application Administrators"),Object(o.b)("p",null,"2.4.1  Render the User Profile Screen based on Firebase Remote Config\u2019s returned User Profile Configurations and its values correspondingly received from User Data stored locally."),Object(o.b)("p",null,"2.4.2  On the Profile Screen, the user has 2 actions available to him/her,"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Ability to reset App Password.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Edit the user Profile, available only for the editable fields in the user profile."))),Object(o.b)("p",null,"2.4.3  Reset Password"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The user must have a mobile number registered in the profile section, to be able to receive the OTP. In this case, edit the profile prior to resetting the password.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The user will be redirected to Reset Password Screen, only if API to trigger OTP (whose endpoint has been sent while initialization of module, as discussed above), returns a successful response. In the other scenario, the user will be shown a Snakbar notifying of the type of Exception message returned by the API.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the Reset Password Screen, user has to enter the OTP, new password, confirm the same password. And then trigger the submit button. On successful update of password (API endpoint has been sent while initialization of module, as discussed above), the user will be shown a message and then redirected to the Profile Screen. In the other scenario (Failure/Error), the user will be shown a Snackbar with the error received from the API."))),Object(o.b)("p",null,"2.4.4  Edit Profile"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The user is only able to edit the editable fields.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click on Edit icon on top of the profile screen, will make the editable fields open to be edited. The user can then update those fields, after editing, click on the save icon. If successfully updated, the user will see a message notifying of the same. In the other scenario (Failure/Error), the user will be shown a Snackbar with the error received from the API."))),Object(o.b)("h2",{id:"3-faqs"},"3. FAQs"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.1. How to set remotely configured data?")),Object(o.b)("p",null,"We generally use Firebase Remote Config for controlling remote data, but you can are free to use your own custom APIs to get the remote data."))}p.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,h=d["".concat(a,".").concat(b)]||d[b]||u[b]||o;return n?i.a.createElement(h,l({ref:t},c,{components:n})):i.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);