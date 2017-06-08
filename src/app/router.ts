import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";



export const routes: Routes = [

    // {
    //     path: '',
    //     redirectTo: 'users',
    //     pathMatch: 'full'
    // },
    // {
    //     path: '',
    //     component: HomeComponent,
    //     canActivate: [AuthGuardService],
    //     resolve: {
    //         user: AuthGuardService
    //     },
    //     children: [
    //         {
    //             path: 'projects',
    //             component: ProjectsComponent
    //         },
    //         {
    //             path: 'users',
    //             component: UsersComponent
    //         },
    //         {
    //             path: 'project/:id',
    //             component: ProjectComponent,
    //             children:[
    //                 {
    //                     path: '',
    //                     redirectTo: 'basic',
    //                     pathMatch: 'full'
    //                 },
    //                 {
    //                     path: 'basic',
    //                     component: BasicProject
    //                 },
    //                 {
    //                     path: 'source',
    //                     component: SourceProject
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     path: 'login',
    //     component:  LoginComponent,
    //     canActivate: [LoggedGuardService]
    // },
    // {
    //     path:"**",
    //     redirectTo:'/users'
    // }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);