import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SharedComponent} from "./shared/shared.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
    imports: [
        SharedComponent,
        RouterOutlet,
        FooterComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular_project';
 ngOnInit() {
 }
}
