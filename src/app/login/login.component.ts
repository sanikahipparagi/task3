import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  customerId: string = '';  // Customer ID input
  otp: string[] = ['', '', '', '', '', ''];  // OTP array for 6 digits
  otpRequested: boolean = false;  // Boolean to show/hide OTP input
  otpError: boolean = false;  // Boolean for OTP error message
  otpMessage: string = '';  // Message when OTP is sent

  // Method to request OTP (slide in the OTP input)
  requestOtp() {
    if (this.customerId) {
      this.otpRequested = true;  // Show OTP input
      this.otpMessage = 'OTP has been sent to your registered email.';
      this.otpError = false;
    } else {
      alert('Please enter Customer ID');
    }
  }

  moveToNext(event: any, index: number) {
    const input = event.target;

    if (input.value.length === 1 && index < 5) {
      const nextInput = document.querySelectorAll('.otp-input')[index + 1] as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    } else if (input.value.length === 0 && index > 0) {
      // If backspace and empty, move to the previous input
      const prevInput = document.querySelectorAll('.otp-input')[index - 1] as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  // Method to handle login (OTP validation)
  login() {
    if (this.otp.join('').length === 6) {
      // Proceed with login
      console.log('OTP entered: ', this.otp.join(''));
      alert('Login successful with OTP: ' + this.otp.join(''));
    } else {
      this.otpError = true;  // Show OTP error message
    }
  }
}
