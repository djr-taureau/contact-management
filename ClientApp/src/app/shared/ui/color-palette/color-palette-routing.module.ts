import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorPaletteComponent } from '@app/shared/ui/color-palette/color-palette.component';

const routes: Routes = [
  {
    path: '',
    component: ColorPaletteComponent,
    data: {
      title: 'Color Palette'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorPaletteRoutingModule { }
