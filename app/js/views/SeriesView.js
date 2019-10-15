System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, SeriesView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            SeriesView = class SeriesView extends View_1.View {
                template(model) {
                    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>TIPO</th>
                    <th>NOTA</th>
                    <th>AÇÕES</th>
                </tr>
            </thead>

            <tbody>
                ${model.clone().map((serie, index) => `
                        <tr>
                            <td>${serie.nome}</td>
                            <td>${serie.tipo}</td>
                            <td>
                                ${this.renderStar(serie.nota)}
                            </td>
                            <td>
                                <button id="editar${index}" class="btn btn-info" >EDITAR</button>
                                <button id="excluir${index}" class="btn btn-danger" >EXCLUIR</button>
                            </td>
                        <tr>
                    `).join('')}            
            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
                }
                renderStar(nota) {
                    var stars = [];
                    for (let i = 0; i < nota; i++) {
                        stars.push(` <img src="../assets/img/star.png" style="width: 20px;"/>`);
                    }
                    return stars.join(" ");
                }
            };
            exports_1("SeriesView", SeriesView);
        }
    };
});
