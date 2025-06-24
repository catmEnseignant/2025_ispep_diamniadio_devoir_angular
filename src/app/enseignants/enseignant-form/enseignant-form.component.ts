
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EnseignantService } from '../../services/enseignant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-enseignant',
  imports: [ReactiveFormsModule],
  templateUrl: './enseignant-form.component.html',
  styleUrl: './enseignant-form.component.css'
})
export class FormEnseignantComponent implements OnInit {
  enseignantform:FormGroup
   Enseignantedit:any
   isedit:any

  constructor(private fb:FormBuilder, private enseignantService: EnseignantService, private route:Router){
    this.enseignantform= this.fb.group({})

  }
  ngOnInit(): void {

    this.isedit=localStorage.getItem("editEnseignant")
    if (this.isedit == 1 ){
       this.Enseignantedit = localStorage.getItem("curentEnseignant")
       this.Enseignantedit=JSON.parse(this.Enseignantedit)
      console.log(this.Enseignantedit.nom)
      console.log(this.Enseignantedit)

       this.enseignantform = this.fb.group({
           matricule:[this.Enseignantedit.matricule],
           prenom:[this.Enseignantedit.prenom],
           nom:[this.Enseignantedit.nom],
           telephone:[this.Enseignantedit. telephone],
           adresse:[this.Enseignantedit. adresse]

    })
    
    }
    else{
       this.enseignantform = this.fb.group({
       matricule:[''],
       prenom:[''],
       nom:[''],
       telephone:[''],
       adresse:['']
    })

    }
    console.log(this.isedit)
  }
  submitEnseignant(){
    if(this.isedit == 1){
    this.enseignantService.updateEnseignant(this.Enseignantedit.id,this.enseignantform.value).subscribe(
      (response) => {
        return this.route.navigate(["/enseignants/list-enseignants"]);
      },
      (error) =>{
        console.log(error)
      }
    )

  }
  else{
    this.enseignantService.storeEnseignant(this.enseignantform.value).subscribe(
      (response) => {
        return this.route.navigate(["/enseignants/enseignants-list"]);
      },
      (error) =>{
        console.log(error)
      }
    )
  }

 }
}
