import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maquinas',
  templateUrl: './maquinas.page.html',
  styleUrls: ['./maquinas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class MaquinasPage {
  constructor() {}
}

