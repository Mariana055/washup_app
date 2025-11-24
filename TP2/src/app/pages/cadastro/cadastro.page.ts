// recuperar page ts placeholder
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppLayoutComponent } from 'src/app/components/app-layout/app-layout.component';

@Component({
selector: 'app-cadastro',
templateUrl: './cadastro.page.html',
styleUrls: ['./cadastro.page.scss'],
standalone: true,
imports: [IonicModule, CommonModule, FormsModule, AppLayoutComponent]
})
export class CadastroPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = ''; // 👈 você deve usar isso no HTML
}
