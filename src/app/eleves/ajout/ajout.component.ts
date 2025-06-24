import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {ElevesService} from "../../servicec/eleves.service";

@Component({
  selector: 'app-ajout',
  imports: [ReactiveFormsModule],
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent {
  eleveForm!:FormGroup

  constructor(private fb: FormBuilder, private route: Router, private se: ElevesService, private router: Router) {
    this.eleveForm = this.fb.group({
      prenom: [''],
      nom: [''],
      adresse: [''],
      tel: [''],
      date: ['']
    })
  }

  addEleve() {
    this.se.addEleves(this.eleveForm.value).subscribe((data) => {
      this.router.navigate(['eleves'])
    })
  }
}
