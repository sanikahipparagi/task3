import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  CustomerData = {
    firstName: '',
    lastName: '',
    email: '',
    phNo: '',
    address: ''
  };

  registrationSuccess = false;
  registrationError = '';

  constructor(private router: Router) {}

  register() {
    if (this.isFormValid()) {
      // Simulate registration API call here
      this.registrationSuccess = true;

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    } else {
      this.registrationError = 'All the fields are required.';
    }
  }

  isFormValid() {
    return this.CustomerData.firstName && this.CustomerData.lastName &&
           this.CustomerData.email && this.CustomerData.phNo && this.CustomerData.address;
  }

}
