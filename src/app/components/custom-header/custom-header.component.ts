import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.sass']
})
export class CustomHeaderComponent {
  isMenuCollapsed = true;
}
