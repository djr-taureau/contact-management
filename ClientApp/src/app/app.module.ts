// Third Party Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store/src/models';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
// import { storeLogger } from 'ngrx-store-logger';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DragulaService } from 'ng2-dragula';
import { NgxMaskModule } from 'ngx-mask';
import { form, NgrxFormModule } from 'ngrx-form';
import {SuiModule} from 'ng2-semantic-ui';
// Custom Defined Modules
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { environment } from '@env/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Custom Defined Components
import { FullLayoutComponent } from '@app/shared/layouts/full/full-layout.component';
import { ContentLayoutComponent } from '@app/shared/layouts/content/content-layout.component';
import { SharedModule } from '@app/shared/shared.module';
// import { FullPagesModule } from '@app/shared/pages/full-pages/full-pages.module';
import { AgmCoreModule } from '@agm/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { reducers } from '@app/reducers';
// import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    ContentLayoutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgbModule.forRoot(),
    StoreModule.forRoot(reducers),
    NgrxFormModule,
    SuiModule,
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument({
      name: 'APM DevTools',
      maxAge: 25,
    }) : [],
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
    }),
    NgxMaskModule.forRoot(),
    SharedModule,
    AppRoutingModule,
  ],
  providers: [DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
