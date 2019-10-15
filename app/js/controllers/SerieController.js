System.register(["../views/index", "../models/index", "../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, index_3, SerieController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            SerieController = class SerieController {
                constructor() {
                    this._series = new index_2.Series();
                    this._seriesView = new index_1.SeriesView('#seriesView');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this.currentEditIndex = -1;
                    this._seriesView.update(this._series);
                }
                salvar() {
                    var nota = parseInt(this._inputNota.val());
                    if (nota < 0 || nota > 5) {
                        this._mensagemView.update('Nota inválida');
                        return;
                    }
                    if (this.currentEditIndex != -1) {
                        const serie = this._series.series[this.currentEditIndex];
                        serie.nome = this._inputNome.val();
                        serie.nota = nota;
                        serie.tipo = this._inputTipo.val();
                        this.updateSeries(index_2.Acao.ATUALIZADA);
                        this.currentEditIndex = -1;
                    }
                    else {
                        const serie = new index_2.Serie(this._inputNome.val(), this._inputTipo.val(), nota);
                        this._series.adiciona(serie);
                        this.updateSeries(index_2.Acao.ADICIONADA);
                    }
                }
                updateSeries(acao) {
                    this._seriesView.update(this._series);
                    this._mensagemView.update(`Serie ${acao} com sucesso!`);
                    this.onClear();
                    this._series.clone().forEach((serie, index) => {
                        $(`#editar${index}`).click({ index }, this.onClickEditar.bind(this));
                        $(`#excluir${index}`).click({ index }, this.onClickExcluir.bind(this));
                    });
                }
                onClear() {
                    this._inputNome.val("");
                    this._inputNota.val(1);
                    this._inputTipo.val("Fantasia");
                }
                onClickEditar(ev) {
                    var index = ev.data.index;
                    this.currentEditIndex = index;
                    this._inputNome.val(this._series.clone()[index].nome);
                    this._inputNota.val(this._series.clone()[index].nota);
                    this._inputTipo.val(this._series.clone()[index].tipo);
                }
                onClickExcluir(ev) {
                    var index = ev.data.index;
                    this._series.series.splice(index, 1);
                    this.updateSeries(index_2.Acao.EXCLUIDA);
                }
            };
            __decorate([
                index_3.domInject('#nome')
            ], SerieController.prototype, "_inputNome", void 0);
            __decorate([
                index_3.domInject('#nota')
            ], SerieController.prototype, "_inputNota", void 0);
            __decorate([
                index_3.domInject('#tipo')
            ], SerieController.prototype, "_inputTipo", void 0);
            exports_1("SerieController", SerieController);
        }
    };
});
