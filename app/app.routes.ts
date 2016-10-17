
import { ModuleWithProviders }  from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { RetrieveDetailsComponent }  from './app.retrievedetails.component';
import { CheckInFormComponent }  from './app.checkinform.component';

export const routes: Routes = [
  { path: '', component: CheckInFormComponent },
  { path: 'retrievedetails', component: RetrieveDetailsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);