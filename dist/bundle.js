/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./images/background.png */ \"./src/images/background.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"canvas {\\n  border: 1px solid black;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: repeat;\\n  background-position: 0 0;\\n  background-size: auto 100%; }\\n  canvas.animateBackground {\\n    animation: animatedBackground 500s linear infinite; }\\n\\n@keyframes animatedBackground {\\n  from {\\n    background-position: 0 0; }\\n  to {\\n    background-position: 0 -10000px; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/classes/gameObject.js":
/*!***********************************!*\
  !*** ./src/classes/gameObject.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameObject; });\nclass GameObject {\n\n    draw(){\n        const img = document.createElement('img');\n        img.src = `${this.imgPath}`;\n        canvasCtx.drawImage(img, this.x, this.y, this.width, this.height);\n    }\n    clearRect() {\n        canvasCtx.clearRect(this.x, this.y , this.width, this.height);\n    }\n}\n\n//# sourceURL=webpack:///./src/classes/gameObject.js?");

/***/ }),

/***/ "./src/classes/objectFactory.js":
/*!**************************************!*\
  !*** ./src/classes/objectFactory.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ObjectFactory; });\n/* harmony import */ var _unPlaybleObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unPlaybleObject */ \"./src/classes/unPlaybleObject.js\");\n\n\nclass ObjectFactory {\n    constructor(params) {\n        this.objects = [];\n        this.spawnSpeed = params.spawnSpeed;\n        this.speed = params.speed;\n        this.character = params.character\n        this.collisionAction = params.collisionAction\n        this.imgPath = params.imgPath\n    }\n\n    start() {\n        this.interval = setInterval(this.createObstacle, this.spawnSpeed, this);\n    }\n    createObstacle(self) {\n        const xPos = Math.floor(Math.random() * window.canvas.width);\n        self.object = new _unPlaybleObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            size: (Math.floor(Math.random() * 3) + 1) * 10,\n            x: xPos,\n            speed: self.speed,\n            character: self.character,\n            imgPath: self.imgPath,\n            collisionAction: self.collisionAction\n        });\n        \n        self.objects.push(self.object);\n\n        self.object.fall();\n    }\n    stop() {\n        this.objects.forEach(object => {\n            object.pause();\n            clearInterval(this.interval);\n        })\n    }\n}\n\n//# sourceURL=webpack:///./src/classes/objectFactory.js?");

/***/ }),

/***/ "./src/classes/playableObject.js":
/*!***************************************!*\
  !*** ./src/classes/playableObject.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlayableObject; });\n/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObject */ \"./src/classes/gameObject.js\");\n\n\nclass PlayableObject extends _gameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(params) {\n        super(params);\n        \n        this.width = params.width,\n        this.height = params.height,\n        this.floatDistance = params.floatDistance,\n        this.stepDistance = params.stepDistance,\n        this.x = (canvas.width - this.width) / 2,\n        this.y = canvas.height - this.height - this.stepDistance\n        this.imgPath = params.imgPath\n    }\n\n    move(param) {\n        this.clearRect()\n        typeof param === 'string' ? this.steer(param) : this.drag(param);\n        this.restrictMovement();\n        this.draw();\n    }\n    steer(direction) {\n        direction === 'right' ? this.moveRight() : this.moveLeft();\n    }\n    drag(xPos) {\n        this.clearRect();\n        this.x = xPos;\n        this.restrictMovement();\n        this.draw();\n    }\n    moveRight() {\n        this.x += this.stepDistance;\n    }\n    moveLeft() {\n        this.x -= this.stepDistance;\n    }\n    restrictMovement() {\n        if (this.x <= 0) {\n            this.x = 0;\n        }\n        if (this.x >= canvas.width - this.width) {\n            this.x = canvas.width - this.width;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/classes/playableObject.js?");

/***/ }),

/***/ "./src/classes/unPlaybleObject.js":
/*!****************************************!*\
  !*** ./src/classes/unPlaybleObject.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UnPlayableObject; });\n/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObject */ \"./src/classes/gameObject.js\");\n\n\nclass UnPlayableObject extends _gameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(params) {\n        super(params);\n        \n        this.size = params.size,\n        this.x = params.x, //spawnPosition()\n        this.y = params.size,\n        this.width = params.size * 2,\n        this.height = params.size * 2,\n        this.speed = params.speed,\n        this.collisionAction = params.collisionAction,\n        this.character = params.character,\n\n        this.imgPath = params.imgPath\n    }\n\n    move() {\n        this.clearRect()\n        this.y += this.speed;\n        this.draw();\n    }\n    fall() {\n        this.move()\n\n        if (this.y < canvas.height + this.size) {\n            if (!this.collision()){\n                window.requestAnimationFrame(() => this.fall());\n            } else {\n                window.game[this.collisionAction]();\n                this.collisionAction === 'scoreUp' ? this.clearRect() : null;\n            }\n        } else {\n            this.clearRect();\n            this.speed = 0;\n        }\n    }\n    collision() {\n        return (this.character.x < this.x + this.width &&\n                this.character.x + this.character.width > this.x &&\n                this.character.y < this.y + this.height &&\n                this.character.y + this.character.height > this.y);\n    }\n    pause() {\n        this.speed = 0\n    }\n}\n\n//# sourceURL=webpack:///./src/classes/unPlaybleObject.js?");

/***/ }),

/***/ "./src/images/asteroid.png":
/*!*********************************!*\
  !*** ./src/images/asteroid.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"57208dba4dbd56f1ea2762930b928022.png\");\n\n//# sourceURL=webpack:///./src/images/asteroid.png?");

/***/ }),

/***/ "./src/images/background.png":
/*!***********************************!*\
  !*** ./src/images/background.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ef12a2083c16556c60274692158d0159.png\");\n\n//# sourceURL=webpack:///./src/images/background.png?");

/***/ }),

/***/ "./src/images/food.png":
/*!*****************************!*\
  !*** ./src/images/food.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e5ec48eba40fb5fcc4d6918263bd1fba.png\");\n\n//# sourceURL=webpack:///./src/images/food.png?");

/***/ }),

/***/ "./src/images/x-wing-50x50.png":
/*!*************************************!*\
  !*** ./src/images/x-wing-50x50.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3267d9874a2b7595f062097587731ed1.png\");\n\n//# sourceURL=webpack:///./src/images/x-wing-50x50.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_playableObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/playableObject */ \"./src/classes/playableObject.js\");\n/* harmony import */ var _classes_objectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/objectFactory */ \"./src/classes/objectFactory.js\");\n/* harmony import */ var _images_x_wing_50x50_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/x-wing-50x50.png */ \"./src/images/x-wing-50x50.png\");\n/* harmony import */ var _images_asteroid_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/asteroid.png */ \"./src/images/asteroid.png\");\n/* harmony import */ var _images_food_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/food.png */ \"./src/images/food.png\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ \"./src/style.scss\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style__WEBPACK_IMPORTED_MODULE_5__);\n\n\n// import {CreateFood} from './food.js';\n\n\n\n\n\n\n\nwindow.onload = function () {\n    const game = window.game = new Game('gameContainer');\n    game.startGame();\n}\n\n\nclass Game {\n    constructor() {\n        this.canvas = window.canvas = this.createCanvas(),\n        this.canvasCtx = window.canvasCtx = this.canvas.getContext('2d');\n        \n        this.globalSpeed = window.globalSpeed = 2;\n        this.score = 0\n        this.obstacleSpawnSpeed = 2000;\n        this.obstacles = []\n        this.foodSpawnSpeed = 1800\n        this.food = []\n    \n        this.character = window.character = new _classes_playableObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            width: 100,\n            height: 107,\n            floatDistance: 100,\n            stepDistance: 15,\n            imgPath: _images_x_wing_50x50_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n        });\n    \n        this.obstacleFactory = new _classes_objectFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            speed: this.globalSpeed, \n            spawnSpeed: this.obstacleSpawnSpeed, \n            character: this.character,\n            collisionAction: 'gameOver',\n            imgPath: _images_asteroid_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        });\n    \n        this.foodFactory = new _classes_objectFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            speed: this.globalSpeed, \n            spawnSpeed: this.obstacleSpawnSpeed, \n            character: this.character,\n            collisionAction: 'scoreUp',\n            imgPath: _images_food_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n        });\n    }\n\n    createCanvas() {\n        const canvas = document.createElement('canvas');\n        canvas.width = 500;\n        canvas.height = 900;\n\n        canvas.className = \"animateBackground\";\n        document.body.appendChild(canvas);\n        return canvas;\n    }\n\n    startGame() {\n        this.createScoreElement();\n        this.createcontrolListeners();\n\n        this.character.draw();\n        this.obstacleFactory.start();\n        this.foodFactory.start();\n    }\n    scoreUp() {\n        this.score++\n        this.scoreEl.innerHTML = this.score\n        this.levelUp()\n    }\n    levelUp() {\n        this.obstacleSpawnSpeed -= 100\n        this.foodSpawnSpeed -= 100\n        window.globalSpeed += 0.05\n    }\n\n    createcontrolListeners() {\n        document.body.addEventListener('keypress', (e) => {\n            this.controls(e.keyCode);\n        })\n    \n        this.canvas.addEventListener('touchmove', (e) => {\n            this.controls('drag', e);\n        })\n    }\n\n    getTouchPosition (e) {\n        var touch = e.touches['0'];\n        var mouseEvent = new MouseEvent(\"mousemove\", {\n            clientX: touch.clientX,\n            clientY: touch.clientY\n        });\n        return mouseEvent.x;\n    }\n\n    controls (keyCode, e) {\n        switch (keyCode) {\n            case 97:\n                this.character.move('left');\n                break;\n            case 100:\n                this.character.move('right');\n                break;\n            case 'drag':\n                this.character.move(this.getTouchPosition(e));\n                break;\n            default:\n                return false;\n        }\n    }\n    generateFood() {\n        const yPos = Math.floor(Math.random() * this.canvas.width);\n        const food = new CreateFood(yPos);\n        \n        this.food.push(food);\n\n        food.fall();\n    }\n    gameOver() {\n        this.canvas.className = \"\";\n        this.obstacleFactory.stop();\n        this.foodFactory.stop();\n    }\n    createScoreElement() {\n        this.scoreEl = document.createElement('h3')\n        this.scoreEl.innerHTML = 0;\n\n        document.body.appendChild(this.scoreEl);\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });