import {Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '@components/home/home.component';
import { ListimgComponent } from '@components/listimg/listimg.component';

const routeInfo: Routes = [
    { path: '', component: HomeComponent },
    { path: 'images/:id', component : ListimgComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const RouteInfo = RouterModule.forRoot(routeInfo);
