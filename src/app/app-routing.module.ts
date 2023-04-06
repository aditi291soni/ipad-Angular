import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpadComponent } from './ipad/ipad.component';
import { NewipadComponent } from './newipad/newipad.component';
import { ComponentComponent } from './component/component.component';

const routes: Routes = [
  // { path:'ipad',component:IpadComponent},
  {path:'ipad',component:ComponentComponent},
  {
    path:'newipad',component:NewipadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ComponentComponent,NewipadComponent]