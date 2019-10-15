import { SeriesView, MensagemView } from '../views/index';
import { Serie, Series, Nota, Acao } from '../models/index';
import { domInject } from '../helpers/decorators/index';

export class SerieController {

    @domInject('#nome')
    private _inputNome: JQuery;

    @domInject('#nota')
    private _inputNota: JQuery;
    
    @domInject('#tipo')
    private _inputTipo: JQuery;
    
    private _series = new Series();
    private _seriesView = new SeriesView('#seriesView');
    private _mensagemView = new MensagemView('#mensagemView');

    private currentEditIndex = -1;

    constructor() {
        this._seriesView.update(this._series);
    }

    salvar() {
        var nota = parseInt(this._inputNota.val()) as Nota;

        if(nota < 0 || nota > 5) {
            this._mensagemView.update('Nota inválida');
            return 
        }

        if(this.currentEditIndex != -1)
        {
            const serie = this._series.series[this.currentEditIndex];
            serie.nome = this._inputNome.val();     
            serie.nota = nota;
            serie.tipo = this._inputTipo.val();
            this.updateSeries(Acao.ATUALIZADA);
            this.currentEditIndex = -1;
        }
        else
        {                    
            const serie = new Serie(
                this._inputNome.val(), 
                this._inputTipo.val(),
                nota
            );
            this._series.adiciona(serie);
            this.updateSeries(Acao.ADICIONADA);
        }               
    }

    updateSeries(acao: string){        
        this._seriesView.update(this._series);
        this._mensagemView.update(`Serie ${acao} com sucesso!`);
        this.onClear();

        this._series.clone().forEach( (serie, index) => {
            $(`#editar${index}`).click({index}, this.onClickEditar.bind(this));       
            $(`#excluir${index}`).click({index}, this.onClickExcluir.bind(this));       
        })
    }

    onClear(){
        this._inputNome.val("");
        this._inputNota.val(1);
        this._inputTipo.val("Fantasia");       
    }

    onClickEditar(ev: JQuery) {
        var index : number = (ev.data as any).index;
        this.currentEditIndex = index;

        this._inputNome.val(this._series.clone()[index].nome);
        this._inputNota.val(this._series.clone()[index].nota);
        this._inputTipo.val(this._series.clone()[index].tipo);       
    }

    onClickExcluir(ev: JQuery) {
        var index : number = (ev.data as any).index;
        this._series.series.splice(index, 1);
        this.updateSeries(Acao.EXCLUIDA);
    }
}
