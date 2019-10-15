System.register([], function (exports_1, context_1) {
    "use strict";
    var Tipo, Acao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (Tipo) {
                Tipo[Tipo["Fantasia"] = 0] = "Fantasia";
                Tipo[Tipo["Drama"] = 1] = "Drama";
                Tipo[Tipo["Aventura"] = 2] = "Aventura";
                Tipo[Tipo["Policial"] = 3] = "Policial";
                Tipo[Tipo["Comedia"] = 4] = "Comedia";
                Tipo[Tipo["Crime"] = 5] = "Crime";
                Tipo[Tipo["Terror"] = 6] = "Terror";
            })(Tipo || (Tipo = {}));
            exports_1("Tipo", Tipo);
            (function (Acao) {
                Acao["EXCLUIDA"] = "exclu\u00EDda";
                Acao["ADICIONADA"] = "adicionada";
                Acao["ATUALIZADA"] = "atualizada";
            })(Acao || (Acao = {}));
            exports_1("Acao", Acao);
        }
    };
});
