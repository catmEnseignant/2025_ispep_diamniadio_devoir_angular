import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SharedComponent} from "./shared/shared.component";

@Component({
  selector: 'app-root',
    imports: [
        SharedComponent,
        RouterOutlet
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular_project';
 ngOnInit() {
 }
}
