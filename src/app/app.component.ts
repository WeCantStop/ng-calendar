import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public goToAuthorityPage(): void {
    window.open('forbidden');
  }

  public goToErrorPage(): void {
    window.open('error');
  }

  public goToNotFoundPage(): void {
    window.open('404');
  }
}
