import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';  // <-- importe ton navbar

@Component({
  selector: 'app-root',
  standalone: true,                   // <-- indique que c'est un composant standalone
  imports: [
    RouterOutlet,                    // <-- pour <router-outlet>
    NavbarComponent                  // <-- pour <app-navbar>
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // <-- corrige la faute ici
})
export class AppComponent implements OnInit {
  title = 'angular_project';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get("http://localhost:3000/eleves").subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
