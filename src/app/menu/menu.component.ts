import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgForOf } from '@angular/common';
import { FirstLetterUppercasePipe } from '../pipes/first-letter-uppercase.pipe';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    RouterLinkActive,
    FirstLetterUppercasePipe
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuRoutes: string [] = ['dashboard', 'heroes']

}
