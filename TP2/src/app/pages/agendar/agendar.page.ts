// agendar page ts placeholder
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppLayoutComponent } from 'src/app/components/app-layout/app-layout.component';
@Component({
selector: 'app-agendar',
templateUrl: './agendar.page.html',
styleUrls: ['./agendar.page.scss'],
standalone: true,
imports: [IonicModule, CommonModule, FormsModule, AppLayoutComponent]
})
export class AgendarPage {
note = '';
constructor(private router: Router) {}
confirmar() { this.router.navigate(['/pagamento-metodo']); }
}