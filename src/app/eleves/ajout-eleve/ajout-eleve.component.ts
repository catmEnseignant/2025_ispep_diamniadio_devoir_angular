import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EleveService } from '../../services/eleves/eleve.service';

@Component({
  selector: 'app-ajout-eleve',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajout-eleve.component.html',
  styleUrl: './ajout-eleve.component.css'
})
export class AjoutEleveComponent {
  eleveform: FormGroup;
  eleveedit: any;
  isedit: any;

  constructor(
    private fb: FormBuilder,
    private eleveService: EleveService,
    private router: Router
  ) {
    this.eleveform = this.fb.group({
      id: [''],
      numero_carte: [''],
      prenom: [''],
      nom: [''],
      adresse: [''],
      telephone: [''],
      date_naissance: [''],
    });
  }

  ngOnInit(): void {
    this.isedit = localStorage.getItem("edit");
    if (this.isedit === "1") {
      this.eleveedit = JSON.parse(localStorage.getItem("eleveCourant") || '{}');
      this.eleveform.patchValue(this.eleveedit);
    }
  }

  storeEleve() {
    
      this.eleveService.addEleve(this.eleveform.value).subscribe( 
      (response: any) => {
        alert("Succès");
      },
      (error: any) => {
        console.error("Erreur");
      }
    );
      }
  
}
