(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",function(){return SearchField}),__webpack_require__.d(__webpack_exports__,"f",function(){return SearchWrapper}),__webpack_require__.d(__webpack_exports__,"e",function(){return SearchLinearProgress}),__webpack_require__.d(__webpack_exports__,"d",function(){return SearchIconButton}),__webpack_require__.d(__webpack_exports__,"b",function(){return ResultsGridWrapper}),__webpack_require__.d(__webpack_exports__,"a",function(){return Error});var _Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(108),_material_ui_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(951),_material_ui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(950),_material_ui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(952);function _templateObject6(){var data=Object(_Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  color: red;\n  opacity: 0.7;\n"]);return _templateObject6=function _templateObject6(){return data},data}function _templateObject5(){var data=Object(_Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  .ag-root-wrapper.ag-layout-normal {\n    height: 500px;\n    .ag-header {\n      background: whitesmoke;\n      color: gray;\n    }\n  }\n"]);return _templateObject5=function _templateObject5(){return data},data}function _templateObject4(){var data=Object(_Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  grid-row: 2;\n"]);return _templateObject4=function _templateObject4(){return data},data}function _templateObject3(){var data=Object(_Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  grid-column: 1 / span 2;\n"]);return _templateObject3=function _templateObject3(){return data},data}function _templateObject2(){var data=Object(_Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  display: grid;\n  grid-template-rows: 1fr 10fr;\n  grid-template-columns: 1fr 1fr;\n  max-width: 500px;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(_Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  padding: 0 0 10px 0;\n  grid-row: 2;\n  grid-column: 1 / span 2;\n"]);return _templateObject=function _templateObject(){return data},data}var SearchField=Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.default)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a)(_templateObject()),SearchWrapper=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2()),SearchLinearProgress=Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.default)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a)(_templateObject3()),SearchIconButton=Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.default)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a)(_templateObject4()),ResultsGridWrapper=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject5()),Error=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.default.h2(_templateObject6())},236:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Results});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(516),react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__),_elements__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(107),ag_grid_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(515),columnDefs=[{headerName:"Name",field:"name",width:350},{headerName:"Description",field:"description",width:450}];function Results(_ref){var loading=_ref.loading,error=_ref.error,_ref$results=_ref.results,results=void 0===_ref$results?[]:_ref$results;if(loading)return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a,{count:1,height:300});if(error)return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements__WEBPACK_IMPORTED_MODULE_2__.a,null,error);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements__WEBPACK_IMPORTED_MODULE_2__.b,null,results.length>0&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Double click row to go to repo"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ag_grid_react__WEBPACK_IMPORTED_MODULE_3__.AgGridReact,{columnDefs:columnDefs,rowData:results,onRowDoubleClicked:function onRowDoubleClicked(_ref2){var url=_ref2.data.url;window.open(url)}})))}Results.__docgenInfo={description:"",methods:[],displayName:"Results"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Results.js"]={name:"Results",docgenInfo:Results.__docgenInfo,path:"src/components/Results.js"})},238:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return extractResults}),__webpack_require__.d(__webpack_exports__,"a",function(){return apiSearch});var _Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(77),_Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(518),axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(147),axios__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__),_keys_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(519),GITHUB_TOKEN=_keys_json__WEBPACK_IMPORTED_MODULE_3__.GITHUB_TOKEN,Authorization="Bearer ".concat(GITHUB_TOKEN),extractResults=function extractResults(_ref){var results=_ref.data.data.search.edges.map(function(edge){return edge.node});return console.log({results:results}),results},apiSearch=function(){var _ref3=Object(_Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2){var searchTerm,cancelTokenSource;return _Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return searchTerm=_ref2.searchTerm,cancelTokenSource=_ref2.cancelTokenSource,_context.t0=extractResults,_context.next=4,axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("https://api.github.com/graphql",{query:'\n      query {\n        search(query: "'.concat(searchTerm,'", type: REPOSITORY, first: 100) {\n          repositoryCount\n          edges {\n            node {\n              ... on Repository {\n                name\n                url\n                description\n              }\n            }\n          }\n        }\n      }\n    ')},{cancelToken:cancelTokenSource.token,headers:{Authorization:Authorization}});case 4:return _context.t1=_context.sent,_context.abrupt("return",(0,_context.t0)(_context.t1));case 6:case"end":return _context.stop()}},_callee)}));return function apiSearch(_x){return _ref3.apply(this,arguments)}}()},239:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Search});var _Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(526),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_elements__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(107),_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(520),_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__);function Search(_ref){var loading=_ref.loading,onSearch=_ref.onSearch,onCancelSearch=_ref.onCancelSearch,_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),searchTerm=_useState2[0],setSearchTerm=_useState2[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elements__WEBPACK_IMPORTED_MODULE_2__.f,null,loading&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elements__WEBPACK_IMPORTED_MODULE_2__.e,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elements__WEBPACK_IMPORTED_MODULE_2__.c,{id:"standard-search",label:"Find github repo",type:"search",margin:"normal",onChange:function onChange(_ref2){var value=_ref2.target.value;value?(setSearchTerm(value),value.length>3&&onSearch(value)):onCancelSearch()},inputProps:{onKeyDown:function onKeyDown(_ref3){var keyCode=_ref3.keyCode;searchTerm?searchTerm.trim()&&13===keyCode&&onSearch(searchTerm):onCancelSearch()}}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elements__WEBPACK_IMPORTED_MODULE_2__.d,{onClick:function onClick(){return searchTerm.trim()&&onSearch(searchTerm)},"aria-label":"search"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default.a,null)))}Search.__docgenInfo={description:"",methods:[],displayName:"Search"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Search.js"]={name:"Search",docgenInfo:Search.__docgenInfo,path:"src/components/Search.js"})},32:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"e",function(){return SEARCH_INPUT}),__webpack_require__.d(__webpack_exports__,"c",function(){return SEARCH}),__webpack_require__.d(__webpack_exports__,"a",function(){return CANCEL_SEARCH}),__webpack_require__.d(__webpack_exports__,"b",function(){return RESULTS_FOUND}),__webpack_require__.d(__webpack_exports__,"d",function(){return SEARCH_ERROR}),__webpack_require__.d(__webpack_exports__,"f",function(){return UPDATE_CANCEL_TOKEN_SOURCE});var SEARCH_INPUT="SEARCH_INPUT",SEARCH="SEARCH",CANCEL_SEARCH="CANCEL_SEARCH",RESULTS_FOUND="RESULTS_FOUND",SEARCH_ERROR="SEARCH_ERROR",UPDATE_CANCEL_TOKEN_SOURCE="UPDATE_CANCEL_TOKEN_SOURCE"},517:function(module){module.exports=JSON.parse('{"data":{"search":{"repositoryCount":12,"edges":[{"node":{"name":"angular-ui-form-validation","url":"https://github.com/nelsonomuto/angular-ui-form-validation","description":"Directives for angularjs field validation","primaryLanguage":{"name":"JavaScript"},"languages":{"nodes":[{"name":"JavaScript"},{"name":"HTML"},{"name":"CSS"}]},"releases":{"totalCount":10},"forkCount":53,"pullRequests":{"totalCount":9},"stargazers":{"totalCount":187},"issues":{"totalCount":82},"createdAt":"2013-12-19T05:13:53Z","pushedAt":"2017-10-22T15:19:19Z","updatedAt":"2019-08-13T15:32:13Z"}},{"node":{"name":"angular-validation-demo","url":"https://github.com/kadamwhite/angular-validation-demo","description":"Demonstration of basic validation using HTML5 form elements, Angular.js, and Angular UI","primaryLanguage":{"name":"JavaScript"},"languages":{"nodes":[{"name":"JavaScript"}]},"releases":{"totalCount":0},"forkCount":2,"pullRequests":{"totalCount":0},"stargazers":{"totalCount":5},"issues":{"totalCount":1},"createdAt":"2013-03-29T07:51:31Z","pushedAt":"2013-03-29T20:50:16Z","updatedAt":"2019-08-14T18:45:04Z"}},{"node":{"name":"ng-formalizer","url":"https://github.com/inetsys/ng-formalizer","description":"Angular (&UI) form generator and validation from JSON","primaryLanguage":{"name":"JavaScript"},"languages":{"nodes":[{"name":"JavaScript"},{"name":"CSS"},{"name":"HTML"}]},"releases":{"totalCount":33},"forkCount":1,"pullRequests":{"totalCount":0},"stargazers":{"totalCount":4},"issues":{"totalCount":2},"createdAt":"2014-07-25T11:27:52Z","pushedAt":"2016-10-20T10:44:30Z","updatedAt":"2017-11-14T16:37:43Z"}},{"node":{"name":"ng-forms","url":"https://github.com/dalejodc/ng-forms","description":"💻 Build amazing forms with Angular + Semantic UI. This example shows forms with template aproximation .html, data aproximation .ts and a not validated form.","primaryLanguage":{"name":"TypeScript"},"languages":{"nodes":[{"name":"TypeScript"}]},"releases":{"totalCount":0},"forkCount":1,"pullRequests":{"totalCount":0},"stargazers":{"totalCount":5},"issues":{"totalCount":0},"createdAt":"2018-09-13T04:56:16Z","pushedAt":"2018-12-03T02:31:41Z","updatedAt":"2019-06-24T20:49:18Z"}},{"node":{"name":"AngularReactiveForm-signIn-signUP-","url":"https://github.com/Abdofcih/AngularReactiveForm-signIn-signUP-","description":"Angular form with validation and bootstrap UI","primaryLanguage":{"name":"TypeScript"},"languages":{"nodes":[{"name":"JavaScript"},{"name":"TypeScript"},{"name":"HTML"}]},"releases":{"totalCount":0},"forkCount":0,"pullRequests":{"totalCount":0},"stargazers":{"totalCount":0},"issues":{"totalCount":0},"createdAt":"2019-04-07T23:36:42Z","pushedAt":"2019-05-25T03:20:22Z","updatedAt":"2019-05-25T03:20:23Z"}},{"node":{"name":"hValidator","url":"https://github.com/BrianMcBrayer/hValidator","description":"An angular form validator for vanilla html5 and kendo ui","primaryLanguage":{"name":"JavaScript"},"languages":{"nodes":[{"name":"JavaScript"}]},"releases":{"totalCount":0},"forkCount":0,"pullRequests":{"totalCount":0},"stargazers":{"totalCount":0},"issues":{"totalCount":0},"createdAt":"2014-12-03T00:20:02Z","pushedAt":"2014-12-06T07:38:41Z","updatedAt":"2014-12-06T07:38:43Z"}},{"node":{"name":"Angular-Simple-Validation","url":"https://github.com/jeffjenk/Angular-Simple-Validation","description":"Simple form validation for AngularJS using ngMessages. Works with Angular UI Select and supports custom validation methods.","primaryLanguage":{"name":"CSS"},"languages":{"nodes":[{"name":"CSS"}]},"releases":{"totalCount":0},"forkCount":0,"pullRequests":{"totalCount":0},"stargazers":{"totalCount":0},"issues":{"totalCount":0},"createdAt":"2015-02-23T20:23:17Z","pushedAt":"2016-04-05T22:11:27Z","updatedAt":"2015-02-23T22:00:34Z"}},{"node":{"name":"Angular-Pro-Tutorials","url":"https://github.com/awalton3/Angular-Pro-Tutorials","description":"This code covers Angular Pro topics such as,  component APIs, forms & validation, custom filters, UI router, serving, restful APIs, and final project (Authorization module with Parse)","primaryLanguage":{"name":"JavaScript"},"languages":{"nodes":[{"name":"JavaScript"},{"name":"HTML"},{"name":"CSS"}]},"releases":{"totalCount":0},"forkCount":0,"pullRequests":{"totalCount":0},"stargazers":{"totalCount":1},"issues":{"totalCount":0},"createdAt":"2018-04-05T22:58:52Z","pushedAt":"2018-04-23T22:48:07Z","updatedAt":"2018-04-23T22:48:08Z"}},{"node":{"name":"angular-reactive-form","url":"https://github.com/abenjamin1313/angular-reactive-form","description":"Reactive forms is an Angular technique for creating forms in a reactive style. Angular reactive forms facilitate a reactive style of programming that favors explicit management of the data flowing between a non-UI data model (typically retrieved from a server) and a UI-oriented form model that retains the states and values of the HTML controls on screen. Reactive forms offer the ease of using reactive patterns, testing, and validation.","primaryLanguage":{"name":"TypeScript"},"languages":{"nodes":[{"name":"TypeScript"},{"name":"JavaScript"},{"name":"CSS"}]},"releases":{"totalCount":0},"forkCount":0,"pullRequests":{"totalCount":0},"stargazers":{"totalCount":0},"issues":{"totalCount":0},"createdAt":"2018-05-07T23:37:52Z","pushedAt":"2018-05-08T14:02:07Z","updatedAt":"2018-05-08T14:21:49Z"}},{"node":{"name":"Product-Management-AngularJS","url":"https://github.com/NajiSalloum/Product-Management-AngularJS","description":"A business web applications using Angular, including the following: Styling the view with bootstrap, Using the Built-in Services ($http, $resource). Faking the Web Service using $httpBackend service in ngMockE2E module to develop our Angular application without having a back-end web service in place. Routing to multiple views and defining Nested Routing State. Building data entry form. Using Mask Edit using ui-mask directive available in the Angular UI. Utils toolsto get the input following  cases where input must follow a specific format, for example, a phone number or product code, Using a Date Picker, as part of UI Bootstrap Submitting and validation forms by Preparing the form for validation, identifying required fields , making invalid elements, displaying validation messages, using Angular Validation Attributes and Preventing Form Submittal Building and using custom Angular Services ","primaryLanguage":{"name":"JavaScript"},"languages":{"nodes":[{"name":"JavaScript"},{"name":"HTML"},{"name":"CSS"}]},"releases":{"totalCount":0},"forkCount":0,"pullRequests":{"totalCount":0},"stargazers":{"totalCount":0},"issues":{"totalCount":0},"createdAt":"2019-08-27T20:53:36Z","pushedAt":"2019-08-27T21:04:15Z","updatedAt":"2019-08-27T21:04:18Z"}},{"node":{"name":"SpringBoot-And-Angular-springRest-querydsl-jmapperproject","url":"https://github.com/muhammadrefaat91/SpringBoot-And-Angular-springRest-querydsl-jmapperproject","description":"Spring Boot, Angular JS, (CRUD Examples using $http angular service) spring rest, querydsl, jmapper working together. shows integrating AngularJS with Spring MVC 4. We will create a CRUD application using Spring REST API on back-end and AngularJS encapsulated within plain html on front-end, communicating asynchronously with server using $http service. We will also perform all sorts of validation on UI using AngularJS Form","primaryLanguage":{"name":"Java"},"languages":{"nodes":[{"name":"Shell"},{"name":"Batchfile"},{"name":"Java"}]},"releases":{"totalCount":0},"forkCount":0,"pullRequests":{"totalCount":0},"stargazers":{"totalCount":0},"issues":{"totalCount":0},"createdAt":"2017-04-09T12:36:21Z","pushedAt":"2017-04-09T12:52:42Z","updatedAt":"2017-04-09T12:46:25Z"}},{"node":{"name":"TheScripts","url":"https://github.com/VaishNathani/TheScripts","description":"This application is only UI in Bootstrap 4 and Angular 5 and TypeScript and not a fully functional application showcases Bootstrap 4 with Angular 5. The stress on showcasing Bootstrap 4 features. The features like: Cards, Grids, Carousel, Accordian, Navbars with drop downs, Tables and Pagination, Forms, Validations, Progress bars, Lists and badges and few more. The site gets updated with new features time and again..","primaryLanguage":{"name":"HTML"},"languages":{"nodes":[{"name":"TypeScript"},{"name":"JavaScript"},{"name":"HTML"}]},"releases":{"totalCount":0},"forkCount":0,"pullRequests":{"totalCount":0},"stargazers":{"totalCount":0},"issues":{"totalCount":0},"createdAt":"2018-04-09T09:06:16Z","pushedAt":"2018-04-16T09:15:07Z","updatedAt":"2018-04-23T08:54:30Z"}}]}}}')},519:function(module){module.exports=JSON.parse('{"GITHUB_TOKEN":"f7b5fb71cba4a63b86c04ce4001eae6191c6554c"}')},527:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(62),core_browser_esm=__webpack_require__(23);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n        body {\n          padding: 20px;\n        }\n        * {\n          box-sizing: border-box;\n        }\n      "]);return _templateObject=function _templateObject(){return data},data}function GlobalStyles(){return Object(core_browser_esm.jsx)(core_browser_esm.Global,{styles:Object(core_browser_esm.css)(_templateObject())})}var Search=__webpack_require__(239),Results=__webpack_require__(236),redux=__webpack_require__(66),es=__webpack_require__(125),SearchResults_actions=__webpack_require__(32),appActions={searchInput:function searchInput(payload){return{type:SearchResults_actions.e,payload:payload}},cancelSearch:function cancelSearch(){return{type:SearchResults_actions.a}}};function App(_ref){var searchInput=_ref.searchInput,cancelSearch=_ref.cancelSearch,searchResults=_ref.searchResults,loading=searchResults.loading,error=searchResults.error,results=searchResults.results;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(GlobalStyles,null),react_default.a.createElement(Search.a,{loading:loading,error:error,onSearch:function onSearch(searchTerm){return searchInput({searchTerm:searchTerm})},onCancelSearch:cancelSearch}),react_default.a.createElement(Results.a,{loading:loading,error:error,results:results}))}__webpack_exports__.a=Object(es.c)(function mapStateToProps(state){return{searchResults:state.searchResults}},function mapDispatchToProps(dispatch){return Object(redux.b)(appActions,dispatch)})(App);App.__docgenInfo={description:"",methods:[],displayName:"App"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/App.js"]={name:"App",docgenInfo:App.__docgenInfo,path:"src/containers/App.js"})},529:function(module,__webpack_exports__,__webpack_require__){"use strict";var regenerator=__webpack_require__(77),regenerator_default=__webpack_require__.n(regenerator),toConsumableArray=__webpack_require__(525),redux=__webpack_require__(66),esm=__webpack_require__(524),middleware=__webpack_require__(509),redux_saga_effects_npm_proxy_esm=__webpack_require__(63),esm_history=__webpack_require__(86),redux_saga_core_npm_proxy_esm=__webpack_require__(528),defineProperty=__webpack_require__(522),axios=__webpack_require__(147),axios_default=__webpack_require__.n(axios),SearchResults_actions=__webpack_require__(32),api=__webpack_require__(238),_marked=regenerator_default.a.mark(SearchResults_state_cancelSearch),_marked2=regenerator_default.a.mark(SearchResults_state_search);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach(function(key){Object(defineProperty.a)(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}var initialState={searchTerm:"",cancelTokenSource:axios_default.a.CancelToken.source(),results:[],error:"",loading:!1},cancelCount=0,SearchResults_state_searchResultsReducers=function searchResultsReducers(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,action=arguments.length>1?arguments[1]:void 0,_ref=action.payload||{},searchTerm=_ref.searchTerm,results=_ref.results,error=_ref.error;switch(action.type){case SearchResults_actions.e:return _objectSpread({},state,{searchTerm:searchTerm});case SearchResults_actions.c:return _objectSpread({},state,{loading:!0});case SearchResults_actions.f:var cancelTokenSource=axios_default.a.CancelToken.source();return cancelTokenSource.id=++cancelCount,_objectSpread({},state,{cancelTokenSource:cancelTokenSource,cancelCount:cancelCount});case SearchResults_actions.a:return _objectSpread({},state,{loading:!1});case SearchResults_actions.b:return _objectSpread({},state,{results:results,loading:!1});case SearchResults_actions.d:return _objectSpread({},state,{error:error,loading:!1});default:return state}},searchResultsSagas=[Object(redux_saga_effects_npm_proxy_esm.c)(1e3,SearchResults_actions.e,SearchResults_state_search),Object(redux_saga_effects_npm_proxy_esm.f)(SearchResults_actions.a,SearchResults_state_cancelSearch)],getCancelTokenSource=function getCancelTokenSource(state){return state.searchResults.cancelTokenSource};function SearchResults_state_cancelSearch(){var cancelTokenSource;return regenerator_default.a.wrap(function cancelSearch$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,Object(redux_saga_effects_npm_proxy_esm.e)(getCancelTokenSource);case 2:return cancelTokenSource=_context.sent,console.log("cancelling search...",{cancelTokenSourceId:cancelTokenSource.id}),cancelTokenSource.cancel(),_context.next=7,Object(redux_saga_effects_npm_proxy_esm.d)({type:SearchResults_actions.f});case 7:case"end":return _context.stop()}},_marked)}function SearchResults_state_search(action){var searchTerm,cancelTokenSource,results;return regenerator_default.a.wrap(function search$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return searchTerm=action.payload.searchTerm,_context2.next=3,Object(redux_saga_effects_npm_proxy_esm.d)({type:SearchResults_actions.a});case 3:return _context2.prev=3,_context2.next=6,Object(redux_saga_effects_npm_proxy_esm.d)({type:SearchResults_actions.c});case 6:return _context2.next=8,Object(redux_saga_effects_npm_proxy_esm.e)(getCancelTokenSource);case 8:return cancelTokenSource=_context2.sent,console.log("calling search api....",{cancelTokenSourceId:cancelTokenSource.id}),_context2.next=12,Object(redux_saga_effects_npm_proxy_esm.b)(api.a,{searchTerm:searchTerm,cancelTokenSource:cancelTokenSource});case 12:return results=_context2.sent,_context2.next=15,Object(redux_saga_effects_npm_proxy_esm.d)({type:SearchResults_actions.b,payload:{results:results}});case 15:_context2.next=22;break;case 17:return _context2.prev=17,_context2.t0=_context2.catch(3),axios_default.a.isCancel(_context2.t0)&&console.log("Request canceled",_context2.t0.message),_context2.next=22,Object(redux_saga_effects_npm_proxy_esm.d)({type:SearchResults_actions.d,payload:{error:_context2.t0.message}});case 22:case"end":return _context2.stop()}},_marked2,null,[[3,17]])}__webpack_require__.d(__webpack_exports__,"a",function(){return store});var store_marked=regenerator_default.a.mark(rootSaga),store_history=Object(esm_history.a)(),sagaMiddleware=Object(redux_saga_core_npm_proxy_esm.a)();function rootSaga(){return regenerator_default.a.wrap(function rootSaga$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,Object(redux_saga_effects_npm_proxy_esm.a)(Object(toConsumableArray.a)(searchResultsSagas));case 2:case"end":return _context.stop()}},store_marked)}var composeEnhancers=redux.d,enhancers=Object(redux.a)(Object(middleware.a)(store_history),sagaMiddleware),store=Object(redux.e)(function rootReducer(history){return Object(redux.c)({router:Object(esm.a)(history),searchResults:SearchResults_state_searchResultsReducers})}(store_history),{searchResults:initialState},composeEnhancers(enhancers));sagaMiddleware.run(rootSaga)},535:function(module,exports,__webpack_require__){__webpack_require__(536),__webpack_require__(666),module.exports=__webpack_require__(667)},581:function(module,exports){},667:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(103),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(512),react_hot_loader__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(866),__webpack_require__(513));Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__.setConfig)({pureSFC:!0});var req=__webpack_require__(884);Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_1__.setOptions)({name:"Storybook: Nelson Omuto Github Search",goFullScreen:!1,showStoriesPanel:!0,showAddonPanel:!1,addonPanelInRight:!0,sortStoriesByKind:!0,hierarchySeparator:/\//,hierarchyRootSeparator:/\|/,sidebarAnimations:!0,selectedAddonPanel:void 0}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(947),req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(160)(module))},884:function(module,exports,__webpack_require__){var map={"./components/Results.stories.js":885,"./components/Search.stories.js":945};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=884},885:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62),_emotion_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(23),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(103),_Results__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(236),_stories_data_results_sample_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(517),_api__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(238);function _templateObject(){var data=Object(_Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n        border: 1px solid #e3e3e3;\n        margin-bottom: 10px;\n        border-radius: 4px;\n        margin: 30px 50px 0 10px;\n        width: 70%;\n        max-width: 800px;\n        padding: 20px;\n      "]);return _templateObject=function _templateObject(){return data},data}var results=Object(_api__WEBPACK_IMPORTED_MODULE_5__.b)({data:_stories_data_results_sample_json__WEBPACK_IMPORTED_MODULE_4__}),StoryContainer=function StoryContainer(props){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject())},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Results__WEBPACK_IMPORTED_MODULE_3__.a,props))},onResults=function onResults(ResultsTerm){return console.log({ResultsTerm:ResultsTerm})};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Results|Results list",module).add("empty Results list",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(StoryContainer,{loading:!1,onResults:onResults})}).add("Results list",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(StoryContainer,{loading:!1,onResults:onResults,results:results})}).add("error Results list",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(StoryContainer,{loading:!1,onResults:onResults,results:results,error:"Error message"})}).add("loading Results list",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(StoryContainer,{loading:!0})})}.call(this,__webpack_require__(160)(module))},945:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62),_emotion_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(23),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(103),_Search__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(239);function _templateObject(){var data=Object(_Users_nelsonomuto_conduit_TakeHomeScreen_master_github_search_node_modules_react_scripts_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n        border: 1px solid #e3e3e3;\n        margin-bottom: 10px;\n        border-radius: 4px;\n        margin: 30px 50px 0 10px;\n        width: 70%;\n        max-width: 800px;\n        padding: 20px;\n      "]);return _templateObject=function _templateObject(){return data},data}var StoryContainer=function StoryContainer(props){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject())},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Search__WEBPACK_IMPORTED_MODULE_3__.a,props))},onSearch=function onSearch(searchTerm){return console.log({searchTerm:searchTerm})};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Search|search field",module).add("empty search field",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(StoryContainer,{loading:!1,onSearch:onSearch})}).add("loading search field",function(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(StoryContainer,{loading:!0})})}.call(this,__webpack_require__(160)(module))},947:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(103),_src_containers_App__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(527),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(125),_src_state_store__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(529);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Welcome",module).add("to Nelson Omuto Github Search Storybook",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.a,{store:_src_state_store__WEBPACK_IMPORTED_MODULE_4__.a},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_containers_App__WEBPACK_IMPORTED_MODULE_2__.a,null))})}.call(this,__webpack_require__(160)(module))}},[[535,1,2]]]);
//# sourceMappingURL=main.bdf8288c9b3c10605808.bundle.js.map