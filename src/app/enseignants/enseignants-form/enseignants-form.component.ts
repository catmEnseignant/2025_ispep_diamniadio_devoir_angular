import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


//import { Router } from 'express';
import { Router } from '@angular/router'; 
import { EnseignantsServiceService } from '../../services/enseignants/enseignants-service.service';

@Component({
  selector: 'app-enseignants-form',
  imports: [ReactiveFormsModule],
  templateUrl: './enseignants-form.component.html',
  styleUrl: './enseignants-form.component.css'
})
export class EnseignantsFormComponent implements OnInit {
  
  enseignantsform:FormGroup
  edit:any
  isedit:any
  enseignantsedit: any;

  

  constructor(private fb:FormBuilder, private enseignantsService: EnseignantsServiceService, private route:Router){
    this.enseignantsform= this.fb.group({})
    
  }
  ngOnInit(): void{
    this.isedit = localStorage.getItem("editEnseignants")
    if(this.isedit == 1){
      this.enseignantsedit = localStorage.getItem('curentEnseignants')
      this.enseignantsedit=JSON.parse(this.enseignantsedit)
      console.log(this.enseignantsedit.nom)
      console.log(this.enseignantsedit)
      this.enseignantsform= this.fb.group({
        numero_carte:[this.enseignantsedit.numero_carte],
        prenom:[this.enseignantsedit.prenom],
        nom:[this.enseignantsedit.nom],
        adresse:[this.enseignantsedit.adresse],
        telephone:[this.enseignantsedit.telephone],
        date_naissance:[this.enseignantsedit. date_naissance]
      })
    }
    else{
      this.enseignantsform= this.fb.group({
        numero_carte:[''],
        prenom:[''],
        nom:[''],
        adresse:[''],
        telephone:[''],
       date_naissance:['']

      })
      
    }
    console.log(this.isedit)  

  }
 
  submitEnseignants(){
    if(this.isedit == 1){
    this.enseignantsService.updateEnseignants(this.enseignantsedit.id,this.enseignantsform.value).subscribe(
      (response) => {
        return this.route.navigate(["/enseignants/enseignants-form"])
      },
      (error) =>{
        console.log(error)
      }
    )
    }else{
      this.enseignantsService.storeEnseignants(this.enseignantsform.value).subscribe(
        (response) => {
          return this.route.navigate(["/enseignants/enseignants_form"])
        },
        (error) =>{
          console.log(error)
        }
      )
    
    }
  }  
}

