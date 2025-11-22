// detalhe-maquina page ts placeholder
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppLayoutComponent } from 'src/app/components/app-layout/app-layout.component';
@Component({
selector: 'app-detalhe-maquina',
templateUrl: './detalhe-maquina.page.html',
styleUrls: ['./detalhe-maquina.page.scss'],
standalone: true,
imports: [IonicModule, CommonModule, AppLayoutComponent]
})
export class DetalheMaquinaPage {
machine: any = null;
constructor(private router: Router) {
const s = history.state as any; this.machine = s?.machine || { name:
'Lavadora 10Kg', estado: 'Livre', preco: '3.50€' };
}
agendar() { this.router.navigate(['/agendar']); }
}