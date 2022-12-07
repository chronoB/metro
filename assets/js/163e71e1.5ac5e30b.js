"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[662],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),m=function(e){return function(n){var t=p(n.components);return r.createElement(e,a({},n,{components:t}))}},p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,h=m["".concat(i,".").concat(u)]||m[u]||c[u]||a;return t?r.createElement(h,l(l({ref:n},s),{},{components:t})):r.createElement(h,l({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},33056:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],l={id:"getting-started",title:"Getting Started"},d=void 0,s={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Install Metro using npm:",source:"@site/../docs/GettingStarted.md",sourceDirName:".",slug:"/getting-started",permalink:"/metro/docs/getting-started",draft:!1,editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/GettingStarted.md",tags:[],version:"current",lastUpdatedAt:1670422033,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"docs",next:{title:"Concepts",permalink:"/metro/docs/concepts"}},m={},p=[{value:"Running <code>metro</code>",id:"running-metro",level:2},{value:"Running Programmatically",id:"running-programmatically",level:3},{value:"Method <code>runMetro(config)</code>",id:"method-runmetroconfig",level:3},{value:"Method <code>runServer(config, options)</code>",id:"method-runserverconfig-options",level:3},{value:"Options",id:"options",level:4},{value:"Method <code>runBuild(config, options)</code>",id:"method-runbuildconfig-options",level:3},{value:"Options",id:"options-1",level:4},{value:"Method <code>createConnectMiddleware(config)</code>",id:"method-createconnectmiddlewareconfig",level:3},{value:"Options",id:"options-2",level:4},{value:"Available options",id:"available-options",level:2},{value:"Configuration",id:"configuration",level:3},{value:"URL and bundle request",id:"url-and-bundle-request",level:2},{value:"Assets",id:"assets",level:3},{value:"Bundle",id:"bundle",level:3},{value:"Source maps",id:"source-maps",level:3},{value:"JavaScript transformer",id:"javascript-transformer",level:2},{value:"Method <code>transform(module)</code>",id:"method-transformmodule",level:3},{value:"Method <code>getCacheKey()</code>",id:"method-getcachekey",level:3}],u={toc:p};function c(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Install Metro using ",(0,a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/"},(0,a.mdx)("inlineCode",{parentName:"a"},"npm")),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev metro metro-core\n")),(0,a.mdx)("p",null,"Or via ",(0,a.mdx)("a",{parentName:"p",href:"https://yarnpkg.com/"},(0,a.mdx)("inlineCode",{parentName:"a"},"yarn")),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev metro metro-core\n")),(0,a.mdx)("h2",{id:"running-metro"},"Running ",(0,a.mdx)("inlineCode",{parentName:"h2"},"metro")),(0,a.mdx)("p",null,"You can run Metro by either running the ",(0,a.mdx)("a",{parentName:"p",href:"/metro/docs/cli"},"CLI")," or by calling it programmatically."),(0,a.mdx)("h3",{id:"running-programmatically"},"Running Programmatically"),(0,a.mdx)("p",null,"First, require the module by doing:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const Metro = require('metro');\n")),(0,a.mdx)("p",null,"Within the object returned, several main methods are given:"),(0,a.mdx)("h3",{id:"method-runmetroconfig"},"Method ",(0,a.mdx)("inlineCode",{parentName:"h3"},"runMetro(config)")),(0,a.mdx)("p",null,"Given the config, a ",(0,a.mdx)("inlineCode",{parentName:"p"},"metro-server")," will be returned. You can then hook this into a proper HTTP(S) server by using its ",(0,a.mdx)("inlineCode",{parentName:"p"},"processRequest")," method:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\nconst http = require('http');\nconst Metro = require('metro');\n\n// We first load the config from the file system\nMetro.loadConfig().then(async (config) => {\n  const metroBundlerServer = await Metro.runMetro(config);\n\n  const httpServer = http.createServer(\n    metroBundlerServer.processRequest.bind(metroBundlerServer),\n  );\n\n  httpServer.listen(8081);\n});\n")),(0,a.mdx)("p",null,"In order to be also compatible with Express apps, ",(0,a.mdx)("inlineCode",{parentName:"p"},"processRequest")," will also call its third parameter when the request could not be handled by Metro. This allows you to integrate the server with your existing server, or to extend a new one:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const httpServer = http.createServer((req, res) => {\n  metroBundlerServer.processRequest(req, res, () => {\n    // Metro does not know how to handle the request.\n  });\n});\n")),(0,a.mdx)("p",null,"If you are using ",(0,a.mdx)("a",{parentName:"p",href:"http://expressjs.com/"},"Express"),", you can just pass ",(0,a.mdx)("inlineCode",{parentName:"p"},"processRequest")," as a middleware:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst app = express();\n\napp.use(\n  metroBundlerServer.processRequest.bind(metroBundlerServer),\n);\n\napp.listen(8081);\n")),(0,a.mdx)("h3",{id:"method-runserverconfig-options"},"Method ",(0,a.mdx)("inlineCode",{parentName:"h3"},"runServer(config, options)")),(0,a.mdx)("p",null,"Starts a development server based on the given configuration and options. Returns the server.\nWe recommend using ",(0,a.mdx)("inlineCode",{parentName:"p"},"runMetro")," instead of ",(0,a.mdx)("inlineCode",{parentName:"p"},"runServer"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"runMetro")," calls this function."),(0,a.mdx)("h4",{id:"options"},"Options"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"host (string)"),": Where to host the server on."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onReady (Function)"),": Called when the server is ready to serve requests."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"secure (boolean)"),": ",(0,a.mdx)("strong",{parentName:"li"},"DEPRECATED")," Whether the server should run on ",(0,a.mdx)("inlineCode",{parentName:"li"},"https")," instead of ",(0,a.mdx)("inlineCode",{parentName:"li"},"http"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"secureKey (string)"),": ",(0,a.mdx)("strong",{parentName:"li"},"DEPRECATED")," The key to use for ",(0,a.mdx)("inlineCode",{parentName:"li"},"https")," when ",(0,a.mdx)("inlineCode",{parentName:"li"},"secure")," is on."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"secureCert (string)"),": ",(0,a.mdx)("strong",{parentName:"li"},"DEPRECATED")," The cert to use for ",(0,a.mdx)("inlineCode",{parentName:"li"},"https")," when ",(0,a.mdx)("inlineCode",{parentName:"li"},"secure")," is on."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"secureServerOptions (Object)"),": The options object to pass to Metro's HTTPS server. The presence of this object will make Metro's server run on ",(0,a.mdx)("inlineCode",{parentName:"li"},"https"),". Refer to the ",(0,a.mdx)("a",{parentName:"li",href:"https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener"},"Node docs")," for valid options."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"waitForBundler (boolean)"),": Whether to wait for the bundler to finish initializing before returning the server instance.")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const config = await Metro.loadConfig();\n\nawait Metro.runServer(config, {\n  port: 8080,\n});\n")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\n\nconst config = await Metro.loadConfig();\n\nawait Metro.runServer(config, {\n  port: 8080,\n  secureServerOptions: {\n    ca: fs.readFileSync('path/to/ca'),\n    cert: fs.readFileSync('path/to/cert'),\n    key: fs.readFileSync('path/to/key'),\n  }\n});\n")),(0,a.mdx)("h3",{id:"method-runbuildconfig-options"},"Method ",(0,a.mdx)("inlineCode",{parentName:"h3"},"runBuild(config, options)")),(0,a.mdx)("p",null,"Given a configuration and a set of options that you would typically pass to a server, plus a set of options specific to the bundle itself, a bundle will be built. The return value is a Promise that resolves to an object with two properties, ",(0,a.mdx)("inlineCode",{parentName:"p"},"code")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"map"),". This is useful at build time."),(0,a.mdx)("h4",{id:"options-1"},"Options"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"dev (boolean)"),": Create a development version of the build (",(0,a.mdx)("inlineCode",{parentName:"li"},"process.env.NODE_ENV = 'development'"),")."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"entry (string)"),": Pointing to the entry file to bundle."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onBegin (Function)"),": Called when the bundling starts."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onComplete (Function)"),": Called when the bundling finishes."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onProgress (Function)"),": Called during the bundle, every time there's new information available about the module count/progress."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"minify (boolean)"),": Whether Metro should minify the bundle."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"out (string)"),": Path to the output bundle."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"platform ('web' | 'android' | 'ios')"),": Which platform to bundle for if a list of platforms is provided."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"sourceMap (boolean)"),": Whether Metro should generate source maps."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"sourceMapUrl (string)"),": URL where the source map can be found. It defaults to the same same URL as the bundle, but changing the extension from ",(0,a.mdx)("inlineCode",{parentName:"li"},".bundle")," to ",(0,a.mdx)("inlineCode",{parentName:"li"},".map"),". When ",(0,a.mdx)("inlineCode",{parentName:"li"},"inlineSourceMap")," is ",(0,a.mdx)("inlineCode",{parentName:"li"},"true"),", this property has no effect.")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const config = await Metro.loadConfig();\n\nawait Metro.runBuild(config, {\n  entry: 'index.js',\n  platform: 'ios',\n  minify: true,\n  out: '/Users/Metro/metro-ios.js'\n});\n")),(0,a.mdx)("h3",{id:"method-createconnectmiddlewareconfig"},"Method ",(0,a.mdx)("inlineCode",{parentName:"h3"},"createConnectMiddleware(config)")),(0,a.mdx)("p",null,"Instead of creating the full server, creates a Connect middleware that answers to bundle requests. This middleware can then be plugged into your own servers. The ",(0,a.mdx)("inlineCode",{parentName:"p"},"port")," parameter is optional and only used for logging purposes."),(0,a.mdx)("h4",{id:"options-2"},"Options"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"port (number)"),": Port for the Connect middleware (only for logging purposes).")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const Metro = require('metro');\nconst express = require('express');\nconst app = express();\nconst server = require('http').Server(app);\n\nMetro.loadConfig().then(async config => {\n  const connectMiddleware = await Metro.createConnectMiddleware(config);\n  const {server: {port}} = config;\n\n  app.use(connectMiddleware.middleware);\n  server.listen(port);\n  connectMiddleware.attachHmrServer(server);\n});\n")),(0,a.mdx)("h2",{id:"available-options"},"Available options"),(0,a.mdx)("h3",{id:"configuration"},"Configuration"),(0,a.mdx)("p",null,"Check ",(0,a.mdx)("a",{parentName:"p",href:"/metro/docs/configuration"},"Configuring Metro")," for details on configuration options."),(0,a.mdx)("h2",{id:"url-and-bundle-request"},"URL and bundle request"),(0,a.mdx)("p",null,"The server has the ability to serve assets, bundles and source maps for those bundles."),(0,a.mdx)("h3",{id:"assets"},"Assets"),(0,a.mdx)("p",null,"In order to request an asset, you can freely use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"require")," method as if it was another JS file. The server will treat this specific ",(0,a.mdx)("inlineCode",{parentName:"p"},"require")," calls  and make them return the path to that file. When an asset is requested (an asset is recognized by its extension, which has to be on the ",(0,a.mdx)("inlineCode",{parentName:"p"},"assetExts")," array) it is generally served as-is."),(0,a.mdx)("p",null,"However, the server is also able to serve specific assets depending on the platform and on the requested size (in the case of images). The way you specify the platform is via the dotted suffix (e.g. ",(0,a.mdx)("inlineCode",{parentName:"p"},".ios"),") and the resolution via the at suffix (e.g. ",(0,a.mdx)("inlineCode",{parentName:"p"},"@2x"),"). This is transparently handled for you when using ",(0,a.mdx)("inlineCode",{parentName:"p"},"require"),"."),(0,a.mdx)("h3",{id:"bundle"},"Bundle"),(0,a.mdx)("p",null,"Any JS file can be used as the root for a bundle request. The file will be looked in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"projectRoot"),". All files that are required by the root will be recursively included. In order to request a bundle, just change the extension from ",(0,a.mdx)("inlineCode",{parentName:"p"},".js")," to ",(0,a.mdx)("inlineCode",{parentName:"p"},".bundle"),". Options for building the bundle are passed as query parameters (all optional)."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"dev"),": build the bundle in development mode or not. Maps 1:1 to the ",(0,a.mdx)("inlineCode",{parentName:"li"},"dev")," setting of the bundles. Pass ",(0,a.mdx)("inlineCode",{parentName:"li"},"true")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"false")," as strings into the URL."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"platform"),": platform requesting the bundle. Can be ",(0,a.mdx)("inlineCode",{parentName:"li"},"ios")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"android"),". Maps 1:1 to the ",(0,a.mdx)("inlineCode",{parentName:"li"},"platform")," setting of the bundles."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"minify"),": whether code should be minified or not. Maps 1:1 to the ",(0,a.mdx)("inlineCode",{parentName:"li"},"minify")," setting of the bundles. Pass ",(0,a.mdx)("inlineCode",{parentName:"li"},"true")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"false")," as strings into the URL."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"excludeSource"),": whether sources should be included in the source map or not. Pass ",(0,a.mdx)("inlineCode",{parentName:"li"},"true")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"false")," as strings into the URL.")),(0,a.mdx)("p",null,"For instance, requesting ",(0,a.mdx)("inlineCode",{parentName:"p"},"http://localhost:8081/foo/bar/baz.bundle?dev=true&platform=ios")," will create a bundle out of ",(0,a.mdx)("inlineCode",{parentName:"p"},"foo/bar/baz.js")," for iOS in development mode."),(0,a.mdx)("h3",{id:"source-maps"},"Source maps"),(0,a.mdx)("p",null,"Source maps are built for each bundle by using the same URL as the bundle (thus, the same as the JS file acting as a root). This will only work when ",(0,a.mdx)("inlineCode",{parentName:"p"},"inlineSourceMap")," is set to ",(0,a.mdx)("inlineCode",{parentName:"p"},"false"),". All options you passed to the bundle will be added to the source map URL; otherwise, they wouldn't match."),(0,a.mdx)("h2",{id:"javascript-transformer"},"JavaScript transformer"),(0,a.mdx)("p",null,"The JavaScript transformer (",(0,a.mdx)("a",{parentName:"p",href:"/metro/docs/configuration#babeltransformerpath"},(0,a.mdx)("inlineCode",{parentName:"a"},"babelTransformerPath")),") is the place where JS code will be manipulated; useful for calling Babel. The transformer can export two methods:"),(0,a.mdx)("h3",{id:"method-transformmodule"},"Method ",(0,a.mdx)("inlineCode",{parentName:"h3"},"transform(module)")),(0,a.mdx)("p",null,"Mandatory method that will transform code. The object received has information about the module being transformed (e.g its path, code...) and the returned object has to contain an ",(0,a.mdx)("inlineCode",{parentName:"p"},"ast")," key that is the AST representation of the transformed code. The default shipped transformer does the bare minimum amount of work by just parsing the code to AST:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const babylon = require('@babel/parser');\n\nmodule.exports.transform = (file: {filename: string, src: string}) => {\n  const ast = babylon.parse(file.src, {sourceType: 'module'});\n\n  return {ast};\n};\n")),(0,a.mdx)("p",null,"If you would like to plug-in Babel, you can simply do that by passing the code to it:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const {transformSync} = require('@babel/core');\n\nmodule.exports.transform = file => {\n  return transformSync(file.src, {\n    // Babel options...\n  });\n};\n")),(0,a.mdx)("h3",{id:"method-getcachekey"},"Method ",(0,a.mdx)("inlineCode",{parentName:"h3"},"getCacheKey()")),(0,a.mdx)("p",null,"Optional method that returns the cache key of the transformer. When using different transformers, this allows to correctly tie a transformed file to the transformer that converted it. The result of the method has to be a ",(0,a.mdx)("inlineCode",{parentName:"p"},"string"),"."))}c.isMDXComponent=!0}}]);