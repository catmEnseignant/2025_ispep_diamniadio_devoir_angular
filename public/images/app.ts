import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarNavigation } from "./shared/navbar/navbar-navigation/navbar-navigation";
import { Footer } from './footerPage/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarNavigation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gestion-scolaire';
}
