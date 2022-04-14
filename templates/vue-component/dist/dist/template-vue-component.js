(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@vue/composition-api"));
	else if(typeof define === 'function' && define.amd)
		define("dist/template-vue-component", ["@vue/composition-api"], factory);
	else if(typeof exports === 'object')
		exports["dist/template-vue-component"] = factory(require("@vue/composition-api"));
	else
		root["dist/template-vue-component"] = factory(root["VueCompositionAPI"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__vue_composition_api__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelloAqara.vue?vue&type=script&lang=ts&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelloAqara.vue?vue&type=script&lang=ts& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "@vue/composition-api");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    text: {
      type: String,
      "default": 'test text'
    }
  },
  setup: function setup() {
    var welcome = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)('welcome to develop your components');
    return {
      welcome: welcome
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/index.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/index.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "@vue/composition-api");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HelloAqara_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HelloAqara.vue */ "./src/components/HelloAqara.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'template-vue-component',
  props: {
    text: {
      type: String,
      "default": 'hello aqara'
    }
  },
  components: {
    HelloAqara: _components_HelloAqara_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    var abdd = {
      c: '123'
    };
    console.log(abdd);
  }
}));

/***/ }),

/***/ "./src/assets/styles/index.less":
/*!**************************************!*\
  !*** ./src/assets/styles/index.less ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/HelloAqara.vue":
/*!***************************************!*\
  !*** ./src/components/HelloAqara.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HelloAqara_vue_vue_type_template_id_4176c4c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloAqara.vue?vue&type=template&id=4176c4c4& */ "./src/components/HelloAqara.vue?vue&type=template&id=4176c4c4&");
/* harmony import */ var _HelloAqara_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HelloAqara.vue?vue&type=script&lang=ts& */ "./src/components/HelloAqara.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HelloAqara_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HelloAqara_vue_vue_type_template_id_4176c4c4___WEBPACK_IMPORTED_MODULE_0__.render,
  _HelloAqara_vue_vue_type_template_id_4176c4c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/HelloAqara.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/index.vue":
/*!***********************!*\
  !*** ./src/index.vue ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2964abc9& */ "./src/index.vue?vue&type=template&id=2964abc9&");
/* harmony import */ var _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts& */ "./src/index.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/HelloAqara.vue?vue&type=script&lang=ts&":
/*!****************************************************************!*\
  !*** ./src/components/HelloAqara.vue?vue&type=script&lang=ts& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_0_node_modules_ts_loader_index_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloAqara_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use[0]!../../node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0].use[1]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HelloAqara.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelloAqara.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_0_node_modules_ts_loader_index_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloAqara_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/index.vue?vue&type=script&lang=ts&":
/*!************************************************!*\
  !*** ./src/index.vue?vue&type=script&lang=ts& ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_0_node_modules_ts_loader_index_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use[0]!../node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0].use[1]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/index.vue?vue&type=script&lang=ts&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_0_node_modules_ts_loader_index_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/HelloAqara.vue?vue&type=template&id=4176c4c4&":
/*!**********************************************************************!*\
  !*** ./src/components/HelloAqara.vue?vue&type=template&id=4176c4c4& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloAqara_vue_vue_type_template_id_4176c4c4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloAqara_vue_vue_type_template_id_4176c4c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloAqara_vue_vue_type_template_id_4176c4c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HelloAqara.vue?vue&type=template&id=4176c4c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelloAqara.vue?vue&type=template&id=4176c4c4&");


/***/ }),

/***/ "./src/index.vue?vue&type=template&id=2964abc9&":
/*!******************************************************!*\
  !*** ./src/index.vue?vue&type=template&id=2964abc9& ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=2964abc9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/index.vue?vue&type=template&id=2964abc9&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelloAqara.vue?vue&type=template&id=4176c4c4&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/HelloAqara.vue?vue&type=template&id=4176c4c4& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", [_vm._v(_vm._s(_vm.text) + "：" + _vm._s(_vm.welcome))]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/index.vue?vue&type=template&id=2964abc9&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/index.vue?vue&type=template&id=2964abc9& ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "template-vue-component" },
    [_c("HelloAqara", { attrs: { text: _vm.text } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "@vue/composition-api":
/*!***********************************************************************************************************************************************!*\
  !*** external {"root":"VueCompositionAPI","commonjs":"@vue/composition-api","commonjs2":"@vue/composition-api","amd":"@vue/composition-api"} ***!
  \***********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__vue_composition_api__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "@vue/composition-api");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue */ "./src/index.vue");
/* harmony import */ var _assets_styles_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/index */ "./src/assets/styles/index.less");

 // 引入组件

 // 引入css文件,如果有，就必须在这里引入

var Component = _index_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; // Plugin install

Component.install = function install(v) {
  v.use((_vue_composition_api__WEBPACK_IMPORTED_MODULE_0___default())); // vue内部会判断有没有注册过

  v.component(Component.name, Component);
}; // auto install


if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Component);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=template-vue-component.js.map