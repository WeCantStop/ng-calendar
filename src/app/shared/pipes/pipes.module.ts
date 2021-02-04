import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';

import { ExponentialStrengthPipe } from './exponential-strength.pipe';


@NgModule({
  imports: [
    BaseModule,
  ],
  declarations: [
    ExponentialStrengthPipe
  ],
  exports: [
    ExponentialStrengthPipe
  ],
})
export class SharedPipesModule {
}
