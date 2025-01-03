import { Routes } from '@angular/router';
import { LoginpageComponent } from './paginas/loginpage/loginpage.component';
import { MasterpageComponent } from './paginas/masterpage/masterpage.component';
import { HomeComponent } from './paginas/home/home.component';
import { CustomerpageComponent } from './paginas/customerpage/customerpage.component';
import { CatalogpageComponent } from './paginas/catalogpage/catalogpage.component';
import { BudgetpageComponent } from './paginas/budgetpage/budgetpage.component';
import { LogoffpageComponent } from './paginas/logoffpage/logoffpage.component';
import { ErrorpageComponent } from './paginas/errorpage/errorpage.component';
import { GrupoproductpageComponent } from './paginas/grupoproductpage/grupoproductpage.component';

export const routes: Routes = [
  { path: 'login', component: LoginpageComponent },
  {
    path: '',
    component: MasterpageComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'customers', component: CustomerpageComponent },
      { path: 'catalog', component: CatalogpageComponent },
      { path: 'grupoproduct', component: GrupoproductpageComponent },
      { path: 'budgets', component: BudgetpageComponent },
      { path: 'logoff', component: LogoffpageComponent },
    ],
  },
  { path: '**', component: ErrorpageComponent },
];
