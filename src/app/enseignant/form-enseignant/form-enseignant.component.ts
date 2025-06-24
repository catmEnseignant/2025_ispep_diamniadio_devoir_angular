import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EnseignantServiceService } from './../../services/enseignant/enseignant-service.service';

@Component({
  selector: 'app-form-enseignant',
  imports: [ReactiveFormsModule],
  templateUrl: './form-enseignant.component.html',
  styleUrl: './form-enseignant.component.css'
})
export class FormEnseignantComponent implements OnInit{
  
  enseignantForm:FormGroup;
  enseignantEdit : any;
  isEdit : any;

  constructor(private db:FormBuilder, private route:Router, private enseignantService:EnseignantServiceService){
    this.enseignantForm = this.db.group({})
  }

  ngOnInit(): void {
    this.isEdit = localStorage.getItem("edit")
    if(this.isEdit == 1){
      this.enseignantEdit = localStorage.getItem("enseignant")
      this.enseignantEdit = JSON.parse(this.enseignantEdit)
      console.log(this.enseignantEdit.nom)
      console.log(this.enseignantEdit)
      this.enseignantForm = this.db.group({
        prenom:[this.enseignantEdit.prenom],
        nom:[this.enseignantEdit.nom],
        adresse:[this.enseignantEdit.adresse],
        telephone:[this.enseignantEdit.telephone],
        matricule:[this.enseignantEdit.matricule]
      })
    }else{
      this.enseignantForm = this.db.group({
      prenom:['', [Validators.required, Validators.min(4)]],
      nom:['', [Validators.required, Validators.min(4)]],
      adresse:['', [Validators.required, Validators.min(4)]],
      telephone:['', [Validators.required]],
      matricule:['', [Validators.required]]
      })
    }
    console.log(this.isEdit)
  }

  public storeEnseignant () {
    if(this.isEdit == 1){
      this.enseignantService.updateEnseignants(this.enseignantEdit.id, this.enseignantForm.value).subscribe(
        (res) => {
          console.log(res)
          return this.route.navigate(['enseignants/list-enseignant'])
        },
        (er) : void => {
          console.log(er)
        }
      )
    }else{
      this.enseignantService.storeEnseignants(this.enseignantForm.value).subscribe({
        next : (reponse) => {
          console.log(reponse)
          return this.route.navigate(['enseignants/list-enseignant'])
        },
        error : (error) : void => {
          console.log(error)
        }
      })
    }
  }
}
