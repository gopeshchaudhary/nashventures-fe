import {Component, OnInit} from '@angular/core';
import {GatewayService} from '@app/services/gateway.service';
import {FlashMessagesService} from 'ngx-flash-messages';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public historyObj: any = {};
    public imgHistory: Array<string>;

    constructor(private _flash: FlashMessagesService, private _gateway: GatewayService) {
    }

    ngOnInit() {
        this.listImages();
    }

    search(searchstr) {
        if (searchstr.trim() !== '') {
            this._gateway.doSearch(searchstr).subscribe((res: any) => {
                if (res.msg) {
                    this._flash.show(res.msg, {
                        classes: ['alert', 'alert-success'],
                        timeout: 2000
                    });
                }
                console.log(res);
            }, (error) => {
                this._flash.show('Failed To Search Try Again', {
                    classes: ['alert', 'alert-danger'],
                    timeout: 2000
                });
                console.error(error);
            });
        }
    }

    listImages() {
        this._gateway.listImages().subscribe((res: any) => {
            if (res.data && res.data.length) {
                this.imgHistory = res.data.map((history) => {
                    const key = Object.keys(history)[0];
                    this.historyObj[key] = history[key];
                    return key;
                });
            }
        }, (error) => {
            this._flash.show('Failed To Get History', {
                classes: ['alert', 'alert-danger'],
                timeout: 2000
            });
            console.error(error);
        });
    }


}
