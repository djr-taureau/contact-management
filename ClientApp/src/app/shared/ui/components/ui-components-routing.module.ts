import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { ModalsComponent } from '@app/shared/ui/components/bootstrap/modals/modals.component';
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

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons'
        }
      },

      {
        path: 'lists',
        component: ListsComponent,
        data: {
          title: 'Lists'
        }
      },
      {
        path: 'alerts',
        component: AlertsComponent,
        data: {
          title: 'Alerts'
        }
      },
      {
        path: 'sweetalerts',
        component: SweetAlertsComponent,
        data: {
          title: 'Sweet Alerts'
        }
      },
      {
        path: 'toastr',
        component: ToastrComponent,
        data: {
          title: 'Toastr'
        }
      },
      {
        path: 'nouislider',
        component: NouiSliderComponent,
        data: {
          title: 'NoUI Slider'
        }
      },
      {
        path: 'editor',
        component: EditorComponent,
        data: {
          title: 'Quill Editor'
        }
      },
      {
        path: 'upload',
        component: UploadComponent,
        data: {
          title: 'Upload'
        }
      },
      {
        path: 'dragndrop',
        component: DragDropComponent,
        data: {
          title: 'Drag and Drop'
        }
      },
      {
        path: 'tour',
        component: TourComponent,
        data: {
          title: 'Tour'
        }
      },
      {
        path: 'cropper',
        component: CropperComponent,
        data: {
          title: 'Cropper'
        }
      },
      {
        path: 'badges',
        component: BadgesComponent,
        data: {
          title: 'Badges'
        }
      },
      {
        path: 'dropdowns',
        component: DropdownsComponent,
        data: {
          title: 'Dropdowns'
        }
      },
      {
        path: 'inputgroups',
        component: InputGroupsComponent,
        data: {
          title: 'Input Groups'
        }
      },
      {
        path: 'media',
        component: MediaObjectsComponent,
        data: {
          title: 'Media Objects'
        }
      },
      {
        path: 'pagination',
        component: PaginationComponent,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'progress',
        component: ProgressBarsComponent,
        data: {
          title: 'Progress Bars'
        }
      },
      {
        path: 'models',
        component: ModalsComponent,
        data: {
          title: 'Models'
        }
      },
      {
        path: 'collapse',
        component: CollapseComponent,
        data: {
          title: 'Collapse'
        }
      },
      {
        path: 'accordion',
        component: AccordionComponent,
        data: {
          title: 'Accordion'
        }
      },
      {
        path: 'carousel',
        component: CarouselComponent,
        data: {
          title: 'Carousel'
        }
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
        data: {
          title: 'Datepicker'
        }
      },
      {
        path: 'popover',
        component: PopoverComponent,
        data: {
          title: 'Popovers'
        }
      },
      {
        path: 'rating',
        component: RatingComponent,
        data: {
          title: 'Rating'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'timepicker',
        component: TimepickerComponent,
        data: {
          title: 'Timepicker'
        }
      },
      {
        path: 'tooltip',
        component: TooltipComponent,
        data: {
          title: 'Tooltips'
        }
      },
      {
        path: 'typeahead',
        component: TypeaheadComponent,
        data: {
          title: 'Typeahead'
        }
      },
      {
        path: 'ng-buttons',
        component: NgButtonsComponent,
        data: {
          title: 'Ngb-Bootstrap'
        }
      },
      {
        path: 'tags',
        component: TagsInputComponent,
        data: {
          title: 'Tags'
        }
      },
      {
        path: 'switch',
        component: SwitchComponent,
        data: {
          title: 'Switch'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIComponentsRoutingModule {}
