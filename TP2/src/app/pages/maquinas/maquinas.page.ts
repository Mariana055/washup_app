// maquinas page ts placeholder
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppLayoutComponent } from 'src/app/components/app-layout/app-layout.component';
@Component({
selector: 'app-maquinas',
templateUrl: './maquinas.page.html',
styleUrls: ['./maquinas.page.scss'],
standalone: true,
imports: [IonicModule, CommonModule, FormsModule, AppLayoutComponent]
})
export class MaquinasPage {
selected: string | null = null;
constructor(private router: Router) {}
abrirDetalhes() {
if (!this.selected) { alert('Selecione uma máquina'); return; }
this.router.navigate(['/detalhe-maquina'], { state: { machine:
this.selected }});
}
}