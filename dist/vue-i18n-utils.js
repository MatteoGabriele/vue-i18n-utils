/*!
 * vue-i18n-utils v0.1.0
 * (c) 2017 Matteo Gabriele
 * Released under the MIT License.
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=15)}([function(t,e){t.exports=function(t,e,n,r){var o,a=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(o=t,a=t.default);var u="function"==typeof a?a.options:a;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var s=Object.create(u.computed||null);Object.keys(r).forEach(function(t){var e=r[t];s[t]=function(){return e}}),u.computed=s}return{esModule:o,exports:a,options:u}}},function(t,e,n){var r=n(0)(n(4),n(10),null,null);t.exports=r.exports},function(t,e,n){var r={};r.$style=n(11);var o=n(0)(n(5),n(9),null,r);t.exports=o.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.warn=function(t){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&console.warn("[vue-i18n-utils] "+t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"language-switcher",props:{label:{type:String,default:"code"}},computed:{languages:function(){return this.$store.getters.availableLanguages}},methods:{getLabel:function(t){var e=t[this.label];return e?e:t.code}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(3),a=n(8),i=n(14);e.default={name:"translation-tool",props:{label:{type:String,default:"code"}},mounted:function(){this.$store.dispatch(a.events.SET_FORCE_TRANSLATION,!0)},beforeDestroy:function(){this.$store.dispatch(a.events.SET_FORCE_TRANSLATION,!1)},data:function(){return{isOpen:!1}},computed:r({},(0,i.mapGetters)(["currentLanguage","languageFilter","languages","availableLanguages"])),methods:{isActive:function(t){var e=t.code;return this.currentLanguage.code===e},close:function(){this.isOpen=!1},filtered:function(t){var e=t.code;return 0===this.availableLanguages.filter(function(t){return t.code===e}).length},getLabel:function(t){var e=t[this.label];return e?e:((0,o.warn)('Label "'+this.label+'" doesn\'t exist in the language with code "'+t.code+'"'),t.code)},toggle:function(){this.isOpen=!this.isOpen}}}},function(t,e,n){e=t.exports=n(7)(),e.push([t.i,'.afa47{max-width:400px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;position:fixed;bottom:0;left:20px;width:100%;z-index:99999999;background:#e8e8e8;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center}._8ed78{background:#3ab882;color:#fff;padding:10px;cursor:pointer;position:relative}._8ed78,.eafaf{max-width:100%;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%}._6662f{max-width:100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;display:-webkit-flex;display:-ms-flexbox;display:flex}._9fc3e{max-width:100%;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;position:relative;border:none;min-height:20px;background:#3ab882;outline:none;cursor:pointer;padding:10px;color:#333;border-top:1px solid #c8c8c8;border-right:1px solid #c8c8c8;border-left:1px solid #c8c8c8;background:#fff}._9fc3e:hover{background:#f8f8f8}.f805f,.f805f:hover{background:#e7e7e7}.e3709{position:absolute;top:48%;right:20px;-webkit-transform:translateY(-50%) rotate(180deg);-ms-transform:translateY(-50%) rotate(180deg);transform:translateY(-50%) rotate(180deg);-webkit-transform-origin:left center;-ms-transform-origin:left center;transform-origin:left center;display:block;width:10px;height:10px}.e3709:after,.e3709:before{content:"";display:block;position:absolute;top:0;left:0;background:#fff;width:1px;height:100%}.e3709:before{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);left:-70%}.e3709:after{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}._59548{-webkit-transform:translateY(-50%) rotate(0deg);-ms-transform:translateY(-50%) rotate(0deg);transform:translateY(-50%) rotate(0deg)}.d8cb9{position:absolute;top:50%;right:20px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:1px solid gray;border-radius:50%;width:5px;height:5px;display:block}._79a2a,._459d6{border-color:#3ab882}._79a2a{background:#3ab882}',""]),e.locals={"translation-tool":"afa47",translationTool:"afa47",selectedLanguage:"_8ed78","language-container":"eafaf",languageContainer:"eafaf",buttonsWrapper:"_6662f",language:"_9fc3e","active-language":"f805f _9fc3e",activeLanguage:"f805f _9fc3e",arrow:"e3709","arrow-active":"_59548 e3709",arrowActive:"_59548 e3709",dot:"d8cb9",filtered:"_459d6 d8cb9",available:"_79a2a d8cb9"}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(t,e,n){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=13)}([function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i}),n.d(e,"e",function(){return u});var r="vue-i18n-manager",o=function(t){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&console.warn("["+r+"] "+t)},a=function(){return"undefined"!=typeof window},i=function(){if(a)return window.localStorage;var t=function(){};return{getItem:t,setItem:t,remove:t,clear:t}},u=function(t){return r+"/"+t}},function(t,e,n){"use strict";var r=n(0);e.a={REMOVE_LANGUAGE_PERSISTENCY:n.i(r.e)("REMOVE_LANGUAGE_PERSISTENCY"),UPDATE_CONFIGURATION:n.i(r.e)("UPDATE_CONFIGURATION"),SET_LANGUAGE:n.i(r.e)("SET_LANGUAGE"),SET_TRANSLATION:n.i(r.e)("SET_TRANSLATION"),SET_FORCE_TRANSLATION:n.i(r.e)("SET_FORCE_TRANSLATION"),ADD_LANGUAGE:n.i(r.e)("ADD_LANGUAGE"),ADD_TRANSLATION:n.i(r.e)("ADD_TRANSLATION"),FILTER_LANGUAGES:n.i(r.e)("FILTER_LANGUAGES"),UPDATE_TRANSLATION:n.i(r.e)("UPDATE_TRANSLATION")}},function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return a});var o={getTranslation:null,localStorage:n.i(r.b)()},a=function(t,e){o[t]=e};e.b=o},function(t,e,n){"use strict";var r=n(0);n.d(e,"d",function(){return a}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return s});var o=function(t,e){return t.filter(function(t){return e.indexOf(t)<0})},a=function(t,e){var o=e.code;return!t.find(function(t){return t.code===o})||(n.i(r.c)('"'+o+'" already exists in the list of languages'),!1)},i=function(t){var e=["code","translationKey","urlPrefix"],a=Object.keys(t),i=o(e,a);return!i.length||(n.i(r.c)('Invalid definition. Property "'+i.join(", ")+'" missing in "'+t.code+'".'),!1)},u=function(t,e){var o=void 0;return t.forEach(function(t){i(t),t.code===e&&(o=t)}),!!o||(n.i(r.c)("The default code must matches at least one language in the provided list"),!1)},s=function(t,e,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=o(t,e);return!u.length||(u.forEach(function(t){var e=i.find(function(e){return e.old===t});if(e)return void n.i(r.c)('"'+t+'" is a deprecated parameter. Please use "'+e.new+'"');n.i(r.c)('"'+t+'" is not a valid parameter to pass to '+a)}),!1)}},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var o=n(1),a=n(0);n.d(e,"d",function(){return s}),n.d(e,"a",function(){return f}),n.d(e,"c",function(){return d});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=function(t,e){var n=t.params||{},r=i({},t),o=r.path;return delete r.path,Object.assign({},r,{path:o,params:i({},n,{lang:e})})},s=function(t,e){var n=t.currentRoute;t&&n&&t.replace(u(n,e))},c=function(t,e){return e.find(function(e){return e.urlPrefix===t})},l=function(){if(a.a)return window.location.pathname.split("/")[1]},f=function(t,e){if(t){var n=t.currentRoute.params.lang||l(),r=c(n,e.getters.languages);r?e.dispatch(o.a.SET_LANGUAGE,r.urlPrefix):s(t,e.getters.defaultCode),t.beforeEach(function(t,n,r){var a=e.getters,i=a.availableLanguages,s=a.currentLanguage,c=a.forceTranslation,l=a.languages,f=t.params.lang,d=c?l:i,p=d.find(function(t){return t.urlPrefix===f});return p&&n.name?p&&p.urlPrefix!==s.urlPrefix?e.dispatch(o.a.SET_LANGUAGE,p.code).then(function(){return r()}):void r():r(u(t,s.urlPrefix))}),t.afterEach(function(n,r){var o=n.params.lang,a=e.getters.currentLanguage;a.urlPrefix!==o&&t.replace(u(n,a.urlPrefix))})}},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";return t.forEach(function(t){var e=t.path;t.path="/:lang"+e}),[].concat(r(t),[{path:"/*",redirect:{path:"/"+e}}])};e.b=function(t,e,n){t.prototype.$localize=function(t){return u(t,n.getters.currentLanguage.urlPrefix)}}},function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.router,o=e.store;n.i(a.a)(o),n.i(i.a)(t,r,o),n.i(u.b)(t,r,o),e.proxy&&Object.keys(e.proxy).forEach(function(t){return n.i(s.a)(t,e.proxy[t])}),t.initI18nManager=c(t,e)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),a=n(7),i=n(6),u=n(4),s=n(2);n.d(e,"routeParser",function(){return u.c}),n.d(e,"events",function(){return o.a}),e.default=r;var c=function(t,e){var r=e.store,a=e.router,i=e.config;return function(){return Promise.all([r.dispatch(o.a.UPDATE_CONFIGURATION,i),r.dispatch(o.a.SET_LANGUAGE,r.getters.defaultCode)]).then(function(t){n.i(u.a)(a,r)})}}},function(t,e,n){"use strict";var r=n(1),o=n(4),a=n(0),i=function(t,e){t.length>0&&(t=t.map(function(t){return'"'+t+'"'}),n.i(a.c)("No match found for "+t.join(", ")+' in "'+e+'"'))},u=function(t,e){if(!e)return t;var n=t,r=[],o=new RegExp(/\{.*?}s?/g),a=t.match(o),u=Object.keys(e);return a?(a.forEach(function(n,o){var a=n.slice(1,-1),i=e[a],s=u[o];if(!i&&s)return void r.push(s);t=t.replace(n,i)}),i(r,n),t):void 0},s=function(t,e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.getters.defaultCode,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.dispatch(r.a.SET_LANGUAGE,a).then(function(){i&&t&&n.i(o.d)(t,e.getters.currentLanguage.urlPrefix)})}},c=function(t){return function(e,r){for(var o=t.getters,i=o.translation,s=o.currentLanguage,c=s.translationKey,l=e.split("."),f=i;l.length;){var d=l.shift();if(!f[d])return n.i(a.c)('"'+e+'" key doesn\'t exist in "'+c+'" translation object'),e;f=f[d]}return"string"!=typeof f&&(f=null),i&&f?u(f,r):e}};e.a=function(t,e,n){t.prototype.$setLanguage=s(e,n),t.prototype.$t=c(n)}},function(t,e,n){"use strict";var r=n(10),o=n(0);e.a=function(t){if(!t)return void n.i(o.c)("You need to add the VuexStore instance in the plugin options");t.registerModule(o.d,r.a)}},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o,a=n(0),i=n(2),u=n(3),s=n(1);e.a=o={},r(o,s.a.REMOVE_LANGUAGE_PERSISTENCY,function(t){(0,t.commit)(s.a.REMOVE_LANGUAGE_PERSISTENCY)}),r(o,s.a.SET_FORCE_TRANSLATION,function(t,e){(0,t.commit)(s.a.SET_FORCE_TRANSLATION,e)}),r(o,s.a.UPDATE_CONFIGURATION,function(t){var e=t.commit,r=(t.state,t.getters),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"function"==typeof o?void n.i(a.c)("Configuration must be an object or a promise. Check documentation"):o&&o.then?o.then(function(t){e(s.a.UPDATE_CONFIGURATION,t),e(s.a.SET_LANGUAGE,r.defaultCode)}):void e(s.a.UPDATE_CONFIGURATION,o)}),r(o,s.a.SET_TRANSLATION,function(t,e){(0,t.commit)(s.a.SET_TRANSLATION,e)}),r(o,s.a.UPDATE_TRANSLATION,function(t,e){(0,t.commit)(s.a.UPDATE_TRANSLATION,e)}),r(o,s.a.ADD_TRANSLATION,function(t,e){(0,t.commit)(s.a.ADD_TRANSLATION,e)}),r(o,s.a.ADD_LANGUAGE,function(t,e){var r=(t.dispatch,t.commit);n.i(u.a)(e)&&r(s.a.ADD_LANGUAGE,e)}),r(o,s.a.SET_LANGUAGE,function(t,e){var r=t.dispatch,o=t.commit,u=t.state,c=u.languages.find(function(t){return t.code===e||t.urlPrefix===e}),l=c||u.currentLanguage;if(!(u.currentLanguage&&l.code===u.currentLanguage.code||(o(s.a.SET_LANGUAGE,l.code),u.translations[l.translationKey])))return i.b.getTranslation?void i.b.getTranslation(l).then(function(t){r(s.a.SET_TRANSLATION,{translation:t,code:l.code})}):void n.i(a.c)('Translation is missing for "'+l.code+'"')})},function(t,e,n){"use strict";var r=n(2);e.a={availableLanguages:function(t){return t.availableLanguages},languages:function(t){return t.languages},currentLanguage:function(t){return t.currentLanguage},urlPrefix:function(t){return t.currentLanguage.urlPrefix},languageFilter:function(t){return t.languageFilter},translation:function t(e){var t=e.translation,n=e.translations,r=e.currentLanguage;if(!r)return{};var o=n[r.translationKey];return o?o:t},forceTranslation:function(t){return t.forceTranslation},defaultCode:function(t){var e=r.b.localStorage.getItem(t.storageKey),n=t.forceTranslation?t.languages:t.availableLanguages,o=t.persistent&&e,a=n.find(function(t){return t.code===e});return o&&a?e:t.defaultCode}}},function(t,e,n){"use strict";var r=n(11),o=n(12),a=n(9),i=n(8);e.a={state:o.a,mutations:r.a,getters:a.a,actions:i.a}},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o,a=n(2),i=n(0),u=n(3),s=n(1),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l=(o={},r(o,s.a.REMOVE_LANGUAGE_PERSISTENCY,function(t){t.persistent=!1}),r(o,s.a.SET_FORCE_TRANSLATION,function(t,e){t.forceTranslation=e}),r(o,s.a.SET_TRANSLATION,function(t,e){var n=e.translation,o=e.code,a=t.languages,i=t.currentLanguage.translationKey,u=a.find(function(t){return t.code===o}),s=u&&(u.translationKey||i);t.translations=c({},t.translations,r({},s,n)),t.translation=n}),r(o,s.a.ADD_TRANSLATION,function(t,e){var n=e.translation,o=e.code,a=t.languages,i=a.find(function(t){return t.code===o});i&&(t.translations=c({},t.translations,r({},i.translationKey,n)))}),r(o,s.a.UPDATE_TRANSLATION,function(t,e){var o=e.keys,a=e.code,u=t.languages,s=u.find(function(t){return t.code===a});if(!s)return void n.i(i.c)('Language with "'+a+"\" as code doesn't exist");var l=Object.assign(t.translations[s.translationKey],o);t.translations=c({},t.translations,r({},s.translationKey,l))}),r(o,s.a.UPDATE_CONFIGURATION,function(t,e){var r=Object.keys(e),o=Object.keys(t),a={};o.forEach(function(t){void 0!==e[t]&&(a[t]=e[t])}),t=Object.assign(t,a),t.availableLanguages=t.languages,t.languageFilter.length>0&&t.availableLanguages.length>1&&(t.availableLanguages=t.availableLanguages.filter(function(e){return t.languageFilter.indexOf(e.code)!==-1})),n.i(u.b)(r,o,"config",["path","trustURL"]),n.i(u.c)(t.availableLanguages,t.defaultCode)}),r(o,s.a.ADD_LANGUAGE,function(t,e){n.i(u.d)(t.languages,e)&&t.languages.push(e)}),r(o,s.a.SET_LANGUAGE,function(t,e){var n=t.persistent,r=t.storageKey,o=t.forceTranslation,i=t.languages,u=t.availableLanguages,s=o?i:u,c=s.find(function(t){return t.code===e});c&&(n&&a.b.localStorage.setItem(r,c.code),t.currentLanguage=c)}),o);e.a=l},function(t,e,n){"use strict";var r={name:"English",code:"en-GB",urlPrefix:"en",translationKey:"en"},o={currentLanguage:r,translation:{},translations:{},forceTranslation:!1,persistent:!1,storageKey:"language_key",defaultCode:r.code,availableLanguages:[r],languages:[r],languageFilter:[]};e.a=o},function(t,e,n){t.exports=n(5)}])})},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.translationTool},[n("div",{class:t.$style.languageContainer},[n("div",{class:t.$style.selectedLanguage,on:{click:t.toggle}},[n("span",{class:t.isOpen?t.$style.arrowActive:t.$style.arrow}),t._v(" "),n("p",[t._v("Selected language: "),n("b",[t._v(t._s(t.getLabel(t.currentLanguage)))])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],class:t.$style.buttonsWrapper},t._l(t.languages,function(e){return n("button",{class:t.isActive(e)?t.$style.activeLanguage:t.$style.language,on:{click:function(n){t.$setLanguage(e.code)}}},[n("span",[t._v(t._s(t.getLabel(e)))]),t._v(" "),n("span",{class:t.filtered(e)?t.$style.filtered:t.$style.available,attrs:{title:t.filtered(e)?"Language is filtered":"Language is available"}})])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-switcher"},[n("div",{staticClass:"language-switcher-wrapper"},t._l(t.languages,function(e){return n("button",{staticClass:"button language",on:{click:function(n){t.$setLanguage(e.code)}}},[n("span",{staticClass:"label"},[t._v(t._s(t.getLabel(e)))])])}))])},staticRenderFns:[]}},function(t,e,n){var r=n(6);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(12)("dfdd887a",r,!0)},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:a}}}}function o(t,e){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=a[0],u=a[1],s=a[2],c=a[3],l={css:u,media:s,sourceMap:c};r[i]?(l.id=t+":"+r[i].parts.length,r[i].parts.push(l)):(l.id=t+":0",n.push(r[i]={id:i,parts:[l]}))}return n}function a(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function i(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]'),o=null!=r;if(o&&g)return h;if(v){var i=p++;r=d||(d=a()),e=u.bind(null,r,i,!1),n=u.bind(null,r,i,!0)}else r=r||a(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return o||e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function u(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(13),l={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,g=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){g=n;var a=o(t,e);return r(a),function(e){for(var n=[],i=0;i<a.length;i++){var u=a[i],s=l[u.id];s.refs--,n.push(s)}e?(a=o(t,e),r(a)):a=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=a[0],u=a[1],s=a[2],c=a[3],l={id:t+":"+o,css:u,media:s,sourceMap:c};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}},function(t,e,n){"use strict";function r(t){O&&(t._devtoolHook=O,O.emit("vuex:init",t),O.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){O.emit("vuex:mutation",t,e)}))}function o(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function a(t){return null!==t&&"object"==typeof t}function i(t){return t&&"function"==typeof t.then}function u(t,e){if(!t)throw new Error("[vuex] "+e)}function s(t,e){if(t.update(e),e.modules)for(var n in e.modules){if(!t.getChild(n))return void console.warn("[vuex] trying to add a new module '"+n+"' on hot reloading, manual reload is needed");s(t.getChild(n),e.modules[n])}}function c(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;f(t,n,[],t._modules.root,!0),l(t,n,e)}function l(t,e,n){var r=t._vm;t.getters={};var a=t._wrappedGetters,i={};o(a,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var u=S.config.silent;S.config.silent=!0,t._vm=new S({data:{$$state:e},computed:i}),S.config.silent=u,t.strict&&m(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),S.nextTick(function(){return r.$destroy()}))}function f(t,e,n,r,o){var a=!n.length,i=t._modules.getNamespace(n);if(i&&(t._modulesNamespaceMap[i]=r),!a&&!o){var u=_(e,n.slice(0,-1)),s=n[n.length-1];t._withCommit(function(){S.set(u,s,r.state)})}var c=r.context=d(t,i,n);r.forEachMutation(function(e,n){g(t,i+n,e,c)}),r.forEachAction(function(e,n){h(t,i+n,e,c)}),r.forEachGetter(function(e,n){v(t,i+n,e,c)}),r.forEachChild(function(r,a){f(t,e,n.concat(a),r,o)})}function d(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var a=y(n,r,o),i=a.payload,u=a.options,s=a.type;return u&&u.root||(s=e+s,t._actions[s])?t.dispatch(s,i):void console.error("[vuex] unknown local action type: "+a.type+", global type: "+s)},commit:r?t.commit:function(n,r,o){var a=y(n,r,o),i=a.payload,u=a.options,s=a.type;if(!(u&&u.root||(s=e+s,t._mutations[s])))return void console.error("[vuex] unknown local mutation type: "+a.type+", global type: "+s);t.commit(s,i,u)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return p(t,e)}},state:{get:function(){return _(t.state,n)}}}),o}function p(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var a=o.slice(r);Object.defineProperty(n,a,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function g(t,e,n,r){(t._mutations[e]||(t._mutations[e]=[])).push(function(t){n(r.state,t)})}function h(t,e,n,r){(t._actions[e]||(t._actions[e]=[])).push(function(e,o){var a=n({dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return i(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):a})}function v(t,e,n,r){if(t._wrappedGetters[e])return void console.error("[vuex] duplicate getter key: "+e);t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}function m(t){t._vm.$watch(function(){return this._data.$$state},function(){u(t._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function _(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function y(t,e,n){return a(t)&&t.type&&(n=e,e=t,t=t.type),u("string"==typeof t,"Expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:n}}function b(t){if(S)return void console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.");S=t,E(S)}function x(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function A(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function w(t,e,n){var r=t._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+e+"(): "+n),r}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"Store",function(){return G}),n.d(e,"mapState",function(){return k}),n.d(e,"mapMutations",function(){return P}),n.d(e,"mapGetters",function(){return R}),n.d(e,"mapActions",function(){return j});var E=function(t){function e(){var t=this.$options;t.store?this.$store=t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}if(Number(t.version.split(".")[0])>=2){var n=t.config._lifecycleHooks.indexOf("init")>-1;t.mixin(n?{init:e}:{beforeCreate:e})}else{var r=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,r.call(this,t)}}},O="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,T=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t},L={state:{},namespaced:{}};L.state.get=function(){return this._rawModule.state||{}},L.namespaced.get=function(){return!!this._rawModule.namespaced},T.prototype.addChild=function(t,e){this._children[t]=e},T.prototype.removeChild=function(t){delete this._children[t]},T.prototype.getChild=function(t){return this._children[t]},T.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},T.prototype.forEachChild=function(t){o(this._children,t)},T.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},T.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},T.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(T.prototype,L);var N=function(t){var e=this;this.root=new T(t,!1),t.modules&&o(t.modules,function(t,n){e.register([n],t,!1)})};N.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},N.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},N.prototype.update=function(t){s(this.root,t)},N.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var a=this.get(t.slice(0,-1)),i=new T(e,n);a.addChild(t[t.length-1],i),e.modules&&o(e.modules,function(e,o){r.register(t.concat(o),e,n)})},N.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var S,G=function(t){var e=this;void 0===t&&(t={}),u(S,"must call Vue.use(Vuex) before creating a store instance."),u("undefined"!=typeof Promise,"vuex requires a Promise polyfill in this browser.");var n=t.state;void 0===n&&(n={});var o=t.plugins;void 0===o&&(o=[]);var a=t.strict;void 0===a&&(a=!1),this._committing=!1,this._actions=Object.create(null),this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new N(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new S;var i=this,s=this,c=s.dispatch,d=s.commit;this.dispatch=function(t,e){return c.call(i,t,e)},this.commit=function(t,e,n){return d.call(i,t,e,n)},this.strict=a,f(this,n,[],this._modules.root),l(this,n),o.concat(r).forEach(function(t){return t(e)})},C={state:{}};C.state.get=function(){return this._vm._data.$$state},C.state.set=function(t){u(!1,"Use store.replaceState() to explicit replace store state.")},G.prototype.commit=function(t,e,n){var r=this,o=y(t,e,n),a=o.type,i=o.payload,u=o.options,s={type:a,payload:i},c=this._mutations[a];if(!c)return void console.error("[vuex] unknown mutation type: "+a);this._withCommit(function(){c.forEach(function(t){t(i)})}),this._subscribers.forEach(function(t){return t(s,r.state)}),u&&u.silent&&console.warn("[vuex] mutation type: "+a+". Silent option has been removed. Use the filter functionality in the vue-devtools")},G.prototype.dispatch=function(t,e){var n=y(t,e),r=n.type,o=n.payload,a=this._actions[r];return a?a.length>1?Promise.all(a.map(function(t){return t(o)})):a[0](o):void console.error("[vuex] unknown action type: "+r)},G.prototype.subscribe=function(t){var e=this._subscribers;return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}},G.prototype.watch=function(t,e,n){var r=this;return u("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},G.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},G.prototype.registerModule=function(t,e){"string"==typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.register(t,e),f(this,this.state,t,this._modules.get(t)),l(this,this.state)},G.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var n=_(e.state,t.slice(0,-1));S.delete(n,t[t.length-1])}),c(this)},G.prototype.hotUpdate=function(t){this._modules.update(t),c(this,!0)},G.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(G.prototype,C),"undefined"!=typeof window&&window.Vue&&b(window.Vue);var k=A(function(t,e){var n={};return x(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=w(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"==typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),P=A(function(t,e){var n={};return x(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(!t||w(this.$store,"mapMutations",t))return this.$store.commit.apply(this.$store,[o].concat(e))}}),n}),R=A(function(t,e){var n={};return x(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||w(this.$store,"mapGetters",t))return o in this.$store.getters?this.$store.getters[o]:void console.error("[vuex] unknown getter: "+o)},n[r].vuex=!0}),n}),j=A(function(t,e){var n={};return x(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(!t||w(this.$store,"mapActions",t))return this.$store.dispatch.apply(this.$store,[o].concat(e))}}),n}),I={Store:G,install:b,version:"2.2.1",mapState:k,mapMutations:P,mapGetters:R,mapActions:j};e.default=I},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.component("translation-tool",i.default),t.component("language-switcher",s.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var a=n(2),i=r(a),u=n(1),s=r(u)}])});