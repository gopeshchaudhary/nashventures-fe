import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FlashMessagesModule } from 'ngx-flash-messages';

import {RouteInfo} from '@app/app.route';
import {AppComponent} from '@app/app.component';

import {HomeComponent} from '@components/home/home.component';
import {GatewayService} from '@services/gateway.service';
import {ListimgComponent} from '@components/listimg/listimg.component';

// INJECTIONS
const MODULES = [
    BrowserModule, FlashMessagesModule, HttpClientModule, RouteInfo
];

const COMPONENTS = [
    AppComponent, HomeComponent
];

const SINGLETONSERVICES = [
    GatewayService
];

@NgModule({
    declarations: [...COMPONENTS, ListimgComponent],
    imports: [...MODULES],
    providers: [...SINGLETONSERVICES],
    bootstrap: [AppComponent]
})

export class AppModule {
}
