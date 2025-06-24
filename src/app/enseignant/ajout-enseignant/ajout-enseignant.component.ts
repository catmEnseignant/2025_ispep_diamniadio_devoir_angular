import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {ElevesService} from "../../servicec/eleves.service";
import {EnseignantService} from "../../servicec/enseignant.service";

@Component({
  selector: 'app-ajout-enseignant',
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './ajout-enseignant.component.html',
  styleUrl: './ajout-enseignant.component.css'
})
export class AjoutEnseignantComponent {
  enForm: FormGroup
  constructor(private fb:FormBuilder,private route:Router,private se:EnseignantService,private router:Router) {
    this.enForm = this.fb.group({
      prenom:[''],
      nom:[''],
      adresse:[''],
      tel:[''],
    })
  }
  addenseignant(){
    this.se.addEnseignant(this.enForm.value).subscribe((data)=>{
      this.route.navigate(['enseignant'])
    })
  }

}
