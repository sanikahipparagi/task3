import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  standalone: true,
  imports: [RouterLink,RouterOutlet]
})
export class DashboardComponent {

}
