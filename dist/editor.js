(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/src/editor/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/src/editor/blocks/issue-archive.js":
/*!******************************************************!*\
  !*** ./assets/js/src/editor/blocks/issue-archive.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/server-side-render */ \"@wordpress/server-side-render\");\n/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__);\n\n\n/**\n * WordPress dependencies\n */\n\n\n\n\n/*\n * import { ServerSideRender } from '@wordpress/editor'\n *    is deprecated.\n * Use\n *    import ServerSideRender from @wordpress/server-side-render\n * instead. But it only has a default export, not a named export,\n * so you can't use braces.\n */\n\n\n/**\n * @param {Object} props The component properties.\n */\n\nfunction Edit(props) {\n  var ref = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__[\"useBlockProps\"])({\n    ref: ref\n  });\n  var post = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__[\"useSelect\"])(function (select) {\n    return select('core/editor').getCurrentPost();\n  });\n  var unsavedChanges = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__[\"useSelect\"])(function (select) {\n    return select('core/editor').getPostEdits();\n  });\n\n  if (props.attributes.id === 0) {\n    props.setAttributes({\n      id: post.id\n    });\n  }\n\n  if (unsavedChanges.hasOwnProperty('govpack_issue_tax')) {\n    props.setAttributes({\n      issue: unsavedChanges.govpack_issue_tax\n    });\n  } else if (post.hasOwnProperty('govpack_issue_tax')) {\n    props.setAttributes({\n      issue: post.govpack_issue_tax\n    });\n  }\n\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    block: \"govpack/issue-archive\",\n    attributes: props.attributes\n  }));\n}\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__[\"registerBlockType\"])('govpack/issue-archive', {\n  apiVersion: 2,\n  title: 'Govpack Issue Archive',\n  icon: 'groups',\n  category: 'embed',\n  keywords: ['govpack'],\n  attributes: {\n    id: {\n      type: 'number',\n      \"default\": 0\n    },\n    issue: {\n      type: 'array',\n      \"default\": []\n    }\n  },\n  supports: {\n    customClassName: false\n  },\n  edit: Edit,\n  save: function save() {\n    return null;\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/src/editor/blocks/issue-archive.js?");

/***/ }),

/***/ "./assets/js/src/editor/blocks/issue.js":
/*!**********************************************!*\
  !*** ./assets/js/src/editor/blocks/issue.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ \"@wordpress/server-side-render\");\n/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_issue_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/issue-selector */ \"./assets/js/src/editor/components/issue-selector.js\");\n\n\n/**\n * WordPress dependencies\n */\n\n\n\n\n\n/*\n * import { ServerSideRender } from '@wordpress/editor'\n *    is deprecated.\n * Use\n *    import ServerSideRender from @wordpress/server-side-render\n * instead. But it only has a default export, not a named export,\n * so you can't use braces.\n */\n\n\n\n/**\n * @param {Object} props The component properties.\n */\n\nfunction Edit(props) {\n  var ref = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__[\"useBlockProps\"])({\n    ref: ref\n  });\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__[\"InspectorControls\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"Panel\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"PanelBody\"], {\n    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Govpack Issue', 'govpack')\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"PanelRow\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_components_issue_selector__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    props: props\n  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    block: \"govpack/issue\",\n    attributes: props.attributes\n  }));\n}\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__[\"registerBlockType\"])('govpack/issue', {\n  apiVersion: 2,\n  title: 'Govpack Issue',\n  icon: 'groups',\n  category: 'embed',\n  keywords: ['govpack'],\n  attributes: {\n    id: {\n      type: 'number',\n      \"default\": 0\n    }\n  },\n  edit: Edit,\n  save: function save() {\n    return null;\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/src/editor/blocks/issue.js?");

/***/ }),

/***/ "./assets/js/src/editor/blocks/profile.js":
/*!************************************************!*\
  !*** ./assets/js/src/editor/blocks/profile.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ \"@wordpress/server-side-render\");\n/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_profile_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/profile-selector */ \"./assets/js/src/editor/components/profile-selector.js\");\n\n\n/**\n * WordPress dependencies\n */\n\n\n\n\n\n/*\n * import { ServerSideRender } from '@wordpress/editor'\n *    is deprecated.\n * Use\n *    import ServerSideRender from @wordpress/server-side-render\n * instead. But it only has a default export, not a named export,\n * so you can't use braces.\n */\n\n\n\n/**\n * @param {Object} props The component properties.\n */\n\nfunction Edit(props) {\n  /**\n   * @param {string} value The selected format.\n   */\n  function updateFormat(value) {\n    props.setAttributes({\n      format: value\n    });\n  }\n\n  var ref = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__[\"useBlockProps\"])({\n    ref: ref\n  });\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__[\"InspectorControls\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"Panel\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"PanelBody\"], {\n    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Govpack Profile', 'govpack')\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"PanelRow\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_components_profile_selector__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    props: props\n  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"PanelRow\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"RadioControl\"], {\n    label: \"Format\",\n    selected: props.attributes.format,\n    options: [{\n      value: 'full',\n      label: 'Full'\n    }, {\n      value: 'mini',\n      label: 'Mini'\n    }, {\n      value: 'wiki',\n      label: 'Wiki'\n    }],\n    onChange: updateFormat\n  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    block: \"govpack/profile\",\n    attributes: props.attributes\n  }));\n}\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__[\"registerBlockType\"])('govpack/profile', {\n  apiVersion: 2,\n  title: 'Govpack',\n  icon: 'groups',\n  category: 'embed',\n  keywords: ['govpack'],\n  attributes: {\n    id: {\n      type: 'number',\n      \"default\": 0\n    },\n    format: {\n      type: 'string',\n      \"default\": 'full'\n    }\n  },\n  edit: Edit,\n  save: function save() {\n    return null;\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/src/editor/blocks/profile.js?");

/***/ }),

/***/ "./assets/js/src/editor/components/issue-selector.js":
/*!***********************************************************!*\
  !*** ./assets/js/src/editor/components/issue-selector.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);\n\n\n/**\n * WordPress dependencies\n */\n\n\n\n\n\nvar IssueSelector = function IssueSelector(_ref) {\n  var props = _ref.props;\n  // prettier-ignore\n  var issues = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__[\"useSelect\"])(function (select) {\n    return select('core').getEntityRecords('postType', 'govpack_issues', {\n      per_page: 100\n    });\n  });\n\n  var issuesMapped = function issuesMapped() {\n    if (issues) {\n      var mapped = issues.map(function (issue) {\n        return {\n          value: issue.id,\n          label: issue.title.rendered\n        };\n      });\n      return mapped;\n    }\n  };\n  /**\n   * Handle issue selection.\n   *\n   * @param {number} issueId The selected Issue.\n   */\n\n\n  var handleSelect = function handleSelect(issueId) {\n    if (!issueId) {\n      return;\n    }\n\n    props.setAttributes({\n      id: Number(issueId)\n    });\n  };\n\n  var OutputControl = function OutputControl() {\n    var label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Select an issue', 'govpack');\n\n    var options = issuesMapped();\n\n    if (!options) {\n      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"Spinner\"], null);\n    }\n\n    if (options.length === 0) {\n      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"], {\n        tagName: 'p',\n        value: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('No issues have been created', 'govpack')\n      });\n    }\n\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"ComboboxControl\"], {\n      label: label,\n      options: options,\n      value: props.attributes.id,\n      onChange: handleSelect,\n      isLoading: false,\n      allowReset: true // Required as it was originally mistakenly implemented as a required prop: https://github.com/WordPress/gutenberg/issues/29566\n      ,\n      onFilterValueChange: function onFilterValueChange() {}\n    });\n  };\n\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(OutputControl, null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IssueSelector);\n\n//# sourceURL=webpack:///./assets/js/src/editor/components/issue-selector.js?");

/***/ }),

/***/ "./assets/js/src/editor/components/profile-selector.js":
/*!*************************************************************!*\
  !*** ./assets/js/src/editor/components/profile-selector.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);\n\n\n/**\n * WordPress dependencies\n */\n\n\n\n\n\nvar ProfileSelector = function ProfileSelector(_ref) {\n  var props = _ref.props;\n  // prettier-ignore\n  var profiles = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__[\"useSelect\"])(function (select) {\n    return select('core').getEntityRecords('postType', 'govpack_profiles', {\n      per_page: 100\n    });\n  });\n\n  var profilesMapped = function profilesMapped() {\n    if (profiles) {\n      var mapped = profiles.map(function (profile) {\n        return {\n          value: profile.id,\n          label: \"\".concat(profile.cmb2.id.first_name, \" \").concat(profile.cmb2.id.last_name)\n        };\n      });\n      return mapped;\n    }\n  };\n  /**\n   * Handle profile selection.\n   *\n   * @param {number} profileId The selected Profile.\n   */\n\n\n  var handleSelect = function handleSelect(profileId) {\n    if (!profileId) {\n      return;\n    }\n\n    props.setAttributes({\n      id: Number(profileId)\n    });\n  };\n\n  var OutputControl = function OutputControl() {\n    var label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Select a profile', 'govpack');\n\n    var options = profilesMapped();\n\n    if (!options) {\n      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"Spinner\"], null);\n    }\n\n    if (options.length === 0) {\n      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"], {\n        tagName: 'p',\n        value: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('No profiles have been created', 'govpack')\n      });\n    }\n\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"ComboboxControl\"], {\n      label: label,\n      options: options,\n      value: props.attributes.id,\n      onChange: handleSelect,\n      isLoading: false,\n      allowReset: true\n    });\n  };\n\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(OutputControl, null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileSelector);\n\n//# sourceURL=webpack:///./assets/js/src/editor/components/profile-selector.js?");

/***/ }),

/***/ "./assets/js/src/editor/index.js":
/*!***************************************!*\
  !*** ./assets/js/src/editor/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_issue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/issue.js */ \"./assets/js/src/editor/blocks/issue.js\");\n/* harmony import */ var _blocks_issue_archive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/issue-archive.js */ \"./assets/js/src/editor/blocks/issue-archive.js\");\n/* harmony import */ var _blocks_profile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/profile.js */ \"./assets/js/src/editor/blocks/profile.js\");\n\n\n\n\n//# sourceURL=webpack:///./assets/js/src/editor/index.js?");

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"blockEditor\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22blockEditor%22%5D%7D?");

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"blocks\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22blocks%22%5D%7D?");

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"components\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22components%22%5D%7D?");

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"data\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22data%22%5D%7D?");

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"element\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22element%22%5D%7D?");

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"i18n\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22i18n%22%5D%7D?");

/***/ }),

/***/ "@wordpress/server-side-render":
/*!***************************************************!*\
  !*** external {"this":["wp","serverSideRender"]} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"serverSideRender\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22serverSideRender%22%5D%7D?");

/***/ })

/******/ })));