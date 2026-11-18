import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeDepartamentosComponent } from './components/home-departamentos-component/home-departamentos-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceDepartamentos } from './services/service.departamentos';
import { CreateDepartamentoComponent } from './components/create-departamento-component/create-departamento-component';
import { DeleteFormComponent } from './components/delete-form-component/delete-form-component';
import { DeleteRoutingComponent } from './components/delete-routing-component/delete-routing-component';

@NgModule({
  declarations: [
    App,
    HomeDepartamentosComponent,
    MenuComponent,
    CreateDepartamentoComponent,
    DeleteFormComponent,
    DeleteRoutingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ServiceDepartamentos, provideHttpClient(), provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
