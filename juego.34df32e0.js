// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"lPh7v":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4b8ea06834df32e0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gH3Lb":[function(require,module,exports,__globalThis) {
var _router = require("./router");
var _myButton = require("./components/my-button/my-button");
var _contador = require("./components/contador/contador");
(function() {
    (0, _myButton.initMyButton)();
    (0, _contador.initContador)(); // Registramos el componente del contador
    const root = document.querySelector('.root');
    if (root) (0, _router.initRouter)(root);
})();

},{"./router":"4wVP1","./components/my-button/my-button":"juLTi","./components/contador/contador":"aUgrz"}],"4wVP1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _welcome = require("./pages/welcome/welcome");
var _rules = require("./pages/rules/rules");
var _inicio = require("./pages/inicio/inicio");
var _play = require("./pages/play/play");
var _result = require("./pages/result/result");
const routes = [
    {
        path: /\/welcome/,
        component: (0, _welcome.initPagesWelcome)
    },
    {
        path: /\/rules/,
        component: (0, _rules.initRules)
    },
    {
        path: /\/inicio/,
        component: (0, _inicio.initInicio)
    },
    {
        path: /\/play/,
        component: (0, _play.initPlay)
    },
    {
        path: /\/result/,
        component: (0, _result.initResult)
    }
];
function initRouter(container) {
    // 'goTo' nos permite navegar en las paginas
    function goTo(path) {
        //cambiamos la barra del navegador sin recargar la pagina 
        history.pushState({}, " ", path);
        // Después de cambiar la URL, llamamos a handleRoute para que muestre la página correcta.
        handleRoute(path);
    }
    function handleRoute(route) {
        //Recorrermos el array de las rutas definidas
        for (const r of routes)//comporbamos si la ruta existe con el path
        if (r.path.test(route)) {
            // Si hay coincidencia, llamamos a la función 'component' asociada 
            // Le pasamos un objeto con la función 'goTo' para que la página pueda navegar a otros lugares.
            const el = r.component({
                goTo: goTo
            });
            //Limpiamos la pagina antes
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    // 1. Maneja la ruta inicial: Cuando la página carga, comprobamos la ruta.
    // Si es la raíz ("/"), navegamos a "/welcome".
    // "location.pathname" es "/" por eso verificamos si es verdadero le ingresamos "/welcome"
    if (location.pathname === "/") goTo("/welcome");
    else handleRoute(location.pathname);
    // 2. Escucha los cambios en el historial: El evento "popstate" se dispara cuando el usuario
    // usa los botones de "atrás" o "adelante" del navegador. Al escucharlo, nos aseguramos
    // de que nuestra app reaccione y muestre la página correcta.
    window.addEventListener("popstate", ()=>handleRoute(location.pathname));
}

},{"./pages/welcome/welcome":"3RBva","@parcel/transformer-js/src/esmodule-helpers.js":"d4g5p","./pages/rules/rules":"6C7qs","./pages/inicio/inicio":"kVWoQ","./pages/play/play":"5pGj4","./pages/result/result":"jq6YD"}],"3RBva":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPagesWelcome", ()=>initPagesWelcome);
var _welcomeCss = require("./welcome.css");
function initPagesWelcome(params) {
    const welcome = document.createElement('div');
    welcome.innerHTML = `
      <div class = "welcome__container">
        <h1 class ="welcome__title">
          <span class="title-word">Piedra</span>
          <span class="title-word colored">Papel</span>
          <span class="title-word">Tijera</span>
        </h1>
        <div class ="welcome__container-btn">
            <my-button class="blue" destino="inicio">Comenzar</my-button>
            <my-button destino="rules">Reglas</my-button>
        </div>
      </div>
    `;
    // PARTE CLAVE: CONECTANDO EL COMPONENTE HIJO (BOTÓN) CON EL PADRE (PÁGINA)
    // 1. SELECCIONAMOS LOS COMPONENTES
    // Buscamos dentro del 'div' que acabamos de crear todos los elementos <my-button>.
    // Esto nos devuelve una lista de nuestros componentes de botón.
    const buttons = welcome.querySelectorAll("my-button");
    // 2. AÑADIMOS UN "ESCUCHA" (EVENT LISTENER) A CADA UNO
    // Recorremos la lista de botones para trabajar con cada uno individualmente.
    buttons.forEach((button)=>{
        // A cada botón, le decimos que "escuche" un evento llamado 'navigate'.
        // Este no es un evento estándar como 'click', es el evento personalizado que
        // nosotros mismos creamos y disparamos desde 'my-button.ts'.
        button.addEventListener('navigate', (e)=>{
            // 3. EJECUTAMOS UNA ACCIÓN CUANDO ESCUCHAMOS EL EVENTO
            // Esta función se ejecuta solo cuando el botón dispara el evento 'navigate'.
            // 'e' es el objeto del evento, que contiene la información que enviamos.
            // Extraemos el destino de la propiedad 'detail' del evento (e.detail.to).
            const path = e.detail.to;
            // 4. LA PÁGINA TOMA EL CONTROL Y NAVEGA
            // Usamos la función 'goTo' (que nos pasó el router) para cambiar de página.
            params.goTo(`/${path}`);
        });
    });
    return welcome;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"d4g5p","./welcome.css":"eGf3k"}],"d4g5p":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eGf3k":[function() {},{}],"6C7qs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRules", ()=>initRules);
var _rulesCss = require("./rules.css");
function initRules(params) {
    const rules = document.createElement('div');
    const rulesImg = new URL(require("c5e13b02810c1e9c")).href;
    rules.className = "rules-page";
    rules.innerHTML = `
        <h1 class="rules-page-title">Reglas</h1>
           <img src="${rulesImg}" class="rules-page-img" alt="reglas">
            <p class="rules-page-paragran"> Las reglas son simples</p>
           <ol class="rules-page-orderlist">
                <li>El <b> Papel</b> le gana a la <b>Roca</b></li>
                <li>La <b>Roca</b> le gana a las <b>Tijeras</b></li>
                <li>Las <b>Tijeras</b> le gana al <b>Papel</b></li>
           </ol>
           
        <my-button destino="welcome">Menu</my-button>
    `;
    const btnRulesMenu = rules.querySelector('my-button');
    if (btnRulesMenu) btnRulesMenu.addEventListener('navigate', (e)=>{
        const path = e.detail.to;
        console.log(path);
        params.goTo(`/${path}`);
    });
    return rules;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"d4g5p","c5e13b02810c1e9c":"dM7Nw","./rules.css":"cR3Im"}],"dM7Nw":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("reglas.511f9506.png") + "?" + Date.now();

},{}],"cR3Im":[function() {},{}],"kVWoQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInicio", ()=>initInicio);
var _inicioCss = require("./inicio.css");
function initInicio(params) {
    const inicio = document.createElement('div');
    // Obtenemos las URLs de las imágenes. Parcel se encargará de procesarlas.
    // Asumo que tienes los archivos piedra.svg y tijera.svg en la carpeta img.
    const rockURL = new URL(require("719b27b758b09988")).href;
    const paperURL = new URL(require("b08d949c0cb1b9b4")).href;
    const scissorsURL = new URL(require("6a1a6d2e50abb1de")).href;
    // Asignamos la clase directamente al div que creamos, en lugar de crear uno anidado.
    inicio.className = "inicio__container";
    inicio.innerHTML = `
         <p class ="inicio__paragraph">Presion\xe1 para jugar y elige la piedra, papel o tijera</p>
            <my-button class="blue"  destino="play">Jugar!</my-button>
         <div class="hands-container">
            <img src="${rockURL}" class="inicio-hand-img" alt="Piedra">
            <img src="${paperURL}" class="inicio-hand-img" alt="Papel">
            <img src="${scissorsURL}" class="inicio-hand-img" alt="Tijera">
         </div>
    `;
    // Buscamos el botón "Jugar!" que acabamos de crear.
    const playButton = inicio.querySelector("my-button");
    if (playButton) // Le decimos al botón que escuche el evento 'navigate'.
    playButton.addEventListener('navigate', (e)=>{
        const path = e.detail.to;
        params.goTo(`/${path}`);
    });
    return inicio;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"d4g5p","./inicio.css":"kDDFe","b08d949c0cb1b9b4":"9WVbX","719b27b758b09988":"j2aMp","6a1a6d2e50abb1de":"f4Bno"}],"kDDFe":[function() {},{}],"9WVbX":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("papel.a6d72ee0.svg") + "?" + Date.now();

},{}],"j2aMp":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("piedra.53b9cd22.svg") + "?" + Date.now();

},{}],"f4Bno":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("tijera.8976c7c4.svg") + "?" + Date.now();

},{}],"5pGj4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPlay", ()=>initPlay);
var _playCss = require("./play.css");
var _state = require("../../state");
function initPlay(params) {
    const play = document.createElement('div');
    const rockURL = new URL(require("ad12cb2d37bba2c2")).href;
    const paperURL = new URL(require("f70e321f60546eb6")).href;
    const scissorsURL = new URL(require("ddb8908aa3633b4a")).href;
    play.className = "play-page";
    play.innerHTML = `
        <div class="play-page__content">
            <!-- El contador se mostrar\xe1 aqu\xed cuando el usuario elija una mano -->
        </div>
            <p class ="hands-title"> Elige una opci\xf3n</p>
        <div class="hands-container">

             <!--contenedor de piedra-->
            <div class = "container-hand-paper">
            <img src="${rockURL}" class="hand-img" data-move="piedra" alt="Piedra">
            <span class ="play-text">Piedra</span>
            </div>

             <!--contenedor de papel-->
            <div class = "container-hand-paper">
            <img src="${paperURL}" class="hand-img" data-move="papel" alt="Papel">
            <span class ="play-text">Papel</span>
            </div>
            
            <!--contenedor de tijera-->
            <div class = "container-hand-paper">
            <img src="${scissorsURL}" class="hand-img" data-move="tijera" alt="Tijera">
            <span class ="play-text">Tijera</span>
            </div>
        </div>
    `;
    // --- LÓGICA DEL JUEGO ---
    const text = play.querySelector(".hands-title");
    const contentEl = play.querySelector(".play-page__content");
    const handsContainerEl = play.querySelector(".hands-container");
    const handImages = play.querySelectorAll(".hand-img");
    // 1. Añadimos un listener a cada imagen de mano.
    handImages.forEach((hand)=>{
        hand.addEventListener('click', (e)=>{
            const target = e.target;
            //Buscamos el dato del movimineto 
            const userMove = target.dataset.move;
            // 2. Guardamos la jugada del usuario (por ahora en consola).
            console.log("El usuario eligi\xf3:", userMove);
            // 3. Ocultamos las manos para dar paso al contador.
            if (handsContainerEl && text) {
                handsContainerEl.style.display = 'none';
                text.style.display = 'none';
            }
            // 4. Creamos el componente contador y lo añadimos a la página.
            const contadorEl = document.createElement('my-contador');
            contentEl?.appendChild(contadorEl);
            // 5. Escuchamos cuando el contador termina su cuenta.
            contadorEl.addEventListener('countdown-finished', ()=>{
                console.log("\xa1El tiempo ha terminado! Es hora de mostrar los resultados.");
                // AQUÍ: Lógica para generar la jugada de la máquina,
                // comparar y navegar a la página de resultados.
                // params.goTo("/results");
                (0, _state.state).setMove(userMove);
                params.goTo("/result");
            });
        });
    });
    return play;
}

},{"./play.css":"jrTjw","../../state":"dWXvP","ad12cb2d37bba2c2":"j2aMp","f70e321f60546eb6":"9WVbX","ddb8908aa3633b4a":"f4Bno","@parcel/transformer-js/src/esmodule-helpers.js":"d4g5p"}],"jrTjw":[function() {},{}],"dWXvP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            userMove: "",
            computerMove: ""
        },
        // Obtenemos el historial de localStorage o creamos uno nuevo si no existe.
        history: JSON.parse(localStorage.getItem('jugadas') || '{"user": 0, "computer": 0}')
    },
    listeners: [],
    //'getState' es el metodo que permite al componentes leer el stado actual
    getState () {
        return this.data;
    },
    //'setState' es el componenete que permite a los componentes leer el estado actual
    setState (newState) {
        this.data = newState;
        //recorremos el array el array de listeners
        // Guardamos el objeto 'history' en localStorage para persistir la puntuación.
        localStorage.setItem('jugadas', JSON.stringify(newState.history));
        for (const cd of this.listeners)cd();
    },
    //'subscribe'  es el metodo que hace los componentes para escuchar y registrar los cambios.
    subscribe (callback) {
        this.listeners.push(callback);
    },
    setMove (move) {
        const currentState = this.getState();
        const computerMove = this.getComputerMove();
        currentState.currentGame.userMove = move;
        currentState.currentGame.computerMove = computerMove;
        const result = this.whoWins(move, computerMove);
        if (result === "ganaste") currentState.history.user++;
        else if (result === "perdiste") currentState.history.computer++;
        this.setState(currentState);
    },
    getComputerMove () {
        const moves = [
            "piedra",
            "papel",
            "tijera"
        ];
        const randomIndex = Math.floor(Math.random() * 3);
        return moves[randomIndex];
    },
    whoWins (userMove, computerMove) {
        if (userMove === computerMove) return "empataste";
        if (userMove === "piedra" && computerMove === "tijera" || userMove === "papel" && computerMove === "piedra" || userMove === "tijera" && computerMove === "papel") return "ganaste";
        return "perdiste";
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"d4g5p"}],"jq6YD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResult", ()=>initResult);
var _state = require("../../state");
var _resultCss = require("./result.css");
function initResult(params) {
    const moveJugador = (0, _state.state).getState().currentGame.userMove;
    const moveComputer = (0, _state.state).getState().currentGame.computerMove;
    const scoreJugador = (0, _state.state).getState().history.user;
    const scoreComputer = (0, _state.state).getState().history.computer;
    const winnner = (0, _state.state).whoWins(moveJugador, moveComputer);
    const resutl = document.createElement('div');
    let winnnerStyle = `color:white;`;
    if (winnner === "ganaste") winnnerStyle = `
        color:green;
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
        `;
    else if (winnner === "perdiste") winnnerStyle = `
        color:red;
        text-shadow: 0 0 10px rgba(0, 255, 0, 0.4);
        `;
    resutl.className = "result-page";
    resutl.innerHTML = `
        <style>
            .result-page-title{
                ${winnnerStyle}
            }
        </style>
        <div class="result-page-container">
            <h1 class ="result-page-title">${winnner}</h1>

            <p class="result-page-paragran">
                <span> ${moveJugador}</span> VS 
                <span> ${moveComputer}</span>
            </p>
            <section class="result-page-section"> 
                <span> Jugador: ${scoreJugador}  </span>
                <span> Computadora: ${scoreComputer} </span>
            </section>
           
            <my-button id="play" class="blue" destino="play">Volver a Jugar!</my-button>
            <my-button id="menu" destino="welcome" >Menu</my-button>
        
        </div>
    `;
    //-- Boton Para volver a jugar / menu
    const btnReturnPlay = resutl.querySelector("#play");
    const btnReturnMenu = resutl.querySelector("#menu");
    if (btnReturnPlay) btnReturnPlay.addEventListener('navigate', (e)=>{
        const path = e.detail.to;
        console.log(path);
        params.goTo(`/${path}`);
    });
    if (btnReturnMenu) btnReturnMenu.addEventListener('navigate', (e)=>{
        const path = e.detail.to;
        console.log(path);
        params.goTo(`/${path}`);
    });
    return resutl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"d4g5p","../../state":"dWXvP","./result.css":"dY7YF"}],"dY7YF":[function() {},{}],"juLTi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initMyButton", ()=>initMyButton);
function initMyButton() {
    // 1. DEFINICIÓN DE LA CLASE DEL COMPONENTE
    // Creamos una clase que hereda de HTMLElement. Esta es la base de todo Web Component.
    // El navegador tratará cualquier etiqueta <my-button> como una instancia de esta clase.
    class MyButton extends HTMLElement {
        // 3. OBSERVANDO ATRIBUTOS
        // Esta función estática es crucial. Le dice al componente qué atributos HTML
        // debe "observar". Si uno de estos atributos cambia, se activará el método 'attributeChangedCallback' (si existiera).
        // Aquí, le decimos que preste atención a 'destino' y 'class' para que pueda reaccionar a sus valores.
        static get observedAttributes() {
            return [
                'destino',
                'class'
            ];
        }
        constructor(){
            // El constructor siempre debe llamar a 'super()' primero.
            // Es el punto de partida cuando se crea una instancia del componente.
            super(), // 2. CREACIÓN DEL SHADOW DOM
            // El Shadow DOM es un "DOM encapsulado" para nuestro componente.
            // Los estilos y elementos aquí dentro no afectan ni son afectados por el exterior.
            // 'mode: "open"' nos permite acceder al shadow DOM desde JavaScript (si es necesario).
            this.shadow = this.attachShadow({
                mode: "open"
            });
        }
        // 4. CICLO DE VIDA: connectedCallback
        // Este método se llama automáticamente cuando el componente es insertado en el DOM (en la página).
        // Es el lugar perfecto para hacer el renderizado inicial.
        connectedCallback() {
            const atribute = this.getAttribute("class");
            this.render(atribute);
        }
        // 5. MÉTODO DE RENDERIZADO
        // Creamos este método para generar el HTML y CSS internos del componente.
        // Recibe el valor del atributo 'class' para decidir qué estilo aplicar.
        render(atribute) {
            // Lógica para estilos dinámicos:
            // Dependiendo de si la clase es "blue", elegimos un conjunto de estilos u otro.
            let btnStyle = ` background: white; border: solid 3px #000; color:#000;`;
            let btnHover = `
                 background: #fff ;
                 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            `;
            if (atribute === "blue") {
                btnStyle = `
                    background:#006CFC;
                    border-style:none;
                    color:#fff;
                    transition: background 0.3s ease;
                `;
                btnHover = `
                background: #0681ff ;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            `;
            }
            // Inyectamos el HTML y el CSS en el Shadow DOM.
            // La etiqueta <style> aquí dentro solo afecta a este componente.
            // La etiqueta <slot> es un marcador de posición. El texto que pongas
            // entre <my-button> y </my-button> (ej: "Comenzar") se insertará aquí.
            this.shadow.innerHTML = `
                <style>
                    button{
                        ${btnStyle}
                        border-radius:10px;
                        width:322px;
                        height:87px;
                        font-family:'Roboto',san serif;
                        font-size:30px;
                        font-weight:400;
                        margin-top:50px;
                        cursor:pointer;
                    }
                    button:hover{
                        ${btnHover}
                    } 
                </style>
                <button><slot></slot></button>
            `;
            // 6. AÑADIENDO EL LISTENER INTERNO
            // Después de crear el botón, lo buscamos dentro de nuestro Shadow DOM.
            const button = this.shadow.querySelector('button');
            if (button) // Le añadimos un 'event listener' para el clic. Cuando se haga clic,
            // se llamará al método 'handleClick' de este mismo componente.
            // .bind(this) asegura que dentro de 'handleClick', 'this' siga siendo el componente.
            button.addEventListener('click', this.handleClick.bind(this));
        }
        // 7. EL CORAZÓN DE LA COMUNICACIÓN: handleClick
        // Este método se ejecuta cuando el usuario hace clic en el botón interno.
        handleClick() {
            // a. Leemos el valor del atributo 'destino' del propio componente.
            const destino = this.getAttribute('destino');
            if (destino) {
                // b. Creamos un EVENTO PERSONALIZADO (CustomEvent).
                //    - 'navigate': Es el nombre que le damos a nuestro evento.
                //    - 'detail': Es un objeto donde metemos la información que queremos enviar.
                //      En este caso, enviamos el valor de 'destino'.
                const event = new CustomEvent('navigate', {
                    detail: {
                        to: destino
                    }
                });
                // c. DESPACHAMOS (disparamos) el evento.
                //    El componente "anuncia" al exterior que ha ocurrido algo.
                //    No sabe ni le importa quién lo escuchará.
                this.dispatchEvent(event);
            }
        }
    }
    // 8. REGISTRO DEL COMPONENTE
    // Finalmente, le decimos al navegador que la etiqueta HTML "my-button"
    // debe ser manejada por nuestra clase 'MyButton'. Sin esto, el navegador
    // no sabría qué hacer con <my-button>.
    customElements.define("my-button", MyButton);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"d4g5p"}],"aUgrz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initContador", ()=>initContador);
function initContador() {
    class Contador extends HTMLElement {
        constructor(){
            super(), this.shadow = this.attachShadow({
                mode: "open"
            });
        }
        // El ciclo de vida connectedCallback se ejecuta cuando el componente se añade al DOM.
        connectedCallback() {
            // 1. Primero renderizamos el HTML y los estilos.
            this.render();
            // 2. Luego, iniciamos la cuenta atrás.
            this.startCountdown();
        }
        startCountdown() {
            // Buscamos el elemento del contador DESPUÉS de que se haya renderizado.
            const contadorEl = this.shadow.querySelector(".contador-text");
            let count = 3;
            if (contadorEl) {
                // Asignamos el valor inicial como string.
                contadorEl.textContent = count.toString();
                const intervalId = setInterval(()=>{
                    count--;
                    contadorEl.textContent = count.toString();
                    if (count <= 0) {
                        clearInterval(intervalId); // Detenemos el contador cuando llega a 0.
                        // Avisamos a la página que el contador ha terminado.
                        this.dispatchEvent(new CustomEvent('countdown-finished'));
                    }
                }, 1000); // Se ejecuta cada segundo.
            }
        }
        render() {
            this.shadow.innerHTML = `
                <style>
                    .contador-text {
                        font-size: 100px;
                        font-family: var(--font);
                        diplay:flex;
                        align-items:center;
                        justify-content:center;
                        color:#fff;
                       padding-top:250px;
                    }
                </style>
                <div class="contador-text"></div>
            `;
        }
    }
    // Corregimos el nombre de la etiqueta para que sea consistente.
    customElements.define("my-contador", Contador);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"d4g5p"}]},["lPh7v","gH3Lb"], "gH3Lb", "parcelRequire5cb6", {}, "./", "/")

//# sourceMappingURL=juego.34df32e0.js.map
