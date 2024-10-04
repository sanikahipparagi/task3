import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BillsComponent } from './bills/bills.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { BilldetailsComponent } from './billdetails/billdetails.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewtransactionComponent} from './viewtransaction/viewtransaction.component';
import {ProfileComponent} from './profile/profile.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';

export const routes: Routes = [
  {path:'register',component:RegisterComponent},
  { path: 'login', component: LoginComponent },
  {path: '',component: DefaultLayoutComponent,
    children: [
      {path:'profile',component:ProfileComponent},
      {path: 'dashboard',component:DashboardComponent},
      {path:'bills',component:BillsComponent},
      {path:'viewTransaction',component:ViewtransactionComponent},
      {path:'paymentMethod',component:PaymentMethodComponent},
      { path: 'payment', component: PaymentComponent },
      {path:'paymentHistory',component:PaymentHistoryComponent},
      { path: 'bills/:id', component: BilldetailsComponent }
     ]
  },
   { path: '', redirectTo: '/register',pathMatch:'full' }
];
