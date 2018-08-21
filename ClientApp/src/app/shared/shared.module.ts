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
    StateSelectComponent
  ]
})
export class SharedModule {}
