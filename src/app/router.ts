import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {SchedulePageComponent} from "./components/schedule-page/schedule-page.component";



export const routes: Routes = [

    {
        path: '',
        redirectTo: 'schedule',
        pathMatch: 'full'
    },
    {
        path: 'schedule',
        component: SchedulePageComponent
    },
    {
        path:"**",
        redirectTo:'/schedule'
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);