import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { ColorPaletteRoutingModule } from '@app/shared/ui/color-palette/color-palette-routing.module';

import { ColorPaletteComponent } from '@app/shared/ui/color-palette/color-palette.component';

@NgModule({
  imports: [SharedModule, ColorPaletteRoutingModule],
  declarations: [ColorPaletteComponent]
})
export class ColorPaletteModule {}
