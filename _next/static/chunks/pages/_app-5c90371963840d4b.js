(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2962:function(e,t,r){"use strict";r.d(t,{PB:function(){return u}});var n=r(9008),o=r(7294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,p(e,t)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}var l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},c=function(e,t,r){void 0===t&&(t=[]);var n=void 0===r?{}:r,a=n.defaultWidth,i=n.defaultHeight;return t.reduce((function(t,r,n){return t.push(o.createElement("meta",{key:"og:"+e+":0"+n,property:"og:"+e,content:r.url})),r.alt&&t.push(o.createElement("meta",{key:"og:"+e+":alt0"+n,property:"og:"+e+":alt",content:r.alt})),r.secureUrl&&t.push(o.createElement("meta",{key:"og:"+e+":secure_url0"+n,property:"og:"+e+":secure_url",content:r.secureUrl.toString()})),r.type&&t.push(o.createElement("meta",{key:"og:"+e+":type0"+n,property:"og:"+e+":type",content:r.type.toString()})),r.width?t.push(o.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:r.width.toString()})):a&&t.push(o.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:a.toString()})),r.height?t.push(o.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:r.height.toString()})):i&&t.push(o.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:i.toString()})),t}),[])},s=function(e){var t,r,n,i=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var p="";e.title?(p=e.title,l.templateTitle&&(p=l.templateTitle.replace(/%s/g,(function(){return p})))):e.defaultTitle&&(p=e.defaultTitle),p&&i.push(o.createElement("title",{key:"title"},p));var s,u,d=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,h=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow,f="";if(e.robotsProps){var m=e.robotsProps,g=m.nosnippet,y=m.maxSnippet,v=m.maxImagePreview,b=m.maxVideoPreview,k=m.noarchive,G=m.noimageindex,O=m.notranslate,w=m.unavailableAfter;f=(g?",nosnippet":"")+(y?",max-snippet:"+y:"")+(v?",max-image-preview:"+v:"")+(k?",noarchive":"")+(w?",unavailable_after:"+w:"")+(G?",noimageindex":"")+(b?",max-video-preview:"+b:"")+(O?",notranslate":"")}(d||h?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),i.push(o.createElement("meta",{key:"robots",name:"robots",content:(d?"noindex":"index")+","+(h?"nofollow":"follow")+f}))):i.push(o.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+f})),e.description&&i.push(o.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&i.push(o.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){i.push(o.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&i.push(o.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&i.push(o.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&i.push(o.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&i.push(o.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||p)&&i.push(o.createElement("meta",{key:"og:title",property:"og:title",content:(null==(s=e.openGraph)?void 0:s.title)||p}));(null!=(r=e.openGraph)&&r.description||e.description)&&i.push(o.createElement("meta",{key:"og:description",property:"og:description",content:(null==(u=e.openGraph)?void 0:u.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&i.push(o.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var E=e.openGraph.type.toLowerCase();i.push(o.createElement("meta",{key:"og:type",property:"og:type",content:E})),"profile"===E&&e.openGraph.profile?(e.openGraph.profile.firstName&&i.push(o.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&i.push(o.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&i.push(o.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&i.push(o.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===E&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){i.push(o.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&i.push(o.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&i.push(o.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){i.push(o.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===E&&e.openGraph.article?(e.openGraph.article.publishedTime&&i.push(o.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&i.push(o.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&i.push(o.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){i.push(o.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&i.push(o.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){i.push(o.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==E&&"video.episode"!==E&&"video.tv_show"!==E&&"video.other"!==E||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&i.push(o.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&i.push(o.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){i.push(o.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){i.push(o.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&i.push(o.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&i.push(o.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){i.push(o.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&i.push(o.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&i.push.apply(i,c("image",e.openGraph.images,{defaultWidth:l.defaultOpenGraphImageWidth,defaultHeight:l.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&i.push.apply(i,c("video",e.openGraph.videos,{defaultWidth:l.defaultOpenGraphVideoWidth,defaultHeight:l.defaultOpenGraphVideoHeight})),e.openGraph.audio&&i.push.apply(i,c("audio",e.openGraph.audio)),e.openGraph.locale&&i.push(o.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&i.push(o.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&i.push(o.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,r,n;i.push(o.createElement("meta",a({key:"meta:"+(null!=(t=null!=(r=null!=(n=e.keyOverride)?n:e.name)?r:e.property)?t:e.httpEquiv)},e)))})),null!=(n=e.additionalLinkTags)&&n.length&&e.additionalLinkTags.forEach((function(e){var t;i.push(o.createElement("link",a({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),i},u=(o.Component,function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.noindex,a=void 0!==r&&r,i=e.nofollow,p=e.robotsProps,l=e.description,c=e.canonical,u=e.openGraph,d=e.facebook,h=e.twitter,f=e.additionalMetaTags,m=e.titleTemplate,g=e.defaultTitle,y=e.mobileAlternate,v=e.languageAlternates,b=e.additionalLinkTags;return o.createElement(n.default,null,s({title:t,noindex:a,nofollow:i,robotsProps:p,description:l,canonical:c,facebook:d,openGraph:u,additionalMetaTags:f,twitter:h,titleTemplate:m,defaultTitle:g,mobileAlternate:y,languageAlternates:v,additionalLinkTags:b}))},t}(o.Component)),d=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"});new RegExp("["+Object.keys(d).join("")+"]","g")},8e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(8e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},2717:function(e,t,r){"use strict";var n=r(930);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=u,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),p=(a=r(1585))&&a.__esModule?a:{default:a},l=r(8e3),c=r(5850),s=r(5646);function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var p=o.key.slice(o.key.indexOf("$")+1);e.has(p)?a=!1:e.add(p)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var l=0,c=h.length;l<c;l++){var s=h[l];if(o.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?a=!1:r.add(s);else{var u=o.props[s],d=n[s]||new Set;"name"===s&&i||!d.has(u)?(d.add(u),n[s]=d):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var p=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return p["data-href"]=p.href,p.href=void 0,p["data-optimized-fonts"]=!0,i.default.cloneElement(e,p)}return i.default.cloneElement(e,{key:a})}))}var m=function(e){var t=e.children,r=i.useContext(l.AmpStateContext),n=i.useContext(c.HeadManagerContext);return i.default.createElement(p.default,{reduceComponentsToState:f,headManager:n,inAmpMode:s.isInAmpMode(r)},t)};t.default=m},1585:function(e,t,r){"use strict";var n=r(7980),o=r(3227),a=r(8361),i=(r(2191),r(5971)),p=r(2715),l=r(1193);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var u=function(e){i(r,e);var t=c(r);function r(e){var a;return o(this,r),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(s.Component);t.default=u},3611:function(e,t,r){"use strict";r.r(t);var n=r(9499),o=(r(906),r(2962)),a=r(9008),i=r(5893);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.default,{children:[(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,i.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,i.jsx)("meta",{name:"robots",content:"all"})]}),(0,i.jsx)(o.PB,{title:"Educational institutions in Liberia",titleTemplate:"Educational institutions in Liberia",defaultTitle:"Educational institutions in Liberia",description:"Find all the educational institutions in Liberia and details about location,contacts, facilities, ratings and more",canonical:"https://studyinliberia.xyz",openGraph:{url:"https://studyinliberia.xyz",title:"Educational institutions in Liberia",description:"Find all the educational institutions in Liberia and details about location,contacts, facilities, ratings and more",images:[{url:"https://studyinliberia.xyz/freddie-marriage.png",width:800,height:420,alt:"Educational institutions in Liberia"}]}}),(0,i.jsx)(t,l({},r))," "]})}},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3611)}])},906:function(){},9008:function(e,t,r){e.exports=r(2717)},9499:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(9898)}));var r=e.O();_N_E=r}]);