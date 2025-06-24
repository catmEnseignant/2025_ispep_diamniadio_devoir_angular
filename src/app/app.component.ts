import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
    imports: [
        NavbarComponent,
        RouterOutlet,
        FooterComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
