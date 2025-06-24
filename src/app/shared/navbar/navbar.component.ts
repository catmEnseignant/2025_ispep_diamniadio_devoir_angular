import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- Pour utiliser routerLink, routerLinkActive
import { CommonModule } from '@angular/common'; // <-- Pour ngIf, ngFor si nécessaire

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // <-- Corrigé ici (styleUrl → styleUrls)
})
export class NavbarComponent {}

