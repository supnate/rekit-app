"use strict";var precacheConfig=[["./index.html","88744f7b8c4459ac0211145330dfbe1b"],["./static/css/main.d6283473.css","5f6105217db09001152c06e61f175e87"],["./static/media/rekit-logo.7480cbd9.svg","7480cbd986c663c3c6b8d6ecc3a707ee"],["./static/media/roboto-v19-latin-100.5cb7edfc.woff","5cb7edfceb233100075dc9a1e12e8da3"],["./static/media/roboto-v19-latin-100.6906d86d.eot","6906d86d9bc67920de4234d88edbc6d9"],["./static/media/roboto-v19-latin-100.7370c367.woff2","7370c3679472e9560965ff48a4399d0b"],["./static/media/roboto-v19-latin-100.bdd892cd.svg","bdd892cdf337fc8975aca7ccab6ea06c"],["./static/media/roboto-v19-latin-100.ff1e90ce.ttf","ff1e90ce3376de433388ec3fc415aa0f"],["./static/media/roboto-v19-latin-300.806854d4.ttf","806854d4422d0bd79e0f8c87c329a568"],["./static/media/roboto-v19-latin-300.b00849e0.woff","b00849e00f4c2331cddd8ffb44a6720b"],["./static/media/roboto-v19-latin-300.bda729db.eot","bda729dbf749cbb9a8e480fa2deec2e9"],["./static/media/roboto-v19-latin-300.dd0bea1f.svg","dd0bea1f9a808d633492fa573039ca1d"],["./static/media/roboto-v19-latin-300.ef7c6637.woff2","ef7c6637c68f269a882e73bcb57a7f6a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});