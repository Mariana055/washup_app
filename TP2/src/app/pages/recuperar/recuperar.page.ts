// recuperar page ts placeholder
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppLayoutComponent } from 'src/app/components/app-layout/app-layout.component';

@Component({
selector: 'app-recuperar',
templateUrl: './recuperar.page.html',
styleUrls: ['./recuperar.page.scss'],
standalone: true,
imports: [IonicModule, CommonModule, FormsModule, AppLayoutComponent]
})
export class RecuperarPage {
email = '';
enviar() {
alert('Email de recuperação enviado (simulado)');
}
}
5