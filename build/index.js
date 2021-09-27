/******/ (function() {
	// webpackBootstrap
	/******/ 'use strict';
	/******/ var __webpack_modules__ = {
		/***/ './src/AccordionItem.js':
			/*!******************************!*\
  !*** ./src/AccordionItem.js ***!
  \******************************/
			/***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! @wordpress/element */ '@wordpress/element'
				);
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					_wordpress_element__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var _wordpress_block_editor_build_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! @wordpress/block-editor/build/components */ '@wordpress/block-editor/build/components'
				);
				/* harmony import */ var _wordpress_block_editor_build_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
					_wordpress_block_editor_build_components__WEBPACK_IMPORTED_MODULE_1__
				);
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! @wordpress/i18n */ '@wordpress/i18n'
				);
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
					_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__
				);
				/* harmony import */ var _VO_ClassNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./VO/ClassNames */ './src/VO/ClassNames.js'
				);

				/* harmony default export */ __webpack_exports__['default'] = ({
					className,
					linkText,
					linkUrl,
					id,
					title,
					content,
					isEdit = false,
					onTitleChange = () => {},
				}) => {
					const wrapperNames = new _VO_ClassNames__WEBPACK_IMPORTED_MODULE_3__['default']()
						.addToken(className)
						.extendBase('item');
					return (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
						'div',
						{
							className: wrapperNames,
						},
						linkUrl &&
							linkText &&
							(0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
								'a',
								{
									href: linkUrl,
									className: wrapperNames.addElement('link'),
								},
								linkText
							),
						(0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {
							type: 'checkbox',
							className: wrapperNames.addElement('input'),
							id: `accordion-input-${id}`,
						}),
						(0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
							'label',
							{
								htmlFor: `accordion-input-${id}`,
								className: wrapperNames.addElement('label'),
							},
							isEdit
								? (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
										_wordpress_block_editor_build_components__WEBPACK_IMPORTED_MODULE_1__.PlainText,
										{
											value: title,
											onChange: onTitleChange,
											placeholder: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(
												'Enter title',
												_VO_ClassNames__WEBPACK_IMPORTED_MODULE_3__['default'].defaultClassBase
											),
										}
								  )
								: (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
										'h3',
										{
											className: wrapperNames.addElement('title'),
										},
										title
								  ),
							(0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
								'button',
								{
									className: wrapperNames.addElement('button'),
								},
								'button'
							)
						),
						(0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
							'div',
							{
								className: wrapperNames.addElement('content'),
							},
							content
						)
					);
				};

				/***/
			},

		/***/ './src/VO/ClassNames.js':
			/*!******************************!*\
  !*** ./src/VO/ClassNames.js ***!
  \******************************/
			/***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! @babel/runtime/helpers/defineProperty */ './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
				);

				class ClassNames {
					/**
					 *
					 * @private
					 * @type string
					 */

					/**
					 *
					 * @type {[string]}
					 * @private
					 */
					constructor(baseClassName) {
						(0, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__['default'])(
							this,
							'_baseClassName',
							void 0
						);

						(0, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__['default'])(this, '_tokens', []);

						(0, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__['default'])(
							this,
							'addToken',
							(name) => {
								if (!name) {
									return this;
								}

								this._tokens.push(name);

								return this;
							}
						);

						(0, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__['default'])(
							this,
							'extendBase',
							(token) => {
								this._baseClassName = `${this._baseClassName}-${token}`;
								return this.addToken(this._baseClassName);
							}
						);

						(0, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__['default'])(
							this,
							'addElement',
							(name) => {
								return this.addToken([this._baseClassName, '__', name].join(''));
							}
						);

						(0, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__['default'])(this, 'toString', () => {
							const clone = [...this._tokens];
							return clone.join(' ');
						});

						this._baseClassName = baseClassName || ClassNames.defaultClassBase;
					}
					/**
					 *
					 * @param {string} name
					 * @return {ClassNames}
					 */
				}

				(0, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__['default'])(
					ClassNames,
					'defaultClassBase',
					'innocode-block-accordion'
				);

				/* harmony default export */ __webpack_exports__['default'] = ClassNames;

				/***/
			},

		/***/ './src/edit.js':
			/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
			/***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				__webpack_require__.r(__webpack_exports__);
				/* harmony export */ __webpack_require__.d(__webpack_exports__, {
					/* harmony export */ default: function() {
						return /* binding */ Edit;
					},
					/* harmony export */
				});
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! @wordpress/element */ '@wordpress/element'
				);
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					_wordpress_element__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! @wordpress/block-editor */ '@wordpress/block-editor'
				);
				/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
					_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__
				);
				/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./editor.scss */ './src/editor.scss'
				);
				/* harmony import */ var _AccordionItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./AccordionItem */ './src/AccordionItem.js'
				);

				function Edit({ setAttributes, attributes }) {
					const [id] = (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(Math.random());

					const onChange = (key, content) => {
						setAttributes({
							[key]: content,
						});
					};

					(0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
						onChange('id', id);
					}, []);

					const onTitleChange = (content) => onChange('title', content);

					const { className } = (0, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
					return (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
						_AccordionItem__WEBPACK_IMPORTED_MODULE_3__['default'],
						{
							id: id,
							className: className,
							content: 'content',
							onTitleChange: onTitleChange,
							isEdit: true,
							linkText: 'link',
							linkUrl: 'linkUrl',
							title: attributes.title,
						}
					);
				}

				/***/
			},

		/***/ './src/icon.js':
			/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
			/***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! @wordpress/element */ '@wordpress/element'
				);
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					_wordpress_element__WEBPACK_IMPORTED_MODULE_0__
				);

				/* harmony default export */ __webpack_exports__['default'] = () =>
					(0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
						'svg',
						{
							viewBox: '0 0 36 36',
							xmlns: 'http://www.w3.org/2000/svg',
						},
						(0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
							d:
								'M31.4 0H4.6C2 0 0 2 0 4.6V11.4C0 14 2 16 4.6 16H31.4C34 16 36 14 36 11.4V4.6C36 2 34 0 31.4 0ZM33 11.4C33 12.2 32.2 13 31.4 13H4.6C3.8 13 3 12.2 3 11.4V4.6C3 3.8 3.8 3 4.6 3H31.4C32.2 3 33 3.8 33 4.6V11.4Z',
							fill: 'black',
						}),
						(0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
							d:
								'M31.4 17H4.6C2 17 0 19 0 21.6V21.4C0 24 2 26 4.6 26H31.4C34 26 36 24 36 21.4V21.6C36 19 34 17 31.4 17ZM33 21.4C33 22.2 32.2 23 31.4 23H4.6C3.8 23 3 22.2 3 21.4V21.6C3 20.8 3.8 20 4.6 20H31.4C32.2 20 33 20.8 33 21.6V21.4Z',
							fill: 'black',
						}),
						(0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
							d:
								'M31.4 27H4.6C2 27 0 29 0 31.6V31.4C0 34 2 36 4.6 36H31.4C34 36 36 34 36 31.4V31.6C36 29 34 27 31.4 27ZM33 31.4C33 32.2 32.2 33 31.4 33H4.6C3.8 33 3 32.2 3 31.4V31.6C3 30.8 3.8 30 4.6 30H31.4C32.2 30 33 30.8 33 31.6V31.4Z',
							fill: 'black',
						})
					);

				/***/
			},

		/***/ './src/index.js':
			/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
			/***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! @wordpress/blocks */ '@wordpress/blocks'
				);
				/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ./edit */ './src/edit.js'
				);
				/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./save */ './src/save.js'
				);
				/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./icon */ './src/icon.js'
				);
				/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! ./style.scss */ './src/style.scss'
				);

				(0, _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('innocode/wp-block-accordion', {
					attributes: {
						id: {
							type: 'string',
						},
						title: {
							type: 'string',
						},
						content: {
							type: 'string',
						},
						linkTitle: {
							type: 'string',
						},
						linkUrl: {
							type: 'string',
						},
					},
					edit: _edit__WEBPACK_IMPORTED_MODULE_1__['default'],
					save: _save__WEBPACK_IMPORTED_MODULE_2__['default'],
					icon: _icon__WEBPACK_IMPORTED_MODULE_3__['default'],
				});

				/***/
			},

		/***/ './src/save.js':
			/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
			/***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				__webpack_require__.r(__webpack_exports__);
				/* harmony export */ __webpack_require__.d(__webpack_exports__, {
					/* harmony export */ default: function() {
						return /* binding */ save;
					},
					/* harmony export */
				});
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! @wordpress/element */ '@wordpress/element'
				);
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					_wordpress_element__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! @wordpress/block-editor */ '@wordpress/block-editor'
				);
				/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
					_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__
				);
				/* harmony import */ var _AccordionItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./AccordionItem */ './src/AccordionItem.js'
				);

				function save(props) {
					const { className, ...saveRest } = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
					const { attributes } = props;
					const save = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();

					if (JSON.stringify(save) !== '{}') {
						console.log(JSON.stringify(save, null, 2));
						console.log(JSON.stringify(props, null, 2));
					}

					return (0, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(
						_AccordionItem__WEBPACK_IMPORTED_MODULE_2__['default'],
						{
							id: attributes.id,
							className: className,
							content: 'content',
							isEdit: true,
							linkText: 'link',
							linkUrl: 'linkUrl',
							title: attributes.title,
						}
					);
				}

				/***/
			},

		/***/ './src/editor.scss':
			/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
			/***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				__webpack_require__.r(__webpack_exports__);
				// extracted by mini-css-extract-plugin

				/***/
			},

		/***/ './src/style.scss':
			/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
			/***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				__webpack_require__.r(__webpack_exports__);
				// extracted by mini-css-extract-plugin

				/***/
			},

		/***/ '@wordpress/block-editor':
			/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
			/***/ function(module) {
				module.exports = window['wp']['blockEditor'];

				/***/
			},

		/***/ '@wordpress/block-editor/build/components':
			/*!******************************************************!*\
  !*** external ["wp","blockEditor/build/components"] ***!
  \******************************************************/
			/***/ function(module) {
				module.exports = window['wp']['blockEditor/build/components'];

				/***/
			},

		/***/ '@wordpress/blocks':
			/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
			/***/ function(module) {
				module.exports = window['wp']['blocks'];

				/***/
			},

		/***/ '@wordpress/element':
			/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
			/***/ function(module) {
				module.exports = window['wp']['element'];

				/***/
			},

		/***/ '@wordpress/i18n':
			/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
			/***/ function(module) {
				module.exports = window['wp']['i18n'];

				/***/
			},

		/***/ './node_modules/@babel/runtime/helpers/esm/defineProperty.js':
			/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
			/***/ function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				__webpack_require__.r(__webpack_exports__);
				/* harmony export */ __webpack_require__.d(__webpack_exports__, {
					/* harmony export */ default: function() {
						return /* binding */ _defineProperty;
					},
					/* harmony export */
				});
				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, {
							value: value,
							enumerable: true,
							configurable: true,
							writable: true,
						});
					} else {
						obj[key] = value;
					}

					return obj;
				}

				/***/
			},

		/******/
	}; // The module cache
	/************************************************************************/
	/******/ /******/ var __webpack_module_cache__ = {}; // The require function
	/******/

	/******/ /******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		} // Create a new module (and put it into the cache)
		/******/ /******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		}); // Execute the module function
		/******/

		/******/ /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__); // Return the exports of the module
		/******/

		/******/ /******/ return module.exports;
		/******/
	} // expose the modules object (__webpack_modules__)
	/******/

	/******/ /******/ __webpack_require__.m = __webpack_modules__; /* webpack/runtime/chunk loaded */
	/******/

	/************************************************************************/
	/******/ /******/ !(function() {
		/******/ var deferred = [];
		/******/ __webpack_require__.O = function(result, chunkIds, fn, priority) {
			/******/ if (chunkIds) {
				/******/ priority = priority || 0;
				/******/ for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
					deferred[i] = deferred[i - 1];
				/******/ deferred[i] = [chunkIds, fn, priority];
				/******/ return;
				/******/
			}
			/******/ var notFulfilled = Infinity;
			/******/ for (var i = 0; i < deferred.length; i++) {
				/******/ var chunkIds = deferred[i][0];
				/******/ var fn = deferred[i][1];
				/******/ var priority = deferred[i][2];
				/******/ var fulfilled = true;
				/******/ for (var j = 0; j < chunkIds.length; j++) {
					/******/ if (
						(priority & (1 === 0) || notFulfilled >= priority) &&
						Object.keys(__webpack_require__.O).every(function(key) {
							return __webpack_require__.O[key](chunkIds[j]);
						})
					) {
						/******/ chunkIds.splice(j--, 1);
						/******/
					} else {
						/******/ fulfilled = false;
						/******/ if (priority < notFulfilled) notFulfilled = priority;
						/******/
					}
					/******/
				}
				/******/ if (fulfilled) {
					/******/ deferred.splice(i--, 1);
					/******/ var r = fn();
					/******/ if (r !== undefined) result = r;
					/******/
				}
				/******/
			}
			/******/ return result;
			/******/
		};
		/******/
	})(); /* webpack/runtime/compat get default export */
	/******/

	/******/ /******/ !(function() {
		/******/ // getDefaultExport function for compatibility with non-harmony modules
		/******/ __webpack_require__.n = function(module) {
			/******/ var getter =
				module && module.__esModule
					? /******/ function() {
							return module['default'];
					  }
					: /******/ function() {
							return module;
					  };
			/******/ __webpack_require__.d(getter, { a: getter });
			/******/ return getter;
			/******/
		};
		/******/
	})(); /* webpack/runtime/define property getters */
	/******/

	/******/ /******/ !(function() {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = function(exports, definition) {
			/******/ for (var key in definition) {
				/******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
					/******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
	})(); /* webpack/runtime/hasOwnProperty shorthand */
	/******/

	/******/ /******/ !(function() {
		/******/ __webpack_require__.o = function(obj, prop) {
			return Object.prototype.hasOwnProperty.call(obj, prop);
		};
		/******/
	})(); /* webpack/runtime/make namespace object */
	/******/

	/******/ /******/ !(function() {
		/******/ // define __esModule on exports
		/******/ __webpack_require__.r = function(exports) {
			/******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				/******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
				/******/
			}
			/******/ Object.defineProperty(exports, '__esModule', { value: true });
			/******/
		};
		/******/
	})(); /* webpack/runtime/jsonp chunk loading */
	/******/

	/******/ /******/ !(function() {
		/******/ // no baseURI
		/******/

		/******/ // object to store loaded and loading chunks
		/******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
		/******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
		/******/ var installedChunks = {
			/******/ index: 0,
			/******/ 'style-index': 0,
			/******/
		}; // no chunk on demand loading // no prefetching // no preloaded // no HMR // no HMR manifest
		/******/

		/******/ /******/

		/******/ /******/

		/******/ /******/

		/******/ /******/

		/******/ /******/

		/******/ __webpack_require__.O.j = function(chunkId) {
			return installedChunks[chunkId] === 0;
		}; // install a JSONP callback for chunk loading
		/******/

		/******/ /******/ var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
			/******/ var chunkIds = data[0];
			/******/ var moreModules = data[1];
			/******/ var runtime = data[2]; // add "moreModules" to the modules object, // then flag all "chunkIds" as loaded and fire callback
			/******/ /******/ /******/ var moduleId,
				chunkId,
				i = 0;
			/******/ if (
				chunkIds.some(function(id) {
					return installedChunks[id] !== 0;
				})
			) {
				/******/ for (moduleId in moreModules) {
					/******/ if (__webpack_require__.o(moreModules, moduleId)) {
						/******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
						/******/
					}
					/******/
				}
				/******/ if (runtime) var result = runtime(__webpack_require__);
				/******/
			}
			/******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
			/******/ for (; i < chunkIds.length; i++) {
				/******/ chunkId = chunkIds[i];
				/******/ if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
					/******/ installedChunks[chunkId][0]();
					/******/
				}
				/******/ installedChunks[chunkIds[i]] = 0;
				/******/
			}
			/******/ return __webpack_require__.O(result);
			/******/
		};
		/******/

		/******/ var chunkLoadingGlobal = (self['webpackChunkwp_block_accordion'] =
			self['webpackChunkwp_block_accordion'] || []);
		/******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
		/******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
			null,
			chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
		);
		/******/
	})(); // startup // Load entry module and return exports // This entry module depends on other loaded chunks and execution need to be delayed
	/******/

	/************************************************************************/
	/******/

	/******/ /******/ /******/ /******/ var __webpack_exports__ = __webpack_require__.O(
		undefined,
		['style-index'],
		function() {
			return __webpack_require__('./src/index.js');
		}
	);
	/******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
	/******/
	/******/
})();
//# sourceMappingURL=index.js.map
