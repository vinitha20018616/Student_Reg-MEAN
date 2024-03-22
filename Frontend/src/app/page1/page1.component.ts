import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']); // Navigate to the home page
  }
}