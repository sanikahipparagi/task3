import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user = {
    customerId: 'CUST1234',
    phoneNumber: '+1-234-567-890',
    name: 'John Doe',
    address: '123 Main Street, Springfield, USA',
    email: 'johndoe@example.com',
    meterNo: 'MT123456789',
    wallet: {
      id: 'WALLET1234',
      status: 'Active',
      balance: 150.75
    }
  };

}
