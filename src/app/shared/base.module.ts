/*
 * 包含基本的angular，ui模块
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from '@synyi/ng-zorro-antd';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  imports: [],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgZorroAntdModule
  ],
})
export class BaseModule {
}
