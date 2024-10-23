import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuRoutes: string [] = ['dashboard', 'heroes']

}
