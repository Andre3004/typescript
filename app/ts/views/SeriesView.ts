import { View } from './View';
import { Series } from '../models/Series';

export class SeriesView extends View<Series> {

    template(model: Series): string {

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
                ${model.clone().map((serie, index) => 
                    `
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
                    `   
                ).join('')}            
            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
    }


    renderStar(nota: number): string {

        var stars : string[] = [];

        for (let i = 0; i < nota; i++) {
            
            stars.push(` <img src="../assets/img/star.png" style="width: 20px;"/>`)
        }

        return stars.join(" ")
    }
}