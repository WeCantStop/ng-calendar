import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';

import { HighlightDirective } from './highlight.directive';


@NgModule({
  imports: [
    BaseModule,
  ],
  declarations: [
    HighlightDirective
  ],
  exports: [
    HighlightDirective
  ],
})
export class SharedDirectivesModule {
}
