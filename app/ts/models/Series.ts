import { Serie } from './Serie';

export class Series {

    private _series: Serie[] = [];

    adiciona(serie: Serie): void {

        this._series.push(serie);
    }

    clone(): Serie[] {

        return ([] as Serie[]).concat(this._series);
    }

    get series(): Serie[] {
        return this._series;
    }
}
