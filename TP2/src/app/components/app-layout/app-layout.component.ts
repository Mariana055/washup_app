import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule], // <-- Router removido; RouterModule adicionado
})
export class AppLayoutComponent {
  constructor(private router: Router) {}

  // método utilitário para usar no (click)
  navigate(path: string) {
    this.router.navigate([path]);
  }
}
