webpackJsonp([1,4],{

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });


var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.changeBox = function (index, n, mycolor) {
        var url = "api/change/" + index + "/" + n + "/" + mycolor;
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return;
        });
    };
    DataService.prototype.getData = function (changeId) {
        var url = "api/field/" + changeId;
        // return Promise.resolve(DATA)
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            var data = response.json();
            return data;
        });
    };
    DataService.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Http */] }]; };
    return DataService;
}());

var DATA = { "field": [{ "index": 0, "base": 0, "red": 0, "blue": 0 }, { "index": 1, "base": 8, "red": 0, "blue": 0 }, { "index": 2, "base": 0, "red": 0, "blue": 0 }, { "index": 3, "base": 0, "red": 0, "blue": 0 }, { "index": 4, "base": 0, "red": 0, "blue": 0 }, { "index": 5, "base": 0, "red": 0, "blue": 0 }, { "index": 6, "base": 2, "red": 0, "blue": 0 }, { "index": 7, "base": 0, "red": 0, "blue": 0 }, { "index": 8, "base": 0, "red": 0, "blue": 0 }, { "index": 9, "base": 0, "red": 0, "blue": 0 }, { "index": 10, "base": 0, "red": 0, "blue": 0 }, { "index": 11, "base": 0, "red": 0, "blue": 0 }, { "index": 12, "base": 0, "red": 0, "blue": 0 }, { "index": 13, "base": 8, "red": 0, "blue": 0 }, { "index": 14, "base": 4, "red": 0, "blue": 0 }, { "index": 15, "base": 0, "red": 0, "blue": 0 }, { "index": 16, "base": 9, "red": 0, "blue": 0 }, { "index": 17, "base": 0, "red": 0, "blue": 0 }, { "index": 18, "base": 0, "red": 0, "blue": 0 }, { "index": 19, "base": 0, "red": 0, "blue": 0 }, { "index": 20, "base": 6, "red": 0, "blue": 0 }, { "index": 21, "base": 3, "red": 0, "blue": 0 }, { "index": 22, "base": 2, "red": 0, "blue": 0 }, { "index": 23, "base": 0, "red": 0, "blue": 0 }, { "index": 24, "base": 0, "red": 0, "blue": 0 }, { "index": 25, "base": 1, "red": 0, "blue": 0 }, { "index": 26, "base": 0, "red": 0, "blue": 0 }, { "index": 27, "base": 0, "red": 0, "blue": 0 }, { "index": 28, "base": 9, "red": 0, "blue": 0 }, { "index": 29, "base": 7, "red": 0, "blue": 0 }, { "index": 30, "base": 0, "red": 0, "blue": 0 }, { "index": 31, "base": 0, "red": 0, "blue": 0 }, { "index": 32, "base": 0, "red": 0, "blue": 0 }, { "index": 33, "base": 0, "red": 0, "blue": 0 }, { "index": 34, "base": 8, "red": 0, "blue": 0 }, { "index": 35, "base": 0, "red": 0, "blue": 0 }, { "index": 36, "base": 8, "red": 0, "blue": 0 }, { "index": 37, "base": 0, "red": 0, "blue": 0 }, { "index": 38, "base": 0, "red": 0, "blue": 0 }, { "index": 39, "base": 9, "red": 0, "blue": 0 }, { "index": 40, "base": 0, "red": 0, "blue": 0 }, { "index": 41, "base": 3, "red": 0, "blue": 0 }, { "index": 42, "base": 0, "red": 0, "blue": 0 }, { "index": 43, "base": 0, "red": 0, "blue": 0 }, { "index": 44, "base": 2, "red": 0, "blue": 0 }, { "index": 45, "base": 0, "red": 0, "blue": 0 }, { "index": 46, "base": 1, "red": 0, "blue": 0 }, { "index": 47, "base": 0, "red": 0, "blue": 0 }, { "index": 48, "base": 0, "red": 0, "blue": 0 }, { "index": 49, "base": 0, "red": 0, "blue": 0 }, { "index": 50, "base": 0, "red": 0, "blue": 0 }, { "index": 51, "base": 9, "red": 0, "blue": 0 }, { "index": 52, "base": 5, "red": 0, "blue": 0 }, { "index": 53, "base": 0, "red": 0, "blue": 0 }, { "index": 54, "base": 0, "red": 0, "blue": 0 }, { "index": 55, "base": 7, "red": 0, "blue": 0 }, { "index": 56, "base": 0, "red": 0, "blue": 0 }, { "index": 57, "base": 0, "red": 0, "blue": 0 }, { "index": 58, "base": 4, "red": 0, "blue": 0 }, { "index": 59, "base": 5, "red": 0, "blue": 0 }, { "index": 60, "base": 8, "red": 0, "blue": 0 }, { "index": 61, "base": 0, "red": 0, "blue": 0 }, { "index": 62, "base": 0, "red": 0, "blue": 0 }, { "index": 63, "base": 0, "red": 0, "blue": 0 }, { "index": 64, "base": 3, "red": 0, "blue": 0 }, { "index": 65, "base": 0, "red": 0, "blue": 0 }, { "index": 66, "base": 7, "red": 0, "blue": 0 }, { "index": 67, "base": 1, "red": 0, "blue": 0 }, { "index": 68, "base": 0, "red": 0, "blue": 0 }, { "index": 69, "base": 0, "red": 0, "blue": 0 }, { "index": 70, "base": 0, "red": 0, "blue": 0 }, { "index": 71, "base": 0, "red": 0, "blue": 0 }, { "index": 72, "base": 0, "red": 0, "blue": 0 }, { "index": 73, "base": 0, "red": 0, "blue": 0 }, { "index": 74, "base": 8, "red": 0, "blue": 0 }, { "index": 75, "base": 0, "red": 0, "blue": 0 }, { "index": 76, "base": 0, "red": 0, "blue": 0 }, { "index": 77, "base": 0, "red": 0, "blue": 0 }, { "index": 78, "base": 0, "red": 0, "blue": 0 }, { "index": 79, "base": 4, "red": 0, "blue": 0 }, { "index": 80, "base": 0, "red": 0, "blue": 0 }], "changeId": 0, winner: null };
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });

var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.numberBlock = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
        if (Math.random() < 0.5)
            this.mycolor = 'blue';
        else
            this.mycolor = 'red';
        this.changeId = -1;
        this.selected = -1;
        this.loadData();
    }
    AppComponent.prototype.changeBox = function (n) {
        if (this.selected !== -1)
            this.dataService.changeBox(this.selected, n, this.mycolor);
    };
    AppComponent.prototype.loadData = function () {
        var _this = this;
        this.dataService.getData(this.changeId)
            .then(function (_a) {
            var changeId = _a.changeId, field = _a.field, winner = _a.winner;
            if (changeId > _this.changeId) {
                _this.changeId = changeId;
                _this.field = field;
                if (winner !== null)
                    alert("Game over: " + winner + " has won the game.");
            }
            _this.loadData();
        });
    };
    AppComponent.prototype.select = function (index) {
        if (this.selected === index)
            this.selected = -1;
        else
            this.selected = index;
    };
    AppComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] }]; };
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 72;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__ = __webpack_require__(79);




if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* platformBrowser */])().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__["a" /* AppModuleNgFactory */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component_scss_shim_ngstyle__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_data_service__ = __webpack_require__(30);
/* unused harmony export RenderType_AppComponent */
/* unused harmony export View_AppComponent_0 */
/* unused harmony export View_AppComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */





var styles_AppComponent = [__WEBPACK_IMPORTED_MODULE_0__app_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_AppComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵcrt */]({ encapsulation: 0, styles: styles_AppComponent,
    data: {} });
function View_AppComponent_2(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 1, 'button', [['class',
                'base']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n            ', '\n        ']))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.base;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_AppComponent_3(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 1, 'button', [], [[2, 'blue', null], [2, 'selected', null]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.select(_v.parent.context.$implicit.index) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n            ',
            '\n        ']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = ((_v.parent.context.$implicit.blue !== 0) && (_co.selected !== _v.parent.context.$implicit.index));
        var currVal_1 = (_co.selected === _v.parent.context.$implicit.index);
        _ck(_v, 0, 0, currVal_0, currVal_1);
        var currVal_2 = _v.parent.context.$implicit.red;
        _ck(_v, 1, 0, currVal_2);
    });
}
function View_AppComponent_4(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 1, 'button', [], [[2, 'red', null], [2, 'selected', null]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.select(_v.parent.context.$implicit.index) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n            ',
            '\n        ']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = ((_v.parent.context.$implicit.red !== 0) && (_co.selected !== _v.parent.context.$implicit.index));
        var currVal_1 = (_co.selected === _v.parent.context.$implicit.index);
        _ck(_v, 0, 0, currVal_0, currVal_1);
        var currVal_2 = _v.parent.context.$implicit.blue;
        _ck(_v, 1, 0, currVal_2);
    });
}
function View_AppComponent_1(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 13, 'li', [], null, null, null, null, null)), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n      '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 10, 'div', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵand */](16777216, null, null, 1, null, View_AppComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* TemplateRef */]], { ngIf: [0, 'ngIf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵand */](16777216, null, null, 1, null, View_AppComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* TemplateRef */]], { ngIf: [0, 'ngIf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵand */](16777216, null, null, 1, null, View_AppComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* TemplateRef */]], { ngIf: [0, 'ngIf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n      '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_v.context.$implicit.base !== 0);
        _ck(_v, 5, 0, currVal_0);
        var currVal_1 = ((_v.context.$implicit.base === 0) && (_co.mycolor === 'red'));
        _ck(_v, 8, 0, currVal_1);
        var currVal_2 = ((_v.context.$implicit.base === 0) && (_co.mycolor === 'blue'));
        _ck(_v, 11, 0, currVal_2);
    }, null);
}
function View_AppComponent_5(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 4, 'li', [], null, null, null, null, null)), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n      '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 1, 'button', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.changeBox(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['', ''])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n    ']))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;
        _ck(_v, 3, 0, currVal_0);
    });
}
function View_AppComponent_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['My color: '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['',
            ''])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 7, 'div', [['class', 'field']], null, null, null, null, null)), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 4, 'ul', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵand */](16777216, null, null, 1, null, View_AppComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵdid */](802816, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* IterableDiffers */]], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n  '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 7, 'div', [['class', 'numberBlock']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 4, 'ul', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵand */](16777216, null, null, 1, null, View_AppComponent_5)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵdid */](802816, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* IterableDiffers */]], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n  '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵted */](null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.field;
        _ck(_v, 10, 0, currVal_1);
        var currVal_2 = _co.numberBlock;
        _ck(_v, 19, 0, currVal_2);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.mycolor;
        _ck(_v, 2, 0, currVal_0);
    });
}
function View_AppComponent_Host_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 1, 'app-root', [], null, null, null, View_AppComponent_0, RenderType_AppComponent)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵdid */](49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* AppComponent */], [__WEBPACK_IMPORTED_MODULE_4__app_data_service__["a" /* DataService */]], null, null)], null, null);
}
var AppComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵccf */]('app-root', __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* AppComponent */], View_AppComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRzovUHJvZ3JhbW1pZXJ1bmcvcmFzcGlzcGFjZS9zb2Rva3UvdWkvc3JjL2FwcC9hcHAuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0c6L1Byb2dyYW1taWVydW5nL3Jhc3Bpc3BhY2Uvc29kb2t1L3VpL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm5nOi8vL0c6L1Byb2dyYW1taWVydW5nL3Jhc3Bpc3BhY2Uvc29kb2t1L3VpL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRzovUHJvZ3JhbW1pZXJ1bmcvcmFzcGlzcGFjZS9zb2Rva3UvdWkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzLkFwcENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIk15IGNvbG9yOiA8c3Bhbj57e215Y29sb3J9fTwvc3Bhbj48YnI+XHJcbjxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gIDx1bD5cclxuICAgIDxsaSAqbmdGb3I9XCJsZXQgYm94IG9mIGZpZWxkXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3M9XCJiYXNlXCJcclxuICAgICAgICAgICpuZ0lmPVwiYm94LmJhc2UgIT09IDBcIj5cclxuICAgICAgICAgICAge3tib3guYmFzZX19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgW2NsYXNzLmJsdWVdPVwiYm94LmJsdWUgIT09IDAgJiYgc2VsZWN0ZWQgIT09IGJveC5pbmRleFwiXHJcbiAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwic2VsZWN0ZWQgPT09IGJveC5pbmRleFwiXHJcbiAgICAgICAgICAqbmdJZj1cImJveC5iYXNlID09PSAwICYmIG15Y29sb3IgPT09ICdyZWQnXCJcclxuICAgICAgICAgIChjbGljayk9XCJzZWxlY3QoYm94LmluZGV4KVwiPlxyXG4gICAgICAgICAgICB7e2JveC5yZWR9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIFtjbGFzcy5yZWRdPVwiYm94LnJlZCAhPT0gMCAmJiBzZWxlY3RlZCAhPT0gYm94LmluZGV4XCJcclxuICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJzZWxlY3RlZCA9PT0gYm94LmluZGV4XCJcclxuICAgICAgICAgICpuZ0lmPVwiYm94LmJhc2UgPT09IDAgJiYgbXljb2xvciA9PT0gJ2JsdWUnXCJcclxuICAgICAgICAgIChjbGljayk9XCJzZWxlY3QoYm94LmluZGV4KVwiPlxyXG4gICAgICAgICAgICB7e2JveC5ibHVlfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibnVtYmVyQmxvY2tcIj5cclxuICA8dWw+XHJcbiAgICA8bGkgKm5nRm9yPVwibGV0IGluZGV4IG9mIG51bWJlckJsb2NrXCI+XHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZUJveChpbmRleClcIj57e2luZGV4fX08L2J1dHRvbj5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuPC9kaXY+IiwiPGFwcC1yb290PjwvYXBwLXJvb3Q+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDS1E7TUFBQTtNQUV5Qjs7UUFBQTtRQUFBOzs7O29CQUd6QjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBSUU7VUFBQTtVQUFBO1FBQUE7UUFKRjtNQUFBLGdDQUk4QjtNQUFBOztJQUg1QjtJQUNBO0lBRkYsV0FDRSxVQUNBLFNBRkY7SUFJOEI7SUFBQTs7OztvQkFHOUI7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUlFO1VBQUE7VUFBQTtRQUFBO1FBSkY7TUFBQSxnQ0FJOEI7TUFBQTs7SUFINUI7SUFDQTtJQUZGLFdBQ0UsVUFDQSxTQUZGO0lBSThCO0lBQUE7Ozs7b0JBbEJsQztNQUFBLHdFQUE4QjthQUFBLDhCQUM1QjtNQUFBO01BQUEsZ0JBQUssK0NBQ0g7TUFBQSx5RUFBQTtNQUFBO01BQUEsZUFJUywrQ0FDVDtNQUFBLHlFQUFBO01BQUE7TUFBQSxlQU1TLCtDQUNUO01BQUEseUVBQUE7TUFBQTtNQUFBLGVBTVMsNkNBQ0w7TUFBQTs7SUFqQkY7SUFGRixXQUVFLFNBRkY7SUFRRTtJQUhGLFdBR0UsU0FIRjtJQVVFO0lBSEYsWUFHRSxTQUhGOzs7O29CQWFKO01BQUEsd0VBQXNDO2FBQUEsOEJBQ3BDO01BQUE7UUFBQTtRQUFBO1FBQVE7VUFBQTtVQUFBO1FBQUE7UUFBUjtNQUFBLGdDQUFtQyx3Q0FBa0I7YUFBQTtJQUFsQjtJQUFBOzs7O29CQS9CekMsK0NBQVU7TUFBQTtNQUFBLDRDQUFNO01BQUEsTUFBa0I7TUFBQSwwREFBSTtNQUFBLFNBQ3RDO01BQUEsd0VBQW1CO2FBQUEsMEJBQ2pCO01BQUE7TUFBQSxnQkFBSSwyQ0FDRjtNQUFBLHlFQUFBO01BQUE7TUFBQSx1Q0FzQks7TUFDRix1Q0FDRDtNQUNOO1VBQUE7TUFBeUIseUNBQ3ZCO1VBQUE7VUFBQSxnQkFBSSwyQ0FDRjtVQUFBLHlFQUFBO1VBQUE7VUFBQSx1Q0FFSztNQUNGOztJQTlCQztJQUFKLFlBQUksU0FBSjtJQTJCSTtJQUFKLFlBQUksU0FBSjs7O0lBOUJZO0lBQUE7Ozs7b0JDQWhCO01BQUE7YUFBQTtVQUFBOzs7In0=
//# sourceMappingURL=app.component.ngfactory.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */ var styles = ['.field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  width: 100%;\n  padding: 0;\n  margin: 0; }\n  .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: left;\n    width: 10%;\n    height: 10%;\n    padding: 0;\n    margin: 0; }\n    .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3n+0) {\n      border-right-style: solid;\n      border-right-width: 2px;\n      border-right-color: black; }\n    .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(-n+9) {\n      border-top-style: solid;\n      border-top-width: 2px;\n      border-top-color: black; }\n    .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(-n+9), .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(27n+19), .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(27n+20), .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(27n+21), .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(27n+22), .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(27n+23), .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(27n+24), .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(27n+25), .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(27n+26), .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(27n+27) {\n      border-bottom-style: solid;\n      border-bottom-width: 2px;\n      border-bottom-color: black; }\n    .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9n+1) {\n      border-left-style: solid;\n      border-left-width: 2px;\n      border-left-color: black; }\n    .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n      font-size: 2em;\n      border: none;\n      width: 100%;\n      background: white; }\n      .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.base[_ngcontent-%COMP%] {\n        background: lightgray; }\n      .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n        background: lightgreen; }\n      .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.red[_ngcontent-%COMP%] {\n        background: coral; }\n      .field[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.blue[_ngcontent-%COMP%] {\n        background: lightblue; }\n\n.numberBlock[_ngcontent-%COMP%] {\n  width: 50%; }\n  .numberBlock[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding: 0;\n    margin: 0; }\n    .numberBlock[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      float: left;\n      width: 33%; }\n      .numberBlock[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        font-size: 2em; }'];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRzovUHJvZ3JhbW1pZXJ1bmcvcmFzcGlzcGFjZS9zb2Rva3UvdWkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3Muc2hpbS5uZ3N0eWxlLnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRzovUHJvZ3JhbW1pZXJ1bmcvcmFzcGlzcGFjZS9zb2Rva3UvdWkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OyJ9
//# sourceMappingURL=app.component.scss.shim.ngstyle.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component_ngfactory__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_data_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */









var AppModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* ɵcmf */](__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* AppComponent */]], function (_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ɵmod */]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ɵCodegenComponentFactoryResolver */], [[8, [__WEBPACK_IMPORTED_MODULE_3__app_component_ngfactory__["a" /* AppComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ComponentFactoryResolver */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgModuleRef */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* LOCALE_ID */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ɵm */], [[3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* LOCALE_ID */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* LOCALE_ID */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Compiler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Compiler */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* APP_ID */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ɵf */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ɵk */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ɵl */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DOCUMENT */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Sanitizer */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["e" /* HammerGestureConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["f" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p1_0, p2_0, p2_1) {
            return [new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["g" /* ɵDomEventsPlugin */](p0_0), new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["h" /* ɵKeyEventsPlugin */](p1_0),
                new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["i" /* ɵHammerGesturesPlugin */](p2_0, p2_1)];
        }, [__WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["j" /* EventManager */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["j" /* EventManager */], [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["f" /* EVENT_MANAGER_PLUGINS */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* NgZone */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](135680, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["k" /* ɵDomSharedStylesHost */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["k" /* ɵDomSharedStylesHost */], [__WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DOCUMENT */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["j" /* EventManager */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["k" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* RendererFactory2 */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["l" /* ɵDomRendererFactory2 */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["m" /* ɵSharedStylesHost */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["k" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Testability */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Testability */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["n" /* Meta */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["n" /* Meta */], [__WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["o" /* Title */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["o" /* Title */], [__WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ɵi */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ɵi */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* BrowserXhr */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* BrowserXhr */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* BaseResponseOptions */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* XSRFStrategy */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["e" /* ɵb */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_7__angular_http__["f" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["f" /* XHRBackend */], [__WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* BrowserXhr */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* XSRFStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_7__angular_http__["g" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["h" /* BaseRequestOptions */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_7__angular_http__["i" /* Http */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["j" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_7__angular_http__["f" /* XHRBackend */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["g" /* RequestOptions */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_8__app_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_8__app_data_service__["a" /* DataService */], [__WEBPACK_IMPORTED_MODULE_7__angular_http__["i" /* Http */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* CommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["p" /* ɵa */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* APP_INITIALIZER */], function (p0_0, p0_1) {
            return [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["q" /* ɵc */](p0_0, p0_1)];
        }, [[2, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["r" /* NgProbeToken */]], [2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* NgProbeToken */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* ApplicationInitStatus */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* ApplicationInitStatus */], [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* APP_INITIALIZER */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](131584, __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* ɵe */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* ɵConsole */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* ApplicationInitStatus */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](2048, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ApplicationRef */], null, [__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* ɵe */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ApplicationModule */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ApplicationModule */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ApplicationRef */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["s" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["s" /* BrowserModule */], [[3, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["s" /* BrowserModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ɵba */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_7__angular_http__["k" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["k" /* HttpModule */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */], [])]);
});
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRzovUHJvZ3JhbW1pZXJ1bmcvcmFzcGlzcGFjZS9zb2Rva3UvdWkvc3JjL2FwcC9hcHAubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0c6L1Byb2dyYW1taWVydW5nL3Jhc3Bpc3BhY2Uvc29kb2t1L3VpL3NyYy9hcHAvYXBwLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
//# sourceMappingURL=app.module.ngfactory.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[162]);
//# sourceMappingURL=main.bundle.js.map