import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';

export const routes: Routes = [
    {path: '', component: SidenavComponent, children: [
        { path: '', component: HomeComponent}
    ]}
];
