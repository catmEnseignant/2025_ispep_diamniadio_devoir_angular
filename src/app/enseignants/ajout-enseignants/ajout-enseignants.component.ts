import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EnseignantService } from '../../services/enseignants/enseignant.service';

@Component({
  selector: 'app-ajout-enseignants',
  imports: [ReactiveFormsModule],
  templateUrl: './ajout-enseignants.component.html',
  styleUrl: './ajout-enseignants.component.css'
})
export class AjoutEnseignantsComponent {
  enseignantform: FormGroup;
  enseignantedit: any;
  isedit: any;

  constructor(private fb: FormBuilder, private enseignantService: EnseignantService, private httpClient: HttpClient) { 
    this.enseignantform = this.fb.group({
      matricule: [''],
      prenom: [''],
      nom: [''],
      telephone: [''],
      adresse: ['']
    });
  }

  ngOnInit(): void {
    this.isedit = localStorage.getItem("edit");
    console.log(this.isedit);
  }

  storeEnseignant() {
    this.enseignantService.storeEnseignant(this.enseignantform.value).subscribe( 
      (response: any) => {
        alert("Succès");
      },
      (error: any) => {
        console.error("Erreur");
      }
    );
  }
}
