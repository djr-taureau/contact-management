import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Full_ROUTES } from '@app/shared/routes/full-layout.routes';
import { FullLayoutComponent } from '@app/shared/layouts/full/full-layout.component';
import { ContentLayoutComponent } from '@app/shared/layouts/content/content-layout.component';
import { CONTENT_ROUTES } from '@app/shared/routes/content-layout.routes';


const appRoutes: Routes = [

    { path: '',  redirectTo: 'dashboard/dashboard1', pathMatch: 'full'},
    { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES }, // Dashboard 1 is defined here
    { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },
    { path: 'contacts', loadChildren: '@app/contact/contact.module#ContactModule'},
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
