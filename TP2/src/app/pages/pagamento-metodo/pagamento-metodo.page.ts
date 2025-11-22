// pagamento-metodo page ts placeholder
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppLayoutComponent } from 'src/app/components/app-layout/app-layout.component';
@Component({
selector: 'app-pagamento-metodo',
templateUrl: './pagamento-metodo.page.html',
styleUrls: ['./pagamento-metodo.page.scss'],
standalone: true,
imports: [IonicModule, CommonModule, AppLayoutComponent]
})
export class PagamentoMetodoPage {
method = '';
constructor(private router: Router) {}
selecionar(m: string) { this.method = m; }
next() { if (!this.method) { alert('Escolha um método'); return; }
this.router.navigate(['/pagamento'], { state: { method: this.method }}); }
}