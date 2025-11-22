import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppLayoutComponent } from 'src/app/components/app-layout/app-layout.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AppLayoutComponent]
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private router: Router) {}

  doLogin() {
    // login estático: redireciona para mapa
    this.router.navigate(['/mapa']);
  }

  goToRecuperar() {
    this.router.navigate(['/recuperar']);
  }

  goToRegistro() {
    this.router.navigate(['/registro']);
  }
}

