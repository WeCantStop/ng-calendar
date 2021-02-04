import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseModule } from '@shared';

import { GuidanceComponent } from './guidance.component';

const routes: Routes = [{ path: '', component: GuidanceComponent }];
@NgModule({
  imports: [
    BaseModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    GuidanceComponent
  ],
  exports: [
    GuidanceComponent
  ]
})
export class GuidanceModule {
}
