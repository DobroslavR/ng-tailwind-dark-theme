import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  get isDarkMode() {
    return this.document.body.classList.contains('dark');
  }

  toggleTheme() {
    if (this.isDarkMode) {
      this.document.body.classList.remove('dark');
    } else {
      this.document.body.classList.add('dark');
    }
  }
}
