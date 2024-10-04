import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewtransaction',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './viewtransaction.component.html',
  styleUrl: './viewtransaction.component.css'
})
export class ViewtransactionComponent {
  transactions = [
    { transactionId: 'T12345', billId: 'B98765', status: 'Paid', method: 'Credit Card' },
    { transactionId: 'T12346', billId: 'B98766', status: 'Unpaid', method: 'Wallet' },
    { transactionId: 'T12347', billId: 'B98767', status: 'Paid', method: 'Cash' },
    { transactionId: 'T12348', billId: 'B98768', status: 'Unpaid', method: 'Debit Card' },
    { transactionId: 'T12349', billId: 'B98769', status: 'Paid', method: 'Credit Card' },
    { transactionId: 'T12350', billId: 'B98770', status: 'Unpaid', method: 'Cash' },
    // Add more transactions as needed
  ];

  currentPage: number = 1;
  itemsPerPage: number = 3; // Number of items to display per page
  totalPages: number = Math.ceil(this.transactions.length / this.itemsPerPage);

  get paginatedTransactions() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.transactions.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  selectPage(page: number) {
    this.currentPage = page;
  }
}
