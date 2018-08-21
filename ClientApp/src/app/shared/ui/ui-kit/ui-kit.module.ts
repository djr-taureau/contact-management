import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { UIKitRoutingModule } from '@app/shared/ui/ui-kit/ui-kit-routing.module';
import { MatchHeightModule } from '@app/shared/directives/match-height.directive';

import { GridsComponent } from '@app/shared/ui/ui-kit/grids/grids.component';
import { TypographyComponent } from '@app/shared/ui/ui-kit/typography/typography.component';
import { HelperClassesComponent } from '@app/shared/ui/ui-kit/helper-classes/helper-classes.component';
import { SyntaxHighlighterComponent } from '@app/shared/ui/ui-kit/syntax-highlighter/syntax-highlighter.component';
import { TextUtilitiesComponent } from '@app/shared/ui/ui-kit/text-utilities/text-utilities.component';
import { FeatherComponent } from '@app/shared/ui/ui-kit/icons/feather/feather.component';
import { FontAwesomeComponent } from '@app/shared/ui/ui-kit/icons/font-awesome/font-awesome.component';
import { SimpleLineComponent } from '@app/shared/ui/ui-kit/icons/simple-line/simple-line.component';
@NgModule({
  imports: [
    SharedModule,
    UIKitRoutingModule,
    MatchHeightModule
  ],
  declarations: [
    GridsComponent,
    TypographyComponent,
    HelperClassesComponent,
    SyntaxHighlighterComponent,
    TextUtilitiesComponent,
    FeatherComponent,
    FontAwesomeComponent,
    SimpleLineComponent
  ]
})
export class UIKitModule {}
