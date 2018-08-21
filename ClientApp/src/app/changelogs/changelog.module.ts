import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ChangeLogRoutingModule } from "@app/changelogs/changelog-routing.module";
import { MatchHeightModule } from "@app/shared/directives/match-height.directive";

import { ChangeLogComponent } from "@app/changelogs/changelog.component";



@NgModule({
    imports: [
        CommonModule,
        ChangeLogRoutingModule,
        MatchHeightModule
    ],
    exports: [],
    declarations: [ ChangeLogComponent ],
    providers: [],
})
export class ChangeLogModule { }
