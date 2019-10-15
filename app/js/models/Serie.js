System.register([], function (exports_1, context_1) {
    "use strict";
    var Serie;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Serie = class Serie {
                constructor(nome, tipo, nota) {
                    this.nome = nome;
                    this.tipo = tipo;
                    this.nota = nota;
                }
            };
            exports_1("Serie", Serie);
        }
    };
});
