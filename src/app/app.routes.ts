import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InmueblesComponent } from './components/inmuebles/inmuebles.component';



const routes: Routes = [
    { path: '', component: InmueblesComponent },
    { path: 'home', component: InmueblesComponent },
    { path:'**',pathMatch:'full',redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class APPROUTING {}
