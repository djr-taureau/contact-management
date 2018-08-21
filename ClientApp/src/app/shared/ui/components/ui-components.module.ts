import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIComponentsRoutingModule } from '@app/shared/ui/components/ui-components-routing.module';
import { NouisliderModule } from 'ng2-nouislider';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { JsonpModule } from '@angular/http';
import { QuillModule } from 'ngx-quill';
import { DragulaModule } from 'ng2-dragula';
import { MatchHeightModule } from '@app/shared/directives/match-height.directive';
import { ImageCropperModule } from 'ng2-img-cropper';
import { TagInputModule } from 'ngx-chips';
import { HttpModule } from '@angular/http';
import { UiSwitchModule } from 'ngx-ui-switch';
// Bootstrap Examples
import { ButtonsComponent } from '@app/shared/ui/components/bootstrap/buttons/buttons.component';
import { ListsComponent } from '@app/shared/ui/components/bootstrap/lists/lists.component';
import { AlertsComponent } from '@app/shared/ui/components/bootstrap/alerts/alerts.component';
import { SweetAlertsComponent } from '@app/shared/ui/components/extra/sweet-alerts/sweet-alerts.component';
import { ToastrComponent } from '@app/shared/ui/components/extra/toastr/toastr.component';
import { NouiSliderComponent } from '@app/shared/ui/components/extra/nouislider/nouislider.component';

import { BadgesComponent } from '@app/shared/ui/components/bootstrap/badges/badges.component';
import { DropdownsComponent } from '@app/shared/ui/components/bootstrap/dropdowns/dropdowns.component';
import { InputGroupsComponent } from '@app/shared/ui/components/bootstrap/input-groups/input-groups.component';
import { MediaObjectsComponent } from '@app/shared/ui/components/bootstrap/media-objects/media-objects.component';
import { PaginationComponent } from '@app/shared/ui/components/bootstrap/pagination/pagination.component';
import { ProgressBarsComponent } from '@app/shared/ui/components/bootstrap/progress/progress.component';
import {
  ModalsComponent,
  NgbdModalContent
} from '@app/shared/ui/components/bootstrap/modals/modals.component';
import { CollapseComponent } from '@app/shared/ui/components/bootstrap/collapse/collapse.component';
import { AccordionComponent } from '@app/shared/ui/components/bootstrap/accordion/accordion.component';
import { CarouselComponent } from '@app/shared/ui/components/bootstrap/carousel/carousel.component';
import { DatepickerComponent } from '@app/shared/ui/components/bootstrap/datepicker/datepicker.component';
import { PopoverComponent } from '@app/shared/ui/components/bootstrap/popover/popover.component';
import { RatingComponent } from '@app/shared/ui/components/bootstrap/rating/rating.component';
import { TabsComponent } from '@app/shared/ui/components/bootstrap/tabs/tabs.component';
import { TimepickerComponent } from '@app/shared/ui/components/bootstrap/timepicker/timepicker.component';
import { TooltipComponent } from '@app/shared/ui/components/bootstrap/tooltip/tooltip.component';
import { TypeaheadComponent } from '@app/shared/ui/components/bootstrap/typeahead/typeahead.component';
import { NgButtonsComponent } from '@app/shared/ui/components/bootstrap/ng-buttons/ng-buttons.component';
import { UploadComponent } from '@app/shared/ui/components/extra/upload/upload.component';
import { EditorComponent } from '@app/shared/ui/components/extra/editor/editor.component';
import { DragDropComponent } from '@app/shared/ui/components/extra/drag-drop/drag-drop.component';
import { TourComponent } from '@app/shared/ui/components/extra/tour/tour.component';
import { CropperComponent } from '@app/shared/ui/components/extra/cropper/cropper.component';
import { TagsInputComponent } from '@app/shared/ui/components/extra/tags-input/tags-input.component';
import { SwitchComponent } from '@app/shared/ui/components/extra/switch/switch.component';

@NgModule({
  imports: [
    SharedModule,
    UIComponentsRoutingModule,
    NouisliderModule,
    FileUploadModule,
    JsonpModule,
    NgbModule,
    QuillModule,
    DragulaModule,
    MatchHeightModule,
    ImageCropperModule,
    TagInputModule,
    HttpModule,
    // HttpClientModule,
    UiSwitchModule
  ],
  declarations: [
    ButtonsComponent,
    ListsComponent,
    AlertsComponent,
    SweetAlertsComponent,
    ToastrComponent,
    NouiSliderComponent,
    BadgesComponent,
    DropdownsComponent,
    InputGroupsComponent,
    MediaObjectsComponent,
    PaginationComponent,
    ProgressBarsComponent,
    ModalsComponent,
    CollapseComponent,
    AccordionComponent,
    CarouselComponent,
    DatepickerComponent,
    PopoverComponent,
    RatingComponent,
    TabsComponent,
    TimepickerComponent,
    TooltipComponent,
    TypeaheadComponent,
    NgbdModalContent,
    NgButtonsComponent,
    UploadComponent,
    EditorComponent,
    DragDropComponent,
    TourComponent,
    CropperComponent,
    TagsInputComponent,
    SwitchComponent
  ],
  entryComponents: [NgbdModalContent]
})
export class UIComponentsModule {}
