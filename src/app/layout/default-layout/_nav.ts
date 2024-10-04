import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Payment History',
    url: '/paymentHistory',  //write the compnet name instead of theme
    iconComponent: { name: 'cil-tags' }
  },
  {
    name: 'Bills',
    url: '/bills',
    iconComponent: { name: 'cil-paperclip' }
  },
  {
    name: 'View Transaction',
    url: '/viewTransaction',
    iconComponent: { name: 'cil-notes' }
  },
  {
    title: true,
    name: 'Credentials'
  },
  {
    name: 'Login',
    url: '/login',  //write the compnet name instead of theme
    iconComponent: { name: 'cil-user-follow' }
  },
  {
    name: 'Register',
    url: '/register',
    iconComponent: { name: 'cil-user-follow' }
  },
  
   
];
