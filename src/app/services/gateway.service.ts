import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class GatewayService {
    private searchUrl: string;
    private listUrl: string;
    private getUrl: string;

    constructor(private _http: HttpClient) {
        this.searchUrl = 'http://localhost:5000/search';
        this.listUrl = 'http://localhost:5000/search/list';
        this.getUrl = 'http://localhost:5000/search/images';
    }

    doSearch(q) {
        return this._http.get(this.searchUrl, {
            params: {
                q
            }
        });
    }

    listImages() {
        return this._http.get(this.listUrl);
    }

    loadImages(id) {
        return this._http.get(this.getUrl, {
            params: {
                id
            }
        });
    }
}
