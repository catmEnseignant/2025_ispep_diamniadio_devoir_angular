import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { NavBarComponent } from "./pages/appBar/nav-bar/nav-bar.component";
import { FooterComponent } from "./pages/footerPage/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
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
