import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LAZY_ROUTES_REGISTRY } from './features/lazy-routes.registry';
import { SharedPagesModule, AuthorityPageComponent, ErrorPageComponent, NotFoundPageComponent } from '@shared';

const routes: Routes = [
  ...LAZY_ROUTES_REGISTRY,
  { path: 'forbidden', component: AuthorityPageComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '404', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    SharedPagesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
