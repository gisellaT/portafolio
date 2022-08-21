import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from './page/about/about.component';

const rutas: Routes=[
    {path: 'about', component: AboutComponent},
    {path: '**', pathMatch: 'full',redirectTo: 'about'}
];

@NgModule({
    imports:[
        RouterModule.forRoot(rutas)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}