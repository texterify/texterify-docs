"use strict";(self.webpackChunktexterify_docs=self.webpackChunktexterify_docs||[]).push([[614],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3578:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(4137)),i=["components"],l={title:"Installation",sidebar_position:0},s=void 0,c={unversionedId:"installation/installation",id:"installation/installation",title:"Installation",description:"This guide covers the installation and configuration of the on-premise (self hosting) version of Texterify. If you are using the cloud version you can ignore this installation instructions, because all of the things are already covered by the Texterify team for you.",source:"@site/docs/installation/installation.md",sourceDirName:"installation",slug:"/installation/",permalink:"/installation/",draft:!1,editUrl:"https://github.com/texterify/texterify-docs/edit/master/docs/installation/installation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Installation",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Configuration",permalink:"/installation/configuration"}},u={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Starting the service",id:"starting-the-service",level:2},{value:"Creating the admin account",id:"creating-the-admin-account",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This guide covers the installation and configuration of the on-premise (self hosting) version of Texterify. If you are using the cloud version you can ignore this installation instructions, because all of the things are already covered by the Texterify team for you."))),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Tools:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"docker"),(0,a.kt)("li",{parentName:"ul"},"docker-compose")),(0,a.kt)("p",null,"Accounts/Servers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Email server or email provider account (optional but recommended)"),(0,a.kt)("li",{parentName:"ul"},"DeepL account (optional)"),(0,a.kt)("li",{parentName:"ul"},"Google Cloud Account (optional)")),(0,a.kt)("h2",{id:"starting-the-service"},"Starting the service"),(0,a.kt)("p",null,"To get you up as easy as possible run the following commands to get a complete docker-compose setup up and running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Clone the docker-compose configuration.\ngit clone https://github.com/texterify/texterify-docker-compose-setup.git\ncd texterify-docker-compose-setup\n\n# Generate a secret key for the app.\n# Make sure to keep this private.\necho SECRET_KEY_BASE=`openssl rand -hex 64` > secrets.env\n\n# Open the .env file and replace "example.com" with your host (if you\n# are trying to run Texterify locally just use "localhost" as host).\n# Also make sure to check out the other configuration options (see below).\n\n# Start the service.\ndocker volume create --name=texterify-database\ndocker volume create --name=texterify-assets\ndocker-compose up --always-recreate-deps\n\n# After everything has started create the database in another terminal.\ndocker-compose exec app bin/rails db:create db:migrate db:seed\n')),(0,a.kt)("p",null,"The service is now available at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost"},"http://localhost")," (or whatever you have set your ",(0,a.kt)("inlineCode",{parentName:"p"},"APP_HOST")," to). \ud83c\udf89"),(0,a.kt)("h2",{id:"creating-the-admin-account"},"Creating the admin account"),(0,a.kt)("p",null,"After installation you should immediately create an account, because the first registered user on the system is the instance admin account."))}m.isMDXComponent=!0}}]);