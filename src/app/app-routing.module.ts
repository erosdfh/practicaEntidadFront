import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Web/home/home.component';
import { TipoDocumentoComponent } from './Web/tipo-documento/tipo-documento.component';
import { TipoContribuyenteComponent } from './Web/tipo-contribuyente/tipo-contribuyente.component';
import { EntidadComponent } from './Web/entidad/entidad.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
   { path: 'documento', component: TipoDocumentoComponent },
   { path: 'contribuyente', component: TipoContribuyenteComponent },
   { path: 'entidad', component: EntidadComponent },
  { path: '**', redirectTo: '/' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64], initialNavigation: 'enabledBlocking' })],
exports: [RouterModule]
})
export class AppRoutingModule { }
