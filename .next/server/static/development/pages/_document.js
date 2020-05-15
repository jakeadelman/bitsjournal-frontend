module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "./node_modules/next/node_modules/styled-jsx/server.js"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, /*#__PURE__*/_react.default.createElement(Document, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];

        if ((child === null || child === void 0 ? void 0 : child.type) === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/zeit/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    const appScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  const startingUrl = page === '/' ? '/index' : page;
  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./node_modules/next/node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/next/node_modules/styled-jsx/dist/server.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/node_modules/styled-jsx/dist/server.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = flushToReact;
exports.flushToHTML = flushToHTML;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _style = __webpack_require__(/*! ./style */ "./node_modules/next/node_modules/styled-jsx/dist/style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function flushToReact(options) {
  if (options === void 0) {
    options = {};
  }

  return (0, _style.flush)().map(function (args) {
    var id = args[0];
    var css = args[1];
    return _react["default"].createElement('style', {
      id: "__" + id,
      // Avoid warnings upon render with a key
      key: "__" + id,
      nonce: options.nonce ? options.nonce : undefined,
      dangerouslySetInnerHTML: {
        __html: css
      }
    });
  });
}

function flushToHTML(options) {
  if (options === void 0) {
    options = {};
  }

  return (0, _style.flush)().reduce(function (html, args) {
    var id = args[0];
    var css = args[1];
    html += "<style id=\"__" + id + "\"" + (options.nonce ? " nonce=\"" + options.nonce + "\"" : '') + ">" + css + "</style>";
    return html;
  }, '');
}

/***/ }),

/***/ "./node_modules/next/node_modules/styled-jsx/dist/style.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/node_modules/styled-jsx/dist/style.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/next/node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/next/node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next/node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/next/node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/next/node_modules/styled-jsx/server.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/node_modules/styled-jsx/server.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/server */ "./node_modules/next/node_modules/styled-jsx/dist/server.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Import styled components ServerStyleSheet

 // import { withRouter } from "next/router";

class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  static getInitialProps({
    renderPage
  }) {
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__["ServerStyleSheet"]();
    const page = renderPage(App => props => sheet.collectStyles(__jsx(App, props)));
    const styleTags = sheet.getStyleElement();
    return _objectSpread(_objectSpread({}, page), {}, {
      styleTags
    });
  }

  render() {
    return __jsx("html", null, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], null, this.props.styleTags, __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), __jsx("script", {
      src: "https://js.stripe.com/v3/"
    })), __jsx("body", {
      style: {
        backgroundColor: "#ffffff"
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], null), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], null)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9saWIvc3R5bGVzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9kaXN0L3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9kaXN0L3N0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3Qvc3R5bGVzaGVldC1yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0cmluZy1oYXNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwibWlkZGxld2FyZSIsIk5leHRTY3JpcHQiLCJNYWluIiwiSGVhZCIsIkh0bWwiLCJkZWZhdWx0IiwiX3Byb3BUeXBlcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfc2VydmVyIiwiX2NvbnN0YW50cyIsIl9kb2N1bWVudENvbnRleHQiLCJfdXRpbHMiLCJEb2N1bWVudENvbnRleHQiLCJEb2N1bWVudEluaXRpYWxQcm9wcyIsIkRvY3VtZW50UHJvcHMiLCJfdXRpbHMyIiwiX2h0bWxlc2NhcGUiLCJvYmoiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJoYXMiLCJnZXQiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzZXQiLCJyZXEiLCJyZXMiLCJkZWR1cGUiLCJidW5kbGVzIiwiZmlsZXMiLCJTZXQiLCJrZXB0IiwiYnVuZGxlIiwiZmlsZSIsImFkZCIsInB1c2giLCJnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQiLCJwYXRoIiwicHJvY2VzcyIsIkRvY3VtZW50IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZW5oYW5jZXJzIiwiZW5oYW5jZUFwcCIsIkFwcCIsImVuaGFuY2VyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiaHRtbCIsImhlYWQiLCJyZW5kZXJQYWdlIiwic3R5bGVzIiwicmVuZGVyRG9jdW1lbnQiLCJQcm92aWRlciIsInZhbHVlIiwiX2RvY3VtZW50UHJvcHMiLCJfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIiwiRGF0ZSIsIm5vdyIsInJlbmRlciIsImhlYWRUYWdzTWlkZGxld2FyZSIsIlByb21pc2UiLCJib2R5VGFnc01pZGRsZXdhcmUiLCJodG1sUHJvcHNNaWRkbGV3YXJlIiwiY29uc3RydWN0b3IiLCJhcmdzIiwiY29udGV4dCIsImluQW1wTW9kZSIsImh0bWxQcm9wcyIsImFzc2lnbiIsImFtcCIsInVuZGVmaW5lZCIsImNvbnRleHRUeXBlIiwicHJvcFR5cGVzIiwiY2hpbGRyZW4iLCJub2RlIiwiaXNSZXF1aXJlZCIsImdldENzc0xpbmtzIiwiYXNzZXRQcmVmaXgiLCJjc3NGaWxlcyIsImxlbmd0aCIsImZpbHRlciIsImYiLCJ0ZXN0IiwiY3NzTGlua0VsZW1lbnRzIiwiZm9yRWFjaCIsIm5vbmNlIiwicmVsIiwiaHJlZiIsImVuY29kZVVSSSIsImFzIiwiY3Jvc3NPcmlnaW4iLCJnZXRQcmVsb2FkRHluYW1pY0NodW5rcyIsImR5bmFtaWNJbXBvcnRzIiwibWFwIiwiZW5kc1dpdGgiLCJCb29sZWFuIiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsImFtcFBhdGgiLCJoeWJyaWRBbXAiLCJjYW5vbmljYWxCYXNlIiwiX19ORVhUX0RBVEFfXyIsImRhbmdlcm91c0FzUGF0aCIsImhlYWRUYWdzIiwidW5zdGFibGVfcnVudGltZUpTIiwiZGlzYWJsZVJ1bnRpbWVKUyIsInBhZ2UiLCJidWlsZElkIiwiQ2hpbGRyZW4iLCJjaGlsZCIsIl9jaGlsZCRwcm9wcyIsImlzUmVhY3RIZWxtZXQiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiYmFkUHJvcCIsIm5hbWUiLCJzcmMiLCJpbmRleE9mIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJrZXlzIiwicHJvcCIsImN1clN0eWxlcyIsIkFycmF5IiwiaXNBcnJheSIsImhhc1N0eWxlcyIsImVsIiwiX2VsJHByb3BzIiwiX2VsJHByb3BzJGRhbmdlcm91c2x5IiwiX19odG1sIiwiaXNEZXZlbG9wbWVudCIsIkZyYWdtZW50IiwiY29udGVudCIsImNvdW50IiwidG9TdHJpbmciLCJjbGVhbkFtcFBhdGgiLCJzdHlsZSIsImpvaW4iLCJyZXBsYWNlIiwiYXN5bmMiLCJnZXRBbXBQYXRoIiwiZ2V0UGFnZUZpbGUiLCJpZCIsInN0cmluZyIsIkFNUF9SRU5ERVJfVEFSR0VUIiwiZ2V0RHluYW1pY0NodW5rcyIsIm1vZGVyblByb3BzIiwiaW5jbHVkZXMiLCJnZXRTY3JpcHRzIiwibG93UHJpb3JpdHlGaWxlcyIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJnZXRQb2x5ZmlsbFNjcmlwdHMiLCJwb2x5ZmlsbEZpbGVzIiwicG9seWZpbGwiLCJub01vZHVsZSIsImdldElubGluZVNjcmlwdFNvdXJjZSIsImRvY3VtZW50UHJvcHMiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImh0bWxFc2NhcGVKc29uU3RyaW5nIiwiZXJyIiwibWVzc2FnZSIsIkVycm9yIiwic3RhdGljTWFya3VwIiwiZGV2RmlsZXMiLCJib2R5VGFncyIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9SRUFDVF9SRUZSRVNIIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLIiwicGFnZVNjcmlwdCIsImFwcFNjcmlwdCIsIm1hdGNoIiwic2FmYXJpTm9tb2R1bGVGaXgiLCJhc1BhdGgiLCJzdGFydGluZ1VybCIsIk15RG9jdW1lbnQiLCJzaGVldCIsIlNlcnZlclN0eWxlU2hlZXQiLCJjb2xsZWN0U3R5bGVzIiwic3R5bGVUYWdzIiwiZ2V0U3R5bGVFbGVtZW50IiwiYmFj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O0FBQ0E7QUFDQSw4REFBOEQsYUFBb0I7O0FBRWxGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0wsbUJBQW1CLGlDQUFpQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNM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VUFBVSxDQUFDTixHQUFHLElBQUlFLEtBQUssSUFDbEN1SSxLQUFLLENBQUNFLGFBQU4sQ0FBb0IsTUFBQyxHQUFELEVBQVN6SSxLQUFULENBQXBCLENBRHFCLENBQXZCO0FBR0EsVUFBTTBJLFNBQVMsR0FBR0gsS0FBSyxDQUFDSSxlQUFOLEVBQWxCO0FBQ0EsMkNBQVk5RSxJQUFaO0FBQWtCNkU7QUFBbEI7QUFDRDs7QUFFRDdILFFBQU0sR0FBRztBQUNQLFdBQ0Usb0JBQ0UsTUFBQyxrREFBRCxRQUNHLEtBQUtiLEtBQUwsQ0FBVzBJLFNBRGQsRUFFRTtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBQztBQUE5QixNQUZGLEVBR0U7QUFBUSxTQUFHLEVBQUM7QUFBWixNQUhGLENBREYsRUFNRTtBQUFNLFdBQUssRUFBRTtBQUFFRSx1QkFBZSxFQUFFO0FBQW5CO0FBQWIsT0FDRSxNQUFDLGtEQUFELE9BREYsRUFFRSxNQUFDLHdEQUFELE9BRkYsQ0FORixDQURGO0FBYUQ7O0FBeEIrQjs7QUEwQm5CTix5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1pZGRsZXdhcmU9bWlkZGxld2FyZTtleHBvcnRzLk5leHRTY3JpcHQ9ZXhwb3J0cy5NYWluPWV4cG9ydHMuSGVhZD1leHBvcnRzLkh0bWw9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3Byb3BUeXBlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9zZXJ2ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIikpO3ZhciBfY29uc3RhbnRzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzXCIpO3ZhciBfZG9jdW1lbnRDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5Eb2N1bWVudENvbnRleHQ9X3V0aWxzLkRvY3VtZW50Q29udGV4dDtleHBvcnRzLkRvY3VtZW50SW5pdGlhbFByb3BzPV91dGlscy5Eb2N1bWVudEluaXRpYWxQcm9wcztleHBvcnRzLkRvY3VtZW50UHJvcHM9X3V0aWxzLkRvY3VtZW50UHJvcHM7dmFyIF91dGlsczI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci91dGlsc1wiKTt2YXIgX2h0bWxlc2NhcGU9cmVxdWlyZShcIi4uL3NlcnZlci9odG1sZXNjYXBlXCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO31hc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHtyZXEscmVzfSl7fWZ1bmN0aW9uIGRlZHVwZShidW5kbGVzKXtjb25zdCBmaWxlcz1uZXcgU2V0KCk7Y29uc3Qga2VwdD1bXTtmb3IoY29uc3QgYnVuZGxlIG9mIGJ1bmRsZXMpe2lmKGZpbGVzLmhhcyhidW5kbGUuZmlsZSkpY29udGludWU7ZmlsZXMuYWRkKGJ1bmRsZS5maWxlKTtrZXB0LnB1c2goYnVuZGxlKTt9cmV0dXJuIGtlcHQ7fWZ1bmN0aW9uIGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChwYXRoKXtpZihwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC5qcyQvLCcubW9kdWxlLmpzJyk7fXJldHVybiBwYXRoO30vKipcbiAqIGBEb2N1bWVudGAgY29tcG9uZW50IGhhbmRsZXMgdGhlIGluaXRpYWwgYGRvY3VtZW50YCBtYXJrdXAgYW5kIHJlbmRlcnMgb25seSBvbiB0aGUgc2VydmVyIHNpZGUuXG4gKiBDb21tb25seSB1c2VkIGZvciBpbXBsZW1lbnRpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGZvciBgY3NzLWluLWpzYCBsaWJyYXJpZXMuXG4gKi9jbGFzcyBEb2N1bWVudCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7LyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpe2NvbnN0IGVuaGFuY2Vycz1wcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9hd2FpdCBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT11bnN0YWJsZS1lbmhhbmNlLWFwcC1zZXJ2ZXIhJykpKS50aGVuKG1vZD0+bW9kLmRlZmF1bHQoY3R4KSk6W107Y29uc3QgZW5oYW5jZUFwcD1BcHA9Pntmb3IoY29uc3QgZW5oYW5jZXIgb2YgZW5oYW5jZXJzKXtBcHA9ZW5oYW5jZXIoQXBwKTt9cmV0dXJuIHByb3BzPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChBcHAscHJvcHMpO307Y29uc3R7aHRtbCxoZWFkfT1hd2FpdCBjdHgucmVuZGVyUGFnZSh7ZW5oYW5jZUFwcH0pO2NvbnN0IHN0eWxlcz1bLi4uKDAsX3NlcnZlci5kZWZhdWx0KSgpLC4uLihwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9hd2FpdCBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT11bnN0YWJsZS1nZXQtc3R5bGVzLXNlcnZlciEnKSkpLnRoZW4obW9kPT5tb2QuZGVmYXVsdChjdHgpKTpbXSldO3JldHVybntodG1sLGhlYWQsc3R5bGVzfTt9c3RhdGljIHJlbmRlckRvY3VtZW50KERvY3VtZW50LHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dC5Qcm92aWRlcix7dmFsdWU6e19kb2N1bWVudFByb3BzOnByb3BzLC8vIEluIGRldiB3ZSBpbnZhbGlkYXRlIHRoZSBjYWNoZSBieSBhcHBlbmRpbmcgYSB0aW1lc3RhbXAgdG8gdGhlIHJlc291cmNlIFVSTC5cbi8vIFRoaXMgaXMgYSB3b3JrYXJvdW5kIHRvIGZpeCBodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL2lzc3Vlcy81ODYwXG4vLyBUT0RPOiByZW1vdmUgdGhpcyB3b3JrYXJvdW5kIHdoZW4gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE4NzcyNiBpcyBmaXhlZC5cbl9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmc6cHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbic/Jz90cz0nK0RhdGUubm93KCk6Jyd9fSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChEb2N1bWVudCxwcm9wcykpO31yZW5kZXIoKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIdG1sLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSGVhZCxudWxsKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJvZHlcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE1haW4sbnVsbCksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTmV4dFNjcmlwdCxudWxsKSkpO319ZXhwb3J0cy5kZWZhdWx0PURvY3VtZW50O0RvY3VtZW50LmhlYWRUYWdzTWlkZGxld2FyZT1wcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1oZWFkLXRhZ3Mtc2VydmVyIScpKSk6KCk9PltdO0RvY3VtZW50LmJvZHlUYWdzTWlkZGxld2FyZT1wcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1ib2R5LXRhZ3Mtc2VydmVyIScpKSk6KCk9PltdO0RvY3VtZW50Lmh0bWxQcm9wc01pZGRsZXdhcmU9cHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlM/UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZSgnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtaHRtbC1wcm9wcy1zZXJ2ZXIhJykpKTooKT0+W107Y2xhc3MgSHRtbCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IoLi4uYXJncyl7c3VwZXIoLi4uYXJncyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9cmVuZGVyKCl7Y29uc3R7aW5BbXBNb2RlLGh0bWxQcm9wc309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLE9iamVjdC5hc3NpZ24oe30saHRtbFByb3BzLHRoaXMucHJvcHMse2FtcDppbkFtcE1vZGU/Jyc6dW5kZWZpbmVkLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlJiZwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJz8nJzp1bmRlZmluZWR9KSk7fX1leHBvcnRzLkh0bWw9SHRtbDtIdG1sLmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O0h0bWwucHJvcFR5cGVzPXtjaGlsZHJlbjpfcHJvcFR5cGVzLmRlZmF1bHQubm9kZS5pc1JlcXVpcmVkfTtjbGFzcyBIZWFkIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31nZXRDc3NMaW5rcygpe2NvbnN0e2Fzc2V0UHJlZml4LGZpbGVzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O2NvbnN0IGNzc0ZpbGVzPWZpbGVzJiZmaWxlcy5sZW5ndGg/ZmlsZXMuZmlsdGVyKGY9Pi9cXC5jc3MkLy50ZXN0KGYpKTpbXTtjb25zdCBjc3NMaW5rRWxlbWVudHM9W107Y3NzRmlsZXMuZm9yRWFjaChmaWxlPT57Y3NzTGlua0VsZW1lbnRzLnB1c2goLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTpgJHtmaWxlfS1wcmVsb2FkYCxub25jZTp0aGlzLnByb3BzLm5vbmNlLHJlbDpcInByZWxvYWRcIixocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxhczpcInN0eWxlXCIsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6ZmlsZSxub25jZTp0aGlzLnByb3BzLm5vbmNlLHJlbDpcInN0eWxlc2hlZXRcIixocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSkpO30pO3JldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoPT09MD9udWxsOmNzc0xpbmtFbGVtZW50czt9Z2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKXtjb25zdHtkeW5hbWljSW1wb3J0cyxhc3NldFByZWZpeH09dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtyZXR1cm4gZGVkdXBlKGR5bmFtaWNJbXBvcnRzKS5tYXAoYnVuZGxlPT57Ly8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW4gdGhlXG4vLyBmZWF0dXJlIGlzIGVuYWJsZWQuIFRoaXMgY2xhdXNlIHdpbGwgZmlsdGVyIGRvd24gdG8gdGhlIG1vZGVyblxuLy8gdmFyaWFudHMgb25seS5cbmlmKCFidW5kbGUuZmlsZS5lbmRzV2l0aChnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoJy5qcycpKSl7cmV0dXJuIG51bGw7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJwcmVsb2FkXCIsa2V5OmJ1bmRsZS5maWxlLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGJ1bmRsZS5maWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxhczpcInNjcmlwdFwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0pO30pLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuLmZpbHRlcihCb29sZWFuKTt9Z2V0UHJlbG9hZE1haW5MaW5rcygpe2NvbnN0e2Fzc2V0UHJlZml4LGZpbGVzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O2NvbnN0IHByZWxvYWRGaWxlcz1maWxlcyYmZmlsZXMubGVuZ3RoP2ZpbGVzLmZpbHRlcihmaWxlPT57Ly8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW5cbi8vIHRoZSBmZWF0dXJlIGlzIGVuYWJsZWQuIFRoaXMgY2xhdXNlIHdpbGwgZmlsdGVyIGRvd24gdG8gdGhlXG4vLyBtb2Rlcm4gdmFyaWFudHMgb25seS5cbnJldHVybiBmaWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpO30pOltdO3JldHVybiFwcmVsb2FkRmlsZXMubGVuZ3RoP251bGw6cHJlbG9hZEZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmZpbGUsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsYXM6XCJzY3JpcHRcIixjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSkpO31yZW5kZXIoKXtjb25zdHtzdHlsZXMsYW1wUGF0aCxpbkFtcE1vZGUsYXNzZXRQcmVmaXgsaHlicmlkQW1wLGNhbm9uaWNhbEJhc2UsX19ORVhUX0RBVEFfXyxkYW5nZXJvdXNBc1BhdGgsaGVhZFRhZ3MsdW5zdGFibGVfcnVudGltZUpTfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3QgZGlzYWJsZVJ1bnRpbWVKUz11bnN0YWJsZV9ydW50aW1lSlM9PT1mYWxzZTtjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7Y29uc3R7cGFnZSxidWlsZElkfT1fX05FWFRfREFUQV9fO2xldHtoZWFkfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7bGV0IGNoaWxkcmVuPXRoaXMucHJvcHMuY2hpbGRyZW47Ly8gc2hvdyBhIHdhcm5pbmcgaWYgSGVhZCBjb250YWlucyA8dGl0bGU+IChvbmx5IGluIGRldmVsb3BtZW50KVxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NoaWxkcmVuPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChjaGlsZHJlbixjaGlsZD0+e3ZhciBfY2hpbGQkcHJvcHM7Y29uc3QgaXNSZWFjdEhlbG1ldD1jaGlsZD09PW51bGx8fGNoaWxkPT09dm9pZCAwP3ZvaWQgMDooX2NoaWxkJHByb3BzPWNoaWxkLnByb3BzKT09PW51bGx8fF9jaGlsZCRwcm9wcz09PXZvaWQgMD92b2lkIDA6X2NoaWxkJHByb3BzWydkYXRhLXJlYWN0LWhlbG1ldCddO2lmKChjaGlsZD09PW51bGx8fGNoaWxkPT09dm9pZCAwP3ZvaWQgMDpjaGlsZC50eXBlKT09PSd0aXRsZScmJiFpc1JlYWN0SGVsbWV0KXtjb25zb2xlLndhcm4oXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvbm8tZG9jdW1lbnQtdGl0bGVcIik7fXJldHVybiBjaGlsZDt9KTtpZih0aGlzLnByb3BzLmNyb3NzT3JpZ2luKWNvbnNvbGUud2FybignV2FybmluZzogYEhlYWRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL25leHQuanMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTt9bGV0IGhhc0FtcGh0bWxSZWw9ZmFsc2U7bGV0IGhhc0Nhbm9uaWNhbFJlbD1mYWxzZTsvLyBzaG93IHdhcm5pbmcgYW5kIHJlbW92ZSBjb25mbGljdGluZyBhbXAgaGVhZCB0YWdzXG5oZWFkPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChoZWFkfHxbXSxjaGlsZD0+e2lmKCFjaGlsZClyZXR1cm4gY2hpbGQ7Y29uc3R7dHlwZSxwcm9wc309Y2hpbGQ7aWYoaW5BbXBNb2RlKXtsZXQgYmFkUHJvcD0nJztpZih0eXBlPT09J21ldGEnJiZwcm9wcy5uYW1lPT09J3ZpZXdwb3J0Jyl7YmFkUHJvcD0nbmFtZT1cInZpZXdwb3J0XCInO31lbHNlIGlmKHR5cGU9PT0nbGluaycmJnByb3BzLnJlbD09PSdjYW5vbmljYWwnKXtoYXNDYW5vbmljYWxSZWw9dHJ1ZTt9ZWxzZSBpZih0eXBlPT09J3NjcmlwdCcpey8vIG9ubHkgYmxvY2sgaWZcbi8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuLy8gMi4gaXQgaXMgdXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgd2l0aG91dCBhIHR5cGUgb3Jcbi8vIGEgdHlwZSBvZiB0ZXh0L2phdmFzY3JpcHRcbmlmKHByb3BzLnNyYyYmcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKTwtMXx8cHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJighcHJvcHMudHlwZXx8cHJvcHMudHlwZT09PSd0ZXh0L2phdmFzY3JpcHQnKSl7YmFkUHJvcD0nPHNjcmlwdCc7T2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2gocHJvcD0+e2JhZFByb3ArPWAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgO30pO2JhZFByb3ArPScvPic7fX1pZihiYWRQcm9wKXtjb25zb2xlLndhcm4oYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2NvbmZsaWN0aW5nLWFtcC10YWdgKTtyZXR1cm4gbnVsbDt9fWVsc2V7Ly8gbm9uLWFtcCBtb2RlXG5pZih0eXBlPT09J2xpbmsnJiZwcm9wcy5yZWw9PT0nYW1waHRtbCcpe2hhc0FtcGh0bWxSZWw9dHJ1ZTt9fXJldHVybiBjaGlsZDt9KTsvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbmNvbnN0IGN1clN0eWxlcz1BcnJheS5pc0FycmF5KHN0eWxlcyk/c3R5bGVzOltdO2lmKGluQW1wTW9kZSYmc3R5bGVzJiYvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbnN0eWxlcy5wcm9wcyYmLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5BcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbikpe2NvbnN0IGhhc1N0eWxlcz1lbD0+e3ZhciBfZWwkcHJvcHMsX2VsJHByb3BzJGRhbmdlcm91c2x5O3JldHVybiBlbD09PW51bGx8fGVsPT09dm9pZCAwP3ZvaWQgMDooX2VsJHByb3BzPWVsLnByb3BzKT09PW51bGx8fF9lbCRwcm9wcz09PXZvaWQgMD92b2lkIDA6KF9lbCRwcm9wcyRkYW5nZXJvdXNseT1fZWwkcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpPT09bnVsbHx8X2VsJHByb3BzJGRhbmdlcm91c2x5PT09dm9pZCAwP3ZvaWQgMDpfZWwkcHJvcHMkZGFuZ2Vyb3VzbHkuX19odG1sO307Ly8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5zdHlsZXMucHJvcHMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZD0+e2lmKEFycmF5LmlzQXJyYXkoY2hpbGQpKXtjaGlsZC5mb3JFYWNoKGVsPT5oYXNTdHlsZXMoZWwpJiZjdXJTdHlsZXMucHVzaChlbCkpO31lbHNlIGlmKGhhc1N0eWxlcyhjaGlsZCkpe2N1clN0eWxlcy5wdXNoKGNoaWxkKTt9fSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaGVhZFwiLHRoaXMucHJvcHMsdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzLmlzRGV2ZWxvcG1lbnQmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjp0cnVlLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlPyd0cnVlJzp1bmRlZmluZWQsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXtkaXNwbGF5Om5vbmV9YH19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIse1wiZGF0YS1uZXh0LWhpZGUtZm91Y1wiOnRydWUsXCJkYXRhLWFtcGRldm1vZGVcIjppbkFtcE1vZGU/J3RydWUnOnVuZGVmaW5lZH0sLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5e2Rpc3BsYXk6YmxvY2t9YH19KSkpLGNoaWxkcmVuLGhlYWQsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJuZXh0LWhlYWQtY291bnRcIixjb250ZW50Ol9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KGhlYWR8fFtdKS50b1N0cmluZygpfSksaW5BbXBNb2RlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwidmlld3BvcnRcIixjb250ZW50Olwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIn0pLCFoYXNDYW5vbmljYWxSZWwmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJjYW5vbmljYWxcIixocmVmOmNhbm9uaWNhbEJhc2UrKDAsX3V0aWxzMi5jbGVhbkFtcFBhdGgpKGRhbmdlcm91c0FzUGF0aCl9KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGFzOlwic2NyaXB0XCIsaHJlZjpcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJ9KSxzdHlsZXMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJhbXAtY3VzdG9tXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmN1clN0eWxlcy5tYXAoc3R5bGU9PnN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCkuam9pbignJykucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csJycpLnJlcGxhY2UoL1xcL1xcKkAgc291cmNlVVJMPS4qP1xcKlxcLy9nLCcnKX19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWJvaWxlcnBsYXRlXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5ey13ZWJraXQtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1vei1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbXMtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7YW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGh9QC13ZWJraXQta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbW96LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1zLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW8ta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUBrZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19YH19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWJvaWxlcnBsYXRlXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YH19KSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7YXN5bmM6dHJ1ZSxzcmM6XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wifSkpLCFpbkFtcE1vZGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsIWhhc0FtcGh0bWxSZWwmJmh5YnJpZEFtcCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcImFtcGh0bWxcIixocmVmOmNhbm9uaWNhbEJhc2UrZ2V0QW1wUGF0aChhbXBQYXRoLGRhbmdlcm91c0FzUGF0aCl9KSx0aGlzLmdldENzc0xpbmtzKCksIWRpc2FibGVSdW50aW1lSlMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJwcmVsb2FkXCIsaHJlZjphc3NldFByZWZpeCtnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMvX2FwcC5qc2ApKStfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLGFzOlwic2NyaXB0XCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSksIWRpc2FibGVSdW50aW1lSlMmJnBhZ2UhPT0nL19lcnJvcicmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJwcmVsb2FkXCIsaHJlZjphc3NldFByZWZpeCtnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWApKStfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLGFzOlwic2NyaXB0XCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSksIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSwhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKCksdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzLmlzRGV2ZWxvcG1lbnQmJi8qI19fUFVSRV9fKi8gLy8gdGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gbW91bnQgZGV2ZWxvcG1lbnQgc3R5bGVzIHNvIHRoZVxuLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4vLyAoYnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgYXQgdGhlIGJvdHRvbSBvZiA8aGVhZCAvPilcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtpZDpcIl9fbmV4dF9jc3NfX0RPX05PVF9VU0VfX1wifSksc3R5bGVzfHxudWxsKSxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LHt9LC4uLihoZWFkVGFnc3x8W10pKSk7fX1leHBvcnRzLkhlYWQ9SGVhZDtIZWFkLmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O0hlYWQucHJvcFR5cGVzPXtub25jZTpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLGNyb3NzT3JpZ2luOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmd9O2NsYXNzIE1haW4gZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKC4uLmFyZ3Mpe3N1cGVyKC4uLmFyZ3MpO3RoaXMuY29udGV4dD12b2lkIDA7fXJlbmRlcigpe2NvbnN0e2luQW1wTW9kZSxodG1sfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7aWYoaW5BbXBNb2RlKXJldHVybiBfY29uc3RhbnRzLkFNUF9SRU5ERVJfVEFSR0VUO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2lkOlwiX19uZXh0XCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpodG1sfX0pO319ZXhwb3J0cy5NYWluPU1haW47TWFpbi5jb250ZXh0VHlwZT1fZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dDtjbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31nZXREeW5hbWljQ2h1bmtzKCl7Y29uc3R7ZHluYW1pY0ltcG9ydHMsYXNzZXRQcmVmaXgsZmlsZXN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7cmV0dXJuIGRlZHVwZShkeW5hbWljSW1wb3J0cykubWFwKGJ1bmRsZT0+e2xldCBtb2Rlcm5Qcm9wcz17fTtpZihwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKXttb2Rlcm5Qcm9wcz0vXFwubW9kdWxlXFwuanMkLy50ZXN0KGJ1bmRsZS5maWxlKT97dHlwZTonbW9kdWxlJ306e25vTW9kdWxlOnRydWV9O31pZighL1xcLmpzJC8udGVzdChidW5kbGUuZmlsZSl8fGZpbGVzLmluY2x1ZGVzKGJ1bmRsZS5maWxlKSlyZXR1cm4gbnVsbDtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLE9iamVjdC5hc3NpZ24oe2FzeW5jOnRydWUsa2V5OmJ1bmRsZS5maWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoYnVuZGxlLmZpbGUpfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0sbW9kZXJuUHJvcHMpKTt9KTt9Z2V0U2NyaXB0cygpe2NvbnN0e2Fzc2V0UHJlZml4LGZpbGVzLGxvd1ByaW9yaXR5RmlsZXN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7Y29uc3Qgbm9ybWFsU2NyaXB0cz1maWxlcz09PW51bGx8fGZpbGVzPT09dm9pZCAwP3ZvaWQgMDpmaWxlcy5maWx0ZXIoZmlsZT0+ZmlsZS5lbmRzV2l0aCgnLmpzJykpO2NvbnN0IGxvd1ByaW9yaXR5U2NyaXB0cz1sb3dQcmlvcml0eUZpbGVzPT09bnVsbHx8bG93UHJpb3JpdHlGaWxlcz09PXZvaWQgMD92b2lkIDA6bG93UHJpb3JpdHlGaWxlcy5maWx0ZXIoZmlsZT0+ZmlsZS5lbmRzV2l0aCgnLmpzJykpO3JldHVyblsuLi5ub3JtYWxTY3JpcHRzLC4uLmxvd1ByaW9yaXR5U2NyaXB0c10ubWFwKGZpbGU9PntsZXQgbW9kZXJuUHJvcHM9e307aWYocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCl7bW9kZXJuUHJvcHM9ZmlsZS5lbmRzV2l0aCgnLm1vZHVsZS5qcycpP3t0eXBlOidtb2R1bGUnfTp7bm9Nb2R1bGU6dHJ1ZX07fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsT2JqZWN0LmFzc2lnbih7a2V5OmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGFzeW5jOnRydWUsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0sbW9kZXJuUHJvcHMpKTt9KTt9Z2V0UG9seWZpbGxTY3JpcHRzKCl7Ly8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4vLyBJdCBhbHNvIGhhcyB0byBiZSB0aGUgZmlyc3Qgc2NyaXB0IHRvIGxvYWRcbmNvbnN0e2Fzc2V0UHJlZml4LHBvbHlmaWxsRmlsZXN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7cmV0dXJuIHBvbHlmaWxsRmlsZXMuZmlsdGVyKHBvbHlmaWxsPT5wb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykmJiEvXFwubW9kdWxlXFwuanMkLy50ZXN0KHBvbHlmaWxsKSkubWFwKHBvbHlmaWxsPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6cG9seWZpbGwsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLG5vTW9kdWxlOnRydWUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfSkpO31zdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGRvY3VtZW50UHJvcHMpe2NvbnN0e19fTkVYVF9EQVRBX199PWRvY3VtZW50UHJvcHM7dHJ5e2NvbnN0IGRhdGE9SlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXyk7cmV0dXJuKDAsX2h0bWxlc2NhcGUuaHRtbEVzY2FwZUpzb25TdHJpbmcpKGRhdGEpO31jYXRjaChlcnIpe2lmKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NpcmN1bGFyIHN0cnVjdHVyZScpKXt0aHJvdyBuZXcgRXJyb3IoYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9jaXJjdWxhci1zdHJ1Y3R1cmVgKTt9dGhyb3cgZXJyO319cmVuZGVyKCl7Y29uc3R7c3RhdGljTWFya3VwLGFzc2V0UHJlZml4LGluQW1wTW9kZSxkZXZGaWxlcyxfX05FWFRfREFUQV9fLGJvZHlUYWdzLHVuc3RhYmxlX3J1bnRpbWVKU309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0IGRpc2FibGVSdW50aW1lSlM9dW5zdGFibGVfcnVudGltZUpTPT09ZmFsc2U7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O2lmKGluQW1wTW9kZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicpe3JldHVybiBudWxsO31jb25zdCBkZXZGaWxlcz1bX2NvbnN0YW50cy5DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUkVBQ1RfUkVGUkVTSCxfY29uc3RhbnRzLkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9BTVAsX2NvbnN0YW50cy5DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfV0VCUEFDS107cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCxzdGF0aWNNYXJrdXB8fGRpc2FibGVSdW50aW1lSlM/bnVsbDovKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtpZDpcIl9fTkVYVF9EQVRBX19cIix0eXBlOlwiYXBwbGljYXRpb24vanNvblwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOk5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcyl9LFwiZGF0YS1hbXBkZXZtb2RlXCI6dHJ1ZX0pLGRldkZpbGVzP2RldkZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZmlsZX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW4sXCJkYXRhLWFtcGRldm1vZGVcIjp0cnVlfSkpOm51bGwsX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCx7fSwuLi4oYm9keVRhZ3N8fFtdKSkpO31jb25zdHtwYWdlLGJ1aWxkSWR9PV9fTkVYVF9EQVRBX187aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pY29uc29sZS53YXJuKCdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCcpO31jb25zdCBwYWdlU2NyaXB0PVsvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLE9iamVjdC5hc3NpZ24oe2FzeW5jOnRydWUsXCJkYXRhLW5leHQtcGFnZVwiOnBhZ2Usa2V5OnBhZ2Usc3JjOmFzc2V0UHJlZml4K2VuY29kZVVSSShgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzJHtnZXRQYWdlRmlsZShwYWdlKX1gKStfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0scHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRD97bm9Nb2R1bGU6dHJ1ZX06e30pKSxwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHthc3luYzp0cnVlLFwiZGF0YS1uZXh0LXBhZ2VcIjpwYWdlLGtleTpgJHtwYWdlfS1tb2Rlcm5gLHNyYzphc3NldFByZWZpeCtnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWApKStfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbix0eXBlOlwibW9kdWxlXCJ9KV07Y29uc3QgYXBwU2NyaXB0PVsvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLE9iamVjdC5hc3NpZ24oe2FzeW5jOnRydWUsXCJkYXRhLW5leHQtcGFnZVwiOlwiL19hcHBcIixzcmM6YXNzZXRQcmVmaXgrYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcy9fYXBwLmpzYCtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLGtleTpcIl9hcHBcIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59LHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQ/e25vTW9kdWxlOnRydWV9Ont9KSkscHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7YXN5bmM6dHJ1ZSxcImRhdGEtbmV4dC1wYWdlXCI6XCIvX2FwcFwiLHNyYzphc3NldFByZWZpeCtgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAubW9kdWxlLmpzYCtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLGtleTpcIl9hcHAtbW9kZXJuXCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLHR5cGU6XCJtb2R1bGVcIn0pXTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLCFkaXNhYmxlUnVudGltZUpTJiZkZXZGaWxlcz9kZXZGaWxlcy5tYXAoZmlsZT0+IWZpbGUubWF0Y2goL1xcLmpzXFwubWFwLykmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSkpOm51bGwsc3RhdGljTWFya3VwfHxkaXNhYmxlUnVudGltZUpTP251bGw6LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7aWQ6XCJfX05FWFRfREFUQV9fXCIsdHlwZTpcImFwcGxpY2F0aW9uL2pzb25cIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW4sZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMpfX0pLHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQmJiFkaXNhYmxlUnVudGltZUpTPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse25vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbixub01vZHVsZTp0cnVlLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6TmV4dFNjcmlwdC5zYWZhcmlOb21vZHVsZUZpeH19KTpudWxsLCFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLCFkaXNhYmxlUnVudGltZUpTJiZhcHBTY3JpcHQsIWRpc2FibGVSdW50aW1lSlMmJnBhZ2UhPT0nL19lcnJvcicmJnBhZ2VTY3JpcHQsZGlzYWJsZVJ1bnRpbWVKU3x8c3RhdGljTWFya3VwP251bGw6dGhpcy5nZXREeW5hbWljQ2h1bmtzKCksZGlzYWJsZVJ1bnRpbWVKU3x8c3RhdGljTWFya3VwP251bGw6dGhpcy5nZXRTY3JpcHRzKCksX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCx7fSwuLi4oYm9keVRhZ3N8fFtdKSkpO319ZXhwb3J0cy5OZXh0U2NyaXB0PU5leHRTY3JpcHQ7TmV4dFNjcmlwdC5jb250ZXh0VHlwZT1fZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dDtOZXh0U2NyaXB0LnByb3BUeXBlcz17bm9uY2U6X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxjcm9zc09yaWdpbjpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nfTtOZXh0U2NyaXB0LnNhZmFyaU5vbW9kdWxlRml4PSchZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudCx0PWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZighKFwibm9Nb2R1bGVcImluIHQpJiZcIm9uYmVmb3JlbG9hZFwiaW4gdCl7dmFyIG49ITE7ZS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlbG9hZFwiLGZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0PT09dCluPSEwO2Vsc2UgaWYoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcIm5vbW9kdWxlXCIpfHwhbilyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpfSwhMCksdC50eXBlPVwibW9kdWxlXCIsdC5zcmM9XCIuXCIsZS5oZWFkLmFwcGVuZENoaWxkKHQpLHQucmVtb3ZlKCl9fSgpOyc7ZnVuY3Rpb24gZ2V0QW1wUGF0aChhbXBQYXRoLGFzUGF0aCl7cmV0dXJuIGFtcFBhdGh8fGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpPycmJzonPyd9YW1wPTFgO31mdW5jdGlvbiBnZXRQYWdlRmlsZShwYWdlLGJ1aWxkSWQpe2NvbnN0IHN0YXJ0aW5nVXJsPXBhZ2U9PT0nLyc/Jy9pbmRleCc6cGFnZTtyZXR1cm4gYnVpbGRJZD9gJHtzdGFydGluZ1VybH0uJHtidWlsZElkfS5qc2A6YCR7c3RhcnRpbmdVcmx9LmpzYDt9IiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5odG1sRXNjYXBlSnNvblN0cmluZz1odG1sRXNjYXBlSnNvblN0cmluZzsvLyBUaGlzIHV0aWxpdHkgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZVxuLy8gTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZS9ibG9iLzA1MjdjYTcxNTZhNTI0ZDI1NjEwMWJiMzEwYTlmOTcwZjYzMDc4YWQvTElDRU5TRVxuY29uc3QgRVNDQVBFX0xPT0tVUD17JyYnOidcXFxcdTAwMjYnLCc+JzonXFxcXHUwMDNlJywnPCc6J1xcXFx1MDAzYycsJ1xcdTIwMjgnOidcXFxcdTIwMjgnLCdcXHUyMDI5JzonXFxcXHUyMDI5J307Y29uc3QgRVNDQVBFX1JFR0VYPS9bJj48XFx1MjAyOFxcdTIwMjldL2c7ZnVuY3Rpb24gaHRtbEVzY2FwZUpzb25TdHJpbmcoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoRVNDQVBFX1JFR0VYLG1hdGNoPT5FU0NBUEVfTE9PS1VQW21hdGNoXSk7fSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19kb2N1bWVudCcpXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qXG5CYXNlZCBvbiBHbGFtb3IncyBzaGVldFxuaHR0cHM6Ly9naXRodWIuY29tL3RocmVlcG9pbnRvbmUvZ2xhbW9yL2Jsb2IvNjY3YjQ4MGQzMWIzNzIxYTkwNTAyMWIyNmUxMjkwY2U5MmNhMjg3OS9zcmMvc2hlZXQuanNcbiovXG52YXIgaXNQcm9kID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbnZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59O1xuXG52YXIgU3R5bGVTaGVldCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBfcmVmJG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgIG5hbWUgPSBfcmVmJG5hbWUgPT09IHZvaWQgMCA/ICdzdHlsZXNoZWV0JyA6IF9yZWYkbmFtZSxcbiAgICAgICAgX3JlZiRvcHRpbWl6ZUZvclNwZWVkID0gX3JlZi5vcHRpbWl6ZUZvclNwZWVkLFxuICAgICAgICBvcHRpbWl6ZUZvclNwZWVkID0gX3JlZiRvcHRpbWl6ZUZvclNwZWVkID09PSB2b2lkIDAgPyBpc1Byb2QgOiBfcmVmJG9wdGltaXplRm9yU3BlZWQsXG4gICAgICAgIF9yZWYkaXNCcm93c2VyID0gX3JlZi5pc0Jyb3dzZXIsXG4gICAgICAgIGlzQnJvd3NlciA9IF9yZWYkaXNCcm93c2VyID09PSB2b2lkIDAgPyB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA6IF9yZWYkaXNCcm93c2VyO1xuXG4gICAgaW52YXJpYW50KGlzU3RyaW5nKG5hbWUpLCAnYG5hbWVgIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyID0gXCIjXCIgKyBuYW1lICsgXCItZGVsZXRlZC1ydWxlX19fX3t9XCI7XG4gICAgaW52YXJpYW50KHR5cGVvZiBvcHRpbWl6ZUZvclNwZWVkID09PSAnYm9vbGVhbicsICdgb3B0aW1pemVGb3JTcGVlZGAgbXVzdCBiZSBhIGJvb2xlYW4nKTtcbiAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gb3B0aW1pemVGb3JTcGVlZDtcbiAgICB0aGlzLl9pc0Jyb3dzZXIgPSBpc0Jyb3dzZXI7XG4gICAgdGhpcy5fc2VydmVyU2hlZXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fdGFncyA9IFtdO1xuICAgIHRoaXMuX2luamVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcnVsZXNDb3VudCA9IDA7XG4gICAgdmFyIG5vZGUgPSB0aGlzLl9pc0Jyb3dzZXIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cImNzcC1ub25jZVwiXScpO1xuICAgIHRoaXMuX25vbmNlID0gbm9kZSA/IG5vZGUuZ2V0QXR0cmlidXRlKCdjb250ZW50JykgOiBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5zZXRPcHRpbWl6ZUZvclNwZWVkID0gZnVuY3Rpb24gc2V0T3B0aW1pemVGb3JTcGVlZChib29sKSB7XG4gICAgaW52YXJpYW50KHR5cGVvZiBib29sID09PSAnYm9vbGVhbicsICdgc2V0T3B0aW1pemVGb3JTcGVlZGAgYWNjZXB0cyBhIGJvb2xlYW4nKTtcbiAgICBpbnZhcmlhbnQodGhpcy5fcnVsZXNDb3VudCA9PT0gMCwgJ29wdGltaXplRm9yU3BlZWQgY2Fubm90IGJlIHdoZW4gcnVsZXMgaGF2ZSBhbHJlYWR5IGJlZW4gaW5zZXJ0ZWQnKTtcbiAgICB0aGlzLmZsdXNoKCk7XG4gICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IGJvb2w7XG4gICAgdGhpcy5pbmplY3QoKTtcbiAgfTtcblxuICBfcHJvdG8uaXNPcHRpbWl6ZUZvclNwZWVkID0gZnVuY3Rpb24gaXNPcHRpbWl6ZUZvclNwZWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkO1xuICB9O1xuXG4gIF9wcm90by5pbmplY3QgPSBmdW5jdGlvbiBpbmplY3QoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGludmFyaWFudCghdGhpcy5faW5qZWN0ZWQsICdzaGVldCBhbHJlYWR5IGluamVjdGVkJyk7XG4gICAgdGhpcy5faW5qZWN0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuX2lzQnJvd3NlciAmJiB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICB0aGlzLl90YWdzWzBdID0gdGhpcy5tYWtlU3R5bGVUYWcodGhpcy5fbmFtZSk7XG4gICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gJ2luc2VydFJ1bGUnIGluIHRoaXMuZ2V0U2hlZXQoKTtcblxuICAgICAgaWYgKCF0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICAgIGlmICghaXNQcm9kKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdTdHlsZVNoZWV0OiBvcHRpbWl6ZUZvclNwZWVkIG1vZGUgbm90IHN1cHBvcnRlZCBmYWxsaW5nIGJhY2sgdG8gc3RhbmRhcmQgbW9kZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmx1c2goKTtcbiAgICAgICAgdGhpcy5faW5qZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2VydmVyU2hlZXQgPSB7XG4gICAgICBjc3NSdWxlczogW10sXG4gICAgICBpbnNlcnRSdWxlOiBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUsIGluZGV4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgX3RoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzW2luZGV4XSA9IHtcbiAgICAgICAgICAgIGNzc1RleHQ6IHJ1bGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcy5wdXNoKHtcbiAgICAgICAgICAgIGNzc1RleHQ6IHJ1bGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH0sXG4gICAgICBkZWxldGVSdWxlOiBmdW5jdGlvbiBkZWxldGVSdWxlKGluZGV4KSB7XG4gICAgICAgIF90aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlc1tpbmRleF0gPSBudWxsO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmdldFNoZWV0Rm9yVGFnID0gZnVuY3Rpb24gZ2V0U2hlZXRGb3JUYWcodGFnKSB7XG4gICAgaWYgKHRhZy5zaGVldCkge1xuICAgICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldFNoZWV0ID0gZnVuY3Rpb24gZ2V0U2hlZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2hlZXRGb3JUYWcodGhpcy5fdGFnc1t0aGlzLl90YWdzLmxlbmd0aCAtIDFdKTtcbiAgfTtcblxuICBfcHJvdG8uaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUocnVsZSwgaW5kZXgpIHtcbiAgICBpbnZhcmlhbnQoaXNTdHJpbmcocnVsZSksICdgaW5zZXJ0UnVsZWAgYWNjZXB0cyBvbmx5IHN0cmluZ3MnKTtcblxuICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBpbmRleCA9IHRoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2VydmVyU2hlZXQuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50Kys7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMuZ2V0U2hlZXQoKTtcblxuICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgaW5kZXggPSBzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICB9IC8vIHRoaXMgd2VpcmRuZXNzIGZvciBwZXJmLCBhbmQgY2hyb21lJ3Mgd2VpcmQgYnVnXG4gICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDAwNzk5Mi9jaHJvbWUtc3VkZGVubHktc3RvcHBlZC1hY2NlcHRpbmctaW5zZXJ0cnVsZVxuXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKCFpc1Byb2QpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJTdHlsZVNoZWV0OiBpbGxlZ2FsIHJ1bGU6IFxcblxcblwiICsgcnVsZSArIFwiXFxuXFxuU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8yMDAwNzk5MiBmb3IgbW9yZSBpbmZvXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaW5zZXJ0aW9uUG9pbnQgPSB0aGlzLl90YWdzW2luZGV4XTtcblxuICAgICAgdGhpcy5fdGFncy5wdXNoKHRoaXMubWFrZVN0eWxlVGFnKHRoaXMuX25hbWUsIHJ1bGUsIGluc2VydGlvblBvaW50KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3J1bGVzQ291bnQrKztcbiAgfTtcblxuICBfcHJvdG8ucmVwbGFjZVJ1bGUgPSBmdW5jdGlvbiByZXBsYWNlUnVsZShpbmRleCwgcnVsZSkge1xuICAgIGlmICh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkIHx8ICF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMuX2lzQnJvd3NlciA/IHRoaXMuZ2V0U2hlZXQoKSA6IHRoaXMuX3NlcnZlclNoZWV0O1xuXG4gICAgICBpZiAoIXJ1bGUudHJpbSgpKSB7XG4gICAgICAgIHJ1bGUgPSB0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNoZWV0LmNzc1J1bGVzW2luZGV4XSkge1xuICAgICAgICAvLyBAVEJEIFNob3VsZCB3ZSB0aHJvdyBhbiBlcnJvcj9cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuXG4gICAgICBzaGVldC5kZWxldGVSdWxlKGluZGV4KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoIWlzUHJvZCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlN0eWxlU2hlZXQ6IGlsbGVnYWwgcnVsZTogXFxuXFxuXCIgKyBydWxlICsgXCJcXG5cXG5TZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzIwMDA3OTkyIGZvciBtb3JlIGluZm9cIik7XG4gICAgICAgIH0gLy8gSW4gb3JkZXIgdG8gcHJlc2VydmUgdGhlIGluZGljZXMgd2UgaW5zZXJ0IGEgZGVsZXRlUnVsZVBsYWNlaG9sZGVyXG5cblxuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHRoaXMuX2RlbGV0ZWRSdWxlUGxhY2Vob2xkZXIsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRhZyA9IHRoaXMuX3RhZ3NbaW5kZXhdO1xuICAgICAgaW52YXJpYW50KHRhZywgXCJvbGQgcnVsZSBhdCBpbmRleCBgXCIgKyBpbmRleCArIFwiYCBub3QgZm91bmRcIik7XG4gICAgICB0YWcudGV4dENvbnRlbnQgPSBydWxlO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfTtcblxuICBfcHJvdG8uZGVsZXRlUnVsZSA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fc2VydmVyU2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgdGhpcy5yZXBsYWNlUnVsZShpbmRleCwgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGFnID0gdGhpcy5fdGFnc1tpbmRleF07XG4gICAgICBpbnZhcmlhbnQodGFnLCBcInJ1bGUgYXQgaW5kZXggYFwiICsgaW5kZXggKyBcImAgbm90IGZvdW5kXCIpO1xuICAgICAgdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICAgIHRoaXMuX3RhZ3NbaW5kZXhdID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdGhpcy5faW5qZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9ydWxlc0NvdW50ID0gMDtcblxuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3RhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIHJldHVybiB0YWcgJiYgdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl90YWdzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNpbXBsZXIgb24gc2VydmVyXG4gICAgICB0aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcyA9IFtdO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY3NzUnVsZXMgPSBmdW5jdGlvbiBjc3NSdWxlcygpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3RhZ3MucmVkdWNlKGZ1bmN0aW9uIChydWxlcywgdGFnKSB7XG4gICAgICBpZiAodGFnKSB7XG4gICAgICAgIHJ1bGVzID0gcnVsZXMuY29uY2F0KEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChfdGhpczIuZ2V0U2hlZXRGb3JUYWcodGFnKS5jc3NSdWxlcywgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICByZXR1cm4gcnVsZS5jc3NUZXh0ID09PSBfdGhpczIuX2RlbGV0ZWRSdWxlUGxhY2Vob2xkZXIgPyBudWxsIDogcnVsZTtcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcnVsZXMucHVzaChudWxsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgIH0sIFtdKTtcbiAgfTtcblxuICBfcHJvdG8ubWFrZVN0eWxlVGFnID0gZnVuY3Rpb24gbWFrZVN0eWxlVGFnKG5hbWUsIGNzc1N0cmluZywgcmVsYXRpdmVUb1RhZykge1xuICAgIGlmIChjc3NTdHJpbmcpIHtcbiAgICAgIGludmFyaWFudChpc1N0cmluZyhjc3NTdHJpbmcpLCAnbWFrZVN0eWxlVGFnIGFjY2VwcyBvbmx5IHN0cmluZ3MgYXMgc2Vjb25kIHBhcmFtZXRlcicpO1xuICAgIH1cblxuICAgIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGlmICh0aGlzLl9ub25jZSkgdGFnLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCB0aGlzLl9ub25jZSk7XG4gICAgdGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsgbmFtZSwgJycpO1xuXG4gICAgaWYgKGNzc1N0cmluZykge1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzc1N0cmluZykpO1xuICAgIH1cblxuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuXG4gICAgaWYgKHJlbGF0aXZlVG9UYWcpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHRhZywgcmVsYXRpdmVUb1RhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQodGFnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFnO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTdHlsZVNoZWV0LCBbe1xuICAgIGtleTogXCJsZW5ndGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFN0eWxlU2hlZXQ7XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHlsZVNoZWV0OiBcIiArIG1lc3NhZ2UgKyBcIi5cIik7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZmx1c2hUb1JlYWN0O1xuZXhwb3J0cy5mbHVzaFRvSFRNTCA9IGZsdXNoVG9IVE1MO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3N0eWxlID0gcmVxdWlyZShcIi4vc3R5bGVcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBmbHVzaFRvUmVhY3Qob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgcmV0dXJuICgwLCBfc3R5bGUuZmx1c2gpKCkubWFwKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgdmFyIGlkID0gYXJnc1swXTtcbiAgICB2YXIgY3NzID0gYXJnc1sxXTtcbiAgICByZXR1cm4gX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KCdzdHlsZScsIHtcbiAgICAgIGlkOiBcIl9fXCIgKyBpZCxcbiAgICAgIC8vIEF2b2lkIHdhcm5pbmdzIHVwb24gcmVuZGVyIHdpdGggYSBrZXlcbiAgICAgIGtleTogXCJfX1wiICsgaWQsXG4gICAgICBub25jZTogb3B0aW9ucy5ub25jZSA/IG9wdGlvbnMubm9uY2UgOiB1bmRlZmluZWQsXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICBfX2h0bWw6IGNzc1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmx1c2hUb0hUTUwob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgcmV0dXJuICgwLCBfc3R5bGUuZmx1c2gpKCkucmVkdWNlKGZ1bmN0aW9uIChodG1sLCBhcmdzKSB7XG4gICAgdmFyIGlkID0gYXJnc1swXTtcbiAgICB2YXIgY3NzID0gYXJnc1sxXTtcbiAgICBodG1sICs9IFwiPHN0eWxlIGlkPVxcXCJfX1wiICsgaWQgKyBcIlxcXCJcIiArIChvcHRpb25zLm5vbmNlID8gXCIgbm9uY2U9XFxcIlwiICsgb3B0aW9ucy5ub25jZSArIFwiXFxcIlwiIDogJycpICsgXCI+XCIgKyBjc3MgKyBcIjwvc3R5bGU+XCI7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH0sICcnKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZmx1c2ggPSBmbHVzaDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3N0eWxlc2hlZXRSZWdpc3RyeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3R5bGVzaGVldC1yZWdpc3RyeVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHN0eWxlU2hlZXRSZWdpc3RyeSA9IG5ldyBfc3R5bGVzaGVldFJlZ2lzdHJ5W1wiZGVmYXVsdFwiXSgpO1xuXG52YXIgSlNYU3R5bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSlNYU3R5bGUsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEpTWFN0eWxlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMucHJldlByb3BzID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgSlNYU3R5bGUuZHluYW1pYyA9IGZ1bmN0aW9uIGR5bmFtaWMoaW5mbykge1xuICAgIHJldHVybiBpbmZvLm1hcChmdW5jdGlvbiAodGFnSW5mbykge1xuICAgICAgdmFyIGJhc2VJZCA9IHRhZ0luZm9bMF07XG4gICAgICB2YXIgcHJvcHMgPSB0YWdJbmZvWzFdO1xuICAgICAgcmV0dXJuIHN0eWxlU2hlZXRSZWdpc3RyeS5jb21wdXRlSWQoYmFzZUlkLCBwcm9wcyk7XG4gICAgfSkuam9pbignICcpO1xuICB9IC8vIHByb2JhYmx5IGZhc3RlciB0aGFuIFB1cmVDb21wb25lbnQgKHNoYWxsb3dFcXVhbClcbiAgO1xuXG4gIHZhciBfcHJvdG8gPSBKU1hTdHlsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShvdGhlclByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaWQgIT09IG90aGVyUHJvcHMuaWQgfHwgLy8gV2UgZG8gdGhpcyBjaGVjayBiZWNhdXNlIGBkeW5hbWljYCBpcyBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIHVuZGVmaW5lZC5cbiAgICAvLyBUaGVzZSBhcmUgdGhlIGNvbXB1dGVkIHZhbHVlcyBmb3IgZHluYW1pYyBzdHlsZXMuXG4gICAgU3RyaW5nKHRoaXMucHJvcHMuZHluYW1pYykgIT09IFN0cmluZyhvdGhlclByb3BzLmR5bmFtaWMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHN0eWxlU2hlZXRSZWdpc3RyeS5yZW1vdmUodGhpcy5wcm9wcyk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCB0byBtYWtlIHRoZSBzaWRlIGVmZmVjdCBhc3luYyBzYWZlIGluIHRoZSBcInJlbmRlclwiIHBoYXNlLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vemVpdC9zdHlsZWQtanN4L3B1bGwvNDg0XG4gICAgaWYgKHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKHRoaXMucHJldlByb3BzKSkge1xuICAgICAgLy8gVXBkYXRlc1xuICAgICAgaWYgKHRoaXMucHJldlByb3BzLmlkKSB7XG4gICAgICAgIHN0eWxlU2hlZXRSZWdpc3RyeS5yZW1vdmUodGhpcy5wcmV2UHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZVNoZWV0UmVnaXN0cnkuYWRkKHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5wcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBKU1hTdHlsZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSlNYU3R5bGU7XG5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICB2YXIgY3NzUnVsZXMgPSBzdHlsZVNoZWV0UmVnaXN0cnkuY3NzUnVsZXMoKTtcbiAgc3R5bGVTaGVldFJlZ2lzdHJ5LmZsdXNoKCk7XG4gIHJldHVybiBjc3NSdWxlcztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3N0cmluZ0hhc2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzdHJpbmctaGFzaFwiKSk7XG5cbnZhciBfc3R5bGVzaGVldCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL3N0eWxlc2hlZXRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIHNhbml0aXplID0gZnVuY3Rpb24gc2FuaXRpemUocnVsZSkge1xuICByZXR1cm4gcnVsZS5yZXBsYWNlKC9cXC9zdHlsZS9naSwgJ1xcXFwvc3R5bGUnKTtcbn07XG5cbnZhciBTdHlsZVNoZWV0UmVnaXN0cnkgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0UmVnaXN0cnkoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBfcmVmJHN0eWxlU2hlZXQgPSBfcmVmLnN0eWxlU2hlZXQsXG4gICAgICAgIHN0eWxlU2hlZXQgPSBfcmVmJHN0eWxlU2hlZXQgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJHN0eWxlU2hlZXQsXG4gICAgICAgIF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYub3B0aW1pemVGb3JTcGVlZCxcbiAgICAgICAgb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJG9wdGltaXplRm9yU3BlZWQsXG4gICAgICAgIF9yZWYkaXNCcm93c2VyID0gX3JlZi5pc0Jyb3dzZXIsXG4gICAgICAgIGlzQnJvd3NlciA9IF9yZWYkaXNCcm93c2VyID09PSB2b2lkIDAgPyB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA6IF9yZWYkaXNCcm93c2VyO1xuXG4gICAgdGhpcy5fc2hlZXQgPSBzdHlsZVNoZWV0IHx8IG5ldyBfc3R5bGVzaGVldFtcImRlZmF1bHRcIl0oe1xuICAgICAgbmFtZTogJ3N0eWxlZC1qc3gnLFxuICAgICAgb3B0aW1pemVGb3JTcGVlZDogb3B0aW1pemVGb3JTcGVlZFxuICAgIH0pO1xuXG4gICAgdGhpcy5fc2hlZXQuaW5qZWN0KCk7XG5cbiAgICBpZiAoc3R5bGVTaGVldCAmJiB0eXBlb2Ygb3B0aW1pemVGb3JTcGVlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLl9zaGVldC5zZXRPcHRpbWl6ZUZvclNwZWVkKG9wdGltaXplRm9yU3BlZWQpO1xuXG4gICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gdGhpcy5fc2hlZXQuaXNPcHRpbWl6ZUZvclNwZWVkKCk7XG4gICAgfVxuXG4gICAgdGhpcy5faXNCcm93c2VyID0gaXNCcm93c2VyO1xuICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5faW5kaWNlcyA9IHt9O1xuICAgIHRoaXMuX2luc3RhbmNlc0NvdW50cyA9IHt9O1xuICAgIHRoaXMuY29tcHV0ZUlkID0gdGhpcy5jcmVhdGVDb21wdXRlSWQoKTtcbiAgICB0aGlzLmNvbXB1dGVTZWxlY3RvciA9IHRoaXMuY3JlYXRlQ29tcHV0ZVNlbGVjdG9yKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldFJlZ2lzdHJ5LnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHByb3BzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSBBcnJheS5pc0FycmF5KHByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgdGhpcy5fc2hlZXQuc2V0T3B0aW1pemVGb3JTcGVlZCh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKTtcblxuICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IHRoaXMuX3NoZWV0LmlzT3B0aW1pemVGb3JTcGVlZCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIgJiYgIXRoaXMuX2Zyb21TZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB0aGlzLnNlbGVjdEZyb21TZXJ2ZXIoKTtcbiAgICAgIHRoaXMuX2luc3RhbmNlc0NvdW50cyA9IE9iamVjdC5rZXlzKHRoaXMuX2Zyb21TZXJ2ZXIpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB0YWdOYW1lKSB7XG4gICAgICAgIGFjY1t0YWdOYW1lXSA9IDA7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJGdldElkQW5kUnVsZXMgPSB0aGlzLmdldElkQW5kUnVsZXMocHJvcHMpLFxuICAgICAgICBzdHlsZUlkID0gX3RoaXMkZ2V0SWRBbmRSdWxlcy5zdHlsZUlkLFxuICAgICAgICBydWxlcyA9IF90aGlzJGdldElkQW5kUnVsZXMucnVsZXM7IC8vIERlZHVwaW5nOiBqdXN0IGluY3JlYXNlIHRoZSBpbnN0YW5jZXMgY291bnQuXG5cblxuICAgIGlmIChzdHlsZUlkIGluIHRoaXMuX2luc3RhbmNlc0NvdW50cykge1xuICAgICAgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdICs9IDE7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGluZGljZXMgPSBydWxlcy5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fc2hlZXQuaW5zZXJ0UnVsZShydWxlKTtcbiAgICB9KSAvLyBGaWx0ZXIgb3V0IGludmFsaWQgcnVsZXNcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICE9PSAtMTtcbiAgICB9KTtcbiAgICB0aGlzLl9pbmRpY2VzW3N0eWxlSWRdID0gaW5kaWNlcztcbiAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gPSAxO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRnZXRJZEFuZFJ1bGVzMiA9IHRoaXMuZ2V0SWRBbmRSdWxlcyhwcm9wcyksXG4gICAgICAgIHN0eWxlSWQgPSBfdGhpcyRnZXRJZEFuZFJ1bGVzMi5zdHlsZUlkO1xuXG4gICAgaW52YXJpYW50KHN0eWxlSWQgaW4gdGhpcy5faW5zdGFuY2VzQ291bnRzLCBcInN0eWxlSWQ6IGBcIiArIHN0eWxlSWQgKyBcImAgbm90IGZvdW5kXCIpO1xuICAgIHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSAtPSAxO1xuXG4gICAgaWYgKHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSA8IDEpIHtcbiAgICAgIHZhciB0YWdGcm9tU2VydmVyID0gdGhpcy5fZnJvbVNlcnZlciAmJiB0aGlzLl9mcm9tU2VydmVyW3N0eWxlSWRdO1xuXG4gICAgICBpZiAodGFnRnJvbVNlcnZlcikge1xuICAgICAgICB0YWdGcm9tU2VydmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnRnJvbVNlcnZlcik7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9mcm9tU2VydmVyW3N0eWxlSWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5kaWNlc1tzdHlsZUlkXS5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuX3NoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZWxldGUgdGhpcy5faW5kaWNlc1tzdHlsZUlkXTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShwcm9wcywgbmV4dFByb3BzKSB7XG4gICAgdGhpcy5hZGQobmV4dFByb3BzKTtcbiAgICB0aGlzLnJlbW92ZShwcm9wcyk7XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdGhpcy5fc2hlZXQuZmx1c2goKTtcblxuICAgIHRoaXMuX3NoZWV0LmluamVjdCgpO1xuXG4gICAgdGhpcy5fZnJvbVNlcnZlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9pbmRpY2VzID0ge307XG4gICAgdGhpcy5faW5zdGFuY2VzQ291bnRzID0ge307XG4gICAgdGhpcy5jb21wdXRlSWQgPSB0aGlzLmNyZWF0ZUNvbXB1dGVJZCgpO1xuICAgIHRoaXMuY29tcHV0ZVNlbGVjdG9yID0gdGhpcy5jcmVhdGVDb21wdXRlU2VsZWN0b3IoKTtcbiAgfTtcblxuICBfcHJvdG8uY3NzUnVsZXMgPSBmdW5jdGlvbiBjc3NSdWxlcygpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBmcm9tU2VydmVyID0gdGhpcy5fZnJvbVNlcnZlciA/IE9iamVjdC5rZXlzKHRoaXMuX2Zyb21TZXJ2ZXIpLm1hcChmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgcmV0dXJuIFtzdHlsZUlkLCBfdGhpczMuX2Zyb21TZXJ2ZXJbc3R5bGVJZF1dO1xuICAgIH0pIDogW107XG5cbiAgICB2YXIgY3NzUnVsZXMgPSB0aGlzLl9zaGVldC5jc3NSdWxlcygpO1xuXG4gICAgcmV0dXJuIGZyb21TZXJ2ZXIuY29uY2F0KE9iamVjdC5rZXlzKHRoaXMuX2luZGljZXMpLm1hcChmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgcmV0dXJuIFtzdHlsZUlkLCBfdGhpczMuX2luZGljZXNbc3R5bGVJZF0ubWFwKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gY3NzUnVsZXNbaW5kZXhdLmNzc1RleHQ7XG4gICAgICB9KS5qb2luKF90aGlzMy5fb3B0aW1pemVGb3JTcGVlZCA/ICcnIDogJ1xcbicpXTtcbiAgICB9KSAvLyBmaWx0ZXIgb3V0IGVtcHR5IHJ1bGVzXG4gICAgLmZpbHRlcihmdW5jdGlvbiAocnVsZSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4ocnVsZVsxXSk7XG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBjcmVhdGVDb21wdXRlSWRcbiAgICpcbiAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgYW5kIG1lbW9pemUgYSBqc3ggaWQgZnJvbSBhIGJhc2VkSWQgYW5kIG9wdGlvbmFsbHkgcHJvcHMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmNyZWF0ZUNvbXB1dGVJZCA9IGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVJZCgpIHtcbiAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJhc2VJZCwgcHJvcHMpIHtcbiAgICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIFwianN4LVwiICsgYmFzZUlkO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvcHNUb1N0cmluZyA9IFN0cmluZyhwcm9wcyk7XG4gICAgICB2YXIga2V5ID0gYmFzZUlkICsgcHJvcHNUb1N0cmluZzsgLy8gcmV0dXJuIGBqc3gtJHtoYXNoU3RyaW5nKGAke2Jhc2VJZH0tJHtwcm9wc1RvU3RyaW5nfWApfWBcblxuICAgICAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSBcImpzeC1cIiArICgwLCBfc3RyaW5nSGFzaFtcImRlZmF1bHRcIl0pKGJhc2VJZCArIFwiLVwiICsgcHJvcHNUb1N0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYWNoZVtrZXldO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIGNyZWF0ZUNvbXB1dGVTZWxlY3RvclxuICAgKlxuICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdG8gY29tcHV0ZSBhbmQgbWVtb2l6ZSBkeW5hbWljIHNlbGVjdG9ycy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY3JlYXRlQ29tcHV0ZVNlbGVjdG9yID0gZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZVNlbGVjdG9yKHNlbGVjdG9QbGFjZWhvbGRlclJlZ2V4cCkge1xuICAgIGlmIChzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHAgPT09IHZvaWQgMCkge1xuICAgICAgc2VsZWN0b1BsYWNlaG9sZGVyUmVnZXhwID0gL19fanN4LXN0eWxlLWR5bmFtaWMtc2VsZWN0b3IvZztcbiAgICB9XG5cbiAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlkLCBjc3MpIHtcbiAgICAgIC8vIFNhbml0aXplIFNTUi1lZCBDU1MuXG4gICAgICAvLyBDbGllbnQgc2lkZSBjb2RlIGRvZXNuJ3QgbmVlZCB0byBiZSBzYW5pdGl6ZWQgc2luY2Ugd2UgdXNlXG4gICAgICAvLyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSAoZGV2KSBhbmQgdGhlIENTU09NIGFwaSBzaGVldC5pbnNlcnRSdWxlIChwcm9kKS5cbiAgICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICAgIGNzcyA9IHNhbml0aXplKGNzcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpZGNzcyA9IGlkICsgY3NzO1xuXG4gICAgICBpZiAoIWNhY2hlW2lkY3NzXSkge1xuICAgICAgICBjYWNoZVtpZGNzc10gPSBjc3MucmVwbGFjZShzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHAsIGlkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhY2hlW2lkY3NzXTtcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5nZXRJZEFuZFJ1bGVzID0gZnVuY3Rpb24gZ2V0SWRBbmRSdWxlcyhwcm9wcykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGNzcyA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBkeW5hbWljID0gcHJvcHMuZHluYW1pYyxcbiAgICAgICAgaWQgPSBwcm9wcy5pZDtcblxuICAgIGlmIChkeW5hbWljKSB7XG4gICAgICB2YXIgc3R5bGVJZCA9IHRoaXMuY29tcHV0ZUlkKGlkLCBkeW5hbWljKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0eWxlSWQ6IHN0eWxlSWQsXG4gICAgICAgIHJ1bGVzOiBBcnJheS5pc0FycmF5KGNzcykgPyBjc3MubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5jb21wdXRlU2VsZWN0b3Ioc3R5bGVJZCwgcnVsZSk7XG4gICAgICAgIH0pIDogW3RoaXMuY29tcHV0ZVNlbGVjdG9yKHN0eWxlSWQsIGNzcyldXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdHlsZUlkOiB0aGlzLmNvbXB1dGVJZChpZCksXG4gICAgICBydWxlczogQXJyYXkuaXNBcnJheShjc3MpID8gY3NzIDogW2Nzc11cbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBzZWxlY3RGcm9tU2VydmVyXG4gICAqXG4gICAqIENvbGxlY3RzIHN0eWxlIHRhZ3MgZnJvbSB0aGUgZG9jdW1lbnQgd2l0aCBpZCBfX2pzeC1YWFhcbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2VsZWN0RnJvbVNlcnZlciA9IGZ1bmN0aW9uIHNlbGVjdEZyb21TZXJ2ZXIoKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cIl9fanN4LVwiXScpKTtcbiAgICByZXR1cm4gZWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGVsZW1lbnQpIHtcbiAgICAgIHZhciBpZCA9IGVsZW1lbnQuaWQuc2xpY2UoMik7XG4gICAgICBhY2NbaWRdID0gZWxlbWVudDtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0UmVnaXN0cnk7XG59KCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU3R5bGVTaGVldFJlZ2lzdHJ5O1xuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3R5bGVTaGVldFJlZ2lzdHJ5OiBcIiArIG1lc3NhZ2UgKyBcIi5cIik7XG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zZXJ2ZXInKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gIHZhciBoYXNoID0gNTM4MSxcbiAgICAgIGkgICAgPSBzdHIubGVuZ3RoO1xuXG4gIHdoaWxlKGkpIHtcbiAgICBoYXNoID0gKGhhc2ggKiAzMykgXiBzdHIuY2hhckNvZGVBdCgtLWkpO1xuICB9XG5cbiAgLyogSmF2YVNjcmlwdCBkb2VzIGJpdHdpc2Ugb3BlcmF0aW9ucyAobGlrZSBYT1IsIGFib3ZlKSBvbiAzMi1iaXQgc2lnbmVkXG4gICAqIGludGVnZXJzLiBTaW5jZSB3ZSB3YW50IHRoZSByZXN1bHRzIHRvIGJlIGFsd2F5cyBwb3NpdGl2ZSwgY29udmVydCB0aGVcbiAgICogc2lnbmVkIGludCB0byBhbiB1bnNpZ25lZCBieSBkb2luZyBhbiB1bnNpZ25lZCBiaXRzaGlmdC4gKi9cbiAgcmV0dXJuIGhhc2ggPj4+IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaDtcbiIsImltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcbi8vIEltcG9ydCBzdHlsZWQgY29tcG9uZW50cyBTZXJ2ZXJTdHlsZVNoZWV0XG5pbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0IH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG4vLyBpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyByZW5kZXJQYWdlIH0pIHtcbiAgICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KCk7XG4gICAgY29uc3QgcGFnZSA9IHJlbmRlclBhZ2UoQXBwID0+IHByb3BzID0+XG4gICAgICBzaGVldC5jb2xsZWN0U3R5bGVzKDxBcHAgey4uLnByb3BzfSAvPilcbiAgICApO1xuICAgIGNvbnN0IHN0eWxlVGFncyA9IHNoZWV0LmdldFN0eWxlRWxlbWVudCgpO1xuICAgIHJldHVybiB7IC4uLnBhZ2UsIHN0eWxlVGFncyB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aHRtbD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAge3RoaXMucHJvcHMuc3R5bGVUYWdzfVxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2pzLnN0cmlwZS5jb20vdjMvXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiIH19PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=