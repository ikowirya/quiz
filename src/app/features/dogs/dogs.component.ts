import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.css'
})
export class DogsComponent {
  dogs = ['Luna', 'Bombom', 'Zilong', ' Oddete', 'Martis','Dyroth','Molly'];
}
