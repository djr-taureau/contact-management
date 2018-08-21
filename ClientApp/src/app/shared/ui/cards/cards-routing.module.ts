import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicCardsComponent } from '@app/shared/ui/cards/basic/basic-cards.component';
import { AdvancedCardsComponent } from '@app/shared/ui/cards/advanced/advanced-cards.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        component: BasicCardsComponent
      },
      {
        path: 'advanced',
        component: AdvancedCardsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule {}
