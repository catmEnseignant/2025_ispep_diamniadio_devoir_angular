import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/composants/navbar/navbar.component';
import { FooterComponent } from './shared/composants/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ important pour Angular 17+
  imports: [RouterOutlet, NavbarComponent, FooterComponent], // ✅ important
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular_project';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get("http://localhost:3000/eleves").subscribe({
      next: (response) => console.log(response),
      error: (err) => console.error(err)
    });
  }
}
