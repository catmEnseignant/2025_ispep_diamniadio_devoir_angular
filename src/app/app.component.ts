import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EleveComponent } from './eleve/eleve.component';
import { EnseignantsComponent } from './enseignants/enseignants.component'; // remplace MatieresComponent par EnseignantsComponent
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // corrigé styleUrl → styleUrls
})
export class AppComponent {
  title = 'alette-ndongo';
}
