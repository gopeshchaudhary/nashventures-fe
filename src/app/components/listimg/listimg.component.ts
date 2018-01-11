import {Component, OnInit} from '@angular/core';
import {GatewayService} from '@app/services/gateway.service';
import {ActivatedRoute} from '@angular/router';
import {FlashMessagesService} from 'ngx-flash-messages';

@Component({
    selector: 'app-listimg',
    templateUrl: './listimg.component.html',
    styleUrls: ['./listimg.component.css']
})
export class ListimgComponent implements OnInit {
    private images: Array<string>;

    constructor(private  route: ActivatedRoute, private _flash: FlashMessagesService, private _gateway: GatewayService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.showImg(params['id']);
        });
    }

    showImg(searchid) {
        this._gateway.loadImages(searchid).subscribe((res: any) => {
            if (res.data) {
                this.images = res.data;
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
