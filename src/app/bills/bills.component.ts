import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent {

  bills = [
    { billId: 'B001', month: 'January', dueDate: '2024-01-15', amount: 120.00, unitConsumption: 350, paymentStatus: 'Paid' },
    { billId: 'B002', month: 'February', dueDate: '2024-02-15', amount: 150.00, unitConsumption: 400, paymentStatus: 'Unpaid' },
    // Add more bills as necessary
  ];
  
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  get totalPages() {
    return Math.ceil(this.filteredBills().length / this.itemsPerPage);
  }

  filteredBills() {
    const searchLower = this.searchTerm.toLowerCase();
    return this.bills.filter(bill => bill.billId.toLowerCase().includes(searchLower))
                     .slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  pageNumbers() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

}
