System.register([], function (exports_1, context_1) {
    "use strict";
    var Series;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Series = class Series {
                constructor() {
                    this._series = [];
                }
                adiciona(serie) {
                    this._series.push(serie);
                }
                clone() {
                    return [].concat(this._series);
                }
                get series() {
                    return this._series;
                }
            };
            exports_1("Series", Series);
        }
    };
});
