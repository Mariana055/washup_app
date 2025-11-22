// notificacoes page ts placeholder
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from 'src/app/components/app-layout/app-layout.component';
@Component({
selector: 'app-notificacoes',
templateUrl: './notificacoes.page.html',
styleUrls: ['./notificacoes.page.scss'],
standalone: true,
imports: [IonicModule, CommonModule, AppLayoutComponent]
})
export class NotificacoesPage {}