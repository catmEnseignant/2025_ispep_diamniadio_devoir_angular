import {Component, OnInit} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListEleveComponent } from './eleves/list-eleve/list-eleve.component';
import { ListEnseignantComponent } from './enseignants/list-enseignant/list-enseignant.component';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent,RouterOutlet,FooterComponent,ListEleveComponent,ListEnseignantComponent,CommonModule],
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
