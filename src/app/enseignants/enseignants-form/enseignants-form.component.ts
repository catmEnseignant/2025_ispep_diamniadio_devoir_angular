import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EnseignantsServiceService } from '../../services/enseignants/enseignants-service.service';
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-enseignants-form',
  imports: [ReactiveFormsModule],
  templateUrl: './enseignants-form.component.html',
  styleUrl: './enseignants-form.component.css'
})
export class EnseignantsFormComponent implements OnInit{

  enseignantsform:FormGroup

  enseignantsedit:any
  isedit:any
  

  constructor(private fb:FormBuilder, private enseignantsService: EnseignantsServiceService, private route:Router){
    
    this.enseignantsform= this.fb.group({})
  }
  ngOnInit(): void{
    this.isedit = localStorage.getItem("editEnseignants")
    if(this.isedit == 1){
      this.enseignantsedit = localStorage.getItem('curentClasse')
      this.enseignantsedit=JSON.parse(this.enseignantsedit)
      console.log(this.enseignantsedit.nom)
      console.log(this.enseignantsedit)
      this.enseignantsform= this.fb.group({
        nom:[this.enseignantsedit.nom],
        niveau:[this.enseignantsedit.niveau],
        serie:[this.enseignantsedit.serie],
        nombres_eleve:[this.enseignantsedit.nombres_enseignant]
      })
    }
    else{
      this.enseignantsform= this.fb.group({
        nom:[''],
        prenom:[''],
        adresse:[''],
        telephone:['']
      })
      
    }
    console.log(this.isedit)
  }
  submitEnseignants(){
    if(this.isedit == 1){
      this.enseignantsService.updateEnseignants(this.enseignantsedit.id,this.enseignantsform.value).subscribe(
        (response) => {
          return this.route.navigate(["/enseignants/enseignants-list"]);
        },
        (error) =>{
          console.log(error)
        }
      )
    }else{  
        this.enseignantsService.storeEnseignants(this.enseignantsform.value).subscribe(
          (response) => {
            return this.route.navigate(["/enseignants/enseignants-list"]);
          },
          (error) =>{
            console.log(error)
          }
        )
    }  
    //console.log(this.enseignantsform.value)
  }

}
