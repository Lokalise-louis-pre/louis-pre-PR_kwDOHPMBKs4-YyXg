"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[1558],{"./node_modules/@storybook/addon-links/react.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>addon_links_react});__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js");var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/utils.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["kind","story","children"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var isPlainLeftClick=function isPlainLeftClick(e){return!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)},LinkTo=function(_PureComponent){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(LinkTo,_PureComponent);var _super=_createSuper(LinkTo);function LinkTo(){var _this;_classCallCheck(this,LinkTo);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).state={href:"/"},_this.updateHref=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var _this$props,kind,story,href;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _this$props=_this.props,kind=_this$props.kind,story=_this$props.story,_context.next=3,(0,utils.ew)(kind,story);case 3:href=_context.sent,_this.setState({href});case 5:case"end":return _context.stop()}}),_callee)}))),_this.handleClick=function(){(0,utils.c4)(_this.props)},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(LinkTo,[{key:"componentDidMount",value:function componentDidMount(){this.updateHref()}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this$props2=this.props,kind=_this$props2.kind,story=_this$props2.story;prevProps.kind===kind&&prevProps.story===story||this.updateHref()}},{key:"render",value:function render(){var _this2=this,_this$props3=this.props,children=(_this$props3.kind,_this$props3.story,_this$props3.children),rest=_objectWithoutProperties(_this$props3,_excluded),href=this.state.href;return react.createElement("a",_extends({href,onClick:function onClick(e){return function cancelled(e){var cb=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(_e){};isPlainLeftClick(e)&&(e.preventDefault(),cb(e))}(e,_this2.handleClick)}},rest),children)}}]),LinkTo}(react.PureComponent);LinkTo.defaultProps={kind:null,story:null,children:void 0};const addon_links_react=LinkTo},"./src/utils/theme/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>color});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const color=colorPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(colorPath,theme.colors)))},"./src/utils/theme/fontFamily.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>fontFamily});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const fontFamily=family=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(family,theme.fonts)))},"./src/utils/theme/fromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>fromTheme});const fromTheme=callback=>_ref=>{let{theme,...props}=_ref;return callback(theme,props)}},"./src/utils/theme/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>typography});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const typography=typographyPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(typographyPath,theme.typography)))},"./src/foundations/designTokens/typography.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TypographyBodyCell:()=>TypographyBodyCell,TypographyComponent:()=>TypographyComponent,TypographyHeadCell:()=>TypographyHeadCell,TypographyRow:()=>TypographyRow,TypographyTable:()=>TypographyTable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,examples:()=>examples});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-links/react.js"),_utils_styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/theme/fontFamily.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/theme/color.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/theme/typography.ts"),_typography__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/foundations/designTokens/typography.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const TypographyComponent=_utils_styled__WEBPACK_IMPORTED_MODULE_4__.ZP.span`
    font-family: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_5__.I)("default")};
    color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_6__.$)("content.primary")};
    ${props=>(0,_utils_theme__WEBPACK_IMPORTED_MODULE_7__.c)(props.styleKey)}
`,TypographyBodyCell=_utils_styled__WEBPACK_IMPORTED_MODULE_4__.ZP.td`
    padding: 10px 25px 10px 0;
`,TypographyHeadCell=_utils_styled__WEBPACK_IMPORTED_MODULE_4__.ZP.th`
    text-align: left;
    font-family: var(--sb-theme-font-family-default);
`,TypographyRow=props=>{const{token}=props;return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(TypographyBodyCell,{mdxType:"TypographyBodyCell"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,"typography('",token,"')")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(TypographyBodyCell,{mdxType:"TypographyBodyCell"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",null,_typography__WEBPACK_IMPORTED_MODULE_8__.c[token].fontSize,"/",_typography__WEBPACK_IMPORTED_MODULE_8__.c[token].lineHeight)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(TypographyBodyCell,{mdxType:"TypographyBodyCell"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(TypographyComponent,{styleKey:token,mdxType:"TypographyComponent"},"Lorem Ipsum")))};TypographyRow.displayName="TypographyRow";const TypographyTable=args=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("thead",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(TypographyHeadCell,{mdxType:"TypographyHeadCell"},"Token"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(TypographyHeadCell,{mdxType:"TypographyHeadCell"},"Value"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(TypographyHeadCell,{mdxType:"TypographyHeadCell"},"Sample"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("tbody",null,Object.keys(_typography__WEBPACK_IMPORTED_MODULE_8__.c).map((token=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(TypographyRow,{key:token,token,mdxType:"TypographyRow"})))));TypographyTable.displayName="TypographyTable";const layoutProps={TypographyComponent,TypographyBodyCell,TypographyHeadCell,TypographyRow,TypographyTable};function MDXContent({components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Foundations/Design Tokens/Typography",parameters:{viewMode:"docs",options:{showPanel:!1},controls:{disable:!0},actions:{disable:!0}},mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",null,"Typography"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"overview"},"Overview"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"At Lokalise we use Graphik typeface internally, and it is ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("strong",{parentName:"p"},"NOT bundled")," in Louis by default due to legal requirements. Please purchase it from their ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"p",href:"https://type.today/en/Graphik"},"website")," in case you need it."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"If you'd like to install a custom font family, please see the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_3__.Z,{kind:"Foundations/Theming/ThemeProvider",mdxType:"LinkTo"},"ThemeProvider")," section for more information."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",null,"Installation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",null,"Usage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-tsx"},"import { typography } from '@lokalise/louis';\n\nconst Heading1 = styled.h1`\n    typography('heading1')\n`;\n\n...\n\n    return (\n        <Heading1>\n            My Heading\n        </Heading1>\n    );\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=5398%3A21831",target:"_blank"},"Figma Source File | Typography"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"examples"},"Examples"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{withSource:"none",mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Examples",mdxType:"Story"},TypographyTable.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const examples=TypographyTable.bind({});examples.storyName="Examples",examples.parameters={storySource:{source:"args => {\n  return <table>\n            <thead>\n                <tr>\n                    <TypographyHeadCell>Token</TypographyHeadCell>\n                    <TypographyHeadCell>Value</TypographyHeadCell>\n                    <TypographyHeadCell>Sample</TypographyHeadCell>\n                </tr>\n            </thead>\n            <tbody>\n                {Object.keys(typographyMap).map(token => <TypographyRow key={token} token={token} />)}\n            </tbody>\n        </table>;\n}"}};const componentMeta={title:"Foundations/Design Tokens/Typography",parameters:{viewMode:"docs",options:{showPanel:!1},controls:{disable:!0},actions:{disable:!0}},includeStories:["examples"]},mdxStoryNameToKey={Examples:"examples"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["TypographyComponent","TypographyBodyCell","TypographyHeadCell","TypographyRow","TypographyTable","examples"]}}]);
//# sourceMappingURL=foundations-designTokens-typography-stories-mdx.d8b77283.iframe.bundle.js.map