import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SessionComponent } from './pages/session/session.component';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { LoginComponent } from './pages/auth/templates/login/login.component';
import { SignupComponent } from './pages/auth/templates/signup/signup.component';
import { InputComponent } from './components/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './components/select/select.component';
import { TaxesComponent } from './pages/session/views/taxes/taxes.component';
import { NewsComponent } from './pages/session/views/news/news.component';
import { RegulationComponent } from './pages/session/views/regulation/regulation.component';
import { BuildingsComponent } from './pages/buildings/buildings.component';
import { BilletComponent } from './pages/billet/billet.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BuildingsListComponent } from './pages/buildings/templates/buildings-list/buildings-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddBuildingComponent } from './modals/add-building/add-building.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteBuildingComponent } from './modals/delete-building/delete-building.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    SessionComponent,
    ButtonComponent,
    IconComponent,
    LoginComponent,
    SignupComponent,
    InputComponent,
    SelectComponent,
    TaxesComponent,
    NewsComponent,
    RegulationComponent,
    BuildingsComponent,
    BilletComponent,
    NotFoundComponent,
    BuildingsListComponent,
    AddBuildingComponent,
    DeleteBuildingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
