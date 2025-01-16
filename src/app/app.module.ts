import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Componentes/header/header.component';
import { SideNavComponent } from './Componentes/side-nav/side-nav.component';
import { HomeComponent } from './Web/home/home.component';
import { TipoDocumentoComponent } from './Web/tipo-documento/tipo-documento.component';
import { TipoContribuyenteComponent } from './Web/tipo-contribuyente/tipo-contribuyente.component';
import { EntidadComponent } from './Web/entidad/entidad.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginComponent } from './login/login.component';
import { TokenHandlerInterceptor } from './interceptors/token-handler.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    TipoDocumentoComponent,
    TipoContribuyenteComponent,
    EntidadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgSelectModule
  ],
  
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenHandlerInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
