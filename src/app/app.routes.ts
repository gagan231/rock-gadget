import { Routes } from '@angular/router';
import { HeaderComponent } from '../app/header/header.component';

export const routes: Routes = [
    {path: '', redirectTo: '/header', pathMatch: 'full'},
    { path: 'header', component: HeaderComponent}
];
