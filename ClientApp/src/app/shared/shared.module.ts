import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { PortalModule } from '@angular/cdk/portal';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng2-select/ng2-select';
import { TranslateModule } from '@ngx-translate/core';
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
import { NgxMaskModule } from 'ngx-mask';
import { NgxPhoneMaskModule } from 'ngx-phone-mask';
import { FooterComponent } from '@app/shared/footer/footer.component';
import { NavbarComponent } from '@app/shared/navbar/navbar.component';
import { SidebarComponent } from '@app/shared/sidebar/sidebar.component';
import { CustomizerComponent } from '@app/shared/customizer/customizer.component';
import { NotificationSidebarComponent } from '@app/shared/notification-sidebar/notification-sidebar.component';
import { ToggleFullscreenDirective } from '@app/shared/directives/toggle-fullscreen.directive';
import { StateSelectComponent } from '@app/shared/components/state-select/state-select';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    NouisliderModule,
    FileUploadModule,
    QuillModule,
    JsonpModule,
    DragulaModule,
    MatchHeightModule,
    ImageCropperModule,
    TagInputModule,
    HttpModule,
    UiSwitchModule,
    SelectModule,
    NgxMaskModule,
    NgxPhoneMaskModule,
    PortalModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSliderModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatDatepickerModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CustomizerComponent,
    NotificationSidebarComponent,
    ToggleFullscreenDirective,
    StateSelectComponent
  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    NouisliderModule,
    JsonpModule,
    FileUploadModule,
    QuillModule,
    DragulaModule,
    MatchHeightModule,
    ImageCropperModule,
    TagInputModule,
    HttpModule,
    UiSwitchModule,
    SelectModule,
    NgxMaskModule,
    NgxPhoneMaskModule,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CustomizerComponent,
    NotificationSidebarComponent,
    ToggleFullscreenDirective,
    PortalModule,
    CustomizerComponent,
    NotificationSidebarComponent,
    ToggleFullscreenDirective,
    StateSelectComponent,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSliderModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatDatepickerModule
  ]
})
export class SharedModule {}
