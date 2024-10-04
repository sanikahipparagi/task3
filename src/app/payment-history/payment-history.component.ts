import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './payment-history.component.html',
  styleUrl: './payment-history.component.css'
})
export class PaymentHistoryComponent {

  transactions = [
    { billId: 'B001', transactionId: 'T001', paymentMethod: 'Credit Card', paymentStatus: 'Paid' },
    { billId: 'B002', transactionId: 'T002', paymentMethod: 'Cash', paymentStatus: 'Unpaid' },
    { billId: 'B003', transactionId: 'T003', paymentMethod: 'Debit Card', paymentStatus: 'Paid' },
    { billId: 'B004', transactionId: 'T004', paymentMethod: 'Wallet', paymentStatus: 'Unpaid' },
    // Add more transactions as necessary
  ];

  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 2; // Adjust the number of items per page

  // Method to filter transactions based on search term
  filteredTransactions() {
    const searchLower = this.searchTerm.toLowerCase();
    return this.transactions
      .filter(transaction => transaction.transactionId.toLowerCase().includes(searchLower))
      .slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  // Method to calculate total pages
  totalPages() {
    return Math.ceil(this.transactions.length / this.itemsPerPage);
  }

  // Method to get an array of page numbers
  pageNumbers() {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }

  // Method to go to a specific page
  goToPage(page: number) {
    this.currentPage = page;
  }

  // Method for the previous page
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Method for the next page
  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

}
