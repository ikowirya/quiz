import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css',
})
export class CatsComponent {
  cats = ['Bella', 'Kitty', 'Lily', ' Lucy', 'Leo','Milo','Jack'];
  data:string = "cats"
}