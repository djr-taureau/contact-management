import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { ContentPagesRoutingModule } from '@app/shared/pages/content-pages/content-pages-routing.module';

import { ComingSoonPageComponent } from '@app/shared/pages/content-pages/coming-soon/coming-soon-page.component';
import { ErrorPageComponent } from '@app/shared/pages/content-pages/error/error-page.component';
import { ForgotPasswordPageComponent } from '@app/shared/pages/content-pages/forgot-password/forgot-password-page.component';
import { LockScreenPageComponent } from '@app/shared/pages/content-pages/lock-screen/lock-screen-page.component';
import { LoginPageComponent } from '@app/shared/pages/content-pages/login/login-page.component';
import { MaintenancePageComponent } from '@app/shared/pages/content-pages/maintenance/maintenance-page.component';
import { RegisterPageComponent } from '@app/shared/pages/content-pages/register/register-page.component';

@NgModule({
  imports: [SharedModule, ContentPagesRoutingModule],
  declarations: [
    ComingSoonPageComponent,
    ErrorPageComponent,
    ForgotPasswordPageComponent,
    LockScreenPageComponent,
    LoginPageComponent,
    MaintenancePageComponent,
    RegisterPageComponent
  ]
})
export class ContentPagesModule {}
