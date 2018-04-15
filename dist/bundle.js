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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Charts/Donut.ts":
/*!*****************************!*\
  !*** ./src/Charts/Donut.ts ***!
  \*****************************/
/*! exports provided: Donut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Donut", function() { return Donut; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);

var Donut = /** @class */ (function () {
    function Donut(parameters) {
        this._container = d3__WEBPACK_IMPORTED_MODULE_0__["select"](parameters);
        this.draw();
        // this._container.append('svg').style('background-color',"red").text("ddddd");
    }
    Donut.prototype.draw = function () {
        var tooltip = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#chart')
            .append('div')
            .attr('class', 'tooltip');
        tooltip.append('div')
            .attr('class', 'label');
        tooltip.append('div')
            .attr('class', 'count');
        tooltip.append('div')
            .attr('class', 'percent');
        var dataset = [
            { sala: "Lactantes", value: 74 },
            { sala: "Deambuladores", value: 85 },
            { sala: "2 años", value: 840 },
            { sala: "Primera sección", value: 4579 },
            { sala: "Segunda sección", value: 5472 },
            { sala: "Tercera sección", value: 7321 },
        ];
        var aa = d3__WEBPACK_IMPORTED_MODULE_0__["csv"]("data.csv", function (d, columns) { return null; });
        var width = 360;
        var height = 360;
        var radius = Math.min(width, height) / 2;
        var color = d3__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_0__["schemeCategory10"]);
        var svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#chart')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');
        var donutWidth = 75;
        var arc = d3__WEBPACK_IMPORTED_MODULE_0__["arc"]()
            .innerRadius(radius - donutWidth)
            .outerRadius(radius);
        var pie = d3__WEBPACK_IMPORTED_MODULE_0__["pie"]()
            .sort(null);
        var legendRectSize = 18;
        var legendSpacing = 4;
        var path = svg.selectAll('path')
            .data(pie(dataset.map(function (d) { return d.value; })))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function (d, i) {
            return color(d.data.toString());
        });
    };
    Donut.prototype.readCSV = function () {
        var csvdata = d3__WEBPACK_IMPORTED_MODULE_0__["csv"]("data.csv", function (d, i, columns) {
            // var total = d3.sum(columns.slice(1), function(key) { return +d[key]; })
            return {
                state: d.Case,
                sum: d
            };
        });
        return csvdata;
    };
    return Donut;
}());



/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Charts_Donut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Charts/Donut */ "./src/Charts/Donut.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);


// import * as d3 from "../node_modules/@types/d3/index";
debugger;
var c = new _Charts_Donut__WEBPACK_IMPORTED_MODULE_0__["Donut"]('body');
// d3.select('body').append('svg');
// var csv = c.readCSV();
// var csvdata = d3.csv("/data.csv", (d, i, columns) => {
//     console.log(d);
//     // var total = d3.sum(columns.slice(1), function(key) { return +d[key]; })
//     return {
//       state: d.Case,
//       sum: d}
//   });
d3__WEBPACK_IMPORTED_MODULE_1__["json"]("http://www.mocky.io/v2/5ad170d33000006400534bf1")
    .then(function (d) { return console.log(d); });


/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = d3;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoYXJ0cy9Eb251dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImQzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkV5QjtBQUV6QjtJQUdJLGVBQVksVUFBaUI7UUFFekIsSUFBSSxDQUFDLFVBQVUsR0FBSSx5Q0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLCtFQUErRTtJQUNuRixDQUFDO0lBRUQsb0JBQUksR0FBSjtRQUVJLElBQUksT0FBTyxHQUFHLHlDQUFTLENBQUMsUUFBUSxDQUFDO2FBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDYixJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFeEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENB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QUFFLENBQUM7YUFBQztRQUNYLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQXNOTCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVNzQztBQUNkO0FBQ3pCLHlEQUF5RDtBQUN6RCxRQUFRLENBQUM7QUFDVCxJQUFJLENBQUMsR0FBRyxJQUFJLG1EQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUIsbUNBQW1DO0FBQ25DLHlCQUF5QjtBQUd6Qix5REFBeUQ7QUFDekQsc0JBQXNCO0FBQ3RCLGlGQUFpRjtBQUNqRixlQUFlO0FBQ2YsdUJBQXVCO0FBQ3ZCLGdCQUFnQjtBQUNoQixRQUFRO0FBQ1IsdUNBQU8sQ0FBQyxpREFBaUQsQ0FBQztLQUN6RCxJQUFJLENBQ0QsV0FBQyxJQUFHLGNBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUNyQixDQUFDOzs7Ozs7Ozs7Ozs7QUNuQkYsb0IiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC50c1wiKTtcbiIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERvbnV0IFxyXG57XHJcbiAgICBwcml2YXRlIF9jb250YWluZXIgOiBkMy5TZWxlY3Rpb248YW55LHt9LGFueSxhbnk+O1xyXG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVyczpzdHJpbmcpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9ICBkMy5zZWxlY3QocGFyYW1ldGVycyk7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgLy8gdGhpcy5fY29udGFpbmVyLmFwcGVuZCgnc3ZnJykuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLFwicmVkXCIpLnRleHQoXCJkZGRkZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KClcclxuICAgIHtcclxuICAgICAgICB2YXIgdG9vbHRpcCA9IGQzLnNlbGVjdCgnI2NoYXJ0JykgICAgICAgICAgICBcclxuICAgICAgICAuYXBwZW5kKCdkaXYnKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3Rvb2x0aXAnKTsgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB0b29sdGlwLmFwcGVuZCgnZGl2JykgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwnKTsgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIHRvb2x0aXAuYXBwZW5kKCdkaXYnKSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjb3VudCcpOyAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgdG9vbHRpcC5hcHBlbmQoJ2RpdicpICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3BlcmNlbnQnKTsgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB2YXIgZGF0YXNldCA9IFtcclxuICAgICAgICAgIHtzYWxhOiBcIkxhY3RhbnRlc1wiLCB2YWx1ZTogNzR9LFxyXG4gICAgICBcdFx0e3NhbGE6IFwiRGVhbWJ1bGFkb3Jlc1wiLCB2YWx1ZTogODV9LFxyXG4gICAgICBcdFx0e3NhbGE6IFwiMiBhw7Fvc1wiLCB2YWx1ZTogODQwfSxcclxuICAgICBcdFx0ICB7c2FsYTogXCJQcmltZXJhIHNlY2Npw7NuXCIsIHZhbHVlOiA0NTc5fSwgICBcclxuICAgIFx0XHQgIHtzYWxhOiBcIlNlZ3VuZGEgc2VjY2nDs25cIiwgdmFsdWU6IDU0NzJ9LFxyXG4gICAgIFx0XHQgIHtzYWxhOiBcIlRlcmNlcmEgc2VjY2nDs25cIiwgdmFsdWU6IDczMjF9LFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHZhciBhYSA9IGQzLmNzdihcImRhdGEuY3N2XCIsIGZ1bmN0aW9uKGQsIGNvbHVtbnMpIHtyZXR1cm4gbnVsbH0pO1xyXG5cclxuICAgICAgICB2YXIgd2lkdGggPSAzNjA7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IDM2MDtcclxuICAgICAgICB2YXIgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyO1xyXG5cclxuICAgICAgICB2YXIgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XHJcblxyXG4gICAgICAgIHZhciBzdmcgPSBkMy5zZWxlY3QoJyNjaGFydCcpXHJcbiAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXHJcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxyXG4gICAgICAgICAgLmFwcGVuZCgnZycpXHJcbiAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgKHdpZHRoIC8gMikgKyBcclxuICAgICAgICAgICAgJywnICsgKGhlaWdodCAvIDIpICsgJyknKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgZG9udXRXaWR0aCA9IDc1O1xyXG5cclxuICAgICAgICB2YXIgYXJjID0gZDMuYXJjKClcclxuICAgICAgICAgIC5pbm5lclJhZGl1cyhyYWRpdXMgLSBkb251dFdpZHRoKVxyXG4gICAgICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cyk7XHJcblxyXG4gICAgICAgIHZhciBwaWUgPSBkMy5waWUoKVxyXG4gICAgICAgICAgLnNvcnQobnVsbCk7XHJcblxyXG4gICAgICAgIHZhciBsZWdlbmRSZWN0U2l6ZSA9IDE4O1xyXG5cdFx0XHRcdHZhciBsZWdlbmRTcGFjaW5nID0gNDtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgcGF0aCA9IHN2Zy5zZWxlY3RBbGwoJ3BhdGgnKVxyXG4gICAgICAgICAgLmRhdGEocGllKGRhdGFzZXQubWFwKChkKT0+ZC52YWx1ZSkpKVxyXG4gICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAgICAgLmF0dHIoJ2QnLCA8YW55PmFyYylcclxuICAgICAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZCwgaSkgeyBcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yKGQuZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlYWRDU1YoKTphbnkge1xyXG5cclxuICAgICAgdmFyIGNzdmRhdGEgPSBkMy5jc3YoXCJkYXRhLmNzdlwiLCAoZCwgaSwgY29sdW1ucykgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHZhciB0b3RhbCA9IGQzLnN1bShjb2x1bW5zLnNsaWNlKDEpLCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuICtkW2tleV07IH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN0YXRlOiBkLkNhc2UsXHJcbiAgICAgICAgICBzdW06IGR9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY3N2ZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcmF3Migpe1xyXG4gICAgLy8gICB2YXIgbWF0Y2hLZXlzID0gW1xyXG4gICAgLy8gICAgIFwiQ2FzZVwiLFxyXG4gICAgLy8gICAgIFwiSGVhdCBSZWplY3Rpb25cIixcclxuICAgIC8vICAgICBcIkhlYXRpbmdcIixcclxuICAgIC8vICAgICBcIkhlYXQgUmVjb3ZlcnlcIixcclxuICAgIC8vICAgICBcIkludGVyaW9yIExpZ2h0aW5nXCIsXHJcbiAgICAvLyAgICAgXCJFeHRlcmlvciBMaWdodGluZ1wiLFxyXG4gICAgLy8gICAgIFwiR2VuZXJhdG9yc1wiLFxyXG4gICAgLy8gICAgIFwiUmVmcmlnZXJhdGlvblwiLFxyXG4gICAgLy8gICAgIFwiSHVtaWRpZmljYXRpb25cIixcclxuICAgIC8vICAgICBcIkludGVyaW9yIEVxdWlwbWVudFwiLFxyXG4gICAgLy8gICAgIFwiRXh0ZXJpb3IgRXF1aXBtZW50XCIsXHJcbiAgICAvLyAgICAgXCJXYXRlciBTeXN0ZW1zXCIsXHJcbiAgICAvLyAgICAgXCJDb29saW5nXCIsXHJcbiAgICAvLyAgICAgXCJGYW5zXCIsXHJcbiAgICAvLyAgICAgXCJQdW1wc1wiXHJcbiAgICAvLyAgIF1cclxuICAgIC8vICAgdmFyIGZvcm1hdFN1bSA9IGQzLmZvcm1hdChcIi4wZlwiKTtcclxuICAgICAgXHJcbiAgICAvLyAgIHZhciBwYWRkaW5nID0gMTA7XHJcbiAgICAgIFxyXG4gICAgLy8gICB2YXIgcmFkaXVzID0gZDMuc2NhbGVTcXJ0KClcclxuICAgIC8vICAgICAgIC5yYW5nZShbMCwgMjUwXSk7XHJcbiAgICAgIFxyXG4gICAgLy8gICB2YXIgY29sb3JzID0ge1xyXG4gICAgLy8gICAgIFwiSGVhdCBSZWplY3Rpb25cIjpcIiM5RjUxNjRcIixcclxuICAgIC8vICAgICBcIkhlYXRpbmdcIjpcIiNjYjJlMmVcIiwgXHJcbiAgICAvLyAgICAgXCJIZWF0IFJlY292ZXJ5XCI6XCIjRUQ3RDMwXCIsIFxyXG4gICAgLy8gICAgIFwiSW50ZXJpb3IgTGlnaHRpbmdcIjpcIiNGRkRDNkZcIiwgXHJcbiAgICAvLyAgICAgXCJFeHRlcmlvciBMaWdodGluZ1wiOlwiI0Y0RTFBRlwiLCBcclxuICAgIC8vICAgICBcIkdlbmVyYXRvcnNcIjpcIiNFREVERUVcIiwgXHJcbiAgICAvLyAgICAgXCJSZWZyaWdlcmF0aW9uXCI6XCIjZGZkZmUxXCIsXHJcbiAgICAvLyAgICAgXCJIdW1pZGlmaWNhdGlvblwiOlwiI0NERTdDQVwiLFxyXG4gICAgLy8gICAgIFwiSW50ZXJpb3IgRXF1aXBtZW50XCI6XCIjQjlFQUNEXCIsXHJcbiAgICAvLyAgICAgXCJFeHRlcmlvciBFcXVpcG1lbnRcIjpcIiNCNUQwRERcIixcclxuICAgIC8vICAgICBcIldhdGVyIFN5c3RlbXNcIjpcIiM2NkE1RDhcIixcclxuICAgIC8vICAgICBcIkNvb2xpbmdcIjpcIiMzMDc2QjZcIixcclxuICAgIC8vICAgICBcIkZhbnNcIjpcIiM2MDQ5ODdcIixcclxuICAgIC8vICAgICBcIlB1bXBzXCI6XCIjOWQ1MjgyXCJcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICB2YXIgc2hvcnROYW1lID0ge1xyXG4gICAgLy8gICAgIFwiSGVhdCBSZWplY3Rpb25cIjpcIkhlYXQgUmVqXCIsXHJcbiAgICAvLyAgICAgXCJIZWF0aW5nXCI6XCJIZWF0aW5nXCIsIFxyXG4gICAgLy8gICAgIFwiSGVhdCBSZWNvdmVyeVwiOlwiSGVhdFJjeVwiLCBcclxuICAgIC8vICAgICBcIkludGVyaW9yIExpZ2h0aW5nXCI6XCJJbnRMaWdodFwiLCBcclxuICAgIC8vICAgICBcIkV4dGVyaW9yIExpZ2h0aW5nXCI6XCJFeHRMaWdodFwiLCBcclxuICAgIC8vICAgICBcIkdlbmVyYXRvcnNcIjpcIkdlbmVyYXRvclwiLCBcclxuICAgIC8vICAgICBcIlJlZnJpZ2VyYXRpb25cIjpcIlJlZnJpZ2VyYXRpb25cIixcclxuICAgIC8vICAgICBcIkh1bWlkaWZpY2F0aW9uXCI6XCJIdW1pZGlmaWNhdGlvblwiLFxyXG4gICAgLy8gICAgIFwiSW50ZXJpb3IgRXF1aXBtZW50XCI6XCJJbnQgRXF1aXBcIixcclxuICAgIC8vICAgICBcIkV4dGVyaW9yIEVxdWlwbWVudFwiOlwiRXh0IEVxdWlwXCIsXHJcbiAgICAvLyAgICAgXCJXYXRlciBTeXN0ZW1zXCI6XCJESFdcIixcclxuICAgIC8vICAgICBcIkNvb2xpbmdcIjpcIkNvb2xpbmdcIixcclxuICAgIC8vICAgICBcIkZhbnNcIjpcIkZhbnNcIixcclxuICAgIC8vICAgICBcIlB1bXBzXCI6XCJQdW1wc1wiXHJcbiAgICAvLyAgIH1cclxuICAgICAgXHJcbiAgICAvLyAgIHZhciBhcmMgPSBkMy5hcmMoKVxyXG4gICAgLy8gICAgICAgLnBhZFJhZGl1cyg2Myk7XHJcbiAgICAgIFxyXG4gICAgLy8gICB2YXIgcGllID0gZDMucGllKClcclxuICAgIC8vICAgICAgIC5zb3J0KG51bGwpXHJcbiAgICAvLyAgICAgICAucGFkQW5nbGUoMC4wNSlcclxuICAgIC8vICAgICAgIC52YWx1ZShmdW5jdGlvbihkKSB7IHJldHVybiBkLnBvcHVsYXRpb247IH0pO1xyXG4gICAgICBcclxuICAgIC8vICAgdmFyIGNzdmRhdGEgPSBkMy5jc3YoXCJkYXRhLmNzdlwiLCAoZCwgaSwgY29sdW1ucykgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIHZhciB0b3RhbCA9IGQzLnN1bShjb2x1bW5zLnNsaWNlKDEpLCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuICtkW2tleV07IH0pXHJcbiAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgIHN0YXRlOiBkLkNhc2UsXHJcbiAgICAvLyAgICAgICBzdW06IGR9XHJcbiAgICAvLyAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyAgIGQzLmNzdihcImRhdGEuY3N2XCIsIGZ1bmN0aW9uKGQsIGksIGNvbHVtbnMpIHtcclxuICAgIC8vICAgICB2YXIgdG90YWwgPSBkMy5zdW0oY29sdW1ucy5zbGljZSgxKSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiArZFtrZXldOyB9KVxyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICBzdGF0ZTogZC5DYXNlLFxyXG4gICAgLy8gICAgICAgc3VtOiB0b3RhbCxcclxuICAgIC8vICAgICAgIGFnZXM6IGNvbHVtbnMuc2xpY2UoMSkubWFwKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAgIGFnZToga2V5LFxyXG4gICAgLy8gICAgICAgICAgIHBvcHVsYXRpb246IGRba2V5XSxcclxuICAgIC8vICAgICAgICAgICBwZXJjZW50OmQzLmZvcm1hdChcIiwuMSVcIikoZFtrZXldL3RvdGFsKVxyXG4gICAgLy8gICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgfSlcclxuICAgIC8vICAgICB9O1xyXG4gICAgLy8gICB9LCBmdW5jdGlvbihlcnJvciwgZGF0YSkge1xyXG4gICAgLy8gICAgIGlmIChlcnJvcikgdGhyb3cgZXJyb3I7XHJcbiAgICAgIFxyXG4gICAgLy8gICAgIHJhZGl1cy5kb21haW4oWzAsIGQzLm1heChkYXRhLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnN1bTsgfSldKTtcclxuICAgICAgXHJcbiAgICAvLyAgICAgdmFyIGxlZ2VuZCA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwic3ZnXCIpXHJcbiAgICAvLyAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsZWdlbmRcIilcclxuICAgIC8vICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAxMjApXHJcbiAgICAvLyAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIChkYXRhLmNvbHVtbnMubGVuZ3RoIC0gMSkgKiAyMClcclxuICAgIC8vICAgICAgIC5zZWxlY3RBbGwoXCJnXCIpXHJcbiAgICAvLyAgICAgICAgIC5kYXRhKG1hdGNoS2V5cy5zbGljZSgxKSlcclxuICAgIC8vICAgICAgIC5lbnRlcigpLmFwcGVuZChcImdcIilcclxuICAgIC8vICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIGkgKiAyMCArIFwiKVwiOyB9KTtcclxuICAgICAgXHJcbiAgICAvLyAgICAgbGVnZW5kLmFwcGVuZChcInJlY3RcIilcclxuICAgIC8vICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAxOClcclxuICAgIC8vICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMTgpXHJcbiAgICAvLyAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyAgcmV0dXJuIGNvbG9yc1tkXTsgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIGxlZ2VuZC5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAvLyAgICAgICAgIC5hdHRyKFwieFwiLCAyNClcclxuICAgIC8vICAgICAgICAgLmF0dHIoXCJ5XCIsIDkpXHJcbiAgICAvLyAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuMzVlbVwiKVxyXG4gICAgLy8gICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiBkOyB9KTtcclxuICAgIC8vICAgLy9jb25zb2xlLmxvZyhcImRkXCIrZGF0YSk7XHJcbiAgICAvLyAgICAgdmFyIHN2ZyA9IGQzLnNlbGVjdChcImJvZHlcIikuc2VsZWN0QWxsKFwiLnBpZVwiKVxyXG4gICAgLy8gICAgICAgICAuZGF0YShkYXRhKVxyXG4gICAgLy8gICAgICAgLmVudGVyKCkuYXBwZW5kKFwic3ZnXCIpXHJcbiAgICAvLyAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwaWVcIilcclxuICAgIC8vICAgICAgICAgLmVhY2gobXVsdGlwbGUpXHJcbiAgICAvLyAgICAgICAuc2VsZWN0KFwiZ1wiKTtcclxuICAgICAgXHJcbiAgICAvLyAgICAgdmFyIGxhYmVsID0gc3ZnLmFwcGVuZChcInRleHRcIilcclxuICAgIC8vICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsXCIpO1xyXG4gICAgICBcclxuICAgIC8vICAgICBsYWJlbC5hcHBlbmQoXCJ0c3BhblwiKVxyXG4gICAgLy8gICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGFiZWwtbmFtZVwiKVxyXG4gICAgLy8gICAgICAgICAuYXR0cihcInhcIiwgMClcclxuICAgIC8vICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi0xLjc2OGVtXCIpXHJcbiAgICAvLyAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2FmYWZhZlwiKVxyXG4gICAgLy8gICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiBkLnN0YXRlOyB9KTtcclxuICAgICAgXHJcbiAgICAvLyAgICAgbGFiZWwuYXBwZW5kKFwidHNwYW5cIilcclxuICAgIC8vICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsLXZhbHVlXCIpXHJcbiAgICAvLyAgICAgICAgIC5hdHRyKFwieFwiLCAwKVxyXG4gICAgLy8gICAgICAgICAuYXR0cihcImR5XCIsIFwiMC45NzQ0MDAwMDAwMDAwMDFlbVwiKVxyXG4gICAgLy8gICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiBmb3JtYXRTdW0oZC5zdW0pOyB9KTtcclxuICAgICAgICBcclxuICAgIC8vICAgICAgIGxhYmVsLmFwcGVuZChcInRzcGFuXCIpXHJcbiAgICAvLyAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbC11bml0XCIpXHJcbiAgICAvLyAgICAgICAgIC5hdHRyKFwieFwiLCAwKVxyXG4gICAgLy8gICAgICAgICAuYXR0cihcImR5XCIsIFwiMS41NTU4NGVtXCIpXHJcbiAgICAvLyAgICAgLmF0dHIoXCJmaWxsXCIsIFwiIzU5NTk1OVwiKVxyXG4gICAgLy8gICAgICAgICAudGV4dChcImtCVFUvU2ZcIik7XHJcbiAgICAgIFxyXG4gICAgLy8gICAgIGZ1bmN0aW9uIG11bHRpcGxlKGQpIHtcclxuICAgIC8vICAgICAgIHZhciByID0gcmFkaXVzKGQuc3VtKTtcclxuICAgICAgXHJcbiAgICAvLyAgICAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KHRoaXMpXHJcbiAgICAvLyAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCByICogMilcclxuICAgIC8vICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCByICogMilcclxuICAgIC8vICAgICAgICAgLmFwcGVuZChcImdcIilcclxuICAgIC8vICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHIgKyBcIixcIiArIHIgKyBcIilcIik7XHJcbiAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgIC8vICAgICAgIHZhciBmaWx0ZWQgPSBbXVxyXG4gICAgLy8gICAgICAgZC5hZ2VzLmZvckVhY2goZnVuY3Rpb24oZCkge1xyXG4gICAgLy8gICAgICAgICB2YXIgZGF0YVZhbHVlID0gZC5wb3B1bGF0aW9uO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgaWYobWF0Y2hLZXlzLmluY2x1ZGVzKGQuYWdlKSl7fVxyXG4gICAgLy8gICAgICAgICBpZihtYXRjaEtleXMuaW5jbHVkZXMoZC5hZ2UpICYmIGRhdGFWYWx1ZT4wKXtcclxuICAgIC8vICAgICAgICAgICByZXR1cm4gZmlsdGVkLnB1c2goZCk7XHJcbiAgICAvLyAgICAgICAgIH07IFxyXG4gICAgLy8gICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgIC8vICAgICAgIHZhciBmaWx0ZWQyID0gZmlsdGVkLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gbWF0Y2hLZXlzLmluZGV4T2YoYS5hZ2UpIC0gbWF0Y2hLZXlzLmluZGV4T2YoYi5hZ2UpO1xyXG4gICAgLy8gICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGZpbHRlZDIpO1xyXG4gICAgLy8gICAgICAgdmFyIGRhdGEgPSBwaWUoZmlsdGVkMik7XHJcbiAgICAvLyAgICAgICB2YXIgc3ZnID0gc3ZnLnNlbGVjdEFsbChcIi5hcmNcIilcclxuICAgIC8vICAgICAgICAgICAuZGF0YShkYXRhKVxyXG4gICAgLy8gICAgICAgICAgIC5lbnRlcigpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgIC8vICAgICAgIHZhciBnID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgIC8vICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjXCIpO1xyXG4gICAgLy8gICAgICAgZy5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIGFyYy5vdXRlclJhZGl1cyhyKS5pbm5lclJhZGl1cyhyICogMC43NSkpXHJcbiAgICAvLyAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBjb2xvcnNbZC5kYXRhLmFnZV07IH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgIC8vICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAvLyAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsXCJtaWRkbGVcIilcclxuICAgIC8vICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyBcclxuICAgIC8vICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBhcmMuY2VudHJvaWQoZCkgKyBcIilcIjsgXHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCItMC4yZW1cIilcclxuICAgIC8vICAgICAgICAgLmF0dHIoXCJkeFwiLCBcIjBlbVwiKVxyXG4gICAgLy8gICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjEuMmVtXCIpXHJcbiAgICAvLyAgICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuZGF0YS5wZXJjZW50OyB9KTtcclxuICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgc3ZnLmFwcGVuZChcInRleHRcIilcclxuICAgIC8vICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIixcIm1pZGRsZVwiKVxyXG4gICAgLy8gICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IFxyXG4gICAgLy8gICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIGFyYy5jZW50cm9pZChkKSArIFwiKVwiOyBcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIjEuNWVtXCIpXHJcbiAgICAvLyAgICAgICAgIC5hdHRyKFwiZHhcIiwgXCIwZW1cIilcclxuICAgIC8vICAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIxLjJlbVwiKVxyXG4gICAgLy8gICAgICAgICAudGV4dChmdW5jdGlvbihkKSB7IHJldHVybiBzaG9ydE5hbWVbZC5kYXRhLmFnZV07IH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBcclxufSIsImltcG9ydCB7IERvbnV0IH0gZnJvbSBcIi4vQ2hhcnRzL0RvbnV0XCI7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xyXG4vLyBpbXBvcnQgKiBhcyBkMyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9kMy9pbmRleFwiO1xyXG5kZWJ1Z2dlcjtcclxudmFyIGMgPSBuZXcgRG9udXQoJ2JvZHknKTtcclxuLy8gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdzdmcnKTtcclxuLy8gdmFyIGNzdiA9IGMucmVhZENTVigpO1xyXG5cclxuXHJcbi8vIHZhciBjc3ZkYXRhID0gZDMuY3N2KFwiL2RhdGEuY3N2XCIsIChkLCBpLCBjb2x1bW5zKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhkKTtcclxuLy8gICAgIC8vIHZhciB0b3RhbCA9IGQzLnN1bShjb2x1bW5zLnNsaWNlKDEpLCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuICtkW2tleV07IH0pXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICBzdGF0ZTogZC5DYXNlLFxyXG4vLyAgICAgICBzdW06IGR9XHJcbi8vICAgfSk7XHJcbmQzLmpzb24oXCJodHRwOi8vd3d3Lm1vY2t5LmlvL3YyLzVhZDE3MGQzMzAwMDAwNjQwMDUzNGJmMVwiKVxyXG4udGhlbihcclxuICAgIGQgPT5jb25zb2xlLmxvZyhkKVxyXG4pOyIsIm1vZHVsZS5leHBvcnRzID0gZDM7Il0sInNvdXJjZVJvb3QiOiIifQ==