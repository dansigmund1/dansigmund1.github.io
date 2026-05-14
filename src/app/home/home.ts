import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  activeTab: string = 'bio';

  switchTab(id: string): void {
    this.activeTab = id;
  }
}