import { NgModule } from '@angular/core';
import { BaseModule } from '../../base.module';

import { LoadingComponent } from './loading.component';

@NgModule({
  imports: [
    BaseModule,
  ],
  declarations: [
    LoadingComponent
  ],
  exports: [
    LoadingComponent
  ],
})
export class CMPLoadingModule {
}
