System.register(["./controllers/SerieController"], function (exports_1, context_1) {
    "use strict";
    var SerieController_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (SerieController_1_1) {
                SerieController_1 = SerieController_1_1;
            }
        ],
        execute: function () {
            controller = new SerieController_1.SerieController();
            $('#salvar').click(controller.salvar.bind(controller));
        }
    };
});
