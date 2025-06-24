import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ pas styleUrl
})
export class AppComponent implements OnInit{
  title = 'angular_project';

  constructor( private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.httpClient.get("http://localhost:3000/eleves").subscribe(
        (response) =>{
          console.log(response);
        }, (error) => {
          console.log(error);
        }
    )
  }


}
