// pagamento page ts placeholder
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppLayoutComponent } from 'src/app/components/app-layout/app-layout.component';
@Component({
selector: 'app-pagamento',
templateUrl: './pagamento.page.html',
styleUrls: ['./pagamento.page.scss'],
standalone: true,
imports: [IonicModule, CommonModule, FormsModule, AppLayoutComponent]
})
export class PagamentoPage {
method = '';
card = '';
expiry = '';
cvc = '';
constructor(private router: Router) { const s = history.state as any;
this.method = s?.method || 'cartao'; }
pagar(){ this.router.navigate(['/pagamento-sucesso']); }
}