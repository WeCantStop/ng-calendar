import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @Input() public loadingInfo: string = '正在加载数据中……';
}
