import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page4InscriptionPage } from './page4-inscription.page';

const routes: Routes = [
  {
    path: '',
    component: Page4InscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page4InscriptionPageRoutingModule {}
