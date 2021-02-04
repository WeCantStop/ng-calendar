import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';

import { AuthorityPageComponent } from './authority/authority.page';
import { ErrorPageComponent } from './error/error.page';
import { NotFoundPageComponent } from './not-found/not-found.page';


@NgModule({
  imports: [
    BaseModule,
  ],
  declarations: [
    ErrorPageComponent,
    AuthorityPageComponent,
    NotFoundPageComponent
  ],
  exports: [
    ErrorPageComponent,
    AuthorityPageComponent,
    NotFoundPageComponent
  ],
})
export class SharedPagesModule {
}
