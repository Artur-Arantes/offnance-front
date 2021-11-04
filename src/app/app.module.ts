import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { loginInterceptorProviders } from './helpers/login.interceptor';
import { unauthorizedInterceptorProviders } from './helpers/unauthorized.interceptor';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FrasesPipe } from './services/frases.pipe';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, FrasesPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    authInterceptorProviders,
    loginInterceptorProviders,
    unauthorizedInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
