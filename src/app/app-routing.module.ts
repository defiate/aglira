import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BorrowComponent } from './pages/borrow/borrow.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'borrow', component: BorrowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
